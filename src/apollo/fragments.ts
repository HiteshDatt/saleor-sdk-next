import { gql } from "@apollo/client";

export const accountErrorFragment = gql`
  fragment AccountErrorFragment on AccountError {
    code
    field
    message
  }
`;

export const addressFragment = gql`
  fragment AddressFragment on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const userFragment = gql`
  ${addressFragment}
  fragment UserFragment on User {
    id
    email
    firstName
    lastName
    phone
    isStaff
    tags {
      name
    }
    extraData {
      id
      key
      value
    }
    orders (first: 2) {
      edges {
        node {
          id
        }
      }
      totalCount
      __typename
    }
    metadata {
      key
      value
    }
    defaultShippingAddress {
      ...AddressFragment
    }
    defaultBillingAddress {
      ...AddressFragment
    }
    addresses {
      ...AddressFragment
    }
  }
`;

export const checkoutPriceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const checkoutAddressFragment = gql`
  fragment Address on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const checkoutProductVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariant on ProductVariant {
    id
    name
    sku
    quantityAvailable

    images {
      id
      sortOrder
      alt
      url
    }
    metadata {
      key
      value
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
    product {
      id
      name
      slug
      isAvailableForPurchase
      weight {
        unit
        value
      }
      category {
        id
        name
        slug
      }
      thumbnail {
        url
        alt
      }

      productType {
        id
        isShippingRequired
      }
      metadata {
        key
        value
      }
      tags {
        name
      }
    }
  }
`;

export const checkoutShippingMethodFragment = gql`
  fragment ShippingMethod on ShippingMethod {
    id
    name
    price {
      currency
      amount
    }
  }
`;

export const checkoutLineFragment = gql`
  ${checkoutPriceFragment}
  ${checkoutProductVariantFragment}
  fragment CheckoutLine on CheckoutLine {
    id
    quantity
    data
    totalPrice {
      ...Price
    }
    variant {
      ...ProductVariant
    }
  }
`;

export const paymentGatewayFragment = gql`
  fragment PaymentGateway on PaymentGateway {
    id
    name
    config {
      field
      value
    }
    currencies
  }
`;

export const checkoutFragment = gql`
  ${checkoutLineFragment}
  ${checkoutAddressFragment}
  ${checkoutPriceFragment}
  ${checkoutShippingMethodFragment}
  ${paymentGatewayFragment}
  fragment Checkout on Checkout {
    token
    id
    tags {
      name
    }
    metadata {
      key
      value
    }
    totalPrice {
      ...Price
    }
    subtotalPrice {
      ...Price
    }
    billingAddress {
      ...Address
    }
    shippingAddress {
      ...Address
    }
    email
    availableShippingMethods {
      ...ShippingMethod
    }
    shippingMethod {
      ...ShippingMethod
    }
    shippingPrice {
      ...Price
    }
    lines {
      ...CheckoutLine
    }
    isShippingRequired
    discount {
      currency
      amount
    }
    cashback {
      amount
      willAddOn
    }
    paymentMethod {
      cashbackDiscountAmount
      couponDiscount
      prepaidDiscountAmount
    }
    discountName
    translatedDiscountName
    voucherCode
    availablePaymentGateways {
      ...PaymentGateway
    }
  }
`;

export const checkoutErrorFragment = gql`
  fragment CheckoutError on CheckoutError {
    code
    field
    message
  }
`;

export const orderPriceFragment = gql`
  fragment OrderPrice on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
    tax {
      amount
      currency
    }
  }
`;

export const orderDetailFragment = gql`
  ${orderPriceFragment}
  ${checkoutAddressFragment}
  ${checkoutProductVariantFragment}
  fragment OrderDetail on Order {
    userEmail
    paymentStatus
    paymentStatusDisplay
    status
    statusDisplay
    id
    token
    number
    voucher {
      code
    }
    payments{
      gateway 
    }
    # invoices {
    #   createdAt
    #   id
    #   message
    #   externalUrl
    #   number
    #   status
    #   updatedAt
    #   url
    #   metadata {
    #     key
    #     value
    #   }
    # }

    metadata {
      key
      value
    }
    shippingAddress {
      ...Address
    }
    lines {
      id
      productName
      quantity

      variant {
        ...ProductVariant
      }
      unitPrice {
        currency
        ...OrderPrice
      }
      totalPrice {
        currency
        ...OrderPrice
      }
    }
    subtotal {
      ...OrderPrice
    }
    total {
      ...OrderPrice
    }
    shippingPrice {
      ...OrderPrice
    }
  }
`;

export const paymentFragment = gql`
  fragment Payment on Payment {
    id
    gateway
    token
    creditCard {
      brand
      firstDigits
      lastDigits
      expMonth
      expYear
    }
    total {
      amount
      currency
    }
  }
`;

export const paymentErrorFragment = gql`
  fragment PaymentError on PaymentError {
    code
    field
    message
  }
`;
