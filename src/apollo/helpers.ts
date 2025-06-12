import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION_NEXT } from ".";
import { storage } from "../core/storage";
import {
  CHECKOUT_DETAILS_NEXT,
  CHECKOUT_RECALCULATION,
  CHECKOUT_PAYMENTS_NEXT,
  GET_DISCOUNT_CASHBACK_QUERY,
  GET_LOCAL_CHECKOUT,
} from "./queries";
import {
  Checkout,
  CheckoutDetailsNextQuery,
  CheckoutDetailsNextQueryVariables,
  CheckoutRecalculationQuery,
  CheckoutRecalculationQueryVariables,
  CheckoutPaymentsNextQuery,
  CheckoutPaymentsNextQueryVariables,
  CompleteCheckoutMutation,
  UpdateCheckoutShippingMethodNextMutation,
  UpdateCheckoutShippingMethodNextMutationVariables,
} from "./types";
import {
  DiscountsAndCashbackQuery,
  DiscountsAndCashbackQueryVariables,
} from "./types/DiscountsAndCashbackQuery";

export const setLocalCheckoutInCache = async (
  client: ApolloClient<NormalizedCacheObject>,
  checkout: any,
  fetchDiscount?: boolean,
  orderPlaced?: CompleteCheckoutMutation | null | undefined,
  isRecalculate = true
) => {
  console.log("setLocalCheckoutInCache", checkout);
  client.writeQuery({
    query: GET_LOCAL_CHECKOUT,
    data: {
      localCheckout: checkout,
    },
  });

  if (orderPlaced) {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        recentOrder: orderPlaced.checkoutComplete?.order,
      },
    });
  }

  if (
    checkout &&
    Object.keys(checkout).length === 0 &&
    Object.getPrototypeOf(checkout) === Object.prototype
  ) {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        localCheckout: {
          items: [],
          totalPrice: 0,
          subtotalPrice: 0,
          shippingPrice: 0,
        },
        localCheckoutDiscounts: {
          prepaidDiscount: "0",
          couponDiscount: "0",
          cashbackDiscount: "0",
          platformCharge: "0",
        },
        localCashback: {
          amount: "0",
          willAddOn: null,
        },
      },
    });
  } else if (fetchDiscount && checkout?.token) {
    if (checkout.availableShippingMethods[0]?.id) {
      const variables: UpdateCheckoutShippingMethodNextMutationVariables = {
        checkoutId: checkout?.id,
        shippingMethodId: checkout.availableShippingMethods[0]?.id,
        isRecalculate,
      };

      try {
        const resShipping = await client.mutate<
          UpdateCheckoutShippingMethodNextMutation,
          UpdateCheckoutShippingMethodNextMutationVariables
        >({
          mutation: UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION_NEXT,
          variables,
        });

        if (
          resShipping.data?.checkoutShippingMethodUpdate?.errors &&
          resShipping.data?.checkoutShippingMethodUpdate?.errors[0]?.code ===
            "NOT_FOUND" &&
          resShipping.data?.checkoutShippingMethodUpdate?.errors[0]?.field ===
            "checkoutId" &&
          typeof window !== "undefined"
        ) {
          window.localStorage?.clear();
          window.location?.reload();
          return;
        }

        if (!resShipping.data?.checkoutShippingMethodUpdate?.checkout?.id) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return;
        }

        // const res = await client.query<
        //   DiscountsAndCashbackQuery,
        //   DiscountsAndCashbackQueryVariables
        // >({
        //   query: GET_DISCOUNT_CASHBACK_QUERY,
        //   variables: {
        //     token: checkout?.token,
        //   },
        //   fetchPolicy: "network-only",
        // });

        const res = {
          data: {
            checkoutDiscounts: {
              __typename: "DiscountsType",
              prepaidDiscount:
                resShipping.data?.checkoutShippingMethodUpdate?.checkout
                  ?.paymentMethod?.prepaidDiscountAmount,
              couponDiscount:
                resShipping.data?.checkoutShippingMethodUpdate?.checkout
                  ?.paymentMethod?.couponDiscount,
              cashbackDiscount:
                resShipping.data?.checkoutShippingMethodUpdate?.checkout
                  ?.paymentMethod?.cashbackDiscountAmount,
            },
            cashback:
              resShipping.data?.checkoutShippingMethodUpdate?.checkout
                ?.cashback,
          },
        };

        storage.setCheckout(
          resShipping.data?.checkoutShippingMethodUpdate?.checkout
        );
        storage.setDiscounts(res.data);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout:
              resShipping.data?.checkoutShippingMethodUpdate?.checkout,
            localCheckoutDiscounts: res.data.checkoutDiscounts,
            localCashback: res.data.cashback,
          },
        });
      } catch {
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return;
      }
    } else {
      const res = await client.query<
        DiscountsAndCashbackQuery,
        DiscountsAndCashbackQueryVariables
      >({
        query: GET_DISCOUNT_CASHBACK_QUERY,
        variables: {
          token: checkout?.token,
        },
        fetchPolicy: "network-only",
      });

      storage.setDiscounts(res.data);
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          localCheckout: checkout,
          localCheckoutDiscounts: res.data.checkoutDiscounts,
          localCashback: res.data.cashback,
        },
      });
    }
  } else if (checkout?.token && checkout?.paymentMethod && checkout?.cashback) {
    const resDiscount = {
      data: {
        __typename: "DiscountsType",
        checkoutDiscounts: {
          prepaidDiscount: checkout?.paymentMethod?.prepaidDiscountAmount,
          couponDiscount: checkout?.paymentMethod?.couponDiscount,
          cashbackDiscount: checkout?.paymentMethod?.cashbackDiscountAmount,
        },
        cashback: checkout?.cashback,
      },
    };
    storage.setDiscounts(resDiscount.data);
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        localCheckout: checkout,
        localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
        localCashback: resDiscount.data.cashback,
      },
    });
  }

  client.writeQuery({
    query: GET_LOCAL_CHECKOUT,
    data: {
      checkoutLoading: false,
    },
  });
};

export const getLatestCheckout = async (
  client: ApolloClient<NormalizedCacheObject>,
  checkout: any
) => {
  if (checkout?.token) {
    const checkoutDetailRes = await client.query<
      CheckoutDetailsNextQuery,
      CheckoutDetailsNextQueryVariables
    >({
      query: CHECKOUT_DETAILS_NEXT,
      variables: {
        token: checkout?.token,
      },
      fetchPolicy: "no-cache",
    });

    if (checkoutDetailRes?.data?.checkout?.id) {
      storage.setCheckout(checkoutDetailRes?.data?.checkout);
      const res = {
        data: {
          checkoutDiscounts: {
            __typename: "DiscountsType",
            prepaidDiscount:
              checkoutDetailRes?.data?.checkout?.paymentMethod
                ?.prepaidDiscountAmount,
            couponDiscount:
              checkoutDetailRes?.data?.checkout?.paymentMethod?.couponDiscount,
            cashbackDiscount:
              checkoutDetailRes?.data?.checkout?.paymentMethod
                ?.cashbackDiscountAmount,
            platformCharge: checkoutDetailRes?.data?.checkout?.paymentMethod
                ?.platformChargeAmount,
          },
          cashback: checkoutDetailRes?.data?.checkout?.cashback,
        },
      };

      storage.setDiscounts(res.data);

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          localCheckout: checkoutDetailRes?.data?.checkout,
          localCheckoutDiscounts: res.data.checkoutDiscounts,
          localCashback: res.data.cashback,
        },
      });
    }
    // @ts-ignore
    var returnObject = {
      data: checkoutDetailRes?.data?.checkout,
      errors: checkoutDetailRes?.errors,
    };

    return returnObject;
  }
  return null;
};

export const checkoutRecalculationUtil = async (
  client: ApolloClient<NormalizedCacheObject>,
  refreshCheckout?: boolean
) => {
  client.writeQuery({
    query: GET_LOCAL_CHECKOUT,
    data: {
      checkoutLoading: true,
    },
  });

  const checkoutString = storage.getCheckout();
  const checkout: Checkout | null | undefined =
    checkoutString && typeof checkoutString === "string"
      ? JSON.parse(checkoutString)
      : checkoutString;

  if (checkout && checkout.token) {
    const inputVariables: CheckoutRecalculationQueryVariables = refreshCheckout
      ? {
          token: checkout?.token,
          refreshCheckout: refreshCheckout,
        }
      : {
          token: checkout?.token,
        };
    const checkoutDetailRes = await client.query<
      CheckoutRecalculationQuery,
      CheckoutRecalculationQueryVariables
    >({
      query: CHECKOUT_RECALCULATION,
      variables: inputVariables,
      fetchPolicy: "no-cache",
    });

    if (checkoutDetailRes?.data?.checkoutRecalculation?.id) {
      storage.setCheckout(checkoutDetailRes?.data?.checkoutRecalculation);
      const res = {
        data: {
          checkoutDiscounts: {
            __typename: "DiscountsType",
            prepaidDiscount:
              checkoutDetailRes?.data?.checkoutRecalculation?.paymentMethod
                ?.prepaidDiscountAmount,
            couponDiscount:
              checkoutDetailRes?.data?.checkoutRecalculation?.paymentMethod
                ?.couponDiscount,
            cashbackDiscount:
              checkoutDetailRes?.data?.checkoutRecalculation?.paymentMethod
                ?.cashbackDiscountAmount,
          },
          cashback: checkoutDetailRes?.data?.checkoutRecalculation?.cashback,
        },
      };

      storage.setDiscounts(res.data);

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          localCheckout: checkoutDetailRes?.data?.checkoutRecalculation,
          localCheckoutDiscounts: res.data.checkoutDiscounts,
          localCashback: res.data.cashback,
          checkoutLoading: false,
        },
      });
    }
    // @ts-ignore
    var returnObject = {
      data: checkoutDetailRes?.data?.checkoutRecalculation,
      errors: checkoutDetailRes?.errors,
    };

    return returnObject;
  }

  return null;
};
export const getCheckoutPayments = async (
  client: ApolloClient<NormalizedCacheObject>,
  checkout: any
) => {
  const checkoutPaymentDetailsNext = await client.query<
    CheckoutPaymentsNextQuery,
    CheckoutPaymentsNextQueryVariables
  >({
    query: CHECKOUT_PAYMENTS_NEXT,
    variables: {
      token: checkout?.token,
    },
    fetchPolicy: "no-cache",
  });

  client.writeQuery({
    query: GET_LOCAL_CHECKOUT,
    data: {
      checkoutLoading: false,
    },
  });

  if (checkoutPaymentDetailsNext.data.checkout?.token && checkout?.token) {
    const updatedCheckoutDetails = {
      ...checkout,
      ...checkoutPaymentDetailsNext.data.checkout,
    };
    storage.setCheckout(updatedCheckoutDetails);

    const res = {
      data: {
        checkoutDiscounts: {
          __typename: "DiscountsType",
          prepaidDiscount:
            updatedCheckoutDetails?.paymentMethod?.prepaidDiscountAmount,
          couponDiscount: updatedCheckoutDetails?.paymentMethod?.couponDiscount,
          cashbackDiscount:
            updatedCheckoutDetails?.paymentMethod?.cashbackDiscountAmount,
        },
        cashback: updatedCheckoutDetails?.cashback,
      },
    };
    storage.setDiscounts(res.data);

    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        localCheckout: updatedCheckoutDetails,
        localCheckoutDiscounts: res.data.checkoutDiscounts,
        localCashback: res.data.cashback,
      },
    });
    return {
      data: updatedCheckoutDetails,
      errors: [],
    };
  }

  return {
    data: checkoutPaymentDetailsNext?.data,
    errors: checkoutPaymentDetailsNext?.errors,
  };
};
