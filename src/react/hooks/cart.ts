import { GET_LOCAL_CHECKOUT } from "../../apollo/queries";
import {
  GetLocalCheckoutQuery,
  GetLocalCheckoutQueryVariables,
} from "../../apollo/types";
// import { storage } from "../../core";
import { hookFactory } from "../helpers/hookFactory";
import { hookStateFactory } from "../helpers/hookStateFactory";
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
  const res = hookStateFactory<
    GetLocalCheckoutQuery,
    GetLocalCheckoutQueryVariables
  >(GET_LOCAL_CHECKOUT);
//   const checkoutString = storage.getCheckout();
//   const checkout =
//     checkoutString && typeof checkoutString === "string"
//       ? JSON.parse(checkoutString)
//       : checkoutString;
//   const discountsString = storage.getDiscounts();
//   const discounts =
//     discountsString && typeof discountsString === "string"
//       ? JSON.parse(discountsString)
//       : discountsString;
// console.log('useCartState',checkout,'discount',discounts);
  const { data, error, networkStatus, previousData, loading } = res;
  console.log("useCartState", {
    res,
    data,
    error,
    networkStatus,
    previousData,
    loading,
  },);
// 'cache state',res?.client?.cache?.extract());
// console.log("useCartState query->",GET_LOCAL_CHECKOUT )

  // if (!data) {
    // throw new Error(
    //   "Cache query result is undefined. Invalid cache configuration."
    // );
  // }

  const mrp =
    data?.localCheckout?.lines?.reduce((total:any, curr:any) => {
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
    data?.localCheckout?.lines?.reduce((total:any, curr:any) => {
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

  const freebiePrice = data?.localCheckout?.lines?.find( line => {
    const temp = line?.data ? JSON.parse(line?.data) : null;
    if(temp?.type==="FREE_SKU") return true;
    return false;
  })?.totalPrice?.gross?.amount || 0;

  const subtotalPriceNewObj = {
    ...data?.localCheckout?.subtotalPrice,
    gross: {
      ...data?.localCheckout?.subtotalPrice?.gross,
      amount:
        (data?.localCheckout?.subtotalPrice?.gross?.amount || 0) + Number(freebiePrice),
    },
    net: {
      ...data?.localCheckout?.subtotalPrice?.net,
      amount:
        (data?.localCheckout?.subtotalPrice?.net?.amount || 0) + Number(freebiePrice),
    }
  }

  const cartState = {
    items: data?.localCheckout?.lines || [],
    totalPrice: data?.localCheckout?.totalPrice || defaultPrice,
    subtotalPrice: (freebiePrice ? subtotalPriceNewObj : data?.localCheckout?.subtotalPrice) || defaultPrice,
    shippingPrice: data?.localCheckout?.shippingPrice || defaultPrice,
    discount: data?.localCheckout?.discount,
    mrp: createTaxedPriceFromAmount(mrp || 0) || defaultPrice,
    netPrice: createTaxedPriceFromAmount(netPrice || 0) || defaultPrice,
    itemDiscount: createTaxedPriceFromAmount(itemDiscount || 0) || defaultPrice,
    offerDiscount: data?.localCheckout?.totalPrice || defaultPrice,
    prepaidDiscount:
      createTaxedPriceFromAmount(
        data?.localCheckoutDiscounts?.prepaidDiscount
      ) || defaultPrice,
    cashbackDiscount:
      createTaxedPriceFromAmount(
        data?.localCheckoutDiscounts?.cashbackDiscount
      ) || defaultPrice,
    couponDiscount:
      createTaxedPriceFromAmount(
        data?.localCheckoutDiscounts?.couponDiscount
      ) || defaultPrice,
    cashbackRecieve: data?.localCashback || { amount: 0, willAddOn: null },
  };

  return cartState;
};
