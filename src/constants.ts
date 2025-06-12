export const WINDOW_EXISTS = typeof window !== "undefined";
export const LOCAL_STORAGE_EXISTS = WINDOW_EXISTS && !!window.localStorage;
export const DEVELOPMENT_MODE = process.env.NODE_ENV === "development";

export enum REST_API_METHODS_TYPES {
  GET = "GET",
  POST = "POST",
}

export const REST_API_ENDPOINTS = {
  ADD_TO_CART: "add_to_cart/",
  UPDATE_CART: "update_cart/",
  CREATE_CHECKOUT: "create_checkout/",
  VALIDATE_COUPON: "validate_coupon/",
};

export const dummyCheckoutFields = {
  availablePaymentGateways: [
    {
      currencies: ["INR"],
      id: "mirumee.payments.razorpay",
      name: "Razorpay",
      __typename: "PaymentGateway",
      config: [],
    },
  ],
  billingAddress: null,
  cashback: {
    amount: "0.00",
    willAddOn: null,
    __typename: "CashbackType",
  },
  discount: {
    currency: "INR",
    amount: 0,
    __typename: "Money",
  },
  email: "dummy@dummy.com",
  paymentMethod: {
    cashbackDiscountAmount: 0,
    couponDiscount: "0",
    prepaidDiscountAmount: 0,
    platformChargeAmount:0,
    __typename: "PaymentMethodType",
  },
  shippingAddress: null,
  shippingMethod: null,
  shippingPrice: {
    gross: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    net: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    __typename: "TaxedMoney",
  },
  subtotalPrice: {
    gross: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    net: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    __typename: "TaxedMoney",
  },
  totalPrice: {
    gross: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    net: {
      amount: 0,
      currency: "INR",
      __typename: "Money",
    },
    __typename: "TaxedMoney",
  },
  translatedDiscountName: null,
  voucherCode: null,
};

export enum WIZZY_ENDPOINTS {
  SEARCH = "https://api.wizzy.ai/v1/products/search",
  FILTER = "https://api.wizzy.ai/v1/products/filter",
}
