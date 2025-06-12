import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  Reference,
  FetchResult,
  makeVar,
} from "@apollo/client";
import fetch from "cross-fetch";
import jwtDecode from "jwt-decode";

import { TypedTypePolicies } from "./apollo-helpers";
import { JWTToken } from "../core";
import { AuthSDK, auth } from "../core/auth";
import { storage } from "../core/storage";
import {
  CheckoutLineFragment,
  // ExternalRefreshMutation,
  Maybe,
  RefreshTokenMutation,
} from "./types";
// import { UpdateCheckoutLine_checkoutLinesUpdate_checkout_lines } from "./cartTypes";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";
import { REST_API_METHODS_TYPES } from "../constants";

let client: ApolloClient<NormalizedCacheObject>;
let authClient: AuthSDK;

let refreshPromise: ReturnType<AuthSDK["refreshToken"]> | null = null;
// const isTokenRefreshExternal = (
//   result: RefreshTokenMutation | ExternalRefreshMutation
// ): result is ExternalRefreshMutation => "externalRefresh" in result;

export type FetchConfig = Partial<{
  /**
   * Enable auto token refreshing. Default to `true`.
   */
  autoTokenRefresh: boolean;
  /**
   * Set a value for skew between local time and token expiration date in
   * seconds (only together with `autoTokenRefresh`). Defaults to `120`.
   */
  tokenRefreshTimeSkew: number;
  /**
   * Refresh token and retry the request when Saleor responds with `Unauthorized` error.
   * Defaults to `true`.
   */
  refreshOnUnauthorized: boolean;
}>;

let renewTimeQueue: any = [];

export const createFetch = ({
  autoTokenRefresh = true,
  tokenRefreshTimeSkew = 120,
  refreshOnUnauthorized = true,
}: FetchConfig = {}) => async (
  input: RequestInfo,
  init: RequestInit = {}
): Promise<Response> => {
  function shouldThrottleRenew(renewTimeQueue: any) {
    let shoudlThrottleRenew = false;
    renewTimeQueue.push(Date.now());
    if (renewTimeQueue?.length == 5) {
      // get and remove first item from queue
      const firstTime = renewTimeQueue[0];
      const lastTime = renewTimeQueue[renewTimeQueue.length - 1];
      shoudlThrottleRenew = lastTime - firstTime < 20 * 1000;
    } else if (renewTimeQueue?.length > 5) {
      //empty if interval is more than 20s
      const firstTime = renewTimeQueue[0];
      const lastTime = renewTimeQueue[renewTimeQueue.length - 1];
      if (lastTime - firstTime > 20 * 1000) {
        renewTimeQueue.splice(0, renewTimeQueue.length);
        shoudlThrottleRenew = false;
      } else {
        shoudlThrottleRenew = true;
      }
    }
    return shoudlThrottleRenew;
  }

  if (!client) {
    throw new Error(
      "Could not find Saleor's client instance. Did you forget to call createSaleorClient()?"
    );
  }

  let token = storage.getAccessToken();
  // const authPluginId = storage.getAuthPluginId();

  try {
    if (
      ["refreshToken", "externalRefresh"].includes(
        // INFO: Non-null assertion is enabled because the block is wrapped inside try/catch
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        JSON.parse(init.body!.toString()).operationName
      )
    ) {
      return fetch(input, init);
    }
  } catch (e) {}

  if (autoTokenRefresh && token) {
    // auto refresh token before provided time skew (in seconds) until it expires
    const expirationTime =
      (jwtDecode<JWTToken>(token).exp - tokenRefreshTimeSkew) * 1000;

    try {
      if (refreshPromise) {
        await refreshPromise;
      } else if (Date.now() >= expirationTime) {
        // refreshToken automatically updates token in storage
        if (shouldThrottleRenew(renewTimeQueue)) {
          if (renewTimeQueue?.length == 5) {
            //THROW ERROR
            alert(
              "Incorrect system time detected. Please update your time settings."
            );
          }
        } else {
          refreshPromise = authClient.refreshToken();
          await refreshPromise;
        }
      }
    } catch (e) {
    } finally {
      refreshPromise = null;
    }
    token = storage.getAccessToken();
  }

  if (token) {
    init.headers = {
      ...init.headers,
      Authorization: `JWT ${token}`,
    };
  }

  if (refreshOnUnauthorized && token) {
    const response = await fetch(input, init);
    const data: FetchResult = await response.clone().json();
    const isUnauthenticated = data?.errors?.some(
      error => error.extensions?.exception.code === "ExpiredSignatureError"
    );
    let refreshTokenResponse: FetchResult<
      RefreshTokenMutation,
      Record<string, unknown>,
      Record<string, unknown>
    > | null = null;

    if (isUnauthenticated) {
      try {
        if (refreshPromise) {
          refreshTokenResponse = await refreshPromise;
        } else {
          refreshPromise = authClient.refreshToken();
          refreshTokenResponse = await refreshPromise;
        }

        if (
          refreshTokenResponse.data &&
          refreshTokenResponse.data?.tokenRefresh?.token
        ) {
          // check if mutation returns a valid token after refresh and retry the request
          return createFetch({
            autoTokenRefresh: false,
            refreshOnUnauthorized: false,
          })(input, init);
        } else {
          // after Saleor returns ExpiredSignatureError status and token refresh fails
          // we log out the user and return the failed response
          authClient.signOut();
        }
      } catch (e) {
      } finally {
        refreshPromise = null;
      }
    }

    return response;
  }

  return fetch(input, init);
};

export const cartItemsVar = makeVar<Maybe<CheckoutLineFragment>[]>([]);

const getTypePolicies = (autologin: boolean): TypedTypePolicies => ({
  Query: {
    fields: {
      authenticated: {
        read(_, { readField, toReference }): boolean {
          return !!readField(
            "id",
            toReference({
              __typename: "User",
            })
          );
        },
      },
      me: {
        read(_, { toReference, canRead }): Reference | undefined | null {
          const ref = toReference({
            __typename: "User",
          });
          return canRead(ref) ? ref : null;
        },
      },
      authenticating: {
        read(
          read = autologin && !!storage.getCSRFToken(),
          { readField }
        ): boolean {
          if (readField("authenticated")) {
            return false;
          }

          return read;
        },
      },
      checkout: {
        read(_, { toReference, canRead }): Reference | undefined | null {
          const ref = toReference({
            __typename: "CheckoutLinesUpdate",
          });

          return canRead(ref) ? ref : null;
        },
      },
      checkoutUpdated: {
        read(): boolean {
          return true;
        },
      },
      cartItems: {
        read() {
          const cartItems = cartItemsVar();

          return cartItems;
        },
      },
      localCheckout: {
        read(existing) {
          if (!existing) {
            const checkoutString = storage.getCheckout();
            const checkout =
              checkoutString && typeof checkoutString === "string"
                ? JSON.parse(checkoutString)
                : checkoutString;

            console.log("localCheckout checkout sdk", existing, checkout);
            if (checkout) {
              return checkout;
            }

            return {
              items: [],
              totalPrice: 0,
              subtotalPrice: 0,
              shippingPrice: 0,
            };
          }
          if (existing !== null) {
            return existing;
          }

          return {
            items: [],
            totalPrice: 0,
            subtotalPrice: 0,
            shippingPrice: 0,
          };
        },
      },

      localCheckoutDiscounts: {
        read(existing) {
          if (!existing) {
            const discountsString = storage.getDiscounts();
            const discounts =
              discountsString && typeof discountsString === "string"
                ? JSON.parse(discountsString)
                : discountsString;

            return (
              discounts?.checkoutDiscounts || {
                prepaidDiscount: "0",
                couponDiscount: "0",
                cashbackDiscount: "0",
              }
            );
          }
          return (
            existing || {
              prepaidDiscount: "0",
              couponDiscount: "0",
              cashbackDiscount: "0",
            }
          );
        },
      },
      localCashback: {
        read(existing) {
          if (!existing) {
            const discountsString = storage.getDiscounts();
            const discounts =
              discountsString && typeof discountsString === "string"
                ? JSON.parse(discountsString)
                : discountsString;

            return (
              discounts?.cashback || {
                amount: "0",
                willAddOn: null,
              }
            );
          }
          return (
            existing || {
              amount: "0",
              willAddOn: null,
            }
          );
        },
      },
      useCashback: {
        read(existing) {
          if (existing === null || existing === undefined) {
            const useCashbackString = storage.getUseCashback();
            const useCashbackBollean = useCashbackString === "true";
            return useCashbackBollean;
          }
          return existing;
        },
      },
      checkoutLoading: {
        read(existing) {
          console.log("checkoutLoading sdk", existing);
          if (existing === undefined || existing === null) {
            console.log("checkoutLoading sdk if 1", existing);

            return false;
          }

          if (!existing) {
            console.log("checkoutLoading sdk if 2", existing);

            return false;
          }

          return existing;
        },
      },

      userCheckoutLoading: {
        read(existing) {
          if (existing === undefined || existing === null || !existing) {
            return false;
          }
          return existing;
        },
      },
      userWalletBalance: {
        read(existing) {
          if (!existing) {
            return 0;
          }
          return existing;
        },
      },
      recentOrder: {
        read(existing) {
          console.log("existing 1", existing);
          if (!existing) {
            console.log("existing 2", existing);
            return {};
          }

          return existing;
        },
      },
    },
  },
  User: {
    /**
     * IMPORTANT
     * This works as long as we have 1 User cache object which is the current logged in User.
     * If the client should ever fetch additional Users, this should be removed
     * and the login methods (token create or verify) should be responsible for writing USER query cache manually.
     */
    keyFields: [],
    fields: {
      addresses: {
        merge: false,
      },
    },
  },
});

export const createApolloClient = (
  apiUrl: string,
  autologin: boolean,
  fetchOptions?: FetchConfig
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink({
    fetch: createFetch(fetchOptions),
    uri: apiUrl,
    credentials: "include",
  });

  const cache = new InMemoryCache({
    typePolicies: getTypePolicies(autologin),
  });

  const authLink = setContext(async (_, { headers }) => {
    let ip, fbp, fbc;
    if (typeof window !== "undefined") {
      function getCookie(name: any) {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");

        // Loop through the array elements
        for (var i = 0; i < cookieArr.length; i++) {
          var cookiePair: any = cookieArr[i].split("=");

          /* Removing whitespace at the beginning of the cookie name
          and compare it with the given string */
          if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
          }
        }

        // Return null if not found
        return null;
      }
      ip = sessionStorage.getItem("ip");
      fbp = getCookie("_fbp");
      fbc = getCookie("_fbc");
    }

    return {
      headers: {
        ...headers,
        event_source_url:
          typeof window !== "undefined" ? window.location.href : "",
        "x-client-ip-address": ip || "",
        "x-client-user-agent":
          typeof window !== "undefined" ? window.navigator.userAgent : "",
        "x-fbp": fbp || "",
        "x-fbc": fbc || "",
      },
    };
  });

  client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
  });

  /**
   * Refreshing token code should stay under core/auth.ts To get this method available,
   * we need to call "auth()" here. refreshToken mutation doesn't require channel, so it
   * doesn't have to be populated with value.
   */
  authClient = auth({ apolloClient: client, channel: "" });

  return client;
};

export async function axiosRequest(
  url: string,
  method: string | undefined = REST_API_METHODS_TYPES.GET,
  data: {} | undefined = {},
  options: any = {}
) {
  //Custom additional headers
  let ip, fbp, fbc;
  if (typeof window !== "undefined") {
    function getCookie(name: any) {
      // Split cookie string and get all individual name=value pairs in an array
      var cookieArr = document.cookie.split(";");

      // Loop through the array elements
      for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair: any = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
        }
      }

      // Return null if not found
      return null;
    }
    ip = sessionStorage.getItem("ip");
    fbp = getCookie("_fbp");
    fbc = getCookie("_fbc");
  }

  let userSpecificHeaders = {};
  const token = storage.getAccessToken();
  if (token) {
    userSpecificHeaders = {
      ...userSpecificHeaders,
      Authorization: `JWT ${token}`,
    };
  }

  let customRequestHeaders = {
    event_source_url: typeof window !== "undefined" ? window.location.href : "",
    "x-client-ip-address": ip || "",
    "x-client-user-agent":
      typeof window !== "undefined" ? window.navigator.userAgent : "",
    "x-fbp": fbp || "",
    "x-fbc": fbc || "",
  };

  if (options?.headers) {
    customRequestHeaders = {
      ...customRequestHeaders,
      ...options.headers,
    };
  }

  if (url && method) {
    try {
      const response = await axios({
        url,
        method,
        data,
        headers: { ...userSpecificHeaders, ...customRequestHeaders },
        ...options,
      });

      return response;
    } catch (error) {
      console.log("Error occurred in axiosRequest", error);
      return;
    }
  }
  return null;
}
