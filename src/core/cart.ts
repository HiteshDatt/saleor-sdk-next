import {
  AddItemResult,
  RemoveItemResult,
  SaleorClientMethodsProps,
  UpdateItemResult,
} from ".";

import { axiosRequest, cartItemsVar } from "../apollo/client";
import {
  getCheckoutPayments,
  getLatestCheckout,
  setLocalCheckoutInCache,
} from "../apollo/helpers";
import {
  ADD_CHECKOUT_LINE_MUTATION,
  ADD_CHECKOUT_LINE_MUTATION_NEXT,
  CREATE_CHECKOUT_MUTATION,
  CREATE_CHECKOUT_MUTATION_NEXT,
  REMOVE_CHECKOUT_LINE_MUTATION,
  UPDATE_CHECKOUT_LINE_MUTATION,
  UPDATE_CHECKOUT_LINE_MUTATION_NEXT,
} from "../apollo/mutations";
import { storage } from "./storage";
import {
  AddCheckoutLineMutation,
  AddCheckoutLineMutationVariables,
  AddCheckoutLineNextMutation,
  AddCheckoutLineNextMutationVariables,
  Checkout,
  CheckoutCreateInput,
  CheckoutLineInput,
  CreateCheckoutMutation,
  CreateCheckoutMutationVariables,
  CreateCheckoutNextMutation,
  CreateCheckoutNextMutationVariables,
  Maybe,
  RemoveCheckoutLineMutation,
  RemoveCheckoutLineMutationVariables,
  UpdateCheckoutLineMutation,
  UpdateCheckoutLineMutationVariables,
  UpdateCheckoutLineNextMutation,
  UpdateCheckoutLineNextMutationVariables,
  UserCheckoutDetailsQuery,
  UserCheckoutDetailsQueryVariables,
} from "../apollo/types";
import { GET_LOCAL_CHECKOUT, USER_CHECKOUT_DETAILS } from "../apollo/queries";
import { SALEOR_CHECKOUT, SALEOR_CHECKOUT_DISCOUNTS } from "./constants";
import { getDBIdFromGraphqlId } from "../react/utils/utils";
import {
  REST_API_ENDPOINTS,
  REST_API_METHODS_TYPES,
  dummyCheckoutFields,
} from "../constants";

export interface CartSDK {
  loaded?: boolean;

  items?: any;

  totalPrice?: any;

  subtotalPrice?: any;

  shippingPrice?: any;

  discount?: any;

  mrp?: any;

  netPrice?: any;

  itemDiscount?: any;

  offerDiscount?: any;

  prepaidDiscount?: any;

  cashbackDiscount?: any;

  cashbackRecieve?: any;

  addItem: (
    variantId: string,
    quantity: number,
    tags?: string[]
  ) => AddItemResult;
  removeItem: (
    variantId: string,
    updateShippingMethod?: boolean,
    checkoutMetadataInput?: any
  ) => RemoveItemResult;

  removeItemRest: (
    variantId: string,
    updateShippingMethod?: boolean,
    isRecalculate?: boolean,
    line_item?: any,
    checkoutMetadataInput?: any
  ) => Promise<any>;
  subtractItem?: (variantId: string, quantity: number) => {};
  updateItem: (
    variantId: string,
    quantity: number,
    prevQuantity: number
  ) => UpdateItemResult;
  addToCartNext: (
    variantId: string,
    quantity: number,
    tags?: string[],
    line_item?: any,
    useDummyAddress?: boolean,
    isRecalculate?: boolean,
    checkoutMetadataInput?: any
  ) => AddItemResult;
  addToCartRest: (
    variantId: string,
    quantity: number,
    tags?: string[],
    line_item?: any,
    useDummyAddress?: boolean,
    isRecalculate?: boolean,
    checkoutMetadataInput?: any
  ) => Promise<any>;
  updateItemNext: (
    variantId: string,
    quantity: number,
    prevQuantity: number,
    updateShippingMethod?: boolean,
    isRecalculate?: boolean
  ) => UpdateItemResult;

  updateItemRest: (
    variantId: string,
    quantity: number,
    prevQuantity: number,
    updateShippingMethod?: boolean,
    isRecalculate?: boolean,
    line_item?: any,
    checkoutMetadataInput?: any
  ) => Promise<any>;
  updateItemWithLines: (
    updatedLines: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    updateShippingMethod?: boolean,
    useCheckoutLoading?: boolean,
    isRecalculate?: boolean
  ) => UpdateItemResult;

  checkCouponValidation: (couponCodes: Array<string>) => Promise<any>;

  updateItemWithLinesRest: (
    linesToAdd: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    updateShippingMethod?: boolean,
    useCheckoutLoading?: boolean,
    isRecalculate?: boolean,
    checkoutMetadataInput?: any
  ) => Promise<any>;
  createCheckoutCartRest?: (
    linesToAdd: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    tags?: string[],
    isRecalculate?: boolean,
    checkoutMetadataInput?: any
  ) => Promise<any>;
  clearCart?: () => UpdateItemResult;
}

export const cart = ({
  apolloClient: client,
  restApiUrl,
}: SaleorClientMethodsProps): CartSDK => {
  const items = cartItemsVar();
  
  const createCheckoutCartRest: CartSDK["createCheckoutCartRest"] = async (
    linesToAdd: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    tags?: string[],
    isRecalculate = false,
    checkoutMetadataInput?: any
  ) => {
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: true,
      },
    });
    storage.setCheckout({});
    try {
      const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.CREATE_CHECKOUT}`;
      const createCheckoutInput = {
        checkoutInput: {
          lines: linesToAdd,
          email: "dummy@dummy.com",
          isRecalculate: isRecalculate,
          ...(tags ? { tags: tags } : {}),
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        },
      };
      const res = await axiosRequest(
        fullUrl,
        REST_API_METHODS_TYPES.POST,
        createCheckoutInput
      );

      const createCheckoutRes = res?.data;
      if (!res?.data?.token) {
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: res?.data || undefined,
          errors: res?.data?.errors,
        };
      }

      const updatedLines = res?.data?.lines.map((line: any) => {
        const productData = {
          ...line.variant.product,
          metadata: line?.variant?.product?.metadata || [],
          tags: line?.variant?.product?.tags?.map((tagname: string) => ({
            name: tagname,
            __typename: "TagType",
          })),
        };

        const quantityAvailableValue = line?.variant?.quantityAvailable
          ? line?.variant?.quantityAvailable
          : 50;

        const updatedLineVariantAttributes = line?.variant?.attributes?.map(
          (item: any) => {
            return {
              ...item,
              values: item.values?.map((valueItem: any) => ({
                ...valueItem,
                value: valueItem.value || valueItem.name,
              })),
            };
          }
        );
        const lineWithProduct = {
          ...line,
          variant: {
            ...line.variant,
            attributes: updatedLineVariantAttributes,
            product: productData,
            quantityAvailable: quantityAvailableValue,
          },
        };
        return lineWithProduct;
      });

      const updatedCheckout = {
        ...dummyCheckoutFields,
        ...createCheckoutRes,
        lines: updatedLines,
      };

      const resDiscount = {
        data: {
          checkoutDiscounts: {
            __typename: "DiscountsType",
            prepaidDiscount:
              updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
            couponDiscount: updatedCheckout?.paymentMethod?.couponDiscount,
            cashbackDiscount:
              updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
          },
          cashback: updatedCheckout?.cashback,
        },
      };

      storage.setDiscounts(resDiscount.data);

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          localCheckout: updatedCheckout,
          localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
          localCashback: resDiscount.data.cashback,
        },
      });

      storage.setCheckout(updatedCheckout);

      getCheckoutPayments(client, updatedCheckout);

      const returnObject = {
        data: res.data,
        errors: res?.data?.errors,
      };

      return returnObject;
    } catch (error) {
      console.log(
        "Failed to create checkout, error in createCheckoutCartRest.",
        error
      );
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: false,
        },
      });
      return null;
    }
  };

  const addItem: CartSDK["addItem"] = async (
    variantId: string,
    quantity: number,
    tags?: string[]
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

    if (checkout && checkout?.token) {
      const res = await client.mutate<
        AddCheckoutLineMutation,
        AddCheckoutLineMutationVariables
      >({
        mutation: ADD_CHECKOUT_LINE_MUTATION,
        variables: {
          checkoutId: checkout?.id,
          lines: [{ quantity: quantity, variantId: variantId }],
        },
        update: async (_, { data }) => {
          if (data?.checkoutLinesAdd?.checkout?.id) {
            storage.setCheckout(data?.checkoutLinesAdd?.checkout);
          }
          await setLocalCheckoutInCache(
            client,
            data?.checkoutLinesAdd?.checkout,
            true
          );
        },
      });
      if (
        res.data?.checkoutLinesAdd?.errors &&
        res.data?.checkoutLinesAdd?.errors[0]?.code === "NOT_FOUND" &&
        res.data?.checkoutLinesAdd?.errors[0]?.field === "checkoutId" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLinesAdd?.errors &&
        res.data?.checkoutLinesAdd?.errors[0]?.code ===
          "PRODUCT_NOT_PUBLISHED" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLinesAdd?.errors &&
        res.data?.checkoutLinesAdd?.errors[0]?.code ===
          "PRODUCT_UNAVAILABLE_FOR_PURCHASE" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLinesAdd?.errors &&
        res.data?.checkoutLinesAdd?.errors[0]?.code === "GRAPHQL_ERROR" &&
        res.data?.checkoutLinesAdd?.errors[0]?.field === "variantId" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      const returnObject = {
        data: res.data?.checkoutLinesAdd?.checkout,
        errors: res.data?.checkoutLinesAdd?.errors,
      };
      return returnObject;
    } else {
      let checkoutInputVariables: CheckoutCreateInput;
      if (tags) {
        checkoutInputVariables = {
          lines: [{ quantity: quantity, variantId: variantId }],
          email: "dummy@dummy.com",
          tags,
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
        };
      } else {
        checkoutInputVariables = {
          lines: [{ quantity: quantity, variantId: variantId }],
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
        };
      }
      const res = await client.mutate<
        CreateCheckoutMutation,
        CreateCheckoutMutationVariables
      >({
        mutation: CREATE_CHECKOUT_MUTATION,
        variables: {
          checkoutInput: checkoutInputVariables,
        },
        update: (_, { data }) => {
          setLocalCheckoutInCache(client, data?.checkoutCreate?.checkout, true);
          if (data?.checkoutCreate?.checkout?.id) {
            storage.setCheckout(data?.checkoutCreate?.checkout);
          }
        },
      });
      const returnObject = {
        data: res.data?.checkoutCreate?.checkout,
        errors: res.data?.checkoutCreate?.errors,
      };
      return returnObject;
    }
  };

  const removeItem: CartSDK["removeItem"] = async (
    variantId: string,
    updateShippingMethod: boolean = true,
    checkoutMetadataInput?: any
  ) => {
    const checkoutString = storage.getCheckout();
    const checkout: Checkout | null =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
    const lineToRemove =
      checkout &&
      checkout?.lines?.find((line) => line?.variant.id === variantId);
    const lineToRemoveId = lineToRemove?.id;

    if (checkout && checkout?.token) {
      const res = await client.mutate<
        RemoveCheckoutLineMutation,
        RemoveCheckoutLineMutationVariables
      >({
        mutation: REMOVE_CHECKOUT_LINE_MUTATION,
        variables: {
          checkoutId: checkout?.id,
          lineId: lineToRemoveId,
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        },
      });

      if (
        res.data?.checkoutLineDelete?.errors &&
        res.data?.checkoutLineDelete?.errors[0]?.code === "NOT_FOUND" &&
        res.data?.checkoutLineDelete?.errors[0]?.field === "checkoutId" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLineDelete?.errors &&
        res.data?.checkoutLineDelete?.errors[0]?.code ===
          "PRODUCT_NOT_PUBLISHED" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLineDelete?.errors &&
        res.data?.checkoutLineDelete?.errors[0]?.code ===
          "PRODUCT_UNAVAILABLE_FOR_PURCHASE" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }
      if (
        res.data?.checkoutLineDelete?.errors &&
        res.data?.checkoutLineDelete?.errors[0]?.code === "GRAPHQL_ERROR" &&
        res.data?.checkoutLineDelete?.errors[0]?.field === "variantId" &&
        typeof window !== "undefined"
      ) {
        window.localStorage?.clear();
        window.location?.reload();
      }

      if (res?.data?.checkoutLineDelete?.checkout?.id) {
        storage.setCheckout(res?.data?.checkoutLineDelete?.checkout);
        const resDiscount = {
          data: {
            __typename: "DiscountsType",
            checkoutDiscounts: {
              prepaidDiscount:
                res?.data?.checkoutLineDelete?.checkout?.paymentMethod
                  ?.prepaidDiscountAmount,
              couponDiscount:
                res?.data?.checkoutLineDelete?.checkout?.paymentMethod
                  ?.couponDiscount,
              cashbackDiscount:
                res?.data?.checkoutLineDelete?.checkout?.paymentMethod
                  ?.cashbackDiscountAmount,
            },
            cashback: res?.data?.checkoutLineDelete?.checkout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: res?.data?.checkoutLineDelete?.checkout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });
        if (updateShippingMethod) {
          await setLocalCheckoutInCache(
            client,
            res.data?.checkoutLineDelete?.checkout,
            true
          );
        }

        return {
          data: res.data?.checkoutLineDelete?.checkout,
          errors: res.data?.checkoutLineDelete?.errors,
        };
      }

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: false,
        },
      });
    }
    return null;
  };

  const removeItemRest: CartSDK["removeItemRest"] = async (
    variantId: string,
    updateShippingMethod = true,
    isRecalculate = false,
    line_item: any,
    checkoutMetadataInput: any
  ) => {
    const checkoutString = storage.getCheckout();
    const checkout: Checkout | null =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.token) {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: true,
        },
      });

      try {
        const dbVariantId = getDBIdFromGraphqlId(variantId, "ProductVariant");
        if (dbVariantId) {
          const input = {
            checkoutId: checkout?.token,
            lines: [
              {
                quantity: 0,
                variantId: String(dbVariantId),
              },
            ],
            isRecalculate,
            ...(checkoutMetadataInput
              ? { checkoutMetadataInput: checkoutMetadataInput }
              : {}),
          };
          const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.UPDATE_CART}`;
          const res = await axiosRequest(
            fullUrl,
            REST_API_METHODS_TYPES.POST,
            input
          );

          if (!res?.data?.token) {
            if (res?.data?.includes("Checkout ID not found")) {
              createCheckoutCartRest(
                [],
                undefined,
                isRecalculate,
                checkoutMetadataInput
              );
            } else {
              await getLatestCheckout(client, checkout);
              client.writeQuery({
                query: GET_LOCAL_CHECKOUT,
                data: {
                  checkoutLoading: false,
                },
              });
              return {
                data: res?.data,
                errors: res?.data?.errors,
              };
            }
          }

          if (res?.data?.token) {
            const updatedLines = res?.data?.lines.map((line: any) => {
              const productData = {
                ...line.variant.product,
                metadata: line?.variant?.product?.metadata || [],
                tags: line?.variant?.product?.tags?.map((tagname: string) => ({
                  name: tagname,
                  __typename: "TagType",
                })),
              };

              const updatedLineVariantAttributes =
                line?.variant?.attributes?.map((item: any) => {
                  return {
                    ...item,
                    values: item.values?.map((valueItem: any) => ({
                      ...valueItem,
                      value: valueItem.value || valueItem.name,
                    })),
                  };
                });
              const lineWithProduct = {
                ...line,
                variant: {
                  ...line.variant,
                  attributes: updatedLineVariantAttributes,
                  product: productData,
                  quantityAvailable:
                    line_item?.variant?.quantityAvailable || 50,
                },
              };
              return lineWithProduct;
            });
            const updatedCheckout = {
              ...checkout,
              ...res.data,
              lines: updatedLines,
            };
            storage.setCheckout(updatedCheckout);
            const result = {
              data: {
                checkoutDiscounts: {
                  __typename: "DiscountsType",
                  prepaidDiscount:
                    updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
                  couponDiscount:
                    updatedCheckout?.paymentMethod?.couponDiscount,
                  cashbackDiscount:
                    updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
                },
                cashback: res?.data?.cashback,
              },
            };

            storage.setDiscounts(result.data);

            client.writeQuery({
              query: GET_LOCAL_CHECKOUT,
              data: {
                localCheckout: updatedCheckout,
                localCheckoutDiscounts: result.data.checkoutDiscounts,
                localCashback: result.data.cashback,
                checkoutLoading: false,
              },
            });

            getCheckoutPayments(client, updatedCheckout);

            if (updateShippingMethod) {
              await setLocalCheckoutInCache(
                client,
                res.data?.checkoutLinesUpdate?.checkout,
                true
              );
            }

            return {
              data: updatedCheckout,
              errors: res?.data?.errors || [],
            };
          }
        }
      } catch (error) {
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
      }

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: false,
        },
      });
    }
    return null;
  };

  const updateItem: CartSDK["updateItem"] = async (
    variantId: string,
    quantity: number,
    prevQuantity: number
  ) => {
    const differenceQuantity = quantity - prevQuantity;
    if (differenceQuantity > 0) {
      const res = await addItem(variantId, differenceQuantity);
      return res;
    } else {
      const checkoutString = storage.getCheckout();

      const checkout =
        checkoutString && typeof checkoutString === "string"
          ? JSON.parse(checkoutString)
          : checkoutString;
      const alteredLines =
        checkout &&
        checkout?.lines
          .filter((line: any) => line.variant.id !== variantId)
          .map((line: any) => ({
            quantity: line.quantity,
            variantId: line.variant.id,
          }));

      alteredLines.push({ quantity: quantity, variantId: variantId });

      if (checkout && checkout?.token) {
        const res = await client.mutate<
          UpdateCheckoutLineMutation,
          UpdateCheckoutLineMutationVariables
        >({
          mutation: UPDATE_CHECKOUT_LINE_MUTATION,
          variables: {
            checkoutId: checkout?.id,
            lines: alteredLines,
          },
          update: async (_, { data }) => {
            if (data?.checkoutLinesUpdate?.checkout?.id) {
              storage.setCheckout(data?.checkoutLinesUpdate?.checkout);
            }
            await setLocalCheckoutInCache(
              client,
              data?.checkoutLinesUpdate?.checkout,
              true
            );
          },
        });
        return {
          data: res.data?.checkoutLinesUpdate?.checkout,
          errors: res.data?.checkoutLinesUpdate?.errors,
        };
      }
    }
    return null;
  };

  const addToCartNext: CartSDK["addToCartNext"] = async (
    variantId: string,
    quantity: number,
    tags?: string[],
    line_item?: any,
    useDummyAddress: boolean = true,
    isRecalculate = false,
    checkoutMetadataInput?: any
  ) => {
    const checkoutString = storage.getCheckout();
    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (line_item && checkout?.id) {
      const res = client.readQuery({
        query: GET_LOCAL_CHECKOUT,
      });
      const checkout = res?.localCheckout;
      let existingLines = [];
      if (
        checkout.lines.find(
          (line: any) => line.variant.id === line_item.variant.id
        )
      ) {
        existingLines = checkout.lines.map((line: any) => {
          if (line.variant.id === line_item.variant.id) {
            return {
              ...line,
              quantity: line.quantity + quantity,
            };
          } else {
            return {
              ...line,
            };
          }
        });
      } else {
        existingLines = [...checkout.lines, line_item];
      }
      const updatedCheckout = { ...checkout, lines: existingLines };

      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          localCheckout: updatedCheckout,
          checkoutLoading: true,
        },
      });
    } else {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: true,
        },
      });
    }

    if (checkout && checkout?.token) {
      try {
        const res = await client.mutate<
          AddCheckoutLineNextMutation,
          AddCheckoutLineNextMutationVariables
        >({
          mutation: ADD_CHECKOUT_LINE_MUTATION_NEXT,
          variables: {
            checkoutId: checkout?.id,
            lines: [{ quantity: quantity, variantId: variantId }],
            isRecalculate,
            ...(checkoutMetadataInput
              ? { checkoutMetadataInput: checkoutMetadataInput }
              : {}),
          },
        });

        if (
          res.data?.checkoutLinesAdd?.errors &&
          res.data?.checkoutLinesAdd?.errors[0]?.code === "NOT_FOUND" &&
          res.data?.checkoutLinesAdd?.errors[0]?.field === "checkoutId" &&
          typeof window !== "undefined"
        ) {
          localStorage.removeItem(SALEOR_CHECKOUT);
          localStorage.removeItem(SALEOR_CHECKOUT_DISCOUNTS);
          window.location.reload();
        }
        if (
          res.data?.checkoutLinesAdd?.errors &&
          res.data?.checkoutLinesAdd?.errors[0]?.code ===
            "PRODUCT_NOT_PUBLISHED" &&
          typeof window !== "undefined"
        ) {
          localStorage.removeItem(SALEOR_CHECKOUT);
          localStorage.removeItem(SALEOR_CHECKOUT_DISCOUNTS);
          window.location.reload();
        }
        if (
          res.data?.checkoutLinesAdd?.errors &&
          res.data?.checkoutLinesAdd?.errors[0]?.code ===
            "PRODUCT_UNAVAILABLE_FOR_PURCHASE" &&
          typeof window !== "undefined"
        ) {
          localStorage.removeItem(SALEOR_CHECKOUT);
          localStorage.removeItem(SALEOR_CHECKOUT_DISCOUNTS);
          window.location.reload();
        }
        if (
          res.data?.checkoutLinesAdd?.errors &&
          res.data?.checkoutLinesAdd?.errors[0]?.code === "GRAPHQL_ERROR" &&
          res.data?.checkoutLinesAdd?.errors[0]?.field === "variantId" &&
          typeof window !== "undefined"
        ) {
          localStorage.removeItem(SALEOR_CHECKOUT);
          localStorage.removeItem(SALEOR_CHECKOUT_DISCOUNTS);
          window.location.reload();
        }

        if (!res.data?.checkoutLinesAdd?.checkout?.id) {
          await getLatestCheckout(client, checkout);
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return {
            data: null,
            errors: res?.data?.checkoutLinesAdd?.errors,
          };
        }

        storage.setCheckout(res.data?.checkoutLinesAdd?.checkout);
        const resDiscount = {
          data: {
            checkoutDiscounts: {
              __typename: "DiscountsType",
              prepaidDiscount:
                res.data?.checkoutLinesAdd?.checkout?.paymentMethod
                  ?.prepaidDiscountAmount,
              couponDiscount:
                res.data?.checkoutLinesAdd?.checkout?.paymentMethod
                  ?.couponDiscount,
              cashbackDiscount:
                res.data?.checkoutLinesAdd?.checkout?.paymentMethod
                  ?.cashbackDiscountAmount,
            },
            cashback: res.data?.checkoutLinesAdd?.checkout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: res.data?.checkoutLinesAdd?.checkout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });

        if (useDummyAddress) {
          await setLocalCheckoutInCache(
            client,
            res.data?.checkoutLinesAdd?.checkout,
            true
          );
          return {
            data: res.data?.checkoutLinesAdd?.checkout,
            errors: res?.data?.checkoutLinesAdd?.errors,
          };
        }

        let returnObject = {
          data: res.data?.checkoutLinesAdd?.checkout,
          errors: res?.data?.checkoutLinesAdd?.errors,
        };

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });

        return returnObject;
      } catch {
        await getLatestCheckout(client, checkout);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: null,
          errors: undefined,
        };
      }
    } else {
      let checkoutInputVariables: CheckoutCreateInput;
      if (tags && useDummyAddress) {
        checkoutInputVariables = {
          lines: [{ quantity: quantity, variantId: variantId }],
          email: "dummy@dummy.com",
          tags,
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
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        };
      } else if (useDummyAddress) {
        checkoutInputVariables = {
          lines: [{ quantity: quantity, variantId: variantId }],
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
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        };
      } else {
        checkoutInputVariables = {
          lines: [{ quantity: quantity, variantId: variantId }],
          email: "dummy@dummy.com",
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        };
      }

      try {
        const res = await client.mutate<
          CreateCheckoutNextMutation,
          CreateCheckoutNextMutationVariables
        >({
          mutation: CREATE_CHECKOUT_MUTATION_NEXT,
          variables: {
            checkoutInput: checkoutInputVariables,
          },
        });
        const checkout = res?.data?.checkoutCreate?.checkout;
        if (!checkout?.id) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return {
            data: undefined,
            errors: res?.data?.checkoutCreate?.errors,
          };
        }

        storage.setCheckout(res.data?.checkoutCreate?.checkout);

        const resDiscount = {
          data: {
            checkoutDiscounts: {
              __typename: "DiscountsType",
              prepaidDiscount:
                res.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.prepaidDiscountAmount,
              couponDiscount:
                res.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.couponDiscount,
              cashbackDiscount:
                res.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.cashbackDiscountAmount,
            },
            cashback: res.data?.checkoutCreate?.checkout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: res.data?.checkoutCreate?.checkout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });

        if (useDummyAddress) {
          await setLocalCheckoutInCache(
            client,
            res.data?.checkoutCreate?.checkout,
            true
          );
          return {
            data: res.data?.checkoutCreate?.checkout,
            errors: res?.data?.checkoutCreate?.errors,
          };
        }

        let returnObject = {
          data: res.data?.checkoutCreate?.checkout,
          errors: res?.data?.checkoutCreate?.errors,
        };

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return returnObject;
      } catch {
        await getLatestCheckout(client, checkout);
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
        return {
          data: null,
          errors: undefined,
        };
      }
    }
  };

  const addToCartRest: CartSDK["addToCartRest"] = async (
    variantId: string,
    quantity: number,
    tags?: string[],
    line_item?: any,
    useDummyAddress = true,
    isRecalculate = false,
    checkoutMetadataInput?: any
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

    try {
      if (checkout && checkout?.token) {
        const dbVariantId = getDBIdFromGraphqlId(variantId, "ProductVariant");
        const lines = [
          {
            quantity: quantity,
            variantId: String(dbVariantId),
          },
        ];
        if (dbVariantId && quantity) {
          const input = {
            checkoutId: checkout?.token,
            lines,
            isRecalculate,
            ...(checkoutMetadataInput
              ? { checkoutMetadataInput: checkoutMetadataInput }
              : {}),
          };
          const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.ADD_TO_CART}`;
          await axiosRequest(
            fullUrl,
            REST_API_METHODS_TYPES.POST,
            input
          );
          const res = await client.mutate<
            UserCheckoutDetailsQuery,
            UserCheckoutDetailsQueryVariables
          >({
            mutation: USER_CHECKOUT_DETAILS,
            variables: {},
          });
          console.log("response of graph api in addToCart", JSON.stringify(res));

          if (res?.data?.me?.checkout?.token) {
            const updatedLines = res?.data?.me?.checkout?.lines?.map((line: any) => {
              const productData = {
                ...line?.variant?.product,
                metadata: line?.variant?.product?.metadata || [],
                tags: line?.variant?.product?.tags?.map((tagname: string) => ({
                  name: tagname,
                  __typename: "TagType",
                })),
              };
              const quantityAvailableValue =
                line?.variant?.id === variantId &&
                line_item?.variant?.quantityAvailable
                  ? line_item?.variant?.quantityAvailable
                  : line.variant.quantityAvailable || 50;

              const updatedLineVariantAttributes =
                line?.variant?.attributes?.map((item: any) => {
                  return {
                    ...item,
                    values: item.values?.map((valueItem: any) => ({
                      ...valueItem,
                      value: valueItem.value || valueItem.name,
                    })),
                  };
                });
              const lineWithProduct = {
                ...line,
                variant: {
                  ...line.variant,
                  attributes: updatedLineVariantAttributes,
                  product: productData,
                  quantityAvailable: quantityAvailableValue,
                },
              };
              return lineWithProduct;
            });
            const updatedCheckout = {
              ...checkout,
              ...res.data.me.checkout,
              lines: updatedLines,
            };
            console.log("updatedCheckout", updatedCheckout);
            storage.setCheckout(updatedCheckout);
            const result = {
              data: {
                checkoutDiscounts: {
                  __typename: "DiscountsType",
                  prepaidDiscount:
                    updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
                  couponDiscount:
                    updatedCheckout?.paymentMethod?.couponDiscount,
                  cashbackDiscount:
                    updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
                },
                cashback: updatedCheckout?.cashback,
              },
            };

            storage.setDiscounts(result.data);

            client.writeQuery({
              query: GET_LOCAL_CHECKOUT,
              data: {
                localCheckout: updatedCheckout,
                localCheckoutDiscounts: result.data.checkoutDiscounts,
                localCashback: result.data.cashback,
                checkoutLoading: false,
              },
            });

            getCheckoutPayments(client, updatedCheckout);

            return {
              data: updatedCheckout,
              errors: res?.data?.me?.checkout?.errors || [],
            };
          } else if (res?.data?.me?.checkout?.includes("Checkout ID not found")) {
            createCheckoutCartRest(
              lines,
              tags,
              isRecalculate,
              checkoutMetadataInput
            );
          }
        }
      } else {
        try {
          const dbVariantId = getDBIdFromGraphqlId(variantId, "ProductVariant");
          const createCheckoutInput = tags
            ? {
                checkoutInput: {
                  lines: [{ quantity: quantity, variantId: dbVariantId }],
                  email: "dummy@dummy.com",
                  isRecalculate: isRecalculate,
                  tags,
                  ...(checkoutMetadataInput
                    ? { checkoutMetadataInput: checkoutMetadataInput }
                    : {}),
                },
              }
            : {
                checkoutInput: {
                  lines: [{ quantity: quantity, variantId: dbVariantId }],
                  email: "dummy@dummy.com",
                  isRecalculate: isRecalculate,
                  ...(checkoutMetadataInput
                    ? { checkoutMetadataInput: checkoutMetadataInput }
                    : {}),
                },
              };
          const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.CREATE_CHECKOUT}`;
          await axiosRequest(
            fullUrl,
            REST_API_METHODS_TYPES.POST,
            createCheckoutInput
          );
          const res = await client.mutate<
            UserCheckoutDetailsQuery,
            UserCheckoutDetailsQueryVariables
          >({
            mutation: USER_CHECKOUT_DETAILS,
            variables: {},
          });
          const createCheckoutRes = res?.data?.me?.checkout;
          if (!res?.data?.me?.checkout?.token) {
            client.writeQuery({
              query: GET_LOCAL_CHECKOUT,
              data: {
                checkoutLoading: false,
              },
            });
            return {
              data: res?.data?.me?.checkout || undefined,
              errors: res?.data?.errors,
            };
          }
          const updatedLines = res?.data?.me?.checkout?.lines?.map((line: any) => {
            const productData = {
              ...line.variant.product,
              metadata: line?.variant?.product?.metadata || [],
              tags: line?.variant?.product?.tags?.map((tagname: string) => ({
                name: tagname,
                __typename: "TagType",
              })),
            };
            const quantityAvailableValue =
              line?.variant?.id === variantId &&
              line_item?.variant?.quantityAvailable
                ? line_item?.variant?.quantityAvailable
                : line.variant.quantityAvailable || 50;

            const updatedLineVariantAttributes = line?.variant?.attributes?.map(
              (item: any) => {
                return {
                  ...item,
                  values: item.values?.map((valueItem: any) => ({
                    ...valueItem,
                    value: valueItem.value || valueItem.name,
                  })),
                };
              }
            );
            const lineWithProduct = {
              ...line,
              variant: {
                ...line.variant,
                attributes: updatedLineVariantAttributes,
                product: productData,
                quantityAvailable: quantityAvailableValue,
              },
            };
            return lineWithProduct;
          });

          const createCheckoutResUpdated = {
            ...createCheckoutRes,
            lines: updatedLines,
          };
          const updatedCheckout = {
            ...dummyCheckoutFields,
            ...createCheckoutResUpdated,
          };
          
          console.log("this is updated checkout", updatedCheckout);

          storage.setCheckout(updatedCheckout);

          const resDiscount = {
            data: {
              checkoutDiscounts: {
                __typename: "DiscountsType",
                prepaidDiscount:
                  updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
                couponDiscount: updatedCheckout?.paymentMethod?.couponDiscount,
                cashbackDiscount:
                  updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
              },
              cashback: updatedCheckout?.cashback,
            },
          };

          storage.setDiscounts(resDiscount.data);

          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              localCheckout: updatedCheckout,
              localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
              localCashback: resDiscount.data.cashback,
            },
          });

          getCheckoutPayments(client, updatedCheckout);

          if (useDummyAddress) {
            await setLocalCheckoutInCache(client, updatedCheckout, true);
            return {
              data: updatedCheckout,
              errors: res?.data?.errors,
            };
          }

          const returnObject = {
            data: res.data?.me?.checkout,
            errors: res?.data?.errors,
          };

          // client.writeQuery({
          //   query: GET_LOCAL_CHECKOUT,
          //   data: {
          //     checkoutLoading: false,
          //   },
          // });
          return returnObject;
        } catch(error) {
          console.log("get latest checkout error", error);
          await getLatestCheckout(client, checkout);
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return {
            data: null,
            errors: undefined,
          };
        }
      }
    } catch (error) {
      console.log("Failed to add product in cart, error in atc rest.", error);
    }
    client.writeQuery({
      query: GET_LOCAL_CHECKOUT,
      data: {
        checkoutLoading: false,
      },
    });
    return null;
  };

  const updateItemRest: CartSDK["updateItemRest"] = async (
    variantId: string,
    quantity: number,
    prevQuantity: number,
    updateShippingMethod: boolean = true,
    isRecalculate = false,
    line_item?: any,
    checkoutMetadataInput?: any
  ) => {
    const differenceQuantity = quantity - prevQuantity;
    if (differenceQuantity > 0) {
      const res = await addToCartRest(
        variantId,
        differenceQuantity,
        undefined,
        undefined,
        updateShippingMethod,
        isRecalculate,
        checkoutMetadataInput
      );
      return res;
    } else {
      const checkoutString = storage.getCheckout();

      const checkout =
        checkoutString && typeof checkoutString === "string"
          ? JSON.parse(checkoutString)
          : checkoutString;

      if (checkout && checkout?.token) {
        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: true,
          },
        });

        try {
          const dbVariantId = getDBIdFromGraphqlId(variantId, "ProductVariant");
          if (dbVariantId && quantity) {
            const lines = [
              {
                quantity: quantity,
                variantId: String(dbVariantId),
              },
            ];
            const input = {
              checkoutId: checkout?.token,
              lines,
              isRecalculate,
              ...(checkoutMetadataInput
                ? { checkoutMetadataInput: checkoutMetadataInput }
                : {}),
            };
            const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.UPDATE_CART}`;
            const res = await axiosRequest(
              fullUrl,
              REST_API_METHODS_TYPES.POST,
              input
            );

            if (!res?.data?.token) {
              if (res?.data?.includes("Checkout ID not found")) {
                createCheckoutCartRest(
                  lines,
                  undefined,
                  isRecalculate,
                  checkoutMetadataInput
                );
              } else {
                await getLatestCheckout(client, checkout);
                client.writeQuery({
                  query: GET_LOCAL_CHECKOUT,
                  data: {
                    checkoutLoading: false,
                  },
                });
                return {
                  data: res?.data,
                  errors: res?.data?.errors,
                };
              }
            }

            if (res?.data?.token) {
              const updatedLines = res?.data?.lines.map((line: any) => {
                const productData = {
                  ...line.variant.product,
                  metadata: line?.variant?.product?.metadata || [],
                  tags: line?.variant?.product?.tags?.map(
                    (tagname: string) => ({
                      name: tagname,
                      __typename: "TagType",
                    })
                  ),
                };
                const quantityAvailableValue =
                  line?.variant?.id === variantId &&
                  line_item?.variant?.quantityAvailable
                    ? line_item?.variant?.quantityAvailable
                    : line.variant.quantityAvailable || 50;

                const updatedLineVariantAttributes =
                  line?.variant?.attributes?.map((item: any) => {
                    return {
                      ...item,
                      values: item.values?.map((valueItem: any) => ({
                        ...valueItem,
                        value: valueItem.value || valueItem.name,
                      })),
                    };
                  });

                const lineWithProduct = {
                  ...line,
                  variant: {
                    ...line.variant,
                    attributes: updatedLineVariantAttributes,
                    product: productData,
                    quantityAvailable: quantityAvailableValue,
                  },
                };
                return lineWithProduct;
              });
              const updatedCheckout = {
                ...checkout,
                ...res.data,
                lines: updatedLines,
              };
              storage.setCheckout(updatedCheckout);
              const result = {
                data: {
                  checkoutDiscounts: {
                    __typename: "DiscountsType",
                    prepaidDiscount:
                      updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
                    couponDiscount:
                      updatedCheckout?.paymentMethod?.couponDiscount,
                    cashbackDiscount:
                      updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
                  },
                  cashback: res?.data?.cashback,
                },
              };

              storage.setDiscounts(result.data);

              client.writeQuery({
                query: GET_LOCAL_CHECKOUT,
                data: {
                  localCheckout: updatedCheckout,
                  localCheckoutDiscounts: result.data.checkoutDiscounts,
                  localCashback: result.data.cashback,
                  checkoutLoading: false,
                },
              });

              getCheckoutPayments(client, updatedCheckout);

              if (updateShippingMethod) {
                await setLocalCheckoutInCache(client, updatedCheckout, true);
              }

              return {
                data: updatedCheckout,
                errors: res?.data?.errors || [],
              };
            }
          }
        } catch (error) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        }

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });
      }
      return null;
    }
  };

  const updateItemNext: CartSDK["updateItemNext"] = async (
    variantId: string,
    quantity: number,
    prevQuantity: number,
    updateShippingMethod: boolean = true,
    isRecalculate = false
  ) => {
    const differenceQuantity = quantity - prevQuantity;
    if (differenceQuantity > 0) {
      const res = await addToCartNext(
        variantId,
        differenceQuantity,
        undefined,
        undefined,
        updateShippingMethod,
        isRecalculate
      );
      return res;
    } else {
      const checkoutString = storage.getCheckout();

      const checkout =
        checkoutString && typeof checkoutString === "string"
          ? JSON.parse(checkoutString)
          : checkoutString;
      const alteredLines =
        checkout &&
        checkout?.lines
          .filter((line: any) => line.variant.id !== variantId)
          .map((line: any) => ({
            quantity: line.quantity,
            variantId: line.variant.id,
          }));

      alteredLines.push({ quantity: quantity, variantId: variantId });

      if (checkout && checkout?.token) {
        const res = await client.mutate<
          UpdateCheckoutLineNextMutation,
          UpdateCheckoutLineNextMutationVariables
        >({
          mutation: UPDATE_CHECKOUT_LINE_MUTATION_NEXT,
          variables: {
            checkoutId: checkout?.id,
            lines: alteredLines,
            isRecalculate,
          },
        });

        if (!res?.data?.checkoutLinesUpdate?.checkout?.id) {
          await getLatestCheckout(client, checkout);
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
          return {
            data: null,
            errors: res?.data?.checkoutLinesUpdate?.errors,
          };
        }

        if (res?.data?.checkoutLinesUpdate?.checkout?.id) {
          storage.setCheckout(res?.data?.checkoutLinesUpdate?.checkout);
          const resDiscount = {
            data: {
              __typename: "DiscountsType",
              checkoutDiscounts: {
                prepaidDiscount:
                  res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                    ?.prepaidDiscountAmount,
                couponDiscount:
                  res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                    ?.couponDiscount,
                cashbackDiscount:
                  res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                    ?.cashbackDiscountAmount,
              },
              cashback: res?.data?.checkoutLinesUpdate?.checkout?.cashback,
            },
          };

          storage.setDiscounts(resDiscount.data);

          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              localCheckout: res?.data?.checkoutLinesUpdate?.checkout,
              localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
              localCashback: resDiscount.data.cashback,
            },
          });

          if (updateShippingMethod) {
            await setLocalCheckoutInCache(
              client,
              res.data?.checkoutLinesUpdate?.checkout,
              true
            );
          }
        } else {
          throw new Error("UpdateCheckoutShippingMethodNext failed");
        }
        var returnObject = {
          data: res?.data?.checkoutLinesUpdate?.checkout,
          errors: res?.data?.checkoutLinesUpdate?.errors,
        };

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            checkoutLoading: false,
          },
        });

        return returnObject;
      }
    }
    return null;
  };

  const updateItemWithLinesRest: CartSDK["updateItemWithLinesRest"] = async (
    linesToAdd: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    updateShippingMethod = true,
    useCheckoutLoading = true,
    isRecalculate = false,
    checkoutMetadataInput?: any
  ) => {
    if (useCheckoutLoading) {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: true,
        },
      });
    }
    const checkoutString = storage.getCheckout();

    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.token && linesToAdd) {
      const input = {
        checkoutId: checkout?.token,
        lines: linesToAdd,
        isRecalculate,
        ...(checkoutMetadataInput
          ? { checkoutMetadataInput: checkoutMetadataInput }
          : {}),
      };

      const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.UPDATE_CART}`;
      const res = await axiosRequest(
        fullUrl,
        REST_API_METHODS_TYPES.POST,
        input
      );
      if (!res?.data?.token) {
        if (res?.data?.includes("Checkout ID not found")) {
          createCheckoutCartRest(
            linesToAdd,
            undefined,
            isRecalculate,
            checkoutMetadataInput
          );
        } else {
          await getLatestCheckout(client, checkout);
          if (useCheckoutLoading) {
            client.writeQuery({
              query: GET_LOCAL_CHECKOUT,
              data: {
                checkoutLoading: false,
              },
            });
          }
          return {
            data: null,
            errors: res?.data?.checkoutLinesUpdate?.errors,
          };
        }
      }

      if (res?.data?.token) {
        const updatedLines = res?.data?.lines.map((line: any) => {
          const productData = {
            ...line.variant.product,
            metadata: line?.variant?.product?.metadata || [],
            tags: line?.variant?.product?.tags?.map((tagname: string) => ({
              name: tagname,
              __typename: "TagType",
            })),
          };
          const quantityAvailableValue = line.variant.quantityAvailable || 50;

          const updatedLineVariantAttributes = line?.variant?.attributes?.map(
            (item: any) => {
              return {
                ...item,
                values: item.values?.map((valueItem: any) => ({
                  ...valueItem,
                  value: valueItem.value || valueItem.name,
                })),
              };
            }
          );

          const lineWithProduct = {
            ...line,
            variant: {
              ...line.variant,
              attributes: updatedLineVariantAttributes,
              product: productData,
              quantityAvailable: quantityAvailableValue,
            },
          };
          return lineWithProduct;
        });
        const updatedCheckout = {
          ...checkout,
          ...res.data,
          lines: updatedLines,
        };

        storage.setCheckout(updatedCheckout);

        const resDiscount = {
          data: {
            __typename: "DiscountsType",
            checkoutDiscounts: {
              prepaidDiscount:
                updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
              couponDiscount: updatedCheckout?.paymentMethod?.couponDiscount,
              cashbackDiscount:
                updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
            },
            cashback: updatedCheckout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: updatedCheckout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });
        getCheckoutPayments(client, updatedCheckout);
        if (updateShippingMethod) {
          await setLocalCheckoutInCache(client, updatedCheckout, true);
        }
      }
      return {
        data: res?.data,
        errors: res.data?.errors,
      };
    } else {
      const createCheckoutInput = {
        checkoutInput: {
          lines: linesToAdd,
          email: "dummy@dummy.com",
          isRecalculate: isRecalculate,
          ...(checkoutMetadataInput
            ? { checkoutMetadataInput: checkoutMetadataInput }
            : {}),
        },
      };
      const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.CREATE_CHECKOUT}`;
      const res = await axiosRequest(
        fullUrl,
        REST_API_METHODS_TYPES.POST,
        createCheckoutInput
      );

      if (!res?.data?.token) {
        await getLatestCheckout(client, checkout);
        if (useCheckoutLoading) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        }
        return {
          data: null,
          errors: res?.data?.checkoutCreate?.errors,
        };
      }

      if (res?.data?.token) {
        const updatedLines = res?.data?.lines.map((line: any) => {
          const productData = {
            ...line.variant.product,
            metadata: line?.variant?.product?.metadata || [],
            tags: line?.variant?.product?.tags?.map((tagname: string) => ({
              name: tagname,
              __typename: "TagType",
            })),
          };
          const quantityAvailableValue = line.variant.quantityAvailable || 50;
          const updatedLineVariantAttributes = line?.variant?.attributes?.map(
            (item: any) => {
              return {
                ...item,
                values: item.values?.map((valueItem: any) => ({
                  ...valueItem,
                  value: valueItem.value || valueItem.name,
                })),
              };
            }
          );
          const lineWithProduct = {
            ...line,
            variant: {
              ...line.variant,
              attributes: updatedLineVariantAttributes,
              product: productData,
              quantityAvailable: quantityAvailableValue,
            },
          };
          return lineWithProduct;
        });

        const createCheckoutResUpdated = {
          ...res?.data,
          lines: updatedLines,
        };

        const updatedCheckout = {
          ...dummyCheckoutFields,
          ...createCheckoutResUpdated,
        };

        storage.setCheckout(updatedCheckout);

        const resDiscount = {
          data: {
            __typename: "DiscountsType",
            checkoutDiscounts: {
              prepaidDiscount:
                updatedCheckout?.paymentMethod?.prepaidDiscountAmount,
              couponDiscount: updatedCheckout?.paymentMethod?.couponDiscount,
              cashbackDiscount:
                updatedCheckout?.paymentMethod?.cashbackDiscountAmount,
            },
            cashback: updatedCheckout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: updatedCheckout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });

        getCheckoutPayments(client, updatedCheckout);

        if (updateShippingMethod) {
          await setLocalCheckoutInCache(client, updatedCheckout, true);
        }
      }
      const returnObject = {
        data: res?.data,
        errors: res?.data?.errors,
      };
      return returnObject;
    }
  };

  const checkCouponValidation: CartSDK["checkCouponValidation"] = async couponCodes => {
    const checkoutString = storage.getCheckout();

    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    let result: any = null;

    if (checkout && checkout?.token) {
      const fullUrl = `${restApiUrl}${REST_API_ENDPOINTS.VALIDATE_COUPON}`;
      const coupons =
        Array.isArray(couponCodes) && couponCodes.length ? couponCodes : [];
      const input = {
        checkoutId: checkout?.token,
        codes: coupons,
      };

      try {
        const res = await axiosRequest(
          fullUrl,
          REST_API_METHODS_TYPES.POST,
          input
        );

        if (res?.data) {
          result = res.data;
        }
      } catch (err) {
        console.log("coupon error:", err);
      }
    }

    return result;
  };

  const updateItemWithLines: CartSDK["updateItemWithLines"] = async (
    updatedLines: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>,
    updateShippingMethod = true,
    useCheckoutLoading = true,
    isRecalculate = false
  ) => {
    if (useCheckoutLoading) {
      client.writeQuery({
        query: GET_LOCAL_CHECKOUT,
        data: {
          checkoutLoading: true,
        },
      });
    }
    const checkoutString = storage.getCheckout();

    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;

    if (checkout && checkout?.token) {
      const res = await client.mutate<
        UpdateCheckoutLineNextMutation,
        UpdateCheckoutLineNextMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_LINE_MUTATION_NEXT,
        variables: {
          checkoutId: checkout?.id,
          lines: updatedLines,
          isRecalculate,
        },
      });
      if (!res?.data?.checkoutLinesUpdate?.checkout?.id) {
        await getLatestCheckout(client, checkout);
        if (useCheckoutLoading) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        }
        return {
          data: null,
          errors: res?.data?.checkoutLinesUpdate?.errors,
        };
      }

      if (res?.data?.checkoutLinesUpdate?.checkout?.id) {
        storage.setCheckout(res?.data?.checkoutLinesUpdate?.checkout);

        const resDiscount = {
          data: {
            __typename: "DiscountsType",
            checkoutDiscounts: {
              prepaidDiscount:
                res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                  ?.prepaidDiscountAmount,
              couponDiscount:
                res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                  ?.couponDiscount,
              cashbackDiscount:
                res?.data?.checkoutLinesUpdate?.checkout?.paymentMethod
                  ?.cashbackDiscountAmount,
            },
            cashback: res?.data?.checkoutLinesUpdate?.checkout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: res?.data?.checkoutLinesUpdate?.checkout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });

        if (updateShippingMethod) {
          await setLocalCheckoutInCache(
            client,
            res?.data?.checkoutLinesUpdate?.checkout,
            true
          );
        }
      }
      return {
        data: res.data?.checkoutLinesUpdate?.checkout,
        errors: res.data?.checkoutLinesUpdate?.errors,
      };
    } else {
      const lineItemsInFormat = Array.isArray(updatedLines)
        ? updatedLines
        : [updatedLines];
      let checkoutInputVariables: CheckoutCreateInput;
      checkoutInputVariables = {
        lines: lineItemsInFormat,
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
      };
      const res = await client.mutate<
        CreateCheckoutNextMutation,
        CreateCheckoutNextMutationVariables
      >({
        mutation: CREATE_CHECKOUT_MUTATION_NEXT,
        variables: {
          checkoutInput: checkoutInputVariables,
        },
      });

      if (!res?.data?.checkoutCreate?.checkout?.id) {
        await getLatestCheckout(client, checkout);
        if (useCheckoutLoading) {
          client.writeQuery({
            query: GET_LOCAL_CHECKOUT,
            data: {
              checkoutLoading: false,
            },
          });
        }
        return {
          data: null,
          errors: res?.data?.checkoutCreate?.errors,
        };
      }

      if (res?.data?.checkoutCreate?.checkout?.id) {
        storage.setCheckout(res?.data?.checkoutCreate?.checkout);

        const resDiscount = {
          data: {
            __typename: "DiscountsType",
            checkoutDiscounts: {
              prepaidDiscount:
                res?.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.prepaidDiscountAmount,
              couponDiscount:
                res?.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.couponDiscount,
              cashbackDiscount:
                res?.data?.checkoutCreate?.checkout?.paymentMethod
                  ?.cashbackDiscountAmount,
            },
            cashback: res?.data?.checkoutCreate?.checkout?.cashback,
          },
        };

        storage.setDiscounts(resDiscount.data);

        client.writeQuery({
          query: GET_LOCAL_CHECKOUT,
          data: {
            localCheckout: res?.data?.checkoutCreate?.checkout,
            localCheckoutDiscounts: resDiscount.data.checkoutDiscounts,
            localCashback: resDiscount.data.cashback,
          },
        });

        if (updateShippingMethod) {
          await setLocalCheckoutInCache(
            client,
            res?.data?.checkoutCreate?.checkout,
            true
          );
        }
      }
      const returnObject = {
        data: res.data?.checkoutCreate?.checkout,
        errors: res.data?.checkoutCreate?.errors,
      };
      return returnObject;
    }
  };

  const clearCart: CartSDK["clearCart"] = async () => {
    const checkoutString = storage.getCheckout();

    const checkout =
      checkoutString && typeof checkoutString === "string"
        ? JSON.parse(checkoutString)
        : checkoutString;
    const alteredLines =
      checkout &&
      checkout?.lines?.map((line: any) => ({
        quantity: 0,
        variantId: line?.variant?.id,
      }));

    if (checkout && checkout?.token) {
      const res = await client.mutate<
        UpdateCheckoutLineMutation,
        UpdateCheckoutLineMutationVariables
      >({
        mutation: UPDATE_CHECKOUT_LINE_MUTATION,
        variables: {
          checkoutId: checkout?.id,
          lines: alteredLines,
        },
        update: async (_, { data }) => {
          if (data?.checkoutLinesUpdate?.checkout?.id) {
            storage.setCheckout(data?.checkoutLinesUpdate?.checkout);
          }
          await setLocalCheckoutInCache(
            client,
            data?.checkoutLinesUpdate?.checkout,
            true
          );
        },
      });
      return {
        data: res.data?.checkoutLinesUpdate?.checkout,
        errors: res.data?.checkoutLinesUpdate?.errors,
      };
    }

    return null;
  };

  return {
    items,
    addItem,
    removeItem,
    removeItemRest,
    updateItem,
    addToCartNext,
    addToCartRest,
    updateItemRest,
    updateItemNext,
    clearCart,
    updateItemWithLines,
    updateItemWithLinesRest,
    createCheckoutCartRest,
    checkCouponValidation,
  };
};
