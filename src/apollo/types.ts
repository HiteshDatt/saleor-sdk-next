import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Positive Decimal scalar implementation.
   *
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: any;
  UUID: any;
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: any;
  WeightScalar: any;
  /** Anything */
  _Any: any;
};

/** Create a new address for the customer. */
export type AccountAddressCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Delete an address of the logged-in user. */
export type AccountAddressDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Updates an address of the logged-in user. */
export type AccountAddressUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Register a new user. */
export type AccountCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation: Maybe<Scalars['Boolean']>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

export type AccountCreateInput = {
  /** The email address of the user. */
  email: Scalars['String'];
  /** Phone number of a user. */
  phone: Scalars['String'];
  /** Password. */
  password?: Maybe<Scalars['String']>;
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Remove user account. */
export type AccountDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

export type AccountError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
};

/** An enumeration. */
export type AccountErrorCode =
  | 'ACTIVATE_OWN_ACCOUNT'
  | 'ACTIVATE_SUPERUSER_ACCOUNT'
  | 'DUPLICATED_INPUT_ITEM'
  | 'DEACTIVATE_OWN_ACCOUNT'
  | 'DEACTIVATE_SUPERUSER_ACCOUNT'
  | 'DELETE_NON_STAFF_USER'
  | 'DELETE_OWN_ACCOUNT'
  | 'DELETE_STAFF_ACCOUNT'
  | 'DELETE_SUPERUSER_ACCOUNT'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_PASSWORD'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'INVALID_CREDENTIALS'
  | 'NOT_FOUND'
  | 'OUT_OF_SCOPE_SERVICE_ACCOUNT'
  | 'OUT_OF_SCOPE_USER'
  | 'OUT_OF_SCOPE_GROUP'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'PASSWORD_ENTIRELY_NUMERIC'
  | 'PASSWORD_TOO_COMMON'
  | 'PASSWORD_TOO_SHORT'
  | 'PASSWORD_TOO_SIMILAR'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'JWT_SIGNATURE_EXPIRED'
  | 'JWT_INVALID_TOKEN'
  | 'JWT_DECODE_ERROR'
  | 'JWT_MISSING_TOKEN'
  | 'JWT_INVALID_CSRF_TOKEN'
  | 'REQUIRE_SUPERUSER_PERMISSION';

export type AccountInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
};

/** Register a new user. */
export type AccountRegister = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation: Maybe<Scalars['Boolean']>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

export type AccountRegisterInput = {
  /** The email address of the user. */
  email: Scalars['String'];
  /** Password. */
  password: Scalars['String'];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: Maybe<Scalars['String']>;
};

export type AccountRegisterInputV2 = {
  /** The email address of the user. */
  email: Scalars['String'];
  /** Phone number of a user. */
  phone: Scalars['String'];
  /** Password. */
  password?: Maybe<Scalars['String']>;
  /** Type of OTP. */
  type?: Maybe<Scalars['String']>;
  /** First name of the user */
  firstName?: Maybe<Scalars['String']>;
  /** Last name of the user */
  lastName?: Maybe<Scalars['String']>;
};

/** Register a new user with phone and email. */
export type AccountRegisterV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Informs whether users is new. */
  isNewUser: Maybe<Scalars['Boolean']>;
  /** Informs whether users is active. */
  isActiveUser: Maybe<Scalars['Boolean']>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Sends an email with the account removal link for the logged-in user. */
export type AccountRequestDeletion = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};

/** Sets a default address for the authenticated user. */
export type AccountSetDefaultAddress = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Updates the account of the logged-in user. */
export type AccountUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Updates metadata of the logged-in user. */
export type AccountUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Update Product Tags */
export type AddBulkProductTagsCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success Message */
  message: Maybe<Scalars['String']>;
  productErrors: Array<ProductError>;
};

/** Updates tags of the object. */
export type AddTags = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success Message */
  message: Maybe<Scalars['String']>;
  tagErrors: Array<TagError>;
};

/** Updates tags of the object. */
export type AddTagsCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success Message */
  message: Maybe<Scalars['String']>;
  tagErrors: Array<TagError>;
};

/** Represents user address data. */
export type Address = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  companyName: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  city: Scalars['String'];
  cityArea: Scalars['String'];
  postalCode: Scalars['String'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress: Maybe<Scalars['Boolean']>;
  /** Address is user's default billing address. */
  isDefaultBillingAddress: Maybe<Scalars['Boolean']>;
};

export type AddressCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AddressCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AddressCountableEdge = {
  /** The item at the end of the edge. */
  node: Address;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates user address. */
export type AddressCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

/** Deletes an address. */
export type AddressDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

export type AddressInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Company or organization. */
  companyName?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress1?: Maybe<Scalars['String']>;
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>;
  /** City. */
  city?: Maybe<Scalars['String']>;
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country. */
  country?: Maybe<CountryCode>;
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

export type AddressLinkType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  type: AddressTypeType;
  address: Address;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

/** Sets a default address for the given user. */
export type AddressSetDefault = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** An enumeration. */
export type AddressTypeEnum =
  | 'BILLING'
  | 'SHIPPING';

/** An enumeration. */
export type AddressTypeType =
  /** HOME */
  | 'ADDRESSTYPES_HOME'
  /** WORK */
  | 'ADDRESSTYPES_WORK'
  /** OTHER */
  | 'ADDRESSTYPES_OTHER';

/** An enumeration. */
export type AddressTypes =
  | 'HOME'
  | 'WORK'
  | 'OTHER';

/** Updates an address. */
export type AddressUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
};

export type AddressValidationData = {
  countryCode: Maybe<Scalars['String']>;
  countryName: Maybe<Scalars['String']>;
  addressFormat: Maybe<Scalars['String']>;
  addressLatinFormat: Maybe<Scalars['String']>;
  allowedFields: Maybe<Array<Maybe<Scalars['String']>>>;
  requiredFields: Maybe<Array<Maybe<Scalars['String']>>>;
  upperFields: Maybe<Array<Maybe<Scalars['String']>>>;
  countryAreaType: Maybe<Scalars['String']>;
  countryAreaChoices: Maybe<Array<Maybe<ChoiceValue>>>;
  cityType: Maybe<Scalars['String']>;
  cityChoices: Maybe<Array<Maybe<ChoiceValue>>>;
  cityAreaType: Maybe<Scalars['String']>;
  cityAreaChoices: Maybe<Array<Maybe<ChoiceValue>>>;
  postalCodeType: Maybe<Scalars['String']>;
  postalCodeMatchers: Maybe<Array<Maybe<Scalars['String']>>>;
  postalCodeExamples: Maybe<Array<Maybe<Scalars['String']>>>;
  postalCodePrefix: Maybe<Scalars['String']>;
};

/** Represents allocation. */
export type Allocation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Quantity allocated for orders. */
  quantity: Scalars['Int'];
  /** The warehouse were items were allocated. */
  warehouse: Warehouse;
};

export type ApiCallsFilterInput = {
  apiName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  actionPerformed?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type ApiCallsSort =
  | 'API_NAME'
  | 'ACTION_PERFORMED'
  | 'USER'
  | 'USER_EMAIL'
  | 'DESCRIPTION'
  | 'CREATED';

export type ApiCallsSortType = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort ApiCalls by the selected field. */
  field?: Maybe<ApiCallsSort>;
};

export type ApiCallsType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  userEmail: Scalars['String'];
  description: Maybe<Scalars['String']>;
  apiName: Scalars['String'];
  user: Maybe<User>;
  actionPerformed: Scalars['String'];
};

export type ApiCallsTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ApiCallsTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ApiCallsTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: ApiCallsType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Represents app data. */
export type App = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Name of the app. */
  name: Maybe<Scalars['String']>;
  /** The date and time when the app was created. */
  created: Maybe<Scalars['DateTime']>;
  /** Determine if app will be set active or not. */
  isActive: Maybe<Scalars['Boolean']>;
  /** List of the app's permissions. */
  permissions: Maybe<Array<Maybe<Permission>>>;
  /** Last 4 characters of the tokens. */
  tokens: Maybe<Array<Maybe<AppToken>>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** Type of the app. */
  type: Maybe<AppTypeEnum>;
  /** List of webhooks assigned to this app. */
  webhooks: Maybe<Array<Maybe<Webhook>>>;
  /** Description of this app. */
  aboutApp: Maybe<Scalars['String']>;
  /** Description of the data privacy defined for this app. */
  dataPrivacy: Maybe<Scalars['String']>;
  /** Url to details about the privacy policy on the app owner page. */
  dataPrivacyUrl: Maybe<Scalars['String']>;
  /** Homepage of the app. */
  homepageUrl: Maybe<Scalars['String']>;
  /** Support page for the app. */
  supportUrl: Maybe<Scalars['String']>;
  /** Url to iframe with the configuration for the app. */
  configurationUrl: Maybe<Scalars['String']>;
  /** Url to iframe with the app. */
  appUrl: Maybe<Scalars['String']>;
  /** Version number of the app. */
  version: Maybe<Scalars['String']>;
  /** JWT token used to authenticate by thridparty app. */
  accessToken: Maybe<Scalars['String']>;
};

/** Activate the app. */
export type AppActivate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app: Maybe<App>;
};

export type AppCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AppCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
  /** The item at the end of the edge. */
  node: App;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new app. */
export type AppCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  appErrors: Array<AppError>;
  app: Maybe<App>;
};

/** Deactivate the app. */
export type AppDeactivate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app: Maybe<App>;
};

/** Deletes an app. */
export type AppDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app: Maybe<App>;
};

/** Delete failed installation. */
export type AppDeleteFailedInstallation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

export type AppError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AppErrorCode;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
};

/** An enumeration. */
export type AppErrorCode =
  | 'FORBIDDEN'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_STATUS'
  | 'INVALID_PERMISSION'
  | 'INVALID_URL_FORMAT'
  | 'INVALID_MANIFEST_FORMAT'
  | 'MANIFEST_URL_CANT_CONNECT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'OUT_OF_SCOPE_APP'
  | 'OUT_OF_SCOPE_PERMISSION';

/** Fetch and validate manifest. */
export type AppFetchManifest = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  manifest: Maybe<Manifest>;
  appErrors: Array<AppError>;
};

export type AppFilterInput = {
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  type?: Maybe<AppTypeEnum>;
};

export type AppInput = {
  /** Name of the app. */
  name?: Maybe<Scalars['String']>;
  /** DEPRECATED: Use the `appActivate` and `appDeactivate` mutations instead. This field will be removed after 2020-07-31. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

/** Install new app by using app manifest. */
export type AppInstall = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

export type AppInstallInput = {
  /** Name of the app to install. */
  appName?: Maybe<Scalars['String']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: Maybe<Scalars['String']>;
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Node & Job & {
  appName: Scalars['String'];
  manifestUrl: Scalars['String'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
};

/** Retry failed installation of new app. */
export type AppRetryInstall = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
};

export type AppSortField =
  /** Sort apps by name. */
  | 'NAME'
  /** Sort apps by creation date. */
  | 'CREATION_DATE';

export type AppSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
};

/** Represents token data. */
export type AppToken = Node & {
  /** Name of the authenticated token. */
  name: Maybe<Scalars['String']>;
  /** Last 4 characters of the token. */
  authToken: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Creates a new token. */
export type AppTokenCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  appErrors: Array<AppError>;
  appToken: Maybe<AppToken>;
};

/** Deletes an authentication token assigned to app. */
export type AppTokenDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  appToken: Maybe<AppToken>;
};

export type AppTokenInput = {
  /** Name of the token. */
  name?: Maybe<Scalars['String']>;
  /** ID of app. */
  app: Scalars['ID'];
};

/** Verify provided app token. */
export type AppTokenVerify = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean'];
  appErrors: Array<AppError>;
};

/** An enumeration. */
export type AppTypeEnum =
  | 'LOCAL'
  | 'THIRDPARTY';

/** Updates an existing app. */
export type AppUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  appErrors: Array<AppError>;
  app: Maybe<App>;
};

export type ArchieveOrderAddressInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** Company or organization. */
  companyName?: Maybe<Scalars['String']>;
  /** Address. */
  address1?: Maybe<Scalars['String']>;
  /** Address. */
  address2?: Maybe<Scalars['String']>;
  /** City. */
  city?: Maybe<Scalars['String']>;
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  zip?: Maybe<Scalars['String']>;
  /** Country. */
  countryCode?: Maybe<CountryCode>;
  /** State or province. */
  province?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

export type ArchiveOrderError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<ArchiveOrderErrorCodeEnum>;
};

/** An enumeration. */
export type ArchiveOrderErrorCodeEnum =
  | 'INVALID'
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'UNIQUE';

export type ArchiveOrderFilterInput = {
  status?: Maybe<Array<Maybe<OrderStatusFilter>>>;
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type ArchiveOrderInput = {
  /** A list of order lines, each containing information about an item in the order. */
  lines: Array<Maybe<ArchiveOrderLineInput>>;
  /** ID of the order on foreign store. */
  foreignOrderId: Scalars['String'];
  /** Datetime at which order was placed. */
  placedOn?: Maybe<Scalars['String']>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** Billing address of the customer. */
  shippingAddress?: Maybe<ArchieveOrderAddressInput>;
  /** Billing address of the customer. */
  billingAddress?: Maybe<ArchieveOrderAddressInput>;
  /** Total net amount of the order. */
  totalNetAmount?: Maybe<Scalars['Decimal']>;
  /** Total gross amount of the order. */
  totalGrossAmount?: Maybe<Scalars['Decimal']>;
  /** Name of the discount applied on the order. */
  discountName?: Maybe<Scalars['String']>;
  /** Discount amount of the order. */
  discountAmount?: Maybe<Scalars['Decimal']>;
  /** Status of the order. */
  status?: Maybe<OrderStatusInputEnum>;
  /** Note associated with the order. */
  note?: Maybe<Scalars['String']>;
  /** Metadata of the order. */
  metadata?: Maybe<Scalars['String']>;
  /** Private metadata of the order. */
  privateMetadata?: Maybe<Scalars['String']>;
};

/** Represents archive order line of particular order. */
export type ArchiveOrderLine = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  order: ArchiveOrderType;
  productName: Scalars['String'];
  variantName: Scalars['String'];
  productSku: Scalars['String'];
  productImage: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  currency: Scalars['String'];
  unitPriceNetAmount: Scalars['Float'];
  unitPriceGrossAmount: Scalars['Float'];
};

export type ArchiveOrderLineInput = {
  /** Name of the product variant. */
  variantName: Scalars['ID'];
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /** Name of the product. */
  productName?: Maybe<Scalars['String']>;
  /** SKU of the product variant. */
  productSku?: Maybe<Scalars['String']>;
  /** Net unit price of the item. */
  unitPriceNetAmount?: Maybe<Scalars['Decimal']>;
  /** Gross unit price of the item. */
  unitPriceGrossAmount?: Maybe<Scalars['Decimal']>;
  /** URL of the image. */
  imageUrl?: Maybe<Scalars['String']>;
};

export type ArchiveOrderSortField =
  /** Sort orders by number. */
  | 'NUMBER'
  /** Sort orders by creation date. */
  | 'CREATION_DATE'
  /** Sort orders by customer. */
  | 'CUSTOMER'
  /** Sort orders by fulfillment status. */
  | 'FULFILLMENT_STATUS'
  /** Sort orders by total. */
  | 'TOTAL';

export type ArchiveOrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort archive_orders by the selected field. */
  field: ArchiveOrderSortField;
};

/** An enumeration. */
export type ArchiveOrderStatus =
  /** Draft */
  | 'DRAFT'
  /** Unfulfilled */
  | 'UNFULFILLED'
  /** Partially fulfilled */
  | 'PARTIALLY_FULFILLED'
  /** Fulfilled */
  | 'FULFILLED'
  /** Canceled */
  | 'CANCELED';

/** Represents an archive order in the shop. */
export type ArchiveOrderType = Node & ObjectWithMetadata & {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  foreignOrderId: Scalars['String'];
  created: Scalars['DateTime'];
  placedOn: Maybe<Scalars['DateTime']>;
  userEmail: Scalars['String'];
  user: Maybe<User>;
  status: ArchiveOrderStatus;
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  totalNetAmount: Scalars['Float'];
  totalGrossAmount: Scalars['Float'];
  discountAmount: Scalars['Float'];
  discountName: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  languageCode: Scalars['String'];
  note: Scalars['String'];
  /** List of archive order lines. */
  lines: Array<Maybe<ArchiveOrderLine>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

export type ArchiveOrderTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArchiveOrderTypeEdge>>;
};

/** A Relay edge containing a `ArchiveOrderType` and its cursor. */
export type ArchiveOrderTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ArchiveOrderType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Assigns storefront's navigation menus. */
export type AssignNavigation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Assigned navigation menu. */
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

/** Edit slots for pincode */
export type AssignSlotsToDeliverySchedule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  deliveryScheduler: Maybe<DeliverySchedulerPincodeType>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: Maybe<AttributeInputTypeEnum>;
  /** Name of an attribute displayed in the interface. */
  name: Maybe<Scalars['String']>;
  /** Internal representation of an attribute name. */
  slug: Maybe<Scalars['String']>;
  /** List of attribute's values. */
  values: Maybe<Array<Maybe<AttributeValue>>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired: Scalars['Boolean'];
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront: Scalars['Boolean'];
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront: Scalars['Boolean'];
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard: Scalars['Boolean'];
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid: Scalars['Boolean'];
  /** Returns translated attribute fields for the given language code. */
  translation: Maybe<AttributeTranslation>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition: Scalars['Int'];
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Assign attributes to a given product type. */
export type AttributeAssign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated product type. */
  productType: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

export type AttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID'];
  /** The attribute type to be assigned as. */
  type: AttributeTypeEnum;
};

/** Deletes attributes. */
export type AttributeBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Clears public metadata item for attribute. */
export type AttributeClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  attribute: Maybe<Attribute>;
};

/** Clears public metadata item for attribute. */
export type AttributeClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  attribute: Maybe<Attribute>;
};

export type AttributeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<AttributeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
  /** The item at the end of the edge. */
  node: Attribute;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates an attribute. */
export type AttributeCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
};

export type AttributeCreateInput = {
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String'];
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** List of attribute's values. */
  values?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>;
};

/** Deletes an attribute. */
export type AttributeDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  attribute: Maybe<Attribute>;
};

export type AttributeFilterInput = {
  valueRequired?: Maybe<Scalars['Boolean']>;
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  availableInGrid?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inCollection?: Maybe<Scalars['ID']>;
  inCategory?: Maybe<Scalars['ID']>;
};

export type AttributeInput = {
  /** Internal representation of an attribute name. */
  slug: Scalars['String'];
  /** [Deprecated] Internal representation of a value (unique per attribute). This field will be removed after 2020-07-31. */
  value?: Maybe<Scalars['String']>;
  /** Internal representation of a value (unique per attribute). */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** An enumeration. */
export type AttributeInputTypeEnum =
  | 'DROPDOWN'
  | 'MULTISELECT';

/** Reorder the values of an attribute. */
export type AttributeReorderValues = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Attribute from which values are reordered. */
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
};

export type AttributeSortField =
  /** Sort attributes by name */
  | 'NAME'
  /** Sort attributes by slug */
  | 'SLUG'
  /** Sort attributes by the value required flag */
  | 'VALUE_REQUIRED'
  /** Sort attributes by the variant only flag */
  | 'IS_VARIANT_ONLY'
  /** Sort attributes by visibility in the storefront */
  | 'VISIBLE_IN_STOREFRONT'
  /** Sort attributes by the filterable in storefront flag */
  | 'FILTERABLE_IN_STOREFRONT'
  /** Sort attributes by the filterable in dashboard flag */
  | 'FILTERABLE_IN_DASHBOARD'
  /** Sort attributes by their position in storefront */
  | 'STOREFRONT_SEARCH_POSITION'
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  | 'AVAILABLE_IN_GRID';

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute fields for the given language code. */
  translation: Maybe<AttributeTranslation>;
  /** Custom attribute of a product. */
  attribute: Maybe<Attribute>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for attribute. */
export type AttributeTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  attribute: Maybe<Attribute>;
};

export type AttributeTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type AttributeTypeEnum =
  | 'PRODUCT'
  | 'VARIANT';

/** Un-assign attributes from a given product type. */
export type AttributeUnassign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated product type. */
  productType: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

/** Updates attribute. */
export type AttributeUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
};

export type AttributeUpdateInput = {
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>;
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** New values to be created for this attribute. */
  addValues?: Maybe<Array<Maybe<AttributeValueCreateInput>>>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>;
};

/** Update public metadata for attribute. */
export type AttributeUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  attribute: Maybe<Attribute>;
};

/** Update public metadata for attribute. */
export type AttributeUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  attribute: Maybe<Attribute>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Name of a value displayed in the interface. */
  name: Maybe<Scalars['String']>;
  /** Internal representation of a value (unique per attribute). */
  slug: Maybe<Scalars['String']>;
  /**
   * Type of value (used only when `value` field is set).
   * @deprecated Use the `inputType` field to determine the type of attribute's value. This field will be removed after 2020-07-31.
   */
  type: Maybe<AttributeValueType>;
  /** Returns translated attribute value fields for the given language code. */
  translation: Maybe<AttributeValueTranslation>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: Maybe<AttributeInputTypeEnum>;
};


/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes values of attributes. */
export type AttributeValueBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Creates a value for an attribute. */
export type AttributeValueCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueCreateInput = {
  /** Name of a value displayed in the interface. */
  name: Scalars['String'];
};

/** Deletes a value of an attribute. */
export type AttributeValueDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values: Array<Maybe<Scalars['String']>>;
};

export type AttributeValueTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated attribute value fields for the given language code. */
  translation: Maybe<AttributeValueTranslation>;
  /** Represents a value of an attribute. */
  attributeValue: Maybe<AttributeValue>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for attribute value. */
export type AttributeValueTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AttributeValueTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type AttributeValueType =
  | 'COLOR'
  | 'GRADIENT'
  | 'URL'
  | 'STRING';

/** Updates value of an attribute. */
export type AttributeValueUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  productErrors: Array<ProductError>;
  attributeValue: Maybe<AttributeValue>;
};

export type AuthorizationKey = {
  /** Name of the authorization backend. */
  name: AuthorizationKeyType;
  /** Authorization key (client ID). */
  key: Scalars['String'];
};

/** Adds an authorization key. */
export type AuthorizationKeyAdd = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Newly added authorization key. */
  authorizationKey: Maybe<AuthorizationKey>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

/** Deletes an authorization key. */
export type AuthorizationKeyDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Authorization key that was deleted. */
  authorizationKey: Maybe<AuthorizationKey>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type AuthorizationKeyInput = {
  /** Client authorization key (client ID). */
  key: Scalars['String'];
  /** Client secret. */
  password: Scalars['String'];
};

/** An enumeration. */
export type AuthorizationKeyType =
  | 'FACEBOOK'
  | 'GOOGLE_OAUTH2';

export type BannerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<BannerErrorCodeEnum>;
};

/** An enumeration. */
export type BannerErrorCodeEnum =
  | 'INVALID';

export type BannerInput = {
  /** Type of banner */
  type: BannerTypes;
  /** Link of the page to redirect when clicked */
  link: Scalars['String'];
  /** Is the banner visable */
  isEnabled?: Maybe<Scalars['Boolean']>;
  /** Position index of the banner, 1 will be shown first and so on */
  position: Scalars['Int'];
  /** Text content */
  text: Scalars['String'];
  /** Banner name */
  name: Scalars['String'];
  /** banner image for desktop screens. */
  image?: Maybe<Scalars['Upload']>;
  /** banner image for mobile screens */
  imageMobile?: Maybe<Scalars['Upload']>;
  /** Id of the related object */
  relatedId?: Maybe<Scalars['ID']>;
  /** Slug of the related object */
  slug?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type BannerType =
  /** HME */
  | 'BANNERTYPES_HOME_PAGE'
  /** HMS */
  | 'BANNERTYPES_HOME_PAGE_SECONDARY'
  /** CAT */
  | 'BANNERTYPES_CATEGORY'
  /** COL */
  | 'BANNERTYPES_COLLECTION'
  /** SLE */
  | 'BANNERTYPES_SALE'
  /** PDT */
  | 'BANNERTYPES_PRODUCT';

/** An enumeration. */
export type BannerTypes =
  | 'HOME_PAGE'
  | 'HOME_PAGE_SECONDARY'
  | 'CATEGORY'
  | 'COLLECTION'
  | 'SALE'
  | 'PRODUCT';

/** Creates Shipments for Bluedart. */
export type BluedartShipmentCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Combo to which products will be added. */
  orders: Maybe<Order>;
};

export type BulkActionCsvLogsFilterInput = {
  apiName?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  actionPerformed?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type BulkActionCsvLogsSort =
  | 'API_NAME'
  | 'ACTION_PERFORMED'
  | 'USER_EMAIL'
  | 'DESCRIPTION'
  | 'CREATED';

export type BulkActionCsvLogsSortType = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort ApiCalls by the selected field. */
  field?: Maybe<BulkActionCsvLogsSort>;
};

export type BulkActionCsvLogsType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  userEmail: Scalars['String'];
  description: Maybe<Scalars['String']>;
  apiName: Scalars['String'];
  user: Maybe<User>;
  actionPerformed: Scalars['String'];
  status: Maybe<Scalars['String']>;
  contentFile: Maybe<Scalars['String']>;
  /** The URL of field to download. */
  url: Maybe<Scalars['String']>;
};

export type BulkActionCsvLogsTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<BulkActionCsvLogsTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type BulkActionCsvLogsTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: BulkActionCsvLogsType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** BulkInvoice Export invoice pdf. */
export type BulkInvoiceExport = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Successfully message */
  message: Maybe<Scalars['String']>;
  invoiceErrors: Array<InvoiceError>;
};

/** Bulk Upload Price CSV */
export type BulkPriceUpdateCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  priceUpdateErrors: Array<BulkPriceUpdateError>;
};

export type BulkPriceUpdateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: BulkPriceUpdateErrorCode;
};

/** An enumeration. */
export type BulkPriceUpdateErrorCode =
  | 'INVALID_FILE_FORMAT'
  | 'INVALID_PRICE_FORMAT'
  | 'INVALID_SKU'
  | 'PHONE_NUMBER_INVALID';

export type BulkProductError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']>;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
};

export type BulkStockError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']>;
};

export type CcAvenueCreateOrderInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
};

export type CcAvenueError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CcAvenueErrorCode;
};

/** An enumeration. */
export type CcAvenueErrorCode =
  | 'INVALID';

export type CashbackType = {
  amount: Maybe<Scalars['Decimal']>;
  willAddOn: Maybe<Scalars['DateTime']>;
};

export type CashfreeCreateOrderInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
  /** Url to redirect to after payment. */
  returnUrl: Scalars['String'];
};

export type CashfreeCreateOrderSdkInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
};

export type CashfreeOrderType = {
  /** Cashfree Order ID. */
  token: Maybe<Scalars['String']>;
  /** Cashfree Payment url to use. */
  paymentUrl: Maybe<Scalars['String']>;
  /** Cashfree Order token for SDK. */
  orderToken: Maybe<Scalars['String']>;
};

export type CatalogueInput = {
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node & ObjectWithMetadata & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  slug: Scalars['String'];
  parent: Maybe<Category>;
  level: Scalars['Int'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** List of ancestors of the category. */
  ancestors: Maybe<CategoryCountableConnection>;
  /** List of products in the category. */
  products: Maybe<ProductCountableConnection>;
  /**
   * The storefront's URL for the category.
   * @deprecated This field will be removed after 2020-07-31.
   */
  url: Maybe<Scalars['String']>;
  /**
   * Description of the category.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
  /** List of children of the category. */
  children: Maybe<CategoryCountableConnection>;
  backgroundImage: Maybe<Image>;
  /** Returns translated category fields for the given language code. */
  translation: Maybe<CategoryTranslation>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes categories. */
export type CategoryBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Clears public metadata for category. */
export type CategoryClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

/** Clears private metadata for category. */
export type CategoryClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

export type CategoryCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CategoryCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new category. */
export type CategoryCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

/** Deletes a category. */
export type CategoryDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

export type CategoryFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CategoryInput = {
  /** Category description (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Category description (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Category name. */
  name?: Maybe<Scalars['String']>;
  /** Category slug. */
  slug?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
};

export type CategorySortField =
  /** Sort categories by name. */
  | 'NAME'
  /** Sort categories by product count. */
  | 'PRODUCT_COUNT'
  /** Sort categories by subcategory count. */
  | 'SUBCATEGORY_COUNT';

export type CategorySortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /**
   * Description of the category.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
  /** Returns translated category fields for the given language code. */
  translation: Maybe<CategoryTranslation>;
  /** Represents a single category of products. */
  category: Maybe<Category>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Category. */
export type CategoryTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  category: Maybe<Category>;
};

export type CategoryTranslation = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /** Translation language. */
  language: LanguageDisplay;
  /**
   * Translated description of the category.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
};

/** Updates a category. */
export type CategoryUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

/** Update public metadata for category. */
export type CategoryUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

/** Update private metadata for category. */
export type CategoryUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  category: Maybe<Category>;
};

/** Checkout object. */
export type Checkout = Node & ObjectWithMetadata & {
  created: Scalars['DateTime'];
  lastChange: Scalars['DateTime'];
  user: Maybe<User>;
  quantity: Scalars['Int'];
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  shippingMethod: Maybe<ShippingMethod>;
  note: Scalars['String'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']>;
  translatedDiscountName: Maybe<Scalars['String']>;
  voucherCode: Maybe<Scalars['String']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Maybe<Array<Maybe<GiftCard>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods: Array<Maybe<ShippingMethod>>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Email of a customer. */
  email: Scalars['String'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Maybe<Array<Maybe<CheckoutLine>>>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: Maybe<TaxedMoney>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: Maybe<TaxedMoney>;
  /** The checkout's token. */
  token: Scalars['UUID'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: Maybe<TaxedMoney>;
  /** Checkout Url */
  checkoutUrl: Maybe<Scalars['String']>;
  /** List of events associated with the checkout. */
  events: Maybe<Array<Maybe<CheckoutEvent>>>;
  /** List of tags associated with the checkout. */
  tags: Maybe<Array<Maybe<TagType>>>;
  /** PaymentMethod of Checkout. */
  paymentMethod: Maybe<PaymentMethodType>;
  /** Cashback of Checkout. */
  cashback: Maybe<CashbackType>;
};

/** Adds note to the checkout. */
export type CheckoutAddNote = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Checkout with the note added. */
  checkout: Maybe<Checkout>;
  /** Checkout note created. */
  event: Maybe<CheckoutEvent>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/** (Custom Implementation) Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the added gift card or voucher. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Clear metadata for checkout. */
export type CheckoutClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  checkoutErrors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

/** Clear private metadata for checkout. */
export type CheckoutClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  checkoutErrors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

/** (Custom implementation) Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Placed order. */
  order: Maybe<Order>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean'];
  /** Confirmation data used to process additional authorization steps. */
  confirmationData: Maybe<Scalars['JSONString']>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
  /** The item at the end of the edge. */
  node: Checkout;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Create a new checkout. */
export type CheckoutCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
  created: Maybe<Scalars['Boolean']>;
  checkoutErrors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

export type CheckoutCreateInput = {
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<Maybe<CheckoutLineInput>>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: Maybe<AddressInput>;
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Tags if any, associated with the Checkout */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Sets the customer as the owner of the checkout. */
export type CheckoutCustomerAttach = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Removes the user assigned as the owner of the checkout. */
export type CheckoutCustomerDetach = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CheckoutErrorCode;
  /** List of varint IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type CheckoutErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CHECKOUT_NOT_FULLY_PAID'
  | 'GRAPHQL_ERROR'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'INSUFFICIENT_STOCK'
  | 'INVALID'
  | 'COD_NOT_APPLICABLE'
  | 'INVALID_SHIPPING_METHOD'
  | 'NOT_FOUND'
  | 'PAYMENT_ERROR'
  | 'QUANTITY_GREATER_THAN_LIMIT'
  | 'REQUIRED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'SHIPPING_NOT_REQUIRED'
  | 'TAX_ERROR'
  | 'UNIQUE'
  | 'VOUCHER_NOT_APPLICABLE'
  | 'ZERO_QUANTITY'
  | 'RTO_CUSTOMER_FOUND'
  | 'COD_NOT_APPLICABLE_FOR_PRODUCT_IN_CART';

export type CheckoutEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  date: Scalars['DateTime'];
  /** Checkout event type. */
  type: Maybe<CheckoutEventsEnum>;
  checkout: CheckoutType;
  parameters: Scalars['JSONString'];
  user: Maybe<User>;
};

/** An enumeration. */
export type CheckoutEventsEnum =
  | 'NOTE_ADDED';

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  variant: ProductVariant;
  quantity: Scalars['Int'];
  data: Scalars['JSONString'];
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice: Maybe<TaxedMoney>;
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Maybe<Scalars['Boolean']>;
};

export type CheckoutLineCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutLineCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
  /** The item at the end of the edge. */
  node: CheckoutLine;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** (Custom implementation) Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutLineInput = {
  /** The number of items purchased. */
  quantity: Scalars['Int'];
  /** ID of the product variant. */
  variantId: Scalars['ID'];
};

/** (Custom implementation) Adds a checkout line to the existing checkout. */
export type CheckoutLinesAdd = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** (Custom implementation) Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** (Custom Implementation) Create a new payment via selected gateway for given checkout. */
export type CheckoutPaymentCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Related checkout object. */
  checkout: Maybe<Checkout>;
  /** A newly created payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

/** Adds a checkout line to the existing checkout. */
export type CheckoutRefresh = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** (Custom Implementation) Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the removed gift card or voucher. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** (Custom implementation) Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates the shipping address of the checkout. */
export type CheckoutShippingMethodUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

export type CheckoutTotalsType = {
  /** The sum of the checkout line price, taxes and discounts. */
  codTotal: Maybe<TaxedMoney>;
  /** The sum of the checkout line price, taxes and discounts. */
  prepaidTotal: Maybe<TaxedMoney>;
};

/** Checkout object. */
export type CheckoutType = Node & ObjectWithMetadata & {
  created: Scalars['DateTime'];
  lastChange: Scalars['DateTime'];
  user: Maybe<User>;
  quantity: Scalars['Int'];
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  shippingMethod: Maybe<ShippingMethod>;
  note: Scalars['String'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']>;
  translatedDiscountName: Maybe<Scalars['String']>;
  voucherCode: Maybe<Scalars['String']>;
  /** List of gift cards associated with this checkout. */
  giftCards: Maybe<Array<Maybe<GiftCard>>>;
  payments: PaymentCountableConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods: Array<Maybe<ShippingMethod>>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Email of a customer. */
  email: Scalars['String'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Maybe<Array<Maybe<CheckoutLine>>>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: Maybe<TaxedMoney>;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: Maybe<TaxedMoney>;
  /** The checkout's token. */
  token: Scalars['UUID'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: Maybe<TaxedMoney>;
  /** Checkout Url */
  checkoutUrl: Maybe<Scalars['String']>;
  /** List of events associated with the checkout. */
  events: Maybe<Array<Maybe<CheckoutEvent>>>;
  /** List of tags associated with the checkout. */
  tags: Maybe<Array<Maybe<TagType>>>;
  /** PaymentMethod of Checkout. */
  paymentMethod: Maybe<PaymentMethodType>;
  /** Cashback of Checkout. */
  cashback: Maybe<CashbackType>;
};


/** Checkout object. */
export type CheckoutTypePaymentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type CheckoutTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CheckoutTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CheckoutTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: CheckoutType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Updates metadata for checkout. */
export type CheckoutUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  checkoutErrors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

/** Updates private metadata for checkout. */
export type CheckoutUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  checkoutErrors: Array<CheckoutError>;
  checkout: Maybe<Checkout>;
};

export type ChoiceValue = {
  raw: Maybe<Scalars['String']>;
  verbose: Maybe<Scalars['String']>;
};

/** Represents a collection of products. */
export type Collection = Node & ObjectWithMetadata & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  publicationDate: Maybe<Scalars['Date']>;
  slug: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** List of products in this collection. */
  products: Maybe<ProductCountableConnection>;
  backgroundImage: Maybe<Image>;
  /**
   * Description of the collection.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
  /** Returns translated collection fields for the given language code. */
  translation: Maybe<CollectionTranslation>;
  /** Whether the collection is published. */
  isPublished: Scalars['Boolean'];
};


/** Represents a collection of products. */
export type CollectionProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Adds products to a collection. */
export type CollectionAddProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection to which products will be added. */
  collection: Maybe<Collection>;
  productErrors: Array<ProductError>;
};

/** Deletes collections. */
export type CollectionBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Publish collections. */
export type CollectionBulkPublish = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Clears public metadata for collection. */
export type CollectionClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

/** Clears private metadata item for collection. */
export type CollectionClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

export type CollectionCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<CollectionCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
  /** The item at the end of the edge. */
  node: Collection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new collection. */
export type CollectionCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

export type CollectionCreateInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /** Description of the collection (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** List of products to be added to the collection. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes a collection. */
export type CollectionDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

/** Duplicate a collection. */
export type CollectionDuplicate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection which is being duplicated. */
  collection: Maybe<Collection>;
  productErrors: Array<ProductError>;
};

export type CollectionFilterInput = {
  published?: Maybe<CollectionPublished>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type CollectionInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>;
  /** Description of the collection (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Description of the collection (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
};

export type CollectionPublished =
  | 'PUBLISHED'
  | 'HIDDEN';

/** Remove products from a collection. */
export type CollectionRemoveProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection from which products will be removed. */
  collection: Maybe<Collection>;
  productErrors: Array<ProductError>;
};

/** Reorder the products of a collection. */
export type CollectionReorderProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Collection from which products are reordered. */
  collection: Maybe<Collection>;
  productErrors: Array<ProductError>;
};

export type CollectionSortField =
  /** Sort collections by name. */
  | 'NAME'
  /** Sort collections by availability. */
  | 'AVAILABILITY'
  /** Sort collections by product count. */
  | 'PRODUCT_COUNT'
  /** Sort collections by publication date. */
  | 'PUBLICATION_DATE';

export type CollectionSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /**
   * Description of the collection.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
  /** Returns translated collection fields for the given language code. */
  translation: Maybe<CollectionTranslation>;
  /** Represents a collection of products. */
  collection: Maybe<Collection>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for collection. */
export type CollectionTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  collection: Maybe<Collection>;
};

export type CollectionTranslation = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /** Translation language. */
  language: LanguageDisplay;
  /**
   * Translated description of the collection.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
};

/** Updates a collection. */
export type CollectionUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

/** Update public metadata for collection. */
export type CollectionUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

/** Update private metadata for collection. */
export type CollectionUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  collection: Maybe<Collection>;
};

/** Adds products to a combo. */
export type ComboAddProductVariants = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Combo to which products will be added. */
  combo: Maybe<ComboType>;
  productErrors: Array<ProductError>;
};

/** Creates a new combo. */
export type ComboCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  combo: Maybe<ComboType>;
};

export type ComboCreateInput = {
  /** Determines if combo is active. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** Combo Product which contains multiple product variants. */
  variantId: Scalars['ID'];
  /** List of product variants to be added to the combo. */
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes a combo. */
export type ComboDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  combo: Maybe<ComboType>;
};

/** Adds products to a combo. */
export type ComboRemoveProductVariants = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Combo to which products will be added. */
  combo: Maybe<ComboType>;
  productErrors: Array<ProductError>;
};

export type ComboType = Node & {
  publicationDate: Maybe<Scalars['Date']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isPublished: Scalars['Boolean'];
  variant: ProductVariant;
  variants: ProductVariantCountableConnection;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ComboTypeVariantsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ComboTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ComboTypeEdge>>;
};

/** A Relay edge containing a `ComboType` and its cursor. */
export type ComboTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ComboType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Updates a combo. */
export type ComboUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  combo: Maybe<ComboType>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  /** Name of the field. */
  name: Scalars['String'];
  /** Current value of the field. */
  value: Maybe<Scalars['String']>;
  /** Type of the field. */
  type: Maybe<ConfigurationTypeFieldEnum>;
  /** Help text for the field. */
  helpText: Maybe<Scalars['String']>;
  /** Label for the field. */
  label: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String'];
  /** Value of the given field to update. */
  value?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type ConfigurationTypeFieldEnum =
  | 'STRING'
  | 'BOOLEAN'
  | 'SECRET'
  | 'PASSWORD'
  | 'SECRETMULTILINE';

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An activated user account. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Confirm user account with otp sent by sms during registration. */
export type ConfirmAccountV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** An activated user account. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Confirm the email change of the logged-in user. */
export type ConfirmEmailChange = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance with a new email. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create a new ContactUs entry. */
export type ContactUsCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A contactus instance. */
  contactUs: Maybe<ContactUsType>;
  contactUsErrors: Array<ContactUsError>;
};

export type ContactUsError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ContactUsErrorCode;
};

/** An enumeration. */
export type ContactUsErrorCode =
  | 'PHONE_NUMBER_INVALID';

export type ContactUsInput = {
  /** Name of user. */
  name: Scalars['String'];
  /** Phone number of user. */
  phone: Scalars['String'];
  /** Email address of user. */
  email: Scalars['String'];
  /** Meta form fields */
  meta?: Maybe<Scalars['JSONString']>;
  /** Type of query. */
  queryType: Scalars['String'];
  /** Message given from user. */
  message?: Maybe<Scalars['String']>;
};

export type ContactUsOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort Contact us by the selected field. */
  field?: Maybe<ContactUsOrderField>;
};

export type ContactUsOrderField =
  | 'NAME'
  | 'DATE';

export type ContactUsType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Maybe<Scalars['String']>;
  email: Scalars['String'];
  meta: Scalars['JSONString'];
  queryType: Scalars['String'];
  message: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type ContactUsTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContactUsTypeEdge>>;
};

/** A Relay edge containing a `ContactUsType` and its cursor. */
export type ContactUsTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ContactUsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export type CountryCode =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'EU'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'KP'
  | 'MK'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'KR'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW';

export type CountryDisplay = {
  /** Country code. */
  code: Scalars['String'];
  /** Country name. */
  country: Scalars['String'];
  /** Country tax. */
  vat: Maybe<Vat>;
};

export type CouponDiscountType = Node & {
  code: Maybe<Scalars['String']>;
  discountAmount: Maybe<Scalars['Float']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type CouponDiscountTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CouponDiscountTypeEdge>>;
};

/** A Relay edge containing a `CouponDiscountType` and its cursor. */
export type CouponDiscountTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<CouponDiscountType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Create a new archive order. */
export type CreateArchiveOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  archiveOrder: Maybe<ArchiveOrderType>;
  archiveOrderErrors: Array<ArchiveOrderError>;
};

/** Create a new banner */
export type CreateBanner = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A banner instance. */
  banner: Maybe<CustomBannerType>;
  bannerErrors: Array<BannerError>;
};

/** Creates an order on CCAvenue. */
export type CreateCcAvenueOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Enc Type Checkout Data. */
  encData: Maybe<Scalars['String']>;
  /** CC Avenue Order ID. */
  ccAvenueOrderId: Maybe<Scalars['String']>;
  /** Access code for form data. */
  accessCode: Maybe<Scalars['String']>;
  ccAvenueErrors: Array<CcAvenueError>;
};

/** Creates an order on Cashfree. */
export type CreateCashfreeOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Cashfree order object. */
  cashfreeOrder: Maybe<CashfreeOrderType>;
};

/** Creates an order on Cashfree. */
export type CreateCashfreeOrderSdk = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Cashfree order object. */
  cashfreeOrder: Maybe<CashfreeOrderType>;
};

/** Create Delivery Scheduler */
export type CreateDeliverySchedule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Created delivery Scheduler */
  deliveryScheduler: Maybe<DeliverySchedulerType>;
};

/** Creates an order on Gokwik. */
export type CreateGokwikOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Gokwik order object. */
  gokwickOrder: Maybe<GokwikOrderType>;
  gokwikErrors: Array<GokwikError>;
};

/** Create a new header */
export type CreateHeader = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A header instance. */
  header: Maybe<HeaderType>;
};

/** Create a new File that is going to be hosted. */
export type CreateHostingFile = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A hosting File instance. */
  hosting: Maybe<HostingType>;
};

/** Create a new File that is going to be hosted. */
export type CreateHostingFileNoAuth = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A hosting File instance. */
  hostingNoAuth: Maybe<HostingNoAuthType>;
};

/** Create Influencer. */
export type CreateInfluencer = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Influencer instance. */
  influencer: Maybe<InfluencerType>;
};

/** Create a menu item image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type CreateMenuItemsImages = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuItem: Maybe<MenuItemV2>;
  image: Maybe<MenuItemImageType>;
  imageMobile: Maybe<MenuItemImageMobileType>;
  menuItemError: Array<MenuError>;
};

export type CreateMenuItemsImagesInput = {
  /** Represents an image file in a multipart request. */
  image?: Maybe<Scalars['Upload']>;
  /** Represents an image file in a multipart request. */
  imageMobile?: Maybe<Scalars['Upload']>;
  /** ID of a menu item */
  menuItem: Scalars['ID'];
};

/** Create Notification. */
export type CreateNotification = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Notification instance. */
  notification: Maybe<NotificationType>;
};

/** Creates an order on Payu. */
export type CreatePayuOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Payu order object. */
  payuOrder: Maybe<PayuOrderType>;
};

/** Create Product. */
export type CreateProductCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Create a new product review. */
export type CreateProductReview = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** Create Product. */
export type CreateProductVariantCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Creates an order on Razorpay. */
export type CreateRazorpayOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Razorpay order object. */
  razorpayOrder: Maybe<RazorpayOrderType>;
  razorpayErrors: Array<RazorpayError>;
};

/** Upload Review CSV. */
export type CreateReviewCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** List of reviews created. */
  reviews: Maybe<Array<Maybe<ProductReviewType>>>;
  createReviewError: Array<CreateReviewCsvError>;
};

export type CreateReviewCsvError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: CreateReviewCsvErrorCode;
};

/** An enumeration. */
export type CreateReviewCsvErrorCode =
  | 'INVALID_FILE_FORMAT'
  | 'NOT_FOUND'
  | 'INVALID'
  | 'INVALID_IMAGE_FORMAT';

/** Creates an order on Sezzle. */
export type CreateSezzleOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Sezzle order object. */
  sezzleOrder: Maybe<SezzleOrderType>;
};

/** Create shipping zone. */
export type CreateShippingZonesCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Create ShopifyUser. */
export type CreateShopifyUser = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An ShopifyUser instance. */
  shopifyUser: Maybe<ShopifyUserType>;
};

/** Create JWT token. */
export type CreateToken = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create JWT token. */
export type CreateTokenForSuperUser = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create JWT token via google oauth2. */
export type CreateTokenOAuth = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  otpErrors: Array<OtpError>;
};

/** Create JWT token via OTP. */
export type CreateTokenOtp = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  otpErrors: Array<OtpError>;
};

/** Create JWT token without OTP. */
export type CreateTokenWithoutOtp = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  otpErrors: Array<OtpError>;
};

/** Create a new voucher rule. */
export type CreateVoucherRule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voucher rule instance. */
  voucherRule: Maybe<VoucherRuleType>;
  voucherErrors: Array<VoucherError>;
};

/** Create a new voucher rule link to add promo code. */
export type CreateVoucherRuleLink = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voucher rule link instance. */
  voucherRuleLink: Maybe<VoucherRuleLinkType>;
  voucherErrors: Array<VoucherError>;
};

export type CreditCard = {
  /** Card brand. */
  brand: Scalars['String'];
  /** First 4 digits of the card number. */
  firstDigits: Maybe<Scalars['String']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear: Maybe<Scalars['Int']>;
};

export type CronInput = {
  /** minute when cron should run */
  minute?: Maybe<Scalars['String']>;
  /** hour when cron should run */
  hour?: Maybe<Scalars['String']>;
  /** day of the week when cron should run */
  dayOfWeek?: Maybe<Scalars['String']>;
  /** day of the  month when cron should run */
  dayOfMonth?: Maybe<Scalars['String']>;
  /** month of the year when cron should run */
  monthOfYear?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type CrontabScheduleTimezone =
  /** Africa/Abidjan */
  | 'AFRICA_ABIDJAN'
  /** Africa/Accra */
  | 'AFRICA_ACCRA'
  /** Africa/Addis Ababa */
  | 'AFRICA_ADDIS_ABABA'
  /** Africa/Algiers */
  | 'AFRICA_ALGIERS'
  /** Africa/Asmara */
  | 'AFRICA_ASMARA'
  /** Africa/Bamako */
  | 'AFRICA_BAMAKO'
  /** Africa/Bangui */
  | 'AFRICA_BANGUI'
  /** Africa/Banjul */
  | 'AFRICA_BANJUL'
  /** Africa/Bissau */
  | 'AFRICA_BISSAU'
  /** Africa/Blantyre */
  | 'AFRICA_BLANTYRE'
  /** Africa/Brazzaville */
  | 'AFRICA_BRAZZAVILLE'
  /** Africa/Bujumbura */
  | 'AFRICA_BUJUMBURA'
  /** Africa/Cairo */
  | 'AFRICA_CAIRO'
  /** Africa/Casablanca */
  | 'AFRICA_CASABLANCA'
  /** Africa/Ceuta */
  | 'AFRICA_CEUTA'
  /** Africa/Conakry */
  | 'AFRICA_CONAKRY'
  /** Africa/Dakar */
  | 'AFRICA_DAKAR'
  /** Africa/Dar es Salaam */
  | 'AFRICA_DAR_ES_SALAAM'
  /** Africa/Djibouti */
  | 'AFRICA_DJIBOUTI'
  /** Africa/Douala */
  | 'AFRICA_DOUALA'
  /** Africa/El Aaiun */
  | 'AFRICA_EL_AAIUN'
  /** Africa/Freetown */
  | 'AFRICA_FREETOWN'
  /** Africa/Gaborone */
  | 'AFRICA_GABORONE'
  /** Africa/Harare */
  | 'AFRICA_HARARE'
  /** Africa/Johannesburg */
  | 'AFRICA_JOHANNESBURG'
  /** Africa/Juba */
  | 'AFRICA_JUBA'
  /** Africa/Kampala */
  | 'AFRICA_KAMPALA'
  /** Africa/Khartoum */
  | 'AFRICA_KHARTOUM'
  /** Africa/Kigali */
  | 'AFRICA_KIGALI'
  /** Africa/Kinshasa */
  | 'AFRICA_KINSHASA'
  /** Africa/Lagos */
  | 'AFRICA_LAGOS'
  /** Africa/Libreville */
  | 'AFRICA_LIBREVILLE'
  /** Africa/Lome */
  | 'AFRICA_LOME'
  /** Africa/Luanda */
  | 'AFRICA_LUANDA'
  /** Africa/Lubumbashi */
  | 'AFRICA_LUBUMBASHI'
  /** Africa/Lusaka */
  | 'AFRICA_LUSAKA'
  /** Africa/Malabo */
  | 'AFRICA_MALABO'
  /** Africa/Maputo */
  | 'AFRICA_MAPUTO'
  /** Africa/Maseru */
  | 'AFRICA_MASERU'
  /** Africa/Mbabane */
  | 'AFRICA_MBABANE'
  /** Africa/Mogadishu */
  | 'AFRICA_MOGADISHU'
  /** Africa/Monrovia */
  | 'AFRICA_MONROVIA'
  /** Africa/Nairobi */
  | 'AFRICA_NAIROBI'
  /** Africa/Ndjamena */
  | 'AFRICA_NDJAMENA'
  /** Africa/Niamey */
  | 'AFRICA_NIAMEY'
  /** Africa/Nouakchott */
  | 'AFRICA_NOUAKCHOTT'
  /** Africa/Ouagadougou */
  | 'AFRICA_OUAGADOUGOU'
  /** Africa/Porto-Novo */
  | 'AFRICA_PORTO_NOVO'
  /** Africa/Sao Tome */
  | 'AFRICA_SAO_TOME'
  /** Africa/Tripoli */
  | 'AFRICA_TRIPOLI'
  /** Africa/Tunis */
  | 'AFRICA_TUNIS'
  /** Africa/Windhoek */
  | 'AFRICA_WINDHOEK'
  /** America/Adak */
  | 'AMERICA_ADAK'
  /** America/Anchorage */
  | 'AMERICA_ANCHORAGE'
  /** America/Anguilla */
  | 'AMERICA_ANGUILLA'
  /** America/Antigua */
  | 'AMERICA_ANTIGUA'
  /** America/Araguaina */
  | 'AMERICA_ARAGUAINA'
  /** America/Argentina/Buenos Aires */
  | 'AMERICA_ARGENTINA_BUENOS_AIRES'
  /** America/Argentina/Catamarca */
  | 'AMERICA_ARGENTINA_CATAMARCA'
  /** America/Argentina/Cordoba */
  | 'AMERICA_ARGENTINA_CORDOBA'
  /** America/Argentina/Jujuy */
  | 'AMERICA_ARGENTINA_JUJUY'
  /** America/Argentina/La Rioja */
  | 'AMERICA_ARGENTINA_LA_RIOJA'
  /** America/Argentina/Mendoza */
  | 'AMERICA_ARGENTINA_MENDOZA'
  /** America/Argentina/Rio Gallegos */
  | 'AMERICA_ARGENTINA_RIO_GALLEGOS'
  /** America/Argentina/Salta */
  | 'AMERICA_ARGENTINA_SALTA'
  /** America/Argentina/San Juan */
  | 'AMERICA_ARGENTINA_SAN_JUAN'
  /** America/Argentina/San Luis */
  | 'AMERICA_ARGENTINA_SAN_LUIS'
  /** America/Argentina/Tucuman */
  | 'AMERICA_ARGENTINA_TUCUMAN'
  /** America/Argentina/Ushuaia */
  | 'AMERICA_ARGENTINA_USHUAIA'
  /** America/Aruba */
  | 'AMERICA_ARUBA'
  /** America/Asuncion */
  | 'AMERICA_ASUNCION'
  /** America/Atikokan */
  | 'AMERICA_ATIKOKAN'
  /** America/Bahia */
  | 'AMERICA_BAHIA'
  /** America/Bahia Banderas */
  | 'AMERICA_BAHIA_BANDERAS'
  /** America/Barbados */
  | 'AMERICA_BARBADOS'
  /** America/Belem */
  | 'AMERICA_BELEM'
  /** America/Belize */
  | 'AMERICA_BELIZE'
  /** America/Blanc-Sablon */
  | 'AMERICA_BLANC_SABLON'
  /** America/Boa Vista */
  | 'AMERICA_BOA_VISTA'
  /** America/Bogota */
  | 'AMERICA_BOGOTA'
  /** America/Boise */
  | 'AMERICA_BOISE'
  /** America/Cambridge Bay */
  | 'AMERICA_CAMBRIDGE_BAY'
  /** America/Campo Grande */
  | 'AMERICA_CAMPO_GRANDE'
  /** America/Cancun */
  | 'AMERICA_CANCUN'
  /** America/Caracas */
  | 'AMERICA_CARACAS'
  /** America/Cayenne */
  | 'AMERICA_CAYENNE'
  /** America/Cayman */
  | 'AMERICA_CAYMAN'
  /** America/Chicago */
  | 'AMERICA_CHICAGO'
  /** America/Chihuahua */
  | 'AMERICA_CHIHUAHUA'
  /** America/Ciudad Juarez */
  | 'AMERICA_CIUDAD_JUAREZ'
  /** America/Costa Rica */
  | 'AMERICA_COSTA_RICA'
  /** America/Creston */
  | 'AMERICA_CRESTON'
  /** America/Cuiaba */
  | 'AMERICA_CUIABA'
  /** America/Curacao */
  | 'AMERICA_CURACAO'
  /** America/Danmarkshavn */
  | 'AMERICA_DANMARKSHAVN'
  /** America/Dawson */
  | 'AMERICA_DAWSON'
  /** America/Dawson Creek */
  | 'AMERICA_DAWSON_CREEK'
  /** America/Denver */
  | 'AMERICA_DENVER'
  /** America/Detroit */
  | 'AMERICA_DETROIT'
  /** America/Dominica */
  | 'AMERICA_DOMINICA'
  /** America/Edmonton */
  | 'AMERICA_EDMONTON'
  /** America/Eirunepe */
  | 'AMERICA_EIRUNEPE'
  /** America/El Salvador */
  | 'AMERICA_EL_SALVADOR'
  /** America/Fort Nelson */
  | 'AMERICA_FORT_NELSON'
  /** America/Fortaleza */
  | 'AMERICA_FORTALEZA'
  /** America/Glace Bay */
  | 'AMERICA_GLACE_BAY'
  /** America/Goose Bay */
  | 'AMERICA_GOOSE_BAY'
  /** America/Grand Turk */
  | 'AMERICA_GRAND_TURK'
  /** America/Grenada */
  | 'AMERICA_GRENADA'
  /** America/Guadeloupe */
  | 'AMERICA_GUADELOUPE'
  /** America/Guatemala */
  | 'AMERICA_GUATEMALA'
  /** America/Guayaquil */
  | 'AMERICA_GUAYAQUIL'
  /** America/Guyana */
  | 'AMERICA_GUYANA'
  /** America/Halifax */
  | 'AMERICA_HALIFAX'
  /** America/Havana */
  | 'AMERICA_HAVANA'
  /** America/Hermosillo */
  | 'AMERICA_HERMOSILLO'
  /** America/Indiana/Indianapolis */
  | 'AMERICA_INDIANA_INDIANAPOLIS'
  /** America/Indiana/Knox */
  | 'AMERICA_INDIANA_KNOX'
  /** America/Indiana/Marengo */
  | 'AMERICA_INDIANA_MARENGO'
  /** America/Indiana/Petersburg */
  | 'AMERICA_INDIANA_PETERSBURG'
  /** America/Indiana/Tell City */
  | 'AMERICA_INDIANA_TELL_CITY'
  /** America/Indiana/Vevay */
  | 'AMERICA_INDIANA_VEVAY'
  /** America/Indiana/Vincennes */
  | 'AMERICA_INDIANA_VINCENNES'
  /** America/Indiana/Winamac */
  | 'AMERICA_INDIANA_WINAMAC'
  /** America/Inuvik */
  | 'AMERICA_INUVIK'
  /** America/Iqaluit */
  | 'AMERICA_IQALUIT'
  /** America/Jamaica */
  | 'AMERICA_JAMAICA'
  /** America/Juneau */
  | 'AMERICA_JUNEAU'
  /** America/Kentucky/Louisville */
  | 'AMERICA_KENTUCKY_LOUISVILLE'
  /** America/Kentucky/Monticello */
  | 'AMERICA_KENTUCKY_MONTICELLO'
  /** America/Kralendijk */
  | 'AMERICA_KRALENDIJK'
  /** America/La Paz */
  | 'AMERICA_LA_PAZ'
  /** America/Lima */
  | 'AMERICA_LIMA'
  /** America/Los Angeles */
  | 'AMERICA_LOS_ANGELES'
  /** America/Lower Princes */
  | 'AMERICA_LOWER_PRINCES'
  /** America/Maceio */
  | 'AMERICA_MACEIO'
  /** America/Managua */
  | 'AMERICA_MANAGUA'
  /** America/Manaus */
  | 'AMERICA_MANAUS'
  /** America/Marigot */
  | 'AMERICA_MARIGOT'
  /** America/Martinique */
  | 'AMERICA_MARTINIQUE'
  /** America/Matamoros */
  | 'AMERICA_MATAMOROS'
  /** America/Mazatlan */
  | 'AMERICA_MAZATLAN'
  /** America/Menominee */
  | 'AMERICA_MENOMINEE'
  /** America/Merida */
  | 'AMERICA_MERIDA'
  /** America/Metlakatla */
  | 'AMERICA_METLAKATLA'
  /** America/Mexico City */
  | 'AMERICA_MEXICO_CITY'
  /** America/Miquelon */
  | 'AMERICA_MIQUELON'
  /** America/Moncton */
  | 'AMERICA_MONCTON'
  /** America/Monterrey */
  | 'AMERICA_MONTERREY'
  /** America/Montevideo */
  | 'AMERICA_MONTEVIDEO'
  /** America/Montserrat */
  | 'AMERICA_MONTSERRAT'
  /** America/Nassau */
  | 'AMERICA_NASSAU'
  /** America/New York */
  | 'AMERICA_NEW_YORK'
  /** America/Nome */
  | 'AMERICA_NOME'
  /** America/Noronha */
  | 'AMERICA_NORONHA'
  /** America/North Dakota/Beulah */
  | 'AMERICA_NORTH_DAKOTA_BEULAH'
  /** America/North Dakota/Center */
  | 'AMERICA_NORTH_DAKOTA_CENTER'
  /** America/North Dakota/New Salem */
  | 'AMERICA_NORTH_DAKOTA_NEW_SALEM'
  /** America/Nuuk */
  | 'AMERICA_NUUK'
  /** America/Ojinaga */
  | 'AMERICA_OJINAGA'
  /** America/Panama */
  | 'AMERICA_PANAMA'
  /** America/Paramaribo */
  | 'AMERICA_PARAMARIBO'
  /** America/Phoenix */
  | 'AMERICA_PHOENIX'
  /** America/Port-au-Prince */
  | 'AMERICA_PORT_AU_PRINCE'
  /** America/Port of Spain */
  | 'AMERICA_PORT_OF_SPAIN'
  /** America/Porto Velho */
  | 'AMERICA_PORTO_VELHO'
  /** America/Puerto Rico */
  | 'AMERICA_PUERTO_RICO'
  /** America/Punta Arenas */
  | 'AMERICA_PUNTA_ARENAS'
  /** America/Rankin Inlet */
  | 'AMERICA_RANKIN_INLET'
  /** America/Recife */
  | 'AMERICA_RECIFE'
  /** America/Regina */
  | 'AMERICA_REGINA'
  /** America/Resolute */
  | 'AMERICA_RESOLUTE'
  /** America/Rio Branco */
  | 'AMERICA_RIO_BRANCO'
  /** America/Santarem */
  | 'AMERICA_SANTAREM'
  /** America/Santiago */
  | 'AMERICA_SANTIAGO'
  /** America/Santo Domingo */
  | 'AMERICA_SANTO_DOMINGO'
  /** America/Sao Paulo */
  | 'AMERICA_SAO_PAULO'
  /** America/Scoresbysund */
  | 'AMERICA_SCORESBYSUND'
  /** America/Sitka */
  | 'AMERICA_SITKA'
  /** America/St Barthelemy */
  | 'AMERICA_ST_BARTHELEMY'
  /** America/St Johns */
  | 'AMERICA_ST_JOHNS'
  /** America/St Kitts */
  | 'AMERICA_ST_KITTS'
  /** America/St Lucia */
  | 'AMERICA_ST_LUCIA'
  /** America/St Thomas */
  | 'AMERICA_ST_THOMAS'
  /** America/St Vincent */
  | 'AMERICA_ST_VINCENT'
  /** America/Swift Current */
  | 'AMERICA_SWIFT_CURRENT'
  /** America/Tegucigalpa */
  | 'AMERICA_TEGUCIGALPA'
  /** America/Thule */
  | 'AMERICA_THULE'
  /** America/Tijuana */
  | 'AMERICA_TIJUANA'
  /** America/Toronto */
  | 'AMERICA_TORONTO'
  /** America/Tortola */
  | 'AMERICA_TORTOLA'
  /** America/Vancouver */
  | 'AMERICA_VANCOUVER'
  /** America/Whitehorse */
  | 'AMERICA_WHITEHORSE'
  /** America/Winnipeg */
  | 'AMERICA_WINNIPEG'
  /** America/Yakutat */
  | 'AMERICA_YAKUTAT'
  /** Antarctica/Casey */
  | 'ANTARCTICA_CASEY'
  /** Antarctica/Davis */
  | 'ANTARCTICA_DAVIS'
  /** Antarctica/DumontDUrville */
  | 'ANTARCTICA_DUMONTDURVILLE'
  /** Antarctica/Macquarie */
  | 'ANTARCTICA_MACQUARIE'
  /** Antarctica/Mawson */
  | 'ANTARCTICA_MAWSON'
  /** Antarctica/McMurdo */
  | 'ANTARCTICA_MCMURDO'
  /** Antarctica/Palmer */
  | 'ANTARCTICA_PALMER'
  /** Antarctica/Rothera */
  | 'ANTARCTICA_ROTHERA'
  /** Antarctica/Syowa */
  | 'ANTARCTICA_SYOWA'
  /** Antarctica/Troll */
  | 'ANTARCTICA_TROLL'
  /** Antarctica/Vostok */
  | 'ANTARCTICA_VOSTOK'
  /** Arctic/Longyearbyen */
  | 'ARCTIC_LONGYEARBYEN'
  /** Asia/Aden */
  | 'ASIA_ADEN'
  /** Asia/Almaty */
  | 'ASIA_ALMATY'
  /** Asia/Amman */
  | 'ASIA_AMMAN'
  /** Asia/Anadyr */
  | 'ASIA_ANADYR'
  /** Asia/Aqtau */
  | 'ASIA_AQTAU'
  /** Asia/Aqtobe */
  | 'ASIA_AQTOBE'
  /** Asia/Ashgabat */
  | 'ASIA_ASHGABAT'
  /** Asia/Atyrau */
  | 'ASIA_ATYRAU'
  /** Asia/Baghdad */
  | 'ASIA_BAGHDAD'
  /** Asia/Bahrain */
  | 'ASIA_BAHRAIN'
  /** Asia/Baku */
  | 'ASIA_BAKU'
  /** Asia/Bangkok */
  | 'ASIA_BANGKOK'
  /** Asia/Barnaul */
  | 'ASIA_BARNAUL'
  /** Asia/Beirut */
  | 'ASIA_BEIRUT'
  /** Asia/Bishkek */
  | 'ASIA_BISHKEK'
  /** Asia/Brunei */
  | 'ASIA_BRUNEI'
  /** Asia/Chita */
  | 'ASIA_CHITA'
  /** Asia/Choibalsan */
  | 'ASIA_CHOIBALSAN'
  /** Asia/Colombo */
  | 'ASIA_COLOMBO'
  /** Asia/Damascus */
  | 'ASIA_DAMASCUS'
  /** Asia/Dhaka */
  | 'ASIA_DHAKA'
  /** Asia/Dili */
  | 'ASIA_DILI'
  /** Asia/Dubai */
  | 'ASIA_DUBAI'
  /** Asia/Dushanbe */
  | 'ASIA_DUSHANBE'
  /** Asia/Famagusta */
  | 'ASIA_FAMAGUSTA'
  /** Asia/Gaza */
  | 'ASIA_GAZA'
  /** Asia/Hebron */
  | 'ASIA_HEBRON'
  /** Asia/Ho Chi Minh */
  | 'ASIA_HO_CHI_MINH'
  /** Asia/Hong Kong */
  | 'ASIA_HONG_KONG'
  /** Asia/Hovd */
  | 'ASIA_HOVD'
  /** Asia/Irkutsk */
  | 'ASIA_IRKUTSK'
  /** Asia/Jakarta */
  | 'ASIA_JAKARTA'
  /** Asia/Jayapura */
  | 'ASIA_JAYAPURA'
  /** Asia/Jerusalem */
  | 'ASIA_JERUSALEM'
  /** Asia/Kabul */
  | 'ASIA_KABUL'
  /** Asia/Kamchatka */
  | 'ASIA_KAMCHATKA'
  /** Asia/Karachi */
  | 'ASIA_KARACHI'
  /** Asia/Kathmandu */
  | 'ASIA_KATHMANDU'
  /** Asia/Khandyga */
  | 'ASIA_KHANDYGA'
  /** Asia/Kolkata */
  | 'ASIA_KOLKATA'
  /** Asia/Krasnoyarsk */
  | 'ASIA_KRASNOYARSK'
  /** Asia/Kuala Lumpur */
  | 'ASIA_KUALA_LUMPUR'
  /** Asia/Kuching */
  | 'ASIA_KUCHING'
  /** Asia/Kuwait */
  | 'ASIA_KUWAIT'
  /** Asia/Macau */
  | 'ASIA_MACAU'
  /** Asia/Magadan */
  | 'ASIA_MAGADAN'
  /** Asia/Makassar */
  | 'ASIA_MAKASSAR'
  /** Asia/Manila */
  | 'ASIA_MANILA'
  /** Asia/Muscat */
  | 'ASIA_MUSCAT'
  /** Asia/Nicosia */
  | 'ASIA_NICOSIA'
  /** Asia/Novokuznetsk */
  | 'ASIA_NOVOKUZNETSK'
  /** Asia/Novosibirsk */
  | 'ASIA_NOVOSIBIRSK'
  /** Asia/Omsk */
  | 'ASIA_OMSK'
  /** Asia/Oral */
  | 'ASIA_ORAL'
  /** Asia/Phnom Penh */
  | 'ASIA_PHNOM_PENH'
  /** Asia/Pontianak */
  | 'ASIA_PONTIANAK'
  /** Asia/Pyongyang */
  | 'ASIA_PYONGYANG'
  /** Asia/Qatar */
  | 'ASIA_QATAR'
  /** Asia/Qostanay */
  | 'ASIA_QOSTANAY'
  /** Asia/Qyzylorda */
  | 'ASIA_QYZYLORDA'
  /** Asia/Riyadh */
  | 'ASIA_RIYADH'
  /** Asia/Sakhalin */
  | 'ASIA_SAKHALIN'
  /** Asia/Samarkand */
  | 'ASIA_SAMARKAND'
  /** Asia/Seoul */
  | 'ASIA_SEOUL'
  /** Asia/Shanghai */
  | 'ASIA_SHANGHAI'
  /** Asia/Singapore */
  | 'ASIA_SINGAPORE'
  /** Asia/Srednekolymsk */
  | 'ASIA_SREDNEKOLYMSK'
  /** Asia/Taipei */
  | 'ASIA_TAIPEI'
  /** Asia/Tashkent */
  | 'ASIA_TASHKENT'
  /** Asia/Tbilisi */
  | 'ASIA_TBILISI'
  /** Asia/Tehran */
  | 'ASIA_TEHRAN'
  /** Asia/Thimphu */
  | 'ASIA_THIMPHU'
  /** Asia/Tokyo */
  | 'ASIA_TOKYO'
  /** Asia/Tomsk */
  | 'ASIA_TOMSK'
  /** Asia/Ulaanbaatar */
  | 'ASIA_ULAANBAATAR'
  /** Asia/Urumqi */
  | 'ASIA_URUMQI'
  /** Asia/Ust-Nera */
  | 'ASIA_UST_NERA'
  /** Asia/Vientiane */
  | 'ASIA_VIENTIANE'
  /** Asia/Vladivostok */
  | 'ASIA_VLADIVOSTOK'
  /** Asia/Yakutsk */
  | 'ASIA_YAKUTSK'
  /** Asia/Yangon */
  | 'ASIA_YANGON'
  /** Asia/Yekaterinburg */
  | 'ASIA_YEKATERINBURG'
  /** Asia/Yerevan */
  | 'ASIA_YEREVAN'
  /** Atlantic/Azores */
  | 'ATLANTIC_AZORES'
  /** Atlantic/Bermuda */
  | 'ATLANTIC_BERMUDA'
  /** Atlantic/Canary */
  | 'ATLANTIC_CANARY'
  /** Atlantic/Cape Verde */
  | 'ATLANTIC_CAPE_VERDE'
  /** Atlantic/Faroe */
  | 'ATLANTIC_FAROE'
  /** Atlantic/Madeira */
  | 'ATLANTIC_MADEIRA'
  /** Atlantic/Reykjavik */
  | 'ATLANTIC_REYKJAVIK'
  /** Atlantic/South Georgia */
  | 'ATLANTIC_SOUTH_GEORGIA'
  /** Atlantic/St Helena */
  | 'ATLANTIC_ST_HELENA'
  /** Atlantic/Stanley */
  | 'ATLANTIC_STANLEY'
  /** Australia/Adelaide */
  | 'AUSTRALIA_ADELAIDE'
  /** Australia/Brisbane */
  | 'AUSTRALIA_BRISBANE'
  /** Australia/Broken Hill */
  | 'AUSTRALIA_BROKEN_HILL'
  /** Australia/Darwin */
  | 'AUSTRALIA_DARWIN'
  /** Australia/Eucla */
  | 'AUSTRALIA_EUCLA'
  /** Australia/Hobart */
  | 'AUSTRALIA_HOBART'
  /** Australia/Lindeman */
  | 'AUSTRALIA_LINDEMAN'
  /** Australia/Lord Howe */
  | 'AUSTRALIA_LORD_HOWE'
  /** Australia/Melbourne */
  | 'AUSTRALIA_MELBOURNE'
  /** Australia/Perth */
  | 'AUSTRALIA_PERTH'
  /** Australia/Sydney */
  | 'AUSTRALIA_SYDNEY'
  /** Canada/Atlantic */
  | 'CANADA_ATLANTIC'
  /** Canada/Central */
  | 'CANADA_CENTRAL'
  /** Canada/Eastern */
  | 'CANADA_EASTERN'
  /** Canada/Mountain */
  | 'CANADA_MOUNTAIN'
  /** Canada/Newfoundland */
  | 'CANADA_NEWFOUNDLAND'
  /** Canada/Pacific */
  | 'CANADA_PACIFIC'
  /** Europe/Amsterdam */
  | 'EUROPE_AMSTERDAM'
  /** Europe/Andorra */
  | 'EUROPE_ANDORRA'
  /** Europe/Astrakhan */
  | 'EUROPE_ASTRAKHAN'
  /** Europe/Athens */
  | 'EUROPE_ATHENS'
  /** Europe/Belgrade */
  | 'EUROPE_BELGRADE'
  /** Europe/Berlin */
  | 'EUROPE_BERLIN'
  /** Europe/Bratislava */
  | 'EUROPE_BRATISLAVA'
  /** Europe/Brussels */
  | 'EUROPE_BRUSSELS'
  /** Europe/Bucharest */
  | 'EUROPE_BUCHAREST'
  /** Europe/Budapest */
  | 'EUROPE_BUDAPEST'
  /** Europe/Busingen */
  | 'EUROPE_BUSINGEN'
  /** Europe/Chisinau */
  | 'EUROPE_CHISINAU'
  /** Europe/Copenhagen */
  | 'EUROPE_COPENHAGEN'
  /** Europe/Dublin */
  | 'EUROPE_DUBLIN'
  /** Europe/Gibraltar */
  | 'EUROPE_GIBRALTAR'
  /** Europe/Guernsey */
  | 'EUROPE_GUERNSEY'
  /** Europe/Helsinki */
  | 'EUROPE_HELSINKI'
  /** Europe/Isle of Man */
  | 'EUROPE_ISLE_OF_MAN'
  /** Europe/Istanbul */
  | 'EUROPE_ISTANBUL'
  /** Europe/Jersey */
  | 'EUROPE_JERSEY'
  /** Europe/Kaliningrad */
  | 'EUROPE_KALININGRAD'
  /** Europe/Kirov */
  | 'EUROPE_KIROV'
  /** Europe/Kyiv */
  | 'EUROPE_KYIV'
  /** Europe/Lisbon */
  | 'EUROPE_LISBON'
  /** Europe/Ljubljana */
  | 'EUROPE_LJUBLJANA'
  /** Europe/London */
  | 'EUROPE_LONDON'
  /** Europe/Luxembourg */
  | 'EUROPE_LUXEMBOURG'
  /** Europe/Madrid */
  | 'EUROPE_MADRID'
  /** Europe/Malta */
  | 'EUROPE_MALTA'
  /** Europe/Mariehamn */
  | 'EUROPE_MARIEHAMN'
  /** Europe/Minsk */
  | 'EUROPE_MINSK'
  /** Europe/Monaco */
  | 'EUROPE_MONACO'
  /** Europe/Moscow */
  | 'EUROPE_MOSCOW'
  /** Europe/Oslo */
  | 'EUROPE_OSLO'
  /** Europe/Paris */
  | 'EUROPE_PARIS'
  /** Europe/Podgorica */
  | 'EUROPE_PODGORICA'
  /** Europe/Prague */
  | 'EUROPE_PRAGUE'
  /** Europe/Riga */
  | 'EUROPE_RIGA'
  /** Europe/Rome */
  | 'EUROPE_ROME'
  /** Europe/Samara */
  | 'EUROPE_SAMARA'
  /** Europe/San Marino */
  | 'EUROPE_SAN_MARINO'
  /** Europe/Sarajevo */
  | 'EUROPE_SARAJEVO'
  /** Europe/Saratov */
  | 'EUROPE_SARATOV'
  /** Europe/Simferopol */
  | 'EUROPE_SIMFEROPOL'
  /** Europe/Skopje */
  | 'EUROPE_SKOPJE'
  /** Europe/Sofia */
  | 'EUROPE_SOFIA'
  /** Europe/Stockholm */
  | 'EUROPE_STOCKHOLM'
  /** Europe/Tallinn */
  | 'EUROPE_TALLINN'
  /** Europe/Tirane */
  | 'EUROPE_TIRANE'
  /** Europe/Ulyanovsk */
  | 'EUROPE_ULYANOVSK'
  /** Europe/Vaduz */
  | 'EUROPE_VADUZ'
  /** Europe/Vatican */
  | 'EUROPE_VATICAN'
  /** Europe/Vienna */
  | 'EUROPE_VIENNA'
  /** Europe/Vilnius */
  | 'EUROPE_VILNIUS'
  /** Europe/Volgograd */
  | 'EUROPE_VOLGOGRAD'
  /** Europe/Warsaw */
  | 'EUROPE_WARSAW'
  /** Europe/Zagreb */
  | 'EUROPE_ZAGREB'
  /** Europe/Zurich */
  | 'EUROPE_ZURICH'
  /** GMT */
  | 'GMT'
  /** Indian/Antananarivo */
  | 'INDIAN_ANTANANARIVO'
  /** Indian/Chagos */
  | 'INDIAN_CHAGOS'
  /** Indian/Christmas */
  | 'INDIAN_CHRISTMAS'
  /** Indian/Cocos */
  | 'INDIAN_COCOS'
  /** Indian/Comoro */
  | 'INDIAN_COMORO'
  /** Indian/Kerguelen */
  | 'INDIAN_KERGUELEN'
  /** Indian/Mahe */
  | 'INDIAN_MAHE'
  /** Indian/Maldives */
  | 'INDIAN_MALDIVES'
  /** Indian/Mauritius */
  | 'INDIAN_MAURITIUS'
  /** Indian/Mayotte */
  | 'INDIAN_MAYOTTE'
  /** Indian/Reunion */
  | 'INDIAN_REUNION'
  /** Pacific/Apia */
  | 'PACIFIC_APIA'
  /** Pacific/Auckland */
  | 'PACIFIC_AUCKLAND'
  /** Pacific/Bougainville */
  | 'PACIFIC_BOUGAINVILLE'
  /** Pacific/Chatham */
  | 'PACIFIC_CHATHAM'
  /** Pacific/Chuuk */
  | 'PACIFIC_CHUUK'
  /** Pacific/Easter */
  | 'PACIFIC_EASTER'
  /** Pacific/Efate */
  | 'PACIFIC_EFATE'
  /** Pacific/Fakaofo */
  | 'PACIFIC_FAKAOFO'
  /** Pacific/Fiji */
  | 'PACIFIC_FIJI'
  /** Pacific/Funafuti */
  | 'PACIFIC_FUNAFUTI'
  /** Pacific/Galapagos */
  | 'PACIFIC_GALAPAGOS'
  /** Pacific/Gambier */
  | 'PACIFIC_GAMBIER'
  /** Pacific/Guadalcanal */
  | 'PACIFIC_GUADALCANAL'
  /** Pacific/Guam */
  | 'PACIFIC_GUAM'
  /** Pacific/Honolulu */
  | 'PACIFIC_HONOLULU'
  /** Pacific/Kanton */
  | 'PACIFIC_KANTON'
  /** Pacific/Kiritimati */
  | 'PACIFIC_KIRITIMATI'
  /** Pacific/Kosrae */
  | 'PACIFIC_KOSRAE'
  /** Pacific/Kwajalein */
  | 'PACIFIC_KWAJALEIN'
  /** Pacific/Majuro */
  | 'PACIFIC_MAJURO'
  /** Pacific/Marquesas */
  | 'PACIFIC_MARQUESAS'
  /** Pacific/Midway */
  | 'PACIFIC_MIDWAY'
  /** Pacific/Nauru */
  | 'PACIFIC_NAURU'
  /** Pacific/Niue */
  | 'PACIFIC_NIUE'
  /** Pacific/Norfolk */
  | 'PACIFIC_NORFOLK'
  /** Pacific/Noumea */
  | 'PACIFIC_NOUMEA'
  /** Pacific/Pago Pago */
  | 'PACIFIC_PAGO_PAGO'
  /** Pacific/Palau */
  | 'PACIFIC_PALAU'
  /** Pacific/Pitcairn */
  | 'PACIFIC_PITCAIRN'
  /** Pacific/Pohnpei */
  | 'PACIFIC_POHNPEI'
  /** Pacific/Port Moresby */
  | 'PACIFIC_PORT_MORESBY'
  /** Pacific/Rarotonga */
  | 'PACIFIC_RAROTONGA'
  /** Pacific/Saipan */
  | 'PACIFIC_SAIPAN'
  /** Pacific/Tahiti */
  | 'PACIFIC_TAHITI'
  /** Pacific/Tarawa */
  | 'PACIFIC_TARAWA'
  /** Pacific/Tongatapu */
  | 'PACIFIC_TONGATAPU'
  /** Pacific/Wake */
  | 'PACIFIC_WAKE'
  /** Pacific/Wallis */
  | 'PACIFIC_WALLIS'
  /** US/Alaska */
  | 'US_ALASKA'
  /** US/Arizona */
  | 'US_ARIZONA'
  /** US/Central */
  | 'US_CENTRAL'
  /** US/Eastern */
  | 'US_EASTERN'
  /** US/Hawaii */
  | 'US_HAWAII'
  /** US/Mountain */
  | 'US_MOUNTAIN'
  /** US/Pacific */
  | 'US_PACIFIC'
  /** UTC */
  | 'UTC';

export type CrontabScheduleType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Cron Minutes to Run. Use "*" for "all". (Example: "0,30") */
  minute: Scalars['String'];
  /** Cron Hours to Run. Use "*" for "all". (Example: "8,20") */
  hour: Scalars['String'];
  /** Cron Days Of The Week to Run. Use "*" for "all". (Example: "0,5") */
  dayOfWeek: Scalars['String'];
  /** Cron Days Of The Month to Run. Use "*" for "all". (Example: "1,15") */
  dayOfMonth: Scalars['String'];
  /** Cron Months Of The Year to Run. Use "*" for "all". (Example: "0,6") */
  monthOfYear: Scalars['String'];
  /** Timezone to Run the Cron Schedule on. Default is UTC. */
  timezone: CrontabScheduleTimezone;
  /** Crontab Schedule to run the task on.  Set only one schedule type, leave the others null. */
  periodictaskSet: PeriodicTaskTypeConnection;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};


export type CrontabScheduleTypePeriodictaskSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type CustomBannerType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  text: Scalars['String'];
  type: BannerType;
  isEnabled: Scalars['Boolean'];
  position: Scalars['Int'];
  relatedId: Maybe<Scalars['String']>;
  link: Scalars['String'];
  slug: Scalars['String'];
  image: Maybe<Scalars['String']>;
  imageMobile: Maybe<Scalars['String']>;
  name: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  /** The URL of the image. */
  imageUrl: Maybe<Scalars['String']>;
  /** The URL of the image for mobile screens. */
  imageMobileUrl: Maybe<Scalars['String']>;
};

export type CustomBannerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CustomBannerTypeEdge>>;
};

/** A Relay edge containing a `CustomBannerType` and its cursor. */
export type CustomBannerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<CustomBannerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CustomOrderStatus = {
  status: Maybe<Scalars['String']>;
};

export type CustomWalletLogType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  amount: Scalars['Float'];
  wallet: WalletType;
  expiry: Scalars['Boolean'];
  reason: Scalars['String'];
  type: WalletLogType;
  created: Scalars['DateTime'];
};

export type CustomWalletLogTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CustomWalletLogTypeEdge>>;
};

/** A Relay edge containing a `CustomWalletLogType` and its cursor. */
export type CustomWalletLogTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<CustomWalletLogType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Deletes customers. */
export type CustomerBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  accountErrors: Array<AccountError>;
};

/** Creates a new customer. */
export type CustomerCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Deletes a customer. */
export type CustomerDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']>;
  /** Customer event type. */
  type: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
  /** Content of the event. */
  message: Maybe<Scalars['String']>;
  /** Number of objects concerned by the event. */
  count: Maybe<Scalars['Int']>;
  /** The concerned order. */
  order: Maybe<Order>;
  /** The concerned order line. */
  orderLine: Maybe<OrderLine>;
};

/** An enumeration. */
export type CustomerEventsEnum =
  | 'ACCOUNT_CREATED'
  | 'PASSWORD_RESET_LINK_SENT'
  | 'PASSWORD_RESET'
  | 'EMAIL_CHANGED_REQUEST'
  | 'PASSWORD_CHANGED'
  | 'EMAIL_CHANGED'
  | 'PLACED_ORDER'
  | 'NOTE_ADDED_TO_ORDER'
  | 'NOTE_ADDED_TO_CHECKOUT'
  | 'DIGITAL_LINK_DOWNLOADED'
  | 'CUSTOMER_DELETED'
  | 'NAME_ASSIGNED'
  | 'EMAIL_ASSIGNED'
  | 'NOTE_ADDED';

export type CustomerExportFilterInput = {
  dateJoined?: Maybe<DateRangeInput>;
  tags?: Maybe<TagsListInput>;
};

export type CustomerFieldEnum =
  | 'FIRST_NAME'
  | 'LAST_NAME'
  | 'EMAIL'
  | 'DATE_JOINED'
  | 'IS_STAFF'
  | 'IS_ACTIVE'
  | 'PHONE'
  | 'STREET_ADDRESS_1'
  | 'STREET_ADDRESS_2'
  | 'CITY'
  | 'STATE'
  | 'POSTAL_CODE'
  | 'COUNTRY';

export type CustomerFilterInput = {
  dateJoined?: Maybe<DateRangeInput>;
  moneySpent?: Maybe<PriceRangeInput>;
  numberOfOrders?: Maybe<IntRangeInput>;
  placedOrders?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
  tags?: Maybe<TagsListInput>;
};

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** The unique phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
};

export type CustomerMetaInput = {
  /** Fields required to update metadata key. */
  key: Scalars['String'];
  /** Fields required to update metadata value. */
  value: Scalars['String'];
};

/** Updates an existing customer. */
export type CustomerUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};


export type DateRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['Date']>;
  /** End date. */
  lte?: Maybe<Scalars['Date']>;
};


export type DateTimeRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['DateTime']>;
  /** End date. */
  lte?: Maybe<Scalars['DateTime']>;
};

/** Deactivate all JWT tokens of the currently authenticated user. */
export type DeactivateAllUserTokens = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};


/** Delete an archive order. */
export type DeleteArchiveOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  archiveOrderErrors: Array<ArchiveOrderError>;
  archiveOrder: Maybe<ArchiveOrderType>;
};

/** Delete a banner */
export type DeleteBanner = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']>;
  bannerErrors: Array<BannerError>;
};

/** Delete bulk voucher rules. */
export type DeleteBulkVoucherRule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  voucherErrors: Array<VoucherError>;
};

/** Delete a file that is hosted. */
export type DeleteHostingFile = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Is the operation successful. */
  result: Maybe<Scalars['Boolean']>;
};

/** Delete an Influencer instance. */
export type DeleteInfluencer = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Influencer instance. */
  influencer: Maybe<InfluencerType>;
  influencerErrors: Array<InfluencerError>;
};

/** Delete metadata of an object. */
export type DeleteMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Delete metadata of an object. */
export type DeleteMetadataV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadataV2>;
};

/** Delete object's private metadata. */
export type DeletePrivateMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Delete object's private metadata. */
export type DeletePrivateMetadataV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadataV2>;
};

/** Edit existing product review. */
export type DeleteProductReview = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** Delete product review by product */
export type DeleteProductReviewByProduct = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** Delete an ShopifyUser instance. */
export type DeleteShopifyUser = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An ShopifyUser instance. */
  shopifyUser: Maybe<ShopifyUserType>;
  shopifyUserErrors: Array<ShopifyUserError>;
};

/** Delete a subscription. */
export type DeleteSubscription = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A subscription instance */
  subscription: Maybe<SubscriptionType>;
  subscriptionError: Array<SubscriptionError>;
};

/** Delete a voucher rule. */
export type DeleteVoucherRule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  voucherErrors: Array<VoucherError>;
  voucherRule: Maybe<VoucherRuleType>;
};

export type DeliveryScheduleInput = {
  /** name of the warehouse */
  warehouse?: Maybe<Scalars['String']>;
  /** delivery date */
  deliveryDate?: Maybe<Scalars['Date']>;
  /** delivery time */
  deliveryTime?: Maybe<Scalars['String']>;
  /** available slots */
  availableSlots?: Maybe<Scalars['Int']>;
  /** slots filled */
  slotsFilled?: Maybe<Scalars['Int']>;
  /** start time */
  startTime?: Maybe<Scalars['String']>;
  /** end time */
  endTime?: Maybe<Scalars['String']>;
  /**  is express */
  isExpress?: Maybe<Scalars['Boolean']>;
  /** delivery day */
  deliveryDay?: Maybe<Scalars['String']>;
  /** minimum order */
  minimumOrder?: Maybe<Scalars['Int']>;
  /** delivery fee */
  deliveryFee?: Maybe<Scalars['Int']>;
};

export type DeliverySchedulerPincodeType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  pincode: Scalars['String'];
  standardDeliveryGroup: Maybe<Scalars['String']>;
  expressDeliveryGroup: Maybe<Scalars['String']>;
  shippingZone: Maybe<DeliveryShippingZoneType>;
};

export type DeliverySchedulerPincodeTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliverySchedulerPincodeTypeEdge>>;
};

/** A Relay edge containing a `DeliverySchedulerPincodeType` and its cursor. */
export type DeliverySchedulerPincodeTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<DeliverySchedulerPincodeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DeliverySchedulerType = Node & ObjectWithMetadataV2 & {
  /** The ID of the object. */
  id: Scalars['ID'];
  warehouse: Maybe<Scalars['String']>;
  deliveryDate: Maybe<Scalars['Date']>;
  deliveryTime: Maybe<Scalars['String']>;
  availableSlots: Scalars['Int'];
  slotsFilled: Scalars['Int'];
  startTime: Maybe<Scalars['String']>;
  endTime: Maybe<Scalars['String']>;
  isExpress: Maybe<Scalars['Boolean']>;
  deliveryDay: Maybe<Scalars['String']>;
  minimumOrder: Maybe<Scalars['Int']>;
  deliveryFee: Maybe<Scalars['Int']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItemV2>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItemV2>>;
};

export type DeliverySchedulerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DeliverySchedulerTypeEdge>>;
};

/** A Relay edge containing a `DeliverySchedulerType` and its cursor. */
export type DeliverySchedulerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<DeliverySchedulerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DeliveryShippingZoneType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  warehouses: WarehouseCountableConnection;
  name: Scalars['String'];
  pincodes: DeliverySchedulerPincodeTypeConnection;
};


export type DeliveryShippingZoneTypeWarehousesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type DeliveryShippingZoneTypePincodesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DigitalContent = Node & ObjectWithMetadata & {
  useDefaultSettings: Scalars['Boolean'];
  automaticFulfillment: Scalars['Boolean'];
  productVariant: ProductVariant;
  contentFile: Scalars['String'];
  maxDownloads: Maybe<Scalars['Int']>;
  urlValidDays: Maybe<Scalars['Int']>;
  /** List of URLs for the digital variant. */
  urls: Maybe<Array<Maybe<DigitalContentUrl>>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

export type DigitalContentCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<DigitalContentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
  /** The item at the end of the edge. */
  node: DigitalContent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type DigitalContentCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant: Maybe<ProductVariant>;
  content: Maybe<DigitalContent>;
  productErrors: Array<ProductError>;
};

/** Remove digital content assigned to given variant. */
export type DigitalContentDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant: Maybe<ProductVariant>;
  productErrors: Array<ProductError>;
};

export type DigitalContentInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
};

/** Update digital content. */
export type DigitalContentUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  variant: Maybe<ProductVariant>;
  content: Maybe<DigitalContent>;
  productErrors: Array<ProductError>;
};

export type DigitalContentUploadInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>;
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload'];
};

export type DigitalContentUrl = Node & {
  content: DigitalContent;
  created: Scalars['DateTime'];
  downloadNum: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** URL for digital content. */
  url: Maybe<Scalars['String']>;
  /** UUID of digital content. */
  token: Scalars['UUID'];
};

/** Generate new URL to digital content. */
export type DigitalContentUrlCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  digitalContentUrl: Maybe<DigitalContentUrl>;
};

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID'];
};

/** An enumeration. */
export type DiscountAmountType =
  | 'PERCENTAGE'
  | 'FIXED';

export type DiscountError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: DiscountErrorCode;
};

/** An enumeration. */
export type DiscountErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type DiscountStatusEnum =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'SCHEDULED';

export type DiscountType =
  | 'PERCENTAGE'
  | 'FIXED';

export type DiscountValueTypeEnum =
  | 'FIXED'
  | 'PERCENTAGE';

export type DiscountsType = {
  couponDiscount: Maybe<Scalars['Decimal']>;
  prepaidDiscount: Maybe<Scalars['Decimal']>;
  cashbackDiscount: Maybe<Scalars['Decimal']>;
};

/** Represents shop's domain. */
export type Domain = {
  /** The host name of the domain. */
  host: Scalars['String'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean'];
  /** Shop's absolute URL. */
  url: Scalars['String'];
};

/** Create a new voucher for draft order */
export type DraftOrderAddPromoCode = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Adds COD charges to an order's total */
export type DraftOrderApplyCod = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Adds COD charges to an order's total */
export type DraftOrderApplyPrePaid = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Adds Wallet discount */
export type DraftOrderApplyWallet = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Deletes draft orders. */
export type DraftOrderBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Completes creating an order. */
export type DraftOrderComplete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Completed order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Creates a new draft order. */
export type DraftOrderCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order: Maybe<Order>;
};

/** Creates a new draft order. */
export type DraftOrderCreateFromOrderId = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: Maybe<Array<Maybe<OrderLineCreateInput>>>;
};

/** Deletes a draft order. */
export type DraftOrderDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order: Maybe<Order>;
};

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  user?: Maybe<Scalars['ID']>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>;
};

/** Deletes an order line from a draft order. */
export type DraftOrderLineDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order: Maybe<Order>;
  /** An order line that was deleted. */
  orderLine: Maybe<OrderLine>;
  orderErrors: Array<OrderError>;
};

/** Updates an order line of a draft order. */
export type DraftOrderLineUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine: Maybe<OrderLine>;
};

/** Deletes order lines. */
export type DraftOrderLinesBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Create order lines for a draft order. */
export type DraftOrderLinesCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order: Maybe<Order>;
  /** List of newly added order lines. */
  orderLines: Maybe<Array<OrderLine>>;
  orderErrors: Array<OrderError>;
};

/** Removes COD charges from an orders total */
export type DraftOrderRemoveCod = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Removes COD charges from an orders total */
export type DraftOrderRemovePrePaid = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Create a new voucher for draft order */
export type DraftOrderRemovePromoCode = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Removes wallet discount. */
export type DraftOrderRemoveWallet = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An order instance. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Updates a draft order. */
export type DraftOrderUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order: Maybe<Order>;
};

export type DtcEligibleType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** eligibilty of the given order numbers */
  eligibility: Maybe<Scalars['JSONString']>;
};

/** Cancel a DTC Order */
export type DtcOrderCancel = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Response */
  response: Maybe<Scalars['JSONString']>;
};

/** Return a DTC Order */
export type DtcOrderReturn = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Response */
  response: Maybe<Scalars['JSONString']>;
};

export type DtcReturnProductType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** return product of the given order numbers */
  returnProduct: Maybe<Scalars['JSONString']>;
};

export type DtcTrackingType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** trackings of an order */
  trackings: Maybe<Scalars['JSONString']>;
  /** status trackings of an order */
  statusData: Maybe<Scalars['JSONString']>;
};

/** Edit existing product review. */
export type EditProductReview = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** Edit existing product review by providing a hash. */
export type EditProductReviewHash = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** An enumeration. */
export type EmailTemplateCode =
  | 'INVALID'
  | 'INVALID_EMAIL';

/** Create a new email template instance */
export type EmailTemplateCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Email Template instance */
  emailTemplate: Maybe<EmailTemplateType>;
  emailTemplateErrors: Array<EmailTemplateError>;
};

/** Delete a template instance */
export type EmailTemplateDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Email Template instance */
  emailTemplate: Maybe<EmailTemplateType>;
  emailTemplateErrors: Array<EmailTemplateError>;
};

export type EmailTemplateError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: EmailTemplateCode;
};

export type EmailTemplateFilterInput = {
  sender?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  mailType?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  updated?: Maybe<DateRangeInput>;
};

export type EmailTemplateInput = {
  /** HTML template */
  htmlBody: Scalars['String'];
  /** subject for email */
  subject?: Maybe<Scalars['String']>;
  /** text field for email */
  text?: Maybe<Scalars['String']>;
  /** sender email */
  sender: Scalars['String'];
  /** cc */
  cc?: Maybe<Scalars['String']>;
  /** Type of email */
  mailType?: Maybe<TemplateMailType>;
  /** Enable to use template */
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplateOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort EmailTemplates by the selected field. */
  field?: Maybe<EmailTemplateOrderField>;
};

export type EmailTemplateOrderField =
  /** Sort EmailTemplates by updated_at. */
  | 'UPDATED_DATE'
  /** Sort EmailTemplates by created_at. */
  | 'CREATED_DATE';

export type EmailTemplateType = Node & ObjectWithMetadataV2 & {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItemV2>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItemV2>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  htmlBody: Scalars['String'];
  subject: Scalars['String'];
  text: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  cc: Maybe<Scalars['String']>;
  mailType: Scalars['String'];
  shop: Maybe<Scalars['String']>;
  isEnabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  previousTemplate: Maybe<Scalars['String']>;
  updatedBy: Maybe<User>;
};

export type EmailTemplateTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<EmailTemplateTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type EmailTemplateTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: EmailTemplateType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Update an email template instance */
export type EmailTemplateUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Email Template instance */
  emailTemplate: Maybe<EmailTemplateType>;
  emailTemplateErrors: Array<EmailTemplateError>;
};

/** Represents an error in the input of a mutation. */
export type Error = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
};

/** Export customers to csv file. */
export type ExportCustomers = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportCustomersInfoInput = {
  /** List of customer fields which should be exported. */
  fields?: Maybe<Array<CustomerFieldEnum>>;
};

export type ExportCustomersInput = {
  /** Determine which customer should be exported. */
  scope: ExportScope;
  /** Filtering options for customers. */
  filter?: Maybe<CustomerExportFilterInput>;
  /** List of customer IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportCustomersInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export type ExportError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ExportErrorCode;
};

/** An enumeration. */
export type ExportErrorCode =
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

/** History log of export file. */
export type ExportEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. */
  user: Maybe<User>;
  /** App which performed the action. */
  app: Maybe<App>;
  /** Content of the event. */
  message: Scalars['String'];
};

/** An enumeration. */
export type ExportEventsEnum =
  | 'EXPORT_PENDING'
  | 'EXPORT_SUCCESS'
  | 'EXPORT_FAILED'
  | 'EXPORT_DELETED'
  | 'EXPORTED_FILE_SENT'
  | 'EXPORT_FAILED_INFO_SENT';

/** Represents a job data of exported file. */
export type ExportFile = Node & Job & {
  /** The ID of the object. */
  id: Scalars['ID'];
  user: Maybe<User>;
  app: Maybe<App>;
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
  /** The URL of field to download. */
  url: Maybe<Scalars['String']>;
  /** List of events associated with the export. */
  events: Maybe<Array<ExportEvent>>;
};

export type ExportFileCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ExportFileCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
  /** The item at the end of the edge. */
  node: ExportFile;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type ExportFileFilterInput = {
  createdAt?: Maybe<DateTimeRangeInput>;
  updatedAt?: Maybe<DateTimeRangeInput>;
  status?: Maybe<JobStatusEnum>;
  user?: Maybe<Scalars['String']>;
  app?: Maybe<Scalars['String']>;
};

export type ExportFileSortField =
  /** Sort export file by status. */
  | 'STATUS'
  /** Sort export file by created at. */
  | 'CREATED_AT'
  /** Sort export file by updated at. */
  | 'UPDATED_AT';

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
};

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of product fields witch should be exported. */
  fields?: Maybe<Array<ProductFieldEnum>>;
};

/** Export orders to csv file. */
export type ExportOrders = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportOrdersInfoInput = {
  /** List of order fields which should be exported. */
  fields?: Maybe<Array<OrderFieldEnum>>;
};

export type ExportOrdersInput = {
  /** Determine which orders should be exported. */
  scope: ExportScope;
  /** Filtering options for orders. */
  filter?: Maybe<OrderExportFilterInput>;
  /** List of order IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportOrdersInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

/** Export products to csv file. */
export type ExportProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportProductsInput = {
  /** Determine which products should be exported. */
  scope: ExportScope;
  /** Filtering options for products. */
  filter?: Maybe<ProductFilterInput>;
  /** List of products IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

/** Export products to csv file. */
export type ExportProductsV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportProductsV2InfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: Maybe<Array<Scalars['ID']>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: Maybe<Array<Scalars['ID']>>;
  /** List of product fields witch should be exported. */
  fields?: Maybe<Array<ProductFieldEnum>>;
};

export type ExportProductsV2Input = {
  /** Determine which products should be exported. */
  scope: ExportScope;
  /** Filtering options for products. */
  filter?: Maybe<ProductFilterInput>;
  /** List of products IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportProductsV2InfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export type ExportScope =
  /** Export all products. */
  | 'ALL'
  /** Export products with given ids. */
  | 'IDS'
  /** Export the filtered products. */
  | 'FILTER';

/** Export orders to csv file. */
export type ExportWallet = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
  exportErrors: Array<ExportError>;
};

export type ExportWalletInfoInput = {
  /** List of wallet fields which should be exported. */
  fields?: Maybe<Array<WalletFieldEnum>>;
};

export type ExportWalletInput = {
  /** Determine which orders should be exported. */
  scope: ExportScope;
  /** List of wallet IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>;
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportWalletInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
};

export type FailedOrder = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Failed checkout. */
  checkout: Maybe<Checkout>;
  transactionToken: Maybe<Scalars['String']>;
  paymentToken: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
};

export type FailedOrderConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FailedOrderEdge>>;
};

/** A Relay edge containing a `FailedOrder` and its cursor. */
export type FailedOrderEdge = {
  /** The item at the end of the edge */
  node: Maybe<FailedOrder>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Add Balance to Wallet through CSV. */
export type FarziWalletBalanceAddCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
};

/** Add/Sub Wallet Balance of a user from Email */
export type FarziWalletBalanceEmailUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
  WalletErrors: Array<FarziWalletError>;
};

/** Sub Balance to Wallet through CSV. */
export type FarziWalletBalanceSubCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
};

export type FarziWalletError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: FarziWalletErrorCode;
};

/** An enumeration. */
export type FarziWalletErrorCode =
  | 'UNAUTHORIZED';

export type FarziWalletInputEmail = {
  /** Email of the user */
  email: Scalars['String'];
  /** Amount of wallet to update */
  amount: Scalars['Float'];
  /** Reason for updation */
  reason: Scalars['String'];
  /** ADD/SUB Option to update */
  type: Scalars['String'];
  /** Secret for updation */
  secret: Scalars['String'];
};

/** An enumeration. */
export type FileTypesEnum =
  | 'CSV'
  | 'XLSX';

export type FormNameType = {
  /** distinct form names  */
  formName: Maybe<Scalars['String']>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  fulfillmentOrder: Scalars['Int'];
  status: FulfillmentStatus;
  trackingNumber: Scalars['String'];
  created: Scalars['DateTime'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** List of lines for the fulfillment. */
  lines: Maybe<Array<Maybe<FulfillmentLine>>>;
  /** User-friendly fulfillment status. */
  statusDisplay: Maybe<Scalars['String']>;
  /** Warehouse from fulfillment was fulfilled. */
  warehouse: Maybe<Warehouse>;
  /** Tracking Url */
  trackingUrl: Maybe<Scalars['String']>;
  /** Tracking Provider */
  provider: Maybe<Scalars['String']>;
  /** Fulfillment Status */
  displayStatus: Maybe<Scalars['String']>;
};

/** Cancels existing fulfillment and optionally restocks items. */
export type FulfillmentCancel = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A canceled fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  /** ID of warehouse where items will be restock. */
  warehouseId: Scalars['ID'];
};

/** Clears metadata for fulfillment. */
export type FulfillmentClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  fulfillment: Maybe<Fulfillment>;
};

/** Clears private metadata for fulfillment. */
export type FulfillmentClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  fulfillment: Maybe<Fulfillment>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  orderLine: Maybe<OrderLine>;
};

/** An enumeration. */
export type FulfillmentStatus =
  /** Fulfilled */
  | 'FULFILLED'
  /** Canceled */
  | 'CANCELED';

/** Updates metadata for fulfillment. */
export type FulfillmentUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  fulfillment: Maybe<Fulfillment>;
};

/** Updates metadata for fulfillment. */
export type FulfillmentUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  fulfillment: Maybe<Fulfillment>;
};

/** Updates a fulfillment for an order. */
export type FulfillmentUpdateTracking = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A fulfillment with updated tracking. */
  fulfillment: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  /** Fulfillment tracking number. */
  trackingNumber?: Maybe<Scalars['String']>;
  /** Fulfillment tracking url. */
  trackingUrl?: Maybe<Scalars['String']>;
  /** Fulfillment tracking provider. */
  provider?: Maybe<Scalars['String']>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
  /** Fulfillment display status. */
  displayStatus?: Maybe<Scalars['String']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  /** Gateway config key. */
  field: Scalars['String'];
  /** Gateway config value for key. */
  value: Maybe<Scalars['String']>;
};

/** Create a new generic form entry. */
export type GenericFormCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A generic form instance. */
  genericForm: Maybe<GenericFormType>;
  genericFormErrors: Array<GenericFormError>;
};

export type GenericFormError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: GenericFormErrorCode;
};

/** An enumeration. */
export type GenericFormErrorCode =
  | 'PHONE_NUMBER_INVALID';

export type GenericFormFilterInput = {
  email?: Maybe<Scalars['String']>;
  formName?: Maybe<Scalars['String']>;
};

export type GenericFormInput = {
  /** Name of user. */
  name: Scalars['String'];
  /** Phone number of user. */
  phone: Scalars['String'];
  /** Email address of user. */
  email: Scalars['String'];
  /** Response body. */
  responseBody: Scalars['String'];
  /** form name */
  formName?: Maybe<Scalars['String']>;
};

export type GenericFormType = Node & {
  responseId: Scalars['ID'];
  formName: Maybe<Scalars['String']>;
  responseBody: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type GenericFormTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GenericFormTypeEdge>>;
};

/** A Relay edge containing a `GenericFormType` and its cursor. */
export type GenericFormTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<GenericFormType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


/** Represents customers's geolocalization data. */
export type Geolocalization = {
  /** Country of the user acquired by his IP address. */
  country: Maybe<CountryDisplay>;
};

/** Creates Coupon Code for referd user. */
export type GetReferalDiscount = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Coupon Code. */
  couponCode: Maybe<Scalars['String']>;
  accountErrors: Array<AccountError>;
};

/** Create and return a user hash. */
export type GetUserHash = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Shopify User Id */
  userHash: Maybe<Scalars['String']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node & {
  /** Gift card code. */
  code: Maybe<Scalars['String']>;
  /** The customer who bought a gift card. */
  user: Maybe<User>;
  created: Scalars['DateTime'];
  startDate: Scalars['Date'];
  endDate: Maybe<Scalars['Date']>;
  lastUsedOn: Maybe<Scalars['DateTime']>;
  isActive: Scalars['Boolean'];
  initialBalance: Maybe<Money>;
  currentBalance: Maybe<Money>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Code in format which allows displaying in a user interface. */
  displayCode: Maybe<Scalars['String']>;
};

/** Activate a gift card. */
export type GiftCardActivate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A gift card to activate. */
  giftCard: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GiftCardCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
  /** The item at the end of the edge. */
  node: GiftCard;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new gift card. */
export type GiftCardCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  giftCardErrors: Array<GiftCardError>;
  giftCard: Maybe<GiftCard>;
};

export type GiftCardCreateInput = {
  /** Start date of the gift card in ISO 8601 format. */
  startDate?: Maybe<Scalars['Date']>;
  /** End date of the gift card in ISO 8601 format. */
  endDate?: Maybe<Scalars['Date']>;
  /** Value of the gift card. */
  balance?: Maybe<Scalars['PositiveDecimal']>;
  /** The customer's email of the gift card buyer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Code to use the gift card. */
  code?: Maybe<Scalars['String']>;
};

/** Deactivate a gift card. */
export type GiftCardDeactivate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A gift card to deactivate. */
  giftCard: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: GiftCardErrorCode;
};

/** An enumeration. */
export type GiftCardErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Update a gift card. */
export type GiftCardUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  giftCardErrors: Array<GiftCardError>;
  giftCard: Maybe<GiftCard>;
};

export type GiftCardUpdateInput = {
  /** Start date of the gift card in ISO 8601 format. */
  startDate?: Maybe<Scalars['Date']>;
  /** End date of the gift card in ISO 8601 format. */
  endDate?: Maybe<Scalars['Date']>;
  /** Value of the gift card. */
  balance?: Maybe<Scalars['PositiveDecimal']>;
  /** The customer's email of the gift card buyer. */
  userEmail?: Maybe<Scalars['String']>;
};

export type GlobalSearchShopMetaType = {
  /** Shopmeta Field name */
  fieldName: Maybe<Scalars['String']>;
  /** Shopmeta Field Value */
  fieldValue: Maybe<Scalars['String']>;
};

export type GokwikCreateOrderInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
};

export type GokwikError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: GokwikErrorCode;
};

/** An enumeration. */
export type GokwikErrorCode =
  | 'INVALID';

export type GokwikOrderType = {
  /** Gokwik ID. */
  id: Maybe<Scalars['String']>;
  /** Gokwik request id */
  requestId: Maybe<Scalars['String']>;
  /** Gokwik Order Id */
  orderId: Maybe<Scalars['String']>;
  /** Total order amount. */
  amount: Maybe<Scalars['Decimal']>;
  /** Gokwick Mid */
  mid: Maybe<Scalars['String']>;
  /** Gokwik Order type */
  orderType: Maybe<Scalars['String']>;
  /** Order status. */
  status: Maybe<Scalars['String']>;
};

export type GokwikType = {
  /** risk flag */
  isHighRisk: Scalars['Boolean'];
  /** if All the fields in checkout are present */
  isDataValid: Scalars['String'];
};

/** Represents permission group data. */
export type Group = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** List of group permissions */
  permissions: Maybe<Array<Maybe<Permission>>>;
  /** List of group users */
  users: Maybe<Array<Maybe<User>>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean'];
};

export type GroupCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<GroupCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
  /** The item at the end of the edge. */
  node: Group;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type HeaderInput = {
  /** Text content */
  text: Scalars['String'];
  /** Header name */
  name?: Maybe<Scalars['String']>;
};

export type HeaderType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  text: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['DateTime'];
};

export type HeaderTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HeaderTypeEdge>>;
};

/** A Relay edge containing a `HeaderType` and its cursor. */
export type HeaderTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<HeaderType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Updates homepage collection of the shop. */
export type HomepageCollectionUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type HostingInput = {
  /** Hosted image on admin panel. */
  image?: Maybe<Scalars['Upload']>;
  /** Hosted file on admin panel. */
  file?: Maybe<Scalars['Upload']>;
  /** File name */
  name: Scalars['String'];
};

export type HostingNoAuthInput = {
  /** Hosted file on admin panel. */
  file?: Maybe<Scalars['Upload']>;
  /** File name */
  name: Scalars['String'];
};

export type HostingNoAuthType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  file: Maybe<Scalars['String']>;
  /** The URL of the file */
  fileUrl: Maybe<Scalars['String']>;
};

export type HostingOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort hosted files by the selected field. */
  field?: Maybe<HostingOrderField>;
};

export type HostingOrderField =
  | 'NAME';

export type HostingType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  created: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image: Maybe<Scalars['String']>;
  /** The URL of the image */
  imageUrl: Maybe<Scalars['String']>;
  /** The URL of the file */
  fileUrl: Maybe<Scalars['String']>;
};

export type HostingTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HostingTypeEdge>>;
};

/** A Relay edge containing a `HostingType` and its cursor. */
export type HostingTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<HostingType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Represents an image. */
export type Image = {
  /** The URL of the image. */
  url: Scalars['String'];
  /** Alt text for an image. */
  alt: Maybe<Scalars['String']>;
};

export type InfluencerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: InfluencerErrorCode;
};

/** An enumeration. */
export type InfluencerErrorCode =
  | 'INVALID'
  | 'REQUIRED'
  | 'NAME_REQUIRED';

/** Single Influencer Details. */
export type InfluencerInput = {
  /** Influencer Name */
  name: Scalars['String'];
  /** Influencer Phone No. */
  phone?: Maybe<Scalars['String']>;
  /** Influencer Email */
  email: Scalars['String'];
  /** Influencer related meta_data */
  metadata?: Maybe<Scalars['String']>;
};

export type InfluencerType = Node & {
  metadata: Maybe<Scalars['JSONString']>;
  privateMetadata: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  couponCode: Scalars['String'];
};

export type InfluencerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InfluencerTypeEdge>>;
};

/** A Relay edge containing a `InfluencerType` and its cursor. */
export type InfluencerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<InfluencerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: Maybe<Scalars['Int']>;
  /** Value less than or equal to. */
  lte?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export type IntervalSchedulePeriod =
  /** Days */
  | 'DAYS'
  /** Hours */
  | 'HOURS'
  /** Minutes */
  | 'MINUTES'
  /** Seconds */
  | 'SECONDS'
  /** Microseconds */
  | 'MICROSECONDS';

export type IntervalScheduleType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Number of interval periods to wait before running the task again */
  every: Scalars['Int'];
  /** The type of period between task runs (Example: days) */
  period: IntervalSchedulePeriod;
  /** Interval Schedule to run the task on.  Set only one schedule type, leave the others null. */
  periodictaskSet: PeriodicTaskTypeConnection;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};


export type IntervalScheduleTypePeriodictaskSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

/** Represents an Invoice. */
export type Invoice = ObjectWithMetadata & Job & Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** Job status. */
  status: JobStatusEnum;
  number: Maybe<Scalars['String']>;
  externalUrl: Maybe<Scalars['String']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
  /** URL to download an invoice. */
  url: Maybe<Scalars['String']>;
};

/** Creates a ready to send invoice. */
export type InvoiceCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String'];
  /** URL of an invoice to download. */
  url: Scalars['String'];
};

/** Deletes an invoice. */
export type InvoiceDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

export type InvoiceError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: InvoiceErrorCode;
};

/** An enumeration. */
export type InvoiceErrorCode =
  | 'REQUIRED'
  | 'NOT_READY'
  | 'URL_NOT_SET'
  | 'EMAIL_NOT_SET'
  | 'NUMBER_NOT_SET'
  | 'NOT_FOUND'
  | 'INVALID_STATUS';

/** Request an invoice for the order using plugin. */
export type InvoiceRequest = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order related to an invoice. */
  order: Maybe<Order>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/** Requests deletion of an invoice. */
export type InvoiceRequestDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/** Send an invoice by email. */
export type InvoiceSendEmail = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/** Updates an invoice. */
export type InvoiceUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  invoiceErrors: Array<InvoiceError>;
  invoice: Maybe<Invoice>;
};

/** Upload an invoice pdf. */
export type InvoiceUpload = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Public url of the uploaded file. */
  url: Maybe<Scalars['String']>;
};


export type Job = {
  /** Job status. */
  status: JobStatusEnum;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime'];
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime'];
  /** Job message. */
  message: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type JobStatusEnum =
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILED'
  | 'DELETED';

/** An enumeration. */
export type LanguageCodeEnum =
  | 'AR'
  | 'AZ'
  | 'BG'
  | 'BN'
  | 'CA'
  | 'CS'
  | 'DA'
  | 'DE'
  | 'EL'
  | 'EN'
  | 'ES'
  | 'ES_CO'
  | 'ET'
  | 'FA'
  | 'FI'
  | 'FR'
  | 'HI'
  | 'HU'
  | 'HY'
  | 'ID'
  | 'IS'
  | 'IT'
  | 'JA'
  | 'KA'
  | 'KM'
  | 'KO'
  | 'LT'
  | 'MN'
  | 'MY'
  | 'NB'
  | 'NL'
  | 'PL'
  | 'PT'
  | 'PT_BR'
  | 'RO'
  | 'RU'
  | 'SK'
  | 'SL'
  | 'SQ'
  | 'SR'
  | 'SV'
  | 'SW'
  | 'TA'
  | 'TH'
  | 'TR'
  | 'UK'
  | 'VI'
  | 'ZH_HANS'
  | 'ZH_HANT';

export type LanguageDisplay = {
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String'];
};

/** The manifest definition. */
export type Manifest = {
  identifier: Scalars['String'];
  version: Scalars['String'];
  name: Scalars['String'];
  about: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<Permission>>>;
  appUrl: Maybe<Scalars['String']>;
  configurationUrl: Maybe<Scalars['String']>;
  tokenTargetUrl: Maybe<Scalars['String']>;
  dataPrivacy: Maybe<Scalars['String']>;
  dataPrivacyUrl: Maybe<Scalars['String']>;
  homepageUrl: Maybe<Scalars['String']>;
  supportUrl: Maybe<Scalars['String']>;
};

export type Margin = {
  start: Maybe<Scalars['Int']>;
  stop: Maybe<Scalars['Int']>;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  items: Maybe<Array<Maybe<MenuItem>>>;
};

/** Deletes menus. */
export type MenuBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
  /** The item at the end of the edge. */
  node: Menu;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new Menu. */
export type MenuCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu: Maybe<Menu>;
};

export type MenuCreateInput = {
  /** Name of the menu. */
  name: Scalars['String'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: Maybe<Scalars['String']>;
  /** List of menu items. */
  items?: Maybe<Array<Maybe<MenuItemInput>>>;
};

/** Deletes a menu. */
export type MenuDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu: Maybe<Menu>;
};

export type MenuError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: MenuErrorCode;
};

/** An enumeration. */
export type MenuErrorCode =
  | 'CANNOT_ASSIGN_NODE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'INVALID_MENU_ITEM'
  | 'NO_MENU_ITEM_PROVIDED'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'TOO_MANY_MENU_ITEMS'
  | 'UNIQUE';

export type MenuFilterInput = {
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: Maybe<Scalars['String']>;
  /** Slug of the menu. */
  slug?: Maybe<Scalars['String']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  menu: MenuV2;
  parent: Maybe<MenuItemV2>;
  category: Maybe<Category>;
  collection: Maybe<Collection>;
  page: Maybe<Page>;
  level: Scalars['Int'];
  children: Maybe<Array<Maybe<MenuItem>>>;
  /** URL to the menu item. */
  url: Maybe<Scalars['String']>;
  /** Returns translated menu item fields for the given language code. */
  translation: Maybe<MenuItemTranslation>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes menu items. */
export type MenuItemBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuItemCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
  /** The item at the end of the edge. */
  node: MenuItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new menu item. */
export type MenuItemCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  /** Name of the menu item. */
  name: Scalars['String'];
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: Maybe<Scalars['ID']>;
};

/** Deletes a menu item. */
export type MenuItemDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

export type MenuItemFilterInput = {
  search?: Maybe<Scalars['String']>;
  menuSlug?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MenuItemImageMobileType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  menu: MenuItemV2;
  image: Scalars['String'];
  imageMobile: Scalars['String'];
  ppoi: Scalars['String'];
  /** The URL of the image. */
  url: Scalars['String'];
};


export type MenuItemImageMobileTypeUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MenuItemImageType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  menu: MenuItemV2;
  image: Scalars['String'];
  imageMobile: Scalars['String'];
  ppoi: Scalars['String'];
  /** The URL of the image. */
  url: Scalars['String'];
};


export type MenuItemImageTypeUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MenuItemInput = {
  /** Name of the menu item. */
  name?: Maybe<Scalars['String']>;
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>;
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>;
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>;
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>;
};

/** Moves items of menus. */
export type MenuItemMove = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Assigned menu to move within. */
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID'];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: Maybe<Scalars['ID']>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

/** Moves items of menus. */
export type MenuItemMoveV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Assigned menu to move within. */
  menu: Maybe<MenuV2>;
  menuErrors: Array<MenuError>;
};

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated menu item fields for the given language code. */
  translation: Maybe<MenuItemTranslation>;
  /** Represents a single item of the related menu. Can store categories, collection or pages. */
  menuItem: Maybe<MenuItem>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Menu Item. */
export type MenuItemTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  menuItem: Maybe<MenuItem>;
};

export type MenuItemTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

/** Updates a menu item. */
export type MenuItemUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemV2 = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  menu: MenuV2;
  parent: Maybe<MenuItemV2>;
  category: Maybe<Category>;
  collection: Maybe<Collection>;
  page: Maybe<Page>;
  level: Scalars['Int'];
  children: Maybe<Array<Maybe<MenuItemV2>>>;
  /** URL to the menu item. */
  url: Maybe<Scalars['String']>;
  /** Returns translated menu item fields for the given language code. */
  translation: Maybe<MenuItemTranslation>;
  image: Maybe<Image>;
  imageMobile: Maybe<Image>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemV2TranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemV2ImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemV2ImageMobileArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type MenuItemV2CountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuItemV2CountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuItemV2CountableEdge = {
  /** The item at the end of the edge. */
  node: MenuItemV2;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MenuItemsSortField =
  /** Sort menu items by name. */
  | 'NAME';

export type MenuSortField =
  /** Sort menus by name. */
  | 'NAME'
  /** Sort menus by items count. */
  | 'ITEMS_COUNT';

export type MenuSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
};

/** Updates a menu. */
export type MenuUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menu: Maybe<Menu>;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuV2 = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  items: Maybe<Array<Maybe<MenuItemV2>>>;
};

export type MenuV2CountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<MenuV2CountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuV2CountableEdge = {
  /** The item at the end of the edge. */
  node: MenuV2;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MetaClientStore = {
  /** Metadata client's name. */
  name: Scalars['String'];
  /** Metadata stored for a client. */
  metadata: Array<Maybe<MetaItem>>;
};

export type MetaInput = {
  /** Name of metadata client group. */
  namespace: Scalars['String'];
  /** Metadata client's name. */
  clientName: Scalars['String'];
  /** Key for stored data. */
  key: Scalars['String'];
  /** Stored metadata value. */
  value: Scalars['String'];
};

export type MetaItem = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetaPath = {
  /** Name of metadata client group. */
  namespace: Scalars['String'];
  /** Metadata client's name. */
  clientName: Scalars['String'];
  /** Key for stored data. */
  key: Scalars['String'];
};

export type MetaStore = {
  /** Name of metadata client group. */
  namespace: Scalars['String'];
  /** List of clients that stored metadata in a group. */
  clients: Array<Maybe<MetaClientStore>>;
};

export type MetadataError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: MetadataErrorCode;
};

/** An enumeration. */
export type MetadataErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetadataInputV2 = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetadataItem = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

export type MetadataItemV2 = {
  /** Key of a metadata item. */
  key: Scalars['String'];
  /** Value of a metadata item. */
  value: Scalars['String'];
};

/** Represents amount of money in specific currency. */
export type Money = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money. */
  amount: Scalars['Float'];
  /**
   * Money formatted according to the current locale.
   * @deprecated Price formatting according to the current locale should be handled by the frontend client. This field will be removed after 2020-07-31.
   */
  localized: Scalars['String'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
  /** Lower bound of a price range. */
  start: Maybe<Money>;
  /** Upper bound of a price range. */
  stop: Maybe<Money>;
};

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  /** Add product to the current user's wishlist. */
  wishlistAddProduct: Maybe<WishlistAddProductMutation>;
  /** Remove product from the current user's wishlist. */
  wishlistRemoveProduct: Maybe<WishlistRemoveProductMutation>;
  /** Add product variant to the current user's wishlist. */
  wishlistAddVariant: Maybe<WishlistAddProductVariantMutation>;
  /** Remove product variant from the current user's wishlist. */
  wishlistRemoveVariant: Maybe<WishlistRemoveProductVariantMutation>;
  /** Updates tags of the object. */
  addTags: Maybe<AddTags>;
  /** Updates tags of the object. */
  removeTags: Maybe<RemoveTags>;
  /** Updates tags of the object. */
  addTagsCsv: Maybe<AddTagsCsv>;
  /** Creates a new webhook subscription. */
  webhookCreate: Maybe<WebhookCreate>;
  /** Deletes a webhook subscription. */
  webhookDelete: Maybe<WebhookDelete>;
  /** Updates a webhook subscription. */
  webhookUpdate: Maybe<WebhookUpdate>;
  /** Creates new warehouse. */
  createWarehouse: Maybe<WarehouseCreate>;
  /** Updates given warehouse. */
  updateWarehouse: Maybe<WarehouseUpdate>;
  /** Deletes selected warehouse. */
  deleteWarehouse: Maybe<WarehouseDelete>;
  /** Add shipping zone to given warehouse. */
  assignWarehouseShippingZone: Maybe<WarehouseShippingZoneAssign>;
  /** Remove shipping zone from given warehouse. */
  unassignWarehouseShippingZone: Maybe<WarehouseShippingZoneUnassign>;
  /** Adds an authorization key. */
  authorizationKeyAdd: Maybe<AuthorizationKeyAdd>;
  /** Deletes an authorization key. */
  authorizationKeyDelete: Maybe<AuthorizationKeyDelete>;
  /** Creates a new staff notification recipient. */
  staffNotificationRecipientCreate: Maybe<StaffNotificationRecipientCreate>;
  /** Updates a staff notification recipient. */
  staffNotificationRecipientUpdate: Maybe<StaffNotificationRecipientUpdate>;
  /** Delete staff notification recipient. */
  staffNotificationRecipientDelete: Maybe<StaffNotificationRecipientDelete>;
  /** Updates homepage collection of the shop. */
  homepageCollectionUpdate: Maybe<HomepageCollectionUpdate>;
  /** Updates site domain of the shop. */
  shopDomainUpdate: Maybe<ShopDomainUpdate>;
  /** Updates shop settings. */
  shopSettingsUpdate: Maybe<ShopSettingsUpdate>;
  /** Fetch tax rates. */
  shopFetchTaxRates: Maybe<ShopFetchTaxRates>;
  /** Creates/Updates translations for Shop Settings. */
  shopSettingsTranslate: Maybe<ShopSettingsTranslate>;
  /** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
  shopAddressUpdate: Maybe<ShopAddressUpdate>;
  /** Creates a new shipping price. */
  shippingPriceCreate: Maybe<ShippingPriceCreate>;
  /** Deletes a shipping price. */
  shippingPriceDelete: Maybe<ShippingPriceDelete>;
  /** Deletes shipping prices. */
  shippingPriceBulkDelete: Maybe<ShippingPriceBulkDelete>;
  /** Updates a new shipping price. */
  shippingPriceUpdate: Maybe<ShippingPriceUpdate>;
  /** Creates/Updates translations for shipping method. */
  shippingPriceTranslate: Maybe<ShippingPriceTranslate>;
  /** Creates a new shipping zone. */
  shippingZoneCreate: Maybe<ShippingZoneCreate>;
  /** Deletes a shipping zone. */
  shippingZoneDelete: Maybe<ShippingZoneDelete>;
  /** Deletes shipping zones. */
  shippingZoneBulkDelete: Maybe<ShippingZoneBulkDelete>;
  /** Updates a new shipping zone. */
  shippingZoneUpdate: Maybe<ShippingZoneUpdate>;
  /** Creates an attribute. */
  attributeCreate: Maybe<AttributeCreate>;
  /** Deletes an attribute. */
  attributeDelete: Maybe<AttributeDelete>;
  /** Deletes attributes. */
  attributeBulkDelete: Maybe<AttributeBulkDelete>;
  /** Assign attributes to a given product type. */
  attributeAssign: Maybe<AttributeAssign>;
  /** Un-assign attributes from a given product type. */
  attributeUnassign: Maybe<AttributeUnassign>;
  /** Updates attribute. */
  attributeUpdate: Maybe<AttributeUpdate>;
  /** Creates/Updates translations for attribute. */
  attributeTranslate: Maybe<AttributeTranslate>;
  /**
   * Update public metadata for attribute.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  attributeUpdateMetadata: Maybe<AttributeUpdateMeta>;
  /**
   * Clears public metadata item for attribute.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  attributeClearMetadata: Maybe<AttributeClearMeta>;
  /**
   * Update public metadata for attribute.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  attributeUpdatePrivateMetadata: Maybe<AttributeUpdatePrivateMeta>;
  /**
   * Clears public metadata item for attribute.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  attributeClearPrivateMetadata: Maybe<AttributeClearPrivateMeta>;
  /** Creates a value for an attribute. */
  attributeValueCreate: Maybe<AttributeValueCreate>;
  /** Deletes a value of an attribute. */
  attributeValueDelete: Maybe<AttributeValueDelete>;
  /** Deletes values of attributes. */
  attributeValueBulkDelete: Maybe<AttributeValueBulkDelete>;
  /** Updates value of an attribute. */
  attributeValueUpdate: Maybe<AttributeValueUpdate>;
  /** Creates/Updates translations for attribute value. */
  attributeValueTranslate: Maybe<AttributeValueTranslate>;
  /** Reorder the values of an attribute. */
  attributeReorderValues: Maybe<AttributeReorderValues>;
  /** Creates a new category. */
  categoryCreate: Maybe<CategoryCreate>;
  /** Deletes a category. */
  categoryDelete: Maybe<CategoryDelete>;
  /** Deletes categories. */
  categoryBulkDelete: Maybe<CategoryBulkDelete>;
  /** Updates a category. */
  categoryUpdate: Maybe<CategoryUpdate>;
  /** Creates/Updates translations for Category. */
  categoryTranslate: Maybe<CategoryTranslate>;
  /**
   * Update public metadata for category.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  categoryUpdateMetadata: Maybe<CategoryUpdateMeta>;
  /**
   * Clears public metadata for category.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  categoryClearMetadata: Maybe<CategoryClearMeta>;
  /**
   * Update private metadata for category.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  categoryUpdatePrivateMetadata: Maybe<CategoryUpdatePrivateMeta>;
  /**
   * Clears private metadata for category.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  categoryClearPrivateMetadata: Maybe<CategoryClearPrivateMeta>;
  /** Adds products to a collection. */
  collectionAddProducts: Maybe<CollectionAddProducts>;
  /** Creates a new collection. */
  collectionCreate: Maybe<CollectionCreate>;
  /** Duplicate a collection. */
  collectionDuplicate: Maybe<CollectionDuplicate>;
  /** Deletes a collection. */
  collectionDelete: Maybe<CollectionDelete>;
  /** Reorder the products of a collection. */
  collectionReorderProducts: Maybe<CollectionReorderProducts>;
  /** Deletes collections. */
  collectionBulkDelete: Maybe<CollectionBulkDelete>;
  /** Publish collections. */
  collectionBulkPublish: Maybe<CollectionBulkPublish>;
  /** Remove products from a collection. */
  collectionRemoveProducts: Maybe<CollectionRemoveProducts>;
  /** Updates a collection. */
  collectionUpdate: Maybe<CollectionUpdate>;
  /** Creates/Updates translations for collection. */
  collectionTranslate: Maybe<CollectionTranslate>;
  /**
   * Update public metadata for collection.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  collectionUpdateMetadata: Maybe<CollectionUpdateMeta>;
  /**
   * Clears public metadata for collection.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  collectionClearMetadata: Maybe<CollectionClearMeta>;
  /**
   * Update private metadata for collection.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  collectionUpdatePrivateMetadata: Maybe<CollectionUpdatePrivateMeta>;
  /**
   * Clears private metadata item for collection.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  collectionClearPrivateMetadata: Maybe<CollectionClearPrivateMeta>;
  /** Creates a new product. */
  productCreate: Maybe<ProductCreate>;
  /** Deletes a product. */
  productDelete: Maybe<ProductDelete>;
  /** Deletes products. */
  productBulkDelete: Maybe<ProductBulkDelete>;
  /** Publish products. */
  productBulkPublish: Maybe<ProductBulkPublish>;
  /** Updates an existing product. */
  productUpdate: Maybe<ProductUpdate>;
  /** Creates/Updates translations for Product. */
  productTranslate: Maybe<ProductTranslate>;
  /**
   * Update public metadata for product.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productUpdateMetadata: Maybe<ProductUpdateMeta>;
  /**
   * Clears public metadata item for product.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productClearMetadata: Maybe<ProductClearMeta>;
  /**
   * Update private metadata for product.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productUpdatePrivateMetadata: Maybe<ProductUpdatePrivateMeta>;
  /**
   * Clears private metadata item for product.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productClearPrivateMetadata: Maybe<ProductClearPrivateMeta>;
  /** Set product availability for purchase date. */
  productSetAvailabilityForPurchase: Maybe<ProductSetAvailabilityForPurchase>;
  /** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productImageCreate: Maybe<ProductImageCreate>;
  /** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
  productVariantReorder: Maybe<ProductVariantReorder>;
  /** Deletes a product image. */
  productImageDelete: Maybe<ProductImageDelete>;
  /** Deletes product images. */
  productImageBulkDelete: Maybe<ProductImageBulkDelete>;
  /** Changes ordering of the product image. */
  productImageReorder: Maybe<ProductImageReorder>;
  /** Updates a product image. */
  productImageUpdate: Maybe<ProductImageUpdate>;
  /** Creates a new product type. */
  productTypeCreate: Maybe<ProductTypeCreate>;
  /** Deletes a product type. */
  productTypeDelete: Maybe<ProductTypeDelete>;
  /** Deletes product types. */
  productTypeBulkDelete: Maybe<ProductTypeBulkDelete>;
  /** Updates an existing product type. */
  productTypeUpdate: Maybe<ProductTypeUpdate>;
  /** Reorder the attributes of a product type. */
  productTypeReorderAttributes: Maybe<ProductTypeReorderAttributes>;
  /**
   * Update public metadata for product type.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productTypeUpdateMetadata: Maybe<ProductTypeUpdateMeta>;
  /**
   * Clears public metadata for product type.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productTypeClearMetadata: Maybe<ProductTypeClearMeta>;
  /**
   * Update private metadata for product type.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productTypeUpdatePrivateMetadata: Maybe<ProductTypeUpdatePrivateMeta>;
  /**
   * Clears private metadata for product type.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productTypeClearPrivateMetadata: Maybe<ProductTypeClearPrivateMeta>;
  /** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  digitalContentCreate: Maybe<DigitalContentCreate>;
  /** Remove digital content assigned to given variant. */
  digitalContentDelete: Maybe<DigitalContentDelete>;
  /** Update digital content. */
  digitalContentUpdate: Maybe<DigitalContentUpdate>;
  /** Generate new URL to digital content. */
  digitalContentUrlCreate: Maybe<DigitalContentUrlCreate>;
  /** Creates a new variant for a product. */
  productVariantCreate: Maybe<ProductVariantCreate>;
  /** Deletes a product variant. */
  productVariantDelete: Maybe<ProductVariantDelete>;
  /** Creates product variants for a given product. */
  productVariantBulkCreate: Maybe<ProductVariantBulkCreate>;
  /** Deletes product variants. */
  productVariantBulkDelete: Maybe<ProductVariantBulkDelete>;
  /** Creates stocks for product variant. */
  productVariantStocksCreate: Maybe<ProductVariantStocksCreate>;
  /** Delete stocks from product variant. */
  productVariantStocksDelete: Maybe<ProductVariantStocksDelete>;
  /** Update stocks for product variant. */
  productVariantStocksUpdate: Maybe<ProductVariantStocksUpdate>;
  /** Updates an existing variant for product. */
  productVariantUpdate: Maybe<ProductVariantUpdate>;
  /** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
  productVariantSetDefault: Maybe<ProductVariantSetDefault>;
  /** Creates/Updates translations for Product Variant. */
  productVariantTranslate: Maybe<ProductVariantTranslate>;
  /**
   * Update public metadata for product variant.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productVariantUpdateMetadata: Maybe<ProductVariantUpdateMeta>;
  /**
   * Clears public metadata for product variant.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productVariantClearMetadata: Maybe<ProductVariantClearMeta>;
  /**
   * Update private metadata for product variant.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productVariantUpdatePrivateMetadata: Maybe<ProductVariantUpdatePrivateMeta>;
  /**
   * Clears private metadata for product variant.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  productVariantClearPrivateMetadata: Maybe<ProductVariantClearPrivateMeta>;
  /** Assign an image to a product variant. */
  variantImageAssign: Maybe<VariantImageAssign>;
  /** Unassign an image from a product variant. */
  variantImageUnassign: Maybe<VariantImageUnassign>;
  /** Captures the authorized payment amount. */
  paymentCapture: Maybe<PaymentCapture>;
  /** Refunds the captured payment amount. */
  paymentRefund: Maybe<PaymentRefund>;
  /** Voids the authorized payment. */
  paymentVoid: Maybe<PaymentVoid>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize: Maybe<PaymentInitialize>;
  /** creates intent for payment. */
  stripePaymentIntentCreate: Maybe<StripePaymentIntentCreate>;
  /** Creates a new page. */
  pageCreate: Maybe<PageCreate>;
  /** Deletes a page. */
  pageDelete: Maybe<PageDelete>;
  /** Deletes pages. */
  pageBulkDelete: Maybe<PageBulkDelete>;
  /** Publish pages. */
  pageBulkPublish: Maybe<PageBulkPublish>;
  /** Updates an existing page. */
  pageUpdate: Maybe<PageUpdate>;
  /** Creates/Updates translations for Page. */
  pageTranslate: Maybe<PageTranslate>;
  /** Completes creating an order. */
  draftOrderComplete: Maybe<DraftOrderComplete>;
  /** Creates a new draft order. */
  draftOrderCreate: Maybe<DraftOrderCreate>;
  /** Deletes a draft order. */
  draftOrderDelete: Maybe<DraftOrderDelete>;
  /** Deletes draft orders. */
  draftOrderBulkDelete: Maybe<DraftOrderBulkDelete>;
  /** Deletes order lines. */
  draftOrderLinesBulkDelete: Maybe<DraftOrderLinesBulkDelete>;
  /** Create order lines for a draft order. */
  draftOrderLinesCreate: Maybe<DraftOrderLinesCreate>;
  /** Deletes an order line from a draft order. */
  draftOrderLineDelete: Maybe<DraftOrderLineDelete>;
  /** Updates an order line of a draft order. */
  draftOrderLineUpdate: Maybe<DraftOrderLineUpdate>;
  /** Updates a draft order. */
  draftOrderUpdate: Maybe<DraftOrderUpdate>;
  /** Adds note to the order. */
  orderAddNote: Maybe<OrderAddNote>;
  /** Cancel an order. */
  orderCancel: Maybe<OrderCancel>;
  /** Capture an order. */
  orderCapture: Maybe<OrderCapture>;
  /**
   * Clears stored private metadata value.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderClearPrivateMeta: Maybe<OrderClearPrivateMeta>;
  /**
   * Clears stored metadata value.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderClearMeta: Maybe<OrderClearMeta>;
  /** Creates new fulfillments for an order. */
  orderFulfill: Maybe<OrderFulfill>;
  /** Cancels existing fulfillment and optionally restocks items. */
  orderFulfillmentCancel: Maybe<FulfillmentCancel>;
  /** Updates a fulfillment for an order. */
  orderFulfillmentUpdateTracking: Maybe<FulfillmentUpdateTracking>;
  /**
   * Clears metadata for fulfillment.
   * @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderFulfillmentClearMeta: Maybe<FulfillmentClearMeta>;
  /**
   * Clears private metadata for fulfillment.
   * @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderFulfillmentClearPrivateMeta: Maybe<FulfillmentClearPrivateMeta>;
  /**
   * Updates metadata for fulfillment.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderFulfillmentUpdateMeta: Maybe<FulfillmentUpdateMeta>;
  /**
   * Updates metadata for fulfillment.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderFulfillmentUpdatePrivateMeta: Maybe<FulfillmentUpdatePrivateMeta>;
  /** Mark order as manually paid. */
  orderMarkAsPaid: Maybe<OrderMarkAsPaid>;
  /** Refund an order. */
  orderRefund: Maybe<OrderRefund>;
  /** Updates an order. */
  orderUpdate: Maybe<OrderUpdate>;
  /**
   * Updates meta for order.
   * @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderUpdateMeta: Maybe<OrderUpdateMeta>;
  /**
   * Updates private meta for order.
   * @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31.
   */
  orderUpdatePrivateMeta: Maybe<OrderUpdatePrivateMeta>;
  /** Updates a shipping method of the order. */
  orderUpdateShipping: Maybe<OrderUpdateShipping>;
  /** Void an order. */
  orderVoid: Maybe<OrderVoid>;
  /** Cancels orders. */
  orderBulkCancel: Maybe<OrderBulkCancel>;
  /** Capture list of order's. */
  orderBulkCapture: Maybe<OrderBulkCapture>;
  /** Delete metadata of an object. */
  deleteMetadata: Maybe<DeleteMetadata>;
  /** Delete object's private metadata. */
  deletePrivateMetadata: Maybe<DeletePrivateMetadata>;
  /** Updates metadata of an object. */
  updateMetadata: Maybe<UpdateMetadata>;
  /** Updates private metadata of an object. */
  updatePrivateMetadata: Maybe<UpdatePrivateMetadata>;
  /** Assigns storefront's navigation menus. */
  assignNavigation: Maybe<AssignNavigation>;
  /** Creates a new Menu. */
  menuCreate: Maybe<MenuCreate>;
  /** Deletes a menu. */
  menuDelete: Maybe<MenuDelete>;
  /** Deletes menus. */
  menuBulkDelete: Maybe<MenuBulkDelete>;
  /** Updates a menu. */
  menuUpdate: Maybe<MenuUpdate>;
  /** Creates a new menu item. */
  menuItemCreate: Maybe<MenuItemCreate>;
  /** Deletes a menu item. */
  menuItemDelete: Maybe<MenuItemDelete>;
  /** Deletes menu items. */
  menuItemBulkDelete: Maybe<MenuItemBulkDelete>;
  /** Updates a menu item. */
  menuItemUpdate: Maybe<MenuItemUpdate>;
  /** Creates/Updates translations for Menu Item. */
  menuItemTranslate: Maybe<MenuItemTranslate>;
  /** Moves items of menus. */
  menuItemMove: Maybe<MenuItemMove>;
  /** Request an invoice for the order using plugin. */
  invoiceRequest: Maybe<InvoiceRequest>;
  /** Requests deletion of an invoice. */
  invoiceRequestDelete: Maybe<InvoiceRequestDelete>;
  /** Creates a ready to send invoice. */
  invoiceCreate: Maybe<InvoiceCreate>;
  /** Deletes an invoice. */
  invoiceDelete: Maybe<InvoiceDelete>;
  /** Updates an invoice. */
  invoiceUpdate: Maybe<InvoiceUpdate>;
  /** Send an invoice by email. */
  invoiceSendEmail: Maybe<InvoiceSendEmail>;
  /** Activate a gift card. */
  giftCardActivate: Maybe<GiftCardActivate>;
  /** Creates a new gift card. */
  giftCardCreate: Maybe<GiftCardCreate>;
  /** Deactivate a gift card. */
  giftCardDeactivate: Maybe<GiftCardDeactivate>;
  /** Update a gift card. */
  giftCardUpdate: Maybe<GiftCardUpdate>;
  /** Update plugin configuration. */
  pluginUpdate: Maybe<PluginUpdate>;
  /** Creates a new sale. */
  saleCreate: Maybe<SaleCreate>;
  /** Deletes a sale. */
  saleDelete: Maybe<SaleDelete>;
  /** Deletes sales. */
  saleBulkDelete: Maybe<SaleBulkDelete>;
  /** Updates a sale. */
  saleUpdate: Maybe<SaleUpdate>;
  /** Adds products, categories, collections to a voucher. */
  saleCataloguesAdd: Maybe<SaleAddCatalogues>;
  /** Removes products, categories, collections from a sale. */
  saleCataloguesRemove: Maybe<SaleRemoveCatalogues>;
  /** Creates/updates translations for a sale. */
  saleTranslate: Maybe<SaleTranslate>;
  /** Creates a new voucher. */
  voucherCreate: Maybe<VoucherCreate>;
  /** Deletes a voucher. */
  voucherDelete: Maybe<VoucherDelete>;
  /** Deletes vouchers. */
  voucherBulkDelete: Maybe<VoucherBulkDelete>;
  /** Updates a voucher. */
  voucherUpdate: Maybe<VoucherUpdate>;
  /** Adds products, categories, collections to a voucher. */
  voucherCataloguesAdd: Maybe<VoucherAddCatalogues>;
  /** Removes products, categories, collections from a voucher. */
  voucherCataloguesRemove: Maybe<VoucherRemoveCatalogues>;
  /** Creates/Updates translations for Voucher. */
  voucherTranslate: Maybe<VoucherTranslate>;
  /** Export products to csv file. */
  exportProducts: Maybe<ExportProducts>;
  /** (Custom Implementation) Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate: Maybe<CheckoutBillingAddressUpdate>;
  /** (Custom implementation) Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete: Maybe<CheckoutComplete>;
  /** Create a new checkout. */
  checkoutCreate: Maybe<CheckoutCreate>;
  /** Sets the customer as the owner of the checkout. */
  checkoutCustomerAttach: Maybe<CheckoutCustomerAttach>;
  /** Removes the user assigned as the owner of the checkout. */
  checkoutCustomerDetach: Maybe<CheckoutCustomerDetach>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate: Maybe<CheckoutEmailUpdate>;
  /** (Custom implementation) Deletes a CheckoutLine. */
  checkoutLineDelete: Maybe<CheckoutLineDelete>;
  /** (Custom implementation) Adds a checkout line to the existing checkout. */
  checkoutLinesAdd: Maybe<CheckoutLinesAdd>;
  /** (Custom implementation) Updates checkout line in the existing checkout. */
  checkoutLinesUpdate: Maybe<CheckoutLinesUpdate>;
  /** (Custom Implementation) Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode: Maybe<CheckoutRemovePromoCode>;
  /** (Custom Implementation) Create a new payment via selected gateway for given checkout. */
  checkoutPaymentCreate: Maybe<CheckoutPaymentCreate>;
  /** (Custom implementation) Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate: Maybe<CheckoutShippingAddressUpdate>;
  /** Updates the shipping address of the checkout. */
  checkoutShippingMethodUpdate: Maybe<CheckoutShippingMethodUpdate>;
  /**
   * Updates metadata for checkout.
   * @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  checkoutUpdateMetadata: Maybe<CheckoutUpdateMeta>;
  /**
   * Clear metadata for checkout.
   * @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31.
   */
  checkoutClearMetadata: Maybe<CheckoutClearMeta>;
  /**
   * Updates private metadata for checkout.
   * @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  checkoutUpdatePrivateMetadata: Maybe<CheckoutUpdatePrivateMeta>;
  /**
   * Clear private metadata for checkout.
   * @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  checkoutClearPrivateMetadata: Maybe<CheckoutClearPrivateMeta>;
  /** Creates a new app. */
  appCreate: Maybe<AppCreate>;
  /** Updates an existing app. */
  appUpdate: Maybe<AppUpdate>;
  /** Deletes an app. */
  appDelete: Maybe<AppDelete>;
  /** Creates a new token. */
  appTokenCreate: Maybe<AppTokenCreate>;
  /** Deletes an authentication token assigned to app. */
  appTokenDelete: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify: Maybe<AppTokenVerify>;
  /** Install new app by using app manifest. */
  appInstall: Maybe<AppInstall>;
  /** Retry failed installation of new app. */
  appRetryInstall: Maybe<AppRetryInstall>;
  /** Delete failed installation. */
  appDeleteFailedInstallation: Maybe<AppDeleteFailedInstallation>;
  /** Fetch and validate manifest. */
  appFetchManifest: Maybe<AppFetchManifest>;
  /** Activate the app. */
  appActivate: Maybe<AppActivate>;
  /** Deactivate the app. */
  appDeactivate: Maybe<AppDeactivate>;
  /** Create JWT token. */
  tokenCreate: Maybe<CreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify: Maybe<VerifyToken>;
  /** Deactivate all JWT tokens of the currently authenticated user. */
  tokensDeactivateAll: Maybe<DeactivateAllUserTokens>;
  /** Sends an email with the account password modification link. */
  requestPasswordReset: Maybe<RequestPasswordReset>;
  /** Confirm user account with token sent by email during registration. */
  confirmAccount: Maybe<ConfirmAccount>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword: Maybe<SetPassword>;
  /** Change the password of the logged in user. */
  passwordChange: Maybe<PasswordChange>;
  /** Request email change of the logged in user. */
  requestEmailChange: Maybe<RequestEmailChange>;
  /** Confirm the email change of the logged-in user. */
  confirmEmailChange: Maybe<ConfirmEmailChange>;
  /** Requests for OTP for registered user. */
  phoneChange: Maybe<PhoneChange>;
  /** Create a new address for the customer. */
  accountAddressCreate: Maybe<AccountAddressCreate>;
  /** Updates an address of the logged-in user. */
  accountAddressUpdate: Maybe<AccountAddressUpdate>;
  /** Delete an address of the logged-in user. */
  accountAddressDelete: Maybe<AccountAddressDelete>;
  /** Sets a default address for the authenticated user. */
  accountSetDefaultAddress: Maybe<AccountSetDefaultAddress>;
  /** Register a new user. */
  accountRegister: Maybe<AccountRegister>;
  /** Updates the account of the logged-in user. */
  accountUpdate: Maybe<AccountUpdate>;
  /** Sends an email with the account removal link for the logged-in user. */
  accountRequestDeletion: Maybe<AccountRequestDeletion>;
  /** Remove user account. */
  accountDelete: Maybe<AccountDelete>;
  /**
   * Updates metadata of the logged-in user.
   * @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  accountUpdateMeta: Maybe<AccountUpdateMeta>;
  /** Creates user address. */
  addressCreate: Maybe<AddressCreate>;
  /** Updates an address. */
  addressUpdate: Maybe<AddressUpdate>;
  /** Deletes an address. */
  addressDelete: Maybe<AddressDelete>;
  /** Sets a default address for the given user. */
  addressSetDefault: Maybe<AddressSetDefault>;
  /** Creates a new customer. */
  customerCreate: Maybe<CustomerCreate>;
  /** Updates an existing customer. */
  customerUpdate: Maybe<CustomerUpdate>;
  /** Deletes a customer. */
  customerDelete: Maybe<CustomerDelete>;
  /** Deletes customers. */
  customerBulkDelete: Maybe<CustomerBulkDelete>;
  /** Creates a new staff user. */
  staffCreate: Maybe<StaffCreate>;
  /** Updates an existing staff user. */
  staffUpdate: Maybe<StaffUpdate>;
  /** Deletes a staff user. */
  staffDelete: Maybe<StaffDelete>;
  /** Deletes staff users. */
  staffBulkDelete: Maybe<StaffBulkDelete>;
  /** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  userAvatarUpdate: Maybe<UserAvatarUpdate>;
  /** Deletes a user avatar. Only for staff members. */
  userAvatarDelete: Maybe<UserAvatarDelete>;
  /** Activate or deactivate users. */
  userBulkSetActive: Maybe<UserBulkSetActive>;
  /**
   * Updates metadata for user.
   * @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  userUpdateMetadata: Maybe<UserUpdateMeta>;
  /**
   * Clear metadata for user.
   * @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31.
   */
  userClearMetadata: Maybe<UserClearMeta>;
  /**
   * Updates private metadata for user.
   * @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  userUpdatePrivateMetadata: Maybe<UserUpdatePrivateMeta>;
  /**
   * Clear private metadata for user.
   * @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31.
   */
  userClearPrivateMetadata: Maybe<UserClearPrivateMeta>;
  /**
   * Creates a new service account.
   * @deprecated Use the `appCreate` mutation instead. This field will be removed after 2020-07-31.
   */
  serviceAccountCreate: Maybe<ServiceAccountCreate>;
  /**
   * Updates an existing service account.
   * @deprecated Use the `appUpdate` mutation instead. This field will be removed after 2020-07-31.
   */
  serviceAccountUpdate: Maybe<ServiceAccountUpdate>;
  /**
   * Deletes a service account.
   * @deprecated Use the `appDelete` mutation instead. This field will be removed after 2020-07-31.
   */
  serviceAccountDelete: Maybe<ServiceAccountDelete>;
  /**
   * Updates private metadata for a service account.
   * @deprecated Use the `updatePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31.
   */
  serviceAccountUpdatePrivateMetadata: Maybe<ServiceAccountUpdatePrivateMeta>;
  /**
   * Clear private metadata for a service account.
   * @deprecated Use the `deletePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31.
   */
  serviceAccountClearPrivateMetadata: Maybe<ServiceAccountClearPrivateMeta>;
  /**
   * Creates a new token.
   * @deprecated Use the `appTokenCreate` mutation instead. This field will be removed after 2020-07-31.
   */
  serviceAccountTokenCreate: Maybe<ServiceAccountTokenCreate>;
  /**
   * Deletes an authentication token assigned to service account.
   * @deprecated Use the `appTokenDelete` mutation instead. This field will be removed after 2020-07-31.
   */
  serviceAccountTokenDelete: Maybe<ServiceAccountTokenDelete>;
  /** Create new permission group. */
  permissionGroupCreate: Maybe<PermissionGroupCreate>;
  /** Update permission group. */
  permissionGroupUpdate: Maybe<PermissionGroupUpdate>;
  /** Delete permission group. */
  permissionGroupDelete: Maybe<PermissionGroupDelete>;
  /** Export products to csv file. */
  exportProductsV2: Maybe<ExportProductsV2>;
  /** Create a new File that is going to be hosted. */
  createHostingFile: Maybe<CreateHostingFile>;
  /** Create a new File that is going to be hosted. */
  createHostingFileNoAuth: Maybe<CreateHostingFileNoAuth>;
  /** Delete a file that is hosted. */
  deleteHostingFile: Maybe<DeleteHostingFile>;
  /** Create Notification. */
  createNotification: Maybe<CreateNotification>;
  /** Requests for OTP for registered user. */
  requestOtp: Maybe<RequestOtp>;
  /** Create JWT token via OTP. */
  otpTokenCreate: Maybe<CreateTokenOtp>;
  /** Requests for OTP for registered user. */
  verifyCheckoutOtp: Maybe<VerifyCheckoutOtp>;
  /** Requests for Token for registered user. */
  tokenCreateWithAdmin: Maybe<TokenCreateWithAdmin>;
  /** Register a new user. */
  accountCreate: Maybe<AccountCreate>;
  /** Register a new user with phone and email. */
  accountRegisterV2: Maybe<AccountRegisterV2>;
  /** Confirm user account with otp sent by sms during registration. */
  confirmAccountV2: Maybe<ConfirmAccountV2>;
  /** Create a new product review. */
  productReviewCreate: Maybe<CreateProductReview>;
  /** Rate existing product review as helpul or unhelpful */
  productReviewRate: Maybe<RateProductReview>;
  /** Create or update reply on Product Review */
  productReviewUpdateReply: Maybe<UpdateReplyOnProductReview>;
  /** Edit existing product review. */
  productReviewEdit: Maybe<EditProductReview>;
  /** Edit existing product review. */
  productReviewDelete: Maybe<DeleteProductReview>;
  /** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productImageCreateV2: Maybe<ProductImageCreateV2>;
  /** Create a product_review image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productReviewImageCreate: Maybe<ProductReviewImageCreate>;
  /** Update a product_review image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productReviewImageUpdate: Maybe<ProductReviewImageUpdate>;
  /** Deletes a product_review image. */
  productReviewImageDelete: Maybe<ProductReviewImageDelete>;
  /** Create a product_review video. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productReviewVideoCreate: Maybe<ProductReviewVideoCreate>;
  /** Deletes a product_review video. */
  productReviewVideoDelete: Maybe<ProductReviewVideoDelete>;
  /** Duplicates a product. */
  productDuplicate: Maybe<ProductDuplicate>;
  /** Creates an order on Razorpay. */
  razorpayOrderCreate: Maybe<CreateRazorpayOrder>;
  /** Creates an order on Paytm. */
  paytmOrderCreate: Maybe<PaytmOrderCreate>;
  /** Creates an order on Cashfree. */
  cashfreeOrderCreate: Maybe<CreateCashfreeOrder>;
  /** Creates an order on Cashfree. */
  cashfreeOrderCreateSdk: Maybe<CreateCashfreeOrderSdk>;
  /** Creates an order on Payu. */
  payuOrderCreate: Maybe<CreatePayuOrder>;
  /** Creates an order on Sezzle. */
  sezzleOrderCreate: Maybe<CreateSezzleOrder>;
  /** Create a new banner */
  bannerCreate: Maybe<CreateBanner>;
  /** Update a banner */
  bannerUpdate: Maybe<UpdateBanner>;
  /** Delete a banner */
  bannerDelete: Maybe<DeleteBanner>;
  /** Create a new header */
  headerCreate: Maybe<CreateHeader>;
  /** Create a new voucher rule. */
  voucherRuleCreate: Maybe<CreateVoucherRule>;
  /** Update a voucher rule. */
  voucherRuleUpdate: Maybe<UpdateVoucherRule>;
  /** Delete a voucher rule. */
  voucherRuleDelete: Maybe<DeleteVoucherRule>;
  /** Delete bulk voucher rules. */
  voucherRuleBulkDelete: Maybe<DeleteBulkVoucherRule>;
  /** Create a new voucher rule link to add promo code. */
  voucherRuleLinkCreate: Maybe<CreateVoucherRuleLink>;
  /** Update a voucher rule link. */
  voucherRuleLinkUpdate: Maybe<UpdateVoucherRuleLink>;
  /** Set the payment method of checkout */
  checkoutPaymentMethodUpdate: Maybe<UpdatePaymentMethod>;
  /** Upload an invoice pdf. */
  invoiceUpload: Maybe<InvoiceUpload>;
  /** BulkInvoice Export invoice pdf. */
  bulkInvoiceExport: Maybe<BulkInvoiceExport>;
  /** Update an address type */
  addressTypeUpdate: Maybe<UpdateAddressType>;
  /** Adds note to the checkout. */
  checkoutAddNote: Maybe<CheckoutAddNote>;
  /** Adds a checkout line to the existing checkout. */
  checkoutRefresh: Maybe<CheckoutRefresh>;
  /** Push or sync an order to wareiq */
  pushToWareiq: Maybe<PushToWareIq>;
  /** Create a Partner. */
  partnerCreate: Maybe<PartnerCreate>;
  /** Update a Partner. */
  partnerUpdate: Maybe<PartnerUpdate>;
  /** Delete Partner. */
  partnerDelete: Maybe<PartnerDelete>;
  /** Create Partner Coupons from CSV File */
  partnerCouponCsvCreate: Maybe<PartnerCouponCsvCreate>;
  /** Update Partner Coupon. */
  partnerCouponUpdate: Maybe<PartnerCouponUpdate>;
  /** Delete Partner Coupon. */
  partnerCouponDelete: Maybe<PartnerCouponDelete>;
  /** Create Partner Coupon Customer. */
  partnerCouponCustomerCreate: Maybe<PartnerCouponCustomerCreate>;
  /** Update Partner Coupon Customer. */
  partnerCouponCustomerUpdate: Maybe<PartnerCouponCustomerUpdate>;
  /** Delete a Partner Coupon Customer */
  partnerCouponCustomerDelete: Maybe<PartnerCouponCustomerDelete>;
  /** Add/Sub Wallet Balance of a user */
  walletBalanceUpdate: Maybe<WalletBalanceUpdate>;
  /** Add/Sub Wallet Balance of a user from Phone number */
  walletBalancePhoneUpdate: Maybe<WalletBalancePhoneUpdate>;
  /** Push or sync all unsynced orders to wareiq */
  pushAllToWareiq: Maybe<PushAllToWareIq>;
  /** Create a new ContactUs entry. */
  contactUsCreate: Maybe<ContactUsCreate>;
  /** Create a new generic form entry. */
  genericFormCreate: Maybe<GenericFormCreate>;
  /** Add a new pincode */
  pincode: Maybe<Pincode>;
  /** Creates a new combo. */
  comboCreate: Maybe<ComboCreate>;
  /** Updates a combo. */
  comboUpdate: Maybe<ComboUpdate>;
  /** Deletes a combo. */
  comboDelete: Maybe<ComboDelete>;
  /** Adds products to a combo. */
  comboAddProductVariants: Maybe<ComboAddProductVariants>;
  /** Adds products to a combo. */
  comboRemoveProductVariants: Maybe<ComboRemoveProductVariants>;
  /** Creates Shipments for Bluedart. */
  bluedartShipmentCreate: Maybe<BluedartShipmentCreate>;
  /** Create Survey. */
  surveyCreate: Maybe<SurveyCreate>;
  /** Delete Survey. */
  surveyDelete: Maybe<SurveyDelete>;
  /** Fill Survey. */
  surveyFill: Maybe<SurveyFill>;
  /** Fill Survey. */
  surveyOptionsfill: Maybe<SurveyOptionsFill>;
  /** Sync Inventory with WareIq. */
  syncWareiqInventory: Maybe<SyncWareIqInventory>;
  /** Create Subscription. */
  subscriptionCreate: Maybe<SubscriptionCreate>;
  /** Update a subscription. */
  subscriptionUpdate: Maybe<UpdateSubscription>;
  /** Delete a subscription. */
  subscriptionDelete: Maybe<DeleteSubscription>;
  /** Create Influencer. */
  createInfluencer: Maybe<CreateInfluencer>;
  /** Update an Influencer. */
  updateInfluencer: Maybe<UpdateInfluencer>;
  /** Delete an Influencer instance. */
  deleteInfluencer: Maybe<DeleteInfluencer>;
  /** Create ShopifyUser. */
  shopifyUserCreate: Maybe<CreateShopifyUser>;
  /** Update an ShopifyUser. */
  shopifyUserUpdate: Maybe<UpdateShopifyUser>;
  /** Delete an ShopifyUser instance. */
  shopifyUserDelete: Maybe<DeleteShopifyUser>;
  /** Creates a new section. */
  sectionCreate: Maybe<SectionCreate>;
  /** Updates a section. */
  sectionUpdate: Maybe<SectionUpdate>;
  /** Deletes a section. */
  sectionDelete: Maybe<SectionDelete>;
  /** Deletes sections. */
  sectionBulkDelete: Maybe<SectionBulkDelete>;
  /** Adds products to a section. */
  sectionAddProducts: Maybe<SectionAddProducts>;
  /** Remove products from a section. */
  sectionRemoveProducts: Maybe<SectionRemoveProducts>;
  /** Reorder the products of a section. */
  sectionReorderProducts: Maybe<SectionReorderProducts>;
  /** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  sectionImageCreate: Maybe<SectionImageCreate>;
  /** Deletes a section image. */
  sectionImageDelete: Maybe<SectionImageDelete>;
  /** Changes ordering of the section image. */
  sectionImageReorder: Maybe<SectionImageReorder>;
  /** Updates metadata of an object. */
  updateMetadataV2: Maybe<UpdateMetadataV2>;
  /** Delete metadata of an object. */
  deleteMetadataV2: Maybe<DeleteMetadataV2>;
  /** Updates private metadata of an object. */
  updatePrivateMetadataV2: Maybe<UpdatePrivateMetadataV2>;
  /** Delete object's private metadata. */
  deletePrivateMetadataV2: Maybe<DeletePrivateMetadataV2>;
  /** Create ShopifyUser. */
  checkoutAddPromoCodeShopify: Maybe<CheckoutAddPromoCodeShopify>;
  /** Create ShopifyUser. */
  checkoutRemovePromoCodeShopify: Maybe<CheckoutRemovePromoCodeShopify>;
  /** Create a user avatar. For all users. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  userAvatarUpdateV2: Maybe<UserAvatarUpdateV2>;
  /** Update Customer metadata. */
  updateCustomerNoAuth: Maybe<UpdateCustomerNoAuth>;
  /** Deletes a user avatar. Only for staff members. */
  userAvatarDeleteV2: Maybe<UserAvatarDeleteV2>;
  /** Cancel a DTC Order */
  dtcOrderCancel: Maybe<DtcOrderCancel>;
  /** Return a DTC Order */
  dtcOrderReturn: Maybe<DtcOrderReturn>;
  /** Create a menu item image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  menuItemImageCreate: Maybe<CreateMenuItemsImages>;
  /** Moves items of menus. */
  menuItemMoveV2: Maybe<MenuItemMoveV2>;
  /** Create Product. */
  createProductCsv: Maybe<CreateProductCsv>;
  /** Update Product Attributes. */
  updateProductCsv: Maybe<UpdateProductCsv>;
  /** Upload Review CSV. */
  createReviewCsv: Maybe<CreateReviewCsv>;
  /** Create Product. */
  updateCollectionMetadata: Maybe<UpdateCollectionMetadata>;
  /** Update Collection Banner. */
  updateCollectionBanner: Maybe<UpdateCollectionBanner>;
  /** Update ProductVariant metadata. */
  updateProductvariantMetadata: Maybe<UpdateProductvariantMetadata>;
  /** Create Product. */
  updateInventoryCsv: Maybe<UpdateInventoryCsv>;
  /** Bulk Upload Price CSV */
  bulkPriceUpdateCsv: Maybe<BulkPriceUpdateCsv>;
  /** Create Product. */
  updateProductsMetadataCsv: Maybe<UpdateProductsMetadataCsv>;
  /** Create Product. */
  createProductVariantCsv: Maybe<CreateProductVariantCsv>;
  /** Update Manufacturing Details of a product. */
  updateManufacturingDetailsCsv: Maybe<UpdateManufacturingDetailsCsv>;
  /** Update Product Pricing on Shopify. */
  updateShopifyProductPriceCsv: Maybe<UpdateShopifyProductPriceCsv>;
  /** Update Product Tags on Shopify. */
  updateShopifyProductTagsCsv: Maybe<UpdateShopifyProductTagsCsv>;
  /** Updates a list ProductVariant quantities  */
  productVariantBulkUpdate: Maybe<ProductVariantBulkUpdate>;
  /** Sub Balance to Wallet through CSV. */
  farziWalletBalanceSubCsv: Maybe<FarziWalletBalanceSubCsv>;
  /** Add Balance to Wallet through CSV. */
  farziWalletBalanceAddCsv: Maybe<FarziWalletBalanceAddCsv>;
  /** Add/Sub Wallet Balance of a user from Email */
  farziWalletBalanceEmailUpdate: Maybe<FarziWalletBalanceEmailUpdate>;
  /** Create and return a user hash. */
  getUserHash: Maybe<GetUserHash>;
  /** Export orders to csv file. */
  exportOrders: Maybe<ExportOrders>;
  /** Export customers to csv file. */
  exportCustomer: Maybe<ExportCustomers>;
  /** Creates Refer Hash for user. */
  referAFriend: Maybe<ReferAFriend>;
  /** Creates Coupon Code for referd user. */
  getReferalDiscount: Maybe<GetReferalDiscount>;
  /** Add Wallet Balance of a user from a csv file */
  walletBalanceAddCsv: Maybe<WalletBalanceAddCsv>;
  /** Export orders to csv file. */
  walletExport: Maybe<ExportWallet>;
  /** Upload Images of a product. */
  uploadProductImageCsv: Maybe<UploadProductImageCsv>;
  /** Upload Collection ID CSV */
  uploadCollectionidCsv: Maybe<UploadCollectionIdcsv>;
  /** Creates checkout from an existing order */
  reOrder: Maybe<ReOrder>;
  /** Create JWT token via google oauth2. */
  createTokenOauth: Maybe<CreateTokenOAuth>;
  /** Create a new nutrition form entry. */
  nutritionFormCreate: Maybe<NutritionFormCreate>;
  /** Trigger a cron as specified in input. */
  triggerCron: Maybe<TriggerCron>;
  /** Create a new voucher for draft order */
  draftOrderAddPromoCode: Maybe<DraftOrderAddPromoCode>;
  /** Create a new voucher for draft order */
  draftOrderRemovePromoCode: Maybe<DraftOrderRemovePromoCode>;
  /** Creates a new draft order. */
  draftOrderCreateFromOrderId: Maybe<DraftOrderCreateFromOrderId>;
  /** Adds COD charges to an order's total */
  draftOrderApplyCod: Maybe<DraftOrderApplyCod>;
  /** Removes COD charges from an orders total */
  draftOrderRemoveCod: Maybe<DraftOrderRemoveCod>;
  /** Adds COD charges to an order's total */
  draftOrderApplyPrepaid: Maybe<DraftOrderApplyPrePaid>;
  /** Removes COD charges from an orders total */
  draftOrderRemovePrepaid: Maybe<DraftOrderRemovePrePaid>;
  /** Create shipping zone. */
  createShippingZones: Maybe<CreateShippingZonesCsv>;
  /** Send or resend order confirmation email for order */
  sendOrderEmail: Maybe<SendOrderEmail>;
  /** Delete product review by product */
  deleteProductReviewByProductId: Maybe<DeleteProductReviewByProduct>;
  /** Update Product Tags */
  addBulkTags: Maybe<AddBulkProductTagsCsv>;
  /** Create a new archive order. */
  archiveOrderCreate: Maybe<CreateArchiveOrder>;
  /** Update an archive order. */
  archiveOrderUpdate: Maybe<UpdateArchiveOrder>;
  /** Delete an archive order. */
  archiveOrderDelete: Maybe<DeleteArchiveOrder>;
  /** Update Delivery Scheduler */
  updateDeliveryScheduleCsv: Maybe<UpdateDeliverySchedule>;
  /** Create Delivery Scheduler */
  createDeliverySchedule: Maybe<CreateDeliverySchedule>;
  /** Create a Periodic Task. */
  periodicTaskCreate: Maybe<PeriodicTaskCreate>;
  /** Update a Periodic Task. */
  periodicTaskUpdate: Maybe<PeriodicTaskUpdate>;
  /** Delete a Periodic Task. */
  periodicTaskDelete: Maybe<PeriodicTaskDelete>;
  /** Create a new email template instance */
  emailTemplateCreate: Maybe<EmailTemplateCreate>;
  /** Update an email template instance */
  emailTemplateUpdate: Maybe<EmailTemplateUpdate>;
  /** Delete a template instance */
  emailTemplateDelete: Maybe<EmailTemplateDelete>;
  /** Upload list of RTO customers. */
  uploadRtoCustomersList: Maybe<UploadRtoCustomersListCsv>;
  /** Remove list of RTO customers. */
  removeRtoCustomersList: Maybe<RemoveRtoCustomersListCsv>;
  /** Upload list of risk orders. */
  pushRiskOrdersCsv: Maybe<PushRiskOrderCsv>;
  /** Deletes productReviews. */
  productReviewBulkDelete: Maybe<ProductReviewsBulkDelete>;
  /** Edit existing product review by providing a hash. */
  editProductReviewHash: Maybe<EditProductReviewHash>;
  /** Create JWT token without OTP. */
  createTokenWithoutOtp: Maybe<CreateTokenWithoutOtp>;
  /** Creates an order on CCAvenue. */
  createCcAvenueOrder: Maybe<CreateCcAvenueOrder>;
  /** Creates new fulfillments for an order. */
  orderBulkFulfillCsv: Maybe<OrderBulkFulfillCsv>;
  /** Edit slots for pincode */
  assignSlotsToDeliveryScheduler: Maybe<AssignSlotsToDeliverySchedule>;
  /** Creates an order on Gokwik. */
  createGokwikOrder: Maybe<CreateGokwikOrder>;
  /** Adds Wallet discount */
  draftOrderApplyWallet: Maybe<DraftOrderApplyWallet>;
  /** Removes wallet discount. */
  draftOrderRemoveWallet: Maybe<DraftOrderRemoveWallet>;
  /** Create JWT token. */
  createTokenForSuperUser: Maybe<CreateTokenForSuperUser>;
};


export type MutationWishlistAddProductArgs = {
  productId: Scalars['ID'];
};


export type MutationWishlistRemoveProductArgs = {
  productId: Scalars['ID'];
};


export type MutationWishlistAddVariantArgs = {
  variantId: Scalars['ID'];
};


export type MutationWishlistRemoveVariantArgs = {
  variantId: Scalars['ID'];
};


export type MutationAddTagsArgs = {
  id: Scalars['ID'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationRemoveTagsArgs = {
  id: Scalars['ID'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationAddTagsCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID'];
  input: WebhookUpdateInput;
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID'];
  input: WarehouseUpdateInput;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID'];
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID'];
  shippingZoneIds: Array<Scalars['ID']>;
};


export type MutationAuthorizationKeyAddArgs = {
  input: AuthorizationKeyInput;
  keyType: AuthorizationKeyType;
};


export type MutationAuthorizationKeyDeleteArgs = {
  keyType: AuthorizationKeyType;
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationHomepageCollectionUpdateArgs = {
  collection?: Maybe<Scalars['ID']>;
};


export type MutationShopDomainUpdateArgs = {
  input?: Maybe<SiteDomainInput>;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopAddressUpdateArgs = {
  input?: Maybe<AddressInput>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingPriceInput;
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID'];
  input: ShippingZoneUpdateInput;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationAttributeAssignArgs = {
  operations: Array<Maybe<AttributeAssignInput>>;
  productTypeId: Scalars['ID'];
};


export type MutationAttributeUnassignArgs = {
  attributeIds: Array<Maybe<Scalars['ID']>>;
  productTypeId: Scalars['ID'];
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeUpdateInput;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationAttributeClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationAttributeUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationAttributeClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID'];
  moves: Array<Maybe<ReorderInput>>;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: Maybe<Scalars['ID']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCategoryClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationCategoryUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCategoryClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDuplicateArgs = {
  collectionId: Scalars['ID'];
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID'];
  moves: Array<Maybe<MoveProductInput>>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isPublished: Scalars['Boolean'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID'];
  products: Array<Maybe<Scalars['ID']>>;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: CollectionInput;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCollectionClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationCollectionUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCollectionClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isPublished: Scalars['Boolean'];
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID'];
  input: ProductInput;
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationProductUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationProductSetAvailabilityForPurchaseArgs = {
  isAvailable: Scalars['Boolean'];
  productId: Scalars['ID'];
  startDate?: Maybe<Scalars['Date']>;
};


export type MutationProductImageCreateArgs = {
  input: ProductImageCreateInput;
};


export type MutationProductVariantReorderArgs = {
  moves: Array<Maybe<ReorderInput>>;
  productId: Scalars['ID'];
};


export type MutationProductImageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductImageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductImageReorderArgs = {
  imagesIds: Array<Maybe<Scalars['ID']>>;
  productId: Scalars['ID'];
};


export type MutationProductImageUpdateArgs = {
  id: Scalars['ID'];
  input: ProductImageUpdateInput;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID'];
  input: ProductTypeInput;
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<Maybe<ReorderInput>>;
  productTypeId: Scalars['ID'];
  type: AttributeTypeEnum;
};


export type MutationProductTypeUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductTypeClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationProductTypeUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductTypeClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID'];
  variants: Array<Maybe<ProductVariantBulkCreateInput>>;
};


export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID'];
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID'];
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID'];
  input: ProductVariantInput;
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductVariantClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationProductVariantUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationProductVariantClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationVariantImageAssignArgs = {
  imageId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationVariantImageUnassignArgs = {
  imageId: Scalars['ID'];
  variantId: Scalars['ID'];
};


export type MutationPaymentCaptureArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentRefundArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>;
  paymentId: Scalars['ID'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID'];
};


export type MutationPaymentInitializeArgs = {
  gateway: Scalars['String'];
  paymentData?: Maybe<Scalars['JSONString']>;
};


export type MutationStripePaymentIntentCreateArgs = {
  checkoutToken: Scalars['ID'];
};


export type MutationPageCreateArgs = {
  input: PageInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isPublished: Scalars['Boolean'];
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDraftOrderLinesCreateArgs = {
  id: Scalars['ID'];
  input: Array<Maybe<OrderLineCreateInput>>;
};


export type MutationDraftOrderLineDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDraftOrderLineUpdateArgs = {
  id: Scalars['ID'];
  input: OrderLineInput;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID'];
  input: DraftOrderInput;
};


export type MutationOrderAddNoteArgs = {
  order: Scalars['ID'];
  input: OrderAddNoteInput;
};


export type MutationOrderCancelArgs = {
  id: Scalars['ID'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderClearPrivateMetaArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationOrderClearMetaArgs = {
  input: MetaPath;
  token: Scalars['UUID'];
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: Maybe<Scalars['ID']>;
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID'];
  input: FulfillmentCancelInput;
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderFulfillmentClearMetaArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationOrderFulfillmentClearPrivateMetaArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationOrderFulfillmentUpdateMetaArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationOrderFulfillmentUpdatePrivateMetaArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID'];
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal'];
  id: Scalars['ID'];
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateMetaArgs = {
  input: MetaInput;
  token: Scalars['UUID'];
};


export type MutationOrderUpdatePrivateMetaArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationOrderUpdateShippingArgs = {
  order: Scalars['ID'];
  input?: Maybe<OrderUpdateShippingInput>;
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID'];
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationOrderBulkCaptureArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: Array<MetadataInput>;
};


export type MutationAssignNavigationArgs = {
  menu?: Maybe<Scalars['ID']>;
  navigationType: NavigationType;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID'];
  input: MenuInput;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID'];
  input: MenuItemInput;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID'];
  moves: Array<Maybe<MenuItemMoveInput>>;
};


export type MutationInvoiceRequestArgs = {
  number?: Maybe<Scalars['String']>;
  orderId: Scalars['ID'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID'];
  input: UpdateInvoiceInput;
};


export type MutationInvoiceSendEmailArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID'];
  input: GiftCardUpdateInput;
};


export type MutationPluginUpdateArgs = {
  id: Scalars['ID'];
  input: PluginUpdateInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID'];
  input: SaleInput;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherInput;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID'];
  input: CatalogueInput;
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId: Scalars['ID'];
};


export type MutationCheckoutCompleteArgs = {
  checkoutId: Scalars['ID'];
  paymentData?: Maybe<Scalars['JSONString']>;
  redirectUrl?: Maybe<Scalars['String']>;
  storeSource?: Maybe<Scalars['Boolean']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId: Scalars['ID'];
  customerId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId: Scalars['ID'];
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId: Scalars['ID'];
  lineId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>>;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId: Scalars['ID'];
  input: PaymentInput;
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingAddress: AddressInput;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  shippingMethodId: Scalars['ID'];
};


export type MutationCheckoutUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCheckoutClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationCheckoutUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationCheckoutClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID'];
  input: AppInput;
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String'];
};


export type MutationAppActivateArgs = {
  id: Scalars['ID'];
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID'];
};


export type MutationTokenCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSetPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationRequestEmailChangeArgs = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationConfirmEmailChangeArgs = {
  token: Scalars['String'];
};


export type MutationPhoneChangeArgs = {
  otp: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  type?: Maybe<AddressTypeEnum>;
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID'];
  type: AddressTypeEnum;
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAccountRequestDeletionArgs = {
  redirectUrl: Scalars['String'];
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String'];
};


export type MutationAccountUpdateMetaArgs = {
  input: MetaInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID'];
  input: AddressInput;
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID'];
  type: AddressTypeEnum;
  userId: Scalars['ID'];
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID'];
  input: CustomerInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID'];
  input: StaffUpdateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload'];
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  isActive: Scalars['Boolean'];
};


export type MutationUserUpdateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationUserClearMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationUserUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationUserClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationServiceAccountCreateArgs = {
  input: ServiceAccountInput;
};


export type MutationServiceAccountUpdateArgs = {
  id: Scalars['ID'];
  input: ServiceAccountInput;
};


export type MutationServiceAccountDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationServiceAccountUpdatePrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaInput;
};


export type MutationServiceAccountClearPrivateMetadataArgs = {
  id: Scalars['ID'];
  input: MetaPath;
};


export type MutationServiceAccountTokenCreateArgs = {
  input: ServiceAccountTokenInput;
};


export type MutationServiceAccountTokenDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID'];
  input: PermissionGroupUpdateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationExportProductsV2Args = {
  input: ExportProductsV2Input;
};


export type MutationCreateHostingFileArgs = {
  input: HostingInput;
};


export type MutationCreateHostingFileNoAuthArgs = {
  input: HostingNoAuthInput;
};


export type MutationDeleteHostingFileArgs = {
  hostingId: Scalars['ID'];
};


export type MutationCreateNotificationArgs = {
  input: NotificationInput;
};


export type MutationRequestOtpArgs = {
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationOtpTokenCreateArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  otp: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};


export type MutationVerifyCheckoutOtpArgs = {
  otp: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationTokenCreateWithAdminArgs = {
  userId: Scalars['String'];
};


export type MutationAccountCreateArgs = {
  input: AccountCreateInput;
};


export type MutationAccountRegisterV2Args = {
  input: AccountRegisterInputV2;
};


export type MutationConfirmAccountV2Args = {
  checkoutId?: Maybe<Scalars['ID']>;
  otp: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationProductReviewCreateArgs = {
  input: ProductReviewInput;
};


export type MutationProductReviewRateArgs = {
  rated: ReviewRatingType;
  reviewId: Scalars['ID'];
};


export type MutationProductReviewUpdateReplyArgs = {
  id: Scalars['ID'];
  reply: Scalars['String'];
};


export type MutationProductReviewEditArgs = {
  id: Scalars['ID'];
  input?: Maybe<ProductReviewInput>;
};


export type MutationProductReviewDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductImageCreateV2Args = {
  input: ProductImageCreateInput;
};


export type MutationProductReviewImageCreateArgs = {
  input: ProductReviewImageCreateInput;
};


export type MutationProductReviewImageUpdateArgs = {
  id: Scalars['ID'];
  input: ProductReviewImageCreateInput;
};


export type MutationProductReviewImageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductReviewVideoCreateArgs = {
  input: ProductReviewVideoCreateInput;
};


export type MutationProductReviewVideoDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationProductDuplicateArgs = {
  id: Scalars['ID'];
};


export type MutationRazorpayOrderCreateArgs = {
  input: RazorpayCreateOrderInput;
};


export type MutationPaytmOrderCreateArgs = {
  input: PaytmCreateOrderInput;
};


export type MutationCashfreeOrderCreateArgs = {
  input: CashfreeCreateOrderInput;
};


export type MutationCashfreeOrderCreateSdkArgs = {
  input: CashfreeCreateOrderSdkInput;
};


export type MutationPayuOrderCreateArgs = {
  checkoutId: Scalars['ID'];
};


export type MutationSezzleOrderCreateArgs = {
  input: SezzleCreateOrderInput;
};


export type MutationBannerCreateArgs = {
  input: BannerInput;
};


export type MutationBannerUpdateArgs = {
  id: Scalars['ID'];
  input: BannerInput;
};


export type MutationBannerDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationHeaderCreateArgs = {
  input: HeaderInput;
};


export type MutationVoucherRuleCreateArgs = {
  input: VoucherRuleInput;
};


export type MutationVoucherRuleUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherRuleInput;
};


export type MutationVoucherRuleDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoucherRuleBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationVoucherRuleLinkCreateArgs = {
  input: VoucherRuleLinkInput;
};


export type MutationVoucherRuleLinkUpdateArgs = {
  id: Scalars['ID'];
  input: VoucherRuleLinkInput;
};


export type MutationCheckoutPaymentMethodUpdateArgs = {
  checkoutId: Scalars['ID'];
  gatewayId: Scalars['String'];
  useCashback: Scalars['Boolean'];
};


export type MutationInvoiceUploadArgs = {
  uri: Scalars['String'];
};


export type MutationBulkInvoiceExportArgs = {
  created?: Maybe<DateRangeInput>;
  orderIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagsList?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationAddressTypeUpdateArgs = {
  addressId: Scalars['ID'];
  type: AddressTypes;
};


export type MutationCheckoutAddNoteArgs = {
  id: Scalars['ID'];
  input: CheckoutAddNoteInput;
};


export type MutationCheckoutRefreshArgs = {
  checkoutId: Scalars['ID'];
};


export type MutationPushToWareiqArgs = {
  orderId: Scalars['ID'];
};


export type MutationPartnerCreateArgs = {
  csvFile?: Maybe<Scalars['Upload']>;
  input: PartnerInput;
};


export type MutationPartnerUpdateArgs = {
  id: Scalars['ID'];
  input: PartnerInput;
};


export type MutationPartnerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPartnerCouponCsvCreateArgs = {
  input: PartnerCouponCsvInput;
  partnerId: Scalars['ID'];
  replaceAll?: Maybe<Scalars['Boolean']>;
};


export type MutationPartnerCouponUpdateArgs = {
  id: Scalars['ID'];
  input: PartnerCouponInput;
};


export type MutationPartnerCouponDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPartnerCouponCustomerCreateArgs = {
  input: PartnerCouponCustomerInput;
};


export type MutationPartnerCouponCustomerUpdateArgs = {
  id: Scalars['ID'];
  input: PartnerCouponCustomerInput;
};


export type MutationPartnerCouponCustomerDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationWalletBalanceUpdateArgs = {
  input: WalletInput;
};


export type MutationWalletBalancePhoneUpdateArgs = {
  input: WalletInputPhone;
};


export type MutationContactUsCreateArgs = {
  input: ContactUsInput;
};


export type MutationGenericFormCreateArgs = {
  input: GenericFormInput;
};


export type MutationPincodeArgs = {
  input: PincodeInput;
};


export type MutationComboCreateArgs = {
  input: ComboCreateInput;
};


export type MutationComboUpdateArgs = {
  id: Scalars['ID'];
  input: ComboCreateInput;
};


export type MutationComboDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationComboAddProductVariantsArgs = {
  comboId: Scalars['ID'];
  variants: Array<Maybe<Scalars['ID']>>;
};


export type MutationComboRemoveProductVariantsArgs = {
  comboId: Scalars['ID'];
  variants: Array<Maybe<Scalars['ID']>>;
};


export type MutationBluedartShipmentCreateArgs = {
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MutationSurveyCreateArgs = {
  customerIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  input: SurveyInput;
  orderIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  questions: Array<Maybe<SurveyQuestionInput>>;
};


export type MutationSurveyDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSurveyFillArgs = {
  answers: Array<Maybe<SurveyAnswerInput>>;
  orderId?: Maybe<Scalars['ID']>;
  surveyHash: Scalars['String'];
  surveyId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};


export type MutationSurveyOptionsfillArgs = {
  answers: Array<Maybe<SurveyAnswerOptionsInput>>;
  orderId?: Maybe<Scalars['ID']>;
  surveyHash: Scalars['String'];
  surveyId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};


export type MutationSyncWareiqInventoryArgs = {
  input?: Maybe<Scalars['ID']>;
};


export type MutationSubscriptionCreateArgs = {
  input: SubscriptionInput;
};


export type MutationSubscriptionUpdateArgs = {
  id: Scalars['ID'];
  input?: Maybe<SubscriptionInput>;
};


export type MutationSubscriptionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCreateInfluencerArgs = {
  input: InfluencerInput;
};


export type MutationUpdateInfluencerArgs = {
  id: Scalars['ID'];
  input: InfluencerInput;
};


export type MutationDeleteInfluencerArgs = {
  id: Scalars['ID'];
};


export type MutationShopifyUserCreateArgs = {
  input: ShopifyUserInput;
};


export type MutationShopifyUserUpdateArgs = {
  input: ShopifyUserInput;
  shopifyUserId: Scalars['String'];
};


export type MutationShopifyUserDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSectionCreateArgs = {
  input: SectionInput;
  parent?: Maybe<Scalars['ID']>;
};


export type MutationSectionUpdateArgs = {
  id: Scalars['ID'];
  input: SectionInput;
};


export type MutationSectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSectionBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationSectionAddProductsArgs = {
  products: Array<Maybe<Scalars['ID']>>;
  sectionId: Scalars['ID'];
};


export type MutationSectionRemoveProductsArgs = {
  products: Array<Maybe<Scalars['ID']>>;
  sectionId: Scalars['ID'];
};


export type MutationSectionReorderProductsArgs = {
  moves: Array<Maybe<MoveProductInput>>;
  sectionId: Scalars['ID'];
};


export type MutationSectionImageCreateArgs = {
  input: SectionImageCreateInput;
};


export type MutationSectionImageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationSectionImageReorderArgs = {
  imagesIds: Array<Maybe<Scalars['ID']>>;
  sectionId: Scalars['ID'];
};


export type MutationUpdateMetadataV2Args = {
  id: Scalars['ID'];
  input: Array<MetadataInputV2>;
};


export type MutationDeleteMetadataV2Args = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationUpdatePrivateMetadataV2Args = {
  id: Scalars['ID'];
  input: Array<MetadataInputV2>;
};


export type MutationDeletePrivateMetadataV2Args = {
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};


export type MutationCheckoutAddPromoCodeShopifyArgs = {
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
};


export type MutationCheckoutRemovePromoCodeShopifyArgs = {
  checkoutId: Scalars['ID'];
};


export type MutationUserAvatarUpdateV2Args = {
  image: Scalars['Upload'];
};


export type MutationUpdateCustomerNoAuthArgs = {
  id: Scalars['ID'];
  input: CustomerMetaInput;
};


export type MutationDtcOrderCancelArgs = {
  input: OrderCancelInput;
};


export type MutationDtcOrderReturnArgs = {
  input: OrderReturnInput;
};


export type MutationMenuItemImageCreateArgs = {
  input: CreateMenuItemsImagesInput;
};


export type MutationMenuItemMoveV2Args = {
  menu: Scalars['ID'];
  moves: Array<Maybe<MenuItemMoveInput>>;
};


export type MutationCreateProductCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateProductCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationCreateReviewCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateCollectionMetadataArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateCollectionBannerArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateProductvariantMetadataArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateInventoryCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationBulkPriceUpdateCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateProductsMetadataCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationCreateProductVariantCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateManufacturingDetailsCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateShopifyProductPriceCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUpdateShopifyProductTagsCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationProductVariantBulkUpdateArgs = {
  variants?: Maybe<Array<Maybe<VariantInput>>>;
};


export type MutationFarziWalletBalanceSubCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationFarziWalletBalanceAddCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationFarziWalletBalanceEmailUpdateArgs = {
  input: FarziWalletInputEmail;
};


export type MutationGetUserHashArgs = {
  shopifyUserId: Scalars['String'];
};


export type MutationExportOrdersArgs = {
  input: ExportOrdersInput;
};


export type MutationExportCustomerArgs = {
  input: ExportCustomersInput;
};


export type MutationReferAFriendArgs = {
  email: Scalars['String'];
};


export type MutationGetReferalDiscountArgs = {
  email: Scalars['String'];
  referHash: Scalars['String'];
};


export type MutationWalletBalanceAddCsvArgs = {
  input: WalletCsvInput;
};


export type MutationWalletExportArgs = {
  input: ExportWalletInput;
};


export type MutationUploadProductImageCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationUploadCollectionidCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationReOrderArgs = {
  orderId?: Maybe<Scalars['ID']>;
  pincode?: Maybe<Scalars['String']>;
  skipLines?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTokenOauthArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  socialMedia: SocialMedia;
  token: Scalars['String'];
};


export type MutationNutritionFormCreateArgs = {
  input: NutritionFormInput;
};


export type MutationTriggerCronArgs = {
  arguments?: Maybe<Array<Maybe<Scalars['String']>>>;
  cron?: Maybe<Scalars['String']>;
};


export type MutationDraftOrderAddPromoCodeArgs = {
  input: SaleorVoucherInput;
};


export type MutationDraftOrderRemovePromoCodeArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderCreateFromOrderIdArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderApplyCodArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderRemoveCodArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderApplyPrepaidArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderRemovePrepaidArgs = {
  orderId: Scalars['ID'];
};


export type MutationCreateShippingZonesArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationSendOrderEmailArgs = {
  orderId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteProductReviewByProductIdArgs = {
  productId: Scalars['ID'];
};


export type MutationAddBulkTagsArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationArchiveOrderCreateArgs = {
  input: ArchiveOrderInput;
};


export type MutationArchiveOrderUpdateArgs = {
  id: Scalars['String'];
  input: ArchiveOrderInput;
};


export type MutationArchiveOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateDeliveryScheduleCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationCreateDeliveryScheduleArgs = {
  input?: Maybe<DeliveryScheduleInput>;
};


export type MutationPeriodicTaskCreateArgs = {
  input?: Maybe<PeriodicTaskCreateInput>;
};


export type MutationPeriodicTaskUpdateArgs = {
  id: Scalars['ID'];
  input?: Maybe<PeriodicTaskCreateInput>;
};


export type MutationPeriodicTaskDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationEmailTemplateCreateArgs = {
  input?: Maybe<EmailTemplateInput>;
};


export type MutationEmailTemplateUpdateArgs = {
  id: Scalars['ID'];
  input?: Maybe<EmailTemplateInput>;
};


export type MutationEmailTemplateDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUploadRtoCustomersListArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationRemoveRtoCustomersListArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationPushRiskOrdersCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationProductReviewBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
};


export type MutationEditProductReviewHashArgs = {
  id: Scalars['ID'];
  input?: Maybe<ProductReviewInput>;
};


export type MutationCreateTokenWithoutOtpArgs = {
  checkoutId?: Maybe<Scalars['ID']>;
  waid?: Maybe<Scalars['String']>;
};


export type MutationCreateCcAvenueOrderArgs = {
  input: CcAvenueCreateOrderInput;
};


export type MutationOrderBulkFulfillCsvArgs = {
  csvFile: Scalars['Upload'];
};


export type MutationAssignSlotsToDeliverySchedulerArgs = {
  noSlots?: Maybe<Scalars['Boolean']>;
  pincode?: Maybe<Scalars['String']>;
};


export type MutationCreateGokwikOrderArgs = {
  input: GokwikCreateOrderInput;
};


export type MutationDraftOrderApplyWalletArgs = {
  orderId: Scalars['ID'];
};


export type MutationDraftOrderRemoveWalletArgs = {
  orderId: Scalars['ID'];
};


export type MutationCreateTokenForSuperUserArgs = {
  userId: Scalars['ID'];
};

export type NameTranslationInput = {
  name?: Maybe<Scalars['String']>;
};

/** Represents shop's navigation menus. */
export type Navigation = {
  /** Main navigation bar. */
  main: Maybe<Menu>;
  /** Secondary navigation bar. */
  secondary: Maybe<Menu>;
};

export type NavigationType =
  /** Main storefront navigation. */
  | 'MAIN'
  /** Secondary storefront navigation. */
  | 'SECONDARY';

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Single Notification Details */
export type NotificationInput = {
  /** Product Id */
  productId: Scalars['ID'];
  /**  Product Variant Id */
  productVariantId?: Maybe<Scalars['ID']>;
  /** User email. */
  email: Scalars['String'];
  /** User phone No. */
  phone: Scalars['String'];
  /** First name of User */
  name: Scalars['String'];
};

export type NotificationType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  product: Product;
  productVariant: Maybe<ProductVariant>;
  created: Scalars['DateTime'];
  isNotified: Scalars['Boolean'];
};

/** Create a new nutrition form entry. */
export type NutritionFormCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A nutrition form instance. */
  nutritionForm: Maybe<NutritionFormType>;
};

export type NutritionFormInput = {
  /** Name of user. */
  name: Scalars['String'];
  /** Phone number of user. */
  phone: Scalars['String'];
  /** Email address of user. */
  email: Scalars['String'];
  /** Response body. */
  responseBody: Scalars['String'];
};

export type NutritionFormType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  responseBody: Maybe<Scalars['JSONString']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type OtpError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<OtpErrorCodeEnum>;
};

/** An enumeration. */
export type OtpErrorCodeEnum =
  | 'INVALID_PHONE'
  | 'INVALID_EMAIL'
  | 'INVALID_OTP'
  | 'MAX_RETRY';

export type ObjectWithMetadata = {
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

export type ObjectWithMetadataV2 = {
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItemV2>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItemV2>>;
};

/** Represents an order in the shop. */
export type Order = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  status: OrderStatus;
  user: Maybe<User>;
  languageCode: Scalars['String'];
  trackingClientId: Scalars['String'];
  billingAddress: Maybe<Address>;
  shippingAddress: Maybe<Address>;
  shippingMethod: Maybe<ShippingMethod>;
  shippingMethodName: Maybe<Scalars['String']>;
  /** Total price of shipping. */
  shippingPrice: Maybe<TaxedMoney>;
  token: Scalars['String'];
  voucher: Maybe<Voucher>;
  /** List of user gift cards. */
  giftCards: Maybe<Array<Maybe<GiftCard>>>;
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']>;
  translatedDiscountName: Maybe<Scalars['String']>;
  displayGrossPrices: Scalars['Boolean'];
  customerNote: Scalars['String'];
  weight: Maybe<Weight>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** List of shipments for the order. */
  fulfillments: Array<Maybe<Fulfillment>>;
  /** List of order lines. */
  lines: Array<Maybe<OrderLine>>;
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<Maybe<OrderAction>>;
  /** Tags associated with this order */
  tags: Array<Maybe<TagType>>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods: Maybe<Array<Maybe<ShippingMethod>>>;
  /** List of order invoices. */
  invoices: Maybe<Array<Maybe<Invoice>>>;
  /** User-friendly number of an order. */
  number: Maybe<Scalars['String']>;
  /** Informs if an order is fully paid. */
  isPaid: Maybe<Scalars['Boolean']>;
  /** Internal payment status. */
  paymentStatus: Maybe<PaymentChargeStatusEnum>;
  /** User-friendly payment status. */
  paymentStatusDisplay: Maybe<Scalars['String']>;
  /** List of payments for the order. */
  payments: Maybe<Array<Maybe<Payment>>>;
  /** Total amount of the order. */
  total: Maybe<TaxedMoney>;
  /** The sum of line prices not including shipping. */
  subtotal: Maybe<TaxedMoney>;
  /** User-friendly order status. */
  statusDisplay: Maybe<Scalars['String']>;
  /** Informs whether a draft order can be finalized(turned into a regular order). */
  canFinalize: Scalars['Boolean'];
  /** Amount authorized for the order. */
  totalAuthorized: Maybe<Money>;
  /** Amount captured by payment. */
  totalCaptured: Maybe<Money>;
  /** List of events associated with the order. */
  events: Maybe<Array<Maybe<OrderEvent>>>;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Email address of the customer. */
  userEmail: Maybe<Scalars['String']>;
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean'];
};

export type OrderAction =
  /** Represents the capture action. */
  | 'CAPTURE'
  /** Represents a mark-as-paid action. */
  | 'MARK_AS_PAID'
  /** Represents a refund action. */
  | 'REFUND'
  /** Represents a void action. */
  | 'VOID';

/** Adds note to the order. */
export type OrderAddNote = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order with the note added. */
  order: Maybe<Order>;
  /** Order note created. */
  event: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String'];
};

/** Cancels orders. */
export type OrderBulkCancel = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Capture list of order's. */
export type OrderBulkCapture = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  orderErrors: Array<OrderError>;
};

/** Creates new fulfillments for an order. */
export type OrderBulkFulfillCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  orderErrors: Array<OrderError>;
};

/** Cancel an order. */
export type OrderCancel = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Canceled order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderCancelInput = {
  /** Order ID */
  orderId: Scalars['String'];
  /** Customer ID */
  customerId: Scalars['String'];
  /** Reason for Order Cancellation */
  reason: Scalars['String'];
  /** Comments */
  comment?: Maybe<Scalars['String']>;
};

/** Capture an order. */
export type OrderCapture = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Captured order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Clears stored metadata value. */
export type OrderClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
};

/** Clears stored private metadata value. */
export type OrderClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
};

export type OrderCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<OrderCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
  /** The item at the end of the edge. */
  node: Order;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderDirection =
  /** Specifies an ascending sort order. */
  | 'ASC'
  /** Specifies a descending sort order. */
  | 'DESC';

export type OrderDraftFilterInput = {
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type OrderError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: OrderErrorCode;
  /** Warehouse ID which causes the error. */
  warehouse: Maybe<Scalars['ID']>;
  /** Order line ID which causes the error. */
  orderLine: Maybe<Scalars['ID']>;
};

/** An enumeration. */
export type OrderErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'CANNOT_CANCEL_FULFILLMENT'
  | 'CANNOT_CANCEL_ORDER'
  | 'CANNOT_DELETE'
  | 'CANNOT_REFUND'
  | 'CAPTURE_INACTIVE_PAYMENT'
  | 'NOT_EDITABLE'
  | 'FULFILL_ORDER_LINE'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'PRODUCT_NOT_PUBLISHED'
  | 'PRODUCT_UNAVAILABLE_FOR_PURCHASE'
  | 'NOT_FOUND'
  | 'ORDER_NO_SHIPPING_ADDRESS'
  | 'PAYMENT_ERROR'
  | 'PAYMENT_MISSING'
  | 'REQUIRED'
  | 'SHIPPING_METHOD_NOT_APPLICABLE'
  | 'SHIPPING_METHOD_REQUIRED'
  | 'TAX_ERROR'
  | 'UNIQUE'
  | 'VOID_INACTIVE_PAYMENT'
  | 'ZERO_QUANTITY'
  | 'INSUFFICIENT_STOCK'
  | 'DUPLICATED_INPUT_ITEM';

/** History log of the order. */
export type OrderEvent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']>;
  /** Order event type. */
  type: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
  /** Content of the event. */
  message: Maybe<Scalars['String']>;
  /** Email of the customer. */
  email: Maybe<Scalars['String']>;
  /** Type of an email sent to the customer. */
  emailType: Maybe<OrderEventsEmailsEnum>;
  /** Amount of money. */
  amount: Maybe<Scalars['Float']>;
  /** The payment ID from the payment gateway. */
  paymentId: Maybe<Scalars['String']>;
  /** The payment gateway of the payment. */
  paymentGateway: Maybe<Scalars['String']>;
  /** Number of items. */
  quantity: Maybe<Scalars['Int']>;
  /** Composed ID of the Fulfillment. */
  composedId: Maybe<Scalars['String']>;
  /** User-friendly number of an order. */
  orderNumber: Maybe<Scalars['String']>;
  /** Number of an invoice related to the order. */
  invoiceNumber: Maybe<Scalars['String']>;
  /** List of oversold lines names. */
  oversoldItems: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The concerned lines. */
  lines: Maybe<Array<Maybe<OrderEventOrderLineObject>>>;
  /** The lines fulfilled. */
  fulfilledItems: Maybe<Array<Maybe<FulfillmentLine>>>;
  /** The warehouse were items were restocked. */
  warehouse: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<OrderEventCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
  /** The item at the end of the edge. */
  node: OrderEvent;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type OrderEventOrderLineObject = {
  /** The variant quantity. */
  quantity: Maybe<Scalars['Int']>;
  /** The order line. */
  orderLine: Maybe<OrderLine>;
  /** The variant name. */
  itemName: Maybe<Scalars['String']>;
};

/** An enumeration. */
export type OrderEventsEmailsEnum =
  | 'PAYMENT_CONFIRMATION'
  | 'SHIPPING_CONFIRMATION'
  | 'TRACKING_UPDATED'
  | 'ORDER_CONFIRMATION'
  | 'ORDER_CANCEL'
  | 'ORDER_REFUND'
  | 'FULFILLMENT_CONFIRMATION'
  | 'DIGITAL_LINKS';

/** An enumeration. */
export type OrderEventsEnum =
  | 'DRAFT_CREATED'
  | 'DRAFT_ADDED_PRODUCTS'
  | 'DRAFT_REMOVED_PRODUCTS'
  | 'PLACED'
  | 'PLACED_FROM_DRAFT'
  | 'OVERSOLD_ITEMS'
  | 'CANCELED'
  | 'ORDER_MARKED_AS_PAID'
  | 'ORDER_FULLY_PAID'
  | 'UPDATED_ADDRESS'
  | 'EMAIL_SENT'
  | 'PAYMENT_AUTHORIZED'
  | 'PAYMENT_CAPTURED'
  | 'EXTERNAL_SERVICE_NOTIFICATION'
  | 'PAYMENT_REFUNDED'
  | 'PAYMENT_VOIDED'
  | 'PAYMENT_FAILED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_GENERATED'
  | 'INVOICE_UPDATED'
  | 'INVOICE_SENT'
  | 'FULFILLMENT_CANCELED'
  | 'FULFILLMENT_RESTOCKED_ITEMS'
  | 'FULFILLMENT_FULFILLED_ITEMS'
  | 'TRACKING_UPDATED'
  | 'NOTE_ADDED'
  | 'OTHER';

export type OrderExportFilterInput = {
  created?: Maybe<DateRangeInput>;
  tags?: Maybe<TagsListInput>;
};

export type OrderFieldEnum =
  | 'CREATED'
  | 'STATUS'
  | 'USER'
  | 'SHIPPING_ADDRESS'
  | 'CURRENCY'
  | 'SHIPPING_METHOD'
  | 'TOTAL_NET_AMOUNT'
  | 'VOUCHER'
  | 'DISCOUNT_AMOUNT'
  | 'VARIANT'
  | 'PRODUCT'
  | 'VARIANT_NAME'
  | 'PRODUCT_SKU'
  | 'QUANTITY'
  | 'GROSS_PRICE'
  | 'TAX_RATE'
  | 'RAZORPAY'
  | 'AWB'
  | 'SHIPROCKET_STATUS'
  | 'PAYMENT_ID';

export type OrderFilterInput = {
  paymentStatus?: Maybe<Array<Maybe<PaymentChargeStatusEnum>>>;
  shiprocketOrderStatus?: Maybe<Array<Maybe<ShiprocketStatusEnum>>>;
  deliveryDate?: Maybe<DateRangeInput>;
  status?: Maybe<Array<Maybe<OrderStatusFilter>>>;
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  createdTime?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
  tags?: Maybe<TagsListInput>;
  invoiceDate?: Maybe<DateRangeInput>;
};

/** Creates new fulfillments for an order. */
export type OrderFulfill = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** List of created fulfillments. */
  fulfillments: Maybe<Array<Maybe<Fulfillment>>>;
  /** Fulfilled order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>;
};

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: Maybe<Scalars['ID']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID'];
};

/** Represents order line of particular order. */
export type OrderLine = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  productName: Scalars['String'];
  variantName: Scalars['String'];
  productSku: Scalars['String'];
  isShippingRequired: Scalars['Boolean'];
  quantity: Scalars['Int'];
  quantityFulfilled: Scalars['Int'];
  taxRate: Scalars['Float'];
  digitalContentUrl: Maybe<DigitalContentUrl>;
  /** The main thumbnail for the ordered product. */
  thumbnail: Maybe<Image>;
  /** Price of the single item in the order line. */
  unitPrice: Maybe<TaxedMoney>;
  /** Price of the order line. */
  totalPrice: Maybe<TaxedMoney>;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant: Maybe<ProductVariant>;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String'];
  /** List of allocations across warehouses. */
  allocations: Maybe<Array<Allocation>>;
};


/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
  /** Product variant ID. */
  variantId: Scalars['ID'];
};

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int'];
};

/** Mark order as manually paid. */
export type OrderMarkAsPaid = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order marked as paid. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** Refund an order. */
export type OrderRefund = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A refunded order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderReturnInput = {
  /** Order ID */
  orderId: Scalars['String'];
  /** Customer ID */
  customerId: Scalars['String'];
  /** Reason for Order Return */
  reason: Scalars['String'];
  /** Line Item ID */
  lineItemId: Array<Maybe<Scalars['String']>>;
  /** Quantity */
  quantity: Array<Maybe<Scalars['Int']>>;
  /** Comments */
  comment?: Maybe<Scalars['String']>;
};

export type OrderSortField =
  /** Sort orders by number. */
  | 'NUMBER'
  /** Sort orders by creation date. */
  | 'CREATION_DATE'
  /** Sort orders by customer. */
  | 'CUSTOMER'
  /** Sort orders by payment. */
  | 'PAYMENT'
  /** Sort orders by fulfillment status. */
  | 'FULFILLMENT_STATUS'
  /** Sort orders by total. */
  | 'TOTAL';

export type OrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
};

/** An enumeration. */
export type OrderStatus =
  /** Draft */
  | 'DRAFT'
  /** Unfulfilled */
  | 'UNFULFILLED'
  /** Partially fulfilled */
  | 'PARTIALLY_FULFILLED'
  /** Fulfilled */
  | 'FULFILLED'
  /** Canceled */
  | 'CANCELED';

export type OrderStatusFilter =
  | 'READY_TO_FULFILL'
  | 'READY_TO_CAPTURE'
  | 'UNFULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'FULFILLED'
  | 'CANCELED';

/** An enumeration. */
export type OrderStatusInputEnum =
  | 'DRAFT'
  | 'UNFULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'FULFILLED'
  | 'CANCELED';

/** Updates an order. */
export type OrderUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  order: Maybe<Order>;
};

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>;
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>;
};

/** Updates meta for order. */
export type OrderUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
};

/** Updates private meta for order. */
export type OrderUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
};

/** Updates a shipping method of the order. */
export type OrderUpdateShipping = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Order with updated shipping method. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>;
};

/** Void an order. */
export type OrderVoid = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voided order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node & ObjectWithMetadata & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  contentJson: Scalars['JSONString'];
  publicationDate: Maybe<Scalars['Date']>;
  slug: Scalars['String'];
  created: Scalars['DateTime'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /**
   * Content of the page.
   * @deprecated Use the `contentJson` field instead.
   */
  content: Scalars['String'];
  /** Returns translated page fields for the given language code. */
  translation: Maybe<PageTranslation>;
  /** Whether the page is published. */
  isPublished: Scalars['Boolean'];
};


/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes pages. */
export type PageBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  pageErrors: Array<PageError>;
};

/** Publish pages. */
export type PageBulkPublish = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PageCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new page. */
export type PageCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page: Maybe<Page>;
};

/** Deletes a page. */
export type PageDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page: Maybe<Page>;
};

export type PageError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PageErrorCode;
};

/** An enumeration. */
export type PageErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type PageFilterInput = {
  search?: Maybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
};

export type PageInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>;
  /** Page title. */
  title?: Maybe<Scalars['String']>;
  /** Page content. May consist of ordinary text, HTML and images. */
  content?: Maybe<Scalars['String']>;
  /** Page content in JSON format. */
  contentJson?: Maybe<Scalars['JSONString']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
};

export type PageSortField =
  /** Sort pages by title. */
  | 'TITLE'
  /** Sort pages by slug. */
  | 'SLUG'
  /** Sort pages by visibility. */
  | 'VISIBILITY'
  /** Sort pages by creation date. */
  | 'CREATION_DATE'
  /** Sort pages by publication date. */
  | 'PUBLICATION_DATE';

export type PageSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  contentJson: Scalars['JSONString'];
  /**
   * Content of the page.
   * @deprecated Use the `contentJson` field instead.
   */
  content: Scalars['String'];
  /** Returns translated page fields for the given language code. */
  translation: Maybe<PageTranslation>;
  /** ('A static page that can be manually added by a shop operator ', 'through the dashboard.') */
  page: Maybe<Page>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Page. */
export type PageTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  page: Maybe<PageTranslatableContent>;
};

export type PageTranslation = Node & {
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  contentJson: Scalars['JSONString'];
  /** Translation language. */
  language: LanguageDisplay;
  /**
   * Translated description of the page.
   * @deprecated Use the `contentJson` field instead.
   */
  content: Scalars['String'];
};

export type PageTranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentJson?: Maybe<Scalars['JSONString']>;
};

/** Updates an existing page. */
export type PageUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
  page: Maybe<Page>;
};

/** Create Partner Coupons from CSV File */
export type PartnerCouponCsvCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Instance. */
  partner: Maybe<PartnerType>;
  partnerCouponErrors: Array<PartnerCouponError>;
};

export type PartnerCouponCsvInput = {
  /** Represents an CSV file in a multipart request. Column name containing coupon code should be 'Code' in CSV File. */
  csvFile: Scalars['Upload'];
};

/** Create Partner Coupon Customer. */
export type PartnerCouponCustomerCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Coupon Customer instance. */
  partnerCouponCustomer: Maybe<PartnerCouponCustomerType>;
  partnerCouponCustomerErrors: Array<PartnerCouponCustomerError>;
};

/** Delete a Partner Coupon Customer */
export type PartnerCouponCustomerDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Coupon Customer instance. */
  partnerCouponCustomer: Maybe<PartnerCouponCustomerType>;
  partnerCouponCustomerErrors: Array<PartnerCouponCustomerError>;
};

export type PartnerCouponCustomerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PartnerCouponCustomerErrorCode;
};

/** An enumeration. */
export type PartnerCouponCustomerErrorCode =
  | 'REQUIRED'
  | 'INVALID';

export type PartnerCouponCustomerInput = {
  /** Partner Coupon ID. */
  partnerCouponId: Scalars['ID'];
  /** Customer email. */
  customerEmail: Scalars['String'];
};

export type PartnerCouponCustomerType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  partnerCoupon: PartnerCouponType;
  customerEmail: Scalars['String'];
};

export type PartnerCouponCustomerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PartnerCouponCustomerTypeEdge>>;
};

/** A Relay edge containing a `PartnerCouponCustomerType` and its cursor. */
export type PartnerCouponCustomerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<PartnerCouponCustomerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Update Partner Coupon Customer. */
export type PartnerCouponCustomerUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Coupon Customer instance. */
  partnerCouponCustomer: Maybe<PartnerCouponCustomerType>;
  partnerCouponCustomerErrors: Array<PartnerCouponCustomerError>;
};

/** Delete Partner Coupon. */
export type PartnerCouponDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Coupon instance. */
  partnerCoupon: Maybe<PartnerCouponType>;
  partnerCouponErrors: Array<PartnerCouponError>;
};

export type PartnerCouponError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PartnerCouponErrorCode;
};

/** An enumeration. */
export type PartnerCouponErrorCode =
  | 'INVALID'
  | 'CSV_FILE_INVALID'
  | 'REQUIRED';

export type PartnerCouponInput = {
  /** Name of Partner Coupon. */
  name?: Maybe<Scalars['String']>;
  /** Optional description of Partner Coupon. */
  description?: Maybe<Scalars['String']>;
  /** Code of Partner Coupon. */
  code?: Maybe<Scalars['String']>;
  /** How many times this Partner Coupon is used by customers. */
  used?: Maybe<Scalars['Int']>;
};

export type PartnerCouponType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  partner: PartnerType;
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  code: Scalars['String'];
  used: Scalars['Int'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  customers: PartnerCouponCustomerTypeConnection;
};


export type PartnerCouponTypeCustomersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartnerCouponTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PartnerCouponTypeEdge>>;
};

/** A Relay edge containing a `PartnerCouponType` and its cursor. */
export type PartnerCouponTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<PartnerCouponType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Update Partner Coupon. */
export type PartnerCouponUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner Coupon instance. */
  partnerCoupon: Maybe<PartnerCouponType>;
  partnerCouponErrors: Array<PartnerCouponError>;
};

/** Create a Partner. */
export type PartnerCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner instance. */
  partner: Maybe<PartnerType>;
  partnerErrors: Array<PartnerError>;
};

/** Delete Partner. */
export type PartnerDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner instane. */
  partner: Maybe<PartnerType>;
  partnerErrors: Array<PartnerError>;
};

export type PartnerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PartnerErrorCode;
};

/** An enumeration. */
export type PartnerErrorCode =
  | 'PARTNER_INVALID'
  | 'NAME_REQUIRED'
  | 'START_DATE_INVALID'
  | 'END_DATE_INVALID';

export type PartnerInput = {
  /** Name of Partner. */
  name: Scalars['String'];
  /** Optional description of Partner. */
  description?: Maybe<Scalars['String']>;
  /** Event Name used for Partner coupon events */
  eventName?: Maybe<Scalars['String']>;
  /** Usage limit per customer for Partner's coupons. */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Apply this Partner's coupons once per customer. */
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** Min Spent Amount for a Partner's coupon to be valid. */
  minSpentAmount?: Maybe<Scalars['Int']>;
  /** Start date of the Partner. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the Partner. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Partner is active or inactive. */
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartnerType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  eventName: Scalars['String'];
  usageLimit: Maybe<Scalars['Int']>;
  applyOncePerCustomer: Scalars['Boolean'];
  currency: Scalars['String'];
  minSpentAmount: Maybe<Scalars['Float']>;
  minSpent: Maybe<Money>;
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  partnerCoupons: PartnerCouponTypeConnection;
};


export type PartnerTypePartnerCouponsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PartnerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PartnerTypeEdge>>;
};

/** A Relay edge containing a `PartnerType` and its cursor. */
export type PartnerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<PartnerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Update a Partner. */
export type PartnerUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Partner instance. */
  partner: Maybe<PartnerType>;
  partnerErrors: Array<PartnerError>;
};

/** Change the password of the logged in user. */
export type PasswordChange = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance with a new password. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Represents a payment of a given type. */
export type Payment = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  gateway: Scalars['String'];
  isActive: Scalars['Boolean'];
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
  token: Scalars['String'];
  checkout: Maybe<CheckoutType>;
  order: Maybe<Order>;
  customerIpAddress: Maybe<Scalars['String']>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<Maybe<OrderAction>>;
  /** Total amount of the payment. */
  total: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount: Maybe<Money>;
  /** List of all transactions within this payment. */
  transactions: Maybe<Array<Maybe<Transaction>>>;
  /** Maximum amount of money that can be captured. */
  availableCaptureAmount: Maybe<Money>;
  /** Maximum amount of money that can be refunded. */
  availableRefundAmount: Maybe<Money>;
  /** The details of the card used for this payment. */
  creditCard: Maybe<CreditCard>;
};

/** Captures the authorized payment amount. */
export type PaymentCapture = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

/** An enumeration. */
export type PaymentChargeStatusEnum =
  | 'NOT_CHARGED'
  | 'PENDING'
  | 'PARTIALLY_CHARGED'
  | 'FULLY_CHARGED'
  | 'PARTIALLY_REFUNDED'
  | 'FULLY_REFUNDED'
  | 'REFUSED'
  | 'CANCELLED';

export type PaymentCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PaymentCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
  /** The item at the end of the edge. */
  node: Payment;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PaymentError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PaymentErrorCode;
};

/** An enumeration. */
export type PaymentErrorCode =
  | 'BILLING_ADDRESS_NOT_SET'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'PARTIAL_PAYMENT_NOT_ALLOWED'
  | 'SHIPPING_ADDRESS_NOT_SET'
  | 'INVALID_SHIPPING_METHOD'
  | 'SHIPPING_METHOD_NOT_SET'
  | 'PAYMENT_ERROR'
  | 'NOT_SUPPORTED_GATEWAY';

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  /** Payment gateway name. */
  name: Scalars['String'];
  /** Payment gateway ID. */
  id: Scalars['ID'];
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Maybe<Scalars['String']>>;
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  initializedPayment: Maybe<PaymentInitialized>;
  paymentErrors: Array<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  /** ID of a payment gateway. */
  gateway: Scalars['String'];
  /** Payment gateway name. */
  name: Scalars['String'];
  /** Initialized data by gateway. */
  data: Maybe<Scalars['JSONString']>;
};

export type PaymentInput = {
  /** A gateway to use with that payment. */
  gateway: Scalars['String'];
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: Maybe<Scalars['String']>;
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: Maybe<Scalars['PositiveDecimal']>;
  /** [Deprecated] Billing address. If empty, the billing address associated with the checkout instance will be used. Use `checkoutCreate` or `checkoutBillingAddressUpdate` mutations to set it. This field will be removed after 2020-07-31. */
  billingAddress?: Maybe<AddressInput>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: Maybe<Scalars['String']>;
};

export type PaymentMethodType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  checkout: CheckoutType;
  prepaidDiscountAmount: Scalars['Float'];
  cashbackDiscountAmount: Scalars['Float'];
  gateway: Scalars['String'];
  useCashback: Scalars['Boolean'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  couponDiscount: Maybe<Scalars['String']>;
};

/** Refunds the captured payment amount. */
export type PaymentRefund = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  /** Payment gateway name. */
  gateway: Scalars['String'];
  /** Stored credit card details if available. */
  creditCardInfo: Maybe<CreditCard>;
};

/** Voids the authorized payment. */
export type PaymentVoid = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type PaytmCreateOrderInput = {
  /** Checkout ID. */
  checkoutId?: Maybe<Scalars['ID']>;
  /** Email of the User. */
  email: Scalars['String'];
};

export type PaytmError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<PaytmErrorCodeEnum>;
};

/** An enumeration. */
export type PaytmErrorCodeEnum =
  | 'INVALID_AMOUNT'
  | 'INVALID_CURRENCY'
  | 'INVALID';

/** Creates an order on Paytm. */
export type PaytmOrderCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Paytm order object. */
  paytmOrder: Maybe<PaytmOrderType>;
  paytmErrors: Array<PaytmError>;
};

export type PaytmOrderType = {
  /** Paytm Txn Token. */
  txnToken: Maybe<Scalars['String']>;
  /** Token status. */
  status: Maybe<Scalars['String']>;
  /** Order ID. */
  orderId: Maybe<Scalars['String']>;
  /** Token creation timestamp. */
  createdAt: Maybe<Scalars['String']>;
  /** Merchant ID */
  merchantId: Maybe<Scalars['String']>;
  /** Callback url */
  callbackUrl: Maybe<Scalars['String']>;
};

export type PayuOrderType = {
  /** PayU Order ID. */
  token: Maybe<Scalars['String']>;
  /** PayU Payment url to use. */
  paymentUrl: Maybe<Scalars['String']>;
  /** Form fields to POST to payment url. */
  payload: Maybe<Scalars['JSONString']>;
};

/** Create a Periodic Task. */
export type PeriodicTaskCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  periodicTask: Maybe<PeriodicTaskType>;
  periodicTaskErrors: Array<PeriodicTaskError>;
};

export type PeriodicTaskCreateInput = {
  /** name of task */
  name: Scalars['String'];
  /** description of task */
  description: Scalars['String'];
  /** name of task with full path */
  task: Scalars['String'];
  /** interval */
  interval?: Maybe<Scalars['Int']>;
  /** Period */
  period?: Maybe<PeriodsForPeriodicTask>;
  /** toggle for task */
  enable?: Maybe<Scalars['Boolean']>;
  /** arguments of the tasks if any */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** key word arguments of the tasks if any */
  kwargs?: Maybe<Scalars['JSONString']>;
  /** Fields required to cron */
  cronInput?: Maybe<CronInput>;
};

/** Delete a Periodic Task. */
export type PeriodicTaskDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  periodicTask: Maybe<PeriodicTaskType>;
  periodicTaskErrors: Array<PeriodicTaskError>;
};

export type PeriodicTaskError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PeriodicTaskErrorCode;
};

/** An enumeration. */
export type PeriodicTaskErrorCode =
  | 'INVALID'
  | 'TASK_NAME_NOT_FOUND'
  | 'TASK_NAME_ALREADY_EXISTS';

export type PeriodicTaskSortOrders =
  | 'ID_ASC'
  | 'ID_DESC';

export type PeriodicTaskType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Short Description For This Task */
  name: Scalars['String'];
  /** The Name of the Celery Task that Should be Run.  (Example: "proj.tasks.import_contacts") */
  task: Scalars['String'];
  /** Interval Schedule to run the task on.  Set only one schedule type, leave the others null. */
  interval: Maybe<IntervalScheduleType>;
  /** Crontab Schedule to run the task on.  Set only one schedule type, leave the others null. */
  crontab: Maybe<CrontabScheduleType>;
  /** JSON encoded positional arguments (Example: ["arg1", "arg2"]) */
  args: Scalars['String'];
  /** JSON encoded keyword arguments (Example: {"argument": "value"}) */
  kwargs: Scalars['String'];
  /** Queue defined in CELERY_TASK_QUEUES. Leave None for default queuing. */
  queue: Maybe<Scalars['String']>;
  /** Override Exchange for low-level AMQP routing */
  exchange: Maybe<Scalars['String']>;
  /** Override Routing Key for low-level AMQP routing */
  routingKey: Maybe<Scalars['String']>;
  /** JSON encoded message headers for the AMQP message. */
  headers: Scalars['String'];
  /** Priority Number between 0 and 255. Supported by: RabbitMQ, Redis (priority reversed, 0 is highest). */
  priority: Maybe<Scalars['Int']>;
  /** Datetime after which the schedule will no longer trigger the task to run */
  expires: Maybe<Scalars['DateTime']>;
  /** Timedelta with seconds which the schedule will no longer trigger the task to run */
  expireSeconds: Maybe<Scalars['Int']>;
  /** If True, the schedule will only run the task a single time */
  oneOff: Scalars['Boolean'];
  /** Datetime when the schedule should begin triggering the task to run */
  startTime: Maybe<Scalars['DateTime']>;
  /** Set to False to disable the schedule */
  enabled: Scalars['Boolean'];
  /** Datetime that the schedule last triggered the task to run. Reset to None if enabled is set to False. */
  lastRunAt: Maybe<Scalars['DateTime']>;
  /** Running count of how many times the schedule has triggered the task */
  totalRunCount: Scalars['Int'];
  /** Datetime that this PeriodicTask was last modified */
  dateChanged: Scalars['DateTime'];
  /** Detailed description about the details of this Periodic Task */
  description: Scalars['String'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

export type PeriodicTaskTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PeriodicTaskTypeEdge>>;
};

/** A Relay edge containing a `PeriodicTaskType` and its cursor. */
export type PeriodicTaskTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<PeriodicTaskType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Update a Periodic Task. */
export type PeriodicTaskUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  periodicTask: Maybe<PeriodicTaskType>;
  periodicTaskErrors: Array<PeriodicTaskError>;
};

/** An enumeration. */
export type PeriodsForPeriodicTask =
  | 'DAYS'
  | 'HOURS'
  | 'MINUTES'
  | 'SECONDS'
  | 'MICROSECONDS';

/** Represents a permission object in a friendly form. */
export type Permission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
};

/** An enumeration. */
export type PermissionEnum =
  | 'MANAGE_USERS'
  | 'MANAGE_STAFF'
  | 'MANAGE_SERVICE_ACCOUNTS'
  | 'MANAGE_APPS'
  | 'MANAGE_DISCOUNTS'
  | 'MANAGE_PLUGINS'
  | 'MANAGE_GIFT_CARD'
  | 'MANAGE_MENUS'
  | 'MANAGE_ORDERS'
  | 'MANAGE_PAGES'
  | 'MANAGE_PRODUCTS'
  | 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES'
  | 'MANAGE_SHIPPING'
  | 'MANAGE_SETTINGS'
  | 'MANAGE_TRANSLATIONS'
  | 'MANAGE_CHECKOUTS';

/** Create new permission group. */
export type PermissionGroupCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name: Scalars['String'];
};

/** Delete permission group. */
export type PermissionGroupDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

export type PermissionGroupError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type PermissionGroupErrorCode =
  | 'ASSIGN_NON_STAFF_MEMBER'
  | 'DUPLICATED_INPUT_ITEM'
  | 'CANNOT_REMOVE_FROM_LAST_GROUP'
  | 'LEFT_NOT_MANAGEABLE_PERMISSION'
  | 'OUT_OF_SCOPE_PERMISSION'
  | 'OUT_OF_SCOPE_USER'
  | 'REQUIRED'
  | 'UNIQUE';

export type PermissionGroupFilterInput = {
  search?: Maybe<Scalars['String']>;
};

export type PermissionGroupSortField =
  /** Sort permission group accounts by name. */
  | 'NAME';

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
};

/** Update permission group. */
export type PermissionGroupUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  permissionGroupErrors: Array<PermissionGroupError>;
  group: Maybe<Group>;
};

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>;
  /** Group name. */
  name?: Maybe<Scalars['String']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: Maybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: Maybe<Array<Scalars['ID']>>;
};

/** Requests for OTP for registered user. */
export type PhoneChange = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Checks whether phone is changed or not */
  successful: Maybe<Scalars['Boolean']>;
  otpErrors: Array<OtpError>;
};

/** Add a new pincode */
export type Pincode = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A pincode instance. */
  pincode: Maybe<PincodeType>;
};

export type PincodeInput = {
  /** Pincode */
  pin: Scalars['String'];
  /** City of the pincode */
  city?: Maybe<Scalars['String']>;
  /** State of the pincode */
  state?: Maybe<Scalars['String']>;
  /** If the pincode is servicable */
  serviceable?: Maybe<Scalars['Boolean']>;
};

export type PincodeType = Node & {
  pin: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  serviceable: Scalars['Boolean'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type PincodeTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PincodeTypeEdge>>;
};

/** A Relay edge containing a `PincodeType` and its cursor. */
export type PincodeTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<PincodeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Plugin. */
export type Plugin = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  active: Scalars['Boolean'];
  configuration: Maybe<Array<Maybe<ConfigurationItem>>>;
};

export type PluginCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<PluginCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
  /** The item at the end of the edge. */
  node: Plugin;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type PluginError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: PluginErrorCode;
};

/** An enumeration. */
export type PluginErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'PLUGIN_MISCONFIGURED'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type PluginFilterInput = {
  active?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
};

export type PluginSortField =
  | 'NAME'
  | 'IS_ACTIVE';

export type PluginSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
};

/** Update plugin configuration. */
export type PluginUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  plugin: Maybe<Plugin>;
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: Maybe<Scalars['Boolean']>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<Maybe<ConfigurationItemInput>>>;
};


export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: Maybe<Scalars['Float']>;
  /** Price less than or equal to. */
  lte?: Maybe<Scalars['Float']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  publicationDate: Maybe<Scalars['Date']>;
  productType: ProductType;
  slug: Scalars['String'];
  category: Maybe<Category>;
  updatedAt: Maybe<Scalars['DateTime']>;
  chargeTaxes: Scalars['Boolean'];
  weight: Maybe<Weight>;
  availableForPurchase: Maybe<Scalars['Date']>;
  visibleInListings: Scalars['Boolean'];
  defaultVariant: Maybe<ProductVariant>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /**
   * The storefront URL for the product.
   * @deprecated This field will be removed after 2020-07-31.
   */
  url: Scalars['String'];
  /** The main thumbnail for a product. */
  thumbnail: Maybe<Image>;
  /** Tags */
  tags: Maybe<Array<Maybe<TagType>>>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<ProductPricingInfo>;
  /** Whether the product is in stock and visible or not. */
  isAvailable: Maybe<Scalars['Boolean']>;
  /** The price of the cheapest variant (including discounts). */
  minimalVariantPrice: Maybe<Money>;
  /** A type of tax. Assigned by enabled tax gateway */
  taxType: Maybe<TaxType>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  purchaseCost: Maybe<MoneyRange>;
  margin: Maybe<Margin>;
  /** Get a single product image by ID. */
  imageById: Maybe<ProductImage>;
  /** List of variants for the product. */
  variants: Maybe<Array<Maybe<ProductVariant>>>;
  /** List of images for the product. */
  images: Maybe<Array<Maybe<ProductImage>>>;
  /** List of collections for the product. */
  collections: Maybe<Array<Maybe<Collection>>>;
  /** Returns translated product fields for the given language code. */
  translation: Maybe<ProductTranslation>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase: Maybe<Scalars['Boolean']>;
  /** Whether the product is published. */
  isPublished: Scalars['Boolean'];
  /**
   * Description of the product.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
};


/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Deletes products. */
export type ProductBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Publish products. */
export type ProductBulkPublish = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Clears public metadata item for product. */
export type ProductClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

/** Clears private metadata item for product. */
export type ProductClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

export type ProductCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new product. */
export type ProductCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Product description (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Product description (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Determines if product is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this product should be tracked. If false, the quantity won't change when customers buy this item. Note: this field is only used if a product doesn't use variants. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Default price for product variant. Note: this field is only used if a product doesn't use variants. */
  basePrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>;
  /** ID of the type that product belongs to. */
  productType: Scalars['ID'];
  /** Stocks of a product available for sale. Note: this field is only used if a product doesn't use variants. */
  stocks?: Maybe<Array<StockInput>>;
};

/** Deletes a product. */
export type ProductDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

/** Duplicates a product. */
export type ProductDuplicate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created product. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductErrorCode;
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ProductErrorCode =
  | 'ALREADY_EXISTS'
  | 'ATTRIBUTE_ALREADY_ASSIGNED'
  | 'ATTRIBUTE_CANNOT_BE_ASSIGNED'
  | 'ATTRIBUTE_VARIANTS_DISABLED'
  | 'DUPLICATED_INPUT_ITEM'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_PRODUCTS_IMAGE'
  | 'NOT_PRODUCTS_VARIANT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'VARIANT_NO_DIGITAL_CONTENT';

export type ProductFieldEnum =
  | 'NAME'
  | 'DESCRIPTION'
  | 'PRODUCT_TYPE'
  | 'CATEGORY'
  | 'VISIBLE'
  | 'AVAILABLE_FOR_PURCHASE'
  | 'SEARCHABLE'
  | 'PRODUCT_WEIGHT'
  | 'COLLECTIONS'
  | 'CHARGE_TAXES'
  | 'PRODUCT_IMAGES'
  | 'VARIANT_SKU'
  | 'VARIANT_PRICE'
  | 'COST_PRICE'
  | 'VARIANT_WEIGHT'
  | 'VARIANT_IMAGES';

export type ProductFilterInput = {
  isPublished?: Maybe<Scalars['Boolean']>;
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hasCategory?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<Array<Maybe<AttributeInput>>>;
  stockAvailability?: Maybe<StockAvailability>;
  productType?: Maybe<Scalars['ID']>;
  stocks?: Maybe<ProductStockFilterInput>;
  search?: Maybe<Scalars['String']>;
  tags?: Maybe<TagsListInput>;
  price?: Maybe<PriceRangeInput>;
  defaultVariantPrice?: Maybe<PriceRangeInput>;
  discount?: Maybe<IntRangeInput>;
  rating?: Maybe<IntRangeInput>;
  minimalPrice?: Maybe<PriceRangeInput>;
  productTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  searchAdmin?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  pincode?: Maybe<Scalars['String']>;
};

/** Represents a product image. */
export type ProductImage = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  sortOrder: Maybe<Scalars['Int']>;
  alt: Scalars['String'];
  /** The URL of the image. */
  url: Scalars['String'];
};


/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Deletes product images. */
export type ProductImageBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductImageCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

export type ProductImageCreateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image: Scalars['Upload'];
  /** ID of an product. */
  product: Scalars['ID'];
};

/** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductImageCreateV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Deletes a product image. */
export type ProductImageDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Changes ordering of the product image. */
export type ProductImageReorder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  images: Maybe<Array<Maybe<ProductImage>>>;
  productErrors: Array<ProductError>;
};

/** Updates a product image. */
export type ProductImageUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

export type ProductImageUpdateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Product description (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Product description (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Determines if product is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Product name. */
  name?: Maybe<Scalars['String']>;
  /** Product slug. */
  slug?: Maybe<Scalars['String']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>;
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this product should be tracked. If false, the quantity won't change when customers buy this item. Note: this field is only used if a product doesn't use variants. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Default price for product variant. Note: this field is only used if a product doesn't use variants. */
  basePrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>;
};

export type ProductOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: Maybe<Scalars['ID']>;
  /** Sort products by the selected field. */
  field?: Maybe<ProductOrderField>;
};

export type ProductOrderField =
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by price. */
  | 'PRICE'
  /** Sort products by a minimal price of a product's variant. */
  | 'MINIMAL_PRICE'
  /** Sort products by default_variant_price. */
  | 'DEFAULT_VARIANT_PRICE'
  /** Sort products by update date. */
  | 'DATE'
  /** Sort products by type. */
  | 'TYPE'
  /** Sort products by publication status. */
  | 'PUBLISHED'
  /** Sort products by publication date. */
  | 'PUBLICATION_DATE'
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  | 'COLLECTION'
  /** Sort products by Search by sold score */
  | 'SEARCH_SOLD_SCORE'
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  | 'STOCK';

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  /** Whether it is in sale or not. */
  onSale: Maybe<Scalars['Boolean']>;
  /** The discount amount if in sale (null otherwise). */
  discount: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency: Maybe<TaxedMoney>;
  /** The discounted price range of the product variants. */
  priceRange: Maybe<TaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted: Maybe<TaxedMoneyRange>;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency: Maybe<TaxedMoneyRange>;
};

export type ProductReviewError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ProductReviewErrorCode;
};

/** An enumeration. */
export type ProductReviewErrorCode =
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'HASH_INVALID';

export type ProductReviewFilterInput = {
  product?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  created?: Maybe<DateRangeInput>;
  isPublished?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<RatingRangeInput>;
  search?: Maybe<Scalars['String']>;
};

/** Create a product_review image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductReviewImageCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productReview: Maybe<ProductReviewType>;
  image: Maybe<ProductReviewImageType>;
  productErrors: Array<ProductError>;
};

export type ProductReviewImageCreateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image: Scalars['Upload'];
  /** ID of a product_review */
  productReview: Scalars['ID'];
};

/** Deletes a product_review image. */
export type ProductReviewImageDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Delete Images from product_review. */
  productReview: Maybe<ProductReviewType>;
  image: Maybe<ProductReviewImageType>;
  productErrors: Array<ProductError>;
};

export type ProductReviewImageType = Node & {
  sortOrder: Maybe<Scalars['Int']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  productReview: ProductReviewType;
  image: Scalars['String'];
  ppoi: Scalars['String'];
  alt: Scalars['String'];
  /** The URL of the image. */
  url: Scalars['String'];
};


export type ProductReviewImageTypeUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ProductReviewImageTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductReviewImageTypeEdge>>;
};

/** A Relay edge containing a `ProductReviewImageType` and its cursor. */
export type ProductReviewImageTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ProductReviewImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Update a product_review image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductReviewImageUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productReview: Maybe<ProductReviewType>;
  image: Maybe<ProductReviewImageType>;
  productErrors: Array<ProductError>;
};

export type ProductReviewInput = {
  /** Product Id */
  productId?: Maybe<Scalars['ID']>;
  /** Name of the user */
  userName?: Maybe<Scalars['String']>;
  /** email of the user */
  userEmail?: Maybe<Scalars['String']>;
  /** phone of the user/reviewer */
  phone?: Maybe<Scalars['String']>;
  /** Title of the product review */
  title?: Maybe<Scalars['String']>;
  /** User review on the product */
  review?: Maybe<Scalars['String']>;
  /** User rating for the product */
  rating: Scalars['Int'];
  /** Toggle view for the review */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Published date for the review */
  publishedDate?: Maybe<Scalars['Date']>;
  /** Is review verified */
  verified?: Maybe<Scalars['Boolean']>;
  /** helpful reviews */
  helpfulRatings?: Maybe<Scalars['Int']>;
  /** helpful reviews */
  encryptedToken?: Maybe<Scalars['String']>;
};

export type ProductReviewOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product reviews by the selected field. */
  field?: Maybe<ProductReviewOrderField>;
};

export type ProductReviewOrderField =
  /** Sort productReviews by  user name. */
  | 'USER_NAME'
  /** Sort productReviews by rating. */
  | 'RATING'
  /** Sort productReviews by products name */
  | 'PRODUCT_NAME'
  /** Sort productReviews by published. */
  | 'PUBLISHED'
  /** Sort productReviews by published date. */
  | 'PUBLICATION_DATE'
  /** Sort productReviews by create date. */
  | 'CREATION_DATE'
  /** Sort productReviews by update date. */
  | 'HELPFUL'
  /** Sort productReviews by publication status. */
  | 'VERIFIED'
  /** Sort productReviews by admin reply */
  | 'ADMIN_REPLY';

export type ProductReviewSortOrders =
  | 'HIGHEST_RATING'
  | 'LOWEST_RATING'
  | 'MOST_HELPFUL'
  | 'LEAST_HELPFUL'
  | 'NEWEST'
  | 'OLDEST'
  | 'PUBLISHED_DATE_NEWEST'
  | 'PUBLISHED_DATE_OLDEST';

export type ProductReviewType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  user: Maybe<User>;
  userName: Maybe<Scalars['String']>;
  userEmail: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  product: Product;
  title: Maybe<Scalars['String']>;
  review: Scalars['String'];
  rating: Scalars['Int'];
  isPublished: Scalars['Boolean'];
  verified: Scalars['Boolean'];
  externalReviewId: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  publishedDate: Maybe<Scalars['DateTime']>;
  updated: Scalars['DateTime'];
  sortOrder: Maybe<Scalars['Int']>;
  adminReply: Scalars['String'];
  helpfulRatings: Scalars['Int'];
  unhelpfulRatings: Scalars['Int'];
  images: ProductReviewImageTypeConnection;
  videos: ProductReviewVideoTypeConnection;
  rated: Maybe<Scalars['String']>;
};


export type ProductReviewTypeImagesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};


export type ProductReviewTypeVideosArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductReviewTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductReviewTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductReviewTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: ProductReviewType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Create a product_review video. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductReviewVideoCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productReview: Maybe<ProductReviewType>;
  video: Maybe<ProductReviewVideoType>;
  productErrors: Array<ProductError>;
};

export type ProductReviewVideoCreateInput = {
  /** Alt text for an video. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an video file in a multipart request. */
  video: Scalars['Upload'];
  /** ID of a product_review */
  productReview: Scalars['ID'];
};

/** Deletes a product_review video. */
export type ProductReviewVideoDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Delete Video from product_review. */
  productReview: Maybe<ProductReviewType>;
  video: Maybe<ProductReviewVideoType>;
  productErrors: Array<ProductError>;
};

export type ProductReviewVideoType = Node & {
  sortOrder: Maybe<Scalars['Int']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  productReview: ProductReviewType;
  video: Scalars['String'];
  alt: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
};


export type ProductReviewVideoTypeUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type ProductReviewVideoTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductReviewVideoTypeEdge>>;
};

/** A Relay edge containing a `ProductReviewVideoType` and its cursor. */
export type ProductReviewVideoTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ProductReviewVideoType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Deletes productReviews. */
export type ProductReviewsBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Set product availability for purchase date. */
export type ProductSetAvailabilityForPurchase = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductStockFilterInput = {
  warehouseIds?: Maybe<Array<Scalars['ID']>>;
  quantity?: Maybe<IntRangeInput>;
};

export type ProductTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /**
   * Description of the product.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
  /** Returns translated product fields for the given language code. */
  translation: Maybe<ProductTranslation>;
  /** Represents an individual item for sale in the storefront. */
  product: Maybe<Product>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Product. */
export type ProductTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  product: Maybe<Product>;
};

export type ProductTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  seoTitle: Maybe<Scalars['String']>;
  seoDescription: Maybe<Scalars['String']>;
  name: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /** Translation language. */
  language: LanguageDisplay;
  /**
   * Translated description of the product.
   * @deprecated Use the `descriptionJson` field instead.
   */
  description: Scalars['String'];
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  hasVariants: Scalars['Boolean'];
  isShippingRequired: Scalars['Boolean'];
  isDigital: Scalars['Boolean'];
  weight: Maybe<Weight>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** List of products of this type. */
  products: Maybe<ProductCountableConnection>;
  /**
   * A type of tax rate.
   * @deprecated Use the TaxType instead. It will be removed in Saleor 3.0.
   */
  taxRate: Maybe<TaxRateType>;
  /** A type of tax. Assigned by enabled tax gateway */
  taxType: Maybe<TaxType>;
  /** Variant attributes of that product type. */
  variantAttributes: Maybe<Array<Maybe<Attribute>>>;
  /** Product attributes of that product type. */
  productAttributes: Maybe<Array<Maybe<Attribute>>>;
  availableAttributes: Maybe<AttributeCountableConnection>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Deletes product types. */
export type ProductTypeBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Clears public metadata for product type. */
export type ProductTypeClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/** Clears private metadata for product type. */
export type ProductTypeClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

export type ProductTypeConfigurable =
  | 'CONFIGURABLE'
  | 'SIMPLE';

export type ProductTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: ProductType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new product type. */
export type ProductTypeCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/** Deletes a product type. */
export type ProductTypeDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

export type ProductTypeEnum =
  | 'DIGITAL'
  | 'SHIPPABLE';

export type ProductTypeFilterInput = {
  search?: Maybe<Scalars['String']>;
  configurable?: Maybe<ProductTypeConfigurable>;
  productType?: Maybe<ProductTypeEnum>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ProductTypeInput = {
  /** Name of the product type. */
  name?: Maybe<Scalars['String']>;
  /** Product type slug. */
  slug?: Maybe<Scalars['String']>;
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: Maybe<Scalars['Boolean']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: Maybe<Scalars['Boolean']>;
  /** Determines if products are digital. */
  isDigital?: Maybe<Scalars['Boolean']>;
  /** Weight of the ProductType items. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>;
};

/** Reorder the attributes of a product type. */
export type ProductTypeReorderAttributes = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Product type from which attributes are reordered. */
  productType: Maybe<ProductType>;
  productErrors: Array<ProductError>;
};

export type ProductTypeSortField =
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by type. */
  | 'DIGITAL'
  /** Sort products by shipping. */
  | 'SHIPPING_REQUIRED';

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
};

/** Updates an existing product type. */
export type ProductTypeUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/** Update public metadata for product type. */
export type ProductTypeUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/** Update private metadata for product type. */
export type ProductTypeUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
};

/** Updates an existing product. */
export type ProductUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

/** Update public metadata for product. */
export type ProductUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

/** Update private metadata for product. */
export type ProductUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  product: Maybe<Product>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  sku: Scalars['String'];
  product: Product;
  trackInventory: Scalars['Boolean'];
  weight: Maybe<Weight>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /**
   * Quantity of a product available for sale.
   * @deprecated Use the stock field instead. This field will be removed after 2020-07-31.
   */
  quantity: Scalars['Int'];
  /**
   * Quantity allocated for orders.
   * @deprecated Use the stock field instead. This field will be removed after 2020-07-31.
   */
  quantityAllocated: Maybe<Scalars['Int']>;
  /**
   * Quantity of a product available for sale.
   * @deprecated Use the quantityAvailable field instead. This field will be removed after 2020-07-31.
   */
  stockQuantity: Scalars['Int'];
  /** Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers. */
  price: Maybe<Money>;
  /** List of tags associated with the product variant */
  tags: Maybe<Array<Maybe<TagType>>>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<VariantPricingInfo>;
  /**
   * Whether the variant is in stock and visible or not.
   * @deprecated Use the stock field instead. This field will be removed after 2020-07-31.
   */
  isAvailable: Maybe<Scalars['Boolean']>;
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** Cost price of the variant. */
  costPrice: Maybe<Money>;
  /** Gross margin percentage value. */
  margin: Maybe<Scalars['Int']>;
  /** Total quantity ordered. */
  quantityOrdered: Maybe<Scalars['Int']>;
  /** Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations. */
  revenue: Maybe<TaxedMoney>;
  /** List of images for the product variant. */
  images: Maybe<Array<Maybe<ProductImage>>>;
  /** Returns translated product variant fields for the given language code. */
  translation: Maybe<ProductVariantTranslation>;
  /** Digital content for the product variant. */
  digitalContent: Maybe<DigitalContent>;
  /** Stocks for the product variant. */
  stocks: Maybe<Array<Maybe<Stock>>>;
  /** Quantity of a product available for sale in one checkout. */
  quantityAvailable: Scalars['Int'];
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: Maybe<ReportingPeriod>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  countryCode?: Maybe<CountryCode>;
};


/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  countryCode?: Maybe<CountryCode>;
};

/** Creates product variants for a given product. */
export type ProductVariantBulkCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were created. */
  count: Scalars['Int'];
  /** List of the created variants. */
  productVariants: Array<ProductVariant>;
  bulkProductErrors: Array<BulkProductError>;
};

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<Maybe<AttributeValueInput>>;
  /** Cost price of the variant. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Price of the particular variant. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Stock keeping unit. */
  sku: Scalars['String'];
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
};

/** Deletes product variants. */
export type ProductVariantBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  productErrors: Array<ProductError>;
};

/** Updates a list ProductVariant quantities  */
export type ProductVariantBulkUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A list of updated quantities of respective productVariants in respective warehouses */
  productVariants: Maybe<Array<Maybe<ProductVariant>>>;
};

/** Clears public metadata for product variant. */
export type ProductVariantClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/** Clears private metadata for product variant. */
export type ProductVariantClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ProductVariantCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
  /** The item at the end of the edge. */
  node: ProductVariant;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new variant for a product. */
export type ProductVariantCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<Maybe<AttributeValueInput>>;
  /** Cost price of the variant. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Price of the particular variant. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID'];
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>;
};

/** Deletes a product variant. */
export type ProductVariantDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantFilterInput = {
  search?: Maybe<Scalars['String']>;
  sku?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<TagsListInput>;
};

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: Maybe<Array<Maybe<AttributeValueInput>>>;
  /** Cost price of the variant. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Price of the particular variant. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>;
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>;
};

/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
export type ProductVariantReorder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
};

/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
export type ProductVariantSetDefault = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
};

/** Creates stocks for product variant. */
export type ProductVariantStocksCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  bulkStockErrors: Array<BulkStockError>;
};

/** Delete stocks from product variant. */
export type ProductVariantStocksDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  stockErrors: Array<StockError>;
};

/** Update stocks for product variant. */
export type ProductVariantStocksUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  bulkStockErrors: Array<BulkStockError>;
};

export type ProductVariantTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated product variant fields for the given language code. */
  translation: Maybe<ProductVariantTranslation>;
  /** Represents a version of a product such as different size or color. */
  productVariant: Maybe<ProductVariant>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Product Variant. */
export type ProductVariantTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  productVariant: Maybe<ProductVariant>;
};

export type ProductVariantTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

/** Updates an existing variant for product. */
export type ProductVariantUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/** Update public metadata for product variant. */
export type ProductVariantUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/** Update private metadata for product variant. */
export type ProductVariantUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
};

/** Push or sync all unsynced orders to wareiq */
export type PushAllToWareIq = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** List of pushed orders. */
  pushedOrders: Maybe<Array<Maybe<Order>>>;
  /** List of pushed orders. */
  failedOrders: Maybe<Array<Maybe<Order>>>;
  orderErrors: Array<OrderError>;
};

/** Upload list of risk orders. */
export type PushRiskOrderCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  sectionErrors: Array<SectionError>;
};

/** Push or sync an order to wareiq */
export type PushToWareIq = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated order instance. */
  order: Maybe<Order>;
  /** Action that occured. (push/sync) */
  action: Maybe<Scalars['String']>;
  orderErrors: Array<OrderError>;
};

export type Query = {
  _entities: Maybe<Array<Maybe<_Entity>>>;
  _service: Maybe<_Service>;
  /** Look up an address by ID. */
  address: Maybe<Address>;
  addressByPhone: Maybe<AddressCountableConnection>;
  addressType: Maybe<AddressLinkType>;
  /** Returns address validation rules. */
  addressValidationRules: Maybe<AddressValidationData>;
  /** Look up a API call with id. */
  apiCall: Maybe<ApiCallsType>;
  apiCalls: Maybe<ApiCallsTypeCountableConnection>;
  /** Look up a app by ID. */
  app: Maybe<App>;
  /** List of the apps. */
  apps: Maybe<AppCountableConnection>;
  /** List of all apps installations */
  appsInstallations: Array<AppInstallation>;
  archiveOrder: Maybe<ArchiveOrderType>;
  /** List of orders. */
  archiveOrders: Maybe<ArchiveOrderTypeConnection>;
  /** Look up an attribute by ID. */
  attribute: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes: Maybe<AttributeCountableConnection>;
  authenticated: Scalars['Boolean'];
  authenticating: Scalars['Boolean'];
  banners: Maybe<CustomBannerTypeConnection>;
  bulkAction: Maybe<BulkActionCsvLogsTypeCountableConnection>;
  cartItems: Maybe<CheckoutLine>;
  cashback: Maybe<CashbackType>;
  /** List of the shop's categories. */
  categories: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category: Maybe<Category>;
  /** Look up a checkout by token. */
  checkout: Maybe<Checkout>;
  checkoutDiscounts: Maybe<DiscountsType>;
  /** Look up a checkout line by ID. */
  checkoutLine: Maybe<CheckoutLine>;
  /** List of checkout lines. */
  checkoutLines: Maybe<CheckoutLineCountableConnection>;
  checkoutLoading: Scalars['Boolean'];
  checkoutTotals: Maybe<CheckoutTotalsType>;
  checkoutUpdated: Scalars['Boolean'];
  /** List of checkouts. */
  checkouts: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. */
  collection: Maybe<Collection>;
  /** List of the shop's collections. */
  collections: Maybe<CollectionCountableConnection>;
  combos: Maybe<ComboTypeConnection>;
  contactUs: Maybe<ContactUsTypeConnection>;
  couponDiscount: Maybe<CouponDiscountType>;
  /** List of the shop's customers. */
  customers: Maybe<UserCountableConnection>;
  deliveryDate: Maybe<Scalars['JSONString']>;
  deliverySchedule: Maybe<DeliverySchedulerTypeConnection>;
  /** List of the Delivery Schedules. */
  deliverySchedules: Maybe<DeliverySchedulerTypeConnection>;
  /** List of the Delivery Schedules. */
  deliverySchedulesByPincode: Maybe<DeliverySchedulerTypeConnection>;
  /** Look up digital content by ID. */
  digitalContent: Maybe<DigitalContent>;
  /** List of digital content. */
  digitalContents: Maybe<DigitalContentCountableConnection>;
  /** List of draft orders. */
  draftOrders: Maybe<OrderCountableConnection>;
  /** List of cancel reasons */
  dtcCancelReason: Maybe<Array<Maybe<Scalars['String']>>>;
  dtcEligibleForCancelOrReturn: Maybe<DtcEligibleType>;
  dtcReturnProduct: Maybe<DtcReturnProductType>;
  /** List of return reasons */
  dtcReturnReason: Maybe<Array<Maybe<Scalars['String']>>>;
  dtcTracking: Maybe<DtcTrackingType>;
  /** Look up a Email Template by ID. */
  emailTemplate: Maybe<EmailTemplateType>;
  emailTemplates: Maybe<EmailTemplateTypeCountableConnection>;
  /** Look up a export file by ID. */
  exportFile: Maybe<ExportFile>;
  /** List of export files. */
  exportFiles: Maybe<ExportFileCountableConnection>;
  exportOrders: Maybe<OrderCountableConnection>;
  /** List of Failed Orders. */
  failedOrders: Maybe<FailedOrderConnection>;
  filterCheckouts: Maybe<CheckoutTypeCountableConnection>;
  freeCheckoutLines: Maybe<Array<Maybe<CheckoutLine>>>;
  genericFormName: Maybe<Array<Maybe<FormNameType>>>;
  genericForms: Maybe<GenericFormTypeConnection>;
  /** Look up a gift card by ID. */
  giftCard: Maybe<GiftCard>;
  /** List of gift cards. */
  giftCards: Maybe<GiftCardCountableConnection>;
  /** Search Value for global search. */
  globalSearch: Maybe<GlobalSearchType>;
  gokwikRtoPredict: Maybe<GokwikType>;
  headers: Maybe<HeaderTypeConnection>;
  /** List of activity events to display on homepage (at the moment it only contains order-events). */
  homepageEvents: Maybe<OrderEventCountableConnection>;
  hostings: Maybe<HostingTypeConnection>;
  influencer: Maybe<InfluencerTypeConnection>;
  localCashback: Maybe<CashbackType>;
  localCheckout: Maybe<Checkout>;
  localCheckoutDiscounts: Maybe<DiscountsType>;
  /** Return the currently authenticated user. */
  me: Maybe<User>;
  /** Look up a navigation menu by ID or name. */
  menu: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem: Maybe<MenuItem>;
  /** Look up a menu item by ID. */
  menuItemV2: Maybe<MenuItemV2>;
  /** List of the storefronts's menu items. */
  menuItems: Maybe<MenuItemCountableConnection>;
  /** List of the storefronts's menu items. */
  menuItemsV2: Maybe<MenuItemV2CountableConnection>;
  /** Look up a navigation menuV2 by ID or name. */
  menuV2: Maybe<MenuV2>;
  /** List of the storefront's menus. */
  menus: Maybe<MenuCountableConnection>;
  /** List of the storefront's menus. */
  menusV2: Maybe<MenuV2CountableConnection>;
  /** Look up an order by ID. */
  order: Maybe<Order>;
  /** Look up an order by token. */
  orderByToken: Maybe<Order>;
  orderStatus: Maybe<CustomOrderStatus>;
  /** List of orders. */
  orders: Maybe<OrderCountableConnection>;
  /** Return the total sales amount from a specific period. */
  ordersTotal: Maybe<TaxedMoney>;
  /** Return the total sales amount from a specific period. */
  ordersTotalv2: Maybe<TaxedMoney>;
  /** List of orders and their count. */
  ordersV2: Maybe<OrderCountableConnection>;
  /** Look up a page by ID or slug. */
  page: Maybe<Page>;
  /** Look up a page by ID or slug. */
  pageSlugs: Maybe<Array<Maybe<Page>>>;
  /** List of the shop's pages. */
  pages: Maybe<PageCountableConnection>;
  /** Look up a Partner by ID. */
  partner: Maybe<PartnerType>;
  /** Look up a Partner Coupon by ID. */
  partnerCoupon: Maybe<PartnerCouponType>;
  /** Look up a Partner Coupon by ID. */
  partnerCouponCustomer: Maybe<PartnerCouponCustomerType>;
  partnerCouponCustomers: Maybe<PartnerCouponCustomerTypeConnection>;
  partnerCoupons: Maybe<PartnerCouponTypeConnection>;
  partners: Maybe<PartnerTypeConnection>;
  /** Look up a payment by ID. */
  payment: Maybe<Payment>;
  /** List of payments. */
  payments: Maybe<PaymentCountableConnection>;
  /** Look up a Periodic Task by ID. */
  periodicTask: Maybe<PeriodicTaskType>;
  periodicTasks: Maybe<PeriodicTaskTypeConnection>;
  /** Look up permission group by ID. */
  permissionGroup: Maybe<Group>;
  /** List of permission groups. */
  permissionGroups: Maybe<GroupCountableConnection>;
  pincode: Maybe<PincodeType>;
  pincodes: Maybe<PincodeTypeConnection>;
  /** Look up a plugin by ID. */
  plugin: Maybe<Plugin>;
  /** List of plugins. */
  plugins: Maybe<PluginCountableConnection>;
  /** Look up a product by ID. */
  product: Maybe<Product>;
  productOffers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Look up a product review by ID. */
  productReview: Maybe<ProductReviewType>;
  productReviews: Maybe<ProductReviewTypeCountableConnection>;
  productReviewsAll: Maybe<ProductReviewTypeCountableConnection>;
  /** Look up a productVariant by sku. */
  productSkus: Maybe<Array<Maybe<ProductVariant>>>;
  /** Look up a product type by ID. */
  productType: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. */
  productVariant: Maybe<ProductVariant>;
  /** List of product variants. */
  productVariants: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. */
  products: Maybe<ProductCountableConnection>;
  recentOrder: Maybe<Order>;
  /** List of top selling products. */
  reportProductSales: Maybe<ProductVariantCountableConnection>;
  /** Look up a product review by User ID. */
  reviewByUser: Maybe<ProductReviewTypeCountableConnection>;
  /** Look up a sale by ID. */
  sale: Maybe<Sale>;
  /** List of the shop's sales. */
  sales: Maybe<SaleCountableConnection>;
  searchWithSearchtap: Maybe<ProductCountableConnection>;
  section: Maybe<SectionTypeCountableConnection>;
  /** List of the shop's sections. */
  sections: Maybe<SectionTypeCountableConnection>;
  /**
   * Look up a service account by ID.
   * @deprecated Use the `app` query instead. This field will be removed after 2020-07-31.
   */
  serviceAccount: Maybe<ServiceAccount>;
  /**
   * List of the service accounts.
   * @deprecated Use the `apps` query instead. This field will be removed after 2020-07-31.
   */
  serviceAccounts: Maybe<ServiceAccountCountableConnection>;
  shipment: Maybe<ShipmentTypeConnection>;
  /** List of the Shipments. */
  shipments: Maybe<ShipmentTypeConnection>;
  /** Look up a shipping zone by ID. */
  shippingZone: Maybe<ShippingZone>;
  /** Shipping zone for a pincode */
  shippingZoneByPincode: Maybe<DeliveryShippingZoneType>;
  /** List of the shop's shipping zones. */
  shippingZones: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  shopifyGiftCard: Maybe<ShopifyGiftCardType>;
  shopifyUser: Maybe<Array<Maybe<ShopifyUserType>>>;
  shopifyUserOrders: Maybe<Array<Maybe<ShopifyOrderType>>>;
  shopmeta: Maybe<ShopMetaTypeConnection>;
  /** List of the shop's staff users. */
  staffUsers: Maybe<UserCountableConnection>;
  /** Look up a stock by ID */
  stock: Maybe<Stock>;
  /** List of stocks. */
  stocks: Maybe<StockCountableConnection>;
  subscriptions: Maybe<SubscriptionTypeConnection>;
  /** Look up a Survey by ID. */
  survey: Maybe<SurveyType>;
  /** Look up a Survey by ID. */
  surveyFill: Maybe<SurveyFillType>;
  surveys: Maybe<SurveyTypeConnection>;
  /** List of all tax rates available from tax gateway. */
  taxTypes: Maybe<Array<Maybe<TaxType>>>;
  translation: Maybe<TranslatableItem>;
  /** Returns a list of all translatable items of a given kind. */
  translations: Maybe<TranslatableItemConnection>;
  useCashback: Scalars['Boolean'];
  /** Look up a user by ID. */
  user: Maybe<User>;
  userExists: Maybe<UserExistsType>;
  userWalletBalance: Scalars['Float'];
  users: Maybe<User>;
  /** Look up a voucher by ID. */
  voucher: Maybe<Voucher>;
  voucherRule: Maybe<VoucherRuleTypeConnection>;
  voucherRuleLink: Maybe<VoucherRuleLinkTypeConnection>;
  /** List of the shop's vouchers. */
  vouchers: Maybe<VoucherCountableConnection>;
  wallet: Maybe<WalletType>;
  /** Look up a warehouse by ID. */
  warehouse: Maybe<Warehouse>;
  /** List of warehouses. */
  warehouses: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. */
  webhook: Maybe<Webhook>;
  /** List of all available webhook events. */
  webhookEvents: Maybe<Array<Maybe<WebhookEvent>>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload: Maybe<Scalars['JSONString']>;
  /**
   * List of webhooks.
   * @deprecated Use webhooks field on app(s) query instead. This field will be removed after 2020-07-31.
   */
  webhooks: Maybe<WebhookCountableConnection>;
  wishlist: Maybe<Wishlist>;
};


export type Query_EntitiesArgs = {
  representations?: Maybe<Array<Maybe<Scalars['_Any']>>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressByPhoneArgs = {
  phone: Scalars['String'];
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAddressTypeArgs = {
  addressId: Scalars['ID'];
};


export type QueryAddressValidationRulesArgs = {
  countryCode: CountryCode;
  countryArea?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  cityArea?: Maybe<Scalars['String']>;
};


export type QueryApiCallArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryApiCallsArgs = {
  filter?: Maybe<ApiCallsFilterInput>;
  sortBy?: Maybe<ApiCallsSortType>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAppArgs = {
  id: Scalars['ID'];
};


export type QueryAppsArgs = {
  filter?: Maybe<AppFilterInput>;
  sortBy?: Maybe<AppSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryArchiveOrderArgs = {
  id: Scalars['ID'];
};


export type QueryArchiveOrdersArgs = {
  sortBy?: Maybe<ArchiveOrderSortingInput>;
  filter?: Maybe<ArchiveOrderFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAttributeArgs = {
  id: Scalars['ID'];
};


export type QueryAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>;
  sortBy?: Maybe<AttributeSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBannersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryBulkActionArgs = {
  filter?: Maybe<BulkActionCsvLogsFilterInput>;
  sortBy?: Maybe<BulkActionCsvLogsSortType>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCashbackArgs = {
  checkoutToken?: Maybe<Scalars['UUID']>;
  orderToken?: Maybe<Scalars['UUID']>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilterInput>;
  sortBy?: Maybe<CategorySortingInput>;
  level?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryCheckoutArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCheckoutDiscountsArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCheckoutLineArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCheckoutLinesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCheckoutTotalsArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCheckoutsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  filter?: Maybe<CollectionFilterInput>;
  sortBy?: Maybe<CollectionSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCombosArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  variant?: Maybe<Scalars['ID']>;
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryContactUsArgs = {
  id?: Maybe<Scalars['ID']>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<ContactUsOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  queryType?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_Lte?: Maybe<Scalars['DateTime']>;
  createdAt_Gte?: Maybe<Scalars['DateTime']>;
};


export type QueryCouponDiscountArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryCustomersArgs = {
  filter?: Maybe<CustomerFilterInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDeliveryDateArgs = {
  orderId?: Maybe<Scalars['ID']>;
};


export type QueryDeliveryScheduleArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  warehouse?: Maybe<Scalars['String']>;
};


export type QueryDeliverySchedulesArgs = {
  warehouse?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDeliverySchedulesByPincodeArgs = {
  pincode?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID'];
};


export type QueryDigitalContentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDraftOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderDraftFilterInput>;
  created?: Maybe<ReportingPeriod>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryDtcEligibleForCancelOrReturnArgs = {
  orderNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  customerId?: Maybe<Scalars['String']>;
};


export type QueryDtcReturnProductArgs = {
  orderId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
};


export type QueryDtcTrackingArgs = {
  orderId?: Maybe<Scalars['String']>;
  awb?: Maybe<Scalars['String']>;
};


export type QueryEmailTemplateArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
  sortBy?: Maybe<EmailTemplateOrder>;
  filter?: Maybe<EmailTemplateFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID'];
};


export type QueryExportFilesArgs = {
  filter?: Maybe<ExportFileFilterInput>;
  sortBy?: Maybe<ExportFileSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExportOrdersArgs = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  wareiqStatus?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryFailedOrdersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryFilterCheckoutsArgs = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  quantityGte?: Maybe<Scalars['Int']>;
  emailNe?: Maybe<Scalars['String']>;
  paymentsToken?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryFreeCheckoutLinesArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryGenericFormNameArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGenericFormsArgs = {
  filter?: Maybe<GenericFormFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID'];
};


export type QueryGiftCardsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGlobalSearchArgs = {
  search?: Maybe<Scalars['String']>;
  outputType?: Maybe<Scalars['String']>;
};


export type QueryGokwikRtoPredictArgs = {
  checkoutId?: Maybe<Scalars['String']>;
};


export type QueryHeadersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryHomepageEventsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryHostingsArgs = {
  sortBy?: Maybe<HostingOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryInfluencerArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type QueryMeArgs = {
  source?: Maybe<Scalars['String']>;
};


export type QueryMenuArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID'];
};


export type QueryMenuItemV2Args = {
  id: Scalars['ID'];
};


export type QueryMenuItemsArgs = {
  sortBy?: Maybe<MenuItemSortingInput>;
  filter?: Maybe<MenuItemFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenuItemsV2Args = {
  sortBy?: Maybe<MenuItemSortingInput>;
  filter?: Maybe<MenuItemFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenuV2Args = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryMenusArgs = {
  sortBy?: Maybe<MenuSortingInput>;
  filter?: Maybe<MenuFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMenusV2Args = {
  sortBy?: Maybe<MenuSortingInput>;
  filter?: Maybe<MenuFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID'];
};


export type QueryOrderStatusArgs = {
  token?: Maybe<Scalars['UUID']>;
};


export type QueryOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderFilterInput>;
  created?: Maybe<ReportingPeriod>;
  status?: Maybe<OrderStatusFilter>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryOrdersTotalArgs = {
  period?: Maybe<ReportingPeriod>;
};


export type QueryOrdersTotalv2Args = {
  period?: Maybe<ReportingPeriodV2>;
};


export type QueryOrdersV2Args = {
  sortBy?: Maybe<OrderSortingInput>;
  filter?: Maybe<OrderFilterInput>;
  created?: Maybe<ReportingPeriodV2>;
  status?: Maybe<OrderStatusFilter>;
  period?: Maybe<ReportingPeriodV2>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPageArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPageSlugsArgs = {
  slug: Array<Maybe<Scalars['String']>>;
};


export type QueryPagesArgs = {
  sortBy?: Maybe<PageSortingInput>;
  filter?: Maybe<PageFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPartnerArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPartnerCouponArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPartnerCouponCustomerArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPartnerCouponCustomersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  partner?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryPartnerCouponsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  partner?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryPartnersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  minSpentAmount?: Maybe<Scalars['Float']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPeriodicTaskArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPeriodicTasksArgs = {
  sort?: Maybe<PeriodicTaskSortOrders>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionGroupsArgs = {
  filter?: Maybe<PermissionGroupFilterInput>;
  sortBy?: Maybe<PermissionGroupSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPincodeArgs = {
  pin?: Maybe<Scalars['String']>;
};


export type QueryPincodesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  pin?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  serviceable?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};


export type QueryPluginArgs = {
  id: Scalars['ID'];
};


export type QueryPluginsArgs = {
  filter?: Maybe<PluginFilterInput>;
  sortBy?: Maybe<PluginSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  filter?: Maybe<ProductFilterInput>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProductOffersArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type QueryProductReviewArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryProductReviewsArgs = {
  product?: Maybe<Scalars['ID']>;
  productSlug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Int']>;
  pictures?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<ProductReviewSortOrders>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductReviewsAllArgs = {
  filter?: Maybe<ProductReviewFilterInput>;
  sortBy?: Maybe<ProductReviewOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductSkusArgs = {
  sku: Array<Maybe<Scalars['String']>>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID'];
};


export type QueryProductTypesArgs = {
  filter?: Maybe<ProductTypeFilterInput>;
  sortBy?: Maybe<ProductTypeSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductVariantArgs = {
  id?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
};


export type QueryProductVariantsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  filter?: Maybe<ProductVariantFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductFilterInput>;
  sortBy?: Maybe<ProductOrder>;
  stockAvailability?: Maybe<StockAvailability>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReportProductSalesArgs = {
  period: ReportingPeriod;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryReviewByUserArgs = {
  user?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySaleArgs = {
  id: Scalars['ID'];
};


export type QuerySalesArgs = {
  filter?: Maybe<SaleFilterInput>;
  sortBy?: Maybe<SaleSortingInput>;
  query?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySearchWithSearchtapArgs = {
  searchTerm?: Maybe<Scalars['String']>;
  input?: Maybe<SearchtapInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySectionArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
};


export type QuerySectionsArgs = {
  filter?: Maybe<SectionFilterInput>;
  sortBy?: Maybe<SectionsSortType>;
  level?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryServiceAccountArgs = {
  id: Scalars['ID'];
};


export type QueryServiceAccountsArgs = {
  filter?: Maybe<ServiceAccountFilterInput>;
  sortBy?: Maybe<ServiceAccountSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryShipmentArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  shipmentId?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ID']>;
};


export type QueryShipmentsArgs = {
  shopifyStoreId?: Maybe<Scalars['String']>;
  shopifyOrderId?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
};


export type QueryShippingZoneByPincodeArgs = {
  pincode: Scalars['String'];
};


export type QueryShippingZonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryShopifyGiftCardArgs = {
  giftCard?: Maybe<Scalars['String']>;
};


export type QueryShopifyUserArgs = {
  userId?: Maybe<Scalars['ID']>;
  userHash?: Maybe<Scalars['String']>;
};


export type QueryShopifyUserOrdersArgs = {
  userId?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['ID']>;
};


export type QueryShopmetaArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryStaffUsersArgs = {
  filter?: Maybe<StaffUserInput>;
  sortBy?: Maybe<UserSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStockArgs = {
  id: Scalars['ID'];
};


export type QueryStocksArgs = {
  filter?: Maybe<StockFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySubscriptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type QuerySurveyArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QuerySurveyFillArgs = {
  id?: Maybe<Scalars['ID']>;
  surveyHash?: Maybe<Scalars['String']>;
};


export type QuerySurveysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shown?: Maybe<Scalars['Boolean']>;
  attempted?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  kind: TranslatableKinds;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserExistsArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type QueryVoucherArgs = {
  id: Scalars['ID'];
};


export type QueryVoucherRuleArgs = {
  filter?: Maybe<VoucherRuleFilterInput>;
  sortBy?: Maybe<VoucherRuleOrder>;
  id?: Maybe<Scalars['ID']>;
  discountType?: Maybe<DiscountType>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryVoucherRuleLinkArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  rule?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryVouchersArgs = {
  filter?: Maybe<VoucherFilterInput>;
  sortBy?: Maybe<VoucherSortingInput>;
  query?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWalletArgs = {
  userId?: Maybe<Scalars['ID']>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
  filter?: Maybe<WarehouseFilterInput>;
  sortBy?: Maybe<WarehouseSortingInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};


export type QueryWebhooksArgs = {
  sortBy?: Maybe<WebhookSortingInput>;
  filter?: Maybe<WebhookFilterInput>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Rate existing product review as helpul or unhelpful */
export type RateProductReview = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

export type RatingRangeInput = {
  /** Min Rating */
  gte?: Maybe<Scalars['String']>;
  /** Max Rating */
  lte?: Maybe<Scalars['String']>;
};

export type RazorpayCreateOrderInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
};

export type RazorpayError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<RazorpayErrorCodeEnum>;
};

/** An enumeration. */
export type RazorpayErrorCodeEnum =
  | 'INVALID_AMOUNT'
  | 'INVALID_CURRENCY'
  | 'INVALID';

export type RazorpayOrderType = {
  /** Razorpay Order ID. */
  id: Maybe<Scalars['String']>;
  /** Total order amount. */
  amount: Maybe<Scalars['Decimal']>;
  /** Amount paid for the order. */
  amountPaid: Maybe<Scalars['Decimal']>;
  /** Amount due for the order. */
  amountDue: Maybe<Scalars['Decimal']>;
  /** Amount currency. */
  currency: Maybe<Scalars['String']>;
  /** Order status. */
  status: Maybe<Scalars['String']>;
  /** Order creation timestamp. */
  createdAt: Maybe<Scalars['Int']>;
};

/** Creates checkout from an existing order */
export type ReOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** checkout with checkout items */
  checkout: Maybe<Checkout>;
  reorderErrors: Array<ReOrderError>;
};

export type ReOrderError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<ReOrderErrorCodeEnum>;
};

/** An enumeration. */
export type ReOrderErrorCodeEnum =
  | 'INVALID'
  | 'PINCODE_MISMATCHED';

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float'];
  /** A type of goods. */
  rateType: TaxRateType;
};

/** Creates Refer Hash for user. */
export type ReferAFriend = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Hash created for the refrer. */
  referHash: Maybe<Scalars['String']>;
  accountErrors: Array<AccountError>;
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Remove list of RTO customers. */
export type RemoveRtoCustomersListCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  sectionErrors: Array<SectionError>;
};

/** Updates tags of the object. */
export type RemoveTags = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success Message */
  message: Maybe<Scalars['String']>;
  tagErrors: Array<TagError>;
};

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>;
};

export type ReportingPeriod =
  | 'TODAY'
  | 'THIS_MONTH';

export type ReportingPeriodV2 =
  | 'TODAY'
  | 'YESTERDAY'
  | 'THIS_WEEK'
  | 'THIS_MONTH'
  | 'THIS_QUARTER'
  | 'THIS_YEAR';

/** Request email change of the logged in user. */
export type RequestEmailChange = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Requests for OTP for registered user. */
export type RequestOtp = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success messsage signifying an OTP has been sent to user's phone. */
  message: Maybe<Scalars['String']>;
  otpErrors: Array<OtpError>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
};

/** An enumeration. */
export type ReviewRatingType =
  | 'HELPFUL'
  | 'UNHELPFUL'
  | 'UNMARK_HELPFUL'
  | 'UNMARK_UNHELPFUL';

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  type: SaleType;
  value: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  /** List of categories this sale applies to. */
  categories: Maybe<CategoryCountableConnection>;
  /** List of collections this sale applies to. */
  collections: Maybe<CollectionCountableConnection>;
  /** List of products this sale applies to. */
  products: Maybe<ProductCountableConnection>;
  /** Returns translated sale fields for the given language code. */
  translation: Maybe<SaleTranslation>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Adds products, categories, collections to a voucher. */
export type SaleAddCatalogues = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
  discountErrors: Array<DiscountError>;
};

/** Deletes sales. */
export type SaleBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  discountErrors: Array<DiscountError>;
};

export type SaleCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<SaleCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
  /** The item at the end of the edge. */
  node: Sale;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new sale. */
export type SaleCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

/** Deletes a sale. */
export type SaleDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

export type SaleFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
  saleType?: Maybe<DiscountValueTypeEnum>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type SaleInput = {
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Fixed or percentage. */
  type?: Maybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: Maybe<Scalars['PositiveDecimal']>;
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
};

/** Removes products, categories, collections from a sale. */
export type SaleRemoveCatalogues = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
  discountErrors: Array<DiscountError>;
};

export type SaleSortField =
  /** Sort sales by name. */
  | 'NAME'
  /** Sort sales by start date. */
  | 'START_DATE'
  /** Sort sales by end date. */
  | 'END_DATE'
  /** Sort sales by value. */
  | 'VALUE'
  /** Sort sales by type. */
  | 'TYPE';

export type SaleSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort sales by the selected field. */
  field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated sale fields for the given language code. */
  translation: Maybe<SaleTranslation>;
  /** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
  sale: Maybe<Sale>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/updates translations for a sale. */
export type SaleTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  sale: Maybe<Sale>;
};

export type SaleTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Translation language. */
  language: LanguageDisplay;
};

/** An enumeration. */
export type SaleType =
  /** INR */
  | 'FIXED'
  /** % */
  | 'PERCENTAGE';

/** Updates a sale. */
export type SaleUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  sale: Maybe<Sale>;
};

export type SaleorVoucherInput = {
  /** boolean value for coupon code */
  discountWithoutCoupon?: Maybe<Scalars['Boolean']>;
  /** id of the draft order */
  orderId: Scalars['ID'];
  /** voucher code */
  code?: Maybe<Scalars['String']>;
  /** type of discount */
  discountType?: Maybe<DiscountAmountType>;
  discountAmount: Scalars['Int'];
};

/** Seachtap Search Input. */
export type SearchtapInput = {
  /** Fields List */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text Facets List */
  textFacets?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Highlight Fields List */
  highlightFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Search Fields List */
  searchFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter List */
  filter?: Maybe<Scalars['String']>;
  /** Sort List */
  sort?: Maybe<Scalars['String']>;
  /** Skip */
  skip?: Maybe<Scalars['Int']>;
  /** Count */
  count?: Maybe<Scalars['Int']>;
  /** Collection */
  collection?: Maybe<Scalars['String']>;
  /** Facet Count */
  facetCount?: Maybe<Scalars['Int']>;
  /** Group Count */
  groupCount?: Maybe<Scalars['Int']>;
  /** Typo Tolerance */
  typoTolerance?: Maybe<Scalars['Int']>;
  /** Text Facet Filters Color */
  textFacetFiltersColor?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text Facet Filters Product Type */
  textFacetFiltersProductType?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text Facet Filters Earphone Type */
  textFacetFiltersEarphoneType?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Numeric Facets */
  numericFacets?: Maybe<Scalars['JSONString']>;
  /** Numeric Facet Filters */
  numericFacetFilters?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text Facet Query */
  textFacetQuery?: Maybe<Scalars['String']>;
  /** Geo */
  geo?: Maybe<Scalars['JSONString']>;
};

/** Adds products to a section. */
export type SectionAddProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Add Products to Section. */
  section: Maybe<SectionType>;
  sectionErrors: Array<SectionError>;
};

/** Deletes sections. */
export type SectionBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  sectionErrors: Array<SectionError>;
};

/** Creates a new section. */
export type SectionCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  sectionErrors: Array<SectionError>;
  section: Maybe<SectionType>;
};

/** Deletes a section. */
export type SectionDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  sectionErrors: Array<SectionError>;
  section: Maybe<SectionType>;
};

export type SectionError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: SectionErrorCode;
};

/** An enumeration. */
export type SectionErrorCode =
  | 'INVALID'
  | 'REQUIRED'
  | 'NOT_SECTIONS_IMAGE';

export type SectionFilterInput = {
  name?: Maybe<Scalars['String']>;
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isPublished?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Create a product image. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type SectionImageCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Add Images to Section. */
  section: Maybe<SectionType>;
  image: Maybe<SectionImageType>;
  sectionErrors: Array<SectionError>;
};

export type SectionImageCreateInput = {
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>;
  /** Represents an image file in a multipart request. */
  image: Scalars['Upload'];
  /** ID of an section. */
  section: Scalars['ID'];
};

/** Deletes a section image. */
export type SectionImageDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Delete Images from Section. */
  section: Maybe<SectionType>;
  image: Maybe<SectionImageType>;
  sectionErrors: Array<SectionError>;
};

/** Changes ordering of the section image. */
export type SectionImageReorder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Delete Images from Section. */
  section: Maybe<SectionType>;
  images: Maybe<Array<Maybe<SectionImageType>>>;
  sectionErrors: Array<SectionError>;
};

export type SectionImageType = Node & {
  sortOrder: Maybe<Scalars['Int']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  section: SectionType;
  images: Scalars['String'];
  ppoi: Scalars['String'];
  alt: Scalars['String'];
  /** The URL of the image. */
  url: Scalars['String'];
};


export type SectionImageTypeUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

export type SectionImageTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SectionImageTypeEdge>>;
};

/** A Relay edge containing a `SectionImageType` and its cursor. */
export type SectionImageTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SectionImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SectionInput = {
  /** Informs whether a section is published. */
  isPublished?: Maybe<Scalars['Boolean']>;
  /** Name of the section. */
  name?: Maybe<Scalars['String']>;
  /** List of IDs of collections to be added to the section. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** List of IDs of categories to be added to the section. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Description of the section (HTML/text). */
  description?: Maybe<Scalars['String']>;
  /** Description of the section (JSON). */
  descriptionJson?: Maybe<Scalars['JSONString']>;
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>;
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>;
};

export type SectionProductOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: Maybe<SectionProductOrderField>;
};

export type SectionProductOrderField =
  /** Sort products by name. */
  | 'NAME'
  /** Sort products by section. Note: This option is available only for the `Sections.products` query. */
  | 'SECTION';

/** Remove products from a section. */
export type SectionRemoveProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Remove Products from Section. */
  section: Maybe<SectionType>;
  sectionErrors: Array<SectionError>;
};

/** Reorder the products of a section. */
export type SectionReorderProducts = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Section from which products are reordered. */
  section: Maybe<SectionType>;
  productErrors: Array<ProductError>;
};

export type SectionSort =
  | 'NAME'
  | 'IS_PUBLISHED';

export type SectionType = Node & ObjectWithMetadataV2 & {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItemV2>>;
  publicationDate: Maybe<Scalars['Date']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItemV2>>;
  isPublished: Scalars['Boolean'];
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  descriptionPlaintext: Scalars['String'];
  descriptionJson: Scalars['JSONString'];
  /** List of products in this collection. */
  products: Maybe<ProductCountableConnection>;
  collections: CollectionCountableConnection;
  categories: CategoryCountableConnection;
  backgroundImage: Maybe<Image>;
  backgroundImageAlt: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  parent: Maybe<SectionType>;
  lft: Scalars['Int'];
  rght: Scalars['Int'];
  treeId: Scalars['Int'];
  level: Scalars['Int'];
  children: SectionTypeCountableConnection;
  images: SectionImageTypeConnection;
};


export type SectionTypeProductsArgs = {
  sortBy?: Maybe<SectionProductOrder>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SectionTypeCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SectionTypeCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SectionTypeBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type SectionTypeChildrenArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
};


export type SectionTypeImagesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type SectionTypeCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<SectionTypeCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type SectionTypeCountableEdge = {
  /** The item at the end of the edge. */
  node: SectionType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Updates a section. */
export type SectionUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  sectionErrors: Array<SectionError>;
  section: Maybe<SectionType>;
};

export type SectionsSortType = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort Section by the selected field. */
  field?: Maybe<SectionSort>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** Values of an attribute. */
  values: Array<Maybe<AttributeValue>>;
};

/** Send or resend order confirmation email for order */
export type SendOrderEmail = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** sends or resends order confirmation emails */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type SeoInput = {
  /** SEO title. */
  title?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
};

/** Represents service account data. */
export type ServiceAccount = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Name of the service account. */
  name: Maybe<Scalars['String']>;
  /** The date and time when the service account was created. */
  created: Maybe<Scalars['DateTime']>;
  /** Determine if service account will be set active or not. */
  isActive: Maybe<Scalars['Boolean']>;
  /** List of the service's permissions. */
  permissions: Maybe<Array<Maybe<Permission>>>;
  /** Last 4 characters of the tokens. */
  tokens: Maybe<Array<Maybe<ServiceAccountToken>>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

/** Clear private metadata for a service account. */
export type ServiceAccountClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  serviceAccount: Maybe<ServiceAccount>;
};

export type ServiceAccountCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ServiceAccountCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ServiceAccountCountableEdge = {
  /** The item at the end of the edge. */
  node: ServiceAccount;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new service account. */
export type ServiceAccountCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  accountErrors: Array<AccountError>;
  serviceAccount: Maybe<ServiceAccount>;
};

/** Deletes a service account. */
export type ServiceAccountDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  serviceAccount: Maybe<ServiceAccount>;
};

export type ServiceAccountFilterInput = {
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ServiceAccountInput = {
  /** Name of the service account. */
  name?: Maybe<Scalars['String']>;
  /** Determine if this service account should be enabled. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** List of permission code names to assign to this service account. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>;
};

export type ServiceAccountSortField =
  /** Sort service accounts by name. */
  | 'NAME'
  /** Sort service accounts by creation date. */
  | 'CREATION_DATE';

export type ServiceAccountSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort service accounts by the selected field. */
  field: ServiceAccountSortField;
};

/** Represents token data. */
export type ServiceAccountToken = Node & {
  /** Name of the authenticated token. */
  name: Maybe<Scalars['String']>;
  /** Last 4 characters of the token. */
  authToken: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Creates a new token. */
export type ServiceAccountTokenCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']>;
  accountErrors: Array<AccountError>;
  serviceAccountToken: Maybe<ServiceAccountToken>;
};

/** Deletes an authentication token assigned to service account. */
export type ServiceAccountTokenDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  serviceAccountToken: Maybe<ServiceAccountToken>;
};

export type ServiceAccountTokenInput = {
  /** Name of the token. */
  name?: Maybe<Scalars['String']>;
  /** ID of service account. */
  serviceAccount: Scalars['ID'];
};

/** Updates an existing service account. */
export type ServiceAccountUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  serviceAccount: Maybe<ServiceAccount>;
};

/** Updates private metadata for a service account. */
export type ServiceAccountUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  serviceAccount: Maybe<ServiceAccount>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
  /** A user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

export type SezzleCreateOrderInput = {
  /** Checkout ID. */
  checkoutId: Scalars['ID'];
  /** Url to redirect to after payment. */
  returnUrl?: Maybe<Scalars['String']>;
};

export type SezzleOrderType = {
  /** Sezzle Order ID. */
  token: Maybe<Scalars['String']>;
  /** Sezzle Payment url to use. */
  paymentUrl: Maybe<Scalars['String']>;
};

export type ShipmentItemType = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  itemId: Scalars['String'];
  shipment: ShipmentType;
  productId: Scalars['String'];
  itemName: Scalars['String'];
  itemQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
};

export type ShipmentItemTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShipmentItemTypeEdge>>;
};

/** A Relay edge containing a `ShipmentItemType` and its cursor. */
export type ShipmentItemTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ShipmentItemType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShipmentType = Node & ObjectWithMetadata & {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  storeId: Scalars['String'];
  shipmentId: Scalars['String'];
  fulfillmentId: Scalars['String'];
  awbNumber: Maybe<Scalars['String']>;
  courierName: Maybe<Scalars['String']>;
  estimateDeliveryDate: Maybe<Scalars['DateTime']>;
  deliveredAt: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
  order: Maybe<Order>;
  trackingUrl: Maybe<Scalars['String']>;
  invoiceUrl: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
  shipments: ShipmentItemTypeConnection;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** A list of shipment items, each containing information about an item in the shipment. */
  items: Maybe<Array<Maybe<ShipmentItemType>>>;
  /** Phone Number of the User */
  phone: Maybe<Scalars['String']>;
};


export type ShipmentTypeShipmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type ShipmentTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShipmentTypeEdge>>;
};

/** A Relay edge containing a `ShipmentType` and its cursor. */
export type ShipmentTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ShipmentType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShippingError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShippingErrorCode;
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']>>;
};

/** An enumeration. */
export type ShippingErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'MAX_LESS_THAN_MIN'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE'
  | 'DUPLICATED_INPUT_ITEM';

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethod = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Maybe<Money>;
  minimumOrderPrice: Maybe<Money>;
  maximumOrderPrice: Maybe<Money>;
  minimumOrderWeight: Maybe<Weight>;
  maximumOrderWeight: Maybe<Weight>;
  /** Type of the shipping method. */
  type: Maybe<ShippingMethodTypeEnum>;
  /** Returns translated shipping method fields for the given language code. */
  translation: Maybe<ShippingMethodTranslation>;
};


/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Returns translated shipping method fields for the given language code. */
  translation: Maybe<ShippingMethodTranslation>;
  /** Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. */
  shippingMethod: Maybe<ShippingMethod>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Translation language. */
  language: LanguageDisplay;
};

/** An enumeration. */
export type ShippingMethodTypeEnum =
  | 'PRICE'
  | 'WEIGHT';

/** Deletes shipping prices. */
export type ShippingPriceBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  shippingErrors: Array<ShippingError>;
};

/** Creates a new shipping price. */
export type ShippingPriceCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  shippingErrors: Array<ShippingError>;
  shippingMethod: Maybe<ShippingMethod>;
};

/** Deletes a shipping price. */
export type ShippingPriceDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping method to delete. */
  shippingMethod: Maybe<ShippingMethod>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingPriceInput = {
  /** Name of the shipping method. */
  name?: Maybe<Scalars['String']>;
  /** Shipping price of the shipping method. */
  price?: Maybe<Scalars['PositiveDecimal']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: Maybe<Scalars['PositiveDecimal']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Scalars['WeightScalar']>;
  /** Shipping type: price or weight based. */
  type?: Maybe<ShippingMethodTypeEnum>;
  /** Shipping zone this method belongs to. */
  shippingZone?: Maybe<Scalars['ID']>;
};

/** Creates/Updates translations for shipping method. */
export type ShippingPriceTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  shippingMethod: Maybe<ShippingMethod>;
};

/** Updates a new shipping price. */
export type ShippingPriceUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
  shippingErrors: Array<ShippingError>;
  shippingMethod: Maybe<ShippingMethod>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  default: Scalars['Boolean'];
  /** Lowest and highest prices for the shipping. */
  priceRange: Maybe<MoneyRange>;
  /** List of countries available for the method. */
  countries: Maybe<Array<Maybe<CountryDisplay>>>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods: Maybe<Array<Maybe<ShippingMethod>>>;
  /** List of warehouses for shipping zone. */
  warehouses: Maybe<Array<Maybe<Warehouse>>>;
};

/** Deletes shipping zones. */
export type ShippingZoneBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<ShippingZoneCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
  /** The item at the end of the edge. */
  node: ShippingZone;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new shipping zone. */
export type ShippingZoneCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes a shipping zone. */
export type ShippingZoneDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

/** Updates a new shipping zone. */
export type ShippingZoneUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>;
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** An enumeration. */
export type ShiprocketStatusEnum =
  | 'DELIVERED';

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /**
   * Customer's geolocalization data.
   * @deprecated Server-side geolocalization will be dropped in Saleor 3.0.
   */
  geolocalization: Maybe<Geolocalization>;
  /** List of configured authorization keys. Authorization keys are used to enable third-party OAuth authorization (currently Facebook or Google). */
  authorizationKeys: Array<Maybe<AuthorizationKey>>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /**
   * List of available currencies.
   * @deprecated This field will be removed in Saleor 3.0
   */
  currencies: Array<Maybe<Scalars['String']>>;
  /**
   * Shop's default currency.
   * @deprecated This field will be removed in Saleor 3.0
   */
  defaultCurrency: Scalars['String'];
  /** Shop's default country. */
  defaultCountry: Maybe<CountryDisplay>;
  /** Default shop's email sender's name. */
  defaultMailSenderName: Maybe<Scalars['String']>;
  /** Default shop's email sender's address. */
  defaultMailSenderAddress: Maybe<Scalars['String']>;
  /** Shop's description. */
  description: Maybe<Scalars['String']>;
  /** Shop's domain data. */
  domain: Domain;
  /**
   * Collection displayed on homepage.
   * @deprecated Use the `collection` query with the `slug` parameter. This field will be removed in Saleor 3.0
   */
  homepageCollection: Maybe<Collection>;
  /** List of the shops's supported languages. */
  languages: Array<Maybe<LanguageDisplay>>;
  /** Shop's name. */
  name: Scalars['String'];
  /**
   * Shop's navigation.
   * @deprecated Fetch menus using the `menu` query with `slug` parameter.
   */
  navigation: Maybe<Navigation>;
  /** List of available permissions. */
  permissions: Array<Maybe<Permission>>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Maybe<Scalars['String']>>;
  /** Header text. */
  headerText: Maybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean'];
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean'];
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean'];
  /** Enable inventory tracking. */
  trackInventoryByDefault: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit: Maybe<WeightUnitsEnum>;
  /** Returns translated shop fields for the given language code. */
  translation: Maybe<ShopTranslation>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts: Maybe<Scalars['Boolean']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays: Maybe<Scalars['Int']>;
  /** Company address. */
  companyAddress: Maybe<Address>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl: Maybe<Scalars['String']>;
  /** List of staff notification recipients. */
  staffNotificationRecipients: Maybe<Array<Maybe<StaffNotificationRecipient>>>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  currency?: Maybe<Scalars['String']>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  languageCode?: Maybe<LanguageCodeEnum>;
};


/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
export type ShopAddressUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

/** Updates site domain of the shop. */
export type ShopDomainUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShopErrorCode;
};

/** An enumeration. */
export type ShopErrorCode =
  | 'ALREADY_EXISTS'
  | 'CANNOT_FETCH_TAX_RATES'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Fetch tax rates. */
export type ShopFetchTaxRates = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopMetaType = Node & ObjectWithMetadataV2 & {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItemV2>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItemV2>>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ShopMetaTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ShopMetaTypeEdge>>;
};

/** A Relay edge containing a `ShopMetaType` and its cursor. */
export type ShopMetaTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<ShopMetaType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ShopSettingsInput = {
  /** Header text. */
  headerText?: Maybe<Scalars['String']>;
  /** SEO description. */
  description?: Maybe<Scalars['String']>;
  /** Include taxes in prices. */
  includeTaxesInPrices?: Maybe<Scalars['Boolean']>;
  /** Display prices with tax in store. */
  displayGrossPrices?: Maybe<Scalars['Boolean']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: Maybe<Scalars['Boolean']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
  /** Default email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>;
};

/** Creates/Updates translations for Shop Settings. */
export type ShopSettingsTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  headerText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Updates shop settings. */
export type ShopSettingsUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  headerText: Scalars['String'];
  description: Scalars['String'];
  /** Translation language. */
  language: LanguageDisplay;
};

export type ShopifyGiftCardType = Node & {
  giftCardId: Scalars['String'];
  giftCard: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type ShopifyOrderType = Node & {
  /** shopify order id */
  id: Scalars['ID'];
  /** Shopify Order payload */
  shopifyOrder: Maybe<Scalars['JSONString']>;
  /** Order */
  order: Maybe<Order>;
  /** Billing Address of the Order */
  billingAddress: Maybe<Address>;
  /** Shipping Address of the Order */
  shippingAddress: Maybe<Address>;
  /** List of order lines. */
  lines: Maybe<Array<Maybe<OrderLine>>>;
};

export type ShopifyUserError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: ShopifyUserErrorCode;
};

/** An enumeration. */
export type ShopifyUserErrorCode =
  | 'REQUIRED';

/** Shopify Ids mapping Details. */
export type ShopifyUserInput = {
  /** Shopify User Id */
  shopifyUserId: Scalars['String'];
  /** User Id */
  userId?: Maybe<Scalars['ID']>;
  /** Gift card */
  giftCard: Scalars['String'];
};

export type ShopifyUserType = Node & {
  shopifyUserId: Scalars['String'];
  user: Maybe<User>;
  giftCard: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: Maybe<Scalars['String']>;
  /** Shop site name. */
  name?: Maybe<Scalars['String']>;
};

export type SocialMedia =
  | 'FACEBOOK'
  | 'GOOGLE'
  | 'APPLE';

/** Deletes staff users. */
export type StaffBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  staffErrors: Array<StaffError>;
};

/** Creates a new staff user. */
export type StaffCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
};

export type StaffCreateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** The unique phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

/** Deletes a staff user. */
export type StaffDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
};

export type StaffError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: AccountErrorCode;
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of permission group IDs which cause the error. */
  groups: Maybe<Array<Scalars['ID']>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']>>;
};

export type StaffMemberStatus =
  | 'ACTIVE'
  | 'DEACTIVATED';

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  /** Returns a user subscribed to email notifications. */
  user: Maybe<User>;
  /** Determines if a notification active. */
  active: Maybe<Scalars['Boolean']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Returns email address of a user subscribed to email notifications. */
  email: Maybe<Scalars['String']>;
};

/** Creates a new staff notification recipient. */
export type StaffNotificationRecipientCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

/** Delete staff notification recipient. */
export type StaffNotificationRecipientDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  /** The ID of the user subscribed to email notifications.. */
  user?: Maybe<Scalars['ID']>;
  /** Email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>;
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>;
};

/** Updates a staff notification recipient. */
export type StaffNotificationRecipientUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient: Maybe<StaffNotificationRecipient>;
};

/** Updates an existing staff user. */
export type StaffUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
};

export type StaffUpdateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** The unique phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: Maybe<Array<Scalars['ID']>>;
};

export type StaffUserInput = {
  status?: Maybe<StaffMemberStatus>;
  search?: Maybe<Scalars['String']>;
};

export type StatusType =
  | 'ACTIVE'
  | 'EXPIRED'
  | 'SCHEDULED';

/** An enumeration. */
export type StatusTypes =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'PAUSED';

/** Represents stock. */
export type Stock = Node & {
  warehouse: Warehouse;
  productVariant: ProductVariant;
  /** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
  quantity: Scalars['Int'];
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Quantity allocated for orders */
  quantityAllocated: Scalars['Int'];
};

export type StockAvailability =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK';

export type StockCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<StockCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
  /** The item at the end of the edge. */
  node: Stock;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type StockError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: StockErrorCode;
};

/** An enumeration. */
export type StockErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type StockFilterInput = {
  quantity?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
};

export type StockInput = {
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID'];
  /** Quantity of items available for sell. */
  quantity?: Maybe<Scalars['Int']>;
};

/** creates intent for payment. */
export type StripePaymentIntentCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** intent Client Secret */
  clientSecret: Maybe<Scalars['String']>;
  /** intent ID */
  intentId: Maybe<Scalars['ID']>;
  /** redirection domain url */
  redirectDomain: Maybe<Scalars['String']>;
  intentCreationPaymentError: Array<PaymentError>;
};

/** Create Subscription. */
export type SubscriptionCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Subscription instance. */
  subscription: Maybe<SubscriptionType>;
  subscriptionErrors: Array<SubscriptionError>;
};

export type SubscriptionError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: SubscriptionErrorCode;
};

/** An enumeration. */
export type SubscriptionErrorCode =
  | 'INVALID'
  | 'REQUIRED';

export type SubscriptionInput = {
  /** Product Id */
  productId: Scalars['ID'];
  /** User Id */
  userId: Scalars['String'];
  /** Quantity for the product */
  quantity: Array<Maybe<Scalars['ID']>>;
  /** Status of the Subscription */
  status: StatusTypes;
};

/** An enumeration. */
export type SubscriptionStatus =
  /** ACT */
  | 'STATUSTYPES_ACTIVE'
  /** CNC */
  | 'STATUSTYPES_CANCELLED'
  /** PAU */
  | 'STATUSTYPES_PAUSED';

export type SubscriptionType = Node & {
  metadata: Maybe<Scalars['JSONString']>;
  privateMetadata: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: Maybe<User>;
  product: Product;
  quantity: Array<Scalars['Int']>;
  quantityIndex: Scalars['Int'];
  quantityLength: Scalars['Int'];
  payment: Scalars['String'];
  status: SubscriptionStatus;
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type SubscriptionTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubscriptionTypeEdge>>;
};

/** A Relay edge containing a `SubscriptionType` and its cursor. */
export type SubscriptionTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SubscriptionType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SurveyAnswerInput = {
  /** SurveyQuestion instance ID. */
  question: Scalars['ID'];
  /** Survey answer of type String, can accept string as well as integers. */
  answer: Scalars['String'];
};

export type SurveyAnswerOptionsInput = {
  /** SurveyQuestionsWithOptions instance ID. */
  question: Scalars['ID'];
  /** Survey answer of type String, can accept string as well as integers. */
  answer: Scalars['String'];
};

export type SurveyAnswerOptionsType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  question: SurveyQuestionOptionsType;
  answer: Scalars['String'];
  created: Scalars['DateTime'];
};

export type SurveyAnswerOptionsTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurveyAnswerOptionsTypeEdge>>;
};

/** A Relay edge containing a `SurveyAnswerOptionsType` and its cursor. */
export type SurveyAnswerOptionsTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SurveyAnswerOptionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SurveyAnswerType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  question: SurveyQuestionType;
  answer: Scalars['String'];
  created: Scalars['DateTime'];
};

export type SurveyAnswerTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurveyAnswerTypeEdge>>;
};

/** A Relay edge containing a `SurveyAnswerType` and its cursor. */
export type SurveyAnswerTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SurveyAnswerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Create Survey. */
export type SurveyCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** List of Survey instances. */
  surveys: Maybe<Array<Maybe<SurveyType>>>;
  SurveyErrors: Array<SurveyError>;
};

/** Delete Survey. */
export type SurveyDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Survey instance. */
  survey: Maybe<SurveyType>;
  surveyErrors: Array<SurveyError>;
};

export type SurveyError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: SurveyErrorCode;
};

/** An enumeration. */
export type SurveyErrorCode =
  | 'NAME_REQUIRED'
  | 'QUESTIONS_REQUIRED'
  | 'SURVEY_ALREADY_EXISTS'
  | 'INVALID'
  | 'REQUIRED';

/** Fill Survey. */
export type SurveyFill = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Survey instance. */
  survey: Maybe<SurveyType>;
  surveyErrors: Array<SurveyError>;
};

export type SurveyFillType = Node & {
  name: Scalars['String'];
  shown: Scalars['Boolean'];
  attempted: Scalars['Boolean'];
  questions: SurveyQuestionTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type SurveyFillTypeQuestionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SurveyInput = {
  /** Name given by user. */
  name: Scalars['String'];
};

export type SurveyLinkData = {
  surveyHash: Maybe<Scalars['String']>;
  surveyId: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

/** Fill Survey. */
export type SurveyOptionsFill = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Survey instance. */
  survey: Maybe<SurveyType>;
  surveyErrors: Array<SurveyError>;
};

export type SurveyQuestionInput = {
  /** Survey Question text. */
  text: Scalars['String'];
  /** Order at which this question will be shown. */
  order?: Maybe<Scalars['Int']>;
  /** Whether this question is required or not */
  required?: Maybe<Scalars['Boolean']>;
};

export type SurveyQuestionOptionsType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  text: Scalars['String'];
  type: SurveyQuestionsWithOptionsType;
  answer: Scalars['String'];
  order: Scalars['Int'];
  required: Scalars['Boolean'];
  survey: SurveyType;
  answersFromOptions: SurveyAnswerOptionsTypeConnection;
};


export type SurveyQuestionOptionsTypeAnswersFromOptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SurveyQuestionOptionsTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurveyQuestionOptionsTypeEdge>>;
};

/** A Relay edge containing a `SurveyQuestionOptionsType` and its cursor. */
export type SurveyQuestionOptionsTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SurveyQuestionOptionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SurveyQuestionType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  text: Scalars['String'];
  order: Scalars['Int'];
  required: Scalars['Boolean'];
  survey: SurveyType;
  answers: SurveyAnswerTypeConnection;
};


export type SurveyQuestionTypeAnswersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SurveyQuestionTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurveyQuestionTypeEdge>>;
};

/** A Relay edge containing a `SurveyQuestionType` and its cursor. */
export type SurveyQuestionTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SurveyQuestionType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export type SurveyQuestionsWithOptionsType =
  /** Text */
  | 'TEXT'
  /** Options */
  | 'OPTIONS'
  /** Checkbox */
  | 'CHECKBOX'
  /** Rating */
  | 'RATING'
  /** Date */
  | 'DATE';

export type SurveyType = Node & {
  name: Scalars['String'];
  shown: Scalars['Boolean'];
  attempted: Scalars['Boolean'];
  questions: SurveyQuestionTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
  user: Maybe<User>;
  userEmail: Scalars['String'];
  order: Maybe<Order>;
  surveyHash: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  questionsOptions: SurveyQuestionOptionsTypeConnection;
  linkData: Maybe<SurveyLinkData>;
};


export type SurveyTypeQuestionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SurveyTypeQuestionsOptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SurveyTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurveyTypeEdge>>;
};

/** A Relay edge containing a `SurveyType` and its cursor. */
export type SurveyTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<SurveyType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Sync Inventory with WareIq. */
export type SyncWareIqInventory = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
};

export type TagError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TagErrorCode;
};

/** An enumeration. */
export type TagErrorCode =
  | 'INVALID_OBJECT_ID';

export type TagFilter =
  | 'AND'
  | 'OR';

export type TagType = {
  /** The name of the tag */
  name: Scalars['String'];
};

export type TagsListInput = {
  tagsList?: Maybe<Array<Maybe<Scalars['String']>>>;
  filterType: TagFilter;
};

/** An enumeration. */
export type TaxRateType =
  | 'ACCOMMODATION'
  | 'ADMISSION_TO_CULTURAL_EVENTS'
  | 'ADMISSION_TO_ENTERTAINMENT_EVENTS'
  | 'ADMISSION_TO_SPORTING_EVENTS'
  | 'ADVERTISING'
  | 'AGRICULTURAL_SUPPLIES'
  | 'BABY_FOODSTUFFS'
  | 'BIKES'
  | 'BOOKS'
  | 'CHILDRENS_CLOTHING'
  | 'DOMESTIC_FUEL'
  | 'DOMESTIC_SERVICES'
  | 'E_BOOKS'
  | 'FOODSTUFFS'
  | 'HOTELS'
  | 'MEDICAL'
  | 'NEWSPAPERS'
  | 'PASSENGER_TRANSPORT'
  | 'PHARMACEUTICALS'
  | 'PROPERTY_RENOVATIONS'
  | 'RESTAURANTS'
  | 'SOCIAL_HOUSING'
  | 'STANDARD'
  | 'WATER'
  | 'WINE';

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  /** Description of the tax type. */
  description: Maybe<Scalars['String']>;
  /** External tax code used to identify given tax group. */
  taxCode: Maybe<Scalars['String']>;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  /** Currency code. */
  currency: Scalars['String'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  /** Lower bound of a price range. */
  start: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop: Maybe<TaxedMoney>;
};

/** An enumeration. */
export type TemplateMailType =
  | 'ORDER_CONFIRM'
  | 'ORDER_CANCEL'
  | 'ORDER_DISPATCHED'
  | 'ORDER_DELIVERED'
  | 'ABANDONED_CART'
  | 'CASHBACK'
  | 'CASHBACK_SIGNUP'
  | 'CASHBACK_USED'
  | 'WALLET'
  | 'NOTIFICATION'
  | 'INVOICE'
  | 'CONTACT_US'
  | 'MEMBERSHIP_ACTIVATE'
  | 'REVIEW_MAIL';

/** Requests for Token for registered user. */
export type TokenCreateWithAdmin = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Access token for a user. */
  accessToken: Maybe<Scalars['String']>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']>;
};

/** An object representing a single payment. */
export type Transaction = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  payment: Payment;
  token: Scalars['String'];
  kind: TransactionKind;
  isSuccess: Scalars['Boolean'];
  error: Maybe<TransactionError>;
  /** Total amount of the transaction. */
  amount: Maybe<Money>;
};

/** An enumeration. */
export type TransactionError =
  /** incorrect_number */
  | 'TRANSACTIONERROR_INCORRECT_NUMBER'
  /** invalid_number */
  | 'TRANSACTIONERROR_INVALID_NUMBER'
  /** incorrect_cvv */
  | 'TRANSACTIONERROR_INCORRECT_CVV'
  /** invalid_cvv */
  | 'TRANSACTIONERROR_INVALID_CVV'
  /** incorrect_zip */
  | 'TRANSACTIONERROR_INCORRECT_ZIP'
  /** incorrect_address */
  | 'TRANSACTIONERROR_INCORRECT_ADDRESS'
  /** invalid_expiry_date */
  | 'TRANSACTIONERROR_INVALID_EXPIRY_DATE'
  /** expired */
  | 'TRANSACTIONERROR_EXPIRED'
  /** processing_error */
  | 'TRANSACTIONERROR_PROCESSING_ERROR'
  /** declined */
  | 'TRANSACTIONERROR_DECLINED';

/** An enumeration. */
export type TransactionKind =
  /** Authorization */
  | 'AUTH'
  /** Pending */
  | 'PENDING'
  /** Action to confirm */
  | 'ACTION_TO_CONFIRM'
  /** Refund */
  | 'REFUND'
  /** Refund in progress */
  | 'REFUND_ONGOING'
  /** Capture */
  | 'CAPTURE'
  /** Void */
  | 'VOID'
  /** Confirm */
  | 'CONFIRM'
  /** Cancel */
  | 'CANCEL';

export type TranslatableItem = ProductTranslatableContent | CollectionTranslatableContent | CategoryTranslatableContent | AttributeTranslatableContent | AttributeValueTranslatableContent | ProductVariantTranslatableContent | PageTranslatableContent | ShippingMethodTranslatableContent | SaleTranslatableContent | VoucherTranslatableContent | MenuItemTranslatableContent;

export type TranslatableItemConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<TranslatableItemEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
  /** The item at the end of the edge. */
  node: TranslatableItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type TranslatableKinds =
  | 'ATTRIBUTE'
  | 'ATTRIBUTE_VALUE'
  | 'CATEGORY'
  | 'COLLECTION'
  | 'MENU_ITEM'
  | 'PAGE'
  | 'PRODUCT'
  | 'SALE'
  | 'SHIPPING_METHOD'
  | 'VARIANT'
  | 'VOUCHER';

export type TranslationError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TranslationErrorCode;
};

/** An enumeration. */
export type TranslationErrorCode =
  | 'GRAPHQL_ERROR'
  | 'NOT_FOUND'
  | 'REQUIRED';

export type TranslationInput = {
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionJson?: Maybe<Scalars['JSONString']>;
};

/** Trigger a cron as specified in input. */
export type TriggerCron = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** API Response */
  response: Maybe<Scalars['String']>;
  triggerCronErrors: Array<TriggerCronError>;
};

/** An enumeration. */
export type TriggerCronCodes =
  | 'REQUIRE_SUPERUSER_PERMISSION'
  | 'INVALID_CRON_NAME';

export type TriggerCronError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: TriggerCronCodes;
};


/** Update an address type */
export type UpdateAddressType = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An address link instance between address and its type. */
  addressLink: Maybe<AddressLinkType>;
};

/** Update an archive order. */
export type UpdateArchiveOrder = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  archiveOrder: Maybe<ArchiveOrderType>;
  archiveOrderErrors: Array<ArchiveOrderError>;
};

/** Update a banner */
export type UpdateBanner = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A banner instance. */
  banner: Maybe<CustomBannerType>;
  bannerErrors: Array<BannerError>;
};

/** Update Collection Banner. */
export type UpdateCollectionBanner = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  updateCollectionBannerError: Array<UpdateCollectionBannerError>;
};

export type UpdateCollectionBannerError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code.. */
  code: UpdateCollectionBannerErrorCode;
};

/** An enumeration. */
export type UpdateCollectionBannerErrorCode =
  | 'INVALID_FILE_FORMAT'
  | 'INVALID';

/** Create Product. */
export type UpdateCollectionMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Update Customer metadata. */
export type UpdateCustomerNoAuth = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated customer metadata. */
  message: Maybe<Scalars['String']>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Update Delivery Scheduler */
export type UpdateDeliverySchedule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Update an Influencer. */
export type UpdateInfluencer = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An Influencer instance. */
  influencer: Maybe<InfluencerType>;
};

/** Create Product. */
export type UpdateInventoryCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: Maybe<Scalars['String']>;
  /** URL of an invoice to download. */
  url?: Maybe<Scalars['String']>;
};

/** Update Manufacturing Details of a product. */
export type UpdateManufacturingDetailsCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Product instance. */
  product: Maybe<Product>;
};

/** Updates metadata of an object. */
export type UpdateMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Updates metadata of an object. */
export type UpdateMetadataV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadataV2>;
};

/** Set the payment method of checkout */
export type UpdatePaymentMethod = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A checkout instance. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
};

/** Updates private metadata of an object. */
export type UpdatePrivateMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadata>;
};

/** Updates private metadata of an object. */
export type UpdatePrivateMetadataV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  metadataErrors: Array<MetadataError>;
  item: Maybe<ObjectWithMetadataV2>;
};

/** Update Product Attributes. */
export type UpdateProductCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Create Product. */
export type UpdateProductsMetadataCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Update ProductVariant metadata. */
export type UpdateProductvariantMetadata = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
};

/** Create or update reply on Product Review */
export type UpdateReplyOnProductReview = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A product review instance. */
  productReview: Maybe<ProductReviewType>;
  productReviewErrors: Array<ProductReviewError>;
};

/** Update Product Pricing on Shopify. */
export type UpdateShopifyProductPriceCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Product instance. */
  productVariant: Maybe<ProductVariant>;
  productErrors: Array<ProductError>;
};

/** Update Product Tags on Shopify. */
export type UpdateShopifyProductTagsCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Product instance. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
};

/** Update an ShopifyUser. */
export type UpdateShopifyUser = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An ShopifyUser instance. */
  shopifyUser: Maybe<ShopifyUserType>;
};

/** Update a subscription. */
export type UpdateSubscription = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A subscription instance */
  subscription: Maybe<SubscriptionType>;
  subscriptionError: Array<SubscriptionError>;
};

/** Update a voucher rule. */
export type UpdateVoucherRule = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voucher rule instance. */
  voucherRule: Maybe<VoucherRuleType>;
  voucherErrors: Array<VoucherError>;
};

/** Update a voucher rule link. */
export type UpdateVoucherRuleLink = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A voucher rule link instance. */
  voucherRuleLink: Maybe<VoucherRuleLinkType>;
  voucherErrors: Array<VoucherError>;
};


/** Upload Collection ID CSV */
export type UploadCollectionIdcsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  collectionUpdateErrors: Array<UploadCollectionIdError>;
};

export type UploadCollectionIdError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code.. */
  code: UploadCollectionIdErrorCode;
};

/** An enumeration. */
export type UploadCollectionIdErrorCode =
  | 'INVALID_FILE_FORMAT'
  | 'INVALID';

/** Upload Images of a product. */
export type UploadProductImageCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Product instance. */
  product: Maybe<Product>;
};

/** Upload list of RTO customers. */
export type UploadRtoCustomersListCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Success message */
  message: Maybe<Scalars['String']>;
  sectionErrors: Array<SectionError>;
};

/** Represents user data. */
export type User = Node & ObjectWithMetadata & {
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  /** A note about the customer. */
  note: Maybe<Scalars['String']>;
  dateJoined: Scalars['DateTime'];
  defaultShippingAddress: Maybe<Address>;
  defaultBillingAddress: Maybe<Address>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>;
  /**
   * List of privately stored metadata namespaces.
   * @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31.
   */
  privateMeta: Array<Maybe<MetaStore>>;
  /**
   * List of publicly stored metadata namespaces.
   * @deprecated Use the `metadata` field. This field will be removed after 2020-07-31.
   */
  meta: Array<Maybe<MetaStore>>;
  /** The phone number of the user. */
  phone: Maybe<Scalars['String']>;
  /** List of all user's addresses. */
  addresses: Maybe<Array<Maybe<Address>>>;
  /** Returns the last open checkout of this user. */
  checkout: Maybe<Checkout>;
  /** List of the user gift cards. */
  giftCards: Maybe<GiftCardCountableConnection>;
  /** List of user's orders. */
  orders: Maybe<OrderCountableConnection>;
  /**
   * List of user's permissions.
   * @deprecated Will be removed in Saleor 2.11.Use the `userPermissions` instead.
   */
  permissions: Maybe<Array<Maybe<Permission>>>;
  /** List of user's permissions. */
  userPermissions: Maybe<Array<Maybe<UserPermission>>>;
  /** List of user's permission groups. */
  permissionGroups: Maybe<Array<Maybe<Group>>>;
  /** List of user's permission groups which user can manage. */
  editableGroups: Maybe<Array<Maybe<Group>>>;
  avatar: Maybe<Image>;
  /** List of events associated with the user. */
  events: Maybe<Array<Maybe<CustomerEvent>>>;
  /** List of stored payment sources. */
  storedPaymentSources: Maybe<Array<Maybe<PaymentSource>>>;
  /** Tags associated with this User */
  tags: Array<Maybe<TagType>>;
};


/** Represents user data. */
export type UserGiftCardsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserOrdersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents user data. */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Deletes a user avatar. Only for staff members. */
export type UserAvatarDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Deletes a user avatar. Only for staff members. */
export type UserAvatarDeleteV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type UserAvatarUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Create a user avatar. For all users. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type UserAvatarUpdateV2 = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
  accountErrors: Array<AccountError>;
};

/** Activate or deactivate users. */
export type UserBulkSetActive = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  accountErrors: Array<AccountError>;
};

/** Clear metadata for user. */
export type UserClearMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Clear private metadata for user. */
export type UserClearPrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

export type UserCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<UserCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type UserCreateInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>;
  /** Given name. */
  firstName?: Maybe<Scalars['String']>;
  /** Family name. */
  lastName?: Maybe<Scalars['String']>;
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>;
  /** The unique phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** A note about the user. */
  note?: Maybe<Scalars['String']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>;
};

export type UserExistsType = {
  /** if phone exists  */
  phoneExist: Maybe<Scalars['Boolean']>;
  /** if email exists  */
  emailExist: Maybe<Scalars['Boolean']>;
  /** either phone or email is active */
  isActive: Maybe<Scalars['Boolean']>;
};

export type UserPermission = {
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID'];
};

export type UserSortField =
  /** Sort users by first name. */
  | 'FIRST_NAME'
  /** Sort users by last name. */
  | 'LAST_NAME'
  /** Sort users by email. */
  | 'EMAIL'
  /** Sort users by order count. */
  | 'ORDER_COUNT';

export type UserSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
};

/** Updates metadata for user. */
export type UserUpdateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Updates private metadata for user. */
export type UserUpdatePrivateMeta = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  accountErrors: Array<AccountError>;
  user: Maybe<User>;
};

/** Represents a VAT rate for a country. */
export type Vat = {
  /** Country code. */
  countryCode: Scalars['String'];
  /** Standard VAT rate in percent. */
  standardRate: Maybe<Scalars['Float']>;
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<Maybe<ReducedRate>>;
};

/** Assign an image to a product variant. */
export type VariantImageAssign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productVariant: Maybe<ProductVariant>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

/** Unassign an image from a product variant. */
export type VariantImageUnassign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  productVariant: Maybe<ProductVariant>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
};

export type VariantInput = {
  /** variant id */
  variantId: Scalars['ID'];
  /** Warehouse with quantity available */
  quantity: Array<Maybe<VariantQuantityInput>>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  /** Whether it is in sale or not. */
  onSale: Maybe<Scalars['Boolean']>;
  /** The discount amount if in sale (null otherwise). */
  discount: Maybe<TaxedMoney>;
  /** The discount amount in the local currency. */
  discountLocalCurrency: Maybe<TaxedMoney>;
  /** The price, with any discount subtracted. */
  price: Maybe<TaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted: Maybe<TaxedMoney>;
  /** The discounted price in the local currency. */
  priceLocalCurrency: Maybe<TaxedMoney>;
};

export type VariantQuantityInput = {
  /** warehouse id */
  warehouse: Scalars['ID'];
  /** variant quantity available */
  quantityAvailable: Scalars['Int'];
};

/** Requests for OTP for registered user. */
export type VerifyCheckoutOtp = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Checks whether phone is verified or not */
  isVerified: Maybe<Scalars['Boolean']>;
  otpErrors: Array<OtpError>;
};

/** Verify JWT token. */
export type VerifyToken = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** User assigned to token. */
  user: Maybe<User>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean'];
  /** JWT payload. */
  payload: Maybe<Scalars['GenericScalar']>;
  accountErrors: Array<AccountError>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  code: Scalars['String'];
  usageLimit: Maybe<Scalars['Int']>;
  used: Scalars['Int'];
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  applyOncePerOrder: Scalars['Boolean'];
  applyOncePerCustomer: Scalars['Boolean'];
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  discountValue: Scalars['Float'];
  minSpent: Maybe<Money>;
  minCheckoutItemsQuantity: Maybe<Scalars['Int']>;
  /** List of categories this voucher applies to. */
  categories: Maybe<CategoryCountableConnection>;
  /** List of collections this voucher applies to. */
  collections: Maybe<CollectionCountableConnection>;
  /** List of products this voucher applies to. */
  products: Maybe<ProductCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries: Maybe<Array<Maybe<CountryDisplay>>>;
  /** Returns translated voucher fields for the given language code. */
  translation: Maybe<VoucherTranslation>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Adds products, categories, collections to a voucher. */
export type VoucherAddCatalogues = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
  discountErrors: Array<DiscountError>;
};

/** Deletes vouchers. */
export type VoucherBulkDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Returns how many objects were affected. */
  count: Scalars['Int'];
  discountErrors: Array<DiscountError>;
};

export type VoucherCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<VoucherCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
  /** The item at the end of the edge. */
  node: Voucher;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new voucher. */
export type VoucherCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

/** Deletes a voucher. */
export type VoucherDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

export type VoucherDiscountType =
  | 'FIXED'
  | 'PERCENTAGE'
  | 'SHIPPING';

export type VoucherError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: Maybe<VoucherRuleErrorCodeEnum>;
};

export type VoucherFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>;
  timesUsed?: Maybe<IntRangeInput>;
  discountType?: Maybe<Array<Maybe<VoucherDiscountType>>>;
  started?: Maybe<DateTimeRangeInput>;
  search?: Maybe<Scalars['String']>;
};

export type VoucherInput = {
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: Maybe<VoucherTypeEnum>;
  /** Voucher name. */
  name?: Maybe<Scalars['String']>;
  /** Code to use the voucher. */
  code?: Maybe<Scalars['String']>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Choices: fixed or percentage. */
  discountValueType?: Maybe<DiscountValueTypeEnum>;
  /** Value of the voucher. */
  discountValue?: Maybe<Scalars['PositiveDecimal']>;
  /** Products discounted by the voucher. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Collections discounted by the voucher. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Categories discounted by the voucher. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: Maybe<Scalars['PositiveDecimal']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: Maybe<Scalars['Boolean']>;
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>;
};

/** Removes products, categories, collections from a voucher. */
export type VoucherRemoveCatalogues = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
  discountErrors: Array<DiscountError>;
};

/** An enumeration. */
export type VoucherRuleErrorCodeEnum =
  | 'NOT_FOUND'
  | 'NOT_APPLICABLE'
  | 'NO_VOUCHER_LINKED_TO_CHECKOUT'
  | 'NO_VOUCHER_RULE_LINK_FOUND'
  | 'DUPLICATE_REQUEST'
  | 'VOUCHER_RULE_DISABLED'
  | 'INVALID';

export type VoucherRuleFilterInput = {
  isDefault?: Maybe<Scalars['Boolean']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  created?: Maybe<DateRangeInput>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  links_Code?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  startDate_Lte?: Maybe<Scalars['DateTime']>;
  startDate_Gte?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  endDate_Lte?: Maybe<Scalars['DateTime']>;
  endDate_Gte?: Maybe<Scalars['DateTime']>;
  searchVector?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Maybe<StatusType>>>;
};

export type VoucherRuleInput = {
  /** Slug */
  slug: Scalars['String'];
  /** Rule name */
  name: Scalars['String'];
  /** Description of the rule */
  description?: Maybe<Scalars['String']>;
  /** Conditions for the rule to be applicable */
  condition: Scalars['JSONString'];
  /** Actions to perform if rule is applied */
  action: Scalars['JSONString'];
  usePerCustomer?: Maybe<Scalars['Int']>;
  maxUsage?: Maybe<Scalars['Int']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type VoucherRuleLinkInput = {
  /** Promo code */
  code: Scalars['String'];
  /** Rule Id */
  rule: Scalars['ID'];
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type VoucherRuleLinkType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  code: Scalars['String'];
  rule: VoucherRuleType;
  isEnabled: Scalars['Boolean'];
  created: Scalars['DateTime'];
  usageCount: Scalars['Int'];
};

export type VoucherRuleLinkTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VoucherRuleLinkTypeEdge>>;
};

/** A Relay edge containing a `VoucherRuleLinkType` and its cursor. */
export type VoucherRuleLinkTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<VoucherRuleLinkType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type VoucherRuleOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort Voucher Rules by the selected field. */
  field?: Maybe<VoucherRuleOrderField>;
};

export type VoucherRuleOrderField =
  | 'NAME'
  | 'START_DATE'
  | 'END_DATE'
  | 'MAX_USAGE'
  | 'CODE';

export type VoucherRuleType = Node & {
  metadata: Maybe<Scalars['JSONString']>;
  privateMetadata: Maybe<Scalars['JSONString']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Maybe<Scalars['String']>;
  condition: Scalars['JSONString'];
  action: Scalars['JSONString'];
  usePerCustomer: Maybe<Scalars['Int']>;
  maxUsage: Maybe<Scalars['Int']>;
  isEnabled: Scalars['Boolean'];
  isDefault: Scalars['Boolean'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  links: VoucherRuleLinkTypeConnection;
  logs: CouponDiscountTypeConnection;
};


export type VoucherRuleTypeLinksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  rule?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};


export type VoucherRuleTypeLogsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

export type VoucherRuleTypeConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VoucherRuleTypeEdge>>;
};

/** A Relay edge containing a `VoucherRuleType` and its cursor. */
export type VoucherRuleTypeEdge = {
  /** The item at the end of the edge */
  node: Maybe<VoucherRuleType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type VoucherSortField =
  /** Sort vouchers by code. */
  | 'CODE'
  /** Sort vouchers by start date. */
  | 'START_DATE'
  /** Sort vouchers by end date. */
  | 'END_DATE'
  /** Sort vouchers by value. */
  | 'VALUE'
  /** Sort vouchers by type. */
  | 'TYPE'
  /** Sort vouchers by usage limit. */
  | 'USAGE_LIMIT'
  /** Sort vouchers by minimum spent amount. */
  | 'MINIMUM_SPENT_AMOUNT';

export type VoucherSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Returns translated voucher fields for the given language code. */
  translation: Maybe<VoucherTranslation>;
  /** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
  voucher: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

/** Creates/Updates translations for Voucher. */
export type VoucherTranslate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  voucher: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  /** Translation language. */
  language: LanguageDisplay;
};

export type VoucherTypeEnum =
  | 'SHIPPING'
  | 'ENTIRE_ORDER'
  | 'SPECIFIC_PRODUCT';

/** Updates a voucher. */
export type VoucherUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  discountErrors: Array<DiscountError>;
  voucher: Maybe<Voucher>;
};

/** Add Wallet Balance of a user from a csv file */
export type WalletBalanceAddCsv = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
  WalletErrors: Array<WalletError>;
};

/** Add/Sub Wallet Balance of a user from Phone number */
export type WalletBalancePhoneUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
  WalletErrors: Array<WalletError>;
};

/** Add/Sub Wallet Balance of a user */
export type WalletBalanceUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** A Wallet instance. */
  wallet: Maybe<WalletType>;
  WalletErrors: Array<WalletError>;
};

export type WalletCsvInput = {
  /** csv */
  csv: Scalars['Upload'];
};

export type WalletError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WalletErrorCode;
};

/** An enumeration. */
export type WalletErrorCode =
  | 'UNAUTHORIZED'
  | 'GRAPHQL_ERROR'
  | 'INVALID_FILE_FORMAT'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type WalletFieldEnum =
  | 'ID'
  | 'CREATED'
  | 'EXPIRY_DATE'
  | 'AMOUNT'
  | 'USER'
  | 'LOGS'
  | 'REASON'
  | 'TYPE';

export type WalletInput = {
  /** User Id */
  userId: Scalars['ID'];
  /** Amount of wallet to update */
  amount: Scalars['Float'];
  /** Reason for updation */
  reason: Scalars['String'];
  /** ADD/SUB Option to update */
  type: Scalars['String'];
  /** Secret for updation */
  secret: Scalars['String'];
};

export type WalletInputPhone = {
  /** Phone Number */
  phone: Scalars['String'];
  /** Amount of wallet to update */
  amount: Scalars['Float'];
  /** Reason for updation */
  reason: Scalars['String'];
  /** ADD/SUB Option to update */
  type: Scalars['String'];
  /** Secret for updation */
  secret: Scalars['String'];
};

/** An enumeration. */
export type WalletLogType =
  /** Add */
  | 'ADD'
  /** Subtract */
  | 'SUB';

export type WalletType = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  user: User;
  amount: Scalars['Float'];
  expiryDate: Maybe<Scalars['DateTime']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  logs: CustomWalletLogTypeConnection;
};


export type WalletTypeLogsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
};

/** Represents warehouse. */
export type Warehouse = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  companyName: Scalars['String'];
  shippingZones: ShippingZoneCountableConnection;
  address: Address;
  email: Scalars['String'];
};


/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type WarehouseAddressInput = {
  /** Address. */
  streetAddress1: Scalars['String'];
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>;
  /** City. */
  city: Scalars['String'];
  /** District. */
  cityArea?: Maybe<Scalars['String']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>;
  /** Country. */
  country: CountryCode;
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>;
  /** Phone number. */
  phone?: Maybe<Scalars['String']>;
};

export type WarehouseCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<WarehouseCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
  /** The item at the end of the edge. */
  node: Warehouse;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates new warehouse. */
export type WarehouseCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseCreateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** Company name. */
  companyName?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name: Scalars['String'];
  /** Address of the warehouse. */
  address: WarehouseAddressInput;
  /** Shipping zones supported by the warehouse. */
  shippingZones?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Deletes selected warehouse. */
export type WarehouseDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WarehouseErrorCode;
};

/** An enumeration. */
export type WarehouseErrorCode =
  | 'ALREADY_EXISTS'
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

export type WarehouseFilterInput = {
  search?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Add shipping zone to given warehouse. */
export type WarehouseShippingZoneAssign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

/** Remove shipping zone from given warehouse. */
export type WarehouseShippingZoneUnassign = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseSortField =
  /** Sort warehouses by name. */
  | 'NAME';

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
};

/** Updates given warehouse. */
export type WarehouseUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  warehouseErrors: Array<WarehouseError>;
  warehouse: Maybe<Warehouse>;
};

export type WarehouseUpdateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>;
  /** Company name. */
  companyName?: Maybe<Scalars['String']>;
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>;
  /** Warehouse name. */
  name?: Maybe<Scalars['String']>;
  /** Address of the warehouse. */
  address?: Maybe<WarehouseAddressInput>;
};

/** Webhook. */
export type Webhook = Node & {
  name: Scalars['String'];
  targetUrl: Scalars['String'];
  isActive: Scalars['Boolean'];
  secretKey: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** List of webhook events. */
  events: Array<WebhookEvent>;
  /** @deprecated Use the `app` field instead. This field will be removed after 2020-07-31. */
  serviceAccount: ServiceAccount;
  app: App;
};

export type WebhookCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<WebhookCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type WebhookCountableEdge = {
  /** The item at the end of the edge. */
  node: Webhook;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Creates a new webhook subscription. */
export type WebhookCreate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

export type WebhookCreateInput = {
  /** The name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Saleor 3.0 */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
  /** DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31. */
  serviceAccount?: Maybe<Scalars['ID']>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>;
};

/** Deletes a webhook subscription. */
export type WebhookDelete = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

export type WebhookError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WebhookErrorCode;
};

/** An enumeration. */
export type WebhookErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Webhook event. */
export type WebhookEvent = {
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String'];
};

/** An enumeration. */
export type WebhookEventTypeEnum =
  | 'ANY_EVENTS'
  | 'ORDER_CREATED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_UPDATED'
  | 'ORDER_CANCELLED'
  | 'ORDER_SHIPPED'
  | 'ORDER_FULFILLED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_DELETED'
  | 'INVOICE_SENT'
  | 'CUSTOMER_CREATED'
  | 'PRODUCT_CREATED'
  | 'PRODUCT_UPDATED'
  | 'CHECKOUT_QUANTITY_CHANGED'
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_UPDATED'
  | 'CHECKOUT_SHIPPING_ADDRESS_UPDATED'
  | 'CHECKOUT_VOUCHER_UPDATED'
  | 'FULFILLMENT_CREATED';

export type WebhookFilterInput = {
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export type WebhookSampleEventTypeEnum =
  | 'ORDER_CREATED'
  | 'ORDER_FULLY_PAID'
  | 'ORDER_UPDATED'
  | 'ORDER_CANCELLED'
  | 'ORDER_SHIPPED'
  | 'ORDER_FULFILLED'
  | 'INVOICE_REQUESTED'
  | 'INVOICE_DELETED'
  | 'INVOICE_SENT'
  | 'CUSTOMER_CREATED'
  | 'PRODUCT_CREATED'
  | 'PRODUCT_UPDATED'
  | 'CHECKOUT_QUANTITY_CHANGED'
  | 'CHECKOUT_CREATED'
  | 'CHECKOUT_UPDATED'
  | 'CHECKOUT_SHIPPING_ADDRESS_UPDATED'
  | 'CHECKOUT_VOUCHER_UPDATED'
  | 'FULFILLMENT_CREATED';

export type WebhookSortField =
  /** Sort webhooks by name. */
  | 'NAME'
  /** Sort webhooks by service account. */
  | 'SERVICE_ACCOUNT'
  /** Sort webhooks by target url. */
  | 'TARGET_URL'
  /** Sort webhooks by service account. */
  | 'APP';

export type WebhookSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort webhooks by the selected field. */
  field: WebhookSortField;
};

/** Updates a webhook subscription. */
export type WebhookUpdate = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  webhookErrors: Array<WebhookError>;
  webhook: Maybe<Webhook>;
};

export type WebhookUpdateInput = {
  /** The new name of the webhook. */
  name?: Maybe<Scalars['String']>;
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Saleor 3.0 */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>;
  /** DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31. */
  serviceAccount?: Maybe<Scalars['ID']>;
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>;
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>;
  /** Use to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float'];
};


/** An enumeration. */
export type WeightUnitsEnum =
  | 'KG'
  | 'LB'
  | 'OZ'
  | 'G';

/** Wishlist item. */
export type Wishlist = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  items: WishlistItemCountableConnection;
};


/** Wishlist item. */
export type WishlistItemsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

/** Add product to the current user's wishlist. */
export type WishlistAddProductMutation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<Maybe<WishlistItem>>>;
  wishlistErrors: Array<WishlistError>;
};

/** Add product variant to the current user's wishlist. */
export type WishlistAddProductVariantMutation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<Maybe<WishlistItem>>>;
  wishlistErrors: Array<WishlistError>;
};

export type WishlistError = {
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']>;
  /** The error message. */
  message: Maybe<Scalars['String']>;
  /** The error code. */
  code: WishlistErrorCode;
};

/** An enumeration. */
export type WishlistErrorCode =
  | 'GRAPHQL_ERROR'
  | 'INVALID'
  | 'NOT_FOUND'
  | 'REQUIRED'
  | 'UNIQUE';

/** Wishlist item. */
export type WishlistItem = Node & {
  /** The ID of the object. */
  id: Scalars['ID'];
  wishlist: Wishlist;
  product: Product;
  variants: ProductVariantCountableConnection;
};


/** Wishlist item. */
export type WishlistItemVariantsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type WishlistItemCountableConnection = {
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  edges: Array<WishlistItemCountableEdge>;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']>;
};

export type WishlistItemCountableEdge = {
  /** The item at the end of the edge. */
  node: WishlistItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Remove product from the current user's wishlist. */
export type WishlistRemoveProductMutation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<Maybe<WishlistItem>>>;
  wishlistErrors: Array<WishlistError>;
};

/** Remove product variant from the current user's wishlist. */
export type WishlistRemoveProductVariantMutation = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<Maybe<WishlistItem>>>;
  wishlistErrors: Array<WishlistError>;
};


export type _Entity = Address | User | Group | ServiceAccount | App | ProductVariant | Product | ProductType | Collection | Category | ProductImage;

export type _Service = {
  sdl: Maybe<Scalars['String']>;
};

/** Create ShopifyUser. */
export type CheckoutAddPromoCodeShopify = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the added gift card or voucher. */
  checkout: Maybe<Checkout>;
};

/** Create ShopifyUser. */
export type CheckoutRemovePromoCodeShopify = {
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31.
   */
  errors: Array<Error>;
  /** The checkout with the added gift card or voucher. */
  checkout: Maybe<Checkout>;
};

export type GlobalSearchType = {
  /** Search Order */
  orders: Maybe<Array<Maybe<Order>>>;
  /** Search Products */
  products: Maybe<Array<Maybe<Product>>>;
  /** Customer search */
  customers: Maybe<Array<Maybe<User>>>;
  /** Voucher Search */
  vouchers: Maybe<Array<Maybe<VoucherRuleLinkType>>>;
  /** Shopmeta data */
  shopmeta: Maybe<Array<Maybe<GlobalSearchShopMetaType>>>;
};

export type AccountErrorFragment = Pick<AccountError, 'code' | 'field' | 'message'>;

export type AddressFragment = (
  Pick<Address, 'id' | 'firstName' | 'lastName' | 'companyName' | 'streetAddress1' | 'streetAddress2' | 'city' | 'cityArea' | 'postalCode' | 'countryArea' | 'phone' | 'isDefaultBillingAddress' | 'isDefaultShippingAddress'>
  & { country: Pick<CountryDisplay, 'code' | 'country'> }
);

export type UserFragment = (
  Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'phone' | 'isStaff'>
  & { orders: Maybe<(
    { __typename: 'OrderCountableConnection' }
    & Pick<OrderCountableConnection, 'totalCount'>
    & { edges: Array<{ node: Pick<Order, 'id'> }> }
  )>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, defaultShippingAddress: Maybe<AddressFragment>, defaultBillingAddress: Maybe<AddressFragment>, addresses: Maybe<Array<Maybe<AddressFragment>>> }
);

export type PriceFragment = { gross: Pick<Money, 'amount' | 'currency'>, net: Pick<Money, 'amount' | 'currency'> };

export type ProductVariantFragment = (
  Pick<ProductVariant, 'id' | 'name' | 'sku' | 'quantityAvailable'>
  & { images: Maybe<Array<Maybe<Pick<ProductImage, 'id' | 'sortOrder' | 'alt' | 'url'>>>>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, pricing: Maybe<(
    Pick<VariantPricingInfo, 'onSale'>
    & { priceUndiscounted: Maybe<PriceFragment>, price: Maybe<PriceFragment> }
  )>, attributes: Array<{ attribute: Pick<Attribute, 'id' | 'name'>, values: Array<Maybe<(
      Pick<AttributeValue, 'id' | 'name'>
      & { value: AttributeValue['name'] }
    )>> }>, product: (
    Pick<Product, 'id' | 'name' | 'slug' | 'isAvailableForPurchase'>
    & { weight: Maybe<Pick<Weight, 'unit' | 'value'>>, category: Maybe<Pick<Category, 'id' | 'name' | 'slug'>>, thumbnail: Maybe<Pick<Image, 'url' | 'alt'>>, productType: Pick<ProductType, 'id' | 'isShippingRequired'>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, tags: Maybe<Array<Maybe<Pick<TagType, 'name'>>>> }
  ) }
);

export type ShippingMethodFragment = (
  Pick<ShippingMethod, 'id' | 'name'>
  & { price: Maybe<Pick<Money, 'currency' | 'amount'>> }
);

export type CheckoutLineFragment = (
  Pick<CheckoutLine, 'id' | 'quantity' | 'data'>
  & { totalPrice: Maybe<PriceFragment>, variant: ProductVariantFragment }
);

export type PaymentGatewayFragment = (
  Pick<PaymentGateway, 'id' | 'name' | 'currencies'>
  & { config: Array<Pick<GatewayConfigLine, 'field' | 'value'>> }
);

export type CheckoutFragment = (
  Pick<Checkout, 'token' | 'id' | 'email' | 'isShippingRequired' | 'discountName' | 'translatedDiscountName' | 'voucherCode'>
  & { metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, totalPrice: Maybe<PriceFragment>, subtotalPrice: Maybe<PriceFragment>, billingAddress: Maybe<AddressFragment>, shippingAddress: Maybe<AddressFragment>, availableShippingMethods: Array<Maybe<ShippingMethodFragment>>, shippingMethod: Maybe<ShippingMethodFragment>, shippingPrice: Maybe<PriceFragment>, lines: Maybe<Array<Maybe<CheckoutLineFragment>>>, discount: Maybe<Pick<Money, 'currency' | 'amount'>>, availablePaymentGateways: Array<PaymentGatewayFragment> }
);

export type CheckoutErrorFragment = Pick<CheckoutError, 'code' | 'field' | 'message'>;

export type OrderPriceFragment = { gross: Pick<Money, 'amount' | 'currency'>, net: Pick<Money, 'amount' | 'currency'>, tax: Pick<Money, 'amount' | 'currency'> };

export type OrderDetailFragment = (
  Pick<Order, 'userEmail' | 'paymentStatus' | 'paymentStatusDisplay' | 'status' | 'statusDisplay' | 'id' | 'token' | 'number'>
  & { voucher: Maybe<Pick<Voucher, 'code'>>, payments: Maybe<Array<Maybe<Pick<Payment, 'gateway'>>>>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, shippingAddress: Maybe<AddressFragment>, lines: Array<Maybe<(
    Pick<OrderLine, 'id' | 'productName' | 'quantity'>
    & { variant: Maybe<ProductVariantFragment>, unitPrice: Maybe<(
      Pick<TaxedMoney, 'currency'>
      & OrderPriceFragment
    )>, totalPrice: Maybe<(
      Pick<TaxedMoney, 'currency'>
      & OrderPriceFragment
    )> }
  )>>, subtotal: Maybe<OrderPriceFragment>, total: Maybe<OrderPriceFragment>, shippingPrice: Maybe<OrderPriceFragment> }
);

export type PaymentFragment = (
  Pick<Payment, 'id' | 'gateway' | 'token'>
  & { creditCard: Maybe<Pick<CreditCard, 'brand' | 'firstDigits' | 'lastDigits' | 'expMonth' | 'expYear'>>, total: Maybe<Pick<Money, 'amount' | 'currency'>> }
);

export type PaymentErrorFragment = Pick<PaymentError, 'code' | 'field' | 'message'>;

export type RefreshTokenMutationVariables = Exact<{
  csrfToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
}>;


export type RefreshTokenMutation = { tokenRefresh: Maybe<(
    Pick<RefreshToken, 'token'>
    & { accountErrors: Array<AccountErrorFragment> }
  )> };

export type RefreshTokenWithUserMutationVariables = Exact<{
  csrfToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
}>;


export type RefreshTokenWithUserMutation = { tokenRefresh: Maybe<(
    Pick<RefreshToken, 'token'>
    & { user: Maybe<UserFragment>, accountErrors: Array<AccountErrorFragment> }
  )> };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = { tokenVerify: Maybe<(
    Pick<VerifyToken, 'isValid' | 'payload'>
    & { user: Maybe<UserFragment>, accountErrors: Array<AccountErrorFragment> }
  )> };

export type AccountUpdateMutationVariables = Exact<{
  input: AccountInput;
}>;


export type AccountUpdateMutation = { accountUpdate: Maybe<{ accountErrors: Array<AccountErrorFragment>, user: Maybe<UserFragment> }> };

export type SetAccountDefaultAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  type: AddressTypeEnum;
}>;


export type SetAccountDefaultAddressMutation = { accountSetDefaultAddress: Maybe<{ accountErrors: Array<AccountErrorFragment>, user: Maybe<UserFragment> }> };

export type DeleteAccountAddressMutationVariables = Exact<{
  addressId: Scalars['ID'];
}>;


export type DeleteAccountAddressMutation = { accountAddressDelete: Maybe<{ accountErrors: Array<AccountErrorFragment>, user: Maybe<UserFragment> }> };

export type CreateAccountAddressMutationVariables = Exact<{
  input: AddressInput;
}>;


export type CreateAccountAddressMutation = { accountAddressCreate: Maybe<{ address: Maybe<AddressFragment>, accountErrors: Array<AccountErrorFragment>, user: Maybe<UserFragment> }> };

export type UpdateAccountAddressMutationVariables = Exact<{
  input: AddressInput;
  id: Scalars['ID'];
}>;


export type UpdateAccountAddressMutation = { accountAddressUpdate: Maybe<{ address: Maybe<AddressFragment>, accountErrors: Array<AccountErrorFragment>, user: Maybe<UserFragment> }> };

export type OtpRequestMutationVariables = Exact<{
  phone: Scalars['String'];
  type?: Maybe<Scalars['String']>;
}>;


export type OtpRequestMutation = { RequestOTP: Maybe<(
    Pick<RequestOtp, 'message'>
    & { otpErrors: Array<Pick<OtpError, 'code' | 'field' | 'message'>> }
  )> };

export type OtpAuthenticationMutationVariables = Exact<{
  phone: Scalars['String'];
  otp: Scalars['String'];
  checkoutId?: Maybe<Scalars['ID']>;
}>;


export type OtpAuthenticationMutation = { CreateTokenOTP: Maybe<(
    Pick<CreateTokenOtp, 'token' | 'refreshToken' | 'csrfToken'>
    & { user: Maybe<UserFragment>, otpErrors: Array<Pick<OtpError, 'code' | 'field' | 'message'>> }
  )> };

export type AccountRegisterV2MutationVariables = Exact<{
  input: AccountRegisterInputV2;
}>;


export type AccountRegisterV2Mutation = { accountRegisterV2: Maybe<(
    Pick<AccountRegisterV2, 'isNewUser' | 'isActiveUser'>
    & { accountErrors: Array<Pick<AccountError, 'field' | 'message'>>, errors: Array<Pick<Error, 'field' | 'message'>> }
  )> };

export type ConfirmAccountV2MutationVariables = Exact<{
  otp: Scalars['String'];
  phone: Scalars['String'];
  checkoutId?: Maybe<Scalars['ID']>;
}>;


export type ConfirmAccountV2Mutation = { confirmAccountV2: Maybe<(
    Pick<ConfirmAccountV2, 'token' | 'refreshToken' | 'csrfToken'>
    & { user: Maybe<UserFragment>, accountErrors: Array<Pick<AccountError, 'field' | 'message'>>, errors: Array<Pick<Error, 'field' | 'message'>> }
  )> };

export type VerifyCheckoutOtpMutationVariables = Exact<{
  otp: Scalars['String'];
  phone: Scalars['String'];
}>;


export type VerifyCheckoutOtpMutation = { verifyCheckoutOtp: Maybe<(
    Pick<VerifyCheckoutOtp, 'isVerified'>
    & { otpErrors: Array<Pick<OtpError, 'field' | 'message'>>, errors: Array<Pick<Error, 'field' | 'message'>> }
  )> };

export type UpdateCheckoutLineMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>;
}>;


export type UpdateCheckoutLineMutation = { checkoutLinesUpdate: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type CreateCheckoutMutationVariables = Exact<{
  checkoutInput: CheckoutCreateInput;
}>;


export type CreateCheckoutMutation = { checkoutCreate: Maybe<{ errors: Array<CheckoutErrorFragment>, checkout: Maybe<CheckoutFragment> }> };

export type AddCheckoutLineMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  lines: Array<Maybe<CheckoutLineInput>> | Maybe<CheckoutLineInput>;
}>;


export type AddCheckoutLineMutation = { checkoutLinesAdd: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type RemoveCheckoutLineMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  lineId?: Maybe<Scalars['ID']>;
}>;


export type RemoveCheckoutLineMutation = { checkoutLineDelete: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type UpdateCheckoutShippingAddressMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  shippingAddress: AddressInput;
  email: Scalars['String'];
}>;


export type UpdateCheckoutShippingAddressMutation = { checkoutShippingAddressUpdate: Maybe<{ errors: Array<CheckoutErrorFragment>, checkout: Maybe<CheckoutFragment> }>, checkoutEmailUpdate: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type UpdateCheckoutBillingAddressMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  billingAddress: AddressInput;
}>;


export type UpdateCheckoutBillingAddressMutation = { checkoutBillingAddressUpdate: Maybe<{ errors: Array<CheckoutErrorFragment>, checkout: Maybe<CheckoutFragment> }> };

export type UpdateCheckoutAddressTypeMutationVariables = Exact<{
  addressId: Scalars['ID'];
  type: AddressTypes;
}>;


export type UpdateCheckoutAddressTypeMutation = { addressTypeUpdate: Maybe<{ addressLink: Maybe<(
      Pick<AddressLinkType, 'id' | 'type'>
      & { address: Pick<Address, 'id' | 'firstName' | 'lastName' | 'streetAddress1' | 'streetAddress2' | 'city' | 'cityArea' | 'postalCode' | 'phone'> }
    )> }> };

export type UpdateCheckoutShippingMethodMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  shippingMethodId: Scalars['ID'];
}>;


export type UpdateCheckoutShippingMethodMutation = { checkoutShippingMethodUpdate: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type AddCheckoutPromoCodeMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
}>;


export type AddCheckoutPromoCodeMutation = { checkoutAddPromoCode: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type RemoveCheckoutPromoCodeMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  promoCode: Scalars['String'];
}>;


export type RemoveCheckoutPromoCodeMutation = { checkoutRemovePromoCode: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type CreateCheckoutPaymentMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  paymentInput: PaymentInput;
}>;


export type CreateCheckoutPaymentMutation = { checkoutPaymentCreate: Maybe<{ checkout: Maybe<CheckoutFragment>, payment: Maybe<PaymentFragment>, errors: Array<PaymentErrorFragment> }> };

export type CompleteCheckoutMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  paymentData?: Maybe<Scalars['JSONString']>;
  redirectUrl?: Maybe<Scalars['String']>;
  storeSource?: Maybe<Scalars['Boolean']>;
}>;


export type CompleteCheckoutMutation = { checkoutComplete: Maybe<(
    Pick<CheckoutComplete, 'confirmationNeeded' | 'confirmationData'>
    & { errors: Array<CheckoutErrorFragment>, order: Maybe<OrderDetailFragment> }
  )> };

export type CashBackMethodType =
| 'CASHBACK'
| 'RECHARGE_WALLET'
| 'CASHBACK_AND_RECHARGE_WALLET';

export type CheckoutPaymentMethodUpdateMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
  gatewayId: Scalars['String'];
  useCashback: Scalars['Boolean'];
  isRecalculate: boolean;
  cashbackType: CashBackMethodType;
}>;


export type CheckoutPaymentMethodUpdateMutation = { checkoutPaymentMethodUpdate: Maybe<{ checkout: Maybe<CheckoutFragment>, checkoutErrors: Array<Pick<CheckoutError, 'field' | 'message' | 'code'>> }> };

export type CreateRazorpayOrderMutationVariables = Exact<{
  input: RazorpayCreateOrderInput;
}>;


export type CreateRazorpayOrderMutation = { razorpayOrderCreate: Maybe<{ razorpayOrder: Maybe<Pick<RazorpayOrderType, 'id' | 'amount' | 'amountPaid' | 'amountDue' | 'currency' | 'status' | 'createdAt'>>, razorpayErrors: Array<Pick<RazorpayError, 'field' | 'code' | 'message'>> }> };

export type PaytmTxnCreateMutationVariables = Exact<{
  input: PaytmCreateOrderInput;
}>;


export type PaytmTxnCreateMutation = { paytmOrderCreate: Maybe<{ paytmOrder: Maybe<Pick<PaytmOrderType, 'txnToken' | 'status' | 'createdAt' | 'merchantId' | 'callbackUrl' | 'orderId'>>, paytmErrors: Array<Pick<PaytmError, 'field' | 'message' | 'code'>> }> };

export type GetWalletQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWalletQuery = { wallet: Maybe<Pick<WalletType, 'id' | 'amount'>> };

export type RefreshCheckoutMutationVariables = Exact<{
  checkoutId: Scalars['ID'];
}>;


export type RefreshCheckoutMutation = { checkoutRefresh: Maybe<{ checkout: Maybe<CheckoutFragment>, errors: Array<CheckoutErrorFragment> }> };

export type ReOrderMutationVariables = Exact<{
  orderId?: Maybe<Scalars['ID']>;
  warehouseId?: Maybe<Scalars['String']>;
  attachUser?:Maybe<Scalars['Boolean']>;
  skipLines?: Maybe<Scalars['Boolean']>;
}>;


export type ReOrderMutation = { reOrder: Maybe<{ reorderErrors: Array<Pick<ReOrderError, 'field' | 'message' | 'code'>>, checkout: Maybe<CheckoutFragment> }> };

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = (
  Pick<Query, 'authenticated' | 'authenticating'>
  & { user: Maybe<UserFragment> }
);

export type CheckoutDetailsQueryVariables = Exact<{
  token?: Maybe<Scalars['UUID']>;
}>;


export type CheckoutDetailsQuery = (
  Pick<Query, 'checkoutUpdated'>
  & { checkout: Maybe<CheckoutFragment> }
);

export type GetCartItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartItemsQuery = { cartItems: Maybe<CheckoutLineFragment> };

export type GetLocalCheckoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocalCheckoutQuery = (
  Pick<Query, 'useCashback' | 'checkoutLoading' | 'userWalletBalance'>
  & { localCheckout: Maybe<CheckoutFragment>, localCheckoutDiscounts: Maybe<Pick<DiscountsType, 'prepaidDiscount' | 'couponDiscount' | 'cashbackDiscount'>>, localCashback: Maybe<Pick<CashbackType, 'amount' | 'willAddOn'>>, recentOrder: Maybe<OrderDetailFragment> }
);

export type DiscountsAndCashbackQueryVariables = Exact<{
  token: Scalars['UUID'];
}>;


export type DiscountsAndCashbackQuery = { checkoutDiscounts: Maybe<Pick<DiscountsType, 'prepaidDiscount' | 'couponDiscount' | 'cashbackDiscount'>>, cashback: Maybe<Pick<CashbackType, 'amount' | 'willAddOn'>> };

export type UserCheckoutDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCheckoutDetailsQuery = { me: Maybe<(
    Pick<User, 'id'>
    & { checkout: Maybe<CheckoutFragment> }
  )> };

export type PincodeQueryVariables = Exact<{
  pin?: Maybe<Scalars['String']>;
}>;


export type PincodeQuery = { pincode: Maybe<Pick<PincodeType, 'city' | 'state' | 'serviceable'>> };

export type OrdersByUserQueryVariables = Exact<{
  perPage: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type OrdersByUserQuery = { me: Maybe<(
    Pick<User, 'id'>
    & { orders: Maybe<{ pageInfo: Pick<PageInfo, 'hasNextPage' | 'endCursor'>, edges: Array<{ node: (
          Pick<Order, 'id' | 'token' | 'number' | 'statusDisplay' | 'created'>
          & { shippingAddress: Maybe<Pick<Address, 'id' | 'postalCode'>>, invoices: Maybe<Array<Maybe<(
            Pick<Invoice, 'createdAt' | 'id' | 'message' | 'externalUrl' | 'number' | 'status' | 'updatedAt' | 'url'>
            & { metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>> }
          )>>>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, total: Maybe<{ gross: Pick<Money, 'amount' | 'currency'>, net: Pick<Money, 'amount' | 'currency'> }>, lines: Array<Maybe<(
            Pick<OrderLine, 'id' | 'productName' | 'quantity'>
            & { variant: Maybe<(
              Pick<ProductVariant, 'id' | 'sku' | 'name'>
              & { weight: Maybe<Pick<Weight, 'unit' | 'value'>>, product: (
                Pick<Product, 'id' | 'name'>
                & { weight: Maybe<Pick<Weight, 'unit' | 'value'>>, metadata: Array<Maybe<Pick<MetadataItem, 'key' | 'value'>>>, category: Maybe<Pick<Category, 'id' | 'name' | 'slug'>>, pricing: Maybe<{ discount: Maybe<{ net: Pick<Money, 'amount'> }>, priceRange: Maybe<{ start: Maybe<{ net: Pick<Money, 'amount'> }> }>, priceRangeUndiscounted: Maybe<{ start: Maybe<{ net: Pick<Money, 'amount'> }> }> }> }
              ) }
            )>, thumbnail: Maybe<Pick<Image, 'alt' | 'url'>>, thumbnail2x: Maybe<Pick<Image, 'url'>> }
          )>> }
        ) }> }> }
  )> };

export const AccountErrorFragmentDoc = gql`
    fragment AccountErrorFragment on AccountError {
  code
  field
  message
}
    `;
export const AddressFragmentDoc = gql`
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
export const UserFragmentDoc = gql`
    fragment UserFragment on User {
  id
  email
  firstName
  lastName
  phone
  isStaff
  orders(first: 2) {
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
    ${AddressFragmentDoc}`;
export const PriceFragmentDoc = gql`
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
export const ShippingMethodFragmentDoc = gql`
    fragment ShippingMethod on ShippingMethod {
  id
  name
  price {
    currency
    amount
  }
}
    `;
export const ProductVariantFragmentDoc = gql`
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
    ${PriceFragmentDoc}`;
export const CheckoutLineFragmentDoc = gql`
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
    ${PriceFragmentDoc}
${ProductVariantFragmentDoc}`;
export const PaymentGatewayFragmentDoc = gql`
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
export const CheckoutFragmentDoc = gql`
    fragment Checkout on Checkout {
  token
  id
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
  discountName
  translatedDiscountName
  voucherCode
  availablePaymentGateways {
    ...PaymentGateway
  }
}
    ${PriceFragmentDoc}
${AddressFragmentDoc}
${ShippingMethodFragmentDoc}
${CheckoutLineFragmentDoc}
${PaymentGatewayFragmentDoc}`;
export const CheckoutErrorFragmentDoc = gql`
    fragment CheckoutError on CheckoutError {
  code
  field
  message
}
    `;
export const OrderPriceFragmentDoc = gql`
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
export const OrderDetailFragmentDoc = gql`
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
  payments {
    gateway
  }
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
    ${AddressFragmentDoc}
${ProductVariantFragmentDoc}
${OrderPriceFragmentDoc}`;
export const PaymentFragmentDoc = gql`
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
export const PaymentErrorFragmentDoc = gql`
    fragment PaymentError on PaymentError {
  code
  field
  message
}
    `;
export const RefreshTokenDocument = gql`
    mutation refreshToken($csrfToken: String!, $refreshToken: String) {
  tokenRefresh(csrfToken: $csrfToken, refreshToken: $refreshToken) {
    token
    accountErrors {
      ...AccountErrorFragment
    }
  }
}
    ${AccountErrorFragmentDoc}`;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      csrfToken: // value for 'csrfToken'
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RefreshTokenWithUserDocument = gql`
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
    ${UserFragmentDoc}
${AccountErrorFragmentDoc}`;
export type RefreshTokenWithUserMutationFn = Apollo.MutationFunction<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>;

/**
 * __useRefreshTokenWithUserMutation__
 *
 * To run a mutation, you first call `useRefreshTokenWithUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenWithUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenWithUserMutation, { data, loading, error }] = useRefreshTokenWithUserMutation({
 *   variables: {
 *      csrfToken: // value for 'csrfToken'
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokenWithUserMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>(RefreshTokenWithUserDocument, options);
      }
export type RefreshTokenWithUserMutationHookResult = ReturnType<typeof useRefreshTokenWithUserMutation>;
export type RefreshTokenWithUserMutationResult = Apollo.MutationResult<RefreshTokenWithUserMutation>;
export type RefreshTokenWithUserMutationOptions = Apollo.BaseMutationOptions<RefreshTokenWithUserMutation, RefreshTokenWithUserMutationVariables>;
export const VerifyTokenDocument = gql`
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
    ${UserFragmentDoc}
${AccountErrorFragmentDoc}`;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, options);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const AccountUpdateDocument = gql`
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
    ${AccountErrorFragmentDoc}
${UserFragmentDoc}`;
export type AccountUpdateMutationFn = Apollo.MutationFunction<AccountUpdateMutation, AccountUpdateMutationVariables>;

/**
 * __useAccountUpdateMutation__
 *
 * To run a mutation, you first call `useAccountUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountUpdateMutation, { data, loading, error }] = useAccountUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountUpdateMutation(baseOptions?: Apollo.MutationHookOptions<AccountUpdateMutation, AccountUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AccountUpdateMutation, AccountUpdateMutationVariables>(AccountUpdateDocument, options);
      }
export type AccountUpdateMutationHookResult = ReturnType<typeof useAccountUpdateMutation>;
export type AccountUpdateMutationResult = Apollo.MutationResult<AccountUpdateMutation>;
export type AccountUpdateMutationOptions = Apollo.BaseMutationOptions<AccountUpdateMutation, AccountUpdateMutationVariables>;
export const SetAccountDefaultAddressDocument = gql`
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
    ${AccountErrorFragmentDoc}
${UserFragmentDoc}`;
export type SetAccountDefaultAddressMutationFn = Apollo.MutationFunction<SetAccountDefaultAddressMutation, SetAccountDefaultAddressMutationVariables>;

/**
 * __useSetAccountDefaultAddressMutation__
 *
 * To run a mutation, you first call `useSetAccountDefaultAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAccountDefaultAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAccountDefaultAddressMutation, { data, loading, error }] = useSetAccountDefaultAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useSetAccountDefaultAddressMutation(baseOptions?: Apollo.MutationHookOptions<SetAccountDefaultAddressMutation, SetAccountDefaultAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetAccountDefaultAddressMutation, SetAccountDefaultAddressMutationVariables>(SetAccountDefaultAddressDocument, options);
      }
export type SetAccountDefaultAddressMutationHookResult = ReturnType<typeof useSetAccountDefaultAddressMutation>;
export type SetAccountDefaultAddressMutationResult = Apollo.MutationResult<SetAccountDefaultAddressMutation>;
export type SetAccountDefaultAddressMutationOptions = Apollo.BaseMutationOptions<SetAccountDefaultAddressMutation, SetAccountDefaultAddressMutationVariables>;
export const DeleteAccountAddressDocument = gql`
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
    ${AccountErrorFragmentDoc}
${UserFragmentDoc}`;
export type DeleteAccountAddressMutationFn = Apollo.MutationFunction<DeleteAccountAddressMutation, DeleteAccountAddressMutationVariables>;

/**
 * __useDeleteAccountAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAccountAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountAddressMutation, { data, loading, error }] = useDeleteAccountAddressMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useDeleteAccountAddressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountAddressMutation, DeleteAccountAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountAddressMutation, DeleteAccountAddressMutationVariables>(DeleteAccountAddressDocument, options);
      }
export type DeleteAccountAddressMutationHookResult = ReturnType<typeof useDeleteAccountAddressMutation>;
export type DeleteAccountAddressMutationResult = Apollo.MutationResult<DeleteAccountAddressMutation>;
export type DeleteAccountAddressMutationOptions = Apollo.BaseMutationOptions<DeleteAccountAddressMutation, DeleteAccountAddressMutationVariables>;
export const CreateAccountAddressDocument = gql`
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
    ${AddressFragmentDoc}
${AccountErrorFragmentDoc}
${UserFragmentDoc}`;
export type CreateAccountAddressMutationFn = Apollo.MutationFunction<CreateAccountAddressMutation, CreateAccountAddressMutationVariables>;

/**
 * __useCreateAccountAddressMutation__
 *
 * To run a mutation, you first call `useCreateAccountAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountAddressMutation, { data, loading, error }] = useCreateAccountAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccountAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountAddressMutation, CreateAccountAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountAddressMutation, CreateAccountAddressMutationVariables>(CreateAccountAddressDocument, options);
      }
export type CreateAccountAddressMutationHookResult = ReturnType<typeof useCreateAccountAddressMutation>;
export type CreateAccountAddressMutationResult = Apollo.MutationResult<CreateAccountAddressMutation>;
export type CreateAccountAddressMutationOptions = Apollo.BaseMutationOptions<CreateAccountAddressMutation, CreateAccountAddressMutationVariables>;
export const UpdateAccountAddressDocument = gql`
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
    ${AddressFragmentDoc}
${AccountErrorFragmentDoc}
${UserFragmentDoc}`;
export type UpdateAccountAddressMutationFn = Apollo.MutationFunction<UpdateAccountAddressMutation, UpdateAccountAddressMutationVariables>;

/**
 * __useUpdateAccountAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAccountAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountAddressMutation, { data, loading, error }] = useUpdateAccountAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateAccountAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountAddressMutation, UpdateAccountAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountAddressMutation, UpdateAccountAddressMutationVariables>(UpdateAccountAddressDocument, options);
      }
export type UpdateAccountAddressMutationHookResult = ReturnType<typeof useUpdateAccountAddressMutation>;
export type UpdateAccountAddressMutationResult = Apollo.MutationResult<UpdateAccountAddressMutation>;
export type UpdateAccountAddressMutationOptions = Apollo.BaseMutationOptions<UpdateAccountAddressMutation, UpdateAccountAddressMutationVariables>;
export const OtpRequestDocument = gql`
    mutation OTPRequest($phone: String!, $type: String) {
  RequestOTP: requestOtp(phone: $phone, type: $type) {
    message
    otpErrors {
      code
      field
      message
    }
  }
}
    `;
export type OtpRequestMutationFn = Apollo.MutationFunction<OtpRequestMutation, OtpRequestMutationVariables>;

/**
 * __useOtpRequestMutation__
 *
 * To run a mutation, you first call `useOtpRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpRequestMutation, { data, loading, error }] = useOtpRequestMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useOtpRequestMutation(baseOptions?: Apollo.MutationHookOptions<OtpRequestMutation, OtpRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OtpRequestMutation, OtpRequestMutationVariables>(OtpRequestDocument, options);
      }
export type OtpRequestMutationHookResult = ReturnType<typeof useOtpRequestMutation>;
export type OtpRequestMutationResult = Apollo.MutationResult<OtpRequestMutation>;
export type OtpRequestMutationOptions = Apollo.BaseMutationOptions<OtpRequestMutation, OtpRequestMutationVariables>;
export const OtpAuthenticationDocument = gql`
    mutation OTPAuthentication($phone: String!, $otp: String!, $checkoutId: ID) {
  CreateTokenOTP: otpTokenCreate(
    otp: $otp
    phone: $phone
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
    ${UserFragmentDoc}`;
export type OtpAuthenticationMutationFn = Apollo.MutationFunction<OtpAuthenticationMutation, OtpAuthenticationMutationVariables>;

/**
 * __useOtpAuthenticationMutation__
 *
 * To run a mutation, you first call `useOtpAuthenticationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpAuthenticationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpAuthenticationMutation, { data, loading, error }] = useOtpAuthenticationMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      otp: // value for 'otp'
 *      checkoutId: // value for 'checkoutId'
 *   },
 * });
 */
export function useOtpAuthenticationMutation(baseOptions?: Apollo.MutationHookOptions<OtpAuthenticationMutation, OtpAuthenticationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OtpAuthenticationMutation, OtpAuthenticationMutationVariables>(OtpAuthenticationDocument, options);
      }
export type OtpAuthenticationMutationHookResult = ReturnType<typeof useOtpAuthenticationMutation>;
export type OtpAuthenticationMutationResult = Apollo.MutationResult<OtpAuthenticationMutation>;
export type OtpAuthenticationMutationOptions = Apollo.BaseMutationOptions<OtpAuthenticationMutation, OtpAuthenticationMutationVariables>;
export const AccountRegisterV2Document = gql`
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
export type AccountRegisterV2MutationFn = Apollo.MutationFunction<AccountRegisterV2Mutation, AccountRegisterV2MutationVariables>;

/**
 * __useAccountRegisterV2Mutation__
 *
 * To run a mutation, you first call `useAccountRegisterV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountRegisterV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountRegisterV2Mutation, { data, loading, error }] = useAccountRegisterV2Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountRegisterV2Mutation(baseOptions?: Apollo.MutationHookOptions<AccountRegisterV2Mutation, AccountRegisterV2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AccountRegisterV2Mutation, AccountRegisterV2MutationVariables>(AccountRegisterV2Document, options);
      }
export type AccountRegisterV2MutationHookResult = ReturnType<typeof useAccountRegisterV2Mutation>;
export type AccountRegisterV2MutationResult = Apollo.MutationResult<AccountRegisterV2Mutation>;
export type AccountRegisterV2MutationOptions = Apollo.BaseMutationOptions<AccountRegisterV2Mutation, AccountRegisterV2MutationVariables>;
export const ConfirmAccountV2Document = gql`
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
    ${UserFragmentDoc}`;
export type ConfirmAccountV2MutationFn = Apollo.MutationFunction<ConfirmAccountV2Mutation, ConfirmAccountV2MutationVariables>;

/**
 * __useConfirmAccountV2Mutation__
 *
 * To run a mutation, you first call `useConfirmAccountV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmAccountV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmAccountV2Mutation, { data, loading, error }] = useConfirmAccountV2Mutation({
 *   variables: {
 *      otp: // value for 'otp'
 *      phone: // value for 'phone'
 *      checkoutId: // value for 'checkoutId'
 *   },
 * });
 */
export function useConfirmAccountV2Mutation(baseOptions?: Apollo.MutationHookOptions<ConfirmAccountV2Mutation, ConfirmAccountV2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmAccountV2Mutation, ConfirmAccountV2MutationVariables>(ConfirmAccountV2Document, options);
      }
export type ConfirmAccountV2MutationHookResult = ReturnType<typeof useConfirmAccountV2Mutation>;
export type ConfirmAccountV2MutationResult = Apollo.MutationResult<ConfirmAccountV2Mutation>;
export type ConfirmAccountV2MutationOptions = Apollo.BaseMutationOptions<ConfirmAccountV2Mutation, ConfirmAccountV2MutationVariables>;
export const VerifyCheckoutOtpDocument = gql`
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
export type VerifyCheckoutOtpMutationFn = Apollo.MutationFunction<VerifyCheckoutOtpMutation, VerifyCheckoutOtpMutationVariables>;

/**
 * __useVerifyCheckoutOtpMutation__
 *
 * To run a mutation, you first call `useVerifyCheckoutOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCheckoutOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCheckoutOtpMutation, { data, loading, error }] = useVerifyCheckoutOtpMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useVerifyCheckoutOtpMutation(baseOptions?: Apollo.MutationHookOptions<VerifyCheckoutOtpMutation, VerifyCheckoutOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyCheckoutOtpMutation, VerifyCheckoutOtpMutationVariables>(VerifyCheckoutOtpDocument, options);
      }
export type VerifyCheckoutOtpMutationHookResult = ReturnType<typeof useVerifyCheckoutOtpMutation>;
export type VerifyCheckoutOtpMutationResult = Apollo.MutationResult<VerifyCheckoutOtpMutation>;
export type VerifyCheckoutOtpMutationOptions = Apollo.BaseMutationOptions<VerifyCheckoutOtpMutation, VerifyCheckoutOtpMutationVariables>;
export const UpdateCheckoutLineDocument = gql`
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
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type UpdateCheckoutLineMutationFn = Apollo.MutationFunction<UpdateCheckoutLineMutation, UpdateCheckoutLineMutationVariables>;

/**
 * __useUpdateCheckoutLineMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutLineMutation, { data, loading, error }] = useUpdateCheckoutLineMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      lines: // value for 'lines'
 *   },
 * });
 */
export function useUpdateCheckoutLineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutLineMutation, UpdateCheckoutLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutLineMutation, UpdateCheckoutLineMutationVariables>(UpdateCheckoutLineDocument, options);
      }
export type UpdateCheckoutLineMutationHookResult = ReturnType<typeof useUpdateCheckoutLineMutation>;
export type UpdateCheckoutLineMutationResult = Apollo.MutationResult<UpdateCheckoutLineMutation>;
export type UpdateCheckoutLineMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutLineMutation, UpdateCheckoutLineMutationVariables>;
export const CreateCheckoutDocument = gql`
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
    ${CheckoutErrorFragmentDoc}
${CheckoutFragmentDoc}`;
export type CreateCheckoutMutationFn = Apollo.MutationFunction<CreateCheckoutMutation, CreateCheckoutMutationVariables>;

/**
 * __useCreateCheckoutMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutMutation, { data, loading, error }] = useCreateCheckoutMutation({
 *   variables: {
 *      checkoutInput: // value for 'checkoutInput'
 *   },
 * });
 */
export function useCreateCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCheckoutMutation, CreateCheckoutMutationVariables>(CreateCheckoutDocument, options);
      }
export type CreateCheckoutMutationHookResult = ReturnType<typeof useCreateCheckoutMutation>;
export type CreateCheckoutMutationResult = Apollo.MutationResult<CreateCheckoutMutation>;
export type CreateCheckoutMutationOptions = Apollo.BaseMutationOptions<CreateCheckoutMutation, CreateCheckoutMutationVariables>;
export const AddCheckoutLineDocument = gql`
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
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type AddCheckoutLineMutationFn = Apollo.MutationFunction<AddCheckoutLineMutation, AddCheckoutLineMutationVariables>;

/**
 * __useAddCheckoutLineMutation__
 *
 * To run a mutation, you first call `useAddCheckoutLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCheckoutLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCheckoutLineMutation, { data, loading, error }] = useAddCheckoutLineMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      lines: // value for 'lines'
 *   },
 * });
 */
export function useAddCheckoutLineMutation(baseOptions?: Apollo.MutationHookOptions<AddCheckoutLineMutation, AddCheckoutLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCheckoutLineMutation, AddCheckoutLineMutationVariables>(AddCheckoutLineDocument, options);
      }
export type AddCheckoutLineMutationHookResult = ReturnType<typeof useAddCheckoutLineMutation>;
export type AddCheckoutLineMutationResult = Apollo.MutationResult<AddCheckoutLineMutation>;
export type AddCheckoutLineMutationOptions = Apollo.BaseMutationOptions<AddCheckoutLineMutation, AddCheckoutLineMutationVariables>;
export const RemoveCheckoutLineDocument = gql`
    mutation RemoveCheckoutLine($checkoutId: ID!, $lineId: ID) {
  checkoutLineDelete(checkoutId: $checkoutId, lineId: $lineId) {
    checkout {
      ...Checkout
    }
    errors: checkoutErrors {
      ...CheckoutError
    }
  }
}
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type RemoveCheckoutLineMutationFn = Apollo.MutationFunction<RemoveCheckoutLineMutation, RemoveCheckoutLineMutationVariables>;

/**
 * __useRemoveCheckoutLineMutation__
 *
 * To run a mutation, you first call `useRemoveCheckoutLineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCheckoutLineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCheckoutLineMutation, { data, loading, error }] = useRemoveCheckoutLineMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      lineId: // value for 'lineId'
 *   },
 * });
 */
export function useRemoveCheckoutLineMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCheckoutLineMutation, RemoveCheckoutLineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCheckoutLineMutation, RemoveCheckoutLineMutationVariables>(RemoveCheckoutLineDocument, options);
      }
export type RemoveCheckoutLineMutationHookResult = ReturnType<typeof useRemoveCheckoutLineMutation>;
export type RemoveCheckoutLineMutationResult = Apollo.MutationResult<RemoveCheckoutLineMutation>;
export type RemoveCheckoutLineMutationOptions = Apollo.BaseMutationOptions<RemoveCheckoutLineMutation, RemoveCheckoutLineMutationVariables>;
export const UpdateCheckoutShippingAddressDocument = gql`
    mutation UpdateCheckoutShippingAddress($checkoutId: ID!, $shippingAddress: AddressInput!, $email: String!) {
  checkoutShippingAddressUpdate(
    checkoutId: $checkoutId
    shippingAddress: $shippingAddress
  ) {
    errors: checkoutErrors {
      ...CheckoutError
    }
    checkout {
      ...Checkout
    }
  }
  checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
    checkout {
      ...Checkout
    }
    errors: checkoutErrors {
      ...CheckoutError
    }
  }
}
    ${CheckoutErrorFragmentDoc}
${CheckoutFragmentDoc}`;
export type UpdateCheckoutShippingAddressMutationFn = Apollo.MutationFunction<UpdateCheckoutShippingAddressMutation, UpdateCheckoutShippingAddressMutationVariables>;

/**
 * __useUpdateCheckoutShippingAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutShippingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutShippingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutShippingAddressMutation, { data, loading, error }] = useUpdateCheckoutShippingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      shippingAddress: // value for 'shippingAddress'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateCheckoutShippingAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutShippingAddressMutation, UpdateCheckoutShippingAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutShippingAddressMutation, UpdateCheckoutShippingAddressMutationVariables>(UpdateCheckoutShippingAddressDocument, options);
      }
export type UpdateCheckoutShippingAddressMutationHookResult = ReturnType<typeof useUpdateCheckoutShippingAddressMutation>;
export type UpdateCheckoutShippingAddressMutationResult = Apollo.MutationResult<UpdateCheckoutShippingAddressMutation>;
export type UpdateCheckoutShippingAddressMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutShippingAddressMutation, UpdateCheckoutShippingAddressMutationVariables>;
export const UpdateCheckoutBillingAddressDocument = gql`
    mutation UpdateCheckoutBillingAddress($checkoutId: ID!, $billingAddress: AddressInput!) {
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
    ${CheckoutErrorFragmentDoc}
${CheckoutFragmentDoc}`;
export type UpdateCheckoutBillingAddressMutationFn = Apollo.MutationFunction<UpdateCheckoutBillingAddressMutation, UpdateCheckoutBillingAddressMutationVariables>;

/**
 * __useUpdateCheckoutBillingAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutBillingAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutBillingAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutBillingAddressMutation, { data, loading, error }] = useUpdateCheckoutBillingAddressMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      billingAddress: // value for 'billingAddress'
 *   },
 * });
 */
export function useUpdateCheckoutBillingAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutBillingAddressMutation, UpdateCheckoutBillingAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutBillingAddressMutation, UpdateCheckoutBillingAddressMutationVariables>(UpdateCheckoutBillingAddressDocument, options);
      }
export type UpdateCheckoutBillingAddressMutationHookResult = ReturnType<typeof useUpdateCheckoutBillingAddressMutation>;
export type UpdateCheckoutBillingAddressMutationResult = Apollo.MutationResult<UpdateCheckoutBillingAddressMutation>;
export type UpdateCheckoutBillingAddressMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutBillingAddressMutation, UpdateCheckoutBillingAddressMutationVariables>;
export const UpdateCheckoutAddressTypeDocument = gql`
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
export type UpdateCheckoutAddressTypeMutationFn = Apollo.MutationFunction<UpdateCheckoutAddressTypeMutation, UpdateCheckoutAddressTypeMutationVariables>;

/**
 * __useUpdateCheckoutAddressTypeMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutAddressTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutAddressTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutAddressTypeMutation, { data, loading, error }] = useUpdateCheckoutAddressTypeMutation({
 *   variables: {
 *      addressId: // value for 'addressId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateCheckoutAddressTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutAddressTypeMutation, UpdateCheckoutAddressTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutAddressTypeMutation, UpdateCheckoutAddressTypeMutationVariables>(UpdateCheckoutAddressTypeDocument, options);
      }
export type UpdateCheckoutAddressTypeMutationHookResult = ReturnType<typeof useUpdateCheckoutAddressTypeMutation>;
export type UpdateCheckoutAddressTypeMutationResult = Apollo.MutationResult<UpdateCheckoutAddressTypeMutation>;
export type UpdateCheckoutAddressTypeMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutAddressTypeMutation, UpdateCheckoutAddressTypeMutationVariables>;
export const UpdateCheckoutShippingMethodDocument = gql`
    mutation UpdateCheckoutShippingMethod($checkoutId: ID!, $shippingMethodId: ID!) {
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
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type UpdateCheckoutShippingMethodMutationFn = Apollo.MutationFunction<UpdateCheckoutShippingMethodMutation, UpdateCheckoutShippingMethodMutationVariables>;

/**
 * __useUpdateCheckoutShippingMethodMutation__
 *
 * To run a mutation, you first call `useUpdateCheckoutShippingMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCheckoutShippingMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCheckoutShippingMethodMutation, { data, loading, error }] = useUpdateCheckoutShippingMethodMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      shippingMethodId: // value for 'shippingMethodId'
 *   },
 * });
 */
export function useUpdateCheckoutShippingMethodMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCheckoutShippingMethodMutation, UpdateCheckoutShippingMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCheckoutShippingMethodMutation, UpdateCheckoutShippingMethodMutationVariables>(UpdateCheckoutShippingMethodDocument, options);
      }
export type UpdateCheckoutShippingMethodMutationHookResult = ReturnType<typeof useUpdateCheckoutShippingMethodMutation>;
export type UpdateCheckoutShippingMethodMutationResult = Apollo.MutationResult<UpdateCheckoutShippingMethodMutation>;
export type UpdateCheckoutShippingMethodMutationOptions = Apollo.BaseMutationOptions<UpdateCheckoutShippingMethodMutation, UpdateCheckoutShippingMethodMutationVariables>;
export const AddCheckoutPromoCodeDocument = gql`
    mutation AddCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
  checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
    checkout {
      ...Checkout
    }
    errors: checkoutErrors {
      ...CheckoutError
    }
  }
}
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type AddCheckoutPromoCodeMutationFn = Apollo.MutationFunction<AddCheckoutPromoCodeMutation, AddCheckoutPromoCodeMutationVariables>;

/**
 * __useAddCheckoutPromoCodeMutation__
 *
 * To run a mutation, you first call `useAddCheckoutPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCheckoutPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCheckoutPromoCodeMutation, { data, loading, error }] = useAddCheckoutPromoCodeMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      promoCode: // value for 'promoCode'
 *   },
 * });
 */
export function useAddCheckoutPromoCodeMutation(baseOptions?: Apollo.MutationHookOptions<AddCheckoutPromoCodeMutation, AddCheckoutPromoCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCheckoutPromoCodeMutation, AddCheckoutPromoCodeMutationVariables>(AddCheckoutPromoCodeDocument, options);
      }
export type AddCheckoutPromoCodeMutationHookResult = ReturnType<typeof useAddCheckoutPromoCodeMutation>;
export type AddCheckoutPromoCodeMutationResult = Apollo.MutationResult<AddCheckoutPromoCodeMutation>;
export type AddCheckoutPromoCodeMutationOptions = Apollo.BaseMutationOptions<AddCheckoutPromoCodeMutation, AddCheckoutPromoCodeMutationVariables>;
export const RemoveCheckoutPromoCodeDocument = gql`
    mutation RemoveCheckoutPromoCode($checkoutId: ID!, $promoCode: String!) {
  checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
    checkout {
      ...Checkout
    }
    errors: checkoutErrors {
      ...CheckoutError
    }
  }
}
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type RemoveCheckoutPromoCodeMutationFn = Apollo.MutationFunction<RemoveCheckoutPromoCodeMutation, RemoveCheckoutPromoCodeMutationVariables>;

/**
 * __useRemoveCheckoutPromoCodeMutation__
 *
 * To run a mutation, you first call `useRemoveCheckoutPromoCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCheckoutPromoCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCheckoutPromoCodeMutation, { data, loading, error }] = useRemoveCheckoutPromoCodeMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      promoCode: // value for 'promoCode'
 *   },
 * });
 */
export function useRemoveCheckoutPromoCodeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCheckoutPromoCodeMutation, RemoveCheckoutPromoCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCheckoutPromoCodeMutation, RemoveCheckoutPromoCodeMutationVariables>(RemoveCheckoutPromoCodeDocument, options);
      }
export type RemoveCheckoutPromoCodeMutationHookResult = ReturnType<typeof useRemoveCheckoutPromoCodeMutation>;
export type RemoveCheckoutPromoCodeMutationResult = Apollo.MutationResult<RemoveCheckoutPromoCodeMutation>;
export type RemoveCheckoutPromoCodeMutationOptions = Apollo.BaseMutationOptions<RemoveCheckoutPromoCodeMutation, RemoveCheckoutPromoCodeMutationVariables>;
export const CreateCheckoutPaymentDocument = gql`
    mutation CreateCheckoutPayment($checkoutId: ID!, $paymentInput: PaymentInput!) {
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
    ${CheckoutFragmentDoc}
${PaymentFragmentDoc}
${PaymentErrorFragmentDoc}`;
export type CreateCheckoutPaymentMutationFn = Apollo.MutationFunction<CreateCheckoutPaymentMutation, CreateCheckoutPaymentMutationVariables>;

/**
 * __useCreateCheckoutPaymentMutation__
 *
 * To run a mutation, you first call `useCreateCheckoutPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCheckoutPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCheckoutPaymentMutation, { data, loading, error }] = useCreateCheckoutPaymentMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentInput: // value for 'paymentInput'
 *   },
 * });
 */
export function useCreateCheckoutPaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCheckoutPaymentMutation, CreateCheckoutPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCheckoutPaymentMutation, CreateCheckoutPaymentMutationVariables>(CreateCheckoutPaymentDocument, options);
      }
export type CreateCheckoutPaymentMutationHookResult = ReturnType<typeof useCreateCheckoutPaymentMutation>;
export type CreateCheckoutPaymentMutationResult = Apollo.MutationResult<CreateCheckoutPaymentMutation>;
export type CreateCheckoutPaymentMutationOptions = Apollo.BaseMutationOptions<CreateCheckoutPaymentMutation, CreateCheckoutPaymentMutationVariables>;
export const CompleteCheckoutDocument = gql`
    mutation CompleteCheckout($checkoutId: ID!, $paymentData: JSONString, $redirectUrl: String, $storeSource: Boolean) {
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
    ${CheckoutErrorFragmentDoc}
${OrderDetailFragmentDoc}`;
export type CompleteCheckoutMutationFn = Apollo.MutationFunction<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>;

/**
 * __useCompleteCheckoutMutation__
 *
 * To run a mutation, you first call `useCompleteCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeCheckoutMutation, { data, loading, error }] = useCompleteCheckoutMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      paymentData: // value for 'paymentData'
 *      redirectUrl: // value for 'redirectUrl'
 *      storeSource: // value for 'storeSource'
 *   },
 * });
 */
export function useCompleteCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>(CompleteCheckoutDocument, options);
      }
export type CompleteCheckoutMutationHookResult = ReturnType<typeof useCompleteCheckoutMutation>;
export type CompleteCheckoutMutationResult = Apollo.MutationResult<CompleteCheckoutMutation>;
export type CompleteCheckoutMutationOptions = Apollo.BaseMutationOptions<CompleteCheckoutMutation, CompleteCheckoutMutationVariables>;
export const CheckoutPaymentMethodUpdateDocument = gql`
    mutation checkoutPaymentMethodUpdate($checkoutId: ID!, $gatewayId: String!, $useCashback: Boolean!) {
  checkoutPaymentMethodUpdate(
    checkoutId: $checkoutId
    gatewayId: $gatewayId
    useCashback: $useCashback
  ) {
    checkout {
      ...Checkout
    }
    checkoutErrors {
      field
      message
      code
    }
  }
}
    ${CheckoutFragmentDoc}`;
export type CheckoutPaymentMethodUpdateMutationFn = Apollo.MutationFunction<CheckoutPaymentMethodUpdateMutation, CheckoutPaymentMethodUpdateMutationVariables>;

/**
 * __useCheckoutPaymentMethodUpdateMutation__
 *
 * To run a mutation, you first call `useCheckoutPaymentMethodUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutPaymentMethodUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutPaymentMethodUpdateMutation, { data, loading, error }] = useCheckoutPaymentMethodUpdateMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *      gatewayId: // value for 'gatewayId'
 *      useCashback: // value for 'useCashback'
 *   },
 * });
 */
export function useCheckoutPaymentMethodUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutPaymentMethodUpdateMutation, CheckoutPaymentMethodUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckoutPaymentMethodUpdateMutation, CheckoutPaymentMethodUpdateMutationVariables>(CheckoutPaymentMethodUpdateDocument, options);
      }
export type CheckoutPaymentMethodUpdateMutationHookResult = ReturnType<typeof useCheckoutPaymentMethodUpdateMutation>;
export type CheckoutPaymentMethodUpdateMutationResult = Apollo.MutationResult<CheckoutPaymentMethodUpdateMutation>;
export type CheckoutPaymentMethodUpdateMutationOptions = Apollo.BaseMutationOptions<CheckoutPaymentMethodUpdateMutation, CheckoutPaymentMethodUpdateMutationVariables>;
export const CreateRazorpayOrderDocument = gql`
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
export type CreateRazorpayOrderMutationFn = Apollo.MutationFunction<CreateRazorpayOrderMutation, CreateRazorpayOrderMutationVariables>;

/**
 * __useCreateRazorpayOrderMutation__
 *
 * To run a mutation, you first call `useCreateRazorpayOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRazorpayOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRazorpayOrderMutation, { data, loading, error }] = useCreateRazorpayOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRazorpayOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateRazorpayOrderMutation, CreateRazorpayOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRazorpayOrderMutation, CreateRazorpayOrderMutationVariables>(CreateRazorpayOrderDocument, options);
      }
export type CreateRazorpayOrderMutationHookResult = ReturnType<typeof useCreateRazorpayOrderMutation>;
export type CreateRazorpayOrderMutationResult = Apollo.MutationResult<CreateRazorpayOrderMutation>;
export type CreateRazorpayOrderMutationOptions = Apollo.BaseMutationOptions<CreateRazorpayOrderMutation, CreateRazorpayOrderMutationVariables>;
export const PaytmTxnCreateDocument = gql`
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
export type PaytmTxnCreateMutationFn = Apollo.MutationFunction<PaytmTxnCreateMutation, PaytmTxnCreateMutationVariables>;

/**
 * __usePaytmTxnCreateMutation__
 *
 * To run a mutation, you first call `usePaytmTxnCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaytmTxnCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paytmTxnCreateMutation, { data, loading, error }] = usePaytmTxnCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePaytmTxnCreateMutation(baseOptions?: Apollo.MutationHookOptions<PaytmTxnCreateMutation, PaytmTxnCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PaytmTxnCreateMutation, PaytmTxnCreateMutationVariables>(PaytmTxnCreateDocument, options);
      }
export type PaytmTxnCreateMutationHookResult = ReturnType<typeof usePaytmTxnCreateMutation>;
export type PaytmTxnCreateMutationResult = Apollo.MutationResult<PaytmTxnCreateMutation>;
export type PaytmTxnCreateMutationOptions = Apollo.BaseMutationOptions<PaytmTxnCreateMutation, PaytmTxnCreateMutationVariables>;
export const GetWalletDocument = gql`
    query GetWallet {
  wallet {
    id
    amount
  }
}
    `;

/**
 * __useGetWalletQuery__
 *
 * To run a query within a React component, call `useGetWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWalletQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWalletQuery(baseOptions?: Apollo.QueryHookOptions<GetWalletQuery, GetWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWalletQuery, GetWalletQueryVariables>(GetWalletDocument, options);
      }
export function useGetWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWalletQuery, GetWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWalletQuery, GetWalletQueryVariables>(GetWalletDocument, options);
        }
export type GetWalletQueryHookResult = ReturnType<typeof useGetWalletQuery>;
export type GetWalletLazyQueryHookResult = ReturnType<typeof useGetWalletLazyQuery>;
export type GetWalletQueryResult = Apollo.QueryResult<GetWalletQuery, GetWalletQueryVariables>;
export const RefreshCheckoutDocument = gql`
    mutation RefreshCheckout($checkoutId: ID!) {
  checkoutRefresh(checkoutId: $checkoutId) {
    checkout {
      ...Checkout
    }
    errors: checkoutErrors {
      ...CheckoutError
    }
  }
}
    ${CheckoutFragmentDoc}
${CheckoutErrorFragmentDoc}`;
export type RefreshCheckoutMutationFn = Apollo.MutationFunction<RefreshCheckoutMutation, RefreshCheckoutMutationVariables>;

/**
 * __useRefreshCheckoutMutation__
 *
 * To run a mutation, you first call `useRefreshCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshCheckoutMutation, { data, loading, error }] = useRefreshCheckoutMutation({
 *   variables: {
 *      checkoutId: // value for 'checkoutId'
 *   },
 * });
 */
export function useRefreshCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<RefreshCheckoutMutation, RefreshCheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshCheckoutMutation, RefreshCheckoutMutationVariables>(RefreshCheckoutDocument, options);
      }
export type RefreshCheckoutMutationHookResult = ReturnType<typeof useRefreshCheckoutMutation>;
export type RefreshCheckoutMutationResult = Apollo.MutationResult<RefreshCheckoutMutation>;
export type RefreshCheckoutMutationOptions = Apollo.BaseMutationOptions<RefreshCheckoutMutation, RefreshCheckoutMutationVariables>;
export const ReOrderDocument = gql`
    mutation ReOrder($orderId: ID, $pincode: String, $skipLines: Boolean) {
  reOrder(orderId: $orderId, pincode: $pincode, skipLines: $skipLines) {
    reorderErrors {
      field
      message
      code
    }
    checkout {
      ...Checkout
    }
  }
}
    ${CheckoutFragmentDoc}`;
export type ReOrderMutationFn = Apollo.MutationFunction<ReOrderMutation, ReOrderMutationVariables>;

/**
 * __useReOrderMutation__
 *
 * To run a mutation, you first call `useReOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reOrderMutation, { data, loading, error }] = useReOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      pincode: // value for 'pincode'
 *      skipLines: // value for 'skipLines'
 *   },
 * });
 */
export function useReOrderMutation(baseOptions?: Apollo.MutationHookOptions<ReOrderMutation, ReOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReOrderMutation, ReOrderMutationVariables>(ReOrderDocument, options);
      }
export type ReOrderMutationHookResult = ReturnType<typeof useReOrderMutation>;
export type ReOrderMutationResult = Apollo.MutationResult<ReOrderMutation>;
export type ReOrderMutationOptions = Apollo.BaseMutationOptions<ReOrderMutation, ReOrderMutationVariables>;
export const UserDetailsDocument = gql`
    query UserDetails {
  user: me {
    ...UserFragment
  }
  authenticated @client
  authenticating @client
}
    ${UserFragmentDoc}`;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserDetailsQuery(baseOptions?: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;
export const CheckoutDetailsDocument = gql`
    query CheckoutDetails($token: UUID) {
  checkout(token: $token) {
    ...Checkout
  }
  checkoutUpdated @client
}
    ${CheckoutFragmentDoc}`;

/**
 * __useCheckoutDetailsQuery__
 *
 * To run a query within a React component, call `useCheckoutDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutDetailsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckoutDetailsQuery(baseOptions?: Apollo.QueryHookOptions<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>(CheckoutDetailsDocument, options);
      }
export function useCheckoutDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>(CheckoutDetailsDocument, options);
        }
export type CheckoutDetailsQueryHookResult = ReturnType<typeof useCheckoutDetailsQuery>;
export type CheckoutDetailsLazyQueryHookResult = ReturnType<typeof useCheckoutDetailsLazyQuery>;
export type CheckoutDetailsQueryResult = Apollo.QueryResult<CheckoutDetailsQuery, CheckoutDetailsQueryVariables>;
export const GetCartItemsDocument = gql`
    query GetCartItems {
  cartItems @client {
    ...CheckoutLine
  }
}
    ${CheckoutLineFragmentDoc}`;

/**
 * __useGetCartItemsQuery__
 *
 * To run a query within a React component, call `useGetCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
      }
export function useGetCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
        }
export type GetCartItemsQueryHookResult = ReturnType<typeof useGetCartItemsQuery>;
export type GetCartItemsLazyQueryHookResult = ReturnType<typeof useGetCartItemsLazyQuery>;
export type GetCartItemsQueryResult = Apollo.QueryResult<GetCartItemsQuery, GetCartItemsQueryVariables>;
export const GetLocalCheckoutDocument = gql`
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
    ${CheckoutFragmentDoc}
${OrderDetailFragmentDoc}`;

/**
 * __useGetLocalCheckoutQuery__
 *
 * To run a query within a React component, call `useGetLocalCheckoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocalCheckoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocalCheckoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLocalCheckoutQuery(baseOptions?: Apollo.QueryHookOptions<GetLocalCheckoutQuery, GetLocalCheckoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocalCheckoutQuery, GetLocalCheckoutQueryVariables>(GetLocalCheckoutDocument, options);
      }
export function useGetLocalCheckoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocalCheckoutQuery, GetLocalCheckoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocalCheckoutQuery, GetLocalCheckoutQueryVariables>(GetLocalCheckoutDocument, options);
        }
export type GetLocalCheckoutQueryHookResult = ReturnType<typeof useGetLocalCheckoutQuery>;
export type GetLocalCheckoutLazyQueryHookResult = ReturnType<typeof useGetLocalCheckoutLazyQuery>;
export type GetLocalCheckoutQueryResult = Apollo.QueryResult<GetLocalCheckoutQuery, GetLocalCheckoutQueryVariables>;
export const DiscountsAndCashbackQueryDocument = gql`
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

/**
 * __useDiscountsAndCashbackQuery__
 *
 * To run a query within a React component, call `useDiscountsAndCashbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscountsAndCashbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscountsAndCashbackQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDiscountsAndCashbackQuery(baseOptions: Apollo.QueryHookOptions<DiscountsAndCashbackQuery, DiscountsAndCashbackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiscountsAndCashbackQuery, DiscountsAndCashbackQueryVariables>(DiscountsAndCashbackQueryDocument, options);
      }
export function useDiscountsAndCashbackQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscountsAndCashbackQuery, DiscountsAndCashbackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiscountsAndCashbackQuery, DiscountsAndCashbackQueryVariables>(DiscountsAndCashbackQueryDocument, options);
        }
export type DiscountsAndCashbackQueryHookResult = ReturnType<typeof useDiscountsAndCashbackQuery>;
export type DiscountsAndCashbackQueryLazyQueryHookResult = ReturnType<typeof useDiscountsAndCashbackQueryLazyQuery>;
export type DiscountsAndCashbackQueryQueryResult = Apollo.QueryResult<DiscountsAndCashbackQuery, DiscountsAndCashbackQueryVariables>;
export const UserCheckoutDetailsDocument = gql`
    query UserCheckoutDetails {
  me {
    id
    checkout {
      ...Checkout
    }
  }
}
    ${CheckoutFragmentDoc}`;

/**
 * __useUserCheckoutDetailsQuery__
 *
 * To run a query within a React component, call `useUserCheckoutDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCheckoutDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCheckoutDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCheckoutDetailsQuery(baseOptions?: Apollo.QueryHookOptions<UserCheckoutDetailsQuery, UserCheckoutDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCheckoutDetailsQuery, UserCheckoutDetailsQueryVariables>(UserCheckoutDetailsDocument, options);
      }
export function useUserCheckoutDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCheckoutDetailsQuery, UserCheckoutDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCheckoutDetailsQuery, UserCheckoutDetailsQueryVariables>(UserCheckoutDetailsDocument, options);
        }
export type UserCheckoutDetailsQueryHookResult = ReturnType<typeof useUserCheckoutDetailsQuery>;
export type UserCheckoutDetailsLazyQueryHookResult = ReturnType<typeof useUserCheckoutDetailsLazyQuery>;
export type UserCheckoutDetailsQueryResult = Apollo.QueryResult<UserCheckoutDetailsQuery, UserCheckoutDetailsQueryVariables>;
export const PincodeDocument = gql`
    query Pincode($pin: String) {
  pincode(pin: $pin) {
    city
    state
    serviceable
  }
}
    `;

/**
 * __usePincodeQuery__
 *
 * To run a query within a React component, call `usePincodeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePincodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePincodeQuery({
 *   variables: {
 *      pin: // value for 'pin'
 *   },
 * });
 */
export function usePincodeQuery(baseOptions?: Apollo.QueryHookOptions<PincodeQuery, PincodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PincodeQuery, PincodeQueryVariables>(PincodeDocument, options);
      }
export function usePincodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PincodeQuery, PincodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PincodeQuery, PincodeQueryVariables>(PincodeDocument, options);
        }
export type PincodeQueryHookResult = ReturnType<typeof usePincodeQuery>;
export type PincodeLazyQueryHookResult = ReturnType<typeof usePincodeLazyQuery>;
export type PincodeQueryResult = Apollo.QueryResult<PincodeQuery, PincodeQueryVariables>;
export const OrdersByUserDocument = gql`
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

/**
 * __useOrdersByUserQuery__
 *
 * To run a query within a React component, call `useOrdersByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersByUserQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useOrdersByUserQuery(baseOptions: Apollo.QueryHookOptions<OrdersByUserQuery, OrdersByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersByUserQuery, OrdersByUserQueryVariables>(OrdersByUserDocument, options);
      }
export function useOrdersByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersByUserQuery, OrdersByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersByUserQuery, OrdersByUserQueryVariables>(OrdersByUserDocument, options);
        }
export type OrdersByUserQueryHookResult = ReturnType<typeof useOrdersByUserQuery>;
export type OrdersByUserLazyQueryHookResult = ReturnType<typeof useOrdersByUserLazyQuery>;
export type OrdersByUserQueryResult = Apollo.QueryResult<OrdersByUserQuery, OrdersByUserQueryVariables>;