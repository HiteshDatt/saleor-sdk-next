import { setLocalCheckoutInCache } from "../apollo/helpers";
import {
  ADD_CHECKOUT_PROMO_CODE,
  CHECKOUT_PAYMENT_METHOD_UPDATE,
  COMPLETE_CHECKOUT,
  CREATE_CHECKOUT_MUTATION,
  CREATE_CHECKOUT_PAYMENT,
  CREATE_RAZORPAY_ORDER,
  GET_WALLET_AMOUNT,
  PAYTM_TXN_CREATE,
  REFRESH_CHECKOUT,
  REMOVE_CHECKOUT_PROMO_CODE,
  REORDER,
  UPDATE_CHECKOUT_ADDRESS_TYPE,
  UPDATE_CHECKOUT_BILLING_ADDRESS_MUTATION,
  UPDATE_CHECKOUT_SHIPPING_ADDRESS_MUTATION,
  UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION,
} from "../apollo/mutations";
import {
  ADD_TAGS,
  CHECKOUT_DETAILS_NEW,
  GET_CITY_STATE_FROM_PINCODE,
  GET_LOCAL_CHECKOUT,
  REMOVE_TAGS,
} from "../apollo/queries";
import {
  AddCheckoutPromoCodeMutation,
  AddCheckoutPromoCodeMutationVariables,
  AddressTypes,
  Checkout,
  CheckoutPaymentMethodUpdateMutation,
  CheckoutPaymentMethodUpdateMutationVariables,
  CompleteCheckoutMutation,
  CompleteCheckoutMutationVariables,
  CountryCode,
  CreateCheckoutMutation,
  CreateCheckoutMutationVariables,
  CreateCheckoutPaymentMutation,
  CreateCheckoutPaymentMutationVariables,
  CreateRazorpayOrderMutation,
  CreateRazorpayOrderMutationVariables,
  GetWalletQuery,
  GetWalletQueryVariables,
  OrdersByUserQueryVariables,
  PaymentInput,
  PaytmTxnCreateMutation,
  PaytmTxnCreateMutationVariables,
  PincodeQuery,
  PincodeQueryVariables,
  RefreshCheckoutMutation,
  RefreshCheckoutMutationVariables,
  RemoveCheckoutPromoCodeMutation,
  RemoveCheckoutPromoCodeMutationVariables,
  ReOrderMutation,
  ReOrderMutationVariables,
  UpdateCheckoutAddressTypeMutation,
  UpdateCheckoutAddressTypeMutationVariables,
  UpdateCheckoutBillingAddressMutation,
  UpdateCheckoutBillingAddressMutationVariables,
  UpdateCheckoutShippingAddressMutation,
  UpdateCheckoutShippingAddressMutationVariables,
  UpdateCheckoutShippingMethodMutation,
  UpdateCheckoutShippingMethodMutationVariables,
  useOrdersByUserQuery,
} from "../apollo/types";

import {
  CompleteCheckoutInput,
  CreatePaymentInput,
  IAddress,
  PaymentMethodUpdateInput,
} from "../apollo/types/checkout";
import { dummyCheckoutFields } from "../constants";
import { storage } from "./storage";
import {
  AddPromoCodeResult,
  CheckoutPaymentMethodUpdateResult,
  CompleteCheckoutResult,
  CreateCheckoutResult,
  CreatePaymentResult,
  CreatePaytmOrderResult,
  CreateRazorpayOrderResult,
  GetCityStateFromPincodeResult,
  GetUserOrdersResult,
  GetWalletAmountResult,
  RefreshCheckoutResult,
  RemovePromoCodeResult,
  ReOrderResult,
  SaleorClientMethodsProps,
  SetAddressTypeResult,
  SetBillingAddressResult,
  SetShippingAddressResult,
  SetShippingAndBillingAddressResult,
  SetShippingMethodResult,
} from "./types";
import { GraphQLError } from "graphql";

interface CheckoutInput {
  lines?: Array<{variantId:string,quantity:number}>;
  email: string;
  isRecalculate: Boolean;
  checkoutMetadataInput: Array<{key:string,value:string}>;
  shippingAddress: any;
}
export interface CheckoutSDK {
  loaded?: any;

  checkout?: any;

  promoCodeDiscount?: any;

  billingAsShipping?: any;

  selectedShippingAddressId?: string;

  selectedBillingAddressId?: string;

  availableShippingMethods?: any;

  availablePaymentGateways?: any[];

  payment?: any;

  setAddressType?: (
    addressId: string,
    type: AddressTypes
  ) => SetAddressTypeResult;
  createCheckout?: () => CreateCheckoutResult;
  createCheckoutRest?: (checkoutInput: CheckoutInput) => Promise<{data:any,errors:{message:any}[] | null} | null>;
  setShippingAddress?: (
    shippingAddress: IAddress,
    email: string
  ) => SetShippingAddressResult;
  setShippingAddressRest?: (
    shippingAddress: IAddress,
    email: string
  ) => SetShippingAddressResult;
  setShippingAndBillingAddress?: (
    shippingAddress: IAddress,
    email: string
  ) => SetShippingAndBillingAddressResult;
  setShippingAndBillingAddressRest?: (
    shippingAddress: IAddress
  ) => SetShippingAddressResult;

  setBillingAddress?: (billingAddress: IAddress) => SetBillingAddressResult;
  setBillingAddressRest?: (billingAddress: IAddress) => SetBillingAddressResult;
  setShippingMethod?: (shippingMethodId: string) => SetShippingMethodResult;
  addPromoCodeRest?: (promoCode: string) => Promise<{ data: any; errors: { message: any,field: any }[] | null; } | null>;
  removePromoCodeRest?: (promoCode: string) => Promise<{ data: any; errors: { message: any,field: any }[] | null; } | null>;
  addPromoCode?: (promoCode: string) => AddPromoCodeResult;
  removePromoCode?: (promoCode: string) => RemovePromoCodeResult;
  checkoutPaymentMethodUpdate?: (
    input: PaymentMethodUpdateInput
  ) => CheckoutPaymentMethodUpdateResult;
  checkoutPaymentMethodUpdateRest?: (
    input: PaymentMethodUpdateInput
  ) => Promise<any>;
  createPayment?: (input: CreatePaymentInput) => CreatePaymentResult;
  completeCheckout?: (input?: CompleteCheckoutInput) => CompleteCheckoutResult;
  getCityStateFromPincode?: (pincode: string) => GetCityStateFromPincodeResult;
  createRazorpayOrder?: () => CreateRazorpayOrderResult;
  createPaytmOrder?: () => CreatePaytmOrderResult;
  getWalletAmount?: () => GetWalletAmountResult;
  getUserOrders?: (opts: OrdersByUserQueryVariables) => GetUserOrdersResult;
  setUseCashback?: (useCashback: boolean) => {};
  setCheckout?: (checkout: any, fetchDiscount?: boolean) => {};
  refreshCheckout?: () => RefreshCheckoutResult;
  reOrder?: (
    orderId: string,
    warehouseId: string,
    attachUser: boolean,
    skipLines: boolean
  ) => ReOrderResult;
  addTagsInCheckout?: (tag: string[]) => void;
  removeTagsInCheckout?: (tag: string[]) => void;
}

export const checkout = ({
  apolloClient: client,
  restApiUrl
}: SaleorClientMethodsProps): CheckoutSDK => {
  const createCheckoutRest: CheckoutSDK["createCheckoutRest"] = async (checkoutInput) => {
    try {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: true,
        },
      });
  
      const checkoutString = storage.getCheckout();
      const checkout =
        checkoutString && typeof checkoutString === "string"
          ? JSON.parse(checkoutString)
          : checkoutString;
      if (!(checkout && checkout?.id)) {
        const token = storage.getAccessToken();
        let header:any = {
          "Content-Type": "application/json",
        };
        if(token) header={
          ...header,
          "Authorization": `JWT ${token}`
        }
        const dataJson = await fetch(`${restApiUrl}/rest/create_checkout/`,{
          method: "POST",
            headers: header,
            body: JSON.stringify({
              checkoutInput:checkoutInput
            }),
        });
        if(!dataJson?.ok){
          console.log("Create checkout api error",dataJson);
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return null;
        }
        const data = await dataJson?.json();

        const updatedCheckout = {
          ...dummyCheckoutFields,
          ...data
        }
        console.log('checkout create updatedCheckout',data,updatedCheckout);
        if (data?.id) {
          await setLocalCheckoutInCache(client, updatedCheckout);
          storage.setCheckout(updatedCheckout);
        }
        return {
          data,
          errors: data?.message ? [{"message":data?.message}] : null
        };
      }
      return null;
    } catch (error) {
      console.log('create checkout error',error);
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: false,
        },
      });
      return null;
    }
  };

  const createCheckout: CheckoutSDK["createCheckout"] = async () => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
    if (!(checkout && checkout?.id)) {
      return await client.mutate<
        CreateCheckoutMutation,
        CreateCheckoutMutationVariables
      >({
        mutation: CREATE_CHECKOUT_MUTATION,
        variables: {
          checkoutInput: {
            lines: [],
            email: "dummy@dummy.com",
            shippingAddress: {
              city: "delhi",
              companyName: "dummy",
              country: "IN",
              countryArea: "Delhi",
              firstName: "dummy",
              lastName: "dummy",
              phone: "7894561230",
              postalCode: "110006",
              streetAddress1: "dummy",
              streetAddress2: "dummy",
            },
          },
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(client, data?.checkoutCreate?.checkout);
          if (data?.checkoutCreate?.checkout?.id) {
            storage.setCheckout(data?.checkoutCreate?.checkout);
          }
        },
      });
    }
    return null;
  };

  const setShippingAddress: CheckoutSDK["setShippingAddress"] = async (
    shippingAddress: IAddress,
    email: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        checkoutId: checkout?.id,
        email,
        shippingAddress: {
          city: shippingAddress.city,
          companyName: shippingAddress.companyName,
          country: shippingAddress?.country?.code as CountryCode,
          countryArea: shippingAddress.countryArea,
          firstName: shippingAddress.firstName,
          lastName: shippingAddress.lastName,
          phone: shippingAddress.phone,
          postalCode: shippingAddress.postalCode,
          streetAddress1: shippingAddress.streetAddress1,
          streetAddress2: shippingAddress.streetAddress2,
        },
      };

      const res = await client.mutate<
        UpdateCheckoutShippingAddressMutation,
        UpdateCheckoutShippingAddressMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_SHIPPING_ADDRESS_MUTATION,
        variables,
        update: (_, { data }) => {
          setLocalCheckoutInCache(
            client,
            data?.checkoutShippingAddressUpdate?.checkout
          );
          if (data?.checkoutShippingAddressUpdate?.checkout?.id) {
            storage.setCheckout(data?.checkoutShippingAddressUpdate?.checkout);
          }
        },
      });

      return res;
    }

    return null;
  };

  const setShippingAddressRest: CheckoutSDK["setShippingAddress"] = async (
    shippingAddress: IAddress,
    email: string
  ) => {

    try {

    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        checkoutId: checkout?.id,
        // email,
        shippingAddress: {
          city: shippingAddress.city,
          companyName: shippingAddress.companyName,
          country: shippingAddress?.country?.code as CountryCode,
          countryArea: shippingAddress.countryArea,
          firstName: shippingAddress.firstName,
          lastName: shippingAddress.lastName,
          phone: shippingAddress.phone,
          postalCode: shippingAddress.postalCode,
          streetAddress1: shippingAddress.streetAddress1,
          streetAddress2: shippingAddress.streetAddress2,
        },
      };

      const token = storage.getAccessToken();

      await fetch(`${restApiUrl}/rest/address_update/`,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${token}`
          },
          body: JSON.stringify(variables),
      })
      .then((res) => res.json())
      .then(async (data) => {
        
        const updatedCheckout = {
          ...dummyCheckoutFields,
          ...data
        }
        console.log('checkout create updatedCheckout',data,updatedCheckout,email);
        if (data?.id) {
          await setLocalCheckoutInCache(client, updatedCheckout);
          storage.setCheckout(updatedCheckout);
        }
        return {
          data,
          errors: data?.message ? [{"message":data?.message,"field":data?.field,"code":data?.code}] : null
        };
      })
      .catch((error) => {
        console.error('Error: setShippingAddressRest', error);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: null,
          errors: error
        };
      });
    }

    return null;

  }catch (error) {
    console.log('setShippingAddressRest error',error);
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: false,
      },
    });
    return null;
  }
  };

  const setBillingAddress: CheckoutSDK["setBillingAddress"] = async (
    billingAddress: IAddress
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        checkoutId: checkout?.id,
        billingAddress: {
          city: billingAddress.city,
          companyName: billingAddress.companyName,
          country: billingAddress?.country?.code as CountryCode,
          countryArea: billingAddress.countryArea,
          firstName: billingAddress.firstName,
          lastName: billingAddress.lastName,
          phone: billingAddress.phone,
          postalCode: billingAddress.postalCode,
          streetAddress1: billingAddress.streetAddress1,
          streetAddress2: billingAddress.streetAddress2,
        },
      };
      const res = await client.mutate<
        UpdateCheckoutBillingAddressMutation,
        UpdateCheckoutBillingAddressMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_BILLING_ADDRESS_MUTATION,
        variables,
        update: (_, { data }) => {
          setLocalCheckoutInCache(
            client,
            data?.checkoutBillingAddressUpdate?.checkout
          );
          if (data?.checkoutBillingAddressUpdate?.checkout?.id) {
            storage.setCheckout(data?.checkoutBillingAddressUpdate?.checkout);
          }
        },
      });
      return res;
    }
    return null;
  };

  const setBillingAddressRest: CheckoutSDK["setBillingAddressRest"] = async (
    billingAddress: IAddress
  ) => {

    try {

    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        checkoutId: checkout?.id,
        billingAddress: {
          city: billingAddress.city,
          companyName: billingAddress.companyName,
          country: billingAddress?.country?.code as CountryCode,
          countryArea: billingAddress.countryArea,
          firstName: billingAddress.firstName,
          lastName: billingAddress.lastName,
          phone: billingAddress.phone,
          postalCode: billingAddress.postalCode,
          streetAddress1: billingAddress.streetAddress1,
          streetAddress2: billingAddress.streetAddress2,
        },
      };

      const token = storage.getAccessToken();

      await fetch(`${restApiUrl}/rest/address_update/`,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${token}`
          },
          body: JSON.stringify(variables),
      })
      .then((res) => res.json())
      .then(async (data) => {
        
        const updatedCheckout = {
          ...dummyCheckoutFields,
          ...data
        }
        console.log('checkout create updatedCheckout',data,updatedCheckout);
        if (data?.id) {
          await setLocalCheckoutInCache(client, updatedCheckout);
          storage.setCheckout(updatedCheckout);
        }
        return {
          data,
          errors: data?.message ? [{"message":data?.message,"field":data?.field,"code":data?.code}] : null
        };
      })
      .catch((error) => {
        console.error('Error: setBillingAddressRest', error);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: null,
          errors: error
        };
      });
    }

    return null;

  }catch (error) {
    console.log('setBillingAddressRest error',error);
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: false,
      },
    });
    return null;
  }
  };

  const setShippingAndBillingAddress: CheckoutSDK["setShippingAndBillingAddress"] = async (
    shippingAddress: IAddress,
    email: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const resShipping = await setShippingAddress(shippingAddress, email);
    const resBilling = await setBillingAddress(shippingAddress);
    // client.writeQuery({
    //   query: GET_LOCAL_CHECKOUT,
    //   data: {
    //     checkoutLoading: false,
    //   },
    // });

    const returnObject = {
      resShipping,
      resBilling,
    };
    return returnObject;
  };

  const setShippingAndBillingAddressRest: CheckoutSDK["setShippingAndBillingAddressRest"] = async (
    shippingAddress: IAddress
  ) => {

    try {

    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        checkoutId: checkout?.id,
        shippingAddress: {
          city: shippingAddress.city,
          companyName: shippingAddress.companyName,
          country: shippingAddress?.country?.code as CountryCode,
          countryArea: shippingAddress.countryArea,
          firstName: shippingAddress.firstName,
          lastName: shippingAddress.lastName,
          phone: shippingAddress.phone,
          postalCode: shippingAddress.postalCode,
          streetAddress1: shippingAddress.streetAddress1,
          streetAddress2: shippingAddress.streetAddress2,
        },
        billingAddress: {
          city: shippingAddress.city,
          companyName: shippingAddress.companyName,
          country: shippingAddress?.country?.code as CountryCode,
          countryArea: shippingAddress.countryArea,
          firstName: shippingAddress.firstName,
          lastName: shippingAddress.lastName,
          phone: shippingAddress.phone,
          postalCode: shippingAddress.postalCode,
          streetAddress1: shippingAddress.streetAddress1,
          streetAddress2: shippingAddress.streetAddress2,
        },
      };

      const token = storage.getAccessToken();

      const response = await fetch(`${restApiUrl}/rest/address_update/`,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${token}`
          },
          body: JSON.stringify(variables),
      })
      .then((res) => res.json())
      .then(async (data) => {
        
        const updatedCheckout = {
          ...dummyCheckoutFields,
          ...data
        }
        console.log('checkout create updatedCheckout',data,updatedCheckout);
        if (data?.id) {
          await setLocalCheckoutInCache(client, updatedCheckout);
          storage.setCheckout(updatedCheckout);
        }
        return {
          data,
          errors: data?.message ? [{"message":data?.message,"field":data?.field,"code":data?.code}] as unknown as readonly GraphQLError[] : undefined
        };
      })
      .catch((error) => {
        console.error('Error: setBillingAddressRest', error);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: null,
          errors: [{"message": error?.message}] as unknown as readonly GraphQLError[]
        };
      });

      return response;
    }

    return null;

  }catch (error) {
    console.log('setBillingAddressRest error',error);
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: false,
      },
    });
    return null;
  }
  };

  const setAddressType: CheckoutSDK["setAddressType"] = async (
    addressId: string,
    type: AddressTypes
  ) => {
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (!(checkout && checkout?.id)) {
      return await client.mutate<
        UpdateCheckoutAddressTypeMutation,
        UpdateCheckoutAddressTypeMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_ADDRESS_TYPE,
        variables: {
          addressId,
          type,
        },
      });
    }
    return null;
  };

  const setShippingMethod: CheckoutSDK["setShippingMethod"] = async (
    shippingMethodId: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: UpdateCheckoutShippingMethodMutationVariables = {
        checkoutId: checkout?.id,
        shippingMethodId,
      };

      const res = await client.mutate<
        UpdateCheckoutShippingMethodMutation,
        UpdateCheckoutShippingMethodMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_SHIPPING_METHOD_MUTATION,
        variables,
        update: (_, { data }) => {
          if (data?.checkoutShippingMethodUpdate?.checkout?.id) {
            storage.setCheckout(data?.checkoutShippingMethodUpdate?.checkout);
          }
          setLocalCheckoutInCache(
            client,
            data?.checkoutShippingMethodUpdate?.checkout,
            true
          );
        },
      });

      return res;
    }

    return null;
  };

  const addPromoCodeRest: CheckoutSDK["addPromoCodeRest"] = async (
    promoCode: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: AddCheckoutPromoCodeMutationVariables = {
        checkoutId: checkout?.id,
        promoCode,
      };
      const token = storage.getAccessToken();
      let header:any = {
        "Content-Type": "application/json"
      };
      if(token){
        header={
          ...header,
          "Authorization": `JWT ${token}`
        }
      }

      const resData = await fetch(`${restApiUrl}/rest/add_promo_code/`,{
        method: "POST",
          headers: header,
          body: JSON.stringify(variables)
      });
      const res = await resData.json();
      const updatedCheckout = {
        ...dummyCheckoutFields,
        ...checkout,
        ...res
      }
      console.log('promo code updatedCheckout',res,updatedCheckout);
      if (res?.id) {
        storage.setCheckout(updatedCheckout);
        setLocalCheckoutInCache(
          client,
          updatedCheckout,
          true
        );
      }

      return {
        data: res,
        errors: res?.message ? [{"message":res?.message,"field": "promoCode"}] : null
      };
    }

    return null;
  };

  const removePromoCodeRest: CheckoutSDK["removePromoCodeRest"] = async (
    promoCode: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: AddCheckoutPromoCodeMutationVariables = {
        checkoutId: checkout?.id,
        promoCode,
      };
      const token = storage.getAccessToken();
      let header:any = {
        "Content-Type": "application/json"
      };
      if(token){
        header={
          ...header,
          "Authorization": `JWT ${token}`
        }
      }

      const resData = await fetch(`${restApiUrl}/rest/remove_promo_code/`,{
        method: "POST",
          headers: header,
          body: JSON.stringify(variables)
      });
      const res = await resData.json();
      const updatedCheckout = {
        ...dummyCheckoutFields,
        ...checkout,
        ...res
      }
      console.log('remove promo code updatedCheckout',res,updatedCheckout);
      if (res?.id) {
        storage.setCheckout(updatedCheckout);
        setLocalCheckoutInCache(
          client,
          updatedCheckout,
          true
        );
      }

      return {
        data: res,
        errors: res?.message ? [{"message":res?.message,"field": "promoCode"}] : null
      };
    }

    return null;
  };

  const addPromoCode: CheckoutSDK["addPromoCode"] = async (
    promoCode: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: AddCheckoutPromoCodeMutationVariables = {
        checkoutId: checkout?.id,
        promoCode,
      };

      const res = await client.mutate<
        AddCheckoutPromoCodeMutation,
        AddCheckoutPromoCodeMutationVariables
      >({
        mutation: ADD_CHECKOUT_PROMO_CODE,
        variables,
        update: (_, { data }) => {
          if (data?.checkoutAddPromoCode?.checkout?.id) {
            storage.setCheckout(data?.checkoutAddPromoCode?.checkout);
          }
          setLocalCheckoutInCache(
            client,
            data?.checkoutAddPromoCode?.checkout,
            true
          );
        },
      });

      return res;
    }

    return null;
  };

  const removePromoCode: CheckoutSDK["removePromoCode"] = async (
    promoCode: string
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: RemoveCheckoutPromoCodeMutationVariables = {
        checkoutId: checkout?.id,
        promoCode,
      };

      const res = await client.mutate<
        RemoveCheckoutPromoCodeMutation,
        RemoveCheckoutPromoCodeMutationVariables
      >({
        mutation: REMOVE_CHECKOUT_PROMO_CODE,
        variables,
        update: (_, { data }) => {
          if (data?.checkoutRemovePromoCode?.checkout?.id) {
            storage.setCheckout(data?.checkoutRemovePromoCode?.checkout);
          }
          setLocalCheckoutInCache(
            client,
            data?.checkoutRemovePromoCode?.checkout,
            true
          );
        },
      });

      return res;
    }

    return null;
  };

  const checkoutPaymentMethodUpdateRest: CheckoutSDK["checkoutPaymentMethodUpdateRest"] = async (
    input: PaymentMethodUpdateInput
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
        useCashback: input.useCashback,
      },
    });

    storage.setUseCashback(input.useCashback);

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
          
    if (checkout && checkout?.id) {
      const variables: CheckoutPaymentMethodUpdateMutationVariables = {
        checkoutId: checkout?.id,
        gatewayId: input.gateway,
        useCashback: input.useCashback,
        isRecalculate: input.isRecalculate,
        cashbackType: input.cashbackType
      };
      const token = storage.getAccessToken();
      try {
        const res = await fetch(`${restApiUrl}/rest/checkout_payment_method/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${token}`
          },
          body: JSON.stringify(variables),
        });
        const data = await res.json();
        if(data?.id){
          const updatedCheckout = {
            ...dummyCheckoutFields,
            ...data
          }
          storage.setCheckout(updatedCheckout);
          setLocalCheckoutInCache(
            client,
            updatedCheckout,
            true
          );
          return res;
        }
      } catch (error) {
        console.error('Error: checkoutPaymentMethodUpdate', error);
        return error;
      }
    }

    return null;
  };

  const checkoutPaymentMethodUpdate: CheckoutSDK["checkoutPaymentMethodUpdate"] = async (
    input: PaymentMethodUpdateInput
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
        useCashback: input.useCashback,
      },
    });

    storage.setUseCashback(input.useCashback);

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables: CheckoutPaymentMethodUpdateMutationVariables = {
        checkoutId: checkout?.id,
        gatewayId: input.gateway,
        useCashback: input.useCashback,
        isRecalculate: input.isRecalculate,
        cashbackType: input.cashbackType
      };

      const res = await client.mutate<
        CheckoutPaymentMethodUpdateMutation,
        CheckoutPaymentMethodUpdateMutationVariables
      >({
        mutation: CHECKOUT_PAYMENT_METHOD_UPDATE,
        variables,
        update: (_, { data }) => {
          setLocalCheckoutInCache(
            client,
            data?.checkoutPaymentMethodUpdate?.checkout,
            true
          );
          if (data?.checkoutPaymentMethodUpdate?.checkout?.id) {
            storage.setCheckout(data?.checkoutPaymentMethodUpdate?.checkout);
          }
        },
      });

      return res;
    }

    return null;
  };

  const createPayment: CheckoutSDK["createPayment"] = async (
    input: PaymentInput
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

    if (checkout && checkout?.id) {
      const variables: CreateCheckoutPaymentMutationVariables = {
        checkoutId: checkout?.id,
        paymentInput: { ...input, amount: checkout?.totalPrice?.gross.amount },
      };
      const res = await client.mutate<
        CreateCheckoutPaymentMutation,
        CreateCheckoutPaymentMutationVariables
      >({
        mutation: CREATE_CHECKOUT_PAYMENT,
        variables,
        update: (_, { data }) => {
          setLocalCheckoutInCache(
            client,
            data?.checkoutPaymentCreate?.checkout
          );
          if (
            data?.checkoutPaymentCreate?.errors &&
            data?.checkoutPaymentCreate?.errors[0]?.code === "NOT_FOUND" &&
            data?.checkoutPaymentCreate?.errors[0]?.field === "checkoutId" &&
            typeof window !== "undefined"
          ) {
            window.localStorage?.clear();
            window.location?.reload();
          }
          if (data?.checkoutPaymentCreate?.checkout?.id) {
            storage.setCheckout(data?.checkoutPaymentCreate?.checkout);
          }
        },
      });

      return res;
    }

    return null;
  };

  const completeCheckout: CheckoutSDK["completeCheckout"] = async (
    input: CompleteCheckoutInput | undefined
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

    if (checkout && checkout?.id) {
      const paymentDataString =
        input?.paymentData && JSON.stringify(input?.paymentData);

      const variables: CompleteCheckoutMutationVariables = {
        checkoutId: checkout?.id,
        paymentData: paymentDataString,
        redirectUrl: input?.redirectUrl,
        storeSource: input?.storeSource,
      };
      const res = await client.mutate<
        CompleteCheckoutMutation,
        CompleteCheckoutMutationVariables
      >({
        mutation: COMPLETE_CHECKOUT,
        variables,
        update: async (_, { data }) => {
          if (data?.checkoutComplete?.order?.id) {
            if (!data?.checkoutComplete.confirmationNeeded) {
              storage.setCheckout({});
              client.writeQuery({
                query: GET_LOCAL_CHECKOUT,
                data: {
                  useCashback: false,
                },
              });
            }
          }
          await setLocalCheckoutInCache(client, {}, false, data);
        },
      });

      return res;
    }

    return null;
  };

  const getCityStateFromPincode: CheckoutSDK["getCityStateFromPincode"] = async (
    pincode: string
  ) => {
    const res = await client.mutate<PincodeQuery, PincodeQueryVariables>({
      mutation: GET_CITY_STATE_FROM_PINCODE,
      variables: {
        pin: pincode,
      },
    });

    return res;
  };

  const createRazorpayOrder: CheckoutSDK["createRazorpayOrder"] = async () => {
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

    if (checkout && checkout?.id) {
      const variables: CreateRazorpayOrderMutationVariables = {
        input: {
          checkoutId: checkout?.id,
        },
      };
      const res = await client.mutate<
        CreateRazorpayOrderMutation,
        CreateRazorpayOrderMutationVariables
      >({
        mutation: CREATE_RAZORPAY_ORDER,
        variables,
        update: async () => {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        },
      });

      return res;
    }

    return { data: null };
  };

  const createPaytmOrder: CheckoutSDK["createPaytmOrder"] = async () => {
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

    if (checkout && checkout?.id) {
      const variables: PaytmTxnCreateMutationVariables = {
        input: {
          checkoutId: checkout?.id,
          email: checkout?.email,
        },
      };
      const res = await client.mutate<
        PaytmTxnCreateMutation,
        PaytmTxnCreateMutationVariables
      >({
        mutation: PAYTM_TXN_CREATE,
        variables,
        update: async () => {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        },
      });

      return res;
    }

    return { data: null };
  };

  const getWalletAmount: CheckoutSDK["getWalletAmount"] = async () => {
    const res = await client.mutate<GetWalletQuery, GetWalletQueryVariables>({
      mutation: GET_WALLET_AMOUNT,
      update: async (_, { data }) => {
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            userWalletBalance: data?.wallet?.amount,
          },
        });
      },
    });

    return res;
  };

  const getUserOrders: CheckoutSDK["getUserOrders"] = async (
    opts: OrdersByUserQueryVariables
  ) => {
    const res = useOrdersByUserQuery({
      variables: opts,
      client,
    });

    return res;
  };

  const setUseCashback: CheckoutSDK["setUseCashback"] = async (
    useCashback: boolean
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
        useCashback: useCashback,
      },
    });

    storage.setUseCashback(useCashback);
  };

  const setCheckout: CheckoutSDK["setCheckout"] = async (
    checkout: any,
    fetchDiscount?: boolean
  ) => {
    console.log("checkoutresp", checkout);
    if (checkout) {
      setLocalCheckoutInCache(client, checkout, fetchDiscount);
      storage.setCheckout(checkout);
    }
    return checkout;
  };

  const refreshCheckout: CheckoutSDK["refreshCheckout"] = async () => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
    if (checkout && checkout?.id) {
      const res = await client.mutate<
        RefreshCheckoutMutation,
        RefreshCheckoutMutationVariables
      >({
        mutation: REFRESH_CHECKOUT,
        variables: {
          checkoutId: checkout?.id,
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(client, data?.checkoutRefresh?.checkout);
          if (data?.checkoutRefresh?.checkout?.id) {
            storage.setCheckout(data?.checkoutRefresh?.checkout);
          }
        },
      });

      return res;
    }
    return null;
  };

  const reOrder: CheckoutSDK["reOrder"] = async (
    orderId: string,
    warehouseId: string,
    skipLines: boolean,
    attachUser: boolean
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });

    const res = await client.mutate<ReOrderMutation, ReOrderMutationVariables>({
      mutation: REORDER,
      variables: {
        orderId: orderId,
        warehouseId: warehouseId,
        skipLines: skipLines,
        attachUser: attachUser,
      },
      update: (_, { data }) => {
        if (data?.reOrder?.checkout?.id) {
          setLocalCheckoutInCache(client, data?.reOrder?.checkout);
          storage.setCheckout(data?.reOrder?.checkout);
        }
      },
    });

    if (res?.data?.reOrder?.reorderErrors?.length) {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: false,
        },
      });
    }

    return res;
  };

  const addTagsInCheckout = async (tags: string[]) => {
    const checkoutString = storage.getCheckout();
    const checkout: Checkout | null | undefined =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        id: checkout?.id,
        tags: tags,
      };
      await client.mutate({
        mutation: ADD_TAGS,
        variables,
      });
      await client.mutate<
        any,
        any
      >({
        mutation: CHECKOUT_DETAILS_NEW,
        variables: {
          token: checkout?.token,
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(client, data?.checkout, true);
          if (data?.me?.checkout?.id) {
            storage.setCheckout(data?.checkout);
          }
        },
      });
    }
  };

  const removeTagsInCheckout = async (tags: string[]) => {
    const checkoutString = storage.getCheckout();
    const checkout: Checkout | null | undefined =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.id) {
      const variables = {
        id: checkout?.id,
        tags: tags,
      };
      await client.mutate({
        mutation: REMOVE_TAGS,
        variables,
      });
      await client.mutate<
        any,
        any
      >({
        mutation: CHECKOUT_DETAILS_NEW,
        variables: {
          token: checkout?.token,
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(client, data?.checkout, true);
          if (data?.checkout?.id) {
            storage.setCheckout(data?.checkout);
          }
        },
      });
    }
  };

  return {
    addTagsInCheckout,
    removeTagsInCheckout,
    createCheckout,
    createCheckoutRest,
    setShippingAddress,
    setShippingAddressRest,
    setBillingAddress,
    setBillingAddressRest,
    setShippingAndBillingAddress,
    setShippingAndBillingAddressRest,
    setAddressType,
    setShippingMethod,
    addPromoCodeRest,
    addPromoCode,
    removePromoCode,
    removePromoCodeRest,
    checkoutPaymentMethodUpdate,
    checkoutPaymentMethodUpdateRest,
    createPayment,
    completeCheckout,
    getCityStateFromPincode,
    createRazorpayOrder,
    createPaytmOrder,
    getWalletAmount,
    getUserOrders,
    setUseCashback,
    setCheckout,
    refreshCheckout,
    reOrder,
  };
};