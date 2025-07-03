import { GET_LOCAL_CHECKOUT } from "../../apollo/queries";
import {
  GetLocalCheckoutQuery,
  GetLocalCheckoutQueryVariables,
} from "../../apollo/types";
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

  const { data } = res;

  if (!data) {
    // throw new Error(
    //   "Cache query result is undefined. Invalid cache configuration."
    // );
    if (typeof window !== "undefined") {
      window.localStorage?.clear();
      window.location?.reload();
    }
  }

  const mrp =
    data?.localCheckout?.lines?.reduce((total, curr) => {
      const variantMetadata = curr?.variant?.metadata;

      const listPrice = getMetadataValue(variantMetadata, "listPrice");

      if (curr?.quantity) {
        if (listPrice && typeof listPrice === "number") {
          total += listPrice * curr.quantity;
        } else if (listPrice && typeof listPrice === "string") {
          total += parseFloat(listPrice) * curr.quantity;
        } else {
          total +=
            (curr?.variant.pricing?.priceUndiscounted?.gross?.amount ||
              curr?.variant.pricing?.price?.gross?.amount ||
              0) * curr.quantity;
        }
      } else {
        total += 0;
      }

      return total;
    }, 0) || 0;

  const netPrice =
    data?.localCheckout?.lines?.reduce((total, curr) => {
      if (curr?.quantity) {
        const netPriceAmount =
          (curr?.variant.pricing?.priceUndiscounted?.gross?.amount ||
            curr?.variant.pricing?.price?.gross?.amount ||
            0) * curr.quantity;
        total += netPriceAmount;
      } else {
        total += 0;
      }
      return total;
    }, 0) || 0;

  const itemDiscount = mrp - netPrice;

  const cartState = {
    items: data?.localCheckout?.lines || [],
    totalPrice: data?.localCheckout?.totalPrice || defaultPrice,
    subtotalPrice: data?.localCheckout?.subtotalPrice || defaultPrice,
    shippingPrice: data?.localCheckout?.shippingPrice || defaultPrice,
    discount: data?.localCheckout?.discount,
    mrp: createTaxedPriceFromAmount(mrp || 0) || defaultPrice,
    netPrice: createTaxedPriceFromAmount(netPrice || 0) || defaultPrice,
    itemDiscount: createTaxedPriceFromAmount(itemDiscount || 0) || defaultPrice,
    offerDiscount: data?.localCheckout?.totalPrice || defaultPrice,
    platformCharge: createTaxedPriceFromAmount(
        data?.localCheckoutDiscounts?.platformCharge
      ) || defaultPrice,
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
