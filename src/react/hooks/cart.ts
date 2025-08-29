// import { GET_LOCAL_CHECKOUT } from "../../apollo/queries";
// import {
//   GetLocalCheckoutQuery,
//   GetLocalCheckoutQueryVariables,
// } from "../../apollo/types";
import { storage } from "../../core";
import { hookFactory } from "../helpers/hookFactory";
// import { hookStateFactory } from "../helpers/hookStateFactory";
import { createTaxedPriceFromAmount, getMetadataValue } from "../utils/utils";

const defaultPrice = {
  __typename: "TaxedMoney",
  gross: {
    __typename: "Money",
    amount: 0,
    currency: "INR",
  },
  net: {
    __typename: "Money",
    amount: 0,
    currency: "INR",
  },
};

export const useCart = hookFactory("cart");

export const useCartState = () => {
  // const res = hookStateFactory<
  //   GetLocalCheckoutQuery,
  //   GetLocalCheckoutQueryVariables
  // >(GET_LOCAL_CHECKOUT);
  const checkoutString = storage.getCheckout();
  const checkout =
    checkoutString && typeof checkoutString === "string"
      ? JSON.parse(checkoutString)
      : checkoutString;
  const discountsString = storage.getDiscounts();
  const discounts =
    discountsString && typeof discountsString === "string"
      ? JSON.parse(discountsString)
      : discountsString;
console.log('useCartState',checkout,'discount',discounts);
  // const { data, error, networkStatus, previousData, loading } = res;
  // console.log("useCartState", {
  //   res,
  //   data,
  //   error,
  //   networkStatus,
  //   previousData,
  //   loading,
  // },);
// 'cache state',res?.client?.cache?.extract());
// console.log("useCartState query->",GET_LOCAL_CHECKOUT )

  // if (!data) {
    // throw new Error(
    //   "Cache query result is undefined. Invalid cache configuration."
    // );
  // }

  const mrp =
    checkout?.lines?.reduce((total:any, curr:any) => {
      const variantMetadata = curr?.variant.metadata;

      const listPrice = getMetadataValue(variantMetadata, "listPrice");

      if (curr?.quantity) {
        if (listPrice && typeof listPrice === "number") {
          total += listPrice * curr.quantity;
        } else if (listPrice && typeof listPrice === "string") {
          total += parseFloat(listPrice) * curr.quantity;
        } else {
          total +=
            (curr?.variant.pricing?.priceUndiscounted?.gross.amount ||
              curr?.variant.pricing?.price?.gross.amount ||
              0) * curr.quantity;
        }
      } else {
        total += 0;
      }

      return total;
    }, 0) || 0;

  const netPrice =
    checkout?.lines?.reduce((total:any, curr:any) => {
      if (curr?.quantity) {
        const netPriceAmount =
          (curr?.variant.pricing?.priceUndiscounted?.gross.amount ||
            curr?.variant.pricing?.price?.gross.amount ||
            0) * curr.quantity;
        total += netPriceAmount;
      } else {
        total += 0;
      }
      return total;
    }, 0) || 0;

  const itemDiscount = mrp - netPrice;

  const cartState = {
    items: checkout?.lines || [],
    totalPrice: checkout?.totalPrice || defaultPrice,
    subtotalPrice: checkout?.subtotalPrice || defaultPrice,
    shippingPrice: checkout?.shippingPrice || defaultPrice,
    discount: checkout?.discount,
    mrp: createTaxedPriceFromAmount(mrp || 0) || defaultPrice,
    netPrice: createTaxedPriceFromAmount(netPrice || 0) || defaultPrice,
    itemDiscount: createTaxedPriceFromAmount(itemDiscount || 0) || defaultPrice,
    offerDiscount: checkout?.totalPrice || defaultPrice,
    prepaidDiscount:
      createTaxedPriceFromAmount(
        discounts?.checkoutDiscounts?.prepaidDiscount
      ) || defaultPrice,
    cashbackDiscount:
      createTaxedPriceFromAmount(
        discounts?.checkoutDiscounts?.cashbackDiscount
      ) || defaultPrice,
    couponDiscount:
      createTaxedPriceFromAmount(
        discounts?.checkoutDiscounts?.couponDiscount
      ) || defaultPrice,
    cashbackRecieve: discounts?.cashback || { amount: 0, willAddOn: null },
  };

  return cartState;
};
