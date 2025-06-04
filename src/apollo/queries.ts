import { gql } from "@apollo/client";
import {
  checkoutFragment,
  checkoutLineFragment,
  checkoutPriceFragment,
  checkoutShippingMethodFragment,
  orderDetailFragment,
  userFragment,
} from "./fragments";

export const USER = gql`
  ${userFragment}
  query UserDetails {
    user: me {
      ...UserFragment
    }
    authenticated @client
    authenticating @client
    userCheckoutLoading @client
  }
`;

export const CHECKOUT_DETAILS = gql`
  ${checkoutFragment}
  query CheckoutDetails($token: UUID) {
    checkout(token: $token) {
      ...Checkout
    }
    checkoutUpdated @client
  }
`;

export const CHECKOUT_DETAILS_NEXT = gql`
  ${checkoutFragment}
  query CheckoutDetailsNext($token: UUID) {
    checkout(token: $token) {
      ...Checkout
      paymentMethod {
        cashbackDiscountAmount
        couponDiscount
        prepaidDiscountAmount
      }
      cashback {
        amount
        willAddOn
      }
    }
    checkoutUpdated @client
  }
`;

export const CHECKOUT_PAYMENTS_NEXT = gql`
  ${checkoutPriceFragment}
  ${checkoutShippingMethodFragment}
  query CheckoutPaymentsNext($token: UUID) {
    checkout(token: $token) {
      id
      token
      totalPrice {
        ...Price
      }
      cashback {
        amount
        willAddOn
      }
      voucherCode
      discount {
        amount
        currency
      }
      paymentMethod {
        cashbackDiscountAmount
        couponDiscount
        prepaidDiscountAmount
      }
      shippingMethod {
        ...ShippingMethod
      }
      shippingPrice {
        ...Price
      }
      subtotalPrice {
        ...Price
      }
    }
  }
`;

export const GET_CART_ITEMS = gql`
  ${checkoutLineFragment}
  query GetCartItems {
    cartItems @client {
      ...CheckoutLine
    }
  }
`;
export const GET_LOCAL_CHECKOUT = gql`
  ${orderDetailFragment}
  ${checkoutFragment}
  query GetLocalCheckout {
    localCheckout @client {
      ...Checkout
    }

    localCheckoutDiscounts @client {
      prepaidDiscount
      couponDiscount
      cashbackDiscount
    }
    localCashback @client {
      amount
      willAddOn
    }
    useCashback @client
    checkoutLoading @client
    userWalletBalance @client
    recentOrder @client {
      ...OrderDetail
    }
  }
`;

export const GET_DISCOUNT_CASHBACK_QUERY = gql`
  query DiscountsAndCashbackQuery($token: UUID!) {
    checkoutDiscounts(token: $token) {
      prepaidDiscount
      couponDiscount
      cashbackDiscount
    }
    cashback(checkoutToken: $token) {
      amount
      willAddOn
    }
  }
`;

export const USER_CHECKOUT_DETAILS = gql`
  ${checkoutFragment}
  query UserCheckoutDetails($checkoutTag: String)  {
    me(source: "user_details") {
      id
      checkout(checkoutTag: $checkoutTag) {
        ...Checkout
        paymentMethod {
          cashbackDiscountAmount
          couponDiscount
          prepaidDiscountAmount
        }
        cashback {
          amount
          willAddOn
        }
      }
    }
  }
`;

export const GET_CITY_STATE_FROM_PINCODE = gql`
  query Pincode($pin: String) {
    pincode(pin: $pin) {
      city
      state
      serviceable
    }
  }
`;

export const USER_ORDER_DETAILS = gql`
  query OrdersByUser($perPage: Int!, $after: String) {
    me {
      id
      orders(first: $perPage, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            shippingAddress {
              id
              postalCode
            }
            invoices {
              createdAt
              id
              message
              externalUrl
              number
              status
              updatedAt
              url
              metadata {
                key
                value
              }
            }
            metadata {
              key
              value
            }
            token
            number
            statusDisplay
            created
            total {
              gross {
                amount
                currency
              }
              net {
                amount
                currency
              }
            }
            lines {
              id

              productName
              quantity
              variant {
                id
                weight {
                  unit
                  value
                }
                sku
                name
                product {
                  id
                  weight {
                    unit
                    value
                  }
                  metadata {
                    key
                    value
                  }
                  category {
                    id
                    name
                    slug
                  }
                  name
                  pricing {
                    discount {
                      net {
                        amount
                      }
                    }
                    priceRange {
                      start {
                        net {
                          amount
                        }
                      }
                    }
                    priceRangeUndiscounted {
                      start {
                        net {
                          amount
                        }
                      }
                    }
                  }
                }
              }
              thumbnail {
                alt
                url
              }
              thumbnail2x: thumbnail(size: 510) {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CHECKOUT_TOTALS = gql`
  query CheckoutTotals($token: UUID) {
    checkoutTotals(token: $token) {
      prepaidCashback {
        currency
        gross {
          currency
          amount
        }
        net {
          currency
          amount
        }
      }
      codTotal {
        currency
        gross {
          currency
          amount
        }
        net {
          currency
          amount
        }
      }
      prepaidTotal {
        currency
        net {
          currency
          amount
        }
        gross {
          currency
          amount
        }
      }
    }
  }
`;

export const CHECKOUT_RECALCULATION = gql`
  ${checkoutFragment}
  query CheckoutRecalculation($token: UUID, $refreshCheckout: Boolean) {
    checkoutRecalculation(token: $token, refreshCheckout: $refreshCheckout) {
      ...Checkout
      paymentMethod {
        cashbackDiscountAmount
        couponDiscount
        prepaidDiscountAmount
      }
      cashback {
        amount
        willAddOn
      }
    }
  }
`;
