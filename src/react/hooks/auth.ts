import { USER } from "../../apollo/queries";
import { SaleorContext } from "../components";
import { useContext } from "react";
import {
  ApolloQueryResult,
} from "@apollo/client";
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


export const useRefetchUser = () => {
  const saleorClient = useContext(SaleorContext);

  if (!saleorClient) {
    throw new Error("SaleorClient not found in context.");
  }

  const refetchUser = (): Promise<ApolloQueryResult<UserDetailsQuery>> => {
    return saleorClient._internal.apolloClient.query<UserDetailsQuery, UserDetailsQueryVariables>({
      query: USER,
      fetchPolicy: "network-only", // 🔄 always go to network
    });
  };

  return { refetchUser };
};