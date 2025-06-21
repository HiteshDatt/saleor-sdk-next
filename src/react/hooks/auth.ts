import { USER } from "../../apollo/queries";
import {
  UserDetailsQuery,
  UserDetailsQueryVariables,
} from "../../apollo/types";
import { hookFactory } from "../helpers/hookFactory";
import { hookStateFactory } from "../helpers/hookStateFactory";

/**
 * React hook to get authorization methods
 *
 * @returns Saleor's authorization methods
 */
export const useAuth = hookFactory("auth");

/**
 * React hook to get user's authentication data.
 *
 * @returns Object with user's data
 */
export const useAuthState = (): UserDetailsQuery => {
  const res = hookStateFactory<UserDetailsQuery, UserDetailsQueryVariables>(
    USER
  );
  const { data } = res;
    console.log("user res", data);

  if (!data) {
    // throw new Error(
    //   "Cache query result is undefined. Invalid cache configuration."
    // );
    if(typeof window !== "undefined") {
        window.localStorage?.clear();
        window.location?.reload();
      }
  }

  return data || { authenticated: false, authenticating: false, user: null, userCheckoutLoading: false };
};
