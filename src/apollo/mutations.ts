import { gql } from "@apollo/client";

import {
  accountErrorFragment,
  addressFragment,
  // accountErrorFragment,
  // addressFragment,
  checkoutErrorFragment,
  checkoutFragment,
  orderDetailFragment,
  paymentErrorFragment,
  paymentFragment,
  userFragment,
  // userFragment,
} from "./fragments";

// export const LOGIN = gql`
//   ${accountErrorFragment}
//   ${userFragment}
//   mutation login($email: String!, $password: String!) {
//     tokenCreate(email: $email, password: $password) {
//       csrfToken
//       token
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       user {
//         ...UserFragment
//       }
//     }
//   }
// `;

// export const REGISTER = gql`
//   ${accountErrorFragment}
//   mutation register($input: AccountRegisterInput!) {
//     accountRegister(input: $input) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       requiresConfirmation
//     }
//   }
// `;

export const REFRESH_TOKEN = gql`
  ${accountErrorFragment}
  mutation refreshToken($csrfToken: String!, $refreshToken: String) {
    tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
      token
      accountErrors {
        ...AccountErrorFragment
      }
    }
  }
`;

// // separate mutation so the request payload is minimal when user is not needed
// // used for initial authentication
export const REFRESH_TOKEN_WITH_USER = gql`
  ${accountErrorFragment}
  ${userFragment}
  mutation refreshTokenWithUser($csrfToken: String!, $refreshToken: String) {
    tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
      token
      user {
        ...UserFragment
      }
      accountErrors {
        ...AccountErrorFragment
      }
    }
  }
`;

export const VERIFY_TOKEN = gql`
  ${accountErrorFragment}
  ${userFragment}
  mutation verifyToken($token: String!) {
    tokenVerify(token: $token) {
      isValid
      payload
      user {
        ...UserFragment
      }
      accountErrors {
        ...AccountErrorFragment
      }
    }
  }
`;

// export const EXTERNAL_AUTHENTICATION_URL = gql`
//   ${accountErrorFragment}
//   mutation externalAuthenticationUrl(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalAuthenticationUrl(pluginId: $pluginId, input: $input) {
//       authenticationData
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const OBTAIN_EXTERNAL_ACCESS_TOKEN = gql`
//   ${accountErrorFragment}
//   ${userFragment}
//   mutation externalObtainAccessTokens(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalObtainAccessTokens(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       user {
//         ...UserFragment
//       }
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const EXTERNAL_REFRESH = gql`
//   ${accountErrorFragment}
//   mutation externalRefresh(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalRefresh(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const EXTERNAL_REFRESH_WITH_USER = gql`
//   ${accountErrorFragment}
//   ${userFragment}
//   mutation externalRefreshWithUser(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalRefresh(pluginId: $pluginId, input: $input) {
//       token
//       csrfToken
//       user {
//         ...UserFragment
//       }
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const EXTERNAL_VERIFY_TOKEN = gql`
//   ${accountErrorFragment}
//   ${userFragment}
//   mutation externalVerify(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalVerify(pluginId: $pluginId, input: $input) {
//       isValid
//       verifyData
//       user {
//         ...UserFragment
//         userPermissions {
//           code
//           name
//         }
//       }
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const EXTERNAL_LOGOUT = gql`
//   ${accountErrorFragment}
//   mutation externalLogout(
//     $pluginId: String = "mirumee.authentication.openidconnect"
//     $input: JSONString!
//   ) {
//     externalLogout(pluginId: $pluginId, input: $input) {
//       logoutData
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const CHANGE_USER_PASSWORD = gql`
//   ${accountErrorFragment}
//   mutation passwordChange($newPassword: String!, $oldPassword: String!) {
//     passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const REQUEST_PASSWORD_RESET = gql`
//   ${accountErrorFragment}
//   mutation requestPasswordReset(
//     $email: String!
//     $redirectUrl: String!
//     $channel: String!
//   ) {
//     requestPasswordReset(
//       email: $email
//       redirectUrl: $redirectUrl
//       channel: $channel
//     ) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const SET_PASSWORD = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation setPassword($token: String!, $email: String!, $password: String!) {
//     setPassword(token: $token, email: $email, password: $password) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       token
//       csrfToken
//       user {
//         ...UserFragment
//       }
//     }
//   }
// `;

// export const REQUEST_EMAIL_CHANGE = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation requestEmailChange(
//     $channel: String!
//     $newEmail: String!
//     $password: String!
//     $redirectUrl: String!
//   ) {
//     requestEmailChange(
//       channel: $channel
//       newEmail: $newEmail
//       password: $password
//       redirectUrl: $redirectUrl
//     ) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       user {
//         ...UserFragment
//       }
//     }
//   }
// `;

// export const CONFIRM_EMAIL_CHANGE = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation confirmEmailChange($channel: String!, $token: String!) {
//     confirmEmailChange(channel: $channel, token: $token) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       user {
//         ...UserFragment
//       }
//     }
//   }
// `;

// export const REQUEST_DELETE_ACCOUNT = gql`
//   ${accountErrorFragment}
//   mutation accountRequestDeletion($channel: String!, $redirectUrl: String!) {
//     accountRequestDeletion(channel: $channel, redirectUrl: $redirectUrl) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

// export const DELETE_ACCOUNT = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation accountDelete($token: String!) {
//     accountDelete(token: $token) {
//       accountErrors {
//         ...AccountErrorFragment
//       }
//       user {
//         ...UserFragment
//       }
//     }
//   }
// `;

export const UPDATE_ACCOUNT = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation accountUpdate($input: AccountInput!) {
    accountUpdate(input: $input) {
      accountErrors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

export const SET_ACCOUNT_DEFAULT_ADDRESS = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation setAccountDefaultAddress($id: ID!, $type: AddressTypeEnum!) {
    accountSetDefaultAddress(id: $id, type: $type) {
      accountErrors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

export const DELETE_ACCOUNT_ADDRESS = gql`
  ${userFragment}
  ${accountErrorFragment}
  mutation deleteAccountAddress($addressId: ID!) {
    accountAddressDelete(id: $addressId) {
      accountErrors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

export const CREATE_ACCOUNT_ADDRESS = gql`
  ${addressFragment}
  ${userFragment}
  ${accountErrorFragment}
  mutation createAccountAddress($input: AddressInput!) {
    accountAddressCreate(input: $input) {
      address {
        ...AddressFragment
      }
      accountErrors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

export const UPDATE_ACCOUNT_ADDRESS = gql`
  ${addressFragment}
  ${userFragment}
  ${accountErrorFragment}
  mutation updateAccountAddress($input: AddressInput!, $id: ID!) {
    accountAddressUpdate(input: $input, id: $id) {
      address {
        ...AddressFragment
      }
      accountErrors {
        ...AccountErrorFragment
      }
      user {
        ...UserFragment
      }
    }
  }
`;

// export const CONFIRM_ACCOUNT = gql`
//   ${userFragment}
//   ${accountErrorFragment}
//   mutation accountConfirm($email: String!, $token: String!) {
//     confirmAccount(email: $email, token: $token) {
//       user {
//         ...UserFragment
//       }
//       accountErrors {
//         ...AccountErrorFragment
//       }
//     }
//   }
// `;

export const REQUEST_OTP_MUTATION = gql`
  mutation OTPRequest($phone: String!) {
    RequestOTP: requestOtp(phone: $phone) {
      message
      otpErrors {
        code
        field
        message
      }
    }
  }
`;

export const CREATE_OTP_TOKEN_MUTATION = gql`
  ${userFragment}
  mutation OTPAuthentication(
    $phone: String
    $email: String
    $otp: String!
    $checkoutId: ID
  ) {
    CreateTokenOTP: otpTokenCreate(
      otp: $otp
      phone: $phone
      email: $email
      checkoutId: $checkoutId
    ) {
      token
      refreshToken
      csrfToken
      user {
        ...UserFragment
      }
      otpErrors {
        code
        field
        message
      }
    }
  }
`;

export const CREATE_TOKEN_WITHOUT_OTP = gql`
  ${userFragment}
  mutation CreateTokenWithoutOtp($waid: String, $checkoutId: ID) {
    CreateTokenWithoutOtp: createTokenWithoutOtp(
      waid: $waid
      checkoutId: $checkoutId
    ) {
      token
      refreshToken
      csrfToken
      user {
        ...UserFragment
      }
      otpErrors {
        code
        field
        message
      }
    }
  }
`;

export const CREATE_TOKEN_TRUECALLER = gql`
  ${userFragment}
  mutation CreateTokenTrueCaller(
    $accessToken: String
    $checkoutId: ID
    $endpoint: String
    $requestId: String!
  ) {
    CreateTokenTrueCaller: createTokenTrueCaller(
      accessToken: $accessToken
      checkoutId: $checkoutId
      endpoint: $endpoint
      requestId: $requestId
    ) {
      token
      refreshToken
      csrfToken
      user {
        ...UserFragment
      }
      otpErrors {
        code
        field
        message
      }
    }
  }
`;

export const REGISTER_ACCOUNT = gql`
  mutation AccountRegisterV2($input: AccountRegisterInputV2!) {
    accountRegisterV2(input: $input) {
      isNewUser
      isActiveUser
      accountErrors {
        field
        message
      }
      errors {
        field
        message
      }
    }
  }
`;

export const CONFIRM_ACCOUNT = gql`
  ${userFragment}
  mutation ConfirmAccountV2($otp: String!, $phone: String!, $checkoutId: ID) {
    confirmAccountV2(otp: $otp, phone: $phone, checkoutId: $checkoutId) {
      token
      refreshToken
      csrfToken
      user {
        ...UserFragment
      }
      accountErrors {
        field
        message
      }
      errors {
        field
        message
      }
    }
  }
`;

export const UPDATE_USER_META = gql`
  mutation UpdateUserMeta($id: ID!, $input: [MetadataInput!]!) {
    updateMetadata(id: $id, input: $input) {
      metadataErrors {
        field
        message
        __typename
      }
      item {
        metadata {
          key
          value
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export const VERIFY_CHECKOUT_OTP = gql`
  mutation VerifyCheckoutOtp($otp: String!, $phone: String!) {
    verifyCheckoutOtp(otp: $otp, phone: $phone) {
      isVerified
      otpErrors {
        field
        message
      }
      errors {
        field
        message
      }
    }
  }
`;

export const UPDATE_CHECKOUT_LINE_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const CREATE_CHECKOUT_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation CreateCheckout($checkoutInput: CheckoutCreateInput!) {
    checkoutCreate(input: $checkoutInput) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;

export const ADD_CHECKOUT_LINE_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation AddCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
    checkoutLinesAdd(checkoutId: $checkoutId, lines: $lines) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const REMOVE_CHECKOUT_LINE_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation RemoveCheckoutLine(
    $checkoutId: ID!
    $lineId: ID
    $checkoutMetadataInput: [MetadataInputV2!]
  ) {
    checkoutLineDelete(
      checkoutId: $checkoutId
      lineId: $lineId
      checkoutMetadataInput: $checkoutMetadataInput
    ) {
      checkout {
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
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const UPDATE_CHECKOUT_SHIPPING_ADDRESS_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingAddress(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
    $email: String!
    $isRecalculate: Boolean
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $shippingAddress
      isRecalculate: $isRecalculate
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
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
    checkoutEmailUpdate(
      checkoutId: $checkoutId
      email: $email
      isRecalculate: $isRecalculate
    ) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const UPDATE_CHECKOUT_SHIPPING_ADDRESS_NEW = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingAddressNew(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
    $email: String!
    $isRecalculate: Boolean
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $shippingAddress
      email: $email
      isRecalculate: $isRecalculate
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
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

export const UPDATE_CHECKOUT_BILLING_ADDRESS_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutBillingAddress(
    $checkoutId: ID!
    $billingAddress: AddressInput!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;

export const UPDATE_CHECKOUT_ADDRESS_TYPE = gql`
  mutation UpdateCheckoutAddressType($addressId: ID!, $type: AddressTypes!) {
    addressTypeUpdate(addressId: $addressId, type: $type) {
      addressLink {
        id
        address {
          id
          firstName
          lastName
          streetAddress1
          streetAddress2
          city
          cityArea
          postalCode
          phone
        }
        type
      }
    }
  }
`;

export const UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingMethod(
    $checkoutId: ID!
    $shippingMethodId: ID!
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const ADD_CHECKOUT_PROMO_CODE = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation AddCheckoutPromoCode(
    $checkoutId: ID!
    $promoCode: String!
    $isRecalculate: Boolean
  ) {
    checkoutAddPromoCode(
      checkoutId: $checkoutId
      promoCode: $promoCode
      isRecalculate: $isRecalculate
    ) {
      checkout {
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
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const REMOVE_CHECKOUT_PROMO_CODE = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation RemoveCheckoutPromoCode(
    $checkoutId: ID!
    $promoCode: String!
    $isRecalculate: Boolean
  ) {
    checkoutRemovePromoCode(
      checkoutId: $checkoutId
      promoCode: $promoCode
      isRecalculate: $isRecalculate
    ) {
      checkout {
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
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const CREATE_CHECKOUT_PAYMENT = gql`
  ${checkoutFragment}
  ${paymentFragment}
  ${paymentErrorFragment}
  mutation CreateCheckoutPayment(
    $checkoutId: ID!
    $paymentInput: PaymentInput!
  ) {
    checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentInput) {
      checkout {
        ...Checkout
      }
      payment {
        ...Payment
      }
      errors: paymentErrors {
        ...PaymentError
      }
    }
  }
`;

export const COMPLETE_CHECKOUT = gql`
  ${orderDetailFragment}
  ${checkoutErrorFragment}
  mutation CompleteCheckout(
    $checkoutId: ID!
    $paymentData: JSONString
    $redirectUrl: String
    $storeSource: Boolean
  ) {
    checkoutComplete(
      checkoutId: $checkoutId
      paymentData: $paymentData
      redirectUrl: $redirectUrl
      storeSource: $storeSource
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      order {
        ...OrderDetail
      }
      confirmationNeeded
      confirmationData
    }
  }
`;

export const CHECKOUT_PAYMENT_METHOD_UPDATE = gql`
  ${checkoutFragment}

  mutation checkoutPaymentMethodUpdate(
    $checkoutId: ID!
    $gatewayId: String!
    $useCashback: Boolean!
    $isRecalculate: Boolean
  ) {
    checkoutPaymentMethodUpdate(
      checkoutId: $checkoutId
      gatewayId: $gatewayId
      useCashback: $useCashback
      isRecalculate: $isRecalculate
    ) {
      checkout {
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
      checkoutErrors {
        field
        message
        code
      }
    }
  }
`;

export const CREATE_RAZORPAY_ORDER = gql`
  mutation CreateRazorpayOrder($input: RazorpayCreateOrderInput!) {
    razorpayOrderCreate(input: $input) {
      razorpayOrder {
        id
        amount
        amountPaid
        amountDue
        currency
        status
        createdAt
      }
      razorpayErrors {
        field
        code
        message
      }
    }
  }
`;

export const CREATE_GOKWIK_ORDER = gql`
  mutation CreateGokwikOrder($input: GokwikCreateOrderInput!) {
    createGokwikOrder(input: $input) {
      errors {
        field
        message
      }
      gokwickOrder {
        id
        requestId
        orderId
        amount
        mid
        orderType
        status
      }
      gokwikErrors {
        field
        message
        code
      }
    }
  }
`;

export const CREATE_JUSPAY_CUSTOMER_AND_ORDER = gql`
  mutation CreateJuspayOrderAndCustomer(
    $input: JuspayCreateOrderAndCustomerInput!
  ) {
    juspayOrderAndCustomerCreate(input: $input) {
      errors {
        field
        message
      }
      juspayResponse {
        id
        orderId
        amount
        status
        paymentLinks {
          web
          iframe
          mobile
        }
        clientJuspay {
          clientAuthToken
          clientAuthTokenExpiry
        }
        customerId
      }
      juspayErrors {
        field
        message
        code
      }
    }
  }
`;

export const CREATE_JUSPAY_PAYMENT = gql`
  mutation CreateJuspayPayment($input: JuspayPaymentInput!) {
    juspayPayment(input: $input) {
      errors {
        field
        message
      }
      juspayResponse {
        orderId
        paymentAuthentication {
          method
          url
        }
        sdkParams {
          amount
          customerFirstName
          customerLastName
          mcc
          merchantName
          merchantVpa
          tr
        }
        paymentParams {
          key1
          key2
          key3
        }
        paymentTxnId
        status
        paymentTxnUuid
      }
      juspayErrors {
        field
        message
        code
      }
    }
  }
`;

export const CHECK_JUSPAY_ORDER_STATUS = gql`
  mutation CheckJuspayOrderStatus($input: JuspayOrderStatusInput!) {
    juspayOrderStatusCheck(input: $input) {
      errors {
        field
        message
      }
      juspayOrder {
        id
        orderId
        amount
        status
        paymentStatus
      }
      juspayErrors {
        field
        message
        code
      }
    }
  }
`;

export const CHECK_VPA_ADDRESS = gql`
  mutation VerifyJuspayVpa($input: JuspayVerifyVpaInput!) {
    juspayVerifyVpa(input: $input) {
      juspayErrors {
        message
        code
      }
      juspayResponse {
        customerName
        status
        vpa
        mandateDetails {
          isHandleSupported
        }
      }
    }
  }
`;

export const PAYTM_TXN_CREATE = gql`
  mutation PaytmTxnCreate($input: PaytmCreateOrderInput!) {
    paytmOrderCreate(input: $input) {
      paytmOrder {
        txnToken
        status
        createdAt
        merchantId
        callbackUrl
        orderId
      }
      paytmErrors {
        field
        message
        code
      }
    }
  }
`;

export const GET_WALLET_AMOUNT = gql`
  query GetWallet {
    wallet {
      id
      amount
    }
  }
`;

export const CREATE_CASHFREE_ORDER = gql`
  mutation CreateCashfreeOrder($input: CashfreeCreateOrderInput!) {
    cashfreeOrderCreate(input: $input) {
      cashfreeOrder {
        paymentUrl
        token
      }
    }
  }
`;

export const CHECKOUT_CUSTOMER_ATTACH = gql`
  mutation CheckoutCustomerAttach($checkoutId: ID!, $customerId: ID) {
    checkoutCustomerAttach(checkoutId: $checkoutId, customerId: $customerId) {
      checkout {
        id
      }
    }
  }
`;

export const CHECKOUT_CUSTOMER_ATTACH_NEW = gql`
  ${checkoutFragment}
  mutation CheckoutCustomerAttachNew($checkoutId: ID!, $customerId: ID) {
    checkoutCustomerAttach(checkoutId: $checkoutId, customerId: $customerId) {
      checkout {
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

export const ADD_CHECKOUT_LINE_MUTATION_NEXT = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation AddCheckoutLineNext(
    $checkoutId: ID!
    $lines: [CheckoutLineInput]!
    $isRecalculate: Boolean
    $checkoutMetadataInput: [MetadataInputV2!]
  ) {
    checkoutLinesAdd(
      checkoutId: $checkoutId
      lines: $lines
      isRecalculate: $isRecalculate
      checkoutMetadataInput: $checkoutMetadataInput
    ) {
      checkout {
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
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const CREATE_CHECKOUT_MUTATION_NEXT = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation CreateCheckoutNext($checkoutInput: CheckoutCreateInput!) {
    checkoutCreate(input: $checkoutInput) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
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

export const UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION_NEXT = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingMethodNext(
    $checkoutId: ID!
    $shippingMethodId: ID!
    $isRecalculate: Boolean
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
      isRecalculate: $isRecalculate
    ) {
      checkout {
        ...Checkout
        paymentMethod {
          cashbackDiscountAmount
          couponDiscount
          prepaidDiscountAmount
          platformChargeAmount
        }
        cashback {
          amount
          willAddOn
        }
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const UPDATE_CHECKOUT_LINE_MUTATION_NEXT = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutLineNext(
    $checkoutId: ID!
    $lines: [CheckoutLineInput]!
    $isRecalculate: Boolean
  ) {
    checkoutLinesUpdate(
      checkoutId: $checkoutId
      lines: $lines
      isRecalculate: $isRecalculate
    ) {
      checkout {
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
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const UPDATE_CHECKOUT_METADATA = gql`
  mutation UpdateCheckoutMeta($checkoutId: ID!, $input: [MetadataInput!]!) {
    updateMetadata(id: $checkoutId, input: $input) {
      item {
        metadata {
          key
          value
        }
      }
    }
  }
`;
