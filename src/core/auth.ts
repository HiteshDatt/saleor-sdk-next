// import {
//   CHANGE_USER_PASSWORD,
//   EXTERNAL_AUTHENTICATION_URL,
//   EXTERNAL_LOGOUT,
//   EXTERNAL_REFRESH,
//   EXTERNAL_VERIFY_TOKEN,
//   LOGIN,
//   OBTAIN_EXTERNAL_ACCESS_TOKEN,
//   REQUEST_PASSWORD_RESET,
//   REFRESH_TOKEN,
//   REGISTER,
//   SET_PASSWORD,
//   VERIFY_TOKEN,
//   REFRESH_TOKEN_WITH_USER,
//   EXTERNAL_REFRESH_WITH_USER,
// } from "../apollo/mutations";
// import {
//   ExternalAuthenticationUrlMutation,
//   ExternalAuthenticationUrlMutationVariables,
//   ExternalLogoutMutation,
//   ExternalLogoutMutationVariables,
//   ExternalObtainAccessTokensMutation,
//   ExternalObtainAccessTokensMutationVariables,
//   ExternalRefreshMutation,
//   ExternalRefreshMutationVariables,
//   ExternalRefreshWithUserMutation,
//   ExternalRefreshWithUserMutationVariables,
//   ExternalVerifyMutation,
//   ExternalVerifyMutationVariables,
//   LoginMutation,
//   LoginMutationVariables,
//   PasswordChangeMutation,
//   PasswordChangeMutationVariables,
//   RefreshTokenMutation,
//   RefreshTokenMutationVariables,
//   RefreshTokenWithUserMutation,
//   RefreshTokenWithUserMutationVariables,
//   RegisterMutation,
//   RegisterMutationVariables,
//   RequestPasswordResetMutation,
//   RequestPasswordResetMutationVariables,
//   SetPasswordMutation,
//   SetPasswordMutationVariables,
//   VerifyTokenMutation,
//   VerifyTokenMutationVariables,
// } from "../apollo/types";
import {
  AccountRegisterV2Mutation,
  AccountRegisterV2MutationVariables,
  CheckoutCustomerAttachNewMutation,
  CheckoutCustomerAttachNewMutationVariables,
  ConfirmAccountV2Mutation,
  ConfirmAccountV2MutationVariables,
  OtpAuthenticationMutation,
  OtpAuthenticationMutationVariables,
  OtpRequestMutation,
  OtpRequestMutationVariables,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
  RefreshTokenWithUserMutation,
  RefreshTokenWithUserMutationVariables,
  UserCheckoutDetailsQuery,
  UserCheckoutDetailsQueryVariables,
  VerifyCheckoutOtpMutation,
  VerifyCheckoutOtpMutationVariables,
  CreateTokenWithoutOtpMutation,
  CreateTokenWithoutOtpMutationVariables,
  CreateTokenTrueCallerMutation,
  CreateTokenTrueCallerMutationVariables,
} from "..";
import {
  checkoutRecalculationUtil,
  setLocalCheckoutInCache,
} from "../apollo/helpers";
import {
  CONFIRM_ACCOUNT,
  CREATE_OTP_TOKEN_MUTATION,
  REFRESH_TOKEN,
  REFRESH_TOKEN_WITH_USER,
  REGISTER_ACCOUNT,
  REQUEST_OTP_MUTATION,
  VERIFY_CHECKOUT_OTP,
  CHECKOUT_CUSTOMER_ATTACH,
  CHECKOUT_CUSTOMER_ATTACH_NEW,
  CREATE_TOKEN_WITHOUT_OTP,
  CREATE_TOKEN_TRUECALLER,
} from "../apollo/mutations";
import { USER, USER_CHECKOUT_DETAILS } from "../apollo/queries";
import { storage } from "./storage";
import {
  CheckoutCustomerAttachResult,
  ConfirmAccountV2Result,
  GetUserCheckoutResult,
  OtpLessLoginResult,
  // ChangePasswordResult,
  // LogoutOpts,
  // GetExternalAccessTokenResult,
  // GetExternalAuthUrlResult,
  // LoginResult,
  // LogoutResult,
  // RefreshExternalTokenResult,
  RefreshTokenResult,
  RegisterAccountV2Result,
  RequestOtpResult,
  // RegisterResult,
  // RequestPasswordResetResult,
  SaleorClientMethodsProps,
  SignInMobileResult,
  SignOutResult,
  TrueCallerLoginResult,
  VerifyCheckoutOTPResult,
  // SetPasswordResult,
  // VerifyExternalTokenResult,
  // VerifyTokenResult,
  // GetExternalAuthUrlOpts,
  // GetExternalAccessTokenOpts,
} from "./types";
// import {
//   ChangePasswordOpts,
//   LoginOpts,
//   RegisterOpts,
//   RequestPasswordResetOpts,
//   SetPasswordOpts,
// } from "./types";
// import { storage } from "./storage";
// import { USER } from "../apollo/queries";

export interface AuthSDK {
  /**
   * Change the password of the logged in user.
   *
   * @param opts - Object with password and new password.
   * @returns Errors if the passoword change has failed.
   */
  // changePassword?: (opts: ChangePasswordOpts) => Promise<ChangePasswordResult>;
  /**
   * Authenticates user with email and password.
   *
   * @param opts - Object with user's email and password.
   * @returns Promise resolved with CreateToken type data.
   */
  // login?: (opts: LoginOpts) => void;
  /**
   * Clears stored token and Apollo store. If external plugin was used to log in, the mutation will prepare
   * the logout URL. All values passed in field input will be added as GET parameters to the logout request.
   *
   * @param opts - Object with input as JSON with returnTo - the URL where a user should be redirected
   * when external plugin was used to log in
   * @returns Logout data and errors if external plugin was used to log in. Otherwise null.
   */
  // logout?: (opts?: LogoutOpts) => Promise<LogoutResult>;
  /**
   * Refresh JWT token. Mutation will try to take refreshToken from the function's arguments.
   * If it fails, it will try to use refreshToken from the http-only cookie called refreshToken.
   *
   * @param includeUser - Whether to fetch user. Default false.
   * @returns Authorization token.
   */
  refreshToken: (includeUser?: boolean, csrftoken?:string | null, refreshtoken?:string | null) => Promise<RefreshTokenResult>;

  /**
   * Registers user with email and password.
   *
   * @param opts - Object with user's data. Email and password are required fields.
   * "channel" can be changed by using first "setChannel" method from api.
   * @returns Promise resolved with AccountRegister type data.
   */
  // register?: (opts: RegisterOpts) => Promise<RegisterResult>;
  /**
   * Sends an email with the account password modification link.
   *
   * @param opts - Object with slug of a channel which will be used for notify user,
   * email of the user that will be used for password recovery and URL of a view
   * where users should be redirected to reset the password. URL in RFC 1808 format.
   *
   * @returns Errors if there were some.
   */
  // requestPasswordReset?: (
  //   opts: RequestPasswordResetOpts
  // ) => Promise<RequestPasswordResetResult>;
  /**
   * Sets the user's password from the token sent by email.
   *
   * @param opts - Object with user's email, password and one-time token required to set the password.
   * @returns User instance, JWT token, JWT refresh token and CSRF token.
   */
  // setPassword?: (opts: SetPasswordOpts) => Promise<SetPasswordResult>;
  /**
   * Verify JWT token.
   *
   * @param token - Token value.
   * @returns User assigned to token and the information if the token is valid or not.
   */
  // verifyToken?: () => Promise<VerifyTokenResult>;
  /**
   * Executing externalAuthenticationUrl mutation will prepare special URL which will redirect user to requested
   * page after successfull authentication. After redirection state and code fields will be added to the URL.
   *
   * @param opts - Object withpluginId default value set as "mirumee.authentication.openidconnect" and input as
   * JSON with redirectUrl - the URL where the user should be redirected after successful authentication.
   * @returns Authentication data and errors
   */
  // getExternalAuthUrl?: (
  //   opts: GetExternalAuthUrlOpts
  // ) => Promise<GetExternalAuthUrlResult>;
  /**
   * The externalObtainAccessTokens mutation will generate requested access tokens.
   *
   * @param opts - Object withpluginId default value set as "mirumee.authentication.openidconnect" and input as
   * JSON with code - the authorization code received from the OAuth provider and state - the state value received
   * from the OAuth provider
   * @returns Login authentication data and errors
   */
  // getExternalAccessToken?: (
  //   opts: GetExternalAccessTokenOpts
  // ) => Promise<GetExternalAccessTokenResult>;
  /**
   * The externalRefresh mutation will generate new access tokens when provided with a valid refresh token.
   *
   * @param includeUser - Whether to fetch user. Default false.
   * @returns Token refresh data and errors
   */
  refreshExternalToken: (includeUser?: boolean) => void;
  /**
   * The mutation will verify the authentication token.
   *
   * @returns Token verification data and errors
   */
  // verifyExternalToken?: () => Promise<VerifyExternalTokenResult>;

  signInMobile: (
    otp: string,
    phone?: string,
    email?: string,
    updateShippingMethod?: boolean,
    isRecalculate?: boolean,
    recalculationQuery?: boolean,
    refreshToken?: boolean
  ) => SignInMobileResult;

  otpLessLogin: (
    waid: string,
    updateShippingMethod?: boolean
  ) => OtpLessLoginResult;

  truecallerLogin: (
    requestId: string,
    accessToken?: string,
    endpoint?: string,
    updateShippingMethod?: boolean
  ) => TrueCallerLoginResult;

  requestOTP: (phone: string) => RequestOtpResult;

  registerAccountV2: (
    email: string,
    phone: string,
    firstName?: string,
    lastName?: string,
    sendWigzoInHeader?: boolean
  ) => RegisterAccountV2Result;

  confirmAccountV2: (
    otp: string,
    phone: string,
    updateShippingMethod?: boolean,
    isRecalculate?: boolean,
    recalculationQuery?: boolean,
    refreshToken?: boolean
  ) => ConfirmAccountV2Result;

  checkoutCustomerAttach: (
    token: string,
    userId: string
  ) => CheckoutCustomerAttachResult;

  verifyCheckoutOTP: (otp: string, phone: string) => VerifyCheckoutOTPResult;

  signOut: () => SignOutResult;

  setToken: (authToken: string, csrfToken: string) => GetUserCheckoutResult;

  getUserCheckout: (
    updateShippingMethod?: boolean,
    isRecalculate?: boolean,
    recalculationQuery?: boolean,
    refreshToken?: boolean
  ) => GetUserCheckoutResult;
}

export const auth = ({
  apolloClient: client,
}: SaleorClientMethodsProps): AuthSDK => {
  const refreshExternalToken = () => {};
  // const refreshToken = () => {};
  const signInMobile: AuthSDK["signInMobile"] = async (
    otp: string,
    phone?: string,
    email?: string,
    updateShippingMethod: boolean = true,
    isRecalculate = true,
    recalculationQuery = false,
    refreshToken = true
  ) => {
    client.writeQuery({
      query: USER,
      data: {
        authenticating: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    const CreateTokenOTPVariables = phone
      ? {
          otp,
          phone,
          checkoutId: checkout?.id,
        }
      : {
          otp,
          email,
          checkoutId: checkout?.id,
        };

    const res = await client.mutate<
      OtpAuthenticationMutation,
      OtpAuthenticationMutationVariables
    >({
      mutation: CREATE_OTP_TOKEN_MUTATION,
      variables: CreateTokenOTPVariables,
      update: (_, { data }) => {
        if (data?.CreateTokenOTP?.token) {
          client.writeQuery({
            query: USER,
            data: {
              userCheckoutLoading: true,
            },
          });
          storage.setTokens({
            accessToken: data.CreateTokenOTP.token,
            csrfToken: data.CreateTokenOTP.csrfToken,
            refreshToken: data.CreateTokenOTP.refreshToken,
          });
          getUserCheckout(
            updateShippingMethod,
            isRecalculate,
            recalculationQuery,
            refreshToken
          );
        } else {
          client.writeQuery({
            query: USER,
            data: {
              authenticating: false,
            },
          });
        }
      },
    });

    if (checkout?.id && res.data?.CreateTokenOTP?.user?.id) {
      client.mutate({
        mutation: CHECKOUT_CUSTOMER_ATTACH,
        variables: {
          checkoutId: checkout.id,
          customerId: res.data.CreateTokenOTP.user.id,
        },
      });
    }

    return res;
  };

  const otpLessLogin: AuthSDK["otpLessLogin"] = async (
    waid: string,
    updateShippingMethod = true
  ) => {
    client.writeQuery({
      query: USER,
      data: {
        authenticating: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
    const CreateTokenWithoutOtpVariables = checkout?.id
      ? {
          checkoutId: checkout?.id,
          waid: waid,
        }
      : {
          waid: waid,
        };
    const res = await client.mutate<
      CreateTokenWithoutOtpMutation,
      CreateTokenWithoutOtpMutationVariables
    >({
      mutation: CREATE_TOKEN_WITHOUT_OTP,
      variables: CreateTokenWithoutOtpVariables,
      update: (_, { data }) => {
        if (data?.CreateTokenWithoutOtp?.token) {
          client.writeQuery({
            query: USER,
            data: {
              userCheckoutLoading: true,
            },
          });
          storage.setTokens({
            accessToken: data.CreateTokenWithoutOtp.token,
            csrfToken: data.CreateTokenWithoutOtp.csrfToken,
            refreshToken: data.CreateTokenWithoutOtp.refreshToken,
          });
          getUserCheckout(updateShippingMethod);
        } else {
          client.writeQuery({
            query: USER,
            data: {
              authenticating: false,
            },
          });
        }
      },
    });

    if (checkout?.id && res.data?.CreateTokenWithoutOtp?.user?.id) {
      client.mutate({
        mutation: CHECKOUT_CUSTOMER_ATTACH,
        variables: {
          checkoutId: checkout.id,
          customerId: res.data.CreateTokenWithoutOtp.user.id,
        },
      });
    }

    return res;
  };

  const truecallerLogin: AuthSDK["truecallerLogin"] = async (
    requestId: string,
    accessToken?: string,
    endpoint?: string,
    updateShippingMethod = true
  ) => {
    if (requestId) {
      client.writeQuery({
        query: USER,
        data: {
          authenticating: true,
        },
      });

      const checkoutString = storage.getCheckout();
      const checkout =
        checkoutString && typeof checkoutString === "string"
          ? JSON.parse(checkoutString)
          : checkoutString;
      let CreateTokenWithTruecallerVariables: CreateTokenTrueCallerMutationVariables = {
        requestId: requestId,
      };

      if (checkout?.id) {
        if (accessToken && endpoint) {
          CreateTokenWithTruecallerVariables = {
            ...CreateTokenWithTruecallerVariables,
            accessToken: accessToken,
            endpoint: endpoint,
            checkoutId: checkout.id,
          };
        }
      } else {
        if (accessToken && endpoint) {
          CreateTokenWithTruecallerVariables = {
            ...CreateTokenWithTruecallerVariables,
            accessToken: accessToken,
            endpoint: endpoint,
          };
        }
      }

      try {
        const res = await client.mutate<
          CreateTokenTrueCallerMutation,
          CreateTokenTrueCallerMutationVariables
        >({
          mutation: CREATE_TOKEN_TRUECALLER,
          variables: CreateTokenWithTruecallerVariables,
          update: (_, { data }) => {
            if (data?.CreateTokenTrueCaller?.token) {
              client.writeQuery({
                query: USER,
                data: {
                  userCheckoutLoading: true,
                },
              });
              storage.setTokens({
                accessToken: data.CreateTokenTrueCaller.token,
                csrfToken: data.CreateTokenTrueCaller.csrfToken,
                refreshToken: data.CreateTokenTrueCaller.refreshToken,
              });
              getUserCheckout(updateShippingMethod);
            } else {
              client.writeQuery({
                query: USER,
                data: {
                  authenticating: false,
                },
              });
            }
          },
        });

        if (checkout?.id && res.data?.CreateTokenTrueCaller?.user?.id) {
          client.mutate({
            mutation: CHECKOUT_CUSTOMER_ATTACH,
            variables: {
              checkoutId: checkout.id,
              customerId: res.data.CreateTokenTrueCaller.user.id,
            },
          });
        }

        return res;
      } catch (error) {
        client.writeQuery({
          query: USER,
          data: {
            authenticating: false,
          },
        });
      }
    }

    return null;
  };

  const requestOTP: AuthSDK["requestOTP"] = async (phone: string) => {
    const res = await client.mutate<
      OtpRequestMutation,
      OtpRequestMutationVariables
    >({
      mutation: REQUEST_OTP_MUTATION,
      variables: {
        phone,
      },
    });

    return res;
  };

  const registerAccountV2: AuthSDK["registerAccountV2"] = async (
    email: string,
    phone: string,
    firstName?: string,
    lastName?: string,
    sendWigzoInHeader?: boolean
  ) => {
    let res;
    if (sendWigzoInHeader) {
      let wigzo_learner_id;
      if (typeof window !== "undefined") {
        const getCookie = (name: any) => {
          // Split cookie string and get all individual name=value pairs in an array
          const cookieArr = document.cookie.split(";");

          // Loop through the array elements
          for (let i = 0; i < cookieArr.length; i++) {
            const cookiePair: any = cookieArr[i].split("=");

            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if (name == cookiePair[0].trim()) {
              // Decode the cookie value and return
              return decodeURIComponent(cookiePair[1]);
            }
          }

          // Return null if not found
          return null;
        };
        wigzo_learner_id = getCookie("WIGZO_LEARNER_ID");
      }
      res = await client.mutate<
        AccountRegisterV2Mutation,
        AccountRegisterV2MutationVariables
      >({
        mutation: REGISTER_ACCOUNT,
        variables: {
          input: {
            email,
            phone,
            firstName,
            lastName,
          },
        },
        context: {
          headers: {
            "x-wigzo-learner-id": `${wigzo_learner_id}`, // this header will reach the server
          },
        },
      });
    } else {
      res = await client.mutate<
        AccountRegisterV2Mutation,
        AccountRegisterV2MutationVariables
      >({
        mutation: REGISTER_ACCOUNT,
        variables: {
          input: {
            email,
            phone,
            firstName,
            lastName,
          },
        },
      });
    }

    return res;
  };

  const confirmAccountV2: AuthSDK["confirmAccountV2"] = async (
    otp: string,
    phone: string,
    updateShippingMethod = true,
    isRecalculate = true,
    recalculationQuery = false,
    refreshToken = true
  ) => {
    client.writeQuery({
      query: USER,
      data: {
        authenticating: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    const res = await client.mutate<
      ConfirmAccountV2Mutation,
      ConfirmAccountV2MutationVariables
    >({
      mutation: CONFIRM_ACCOUNT,
      variables: {
        otp,
        phone,
        checkoutId: checkout?.id,
      },
      update: (_, { data }) => {
        if (data?.confirmAccountV2?.token) {
          client.writeQuery({
            query: USER,
            data: {
              userCheckoutLoading: true,
            },
          });
          storage.setTokens({
            accessToken: data.confirmAccountV2.token,
            csrfToken: data.confirmAccountV2.csrfToken,
            refreshToken: data.confirmAccountV2.refreshToken,
          });
          getUserCheckout(
            updateShippingMethod,
            isRecalculate,
            recalculationQuery,
            refreshToken
          );
        } else {
          client.writeQuery({
            query: USER,
            data: {
              authenticating: false,
            },
          });
        }
      },
    });

    if (checkout?.id && res.data?.confirmAccountV2?.user?.id) {
      client.mutate({
        mutation: CHECKOUT_CUSTOMER_ATTACH,
        variables: {
          checkoutId: checkout.id,
          customerId: res.data.confirmAccountV2.user.id,
        },
      });
    }

    return res;
  };

  const checkoutCustomerAttach: AuthSDK["checkoutCustomerAttach"] = async (
    token: string,
    userId: string
  ) => {
    //Convert token to id
    const checkoutId = token && btoa(`Checkout:${token}`);

    if (checkoutId && userId) {
      const res = await client.mutate<
        CheckoutCustomerAttachNewMutation,
        CheckoutCustomerAttachNewMutationVariables
      >({
        mutation: CHECKOUT_CUSTOMER_ATTACH_NEW,
        variables: {
          checkoutId: checkoutId,
          customerId: userId,
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(
            client,
            data?.checkoutCustomerAttach?.checkout,
            true
          );
          if (data?.checkoutCustomerAttach?.checkout?.id) {
            storage.setCheckout(data?.checkoutCustomerAttach?.checkout);
          }
        },
      });

      return res;
    }
    return null;
  };

  const verifyCheckoutOTP: AuthSDK["verifyCheckoutOTP"] = async (
    otp: string,
    phone: string
  ) => {
    const res = await client.mutate<
      VerifyCheckoutOtpMutation,
      VerifyCheckoutOtpMutationVariables
    >({
      mutation: VERIFY_CHECKOUT_OTP,
      variables: {
        otp,
        phone,
      },
    });

    return res;
  };

  const signOut: AuthSDK["signOut"] = async () => {
    storage.clear();
    const res = await client.resetStore();
    return res;
  };

  const setToken: AuthSDK["setToken"] = async (
    authToken: string,
    csrfToken: string
  ) => {
    storage.setTokens({
      accessToken: authToken,
      csrfToken: csrfToken,
    });
    client.writeQuery({
      query: USER,
      data: {
        userCheckoutLoading: true,
      },
    });
    const res = await getUserCheckout();
    return res;
  };

  const getUserCheckout: AuthSDK["getUserCheckout"] = async (
    updateShippingMethod: boolean = true,
    isRecalculate = true,
    recalculationQuery = false,
    refreshToken = true
  ) => {
    const checkoutTag = process.env.NEXT_PUBLIC_CHECKOUT_TAG;
    const tag=process.env.checkoutTag;

    const finalCheckoutTag = checkoutTag || tag ;
    const res = await client.mutate<
      UserCheckoutDetailsQuery,
      UserCheckoutDetailsQueryVariables
    >({
      mutation: USER_CHECKOUT_DETAILS,
      variables: finalCheckoutTag ? { checkoutTag:finalCheckoutTag } : {},
    });

    if (res?.data?.me?.checkout?.id) {
      storage.setCheckout(res?.data?.me?.checkout);
      await setLocalCheckoutInCache(
        client,
        res?.data?.me?.checkout,
        updateShippingMethod,
        null,
        isRecalculate
      );
      if (recalculationQuery) {
        await checkoutRecalculationUtil(client, refreshToken);
      }
    }
    client.writeQuery({
      query: USER,
      data: {
        userCheckoutLoading: false,
      },
    });

    return res;
  };

  // const logout: AuthSDK["logout"] = async opts => {
  //   const authPluginId = storage.getAuthPluginId();

  //   if (authPluginId && !opts?.input) {
  //     throw Error(
  //       "input should be provided when logged in with external plugin"
  //     );
  //   }

  //   storage.clear();

  //   client.writeQuery({
  //     query: USER,
  //     data: {
  //       authenticating: false,
  //     },
  //   });

  //   client.resetStore();

  //   if (authPluginId && opts?.input) {
  //     const result = await client.mutate<
  //       ExternalLogoutMutation,
  //       ExternalLogoutMutationVariables
  //     >({
  //       mutation: EXTERNAL_LOGOUT,
  //       variables: {
  //         ...opts,
  //         pluginId: authPluginId,
  //       },
  //     });
  //     return result;
  //   }
  //   return null;
  // };

  // const register: AuthSDK["register"] = async opts =>
  //   await client.mutate<RegisterMutation, RegisterMutationVariables>({
  //     mutation: REGISTER,
  //     variables: {
  //       input: {
  //         ...opts,
  //         channel,
  //       },
  //     },
  //   });

  const refreshToken: AuthSDK["refreshToken"] = (includeUser = false, csrftoken = null, refreshtoken = null) => {
    const csrfToken = !!csrftoken ? csrftoken : storage.getCSRFToken();
    const refreshToken = !!refreshtoken ? refreshtoken : storage.getRefreshToken();

    if (!csrfToken) {
      throw Error("csrfToken not present");
    }

    if (includeUser) {
      return client.mutate<
        RefreshTokenWithUserMutation,
        RefreshTokenWithUserMutationVariables
      >({
        mutation: REFRESH_TOKEN_WITH_USER,
        variables: {
          csrfToken,
          refreshToken,
        },
        update: (_, { data }) => {
          if (data?.tokenRefresh?.token) {
            client.writeQuery({
              query: USER,
              data: {
                userCheckoutLoading: true,
              },
            });
            storage.setAccessToken(data.tokenRefresh.token);
            getUserCheckout(false);
          } else {
            signOut();
          }
        },
      });
    }

    return client.mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
      mutation: REFRESH_TOKEN,
      variables: {
        csrfToken,
        refreshToken,
      },
      update: (_, { data }) => {
        if (data?.tokenRefresh?.token) {
          storage.setAccessToken(data.tokenRefresh.token);
          getUserCheckout(false);
        } else {
          signOut();
        }
      },
    });
  };

  // const verifyToken: AuthSDK["verifyToken"] = async () => {
  //   const token = storage.getAccessToken();

  //   if (!token) {
  //     throw Error("Token not present");
  //   }

  //   const result = await client.mutate<
  //     VerifyTokenMutation,
  //     VerifyTokenMutationVariables
  //   >({
  //     mutation: VERIFY_TOKEN,
  //     variables: { token },
  //   });

  //   if (!result.data?.tokenVerify?.isValid) {
  //     logout();
  //   }

  //   return result;
  // };

  // const changePassword: AuthSDK["changePassword"] = async opts => {
  //   const result = await client.mutate<
  //     PasswordChangeMutation,
  //     PasswordChangeMutationVariables
  //   >({
  //     mutation: CHANGE_USER_PASSWORD,
  //     variables: { ...opts },
  //   });

  //   return result;
  // };

  // const requestPasswordReset: AuthSDK["requestPasswordReset"] = async opts => {
  //   const result = await client.mutate<
  //     RequestPasswordResetMutation,
  //     RequestPasswordResetMutationVariables
  //   >({
  //     mutation: REQUEST_PASSWORD_RESET,
  //     variables: { ...opts, channel },
  //   });

  //   return result;
  // };

  // const setPassword: AuthSDK["setPassword"] = opts => {
  //   return client.mutate<SetPasswordMutation, SetPasswordMutationVariables>({
  //     mutation: SET_PASSWORD,
  //     variables: { ...opts },
  //     update: (_, { data }) => {
  //       if (data?.setPassword?.token) {
  //         storage.setTokens({
  //           accessToken: data.setPassword.token,
  //           csrfToken: data.setPassword.csrfToken || null,
  //         });
  //       }
  //     },
  //   });
  // };

  // const getExternalAuthUrl: AuthSDK["getExternalAuthUrl"] = async opts => {
  //   const result = await client.mutate<
  //     ExternalAuthenticationUrlMutation,
  //     ExternalAuthenticationUrlMutationVariables
  //   >({
  //     mutation: EXTERNAL_AUTHENTICATION_URL,
  //     variables: { ...opts },
  //   });

  //   return result;
  // };

  // const getExternalAccessToken: AuthSDK["getExternalAccessToken"] = opts => {
  //   client.writeQuery({
  //     query: USER,
  //     data: {
  //       authenticating: true,
  //     },
  //   });

  //   return client.mutate<
  //     ExternalObtainAccessTokensMutation,
  //     ExternalObtainAccessTokensMutationVariables
  //   >({
  //     mutation: OBTAIN_EXTERNAL_ACCESS_TOKEN,
  //     variables: {
  //       ...opts,
  //     },
  //     update: (_, { data }) => {
  //       if (data?.externalObtainAccessTokens?.token) {
  //         storage.setAuthPluginId(opts.pluginId);
  //         storage.setTokens({
  //           accessToken: data.externalObtainAccessTokens.token,
  //           csrfToken: data.externalObtainAccessTokens.csrfToken || null,
  //         });
  //       } else {
  //         client.writeQuery({
  //           query: USER,
  //           data: {
  //             authenticating: false,
  //           },
  //         });
  //       }
  //     },
  //   });
  // };

  // const refreshExternalToken: AuthSDK["refreshExternalToken"] = (
  //   includeUser = false
  // ) => {
  //   const csrfToken = storage.getCSRFToken();
  //   const authPluginId = storage.getAuthPluginId();

  //   if (!csrfToken) {
  //     throw Error("csrfToken not present");
  //   }

  //   if (includeUser) {
  //     return client.mutate<
  //       ExternalRefreshWithUserMutation,
  //       ExternalRefreshWithUserMutationVariables
  //     >({
  //       mutation: EXTERNAL_REFRESH_WITH_USER,
  //       variables: {
  //         pluginId: authPluginId,
  //         input: JSON.stringify({
  //           csrfToken,
  //         }),
  //       },
  //       update: (_, { data }) => {
  //         if (data?.externalRefresh?.token) {
  //           storage.setTokens({
  //             accessToken: data.externalRefresh.token,
  //             csrfToken: data.externalRefresh.csrfToken || null,
  //           });
  //         } else {
  //           logout();
  //         }
  //       },
  //     });
  //   }

  //   return client.mutate<
  //     ExternalRefreshMutation,
  //     ExternalRefreshMutationVariables
  //   >({
  //     mutation: EXTERNAL_REFRESH,
  //     variables: {
  //       pluginId: authPluginId,
  //       input: JSON.stringify({
  //         csrfToken,
  //       }),
  //     },
  //     update: (_, { data }) => {
  //       if (data?.externalRefresh?.token) {
  //         storage.setTokens({
  //           accessToken: data.externalRefresh.token,
  //           csrfToken: data.externalRefresh.csrfToken || null,
  //         });
  //       } else {
  //         logout();
  //       }
  //     },
  //   });
  // };

  // const verifyExternalToken: AuthSDK["verifyExternalToken"] = async () => {
  //   const csrfToken = storage.getCSRFToken();
  //   const authPluginId = storage.getAuthPluginId();

  //   if (!csrfToken) {
  //     throw Error("csrfToken not present");
  //   }

  //   const result = await client.mutate<
  //     ExternalVerifyMutation,
  //     ExternalVerifyMutationVariables
  //   >({
  //     mutation: EXTERNAL_VERIFY_TOKEN,
  //     variables: {
  //       pluginId: authPluginId,
  //       input: JSON.stringify({
  //         csrfToken,
  //       }),
  //     },
  //   });

  //   if (!result.data?.externalVerify?.isValid) {
  //     storage.clear();
  //   }

  //   return result;
  // };

  return {
    refreshExternalToken,
    refreshToken,
    signInMobile,
    requestOTP,
    registerAccountV2,
    confirmAccountV2,
    signOut,
    checkoutCustomerAttach,
    setToken,
    getUserCheckout,
    verifyCheckoutOTP,
    otpLessLogin,
    truecallerLogin,
  };
};
