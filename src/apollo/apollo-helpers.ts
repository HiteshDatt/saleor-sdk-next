import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccountAddressCreateKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AccountAddressCreateKeySpecifier)[];
export type AccountAddressCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountAddressDeleteKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AccountAddressDeleteKeySpecifier)[];
export type AccountAddressDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountAddressUpdateKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AccountAddressUpdateKeySpecifier)[];
export type AccountAddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountCreateKeySpecifier = ('errors' | 'requiresConfirmation' | 'accountErrors' | 'user' | AccountCreateKeySpecifier)[];
export type AccountCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountDeleteKeySpecifier = ('errors' | 'accountErrors' | 'user' | AccountDeleteKeySpecifier)[];
export type AccountDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountErrorKeySpecifier = ('field' | 'message' | 'code' | AccountErrorKeySpecifier)[];
export type AccountErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRegisterKeySpecifier = ('errors' | 'requiresConfirmation' | 'accountErrors' | 'user' | AccountRegisterKeySpecifier)[];
export type AccountRegisterFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresConfirmation?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRegisterV2KeySpecifier = ('errors' | 'isNewUser' | 'isActiveUser' | 'accountErrors' | 'user' | AccountRegisterV2KeySpecifier)[];
export type AccountRegisterV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	isNewUser?: FieldPolicy<any> | FieldReadFunction<any>,
	isActiveUser?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountRequestDeletionKeySpecifier = ('errors' | 'accountErrors' | AccountRequestDeletionKeySpecifier)[];
export type AccountRequestDeletionFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountSetDefaultAddressKeySpecifier = ('errors' | 'user' | 'accountErrors' | AccountSetDefaultAddressKeySpecifier)[];
export type AccountSetDefaultAddressFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountUpdateKeySpecifier = ('errors' | 'accountErrors' | 'user' | AccountUpdateKeySpecifier)[];
export type AccountUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountUpdateMetaKeySpecifier = ('errors' | 'accountErrors' | 'user' | AccountUpdateMetaKeySpecifier)[];
export type AccountUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddTagsKeySpecifier = ('errors' | 'message' | 'tagErrors' | AddTagsKeySpecifier)[];
export type AddTagsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	tagErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddTagsCsvKeySpecifier = ('errors' | 'message' | 'tagErrors' | AddTagsCsvKeySpecifier)[];
export type AddTagsCsvFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	tagErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('id' | 'firstName' | 'lastName' | 'companyName' | 'streetAddress1' | 'streetAddress2' | 'city' | 'cityArea' | 'postalCode' | 'country' | 'countryArea' | 'phone' | 'isDefaultShippingAddress' | 'isDefaultBillingAddress' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress1?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	cityArea?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryArea?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | AddressCountableConnectionKeySpecifier)[];
export type AddressCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressCountableEdgeKeySpecifier = ('node' | 'cursor' | AddressCountableEdgeKeySpecifier)[];
export type AddressCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressCreateKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AddressCreateKeySpecifier)[];
export type AddressCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressDeleteKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AddressDeleteKeySpecifier)[];
export type AddressDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressLinkTypeKeySpecifier = ('id' | 'type' | 'address' | 'created' | 'updated' | AddressLinkTypeKeySpecifier)[];
export type AddressLinkTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressSetDefaultKeySpecifier = ('errors' | 'user' | 'accountErrors' | AddressSetDefaultKeySpecifier)[];
export type AddressSetDefaultFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressUpdateKeySpecifier = ('errors' | 'user' | 'accountErrors' | 'address' | AddressUpdateKeySpecifier)[];
export type AddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressValidationDataKeySpecifier = ('countryCode' | 'countryName' | 'addressFormat' | 'addressLatinFormat' | 'allowedFields' | 'requiredFields' | 'upperFields' | 'countryAreaType' | 'countryAreaChoices' | 'cityType' | 'cityChoices' | 'cityAreaType' | 'cityAreaChoices' | 'postalCodeType' | 'postalCodeMatchers' | 'postalCodeExamples' | 'postalCodePrefix' | AddressValidationDataKeySpecifier)[];
export type AddressValidationDataFieldPolicy = {
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	countryName?: FieldPolicy<any> | FieldReadFunction<any>,
	addressFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLatinFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	allowedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredFields?: FieldPolicy<any> | FieldReadFunction<any>,
	upperFields?: FieldPolicy<any> | FieldReadFunction<any>,
	countryAreaType?: FieldPolicy<any> | FieldReadFunction<any>,
	countryAreaChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	cityType?: FieldPolicy<any> | FieldReadFunction<any>,
	cityChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	cityAreaType?: FieldPolicy<any> | FieldReadFunction<any>,
	cityAreaChoices?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeType?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeMatchers?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodeExamples?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCodePrefix?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllocationKeySpecifier = ('id' | 'quantity' | 'warehouse' | AllocationKeySpecifier)[];
export type AllocationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiCallsTypeKeySpecifier = ('id' | 'created' | 'userEmail' | 'description' | 'apiName' | 'user' | 'actionPerformed' | ApiCallsTypeKeySpecifier)[];
export type ApiCallsTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	apiName?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	actionPerformed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiCallsTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ApiCallsTypeConnectionKeySpecifier)[];
export type ApiCallsTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiCallsTypeEdgeKeySpecifier = ('node' | 'cursor' | ApiCallsTypeEdgeKeySpecifier)[];
export type ApiCallsTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppKeySpecifier = ('id' | 'name' | 'created' | 'isActive' | 'permissions' | 'tokens' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'type' | 'webhooks' | 'aboutApp' | 'dataPrivacy' | 'dataPrivacyUrl' | 'homepageUrl' | 'supportUrl' | 'configurationUrl' | 'appUrl' | 'version' | 'accessToken' | AppKeySpecifier)[];
export type AppFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>,
	aboutApp?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacy?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	supportUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	appUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppActivateKeySpecifier = ('errors' | 'appErrors' | 'app' | AppActivateKeySpecifier)[];
export type AppActivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | AppCountableConnectionKeySpecifier)[];
export type AppCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCountableEdgeKeySpecifier = ('node' | 'cursor' | AppCountableEdgeKeySpecifier)[];
export type AppCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppCreateKeySpecifier = ('errors' | 'authToken' | 'appErrors' | 'app' | AppCreateKeySpecifier)[];
export type AppCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeactivateKeySpecifier = ('errors' | 'appErrors' | 'app' | AppDeactivateKeySpecifier)[];
export type AppDeactivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeleteKeySpecifier = ('errors' | 'appErrors' | 'app' | AppDeleteKeySpecifier)[];
export type AppDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppDeleteFailedInstallationKeySpecifier = ('errors' | 'appErrors' | 'appInstallation' | AppDeleteFailedInstallationKeySpecifier)[];
export type AppDeleteFailedInstallationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppErrorKeySpecifier = ('field' | 'message' | 'code' | 'permissions' | AppErrorKeySpecifier)[];
export type AppErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppFetchManifestKeySpecifier = ('errors' | 'manifest' | 'appErrors' | AppFetchManifestKeySpecifier)[];
export type AppFetchManifestFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	manifest?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppInstallKeySpecifier = ('errors' | 'appErrors' | 'appInstallation' | AppInstallKeySpecifier)[];
export type AppInstallFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppInstallationKeySpecifier = ('appName' | 'manifestUrl' | 'id' | 'status' | 'createdAt' | 'updatedAt' | 'message' | AppInstallationKeySpecifier)[];
export type AppInstallationFieldPolicy = {
	appName?: FieldPolicy<any> | FieldReadFunction<any>,
	manifestUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppRetryInstallKeySpecifier = ('errors' | 'appErrors' | 'appInstallation' | AppRetryInstallKeySpecifier)[];
export type AppRetryInstallFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstallation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenKeySpecifier = ('name' | 'authToken' | 'id' | AppTokenKeySpecifier)[];
export type AppTokenFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenCreateKeySpecifier = ('errors' | 'authToken' | 'appErrors' | 'appToken' | AppTokenCreateKeySpecifier)[];
export type AppTokenCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenDeleteKeySpecifier = ('errors' | 'appErrors' | 'appToken' | AppTokenDeleteKeySpecifier)[];
export type AppTokenDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	appToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppTokenVerifyKeySpecifier = ('errors' | 'valid' | 'appErrors' | AppTokenVerifyKeySpecifier)[];
export type AppTokenVerifyFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppUpdateKeySpecifier = ('errors' | 'appErrors' | 'app' | AppUpdateKeySpecifier)[];
export type AppUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	appErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveOrderErrorKeySpecifier = ('field' | 'message' | 'code' | ArchiveOrderErrorKeySpecifier)[];
export type ArchiveOrderErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveOrderTypeKeySpecifier = ('metadata' | 'id' | 'privateMetadata' | 'foreignOrderId' | 'created' | 'placedOn' | 'userEmail' | 'user' | 'status' | 'billingAddress' | 'shippingAddress' | 'totalNetAmount' | 'totalGrossAmount' | 'discountAmount' | 'discountName' | 'currency' | 'languageCode' | 'note' | ArchiveOrderTypeKeySpecifier)[];
export type ArchiveOrderTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	foreignOrderId?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	placedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	totalNetAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalGrossAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveOrderTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ArchiveOrderTypeConnectionKeySpecifier)[];
export type ArchiveOrderTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveOrderTypeEdgeKeySpecifier = ('node' | 'cursor' | ArchiveOrderTypeEdgeKeySpecifier)[];
export type ArchiveOrderTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssignNavigationKeySpecifier = ('errors' | 'menu' | 'menuErrors' | AssignNavigationKeySpecifier)[];
export type AssignNavigationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('id' | 'productTypes' | 'productVariantTypes' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'inputType' | 'name' | 'slug' | 'values' | 'valueRequired' | 'visibleInStorefront' | 'filterableInStorefront' | 'filterableInDashboard' | 'availableInGrid' | 'translation' | 'storefrontSearchPosition' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>,
	valueRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleInStorefront?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInStorefront?: FieldPolicy<any> | FieldReadFunction<any>,
	filterableInDashboard?: FieldPolicy<any> | FieldReadFunction<any>,
	availableInGrid?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	storefrontSearchPosition?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeAssignKeySpecifier = ('errors' | 'productType' | 'productErrors' | AttributeAssignKeySpecifier)[];
export type AttributeAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | AttributeBulkDeleteKeySpecifier)[];
export type AttributeBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeClearMetaKeySpecifier = ('errors' | 'productErrors' | 'attribute' | AttributeClearMetaKeySpecifier)[];
export type AttributeClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'attribute' | AttributeClearPrivateMetaKeySpecifier)[];
export type AttributeClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | AttributeCountableConnectionKeySpecifier)[];
export type AttributeCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCountableEdgeKeySpecifier = ('node' | 'cursor' | AttributeCountableEdgeKeySpecifier)[];
export type AttributeCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeCreateKeySpecifier = ('errors' | 'attribute' | 'productErrors' | AttributeCreateKeySpecifier)[];
export type AttributeCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeDeleteKeySpecifier = ('errors' | 'productErrors' | 'attribute' | AttributeDeleteKeySpecifier)[];
export type AttributeDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeReorderValuesKeySpecifier = ('errors' | 'attribute' | 'productErrors' | AttributeReorderValuesKeySpecifier)[];
export type AttributeReorderValuesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'attribute' | AttributeTranslatableContentKeySpecifier)[];
export type AttributeTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslateKeySpecifier = ('errors' | 'translationErrors' | 'attribute' | AttributeTranslateKeySpecifier)[];
export type AttributeTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeTranslationKeySpecifier = ('id' | 'name' | 'language' | AttributeTranslationKeySpecifier)[];
export type AttributeTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUnassignKeySpecifier = ('errors' | 'productType' | 'productErrors' | AttributeUnassignKeySpecifier)[];
export type AttributeUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUpdateKeySpecifier = ('errors' | 'attribute' | 'productErrors' | AttributeUpdateKeySpecifier)[];
export type AttributeUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'attribute' | AttributeUpdateMetaKeySpecifier)[];
export type AttributeUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'attribute' | AttributeUpdatePrivateMetaKeySpecifier)[];
export type AttributeUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueKeySpecifier = ('id' | 'name' | 'slug' | 'type' | 'translation' | 'inputType' | AttributeValueKeySpecifier)[];
export type AttributeValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	inputType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | AttributeValueBulkDeleteKeySpecifier)[];
export type AttributeValueBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueCreateKeySpecifier = ('errors' | 'attribute' | 'productErrors' | 'attributeValue' | AttributeValueCreateKeySpecifier)[];
export type AttributeValueCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueDeleteKeySpecifier = ('errors' | 'attribute' | 'productErrors' | 'attributeValue' | AttributeValueDeleteKeySpecifier)[];
export type AttributeValueDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'attributeValue' | AttributeValueTranslatableContentKeySpecifier)[];
export type AttributeValueTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslateKeySpecifier = ('errors' | 'translationErrors' | 'attributeValue' | AttributeValueTranslateKeySpecifier)[];
export type AttributeValueTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueTranslationKeySpecifier = ('id' | 'name' | 'language' | AttributeValueTranslationKeySpecifier)[];
export type AttributeValueTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueUpdateKeySpecifier = ('errors' | 'attribute' | 'productErrors' | 'attributeValue' | AttributeValueUpdateKeySpecifier)[];
export type AttributeValueUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorizationKeyKeySpecifier = ('name' | 'key' | AuthorizationKeyKeySpecifier)[];
export type AuthorizationKeyFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorizationKeyAddKeySpecifier = ('errors' | 'authorizationKey' | 'shop' | 'shopErrors' | AuthorizationKeyAddKeySpecifier)[];
export type AuthorizationKeyAddFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizationKey?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorizationKeyDeleteKeySpecifier = ('errors' | 'authorizationKey' | 'shop' | 'shopErrors' | AuthorizationKeyDeleteKeySpecifier)[];
export type AuthorizationKeyDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizationKey?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BannerErrorKeySpecifier = ('field' | 'message' | 'code' | BannerErrorKeySpecifier)[];
export type BannerErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BluedartShipmentCreateKeySpecifier = ('errors' | 'orders' | BluedartShipmentCreateKeySpecifier)[];
export type BluedartShipmentCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkPriceUpdateCSVKeySpecifier = ('errors' | 'message' | 'priceUpdateErrors' | BulkPriceUpdateCSVKeySpecifier)[];
export type BulkPriceUpdateCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	priceUpdateErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkPriceUpdateErrorKeySpecifier = ('field' | 'message' | 'code' | BulkPriceUpdateErrorKeySpecifier)[];
export type BulkPriceUpdateErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkProductErrorKeySpecifier = ('field' | 'message' | 'code' | 'attributes' | 'index' | 'warehouses' | BulkProductErrorKeySpecifier)[];
export type BulkProductErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BulkStockErrorKeySpecifier = ('field' | 'message' | 'code' | 'attributes' | 'index' | BulkStockErrorKeySpecifier)[];
export type BulkStockErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CashbackTypeKeySpecifier = ('amount' | 'willAddOn' | CashbackTypeKeySpecifier)[];
export type CashbackTypeFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	willAddOn?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CashfreeOrderTypeKeySpecifier = ('token' | 'paymentUrl' | CashfreeOrderTypeKeySpecifier)[];
export type CashfreeOrderTypeFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'slug' | 'parent' | 'level' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'ancestors' | 'products' | 'url' | 'description' | 'children' | 'backgroundImage' | 'translation' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | CategoryBulkDeleteKeySpecifier)[];
export type CategoryBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryClearMetaKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryClearMetaKeySpecifier)[];
export type CategoryClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryClearPrivateMetaKeySpecifier)[];
export type CategoryClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | CategoryCountableConnectionKeySpecifier)[];
export type CategoryCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCountableEdgeKeySpecifier = ('node' | 'cursor' | CategoryCountableEdgeKeySpecifier)[];
export type CategoryCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryCreateKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryCreateKeySpecifier)[];
export type CategoryCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryDeleteKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryDeleteKeySpecifier)[];
export type CategoryDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslatableContentKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'description' | 'translation' | 'category' | CategoryTranslatableContentKeySpecifier)[];
export type CategoryTranslatableContentFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslateKeySpecifier = ('errors' | 'translationErrors' | 'category' | CategoryTranslateKeySpecifier)[];
export type CategoryTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryTranslationKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'language' | 'description' | CategoryTranslationKeySpecifier)[];
export type CategoryTranslationFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdateKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryUpdateKeySpecifier)[];
export type CategoryUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryUpdateMetaKeySpecifier)[];
export type CategoryUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'category' | CategoryUpdatePrivateMetaKeySpecifier)[];
export type CategoryUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutKeySpecifier = ('created' | 'lastChange' | 'user' | 'quantity' | 'billingAddress' | 'shippingAddress' | 'shippingMethod' | 'note' | 'discount' | 'discountName' | 'translatedDiscountName' | 'voucherCode' | 'giftCards' | 'id' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'availableShippingMethods' | 'availablePaymentGateways' | 'email' | 'isShippingRequired' | 'lines' | 'shippingPrice' | 'subtotalPrice' | 'token' | 'totalPrice' | 'checkoutUrl' | 'events' | CheckoutKeySpecifier)[];
export type CheckoutFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	lastChange?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedDiscountName?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCode?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentGateways?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAddNoteKeySpecifier = ('errors' | 'checkout' | 'event' | 'checkoutErrors' | CheckoutAddNoteKeySpecifier)[];
export type CheckoutAddNoteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutAddPromoCodeKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutAddPromoCodeKeySpecifier)[];
export type CheckoutAddPromoCodeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutBillingAddressUpdateKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutBillingAddressUpdateKeySpecifier)[];
export type CheckoutBillingAddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutClearMetaKeySpecifier = ('errors' | 'checkoutErrors' | 'checkout' | CheckoutClearMetaKeySpecifier)[];
export type CheckoutClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutClearPrivateMetaKeySpecifier = ('errors' | 'checkoutErrors' | 'checkout' | CheckoutClearPrivateMetaKeySpecifier)[];
export type CheckoutClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCompleteKeySpecifier = ('errors' | 'order' | 'confirmationNeeded' | 'confirmationData' | 'checkoutErrors' | CheckoutCompleteKeySpecifier)[];
export type CheckoutCompleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationNeeded?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationData?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | CheckoutCountableConnectionKeySpecifier)[];
export type CheckoutCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCountableEdgeKeySpecifier = ('node' | 'cursor' | CheckoutCountableEdgeKeySpecifier)[];
export type CheckoutCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCreateKeySpecifier = ('errors' | 'created' | 'checkoutErrors' | 'checkout' | CheckoutCreateKeySpecifier)[];
export type CheckoutCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerAttachKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutCustomerAttachKeySpecifier)[];
export type CheckoutCustomerAttachFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutCustomerDetachKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutCustomerDetachKeySpecifier)[];
export type CheckoutCustomerDetachFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutEmailUpdateKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutEmailUpdateKeySpecifier)[];
export type CheckoutEmailUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutErrorKeySpecifier = ('field' | 'message' | 'code' | 'variants' | CheckoutErrorKeySpecifier)[];
export type CheckoutErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutEventKeySpecifier = ('id' | 'date' | 'type' | 'checkout' | 'parameters' | 'user' | CheckoutEventKeySpecifier)[];
export type CheckoutEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	parameters?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineKeySpecifier = ('id' | 'variant' | 'quantity' | 'data' | 'totalPrice' | 'requiresShipping' | CheckoutLineKeySpecifier)[];
export type CheckoutLineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresShipping?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | CheckoutLineCountableConnectionKeySpecifier)[];
export type CheckoutLineCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineCountableEdgeKeySpecifier = ('node' | 'cursor' | CheckoutLineCountableEdgeKeySpecifier)[];
export type CheckoutLineCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLineDeleteKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutLineDeleteKeySpecifier)[];
export type CheckoutLineDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLinesAddKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutLinesAddKeySpecifier)[];
export type CheckoutLinesAddFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutLinesUpdateKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutLinesUpdateKeySpecifier)[];
export type CheckoutLinesUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutPaymentCreateKeySpecifier = ('errors' | 'checkout' | 'payment' | 'paymentErrors' | CheckoutPaymentCreateKeySpecifier)[];
export type CheckoutPaymentCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutRefreshKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutRefreshKeySpecifier)[];
export type CheckoutRefreshFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutRemovePromoCodeKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutRemovePromoCodeKeySpecifier)[];
export type CheckoutRemovePromoCodeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingAddressUpdateKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutShippingAddressUpdateKeySpecifier)[];
export type CheckoutShippingAddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutShippingMethodUpdateKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | CheckoutShippingMethodUpdateKeySpecifier)[];
export type CheckoutShippingMethodUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutTotalsTypeKeySpecifier = ('codTotal' | 'prepaidTotal' | CheckoutTotalsTypeKeySpecifier)[];
export type CheckoutTotalsTypeFieldPolicy = {
	codTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	prepaidTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutTypeKeySpecifier = ('created' | 'lastChange' | 'user' | 'quantity' | 'billingAddress' | 'shippingAddress' | 'shippingMethod' | 'note' | 'discount' | 'discountName' | 'translatedDiscountName' | 'voucherCode' | 'giftCards' | 'payments' | 'id' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'availableShippingMethods' | 'availablePaymentGateways' | 'email' | 'isShippingRequired' | 'lines' | 'shippingPrice' | 'subtotalPrice' | 'token' | 'totalPrice' | 'checkoutUrl' | 'events' | CheckoutTypeKeySpecifier)[];
export type CheckoutTypeFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	lastChange?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedDiscountName?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCode?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	availablePaymentGateways?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutTypeCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | CheckoutTypeCountableConnectionKeySpecifier)[];
export type CheckoutTypeCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutTypeCountableEdgeKeySpecifier = ('node' | 'cursor' | CheckoutTypeCountableEdgeKeySpecifier)[];
export type CheckoutTypeCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUpdateMetaKeySpecifier = ('errors' | 'checkoutErrors' | 'checkout' | CheckoutUpdateMetaKeySpecifier)[];
export type CheckoutUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutUpdatePrivateMetaKeySpecifier = ('errors' | 'checkoutErrors' | 'checkout' | CheckoutUpdatePrivateMetaKeySpecifier)[];
export type CheckoutUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChoiceValueKeySpecifier = ('raw' | 'verbose' | ChoiceValueKeySpecifier)[];
export type ChoiceValueFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	verbose?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'publicationDate' | 'slug' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'products' | 'backgroundImage' | 'description' | 'translation' | 'isPublished' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionAddProductsKeySpecifier = ('errors' | 'collection' | 'productErrors' | CollectionAddProductsKeySpecifier)[];
export type CollectionAddProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | CollectionBulkDeleteKeySpecifier)[];
export type CollectionBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionBulkPublishKeySpecifier = ('errors' | 'count' | 'productErrors' | CollectionBulkPublishKeySpecifier)[];
export type CollectionBulkPublishFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionClearMetaKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionClearMetaKeySpecifier)[];
export type CollectionClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionClearPrivateMetaKeySpecifier)[];
export type CollectionClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | CollectionCountableConnectionKeySpecifier)[];
export type CollectionCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCountableEdgeKeySpecifier = ('node' | 'cursor' | CollectionCountableEdgeKeySpecifier)[];
export type CollectionCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionCreateKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionCreateKeySpecifier)[];
export type CollectionCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionDeleteKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionDeleteKeySpecifier)[];
export type CollectionDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionDuplicateKeySpecifier = ('errors' | 'collection' | 'productErrors' | CollectionDuplicateKeySpecifier)[];
export type CollectionDuplicateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionRemoveProductsKeySpecifier = ('errors' | 'collection' | 'productErrors' | CollectionRemoveProductsKeySpecifier)[];
export type CollectionRemoveProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionReorderProductsKeySpecifier = ('errors' | 'collection' | 'productErrors' | CollectionReorderProductsKeySpecifier)[];
export type CollectionReorderProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslatableContentKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'description' | 'translation' | 'collection' | CollectionTranslatableContentKeySpecifier)[];
export type CollectionTranslatableContentFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslateKeySpecifier = ('errors' | 'translationErrors' | 'collection' | CollectionTranslateKeySpecifier)[];
export type CollectionTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionTranslationKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'name' | 'descriptionJson' | 'language' | 'description' | CollectionTranslationKeySpecifier)[];
export type CollectionTranslationFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionUpdateKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionUpdateKeySpecifier)[];
export type CollectionUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionUpdateMetaKeySpecifier)[];
export type CollectionUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'collection' | CollectionUpdatePrivateMetaKeySpecifier)[];
export type CollectionUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboAddProductVariantsKeySpecifier = ('errors' | 'combo' | 'productErrors' | ComboAddProductVariantsKeySpecifier)[];
export type ComboAddProductVariantsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	combo?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboCreateKeySpecifier = ('errors' | 'productErrors' | 'combo' | ComboCreateKeySpecifier)[];
export type ComboCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	combo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboDeleteKeySpecifier = ('errors' | 'productErrors' | 'combo' | ComboDeleteKeySpecifier)[];
export type ComboDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	combo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboRemoveProductVariantsKeySpecifier = ('errors' | 'combo' | 'productErrors' | ComboRemoveProductVariantsKeySpecifier)[];
export type ComboRemoveProductVariantsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	combo?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboTypeKeySpecifier = ('publicationDate' | 'id' | 'isPublished' | 'variant' | 'variants' | 'createdAt' | 'updatedAt' | ComboTypeKeySpecifier)[];
export type ComboTypeFieldPolicy = {
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ComboTypeConnectionKeySpecifier)[];
export type ComboTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboTypeEdgeKeySpecifier = ('node' | 'cursor' | ComboTypeEdgeKeySpecifier)[];
export type ComboTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComboUpdateKeySpecifier = ('errors' | 'productErrors' | 'combo' | ComboUpdateKeySpecifier)[];
export type ComboUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	combo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigurationItemKeySpecifier = ('name' | 'value' | 'type' | 'helpText' | 'label' | ConfigurationItemKeySpecifier)[];
export type ConfigurationItemFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	helpText?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmAccountKeySpecifier = ('errors' | 'user' | 'accountErrors' | ConfirmAccountKeySpecifier)[];
export type ConfirmAccountFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmAccountV2KeySpecifier = ('errors' | 'token' | 'refreshToken' | 'csrfToken' | 'user' | 'accountErrors' | ConfirmAccountV2KeySpecifier)[];
export type ConfirmAccountV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmEmailChangeKeySpecifier = ('errors' | 'user' | 'accountErrors' | ConfirmEmailChangeKeySpecifier)[];
export type ConfirmEmailChangeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsCreateKeySpecifier = ('errors' | 'contactUs' | 'contactUsErrors' | ContactUsCreateKeySpecifier)[];
export type ContactUsCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUs?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUsErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsErrorKeySpecifier = ('field' | 'message' | 'code' | ContactUsErrorKeySpecifier)[];
export type ContactUsErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsTypeKeySpecifier = ('id' | 'name' | 'phone' | 'email' | 'meta' | 'queryType' | 'message' | 'createdAt' | ContactUsTypeKeySpecifier)[];
export type ContactUsTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	queryType?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ContactUsTypeConnectionKeySpecifier)[];
export type ContactUsTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactUsTypeEdgeKeySpecifier = ('node' | 'cursor' | ContactUsTypeEdgeKeySpecifier)[];
export type ContactUsTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryDisplayKeySpecifier = ('code' | 'country' | 'vat' | CountryDisplayKeySpecifier)[];
export type CountryDisplayFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	vat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponDiscountTypeKeySpecifier = ('code' | 'discountAmount' | 'id' | CouponDiscountTypeKeySpecifier)[];
export type CouponDiscountTypeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	discountAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponDiscountTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | CouponDiscountTypeConnectionKeySpecifier)[];
export type CouponDiscountTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CouponDiscountTypeEdgeKeySpecifier = ('node' | 'cursor' | CouponDiscountTypeEdgeKeySpecifier)[];
export type CouponDiscountTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateArchiveOrderKeySpecifier = ('errors' | 'archiveOrder' | 'archiveOrderErrors' | CreateArchiveOrderKeySpecifier)[];
export type CreateArchiveOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBannerKeySpecifier = ('errors' | 'banner' | 'bannerErrors' | CreateBannerKeySpecifier)[];
export type CreateBannerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	banner?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCashfreeOrderKeySpecifier = ('errors' | 'cashfreeOrder' | CreateCashfreeOrderKeySpecifier)[];
export type CreateCashfreeOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	cashfreeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateHeaderKeySpecifier = ('errors' | 'header' | CreateHeaderKeySpecifier)[];
export type CreateHeaderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateHostingFileKeySpecifier = ('errors' | 'hosting' | CreateHostingFileKeySpecifier)[];
export type CreateHostingFileFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	hosting?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateInfluencerKeySpecifier = ('errors' | 'influencer' | CreateInfluencerKeySpecifier)[];
export type CreateInfluencerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	influencer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMenuItemsImagesKeySpecifier = ('errors' | 'menuItem' | 'image' | 'imageMobile' | 'menuItemError' | CreateMenuItemsImagesKeySpecifier)[];
export type CreateMenuItemsImagesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobile?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemError?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateNotificationKeySpecifier = ('errors' | 'notification' | CreateNotificationKeySpecifier)[];
export type CreateNotificationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	notification?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePayuOrderKeySpecifier = ('errors' | 'payuOrder' | CreatePayuOrderKeySpecifier)[];
export type CreatePayuOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payuOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProductCSVKeySpecifier = ('errors' | 'message' | CreateProductCSVKeySpecifier)[];
export type CreateProductCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProductReviewKeySpecifier = ('errors' | 'productReview' | 'productReviewErrors' | CreateProductReviewKeySpecifier)[];
export type CreateProductReviewFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProductVariantCSVKeySpecifier = ('errors' | 'message' | CreateProductVariantCSVKeySpecifier)[];
export type CreateProductVariantCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateRazorpayOrderKeySpecifier = ('errors' | 'razorpayOrder' | 'razorpayErrors' | CreateRazorpayOrderKeySpecifier)[];
export type CreateRazorpayOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	razorpayOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	razorpayErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateReviewCSVKeySpecifier = ('errors' | 'reviews' | 'createReviewError' | CreateReviewCSVKeySpecifier)[];
export type CreateReviewCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	createReviewError?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateReviewCSVErrorKeySpecifier = ('field' | 'message' | 'code' | CreateReviewCSVErrorKeySpecifier)[];
export type CreateReviewCSVErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSezzleOrderKeySpecifier = ('errors' | 'sezzleOrder' | CreateSezzleOrderKeySpecifier)[];
export type CreateSezzleOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sezzleOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateShippingZonesCSVKeySpecifier = ('errors' | 'message' | CreateShippingZonesCSVKeySpecifier)[];
export type CreateShippingZonesCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateShopifyUserKeySpecifier = ('errors' | 'shopifyUser' | CreateShopifyUserKeySpecifier)[];
export type CreateShopifyUserFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTokenKeySpecifier = ('errors' | 'token' | 'refreshToken' | 'csrfToken' | 'user' | 'accountErrors' | CreateTokenKeySpecifier)[];
export type CreateTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTokenOAuthKeySpecifier = ('errors' | 'token' | 'refreshToken' | 'csrfToken' | 'user' | 'otpErrors' | CreateTokenOAuthKeySpecifier)[];
export type CreateTokenOAuthFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	otpErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTokenOTPKeySpecifier = ('errors' | 'token' | 'refreshToken' | 'csrfToken' | 'user' | 'otpErrors' | CreateTokenOTPKeySpecifier)[];
export type CreateTokenOTPFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	otpErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVoucherRuleKeySpecifier = ('errors' | 'voucherRule' | 'voucherErrors' | CreateVoucherRuleKeySpecifier)[];
export type CreateVoucherRuleFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRule?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVoucherRuleLinkKeySpecifier = ('errors' | 'voucherRuleLink' | 'voucherErrors' | CreateVoucherRuleLinkKeySpecifier)[];
export type CreateVoucherRuleLinkFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleLink?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreditCardKeySpecifier = ('brand' | 'firstDigits' | 'lastDigits' | 'expMonth' | 'expYear' | CreditCardKeySpecifier)[];
export type CreditCardFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	firstDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	lastDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	expMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	expYear?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomBannerTypeKeySpecifier = ('id' | 'text' | 'type' | 'isEnabled' | 'position' | 'relatedId' | 'link' | 'slug' | 'image' | 'imageMobile' | 'name' | 'created' | 'updated' | 'imageUrl' | 'imageMobileUrl' | CustomBannerTypeKeySpecifier)[];
export type CustomBannerTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedId?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobile?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobileUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomBannerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | CustomBannerTypeConnectionKeySpecifier)[];
export type CustomBannerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomBannerTypeEdgeKeySpecifier = ('node' | 'cursor' | CustomBannerTypeEdgeKeySpecifier)[];
export type CustomBannerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomOrderStatusKeySpecifier = ('status' | CustomOrderStatusKeySpecifier)[];
export type CustomOrderStatusFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomWalletLogTypeKeySpecifier = ('id' | 'amount' | 'wallet' | 'expiry' | 'reason' | 'type' | 'created' | CustomWalletLogTypeKeySpecifier)[];
export type CustomWalletLogTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	expiry?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomWalletLogTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | CustomWalletLogTypeConnectionKeySpecifier)[];
export type CustomWalletLogTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomWalletLogTypeEdgeKeySpecifier = ('node' | 'cursor' | CustomWalletLogTypeEdgeKeySpecifier)[];
export type CustomWalletLogTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerBulkDeleteKeySpecifier = ('errors' | 'count' | 'accountErrors' | CustomerBulkDeleteKeySpecifier)[];
export type CustomerBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreateKeySpecifier = ('errors' | 'accountErrors' | 'user' | CustomerCreateKeySpecifier)[];
export type CustomerCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerDeleteKeySpecifier = ('errors' | 'accountErrors' | 'user' | CustomerDeleteKeySpecifier)[];
export type CustomerDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerEventKeySpecifier = ('id' | 'date' | 'type' | 'user' | 'message' | 'count' | 'order' | 'orderLine' | CustomerEventKeySpecifier)[];
export type CustomerEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUpdateKeySpecifier = ('errors' | 'accountErrors' | 'user' | CustomerUpdateKeySpecifier)[];
export type CustomerUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeactivateAllUserTokensKeySpecifier = ('errors' | 'accountErrors' | DeactivateAllUserTokensKeySpecifier)[];
export type DeactivateAllUserTokensFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteArchiveOrderKeySpecifier = ('errors' | 'archiveOrderErrors' | 'archiveOrder' | DeleteArchiveOrderKeySpecifier)[];
export type DeleteArchiveOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteBannerKeySpecifier = ('errors' | 'ok' | 'bannerErrors' | DeleteBannerKeySpecifier)[];
export type DeleteBannerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	ok?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteBulkVoucherRuleKeySpecifier = ('errors' | 'count' | 'voucherErrors' | DeleteBulkVoucherRuleKeySpecifier)[];
export type DeleteBulkVoucherRuleFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteHostingFileKeySpecifier = ('errors' | 'result' | DeleteHostingFileKeySpecifier)[];
export type DeleteHostingFileFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteInfluencerKeySpecifier = ('errors' | 'influencer' | 'influencerErrors' | DeleteInfluencerKeySpecifier)[];
export type DeleteInfluencerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	influencer?: FieldPolicy<any> | FieldReadFunction<any>,
	influencerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteMetadataKeySpecifier = ('errors' | 'metadataErrors' | 'item' | DeleteMetadataKeySpecifier)[];
export type DeleteMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteMetadataV2KeySpecifier = ('errors' | 'metadataErrors' | 'item' | DeleteMetadataV2KeySpecifier)[];
export type DeleteMetadataV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePrivateMetadataKeySpecifier = ('errors' | 'metadataErrors' | 'item' | DeletePrivateMetadataKeySpecifier)[];
export type DeletePrivateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePrivateMetadataV2KeySpecifier = ('errors' | 'metadataErrors' | 'item' | DeletePrivateMetadataV2KeySpecifier)[];
export type DeletePrivateMetadataV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProductReviewKeySpecifier = ('errors' | 'productReview' | 'productReviewErrors' | DeleteProductReviewKeySpecifier)[];
export type DeleteProductReviewFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteShopifyUserKeySpecifier = ('errors' | 'shopifyUser' | 'shopifyUserErrors' | DeleteShopifyUserKeySpecifier)[];
export type DeleteShopifyUserFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUser?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUserErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSubscriptionKeySpecifier = ('errors' | 'subscription' | 'subscriptionError' | DeleteSubscriptionKeySpecifier)[];
export type DeleteSubscriptionFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionError?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteVoucherRuleKeySpecifier = ('errors' | 'voucherErrors' | 'voucherRule' | DeleteVoucherRuleKeySpecifier)[];
export type DeleteVoucherRuleFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySchedulerTypeKeySpecifier = ('id' | 'warehouse' | 'deliveryDate' | 'deliveryTime' | 'availableSlots' | 'slotsFilled' | 'startTime' | 'endTime' | 'isExpress' | 'deliveryDay' | 'minimumOrder' | 'deliveryFee' | 'privateMetadata' | 'metadata' | DeliverySchedulerTypeKeySpecifier)[];
export type DeliverySchedulerTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTime?: FieldPolicy<any> | FieldReadFunction<any>,
	availableSlots?: FieldPolicy<any> | FieldReadFunction<any>,
	slotsFilled?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	isExpress?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryDay?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryFee?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySchedulerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | DeliverySchedulerTypeConnectionKeySpecifier)[];
export type DeliverySchedulerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliverySchedulerTypeEdgeKeySpecifier = ('node' | 'cursor' | DeliverySchedulerTypeEdgeKeySpecifier)[];
export type DeliverySchedulerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryShippingZoneTypeKeySpecifier = ('id' | 'warehouses' | 'name' | DeliveryShippingZoneTypeKeySpecifier)[];
export type DeliveryShippingZoneTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentKeySpecifier = ('useDefaultSettings' | 'automaticFulfillment' | 'productVariant' | 'contentFile' | 'maxDownloads' | 'urlValidDays' | 'urls' | 'id' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | DigitalContentKeySpecifier)[];
export type DigitalContentFieldPolicy = {
	useDefaultSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	automaticFulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	contentFile?: FieldPolicy<any> | FieldReadFunction<any>,
	maxDownloads?: FieldPolicy<any> | FieldReadFunction<any>,
	urlValidDays?: FieldPolicy<any> | FieldReadFunction<any>,
	urls?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | DigitalContentCountableConnectionKeySpecifier)[];
export type DigitalContentCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCountableEdgeKeySpecifier = ('node' | 'cursor' | DigitalContentCountableEdgeKeySpecifier)[];
export type DigitalContentCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentCreateKeySpecifier = ('errors' | 'variant' | 'content' | 'productErrors' | DigitalContentCreateKeySpecifier)[];
export type DigitalContentCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentDeleteKeySpecifier = ('errors' | 'variant' | 'productErrors' | DigitalContentDeleteKeySpecifier)[];
export type DigitalContentDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUpdateKeySpecifier = ('errors' | 'variant' | 'content' | 'productErrors' | DigitalContentUpdateKeySpecifier)[];
export type DigitalContentUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUrlKeySpecifier = ('content' | 'created' | 'downloadNum' | 'id' | 'url' | 'token' | DigitalContentUrlKeySpecifier)[];
export type DigitalContentUrlFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadNum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DigitalContentUrlCreateKeySpecifier = ('errors' | 'productErrors' | 'digitalContentUrl' | DigitalContentUrlCreateKeySpecifier)[];
export type DigitalContentUrlCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountErrorKeySpecifier = ('field' | 'message' | 'code' | DiscountErrorKeySpecifier)[];
export type DiscountErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountsTypeKeySpecifier = ('couponDiscount' | 'prepaidDiscount' | 'cashbackDiscount' | DiscountsTypeKeySpecifier)[];
export type DiscountsTypeFieldPolicy = {
	couponDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	prepaidDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	cashbackDiscount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DomainKeySpecifier = ('host' | 'sslEnabled' | 'url' | DomainKeySpecifier)[];
export type DomainFieldPolicy = {
	host?: FieldPolicy<any> | FieldReadFunction<any>,
	sslEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderAddPromoCodeKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderAddPromoCodeKeySpecifier)[];
export type DraftOrderAddPromoCodeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderApplyCODKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderApplyCODKeySpecifier)[];
export type DraftOrderApplyCODFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderApplyPrePaidKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderApplyPrePaidKeySpecifier)[];
export type DraftOrderApplyPrePaidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderBulkDeleteKeySpecifier = ('errors' | 'count' | 'orderErrors' | DraftOrderBulkDeleteKeySpecifier)[];
export type DraftOrderBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderCompleteKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderCompleteKeySpecifier)[];
export type DraftOrderCompleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderCreateKeySpecifier = ('errors' | 'orderErrors' | 'order' | DraftOrderCreateKeySpecifier)[];
export type DraftOrderCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderDeleteKeySpecifier = ('errors' | 'orderErrors' | 'order' | DraftOrderDeleteKeySpecifier)[];
export type DraftOrderDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderLineDeleteKeySpecifier = ('errors' | 'order' | 'orderLine' | 'orderErrors' | DraftOrderLineDeleteKeySpecifier)[];
export type DraftOrderLineDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderLineUpdateKeySpecifier = ('errors' | 'order' | 'orderErrors' | 'orderLine' | DraftOrderLineUpdateKeySpecifier)[];
export type DraftOrderLineUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderLinesBulkDeleteKeySpecifier = ('errors' | 'count' | 'orderErrors' | DraftOrderLinesBulkDeleteKeySpecifier)[];
export type DraftOrderLinesBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderLinesCreateKeySpecifier = ('errors' | 'order' | 'orderLines' | 'orderErrors' | DraftOrderLinesCreateKeySpecifier)[];
export type DraftOrderLinesCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLines?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderRemoveCODKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderRemoveCODKeySpecifier)[];
export type DraftOrderRemoveCODFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderRemovePrePaidKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderRemovePrePaidKeySpecifier)[];
export type DraftOrderRemovePrePaidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderRemovePromoCodeKeySpecifier = ('errors' | 'order' | 'orderErrors' | DraftOrderRemovePromoCodeKeySpecifier)[];
export type DraftOrderRemovePromoCodeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DraftOrderUpdateKeySpecifier = ('errors' | 'orderErrors' | 'order' | DraftOrderUpdateKeySpecifier)[];
export type DraftOrderUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DtcEligibleTypeKeySpecifier = ('id' | 'eligibility' | DtcEligibleTypeKeySpecifier)[];
export type DtcEligibleTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	eligibility?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DtcOrderCancelKeySpecifier = ('errors' | 'response' | DtcOrderCancelKeySpecifier)[];
export type DtcOrderCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DtcOrderReturnKeySpecifier = ('errors' | 'response' | DtcOrderReturnKeySpecifier)[];
export type DtcOrderReturnFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DtcReturnProductTypeKeySpecifier = ('id' | 'returnProduct' | DtcReturnProductTypeKeySpecifier)[];
export type DtcReturnProductTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	returnProduct?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DtcTrackingTypeKeySpecifier = ('id' | 'trackings' | 'statusData' | DtcTrackingTypeKeySpecifier)[];
export type DtcTrackingTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	trackings?: FieldPolicy<any> | FieldReadFunction<any>,
	statusData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditProductReviewKeySpecifier = ('errors' | 'productReview' | 'productReviewErrors' | EditProductReviewKeySpecifier)[];
export type EditProductReviewFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('field' | 'message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportErrorKeySpecifier = ('field' | 'message' | 'code' | ExportErrorKeySpecifier)[];
export type ExportErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportEventKeySpecifier = ('id' | 'date' | 'type' | 'user' | 'app' | 'message' | ExportEventKeySpecifier)[];
export type ExportEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileKeySpecifier = ('id' | 'user' | 'app' | 'status' | 'createdAt' | 'updatedAt' | 'message' | 'url' | 'events' | ExportFileKeySpecifier)[];
export type ExportFileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ExportFileCountableConnectionKeySpecifier)[];
export type ExportFileCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportFileCountableEdgeKeySpecifier = ('node' | 'cursor' | ExportFileCountableEdgeKeySpecifier)[];
export type ExportFileCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportOrdersKeySpecifier = ('errors' | 'exportFile' | 'exportErrors' | ExportOrdersKeySpecifier)[];
export type ExportOrdersFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportProductsKeySpecifier = ('errors' | 'exportFile' | 'exportErrors' | ExportProductsKeySpecifier)[];
export type ExportProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportProductsV2KeySpecifier = ('errors' | 'exportFile' | 'exportErrors' | ExportProductsV2KeySpecifier)[];
export type ExportProductsV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExportWalletKeySpecifier = ('errors' | 'exportFile' | 'exportErrors' | ExportWalletKeySpecifier)[];
export type ExportWalletFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FailedOrderKeySpecifier = ('id' | 'checkout' | 'transactionToken' | 'paymentToken' | 'errorMessage' | 'created' | FailedOrderKeySpecifier)[];
export type FailedOrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FailedOrderConnectionKeySpecifier = ('pageInfo' | 'edges' | FailedOrderConnectionKeySpecifier)[];
export type FailedOrderConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FailedOrderEdgeKeySpecifier = ('node' | 'cursor' | FailedOrderEdgeKeySpecifier)[];
export type FailedOrderEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FarziWalletBalanceAddCSVKeySpecifier = ('errors' | 'wallet' | FarziWalletBalanceAddCSVKeySpecifier)[];
export type FarziWalletBalanceAddCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FarziWalletBalanceEmailUpdateKeySpecifier = ('errors' | 'wallet' | 'WalletErrors' | FarziWalletBalanceEmailUpdateKeySpecifier)[];
export type FarziWalletBalanceEmailUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	WalletErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FarziWalletBalanceSubCSVKeySpecifier = ('errors' | 'wallet' | FarziWalletBalanceSubCSVKeySpecifier)[];
export type FarziWalletBalanceSubCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FarziWalletErrorKeySpecifier = ('field' | 'message' | 'code' | FarziWalletErrorKeySpecifier)[];
export type FarziWalletErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentKeySpecifier = ('id' | 'fulfillmentOrder' | 'status' | 'trackingNumber' | 'created' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'lines' | 'statusDisplay' | 'warehouse' | 'trackingUrl' | 'provider' | 'displayStatus' | FulfillmentKeySpecifier)[];
export type FulfillmentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	displayStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentCancelKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentCancelKeySpecifier)[];
export type FulfillmentCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentClearMetaKeySpecifier = ('errors' | 'fulfillment' | FulfillmentClearMetaKeySpecifier)[];
export type FulfillmentClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentClearPrivateMetaKeySpecifier = ('errors' | 'fulfillment' | FulfillmentClearPrivateMetaKeySpecifier)[];
export type FulfillmentClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentLineKeySpecifier = ('id' | 'quantity' | 'orderLine' | FulfillmentLineKeySpecifier)[];
export type FulfillmentLineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentUpdateMetaKeySpecifier = ('errors' | 'fulfillment' | FulfillmentUpdateMetaKeySpecifier)[];
export type FulfillmentUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentUpdatePrivateMetaKeySpecifier = ('errors' | 'fulfillment' | FulfillmentUpdatePrivateMetaKeySpecifier)[];
export type FulfillmentUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FulfillmentUpdateTrackingKeySpecifier = ('errors' | 'fulfillment' | 'order' | 'orderErrors' | FulfillmentUpdateTrackingKeySpecifier)[];
export type FulfillmentUpdateTrackingFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillment?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GatewayConfigLineKeySpecifier = ('field' | 'value' | GatewayConfigLineKeySpecifier)[];
export type GatewayConfigLineFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericFormCreateKeySpecifier = ('errors' | 'genericForm' | 'genericFormErrors' | GenericFormCreateKeySpecifier)[];
export type GenericFormCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	genericForm?: FieldPolicy<any> | FieldReadFunction<any>,
	genericFormErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericFormErrorKeySpecifier = ('field' | 'message' | 'code' | GenericFormErrorKeySpecifier)[];
export type GenericFormErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenericFormTypeKeySpecifier = ('responseId' | 'responseBody' | 'name' | 'phone' | 'email' | 'createdAt' | 'id' | GenericFormTypeKeySpecifier)[];
export type GenericFormTypeFieldPolicy = {
	responseId?: FieldPolicy<any> | FieldReadFunction<any>,
	responseBody?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeolocalizationKeySpecifier = ('country' | GeolocalizationKeySpecifier)[];
export type GeolocalizationFieldPolicy = {
	country?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetReferalDiscountKeySpecifier = ('errors' | 'couponCode' | 'accountErrors' | GetReferalDiscountKeySpecifier)[];
export type GetReferalDiscountFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	couponCode?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GetUserHashKeySpecifier = ('errors' | 'userHash' | GetUserHashKeySpecifier)[];
export type GetUserHashFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	userHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardKeySpecifier = ('code' | 'user' | 'created' | 'startDate' | 'endDate' | 'lastUsedOn' | 'isActive' | 'initialBalance' | 'currentBalance' | 'id' | 'displayCode' | GiftCardKeySpecifier)[];
export type GiftCardFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUsedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	initialBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	currentBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	displayCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardActivateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardActivateKeySpecifier)[];
export type GiftCardActivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | GiftCardCountableConnectionKeySpecifier)[];
export type GiftCardCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCountableEdgeKeySpecifier = ('node' | 'cursor' | GiftCardCountableEdgeKeySpecifier)[];
export type GiftCardCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardCreateKeySpecifier = ('errors' | 'giftCardErrors' | 'giftCard' | GiftCardCreateKeySpecifier)[];
export type GiftCardCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardDeactivateKeySpecifier = ('errors' | 'giftCard' | 'giftCardErrors' | GiftCardDeactivateKeySpecifier)[];
export type GiftCardDeactivateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardErrorKeySpecifier = ('field' | 'message' | 'code' | GiftCardErrorKeySpecifier)[];
export type GiftCardErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GiftCardUpdateKeySpecifier = ('errors' | 'giftCardErrors' | 'giftCard' | GiftCardUpdateKeySpecifier)[];
export type GiftCardUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GokwikTypeKeySpecifier = ('isHighRisk' | 'isDataValid' | GokwikTypeKeySpecifier)[];
export type GokwikTypeFieldPolicy = {
	isHighRisk?: FieldPolicy<any> | FieldReadFunction<any>,
	isDataValid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupKeySpecifier = ('id' | 'name' | 'permissions' | 'users' | 'userCanManage' | GroupKeySpecifier)[];
export type GroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	userCanManage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | GroupCountableConnectionKeySpecifier)[];
export type GroupCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupCountableEdgeKeySpecifier = ('node' | 'cursor' | GroupCountableEdgeKeySpecifier)[];
export type GroupCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeaderTypeKeySpecifier = ('id' | 'text' | 'name' | 'created' | HeaderTypeKeySpecifier)[];
export type HeaderTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeaderTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | HeaderTypeConnectionKeySpecifier)[];
export type HeaderTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HeaderTypeEdgeKeySpecifier = ('node' | 'cursor' | HeaderTypeEdgeKeySpecifier)[];
export type HeaderTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HomepageCollectionUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | HomepageCollectionUpdateKeySpecifier)[];
export type HomepageCollectionUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostingTypeKeySpecifier = ('id' | 'name' | 'image' | 'imageUrl' | 'fileUrl' | HostingTypeKeySpecifier)[];
export type HostingTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	fileUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostingTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | HostingTypeConnectionKeySpecifier)[];
export type HostingTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HostingTypeEdgeKeySpecifier = ('node' | 'cursor' | HostingTypeEdgeKeySpecifier)[];
export type HostingTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('url' | 'alt' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	alt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfluencerErrorKeySpecifier = ('field' | 'message' | 'code' | InfluencerErrorKeySpecifier)[];
export type InfluencerErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfluencerTypeKeySpecifier = ('metadata' | 'privateMetadata' | 'id' | 'name' | 'phone' | 'email' | 'couponCode' | InfluencerTypeKeySpecifier)[];
export type InfluencerTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	couponCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfluencerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | InfluencerTypeConnectionKeySpecifier)[];
export type InfluencerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfluencerTypeEdgeKeySpecifier = ('node' | 'cursor' | InfluencerTypeEdgeKeySpecifier)[];
export type InfluencerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceKeySpecifier = ('id' | 'metadata' | 'status' | 'number' | 'externalUrl' | 'privateMetadata' | 'privateMeta' | 'meta' | 'createdAt' | 'updatedAt' | 'message' | 'url' | InvoiceKeySpecifier)[];
export type InvoiceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	externalUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceCreateKeySpecifier = ('errors' | 'invoiceErrors' | 'invoice' | InvoiceCreateKeySpecifier)[];
export type InvoiceCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceDeleteKeySpecifier = ('errors' | 'invoiceErrors' | 'invoice' | InvoiceDeleteKeySpecifier)[];
export type InvoiceDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceErrorKeySpecifier = ('field' | 'message' | 'code' | InvoiceErrorKeySpecifier)[];
export type InvoiceErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceRequestKeySpecifier = ('errors' | 'order' | 'invoiceErrors' | 'invoice' | InvoiceRequestKeySpecifier)[];
export type InvoiceRequestFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceRequestDeleteKeySpecifier = ('errors' | 'invoiceErrors' | 'invoice' | InvoiceRequestDeleteKeySpecifier)[];
export type InvoiceRequestDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceSendEmailKeySpecifier = ('errors' | 'invoiceErrors' | 'invoice' | InvoiceSendEmailKeySpecifier)[];
export type InvoiceSendEmailFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceUpdateKeySpecifier = ('errors' | 'invoiceErrors' | 'invoice' | InvoiceUpdateKeySpecifier)[];
export type InvoiceUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	invoice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvoiceUploadKeySpecifier = ('errors' | 'url' | InvoiceUploadKeySpecifier)[];
export type InvoiceUploadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobKeySpecifier = ('status' | 'createdAt' | 'updatedAt' | 'message' | JobKeySpecifier)[];
export type JobFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageDisplayKeySpecifier = ('code' | 'language' | LanguageDisplayKeySpecifier)[];
export type LanguageDisplayFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManifestKeySpecifier = ('identifier' | 'version' | 'name' | 'about' | 'permissions' | 'appUrl' | 'configurationUrl' | 'tokenTargetUrl' | 'dataPrivacy' | 'dataPrivacyUrl' | 'homepageUrl' | 'supportUrl' | ManifestKeySpecifier)[];
export type ManifestFieldPolicy = {
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	appUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	configurationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenTargetUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacy?: FieldPolicy<any> | FieldReadFunction<any>,
	dataPrivacyUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	supportUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarginKeySpecifier = ('start' | 'stop' | MarginKeySpecifier)[];
export type MarginFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuKeySpecifier = ('id' | 'name' | 'slug' | 'items' | MenuKeySpecifier)[];
export type MenuFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuBulkDeleteKeySpecifier = ('errors' | 'count' | 'menuErrors' | MenuBulkDeleteKeySpecifier)[];
export type MenuBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | MenuCountableConnectionKeySpecifier)[];
export type MenuCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCountableEdgeKeySpecifier = ('node' | 'cursor' | MenuCountableEdgeKeySpecifier)[];
export type MenuCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuCreateKeySpecifier = ('errors' | 'menuErrors' | 'menu' | MenuCreateKeySpecifier)[];
export type MenuCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuDeleteKeySpecifier = ('errors' | 'menuErrors' | 'menu' | MenuDeleteKeySpecifier)[];
export type MenuDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuErrorKeySpecifier = ('field' | 'message' | 'code' | MenuErrorKeySpecifier)[];
export type MenuErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemKeySpecifier = ('id' | 'name' | 'menu' | 'parent' | 'category' | 'collection' | 'page' | 'level' | 'children' | 'url' | 'translation' | MenuItemKeySpecifier)[];
export type MenuItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemBulkDeleteKeySpecifier = ('errors' | 'count' | 'menuErrors' | MenuItemBulkDeleteKeySpecifier)[];
export type MenuItemBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | MenuItemCountableConnectionKeySpecifier)[];
export type MenuItemCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCountableEdgeKeySpecifier = ('node' | 'cursor' | MenuItemCountableEdgeKeySpecifier)[];
export type MenuItemCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemCreateKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemCreateKeySpecifier)[];
export type MenuItemCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemDeleteKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemDeleteKeySpecifier)[];
export type MenuItemDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemImageMobileTypeKeySpecifier = ('id' | 'menu' | 'image' | 'imageMobile' | 'ppoi' | 'url' | MenuItemImageMobileTypeKeySpecifier)[];
export type MenuItemImageMobileTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobile?: FieldPolicy<any> | FieldReadFunction<any>,
	ppoi?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemImageTypeKeySpecifier = ('id' | 'menu' | 'image' | 'imageMobile' | 'ppoi' | 'url' | MenuItemImageTypeKeySpecifier)[];
export type MenuItemImageTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobile?: FieldPolicy<any> | FieldReadFunction<any>,
	ppoi?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemMoveKeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuItemMoveKeySpecifier)[];
export type MenuItemMoveFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemMoveV2KeySpecifier = ('errors' | 'menu' | 'menuErrors' | MenuItemMoveV2KeySpecifier)[];
export type MenuItemMoveV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'menuItem' | MenuItemTranslatableContentKeySpecifier)[];
export type MenuItemTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslateKeySpecifier = ('errors' | 'translationErrors' | 'menuItem' | MenuItemTranslateKeySpecifier)[];
export type MenuItemTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemTranslationKeySpecifier = ('id' | 'name' | 'language' | MenuItemTranslationKeySpecifier)[];
export type MenuItemTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemUpdateKeySpecifier = ('errors' | 'menuErrors' | 'menuItem' | MenuItemUpdateKeySpecifier)[];
export type MenuItemUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemV2KeySpecifier = ('id' | 'name' | 'menu' | 'parent' | 'category' | 'collection' | 'page' | 'level' | 'children' | 'url' | 'translation' | 'image' | 'imageMobile' | MenuItemV2KeySpecifier)[];
export type MenuItemV2FieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageMobile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemV2CountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | MenuItemV2CountableConnectionKeySpecifier)[];
export type MenuItemV2CountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemV2CountableEdgeKeySpecifier = ('node' | 'cursor' | MenuItemV2CountableEdgeKeySpecifier)[];
export type MenuItemV2CountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuUpdateKeySpecifier = ('errors' | 'menuErrors' | 'menu' | MenuUpdateKeySpecifier)[];
export type MenuUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	menuErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuV2KeySpecifier = ('id' | 'name' | 'slug' | 'items' | MenuV2KeySpecifier)[];
export type MenuV2FieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuV2CountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | MenuV2CountableConnectionKeySpecifier)[];
export type MenuV2CountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuV2CountableEdgeKeySpecifier = ('node' | 'cursor' | MenuV2CountableEdgeKeySpecifier)[];
export type MenuV2CountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaClientStoreKeySpecifier = ('name' | 'metadata' | MetaClientStoreKeySpecifier)[];
export type MetaClientStoreFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaItemKeySpecifier = ('key' | 'value' | MetaItemKeySpecifier)[];
export type MetaItemFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetaStoreKeySpecifier = ('namespace' | 'clients' | MetaStoreKeySpecifier)[];
export type MetaStoreFieldPolicy = {
	namespace?: FieldPolicy<any> | FieldReadFunction<any>,
	clients?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataErrorKeySpecifier = ('field' | 'message' | 'code' | MetadataErrorKeySpecifier)[];
export type MetadataErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataItemKeySpecifier = ('key' | 'value' | MetadataItemKeySpecifier)[];
export type MetadataItemFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataItemV2KeySpecifier = ('key' | 'value' | MetadataItemV2KeySpecifier)[];
export type MetadataItemV2FieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('currency' | 'amount' | 'localized' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	localized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyRangeKeySpecifier = ('start' | 'stop' | MoneyRangeKeySpecifier)[];
export type MoneyRangeFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('wishlistAddProduct' | 'wishlistRemoveProduct' | 'wishlistAddVariant' | 'wishlistRemoveVariant' | 'addTags' | 'removeTags' | 'addTagsCsv' | 'webhookCreate' | 'webhookDelete' | 'webhookUpdate' | 'createWarehouse' | 'updateWarehouse' | 'deleteWarehouse' | 'assignWarehouseShippingZone' | 'unassignWarehouseShippingZone' | 'authorizationKeyAdd' | 'authorizationKeyDelete' | 'staffNotificationRecipientCreate' | 'staffNotificationRecipientUpdate' | 'staffNotificationRecipientDelete' | 'homepageCollectionUpdate' | 'shopDomainUpdate' | 'shopSettingsUpdate' | 'shopFetchTaxRates' | 'shopSettingsTranslate' | 'shopAddressUpdate' | 'shippingPriceCreate' | 'shippingPriceDelete' | 'shippingPriceBulkDelete' | 'shippingPriceUpdate' | 'shippingPriceTranslate' | 'shippingZoneCreate' | 'shippingZoneDelete' | 'shippingZoneBulkDelete' | 'shippingZoneUpdate' | 'attributeCreate' | 'attributeDelete' | 'attributeBulkDelete' | 'attributeAssign' | 'attributeUnassign' | 'attributeUpdate' | 'attributeTranslate' | 'attributeUpdateMetadata' | 'attributeClearMetadata' | 'attributeUpdatePrivateMetadata' | 'attributeClearPrivateMetadata' | 'attributeValueCreate' | 'attributeValueDelete' | 'attributeValueBulkDelete' | 'attributeValueUpdate' | 'attributeValueTranslate' | 'attributeReorderValues' | 'categoryCreate' | 'categoryDelete' | 'categoryBulkDelete' | 'categoryUpdate' | 'categoryTranslate' | 'categoryUpdateMetadata' | 'categoryClearMetadata' | 'categoryUpdatePrivateMetadata' | 'categoryClearPrivateMetadata' | 'collectionAddProducts' | 'collectionCreate' | 'collectionDuplicate' | 'collectionDelete' | 'collectionReorderProducts' | 'collectionBulkDelete' | 'collectionBulkPublish' | 'collectionRemoveProducts' | 'collectionUpdate' | 'collectionTranslate' | 'collectionUpdateMetadata' | 'collectionClearMetadata' | 'collectionUpdatePrivateMetadata' | 'collectionClearPrivateMetadata' | 'productCreate' | 'productDelete' | 'productBulkDelete' | 'productBulkPublish' | 'productUpdate' | 'productTranslate' | 'productUpdateMetadata' | 'productClearMetadata' | 'productUpdatePrivateMetadata' | 'productClearPrivateMetadata' | 'productSetAvailabilityForPurchase' | 'productImageCreate' | 'productVariantReorder' | 'productImageDelete' | 'productImageBulkDelete' | 'productImageReorder' | 'productImageUpdate' | 'productTypeCreate' | 'productTypeDelete' | 'productTypeBulkDelete' | 'productTypeUpdate' | 'productTypeReorderAttributes' | 'productTypeUpdateMetadata' | 'productTypeClearMetadata' | 'productTypeUpdatePrivateMetadata' | 'productTypeClearPrivateMetadata' | 'digitalContentCreate' | 'digitalContentDelete' | 'digitalContentUpdate' | 'digitalContentUrlCreate' | 'productVariantCreate' | 'productVariantDelete' | 'productVariantBulkCreate' | 'productVariantBulkDelete' | 'productVariantStocksCreate' | 'productVariantStocksDelete' | 'productVariantStocksUpdate' | 'productVariantUpdate' | 'productVariantSetDefault' | 'productVariantTranslate' | 'productVariantUpdateMetadata' | 'productVariantClearMetadata' | 'productVariantUpdatePrivateMetadata' | 'productVariantClearPrivateMetadata' | 'variantImageAssign' | 'variantImageUnassign' | 'paymentCapture' | 'paymentRefund' | 'paymentVoid' | 'paymentInitialize' | 'pageCreate' | 'pageDelete' | 'pageBulkDelete' | 'pageBulkPublish' | 'pageUpdate' | 'pageTranslate' | 'draftOrderComplete' | 'draftOrderCreate' | 'draftOrderDelete' | 'draftOrderBulkDelete' | 'draftOrderLinesBulkDelete' | 'draftOrderLinesCreate' | 'draftOrderLineDelete' | 'draftOrderLineUpdate' | 'draftOrderUpdate' | 'orderAddNote' | 'orderCancel' | 'orderCapture' | 'orderClearPrivateMeta' | 'orderClearMeta' | 'orderFulfill' | 'orderFulfillmentCancel' | 'orderFulfillmentUpdateTracking' | 'orderFulfillmentClearMeta' | 'orderFulfillmentClearPrivateMeta' | 'orderFulfillmentUpdateMeta' | 'orderFulfillmentUpdatePrivateMeta' | 'orderMarkAsPaid' | 'orderRefund' | 'orderUpdate' | 'orderUpdateMeta' | 'orderUpdatePrivateMeta' | 'orderUpdateShipping' | 'orderVoid' | 'orderBulkCancel' | 'deleteMetadata' | 'deletePrivateMetadata' | 'updateMetadata' | 'updatePrivateMetadata' | 'assignNavigation' | 'menuCreate' | 'menuDelete' | 'menuBulkDelete' | 'menuUpdate' | 'menuItemCreate' | 'menuItemDelete' | 'menuItemBulkDelete' | 'menuItemUpdate' | 'menuItemTranslate' | 'menuItemMove' | 'invoiceRequest' | 'invoiceRequestDelete' | 'invoiceCreate' | 'invoiceDelete' | 'invoiceUpdate' | 'invoiceSendEmail' | 'giftCardActivate' | 'giftCardCreate' | 'giftCardDeactivate' | 'giftCardUpdate' | 'pluginUpdate' | 'saleCreate' | 'saleDelete' | 'saleBulkDelete' | 'saleUpdate' | 'saleCataloguesAdd' | 'saleCataloguesRemove' | 'saleTranslate' | 'voucherCreate' | 'voucherDelete' | 'voucherBulkDelete' | 'voucherUpdate' | 'voucherCataloguesAdd' | 'voucherCataloguesRemove' | 'voucherTranslate' | 'exportProducts' | 'checkoutAddPromoCode' | 'checkoutBillingAddressUpdate' | 'checkoutComplete' | 'checkoutCreate' | 'checkoutCustomerAttach' | 'checkoutCustomerDetach' | 'checkoutEmailUpdate' | 'checkoutLineDelete' | 'checkoutLinesAdd' | 'checkoutLinesUpdate' | 'checkoutRemovePromoCode' | 'checkoutPaymentCreate' | 'checkoutShippingAddressUpdate' | 'checkoutShippingMethodUpdate' | 'checkoutUpdateMetadata' | 'checkoutClearMetadata' | 'checkoutUpdatePrivateMetadata' | 'checkoutClearPrivateMetadata' | 'appCreate' | 'appUpdate' | 'appDelete' | 'appTokenCreate' | 'appTokenDelete' | 'appTokenVerify' | 'appInstall' | 'appRetryInstall' | 'appDeleteFailedInstallation' | 'appFetchManifest' | 'appActivate' | 'appDeactivate' | 'tokenCreate' | 'tokenRefresh' | 'tokenVerify' | 'tokensDeactivateAll' | 'requestPasswordReset' | 'confirmAccount' | 'setPassword' | 'passwordChange' | 'requestEmailChange' | 'confirmEmailChange' | 'phoneChange' | 'accountAddressCreate' | 'accountAddressUpdate' | 'accountAddressDelete' | 'accountSetDefaultAddress' | 'accountRegister' | 'accountUpdate' | 'accountRequestDeletion' | 'accountDelete' | 'accountUpdateMeta' | 'addressCreate' | 'addressUpdate' | 'addressDelete' | 'addressSetDefault' | 'customerCreate' | 'customerUpdate' | 'customerDelete' | 'customerBulkDelete' | 'staffCreate' | 'staffUpdate' | 'staffDelete' | 'staffBulkDelete' | 'userAvatarUpdate' | 'userAvatarDelete' | 'userBulkSetActive' | 'userUpdateMetadata' | 'userClearMetadata' | 'userUpdatePrivateMetadata' | 'userClearPrivateMetadata' | 'serviceAccountCreate' | 'serviceAccountUpdate' | 'serviceAccountDelete' | 'serviceAccountUpdatePrivateMetadata' | 'serviceAccountClearPrivateMetadata' | 'serviceAccountTokenCreate' | 'serviceAccountTokenDelete' | 'permissionGroupCreate' | 'permissionGroupUpdate' | 'permissionGroupDelete' | 'exportProductsV2' | 'createHostingFile' | 'deleteHostingFile' | 'createNotification' | 'requestOtp' | 'otpTokenCreate' | 'verifyCheckoutOtp' | 'tokenCreateWithAdmin' | 'accountCreate' | 'accountRegisterV2' | 'confirmAccountV2' | 'productReviewCreate' | 'productReviewRate' | 'productReviewUpdateReply' | 'productReviewEdit' | 'productReviewDelete' | 'productImageCreateV2' | 'productReviewImageCreate' | 'productReviewImageDelete' | 'productReviewVideoCreate' | 'productReviewVideoDelete' | 'productDuplicate' | 'razorpayOrderCreate' | 'paytmOrderCreate' | 'cashfreeOrderCreate' | 'payuOrderCreate' | 'sezzleOrderCreate' | 'bannerCreate' | 'bannerUpdate' | 'bannerDelete' | 'headerCreate' | 'voucherRuleCreate' | 'voucherRuleUpdate' | 'voucherRuleDelete' | 'voucherRuleBulkDelete' | 'voucherRuleLinkCreate' | 'voucherRuleLinkUpdate' | 'checkoutPaymentMethodUpdate' | 'invoiceUpload' | 'addressTypeUpdate' | 'checkoutAddNote' | 'checkoutRefresh' | 'pushToWareiq' | 'partnerCreate' | 'partnerUpdate' | 'partnerDelete' | 'partnerCouponCsvCreate' | 'partnerCouponUpdate' | 'partnerCouponDelete' | 'partnerCouponCustomerCreate' | 'partnerCouponCustomerUpdate' | 'partnerCouponCustomerDelete' | 'walletBalanceUpdate' | 'walletBalancePhoneUpdate' | 'pushAllToWareiq' | 'contactUsCreate' | 'genericFormCreate' | 'pincode' | 'comboCreate' | 'comboUpdate' | 'comboDelete' | 'comboAddProductVariants' | 'comboRemoveProductVariants' | 'bluedartShipmentCreate' | 'surveyCreate' | 'surveyDelete' | 'surveyFill' | 'surveyOptionsfill' | 'syncWareiqInventory' | 'subscriptionCreate' | 'subscriptionUpdate' | 'subscriptionDelete' | 'createInfluencer' | 'updateInfluencer' | 'deleteInfluencer' | 'shopifyUserCreate' | 'shopifyUserUpdate' | 'shopifyUserDelete' | 'sectionCreate' | 'sectionUpdate' | 'sectionDelete' | 'sectionBulkDelete' | 'sectionAddProducts' | 'sectionRemoveProducts' | 'sectionReorderProducts' | 'sectionImageCreate' | 'sectionImageDelete' | 'sectionImageReorder' | 'updateMetadataV2' | 'deleteMetadataV2' | 'updatePrivateMetadataV2' | 'deletePrivateMetadataV2' | 'checkoutAddPromoCodeShopify' | 'checkoutRemovePromoCodeShopify' | 'userAvatarUpdateV2' | 'userAvatarDeleteV2' | 'dtcOrderCancel' | 'dtcOrderReturn' | 'menuItemImageCreate' | 'menuItemMoveV2' | 'createProductCsv' | 'createReviewCsv' | 'updateInventoryCsv' | 'bulkPriceUpdateCsv' | 'createProductVariantCsv' | 'updateManufacturingDetailsCsv' | 'updateShopifyProductPriceCsv' | 'updateShopifyProductTagsCsv' | 'productVariantBulkUpdate' | 'farziWalletBalanceSubCsv' | 'farziWalletBalanceAddCsv' | 'farziWalletBalanceEmailUpdate' | 'getUserHash' | 'exportOrders' | 'referAFriend' | 'getReferalDiscount' | 'walletBalanceAddCsv' | 'walletExport' | 'uploadProductImageCsv' | 'reOrder' | 'createTokenOauth' | 'archiveOrderCreate' | 'archiveOrderUpdate' | 'archiveOrderDelete' | 'nutritionFormCreate' | 'triggerCron' | 'draftOrderAddPromoCode' | 'draftOrderRemovePromoCode' | 'draftOrderApplyCod' | 'draftOrderRemoveCod' | 'draftOrderApplyPrepaid' | 'draftOrderRemovePrepaid' | 'createShippingZones' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	wishlistAddProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistRemoveProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistAddVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistRemoveVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	addTags?: FieldPolicy<any> | FieldReadFunction<any>,
	removeTags?: FieldPolicy<any> | FieldReadFunction<any>,
	addTagsCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	createWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWarehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	assignWarehouseShippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	unassignWarehouseShippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizationKeyAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizationKeyDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipientDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageCollectionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopDomainUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopSettingsUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopFetchTaxRates?: FieldPolicy<any> | FieldReadFunction<any>,
	shopSettingsTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPriceTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUnassign?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValueTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeReorderValues?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionAddProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionDuplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionReorderProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionBulkPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionRemoveProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productBulkPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	productUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	productUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productSetAvailabilityForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeReorderAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypeClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUrlCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantBulkCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantStocksUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantSetDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	variantImageAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	variantImageUnassign?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentCapture?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentRefund?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentVoid?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentInitialize?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	pageBulkPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	pageUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderLinesBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderLinesCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderLineDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderLineUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderAddNote?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	orderCapture?: FieldPolicy<any> | FieldReadFunction<any>,
	orderClearPrivateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderClearMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfill?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentUpdateTracking?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentClearMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentClearPrivateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentUpdateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderFulfillmentUpdatePrivateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderMarkAsPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	orderRefund?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdatePrivateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orderUpdateShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	orderVoid?: FieldPolicy<any> | FieldReadFunction<any>,
	orderBulkCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	assignNavigation?: FieldPolicy<any> | FieldReadFunction<any>,
	menuCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemMove?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceRequestDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceSendEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCardUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	saleBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	saleUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCataloguesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	saleCataloguesRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	saleTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCataloguesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherCataloguesRemove?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherTranslate?: FieldPolicy<any> | FieldReadFunction<any>,
	exportProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAddPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutBillingAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutComplete?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerAttach?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutCustomerDetach?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutEmailUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLineDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLinesAdd?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLinesUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutRemovePromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutPaymentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutShippingMethodUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	appCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	appUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	appDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	appTokenVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	appInstall?: FieldPolicy<any> | FieldReadFunction<any>,
	appRetryInstall?: FieldPolicy<any> | FieldReadFunction<any>,
	appDeleteFailedInstallation?: FieldPolicy<any> | FieldReadFunction<any>,
	appFetchManifest?: FieldPolicy<any> | FieldReadFunction<any>,
	appActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	appDeactivate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenRefresh?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	tokensDeactivateAll?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	setPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordChange?: FieldPolicy<any> | FieldReadFunction<any>,
	requestEmailChange?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmEmailChange?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneChange?: FieldPolicy<any> | FieldReadFunction<any>,
	accountAddressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountAddressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	accountSetDefaultAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	accountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRequestDeletion?: FieldPolicy<any> | FieldReadFunction<any>,
	accountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	accountUpdateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	addressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	addressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	addressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	addressSetDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	staffDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	staffBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	userBulkSetActive?: FieldPolicy<any> | FieldReadFunction<any>,
	userUpdateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	userClearMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	userUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	userClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountUpdatePrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountClearPrivateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountTokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountTokenDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	exportProductsV2?: FieldPolicy<any> | FieldReadFunction<any>,
	createHostingFile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteHostingFile?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	requestOtp?: FieldPolicy<any> | FieldReadFunction<any>,
	otpTokenCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyCheckoutOtp?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenCreateWithAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	accountCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	accountRegisterV2?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmAccountV2?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewRate?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewUpdateReply?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productImageCreateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewImageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewImageDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewVideoCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewVideoDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	productDuplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	razorpayOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	paytmOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	cashfreeOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	payuOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	sezzleOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	headerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleLinkCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleLinkUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutPaymentMethodUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	addressTypeUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAddNote?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutRefresh?: FieldPolicy<any> | FieldReadFunction<any>,
	pushToWareiq?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCsvCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	walletBalanceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	walletBalancePhoneUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	pushAllToWareiq?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUsCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	genericFormCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	pincode?: FieldPolicy<any> | FieldReadFunction<any>,
	comboCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	comboUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	comboDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	comboAddProductVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	comboRemoveProductVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	bluedartShipmentCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyFill?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyOptionsfill?: FieldPolicy<any> | FieldReadFunction<any>,
	syncWareiqInventory?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	createInfluencer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInfluencer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteInfluencer?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUserCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUserUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUserDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionBulkDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionAddProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionRemoveProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionReorderProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionImageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionImageDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionImageReorder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMetadataV2?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMetadataV2?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePrivateMetadataV2?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePrivateMetadataV2?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutAddPromoCodeShopify?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutRemovePromoCodeShopify?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarUpdateV2?: FieldPolicy<any> | FieldReadFunction<any>,
	userAvatarDeleteV2?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcOrderCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcOrderReturn?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemImageCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemMoveV2?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	createReviewCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInventoryCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	bulkPriceUpdateCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductVariantCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManufacturingDetailsCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	updateShopifyProductPriceCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	updateShopifyProductTagsCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariantBulkUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	farziWalletBalanceSubCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	farziWalletBalanceAddCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	farziWalletBalanceEmailUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserHash?: FieldPolicy<any> | FieldReadFunction<any>,
	exportOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	referAFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	getReferalDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	walletBalanceAddCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	walletExport?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadProductImageCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	reOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createTokenOauth?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	nutritionFormCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerCron?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderAddPromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderRemovePromoCode?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderApplyCod?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderRemoveCod?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderApplyPrepaid?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrderRemovePrepaid?: FieldPolicy<any> | FieldReadFunction<any>,
	createShippingZones?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NavigationKeySpecifier = ('main' | 'secondary' | NavigationKeySpecifier)[];
export type NavigationFieldPolicy = {
	main?: FieldPolicy<any> | FieldReadFunction<any>,
	secondary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeKeySpecifier = ('id' | 'name' | 'email' | 'phone' | 'product' | 'productVariant' | 'created' | 'isNotified' | NotificationTypeKeySpecifier)[];
export type NotificationTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	isNotified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NutritionFormCreateKeySpecifier = ('errors' | 'nutritionForm' | NutritionFormCreateKeySpecifier)[];
export type NutritionFormCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	nutritionForm?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NutritionFormTypeKeySpecifier = ('id' | 'responseBody' | 'name' | 'phone' | 'email' | 'createdAt' | NutritionFormTypeKeySpecifier)[];
export type NutritionFormTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	responseBody?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OTPErrorKeySpecifier = ('field' | 'message' | 'code' | OTPErrorKeySpecifier)[];
export type OTPErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectWithMetadataKeySpecifier = ('privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | ObjectWithMetadataKeySpecifier)[];
export type ObjectWithMetadataFieldPolicy = {
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectWithMetadataV2KeySpecifier = ('privateMetadata' | 'metadata' | ObjectWithMetadataV2KeySpecifier)[];
export type ObjectWithMetadataV2FieldPolicy = {
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'created' | 'status' | 'user' | 'languageCode' | 'trackingClientId' | 'billingAddress' | 'shippingAddress' | 'shippingMethod' | 'shippingMethodName' | 'shippingPrice' | 'token' | 'voucher' | 'giftCards' | 'discount' | 'discountName' | 'translatedDiscountName' | 'displayGrossPrices' | 'customerNote' | 'weight' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'fulfillments' | 'lines' | 'actions' | 'tags' | 'availableShippingMethods' | 'invoices' | 'number' | 'isPaid' | 'paymentStatus' | 'paymentStatusDisplay' | 'payments' | 'total' | 'subtotal' | 'statusDisplay' | 'canFinalize' | 'totalAuthorized' | 'totalCaptured' | 'events' | 'totalBalance' | 'userEmail' | 'isShippingRequired' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingClientId?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethodName?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountName?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedDiscountName?: FieldPolicy<any> | FieldReadFunction<any>,
	displayGrossPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	customerNote?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillments?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	availableShippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	invoices?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	isPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	canFinalize?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAuthorized?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCaptured?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	totalBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderAddNoteKeySpecifier = ('errors' | 'order' | 'event' | 'orderErrors' | OrderAddNoteKeySpecifier)[];
export type OrderAddNoteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderBulkCancelKeySpecifier = ('errors' | 'count' | 'orderErrors' | OrderBulkCancelKeySpecifier)[];
export type OrderBulkCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCancelKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderCancelKeySpecifier)[];
export type OrderCancelFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCaptureKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderCaptureKeySpecifier)[];
export type OrderCaptureFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderClearMetaKeySpecifier = ('errors' | 'order' | OrderClearMetaKeySpecifier)[];
export type OrderClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderClearPrivateMetaKeySpecifier = ('errors' | 'order' | OrderClearPrivateMetaKeySpecifier)[];
export type OrderClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | OrderCountableConnectionKeySpecifier)[];
export type OrderCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderCountableEdgeKeySpecifier = ('node' | 'cursor' | OrderCountableEdgeKeySpecifier)[];
export type OrderCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderErrorKeySpecifier = ('field' | 'message' | 'code' | 'warehouse' | 'orderLine' | OrderErrorKeySpecifier)[];
export type OrderErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventKeySpecifier = ('id' | 'date' | 'type' | 'user' | 'message' | 'email' | 'emailType' | 'amount' | 'paymentId' | 'paymentGateway' | 'quantity' | 'composedId' | 'orderNumber' | 'invoiceNumber' | 'oversoldItems' | 'lines' | 'fulfilledItems' | 'warehouse' | OrderEventKeySpecifier)[];
export type OrderEventFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailType?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentId?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentGateway?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	composedId?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	oversoldItems?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfilledItems?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | OrderEventCountableConnectionKeySpecifier)[];
export type OrderEventCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventCountableEdgeKeySpecifier = ('node' | 'cursor' | OrderEventCountableEdgeKeySpecifier)[];
export type OrderEventCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEventOrderLineObjectKeySpecifier = ('quantity' | 'orderLine' | 'itemName' | OrderEventOrderLineObjectKeySpecifier)[];
export type OrderEventOrderLineObjectFieldPolicy = {
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	orderLine?: FieldPolicy<any> | FieldReadFunction<any>,
	itemName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderFulfillKeySpecifier = ('errors' | 'fulfillments' | 'order' | 'orderErrors' | OrderFulfillKeySpecifier)[];
export type OrderFulfillFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillments?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineKeySpecifier = ('id' | 'productName' | 'variantName' | 'productSku' | 'isShippingRequired' | 'quantity' | 'quantityFulfilled' | 'taxRate' | 'digitalContentUrl' | 'thumbnail' | 'unitPrice' | 'totalPrice' | 'variant' | 'translatedProductName' | 'translatedVariantName' | 'allocations' | OrderLineKeySpecifier)[];
export type OrderLineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	variantName?: FieldPolicy<any> | FieldReadFunction<any>,
	productSku?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityFulfilled?: FieldPolicy<any> | FieldReadFunction<any>,
	taxRate?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedProductName?: FieldPolicy<any> | FieldReadFunction<any>,
	translatedVariantName?: FieldPolicy<any> | FieldReadFunction<any>,
	allocations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderMarkAsPaidKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderMarkAsPaidKeySpecifier)[];
export type OrderMarkAsPaidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderRefundKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderRefundKeySpecifier)[];
export type OrderRefundFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdateKeySpecifier = ('errors' | 'orderErrors' | 'order' | OrderUpdateKeySpecifier)[];
export type OrderUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdateMetaKeySpecifier = ('errors' | 'order' | OrderUpdateMetaKeySpecifier)[];
export type OrderUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdatePrivateMetaKeySpecifier = ('errors' | 'order' | OrderUpdatePrivateMetaKeySpecifier)[];
export type OrderUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderUpdateShippingKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderUpdateShippingKeySpecifier)[];
export type OrderUpdateShippingFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderVoidKeySpecifier = ('errors' | 'order' | 'orderErrors' | OrderVoidKeySpecifier)[];
export type OrderVoidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'title' | 'contentJson' | 'publicationDate' | 'slug' | 'created' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'content' | 'translation' | 'isPublished' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageBulkDeleteKeySpecifier = ('errors' | 'count' | 'pageErrors' | PageBulkDeleteKeySpecifier)[];
export type PageBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageBulkPublishKeySpecifier = ('errors' | 'count' | 'pageErrors' | PageBulkPublishKeySpecifier)[];
export type PageBulkPublishFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | PageCountableConnectionKeySpecifier)[];
export type PageCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCountableEdgeKeySpecifier = ('node' | 'cursor' | PageCountableEdgeKeySpecifier)[];
export type PageCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCreateKeySpecifier = ('errors' | 'pageErrors' | 'page' | PageCreateKeySpecifier)[];
export type PageCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageDeleteKeySpecifier = ('errors' | 'pageErrors' | 'page' | PageDeleteKeySpecifier)[];
export type PageDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageErrorKeySpecifier = ('field' | 'message' | 'code' | PageErrorKeySpecifier)[];
export type PageErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslatableContentKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'title' | 'contentJson' | 'content' | 'translation' | 'page' | PageTranslatableContentKeySpecifier)[];
export type PageTranslatableContentFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslateKeySpecifier = ('errors' | 'translationErrors' | 'page' | PageTranslateKeySpecifier)[];
export type PageTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageTranslationKeySpecifier = ('seoTitle' | 'seoDescription' | 'id' | 'title' | 'contentJson' | 'language' | 'content' | PageTranslationKeySpecifier)[];
export type PageTranslationFieldPolicy = {
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	contentJson?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageUpdateKeySpecifier = ('errors' | 'pageErrors' | 'page' | PageUpdateKeySpecifier)[];
export type PageUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pageErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCSVCreateKeySpecifier = ('errors' | 'partner' | 'partnerCouponErrors' | PartnerCouponCSVCreateKeySpecifier)[];
export type PartnerCouponCSVCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerCreateKeySpecifier = ('errors' | 'partnerCouponCustomer' | 'partnerCouponCustomerErrors' | PartnerCouponCustomerCreateKeySpecifier)[];
export type PartnerCouponCustomerCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerDeleteKeySpecifier = ('errors' | 'partnerCouponCustomer' | 'partnerCouponCustomerErrors' | PartnerCouponCustomerDeleteKeySpecifier)[];
export type PartnerCouponCustomerDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerErrorKeySpecifier = ('field' | 'message' | 'code' | PartnerCouponCustomerErrorKeySpecifier)[];
export type PartnerCouponCustomerErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerTypeKeySpecifier = ('id' | 'partnerCoupon' | 'customerEmail' | PartnerCouponCustomerTypeKeySpecifier)[];
export type PartnerCouponCustomerTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupon?: FieldPolicy<any> | FieldReadFunction<any>,
	customerEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | PartnerCouponCustomerTypeConnectionKeySpecifier)[];
export type PartnerCouponCustomerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerTypeEdgeKeySpecifier = ('node' | 'cursor' | PartnerCouponCustomerTypeEdgeKeySpecifier)[];
export type PartnerCouponCustomerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponCustomerUpdateKeySpecifier = ('errors' | 'partnerCouponCustomer' | 'partnerCouponCustomerErrors' | PartnerCouponCustomerUpdateKeySpecifier)[];
export type PartnerCouponCustomerUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponDeleteKeySpecifier = ('errors' | 'partnerCoupon' | 'partnerCouponErrors' | PartnerCouponDeleteKeySpecifier)[];
export type PartnerCouponDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupon?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponErrorKeySpecifier = ('field' | 'message' | 'code' | PartnerCouponErrorKeySpecifier)[];
export type PartnerCouponErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponTypeKeySpecifier = ('id' | 'partner' | 'name' | 'description' | 'code' | 'used' | 'created' | 'updated' | 'customers' | PartnerCouponTypeKeySpecifier)[];
export type PartnerCouponTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	used?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	customers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | PartnerCouponTypeConnectionKeySpecifier)[];
export type PartnerCouponTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponTypeEdgeKeySpecifier = ('node' | 'cursor' | PartnerCouponTypeEdgeKeySpecifier)[];
export type PartnerCouponTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCouponUpdateKeySpecifier = ('errors' | 'partnerCoupon' | 'partnerCouponErrors' | PartnerCouponUpdateKeySpecifier)[];
export type PartnerCouponUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupon?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerCreateKeySpecifier = ('errors' | 'partner' | 'partnerErrors' | PartnerCreateKeySpecifier)[];
export type PartnerCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerDeleteKeySpecifier = ('errors' | 'partner' | 'partnerErrors' | PartnerDeleteKeySpecifier)[];
export type PartnerDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerErrorKeySpecifier = ('field' | 'message' | 'code' | PartnerErrorKeySpecifier)[];
export type PartnerErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerTypeKeySpecifier = ('id' | 'name' | 'description' | 'eventName' | 'usageLimit' | 'applyOncePerCustomer' | 'currency' | 'minSpentAmount' | 'minSpent' | 'startDate' | 'endDate' | 'created' | 'updated' | 'isActive' | 'partnerCoupons' | PartnerTypeKeySpecifier)[];
export type PartnerTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eventName?: FieldPolicy<any> | FieldReadFunction<any>,
	usageLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	applyOncePerCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	minSpentAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	minSpent?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupons?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | PartnerTypeConnectionKeySpecifier)[];
export type PartnerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerTypeEdgeKeySpecifier = ('node' | 'cursor' | PartnerTypeEdgeKeySpecifier)[];
export type PartnerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerUpdateKeySpecifier = ('errors' | 'partner' | 'partnerErrors' | PartnerUpdateKeySpecifier)[];
export type PartnerUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordChangeKeySpecifier = ('errors' | 'user' | 'accountErrors' | PasswordChangeKeySpecifier)[];
export type PasswordChangeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentKeySpecifier = ('id' | 'gateway' | 'isActive' | 'created' | 'modified' | 'token' | 'checkout' | 'order' | 'customerIpAddress' | 'chargeStatus' | 'actions' | 'total' | 'capturedAmount' | 'transactions' | 'availableCaptureAmount' | 'availableRefundAmount' | 'creditCard' | PaymentKeySpecifier)[];
export type PaymentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	customerIpAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	actions?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	capturedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	availableCaptureAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	availableRefundAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	creditCard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCaptureKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentCaptureKeySpecifier)[];
export type PaymentCaptureFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | PaymentCountableConnectionKeySpecifier)[];
export type PaymentCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentCountableEdgeKeySpecifier = ('node' | 'cursor' | PaymentCountableEdgeKeySpecifier)[];
export type PaymentCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentErrorKeySpecifier = ('field' | 'message' | 'code' | PaymentErrorKeySpecifier)[];
export type PaymentErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentGatewayKeySpecifier = ('name' | 'id' | 'config' | 'currencies' | PaymentGatewayKeySpecifier)[];
export type PaymentGatewayFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentInitializeKeySpecifier = ('errors' | 'initializedPayment' | 'paymentErrors' | PaymentInitializeKeySpecifier)[];
export type PaymentInitializeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	initializedPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentInitializedKeySpecifier = ('gateway' | 'name' | 'data' | PaymentInitializedKeySpecifier)[];
export type PaymentInitializedFieldPolicy = {
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentRefundKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentRefundKeySpecifier)[];
export type PaymentRefundFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSourceKeySpecifier = ('gateway' | 'creditCardInfo' | PaymentSourceKeySpecifier)[];
export type PaymentSourceFieldPolicy = {
	gateway?: FieldPolicy<any> | FieldReadFunction<any>,
	creditCardInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentVoidKeySpecifier = ('errors' | 'payment' | 'paymentErrors' | PaymentVoidKeySpecifier)[];
export type PaymentVoidFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaytmErrorKeySpecifier = ('field' | 'message' | 'code' | PaytmErrorKeySpecifier)[];
export type PaytmErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaytmOrderCreateKeySpecifier = ('errors' | 'paytmOrder' | 'paytmErrors' | PaytmOrderCreateKeySpecifier)[];
export type PaytmOrderCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	paytmOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	paytmErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaytmOrderTypeKeySpecifier = ('txnToken' | 'status' | 'orderId' | 'createdAt' | 'merchantId' | 'callbackUrl' | PaytmOrderTypeKeySpecifier)[];
export type PaytmOrderTypeFieldPolicy = {
	txnToken?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	merchantId?: FieldPolicy<any> | FieldReadFunction<any>,
	callbackUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PayuOrderTypeKeySpecifier = ('token' | 'paymentUrl' | 'payload' | PayuOrderTypeKeySpecifier)[];
export type PayuOrderTypeFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionKeySpecifier = ('code' | 'name' | PermissionKeySpecifier)[];
export type PermissionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupCreateKeySpecifier = ('errors' | 'permissionGroupErrors' | 'group' | PermissionGroupCreateKeySpecifier)[];
export type PermissionGroupCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupDeleteKeySpecifier = ('errors' | 'permissionGroupErrors' | 'group' | PermissionGroupDeleteKeySpecifier)[];
export type PermissionGroupDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupErrorKeySpecifier = ('field' | 'message' | 'code' | 'permissions' | 'users' | PermissionGroupErrorKeySpecifier)[];
export type PermissionGroupErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupUpdateKeySpecifier = ('errors' | 'permissionGroupErrors' | 'group' | PermissionGroupUpdateKeySpecifier)[];
export type PermissionGroupUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhoneChangeKeySpecifier = ('errors' | 'successful' | 'otpErrors' | PhoneChangeKeySpecifier)[];
export type PhoneChangeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	successful?: FieldPolicy<any> | FieldReadFunction<any>,
	otpErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PincodeKeySpecifier = ('errors' | 'pincode' | PincodeKeySpecifier)[];
export type PincodeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pincode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PincodeTypeKeySpecifier = ('pin' | 'city' | 'state' | 'serviceable' | 'created' | 'updated' | 'id' | PincodeTypeKeySpecifier)[];
export type PincodeTypeFieldPolicy = {
	pin?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceable?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PincodeTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | PincodeTypeConnectionKeySpecifier)[];
export type PincodeTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PincodeTypeEdgeKeySpecifier = ('node' | 'cursor' | PincodeTypeEdgeKeySpecifier)[];
export type PincodeTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginKeySpecifier = ('id' | 'name' | 'description' | 'active' | 'configuration' | PluginKeySpecifier)[];
export type PluginFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	configuration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | PluginCountableConnectionKeySpecifier)[];
export type PluginCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginCountableEdgeKeySpecifier = ('node' | 'cursor' | PluginCountableEdgeKeySpecifier)[];
export type PluginCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginErrorKeySpecifier = ('field' | 'message' | 'code' | PluginErrorKeySpecifier)[];
export type PluginErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginUpdateKeySpecifier = ('errors' | 'plugin' | 'pluginsErrors' | PluginUpdateKeySpecifier)[];
export type PluginUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginsErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'seoTitle' | 'seoDescription' | 'name' | 'descriptionJson' | 'publicationDate' | 'productType' | 'slug' | 'category' | 'updatedAt' | 'chargeTaxes' | 'weight' | 'availableForPurchase' | 'visibleInListings' | 'defaultVariant' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'url' | 'thumbnail' | 'tags' | 'pricing' | 'isAvailable' | 'minimalVariantPrice' | 'taxType' | 'attributes' | 'purchaseCost' | 'margin' | 'imageById' | 'variants' | 'images' | 'collections' | 'translation' | 'isAvailableForPurchase' | 'isPublished' | 'description' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeTaxes?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	availableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	visibleInListings?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	minimalVariantPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	taxType?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	purchaseCost?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	imageById?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | ProductBulkDeleteKeySpecifier)[];
export type ProductBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductBulkPublishKeySpecifier = ('errors' | 'count' | 'productErrors' | ProductBulkPublishKeySpecifier)[];
export type ProductBulkPublishFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductClearMetaKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductClearMetaKeySpecifier)[];
export type ProductClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductClearPrivateMetaKeySpecifier)[];
export type ProductClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ProductCountableConnectionKeySpecifier)[];
export type ProductCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountableEdgeKeySpecifier = ('node' | 'cursor' | ProductCountableEdgeKeySpecifier)[];
export type ProductCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCreateKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductCreateKeySpecifier)[];
export type ProductCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDeleteKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductDeleteKeySpecifier)[];
export type ProductDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductDuplicateKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductDuplicateKeySpecifier)[];
export type ProductDuplicateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductErrorKeySpecifier = ('field' | 'message' | 'code' | 'attributes' | ProductErrorKeySpecifier)[];
export type ProductErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('id' | 'sortOrder' | 'alt' | 'url' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | ProductImageBulkDeleteKeySpecifier)[];
export type ProductImageBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageCreateKeySpecifier = ('errors' | 'product' | 'image' | 'productErrors' | ProductImageCreateKeySpecifier)[];
export type ProductImageCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageCreateV2KeySpecifier = ('errors' | 'product' | 'image' | 'productErrors' | ProductImageCreateV2KeySpecifier)[];
export type ProductImageCreateV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageDeleteKeySpecifier = ('errors' | 'product' | 'image' | 'productErrors' | ProductImageDeleteKeySpecifier)[];
export type ProductImageDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageReorderKeySpecifier = ('errors' | 'product' | 'images' | 'productErrors' | ProductImageReorderKeySpecifier)[];
export type ProductImageReorderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageUpdateKeySpecifier = ('errors' | 'product' | 'image' | 'productErrors' | ProductImageUpdateKeySpecifier)[];
export type ProductImageUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPricingInfoKeySpecifier = ('onSale' | 'discount' | 'discountLocalCurrency' | 'priceRange' | 'priceRangeUndiscounted' | 'priceRangeLocalCurrency' | ProductPricingInfoKeySpecifier)[];
export type ProductPricingInfoFieldPolicy = {
	onSale?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRangeUndiscounted?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRangeLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewErrorKeySpecifier = ('field' | 'message' | 'code' | ProductReviewErrorKeySpecifier)[];
export type ProductReviewErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewImageCreateKeySpecifier = ('errors' | 'productReview' | 'image' | 'productErrors' | ProductReviewImageCreateKeySpecifier)[];
export type ProductReviewImageCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewImageDeleteKeySpecifier = ('errors' | 'productReview' | 'image' | 'productErrors' | ProductReviewImageDeleteKeySpecifier)[];
export type ProductReviewImageDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewImageTypeKeySpecifier = ('sortOrder' | 'id' | 'productReview' | 'image' | 'ppoi' | 'alt' | 'url' | ProductReviewImageTypeKeySpecifier)[];
export type ProductReviewImageTypeFieldPolicy = {
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	ppoi?: FieldPolicy<any> | FieldReadFunction<any>,
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewImageTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ProductReviewImageTypeConnectionKeySpecifier)[];
export type ProductReviewImageTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewImageTypeEdgeKeySpecifier = ('node' | 'cursor' | ProductReviewImageTypeEdgeKeySpecifier)[];
export type ProductReviewImageTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewTypeKeySpecifier = ('id' | 'user' | 'userName' | 'product' | 'title' | 'review' | 'rating' | 'isPublished' | 'verified' | 'externalReviewId' | 'created' | 'publishedDate' | 'updated' | 'sortOrder' | 'adminReply' | 'helpfulRatings' | 'unhelpfulRatings' | 'images' | 'videos' | 'rated' | ProductReviewTypeKeySpecifier)[];
export type ProductReviewTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userName?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>,
	externalReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	adminReply?: FieldPolicy<any> | FieldReadFunction<any>,
	helpfulRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	unhelpfulRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	videos?: FieldPolicy<any> | FieldReadFunction<any>,
	rated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewTypeCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ProductReviewTypeCountableConnectionKeySpecifier)[];
export type ProductReviewTypeCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewTypeCountableEdgeKeySpecifier = ('node' | 'cursor' | ProductReviewTypeCountableEdgeKeySpecifier)[];
export type ProductReviewTypeCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewVideoCreateKeySpecifier = ('errors' | 'productReview' | 'video' | 'productErrors' | ProductReviewVideoCreateKeySpecifier)[];
export type ProductReviewVideoCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewVideoDeleteKeySpecifier = ('errors' | 'productReview' | 'video' | 'productErrors' | ProductReviewVideoDeleteKeySpecifier)[];
export type ProductReviewVideoDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewVideoTypeKeySpecifier = ('sortOrder' | 'id' | 'productReview' | 'video' | 'alt' | 'url' | ProductReviewVideoTypeKeySpecifier)[];
export type ProductReviewVideoTypeFieldPolicy = {
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>,
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewVideoTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ProductReviewVideoTypeConnectionKeySpecifier)[];
export type ProductReviewVideoTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductReviewVideoTypeEdgeKeySpecifier = ('node' | 'cursor' | ProductReviewVideoTypeEdgeKeySpecifier)[];
export type ProductReviewVideoTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductSetAvailabilityForPurchaseKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductSetAvailabilityForPurchaseKeySpecifier)[];
export type ProductSetAvailabilityForPurchaseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslatableContentKeySpecifier = ('id' | 'seoTitle' | 'seoDescription' | 'name' | 'descriptionJson' | 'description' | 'translation' | 'product' | ProductTranslatableContentKeySpecifier)[];
export type ProductTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslateKeySpecifier = ('errors' | 'translationErrors' | 'product' | ProductTranslateKeySpecifier)[];
export type ProductTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTranslationKeySpecifier = ('id' | 'seoTitle' | 'seoDescription' | 'name' | 'descriptionJson' | 'language' | 'description' | ProductTranslationKeySpecifier)[];
export type ProductTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	seoDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeKeySpecifier = ('id' | 'name' | 'slug' | 'hasVariants' | 'isShippingRequired' | 'isDigital' | 'weight' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'products' | 'taxRate' | 'taxType' | 'variantAttributes' | 'productAttributes' | 'availableAttributes' | ProductTypeKeySpecifier)[];
export type ProductTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	hasVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	isShippingRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isDigital?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	taxRate?: FieldPolicy<any> | FieldReadFunction<any>,
	taxType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	productAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	availableAttributes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | ProductTypeBulkDeleteKeySpecifier)[];
export type ProductTypeBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeClearMetaKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeClearMetaKeySpecifier)[];
export type ProductTypeClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeClearPrivateMetaKeySpecifier)[];
export type ProductTypeClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ProductTypeCountableConnectionKeySpecifier)[];
export type ProductTypeCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCountableEdgeKeySpecifier = ('node' | 'cursor' | ProductTypeCountableEdgeKeySpecifier)[];
export type ProductTypeCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeCreateKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeCreateKeySpecifier)[];
export type ProductTypeCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeDeleteKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeDeleteKeySpecifier)[];
export type ProductTypeDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeReorderAttributesKeySpecifier = ('errors' | 'productType' | 'productErrors' | ProductTypeReorderAttributesKeySpecifier)[];
export type ProductTypeReorderAttributesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeUpdateKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeUpdateKeySpecifier)[];
export type ProductTypeUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeUpdateMetaKeySpecifier)[];
export type ProductTypeUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductTypeUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'productType' | ProductTypeUpdatePrivateMetaKeySpecifier)[];
export type ProductTypeUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdateKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductUpdateKeySpecifier)[];
export type ProductUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductUpdateMetaKeySpecifier)[];
export type ProductUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'product' | ProductUpdatePrivateMetaKeySpecifier)[];
export type ProductUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantKeySpecifier = ('id' | 'name' | 'sku' | 'product' | 'trackInventory' | 'weight' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'quantity' | 'quantityAllocated' | 'stockQuantity' | 'price' | 'tags' | 'pricing' | 'isAvailable' | 'attributes' | 'costPrice' | 'margin' | 'quantityOrdered' | 'revenue' | 'images' | 'translation' | 'digitalContent' | 'stocks' | 'quantityAvailable' | ProductVariantKeySpecifier)[];
export type ProductVariantFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	trackInventory?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAllocated?: FieldPolicy<any> | FieldReadFunction<any>,
	stockQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	pricing?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	costPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityOrdered?: FieldPolicy<any> | FieldReadFunction<any>,
	revenue?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContent?: FieldPolicy<any> | FieldReadFunction<any>,
	stocks?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAvailable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBulkCreateKeySpecifier = ('errors' | 'count' | 'productVariants' | 'bulkProductErrors' | ProductVariantBulkCreateKeySpecifier)[];
export type ProductVariantBulkCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	bulkProductErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBulkDeleteKeySpecifier = ('errors' | 'count' | 'productErrors' | ProductVariantBulkDeleteKeySpecifier)[];
export type ProductVariantBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantBulkUpdateKeySpecifier = ('errors' | 'productVariants' | ProductVariantBulkUpdateKeySpecifier)[];
export type ProductVariantBulkUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantClearMetaKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantClearMetaKeySpecifier)[];
export type ProductVariantClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantClearPrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantClearPrivateMetaKeySpecifier)[];
export type ProductVariantClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ProductVariantCountableConnectionKeySpecifier)[];
export type ProductVariantCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCountableEdgeKeySpecifier = ('node' | 'cursor' | ProductVariantCountableEdgeKeySpecifier)[];
export type ProductVariantCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantCreateKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantCreateKeySpecifier)[];
export type ProductVariantCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantDeleteKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantDeleteKeySpecifier)[];
export type ProductVariantDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantReorderKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductVariantReorderKeySpecifier)[];
export type ProductVariantReorderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantSetDefaultKeySpecifier = ('errors' | 'product' | 'productErrors' | ProductVariantSetDefaultKeySpecifier)[];
export type ProductVariantSetDefaultFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksCreateKeySpecifier = ('errors' | 'productVariant' | 'bulkStockErrors' | ProductVariantStocksCreateKeySpecifier)[];
export type ProductVariantStocksCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	bulkStockErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksDeleteKeySpecifier = ('errors' | 'productVariant' | 'stockErrors' | ProductVariantStocksDeleteKeySpecifier)[];
export type ProductVariantStocksDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	stockErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantStocksUpdateKeySpecifier = ('errors' | 'productVariant' | 'bulkStockErrors' | ProductVariantStocksUpdateKeySpecifier)[];
export type ProductVariantStocksUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	bulkStockErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'productVariant' | ProductVariantTranslatableContentKeySpecifier)[];
export type ProductVariantTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslateKeySpecifier = ('errors' | 'translationErrors' | 'productVariant' | ProductVariantTranslateKeySpecifier)[];
export type ProductVariantTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantTranslationKeySpecifier = ('id' | 'name' | 'language' | ProductVariantTranslationKeySpecifier)[];
export type ProductVariantTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantUpdateKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantUpdateKeySpecifier)[];
export type ProductVariantUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantUpdateMetaKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantUpdateMetaKeySpecifier)[];
export type ProductVariantUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductVariantUpdatePrivateMetaKeySpecifier = ('errors' | 'productErrors' | 'productVariant' | ProductVariantUpdatePrivateMetaKeySpecifier)[];
export type ProductVariantUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushAllToWareIqKeySpecifier = ('errors' | 'pushedOrders' | 'failedOrders' | 'orderErrors' | PushAllToWareIqKeySpecifier)[];
export type PushAllToWareIqFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	pushedOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	failedOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushToWareIqKeySpecifier = ('errors' | 'order' | 'action' | 'orderErrors' | PushToWareIqKeySpecifier)[];
export type PushToWareIqFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	orderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_entities' | '_service' | 'address' | 'addressByPhone' | 'addressType' | 'addressValidationRules' | 'apiCalls' | 'app' | 'apps' | 'appsInstallations' | 'archiveOrder' | 'archiveOrders' | 'attribute' | 'attributes' | 'authenticated' | 'authenticating' | 'banners' | 'cartItems' | 'cashback' | 'categories' | 'category' | 'checkout' | 'checkoutDiscounts' | 'checkoutLine' | 'checkoutLines' | 'checkoutLoading' | 'checkoutTotals' | 'checkoutUpdated' | 'checkouts' | 'collection' | 'collections' | 'combos' | 'contactUs' | 'couponDiscount' | 'customers' | 'deliveryDate' | 'deliverySchedule' | 'deliverySchedules' | 'deliverySchedulesByPincode' | 'digitalContent' | 'digitalContents' | 'draftOrders' | 'dtcCancelReason' | 'dtcEligibleForCancelOrReturn' | 'dtcReturnProduct' | 'dtcReturnReason' | 'dtcTracking' | 'exportFile' | 'exportFiles' | 'exportOrders' | 'failedOrders' | 'filterCheckouts' | 'freeCheckoutLines' | 'giftCard' | 'giftCards' | 'gokwikRtoPredict' | 'headers' | 'homepageEvents' | 'hostings' | 'influencer' | 'localCashback' | 'localCheckout' | 'localCheckoutDiscounts' | 'me' | 'menu' | 'menuItem' | 'menuItemV2' | 'menuItems' | 'menuItemsV2' | 'menuV2' | 'menus' | 'menusV2' | 'order' | 'orderByToken' | 'orderStatus' | 'orders' | 'ordersTotal' | 'ordersTotalv2' | 'ordersV2' | 'page' | 'pages' | 'partner' | 'partnerCoupon' | 'partnerCouponCustomer' | 'partnerCouponCustomers' | 'partnerCoupons' | 'partners' | 'payment' | 'payments' | 'permissionGroup' | 'permissionGroups' | 'pincode' | 'pincodes' | 'plugin' | 'plugins' | 'product' | 'productOffers' | 'productReviews' | 'productReviewsAll' | 'productType' | 'productTypes' | 'productVariant' | 'productVariants' | 'products' | 'recentOrder' | 'reportProductSales' | 'sale' | 'sales' | 'searchWithSearchtap' | 'section' | 'sections' | 'serviceAccount' | 'serviceAccounts' | 'shipment' | 'shipments' | 'shippingZone' | 'shippingZoneByPincode' | 'shippingZones' | 'shop' | 'shopifyGiftCard' | 'shopifyUser' | 'shopifyUserOrders' | 'shopmeta' | 'staffUsers' | 'stock' | 'stocks' | 'subscriptions' | 'survey' | 'surveyFill' | 'surveys' | 'taxTypes' | 'translation' | 'translations' | 'useCashback' | 'user' | 'userExists' | 'userWalletBalance' | 'users' | 'voucher' | 'voucherRule' | 'voucherRuleLink' | 'vouchers' | 'wallet' | 'warehouse' | 'warehouses' | 'webhook' | 'webhookEvents' | 'webhookSamplePayload' | 'webhooks' | 'wishlist' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_entities?: FieldPolicy<any> | FieldReadFunction<any>,
	_service?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addressByPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	addressType?: FieldPolicy<any> | FieldReadFunction<any>,
	addressValidationRules?: FieldPolicy<any> | FieldReadFunction<any>,
	apiCalls?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	apps?: FieldPolicy<any> | FieldReadFunction<any>,
	appsInstallations?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticated?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticating?: FieldPolicy<any> | FieldReadFunction<any>,
	banners?: FieldPolicy<any> | FieldReadFunction<any>,
	cartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	cashback?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutDiscounts?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLine?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLines?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutLoading?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutTotals?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	checkouts?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	combos?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUs?: FieldPolicy<any> | FieldReadFunction<any>,
	couponDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	customers?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySchedule?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySchedules?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySchedulesByPincode?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContent?: FieldPolicy<any> | FieldReadFunction<any>,
	digitalContents?: FieldPolicy<any> | FieldReadFunction<any>,
	draftOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcCancelReason?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcEligibleForCancelOrReturn?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcReturnProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcReturnReason?: FieldPolicy<any> | FieldReadFunction<any>,
	dtcTracking?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFile?: FieldPolicy<any> | FieldReadFunction<any>,
	exportFiles?: FieldPolicy<any> | FieldReadFunction<any>,
	exportOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	failedOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	filterCheckouts?: FieldPolicy<any> | FieldReadFunction<any>,
	freeCheckoutLines?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	gokwikRtoPredict?: FieldPolicy<any> | FieldReadFunction<any>,
	headers?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	hostings?: FieldPolicy<any> | FieldReadFunction<any>,
	influencer?: FieldPolicy<any> | FieldReadFunction<any>,
	localCashback?: FieldPolicy<any> | FieldReadFunction<any>,
	localCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	localCheckoutDiscounts?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemV2?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemsV2?: FieldPolicy<any> | FieldReadFunction<any>,
	menuV2?: FieldPolicy<any> | FieldReadFunction<any>,
	menus?: FieldPolicy<any> | FieldReadFunction<any>,
	menusV2?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderByToken?: FieldPolicy<any> | FieldReadFunction<any>,
	orderStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersTotalv2?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersV2?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	partner?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupon?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCouponCustomers?: FieldPolicy<any> | FieldReadFunction<any>,
	partnerCoupons?: FieldPolicy<any> | FieldReadFunction<any>,
	partners?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	pincode?: FieldPolicy<any> | FieldReadFunction<any>,
	pincodes?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	plugins?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productOffers?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewsAll?: FieldPolicy<any> | FieldReadFunction<any>,
	productType?: FieldPolicy<any> | FieldReadFunction<any>,
	productTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	recentOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	reportProductSales?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	sales?: FieldPolicy<any> | FieldReadFunction<any>,
	searchWithSearchtap?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	shipment?: FieldPolicy<any> | FieldReadFunction<any>,
	shipments?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZoneByPincode?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZones?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyGiftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUser?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUserOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	shopmeta?: FieldPolicy<any> | FieldReadFunction<any>,
	staffUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	stock?: FieldPolicy<any> | FieldReadFunction<any>,
	stocks?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyFill?: FieldPolicy<any> | FieldReadFunction<any>,
	surveys?: FieldPolicy<any> | FieldReadFunction<any>,
	taxTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	useCashback?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userExists?: FieldPolicy<any> | FieldReadFunction<any>,
	userWalletBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRule?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleLink?: FieldPolicy<any> | FieldReadFunction<any>,
	vouchers?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookSamplePayload?: FieldPolicy<any> | FieldReadFunction<any>,
	webhooks?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateProductReviewKeySpecifier = ('errors' | 'productReview' | 'productReviewErrors' | RateProductReviewKeySpecifier)[];
export type RateProductReviewFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RazorpayErrorKeySpecifier = ('field' | 'message' | 'code' | RazorpayErrorKeySpecifier)[];
export type RazorpayErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RazorpayOrderTypeKeySpecifier = ('id' | 'amount' | 'amountPaid' | 'amountDue' | 'currency' | 'status' | 'createdAt' | RazorpayOrderTypeKeySpecifier)[];
export type RazorpayOrderTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amountPaid?: FieldPolicy<any> | FieldReadFunction<any>,
	amountDue?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReOrderKeySpecifier = ('errors' | 'checkout' | ReOrderKeySpecifier)[];
export type ReOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReducedRateKeySpecifier = ('rate' | 'rateType' | ReducedRateKeySpecifier)[];
export type ReducedRateFieldPolicy = {
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	rateType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReferAFriendKeySpecifier = ('errors' | 'referHash' | 'accountErrors' | ReferAFriendKeySpecifier)[];
export type ReferAFriendFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	referHash?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshTokenKeySpecifier = ('errors' | 'token' | 'user' | 'accountErrors' | RefreshTokenKeySpecifier)[];
export type RefreshTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemoveTagsKeySpecifier = ('errors' | 'message' | 'tagErrors' | RemoveTagsKeySpecifier)[];
export type RemoveTagsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	tagErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestEmailChangeKeySpecifier = ('errors' | 'user' | 'accountErrors' | RequestEmailChangeKeySpecifier)[];
export type RequestEmailChangeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestOTPKeySpecifier = ('errors' | 'message' | 'otpErrors' | RequestOTPKeySpecifier)[];
export type RequestOTPFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	otpErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestPasswordResetKeySpecifier = ('errors' | 'accountErrors' | RequestPasswordResetKeySpecifier)[];
export type RequestPasswordResetFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleKeySpecifier = ('id' | 'name' | 'type' | 'value' | 'startDate' | 'endDate' | 'categories' | 'collections' | 'products' | 'translation' | SaleKeySpecifier)[];
export type SaleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleAddCataloguesKeySpecifier = ('errors' | 'sale' | 'discountErrors' | SaleAddCataloguesKeySpecifier)[];
export type SaleAddCataloguesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleBulkDeleteKeySpecifier = ('errors' | 'count' | 'discountErrors' | SaleBulkDeleteKeySpecifier)[];
export type SaleBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | SaleCountableConnectionKeySpecifier)[];
export type SaleCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCountableEdgeKeySpecifier = ('node' | 'cursor' | SaleCountableEdgeKeySpecifier)[];
export type SaleCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleCreateKeySpecifier = ('errors' | 'discountErrors' | 'sale' | SaleCreateKeySpecifier)[];
export type SaleCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleDeleteKeySpecifier = ('errors' | 'discountErrors' | 'sale' | SaleDeleteKeySpecifier)[];
export type SaleDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleRemoveCataloguesKeySpecifier = ('errors' | 'sale' | 'discountErrors' | SaleRemoveCataloguesKeySpecifier)[];
export type SaleRemoveCataloguesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'sale' | SaleTranslatableContentKeySpecifier)[];
export type SaleTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslateKeySpecifier = ('errors' | 'translationErrors' | 'sale' | SaleTranslateKeySpecifier)[];
export type SaleTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleTranslationKeySpecifier = ('id' | 'name' | 'language' | SaleTranslationKeySpecifier)[];
export type SaleTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleUpdateKeySpecifier = ('errors' | 'discountErrors' | 'sale' | SaleUpdateKeySpecifier)[];
export type SaleUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionAddProductsKeySpecifier = ('errors' | 'section' | 'sectionErrors' | SectionAddProductsKeySpecifier)[];
export type SectionAddProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionBulkDeleteKeySpecifier = ('errors' | 'count' | 'sectionErrors' | SectionBulkDeleteKeySpecifier)[];
export type SectionBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionCreateKeySpecifier = ('errors' | 'sectionErrors' | 'section' | SectionCreateKeySpecifier)[];
export type SectionCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionDeleteKeySpecifier = ('errors' | 'sectionErrors' | 'section' | SectionDeleteKeySpecifier)[];
export type SectionDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionErrorKeySpecifier = ('field' | 'message' | 'code' | SectionErrorKeySpecifier)[];
export type SectionErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageCreateKeySpecifier = ('errors' | 'section' | 'image' | 'sectionErrors' | SectionImageCreateKeySpecifier)[];
export type SectionImageCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageDeleteKeySpecifier = ('errors' | 'section' | 'image' | 'sectionErrors' | SectionImageDeleteKeySpecifier)[];
export type SectionImageDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageReorderKeySpecifier = ('errors' | 'section' | 'images' | 'sectionErrors' | SectionImageReorderKeySpecifier)[];
export type SectionImageReorderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageTypeKeySpecifier = ('sortOrder' | 'id' | 'section' | 'images' | 'ppoi' | 'alt' | 'url' | SectionImageTypeKeySpecifier)[];
export type SectionImageTypeFieldPolicy = {
	sortOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	ppoi?: FieldPolicy<any> | FieldReadFunction<any>,
	alt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SectionImageTypeConnectionKeySpecifier)[];
export type SectionImageTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionImageTypeEdgeKeySpecifier = ('node' | 'cursor' | SectionImageTypeEdgeKeySpecifier)[];
export type SectionImageTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionRemoveProductsKeySpecifier = ('errors' | 'section' | 'sectionErrors' | SectionRemoveProductsKeySpecifier)[];
export type SectionRemoveProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionReorderProductsKeySpecifier = ('errors' | 'section' | 'productErrors' | SectionReorderProductsKeySpecifier)[];
export type SectionReorderProductsFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionTypeKeySpecifier = ('metadata' | 'publicationDate' | 'privateMetadata' | 'isPublished' | 'id' | 'name' | 'description' | 'descriptionPlaintext' | 'descriptionJson' | 'products' | 'collections' | 'categories' | 'backgroundImage' | 'backgroundImageAlt' | 'updatedAt' | 'parent' | 'lft' | 'rght' | 'treeId' | 'level' | 'children' | 'images' | SectionTypeKeySpecifier)[];
export type SectionTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionPlaintext?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionJson?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundImage?: FieldPolicy<any> | FieldReadFunction<any>,
	backgroundImageAlt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	lft?: FieldPolicy<any> | FieldReadFunction<any>,
	rght?: FieldPolicy<any> | FieldReadFunction<any>,
	treeId?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionTypeCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | SectionTypeCountableConnectionKeySpecifier)[];
export type SectionTypeCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionTypeCountableEdgeKeySpecifier = ('node' | 'cursor' | SectionTypeCountableEdgeKeySpecifier)[];
export type SectionTypeCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SectionUpdateKeySpecifier = ('errors' | 'sectionErrors' | 'section' | SectionUpdateKeySpecifier)[];
export type SectionUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	section?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedAttributeKeySpecifier = ('attribute' | 'values' | SelectedAttributeKeySpecifier)[];
export type SelectedAttributeFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountKeySpecifier = ('id' | 'name' | 'created' | 'isActive' | 'permissions' | 'tokens' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | ServiceAccountKeySpecifier)[];
export type ServiceAccountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountClearPrivateMetaKeySpecifier = ('errors' | 'accountErrors' | 'serviceAccount' | ServiceAccountClearPrivateMetaKeySpecifier)[];
export type ServiceAccountClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ServiceAccountCountableConnectionKeySpecifier)[];
export type ServiceAccountCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountCountableEdgeKeySpecifier = ('node' | 'cursor' | ServiceAccountCountableEdgeKeySpecifier)[];
export type ServiceAccountCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountCreateKeySpecifier = ('errors' | 'authToken' | 'accountErrors' | 'serviceAccount' | ServiceAccountCreateKeySpecifier)[];
export type ServiceAccountCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountDeleteKeySpecifier = ('errors' | 'accountErrors' | 'serviceAccount' | ServiceAccountDeleteKeySpecifier)[];
export type ServiceAccountDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountTokenKeySpecifier = ('name' | 'authToken' | 'id' | ServiceAccountTokenKeySpecifier)[];
export type ServiceAccountTokenFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountTokenCreateKeySpecifier = ('errors' | 'authToken' | 'accountErrors' | 'serviceAccountToken' | ServiceAccountTokenCreateKeySpecifier)[];
export type ServiceAccountTokenCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountTokenDeleteKeySpecifier = ('errors' | 'accountErrors' | 'serviceAccountToken' | ServiceAccountTokenDeleteKeySpecifier)[];
export type ServiceAccountTokenDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccountToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountUpdateKeySpecifier = ('errors' | 'accountErrors' | 'serviceAccount' | ServiceAccountUpdateKeySpecifier)[];
export type ServiceAccountUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAccountUpdatePrivateMetaKeySpecifier = ('errors' | 'accountErrors' | 'serviceAccount' | ServiceAccountUpdatePrivateMetaKeySpecifier)[];
export type ServiceAccountUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetPasswordKeySpecifier = ('errors' | 'token' | 'refreshToken' | 'csrfToken' | 'user' | 'accountErrors' | SetPasswordKeySpecifier)[];
export type SetPasswordFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SezzleOrderTypeKeySpecifier = ('token' | 'paymentUrl' | SezzleOrderTypeKeySpecifier)[];
export type SezzleOrderTypeFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemTypeKeySpecifier = ('id' | 'itemId' | 'shipment' | 'productId' | 'itemName' | 'itemQuantity' | 'createdAt' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | ShipmentItemTypeKeySpecifier)[];
export type ShipmentItemTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itemId?: FieldPolicy<any> | FieldReadFunction<any>,
	shipment?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	itemName?: FieldPolicy<any> | FieldReadFunction<any>,
	itemQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ShipmentItemTypeConnectionKeySpecifier)[];
export type ShipmentItemTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentItemTypeEdgeKeySpecifier = ('node' | 'cursor' | ShipmentItemTypeEdgeKeySpecifier)[];
export type ShipmentItemTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentTypeKeySpecifier = ('metadata' | 'privateMetadata' | 'id' | 'storeId' | 'shipmentId' | 'fulfillmentId' | 'awbNumber' | 'courierName' | 'estimateDeliveryDate' | 'deliveredAt' | 'status' | 'order' | 'trackingUrl' | 'invoiceUrl' | 'createdAt' | 'modifiedAt' | 'shipments' | 'privateMeta' | 'meta' | 'items' | 'phone' | ShipmentTypeKeySpecifier)[];
export type ShipmentTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	storeId?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentId?: FieldPolicy<any> | FieldReadFunction<any>,
	fulfillmentId?: FieldPolicy<any> | FieldReadFunction<any>,
	awbNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	courierName?: FieldPolicy<any> | FieldReadFunction<any>,
	estimateDeliveryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	invoiceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	shipments?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ShipmentTypeConnectionKeySpecifier)[];
export type ShipmentTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentTypeEdgeKeySpecifier = ('node' | 'cursor' | ShipmentTypeEdgeKeySpecifier)[];
export type ShipmentTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingErrorKeySpecifier = ('field' | 'message' | 'code' | 'warehouses' | ShippingErrorKeySpecifier)[];
export type ShippingErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodKeySpecifier = ('id' | 'name' | 'price' | 'minimumOrderPrice' | 'maximumOrderPrice' | 'minimumOrderWeight' | 'maximumOrderWeight' | 'type' | 'translation' | ShippingMethodKeySpecifier)[];
export type ShippingMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minimumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	maximumOrderWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'shippingMethod' | ShippingMethodTranslatableContentKeySpecifier)[];
export type ShippingMethodTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingMethodTranslationKeySpecifier = ('id' | 'name' | 'language' | ShippingMethodTranslationKeySpecifier)[];
export type ShippingMethodTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceBulkDeleteKeySpecifier = ('errors' | 'count' | 'shippingErrors' | ShippingPriceBulkDeleteKeySpecifier)[];
export type ShippingPriceBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceCreateKeySpecifier = ('errors' | 'shippingZone' | 'shippingErrors' | 'shippingMethod' | ShippingPriceCreateKeySpecifier)[];
export type ShippingPriceCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceDeleteKeySpecifier = ('errors' | 'shippingMethod' | 'shippingZone' | 'shippingErrors' | ShippingPriceDeleteKeySpecifier)[];
export type ShippingPriceDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceTranslateKeySpecifier = ('errors' | 'translationErrors' | 'shippingMethod' | ShippingPriceTranslateKeySpecifier)[];
export type ShippingPriceTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingPriceUpdateKeySpecifier = ('errors' | 'shippingZone' | 'shippingErrors' | 'shippingMethod' | ShippingPriceUpdateKeySpecifier)[];
export type ShippingPriceUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneKeySpecifier = ('id' | 'name' | 'default' | 'priceRange' | 'countries' | 'shippingMethods' | 'warehouses' | ShippingZoneKeySpecifier)[];
export type ShippingZoneFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneBulkDeleteKeySpecifier = ('errors' | 'count' | 'shippingErrors' | ShippingZoneBulkDeleteKeySpecifier)[];
export type ShippingZoneBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | ShippingZoneCountableConnectionKeySpecifier)[];
export type ShippingZoneCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCountableEdgeKeySpecifier = ('node' | 'cursor' | ShippingZoneCountableEdgeKeySpecifier)[];
export type ShippingZoneCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneCreateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneCreateKeySpecifier)[];
export type ShippingZoneCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneDeleteKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneDeleteKeySpecifier)[];
export type ShippingZoneDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShippingZoneUpdateKeySpecifier = ('errors' | 'shippingErrors' | 'shippingZone' | ShippingZoneUpdateKeySpecifier)[];
export type ShippingZoneUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopKeySpecifier = ('availablePaymentGateways' | 'geolocalization' | 'authorizationKeys' | 'countries' | 'currencies' | 'defaultCurrency' | 'defaultCountry' | 'defaultMailSenderName' | 'defaultMailSenderAddress' | 'description' | 'domain' | 'homepageCollection' | 'languages' | 'name' | 'navigation' | 'permissions' | 'phonePrefixes' | 'headerText' | 'includeTaxesInPrices' | 'displayGrossPrices' | 'chargeTaxesOnShipping' | 'trackInventoryByDefault' | 'defaultWeightUnit' | 'translation' | 'automaticFulfillmentDigitalProducts' | 'defaultDigitalMaxDownloads' | 'defaultDigitalUrlValidDays' | 'companyAddress' | 'customerSetPasswordUrl' | 'staffNotificationRecipients' | ShopKeySpecifier)[];
export type ShopFieldPolicy = {
	availablePaymentGateways?: FieldPolicy<any> | FieldReadFunction<any>,
	geolocalization?: FieldPolicy<any> | FieldReadFunction<any>,
	authorizationKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultMailSenderName?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultMailSenderAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	homepageCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	navigation?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	phonePrefixes?: FieldPolicy<any> | FieldReadFunction<any>,
	headerText?: FieldPolicy<any> | FieldReadFunction<any>,
	includeTaxesInPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	displayGrossPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	chargeTaxesOnShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	trackInventoryByDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultWeightUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	automaticFulfillmentDigitalProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultDigitalMaxDownloads?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultDigitalUrlValidDays?: FieldPolicy<any> | FieldReadFunction<any>,
	companyAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	customerSetPasswordUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipients?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopAddressUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopAddressUpdateKeySpecifier)[];
export type ShopAddressUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopDomainUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopDomainUpdateKeySpecifier)[];
export type ShopDomainUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopErrorKeySpecifier = ('field' | 'message' | 'code' | ShopErrorKeySpecifier)[];
export type ShopErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopFetchTaxRatesKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopFetchTaxRatesKeySpecifier)[];
export type ShopFetchTaxRatesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopMetaTypeKeySpecifier = ('metadata' | 'privateMetadata' | 'id' | 'name' | ShopMetaTypeKeySpecifier)[];
export type ShopMetaTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopMetaTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | ShopMetaTypeConnectionKeySpecifier)[];
export type ShopMetaTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopMetaTypeEdgeKeySpecifier = ('node' | 'cursor' | ShopMetaTypeEdgeKeySpecifier)[];
export type ShopMetaTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopSettingsTranslateKeySpecifier = ('errors' | 'shop' | 'translationErrors' | ShopSettingsTranslateKeySpecifier)[];
export type ShopSettingsTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopSettingsUpdateKeySpecifier = ('errors' | 'shop' | 'shopErrors' | ShopSettingsUpdateKeySpecifier)[];
export type ShopSettingsUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopTranslationKeySpecifier = ('id' | 'headerText' | 'description' | 'language' | ShopTranslationKeySpecifier)[];
export type ShopTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	headerText?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyGiftCardTypeKeySpecifier = ('giftCardId' | 'giftCard' | 'id' | ShopifyGiftCardTypeKeySpecifier)[];
export type ShopifyGiftCardTypeFieldPolicy = {
	giftCardId?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyOrderTypeKeySpecifier = ('id' | 'shopifyOrder' | 'order' | 'billingAddress' | 'shippingAddress' | 'lines' | ShopifyOrderTypeKeySpecifier)[];
export type ShopifyOrderTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	lines?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyUserErrorKeySpecifier = ('field' | 'message' | 'code' | ShopifyUserErrorKeySpecifier)[];
export type ShopifyUserErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopifyUserTypeKeySpecifier = ('shopifyUserId' | 'user' | 'giftCard' | 'id' | ShopifyUserTypeKeySpecifier)[];
export type ShopifyUserTypeFieldPolicy = {
	shopifyUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCard?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffBulkDeleteKeySpecifier = ('errors' | 'count' | 'staffErrors' | StaffBulkDeleteKeySpecifier)[];
export type StaffBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffCreateKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffCreateKeySpecifier)[];
export type StaffCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffDeleteKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffDeleteKeySpecifier)[];
export type StaffDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffErrorKeySpecifier = ('field' | 'message' | 'code' | 'permissions' | 'groups' | 'users' | StaffErrorKeySpecifier)[];
export type StaffErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientKeySpecifier = ('user' | 'active' | 'id' | 'email' | StaffNotificationRecipientKeySpecifier)[];
export type StaffNotificationRecipientFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientCreateKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientCreateKeySpecifier)[];
export type StaffNotificationRecipientCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientDeleteKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientDeleteKeySpecifier)[];
export type StaffNotificationRecipientDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffNotificationRecipientUpdateKeySpecifier = ('errors' | 'shopErrors' | 'staffNotificationRecipient' | StaffNotificationRecipientUpdateKeySpecifier)[];
export type StaffNotificationRecipientUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffNotificationRecipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StaffUpdateKeySpecifier = ('errors' | 'staffErrors' | 'user' | StaffUpdateKeySpecifier)[];
export type StaffUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	staffErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockKeySpecifier = ('warehouse' | 'productVariant' | 'quantity' | 'id' | 'quantityAllocated' | StockKeySpecifier)[];
export type StockFieldPolicy = {
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAllocated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | StockCountableConnectionKeySpecifier)[];
export type StockCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockCountableEdgeKeySpecifier = ('node' | 'cursor' | StockCountableEdgeKeySpecifier)[];
export type StockCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockErrorKeySpecifier = ('field' | 'message' | 'code' | StockErrorKeySpecifier)[];
export type StockErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionCreateKeySpecifier = ('errors' | 'subscription' | 'subscriptionErrors' | SubscriptionCreateKeySpecifier)[];
export type SubscriptionCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionErrorKeySpecifier = ('field' | 'message' | 'code' | SubscriptionErrorKeySpecifier)[];
export type SubscriptionErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionTypeKeySpecifier = ('metadata' | 'privateMetadata' | 'id' | 'user' | 'product' | 'quantity' | 'quantityIndex' | 'quantityLength' | 'payment' | 'status' | 'startDate' | 'endDate' | 'created' | 'updated' | SubscriptionTypeKeySpecifier)[];
export type SubscriptionTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityLength?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SubscriptionTypeConnectionKeySpecifier)[];
export type SubscriptionTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionTypeEdgeKeySpecifier = ('node' | 'cursor' | SubscriptionTypeEdgeKeySpecifier)[];
export type SubscriptionTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerOptionsTypeKeySpecifier = ('id' | 'question' | 'answer' | 'created' | SurveyAnswerOptionsTypeKeySpecifier)[];
export type SurveyAnswerOptionsTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	question?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerOptionsTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SurveyAnswerOptionsTypeConnectionKeySpecifier)[];
export type SurveyAnswerOptionsTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerOptionsTypeEdgeKeySpecifier = ('node' | 'cursor' | SurveyAnswerOptionsTypeEdgeKeySpecifier)[];
export type SurveyAnswerOptionsTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerTypeKeySpecifier = ('id' | 'question' | 'answer' | 'created' | SurveyAnswerTypeKeySpecifier)[];
export type SurveyAnswerTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	question?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SurveyAnswerTypeConnectionKeySpecifier)[];
export type SurveyAnswerTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyAnswerTypeEdgeKeySpecifier = ('node' | 'cursor' | SurveyAnswerTypeEdgeKeySpecifier)[];
export type SurveyAnswerTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyCreateKeySpecifier = ('errors' | 'surveys' | 'SurveyErrors' | SurveyCreateKeySpecifier)[];
export type SurveyCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	surveys?: FieldPolicy<any> | FieldReadFunction<any>,
	SurveyErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyDeleteKeySpecifier = ('errors' | 'survey' | 'surveyErrors' | SurveyDeleteKeySpecifier)[];
export type SurveyDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyErrorKeySpecifier = ('field' | 'message' | 'code' | SurveyErrorKeySpecifier)[];
export type SurveyErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyFillKeySpecifier = ('errors' | 'survey' | 'surveyErrors' | SurveyFillKeySpecifier)[];
export type SurveyFillFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyFillTypeKeySpecifier = ('name' | 'shown' | 'attempted' | 'questions' | 'id' | SurveyFillTypeKeySpecifier)[];
export type SurveyFillTypeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shown?: FieldPolicy<any> | FieldReadFunction<any>,
	attempted?: FieldPolicy<any> | FieldReadFunction<any>,
	questions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyLinkDataKeySpecifier = ('surveyHash' | 'surveyId' | 'orderId' | 'userId' | SurveyLinkDataKeySpecifier)[];
export type SurveyLinkDataFieldPolicy = {
	surveyHash?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyId?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyOptionsFillKeySpecifier = ('errors' | 'survey' | 'surveyErrors' | SurveyOptionsFillKeySpecifier)[];
export type SurveyOptionsFillFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionOptionsTypeKeySpecifier = ('id' | 'text' | 'type' | 'answer' | 'order' | 'required' | 'survey' | 'answersFromOptions' | SurveyQuestionOptionsTypeKeySpecifier)[];
export type SurveyQuestionOptionsTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	answer?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	answersFromOptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionOptionsTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SurveyQuestionOptionsTypeConnectionKeySpecifier)[];
export type SurveyQuestionOptionsTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionOptionsTypeEdgeKeySpecifier = ('node' | 'cursor' | SurveyQuestionOptionsTypeEdgeKeySpecifier)[];
export type SurveyQuestionOptionsTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionTypeKeySpecifier = ('id' | 'text' | 'order' | 'required' | 'survey' | 'answers' | SurveyQuestionTypeKeySpecifier)[];
export type SurveyQuestionTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	survey?: FieldPolicy<any> | FieldReadFunction<any>,
	answers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SurveyQuestionTypeConnectionKeySpecifier)[];
export type SurveyQuestionTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyQuestionTypeEdgeKeySpecifier = ('node' | 'cursor' | SurveyQuestionTypeEdgeKeySpecifier)[];
export type SurveyQuestionTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyTypeKeySpecifier = ('name' | 'shown' | 'attempted' | 'questions' | 'id' | 'user' | 'userEmail' | 'order' | 'surveyHash' | 'created' | 'questionsOptions' | 'linkData' | SurveyTypeKeySpecifier)[];
export type SurveyTypeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shown?: FieldPolicy<any> | FieldReadFunction<any>,
	attempted?: FieldPolicy<any> | FieldReadFunction<any>,
	questions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	surveyHash?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	questionsOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	linkData?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | SurveyTypeConnectionKeySpecifier)[];
export type SurveyTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SurveyTypeEdgeKeySpecifier = ('node' | 'cursor' | SurveyTypeEdgeKeySpecifier)[];
export type SurveyTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyncWareIqInventoryKeySpecifier = ('errors' | SyncWareIqInventoryKeySpecifier)[];
export type SyncWareIqInventoryFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagErrorKeySpecifier = ('field' | 'message' | 'code' | TagErrorKeySpecifier)[];
export type TagErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagTypeKeySpecifier = ('name' | TagTypeKeySpecifier)[];
export type TagTypeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxTypeKeySpecifier = ('description' | 'taxCode' | TaxTypeKeySpecifier)[];
export type TaxTypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	taxCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxedMoneyKeySpecifier = ('currency' | 'gross' | 'net' | 'tax' | TaxedMoneyKeySpecifier)[];
export type TaxedMoneyFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	gross?: FieldPolicy<any> | FieldReadFunction<any>,
	net?: FieldPolicy<any> | FieldReadFunction<any>,
	tax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxedMoneyRangeKeySpecifier = ('start' | 'stop' | TaxedMoneyRangeKeySpecifier)[];
export type TaxedMoneyRangeFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenCreateWithAdminKeySpecifier = ('errors' | 'accessToken' | 'csrfToken' | TokenCreateWithAdminKeySpecifier)[];
export type TokenCreateWithAdminFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	csrfToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('id' | 'created' | 'payment' | 'token' | 'kind' | 'isSuccess' | 'error' | 'amount' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	isSuccess?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslatableItemConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | TranslatableItemConnectionKeySpecifier)[];
export type TranslatableItemConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslatableItemEdgeKeySpecifier = ('node' | 'cursor' | TranslatableItemEdgeKeySpecifier)[];
export type TranslatableItemEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TranslationErrorKeySpecifier = ('field' | 'message' | 'code' | TranslationErrorKeySpecifier)[];
export type TranslationErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerCronKeySpecifier = ('errors' | 'response' | 'triggerCronErrors' | TriggerCronKeySpecifier)[];
export type TriggerCronFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	response?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerCronErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerCronErrorKeySpecifier = ('field' | 'message' | 'code' | TriggerCronErrorKeySpecifier)[];
export type TriggerCronErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAddressTypeKeySpecifier = ('errors' | 'addressLink' | UpdateAddressTypeKeySpecifier)[];
export type UpdateAddressTypeFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLink?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateArchiveOrderKeySpecifier = ('errors' | 'archiveOrder' | 'archiveOrderErrors' | UpdateArchiveOrderKeySpecifier)[];
export type UpdateArchiveOrderFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveOrderErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateBannerKeySpecifier = ('errors' | 'banner' | 'bannerErrors' | UpdateBannerKeySpecifier)[];
export type UpdateBannerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	banner?: FieldPolicy<any> | FieldReadFunction<any>,
	bannerErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateInfluencerKeySpecifier = ('errors' | 'influencer' | UpdateInfluencerKeySpecifier)[];
export type UpdateInfluencerFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	influencer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateInventoryCSVKeySpecifier = ('errors' | 'message' | UpdateInventoryCSVKeySpecifier)[];
export type UpdateInventoryCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateManufacturingDetailsCSVKeySpecifier = ('errors' | 'product' | UpdateManufacturingDetailsCSVKeySpecifier)[];
export type UpdateManufacturingDetailsCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMetadataKeySpecifier = ('errors' | 'metadataErrors' | 'item' | UpdateMetadataKeySpecifier)[];
export type UpdateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMetadataV2KeySpecifier = ('errors' | 'metadataErrors' | 'item' | UpdateMetadataV2KeySpecifier)[];
export type UpdateMetadataV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePaymentMethodKeySpecifier = ('errors' | 'checkout' | 'checkoutErrors' | UpdatePaymentMethodKeySpecifier)[];
export type UpdatePaymentMethodFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	checkoutErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePrivateMetadataKeySpecifier = ('errors' | 'metadataErrors' | 'item' | UpdatePrivateMetadataKeySpecifier)[];
export type UpdatePrivateMetadataFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePrivateMetadataV2KeySpecifier = ('errors' | 'metadataErrors' | 'item' | UpdatePrivateMetadataV2KeySpecifier)[];
export type UpdatePrivateMetadataV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	metadataErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateReplyOnProductReviewKeySpecifier = ('errors' | 'productReview' | 'productReviewErrors' | UpdateReplyOnProductReviewKeySpecifier)[];
export type UpdateReplyOnProductReviewFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productReview?: FieldPolicy<any> | FieldReadFunction<any>,
	productReviewErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateShopifyProductPriceCSVKeySpecifier = ('errors' | 'productVariant' | 'productErrors' | UpdateShopifyProductPriceCSVKeySpecifier)[];
export type UpdateShopifyProductPriceCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateShopifyProductTagsCSVKeySpecifier = ('errors' | 'product' | 'productErrors' | UpdateShopifyProductTagsCSVKeySpecifier)[];
export type UpdateShopifyProductTagsCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateShopifyUserKeySpecifier = ('errors' | 'shopifyUser' | UpdateShopifyUserKeySpecifier)[];
export type UpdateShopifyUserFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shopifyUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSubscriptionKeySpecifier = ('errors' | 'subscription' | 'subscriptionError' | UpdateSubscriptionKeySpecifier)[];
export type UpdateSubscriptionFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionError?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateVoucherRuleKeySpecifier = ('errors' | 'voucherRule' | 'voucherErrors' | UpdateVoucherRuleKeySpecifier)[];
export type UpdateVoucherRuleFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRule?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateVoucherRuleLinkKeySpecifier = ('errors' | 'voucherRuleLink' | 'voucherErrors' | UpdateVoucherRuleLinkKeySpecifier)[];
export type UpdateVoucherRuleLinkFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherRuleLink?: FieldPolicy<any> | FieldReadFunction<any>,
	voucherErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UploadProductImageCSVKeySpecifier = ('errors' | 'product' | UploadProductImageCSVKeySpecifier)[];
export type UploadProductImageCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'lastLogin' | 'email' | 'firstName' | 'lastName' | 'isStaff' | 'isActive' | 'note' | 'dateJoined' | 'defaultShippingAddress' | 'defaultBillingAddress' | 'privateMetadata' | 'metadata' | 'privateMeta' | 'meta' | 'phone' | 'addresses' | 'checkout' | 'giftCards' | 'orders' | 'permissions' | 'userPermissions' | 'permissionGroups' | 'editableGroups' | 'avatar' | 'events' | 'storedPaymentSources' | 'tags' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	dateJoined?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	giftCards?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	userPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	editableGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	storedPaymentSources?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarDeleteKeySpecifier = ('errors' | 'user' | 'accountErrors' | UserAvatarDeleteKeySpecifier)[];
export type UserAvatarDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarDeleteV2KeySpecifier = ('errors' | 'user' | 'accountErrors' | UserAvatarDeleteV2KeySpecifier)[];
export type UserAvatarDeleteV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarUpdateKeySpecifier = ('errors' | 'user' | 'accountErrors' | UserAvatarUpdateKeySpecifier)[];
export type UserAvatarUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAvatarUpdateV2KeySpecifier = ('errors' | 'user' | 'accountErrors' | UserAvatarUpdateV2KeySpecifier)[];
export type UserAvatarUpdateV2FieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBulkSetActiveKeySpecifier = ('errors' | 'count' | 'accountErrors' | UserBulkSetActiveKeySpecifier)[];
export type UserBulkSetActiveFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserClearMetaKeySpecifier = ('errors' | 'accountErrors' | 'user' | UserClearMetaKeySpecifier)[];
export type UserClearMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserClearPrivateMetaKeySpecifier = ('errors' | 'accountErrors' | 'user' | UserClearPrivateMetaKeySpecifier)[];
export type UserClearPrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | UserCountableConnectionKeySpecifier)[];
export type UserCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountableEdgeKeySpecifier = ('node' | 'cursor' | UserCountableEdgeKeySpecifier)[];
export type UserCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserExistsTypeKeySpecifier = ('phoneExist' | 'emailExist' | 'isActive' | UserExistsTypeKeySpecifier)[];
export type UserExistsTypeFieldPolicy = {
	phoneExist?: FieldPolicy<any> | FieldReadFunction<any>,
	emailExist?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionKeySpecifier = ('code' | 'name' | 'sourcePermissionGroups' | UserPermissionKeySpecifier)[];
export type UserPermissionFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sourcePermissionGroups?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserUpdateMetaKeySpecifier = ('errors' | 'accountErrors' | 'user' | UserUpdateMetaKeySpecifier)[];
export type UserUpdateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserUpdatePrivateMetaKeySpecifier = ('errors' | 'accountErrors' | 'user' | UserUpdatePrivateMetaKeySpecifier)[];
export type UserUpdatePrivateMetaFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VATKeySpecifier = ('countryCode' | 'standardRate' | 'reducedRates' | VATKeySpecifier)[];
export type VATFieldPolicy = {
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	standardRate?: FieldPolicy<any> | FieldReadFunction<any>,
	reducedRates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantImageAssignKeySpecifier = ('errors' | 'productVariant' | 'image' | 'productErrors' | VariantImageAssignKeySpecifier)[];
export type VariantImageAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantImageUnassignKeySpecifier = ('errors' | 'productVariant' | 'image' | 'productErrors' | VariantImageUnassignKeySpecifier)[];
export type VariantImageUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	productVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	productErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantPricingInfoKeySpecifier = ('onSale' | 'discount' | 'discountLocalCurrency' | 'price' | 'priceUndiscounted' | 'priceLocalCurrency' | VariantPricingInfoKeySpecifier)[];
export type VariantPricingInfoFieldPolicy = {
	onSale?: FieldPolicy<any> | FieldReadFunction<any>,
	discount?: FieldPolicy<any> | FieldReadFunction<any>,
	discountLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceUndiscounted?: FieldPolicy<any> | FieldReadFunction<any>,
	priceLocalCurrency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyCheckoutOTPKeySpecifier = ('errors' | 'isVerified' | 'otpErrors' | VerifyCheckoutOTPKeySpecifier)[];
export type VerifyCheckoutOTPFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	isVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	otpErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyTokenKeySpecifier = ('errors' | 'user' | 'isValid' | 'payload' | 'accountErrors' | VerifyTokenKeySpecifier)[];
export type VerifyTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	isValid?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	accountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherKeySpecifier = ('id' | 'name' | 'type' | 'code' | 'usageLimit' | 'used' | 'startDate' | 'endDate' | 'applyOncePerOrder' | 'applyOncePerCustomer' | 'discountValueType' | 'discountValue' | 'minSpent' | 'minCheckoutItemsQuantity' | 'categories' | 'collections' | 'products' | 'countries' | 'translation' | VoucherKeySpecifier)[];
export type VoucherFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	usageLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	used?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	applyOncePerOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	applyOncePerCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValueType?: FieldPolicy<any> | FieldReadFunction<any>,
	discountValue?: FieldPolicy<any> | FieldReadFunction<any>,
	minSpent?: FieldPolicy<any> | FieldReadFunction<any>,
	minCheckoutItemsQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherAddCataloguesKeySpecifier = ('errors' | 'voucher' | 'discountErrors' | VoucherAddCataloguesKeySpecifier)[];
export type VoucherAddCataloguesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherBulkDeleteKeySpecifier = ('errors' | 'count' | 'discountErrors' | VoucherBulkDeleteKeySpecifier)[];
export type VoucherBulkDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | VoucherCountableConnectionKeySpecifier)[];
export type VoucherCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCountableEdgeKeySpecifier = ('node' | 'cursor' | VoucherCountableEdgeKeySpecifier)[];
export type VoucherCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherCreateKeySpecifier = ('errors' | 'discountErrors' | 'voucher' | VoucherCreateKeySpecifier)[];
export type VoucherCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherDeleteKeySpecifier = ('errors' | 'discountErrors' | 'voucher' | VoucherDeleteKeySpecifier)[];
export type VoucherDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherErrorKeySpecifier = ('field' | 'message' | 'code' | VoucherErrorKeySpecifier)[];
export type VoucherErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRemoveCataloguesKeySpecifier = ('errors' | 'voucher' | 'discountErrors' | VoucherRemoveCataloguesKeySpecifier)[];
export type VoucherRemoveCataloguesFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleLinkTypeKeySpecifier = ('id' | 'code' | 'rule' | 'isEnabled' | 'created' | 'usageCount' | VoucherRuleLinkTypeKeySpecifier)[];
export type VoucherRuleLinkTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	rule?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	usageCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleLinkTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | VoucherRuleLinkTypeConnectionKeySpecifier)[];
export type VoucherRuleLinkTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleLinkTypeEdgeKeySpecifier = ('node' | 'cursor' | VoucherRuleLinkTypeEdgeKeySpecifier)[];
export type VoucherRuleLinkTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleTypeKeySpecifier = ('metadata' | 'privateMetadata' | 'id' | 'name' | 'slug' | 'description' | 'condition' | 'action' | 'usePerCustomer' | 'maxUsage' | 'isEnabled' | 'isDefault' | 'created' | 'updated' | 'startDate' | 'endDate' | 'links' | 'logs' | VoucherRuleTypeKeySpecifier)[];
export type VoucherRuleTypeFieldPolicy = {
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	privateMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	usePerCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	maxUsage?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | VoucherRuleTypeConnectionKeySpecifier)[];
export type VoucherRuleTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherRuleTypeEdgeKeySpecifier = ('node' | 'cursor' | VoucherRuleTypeEdgeKeySpecifier)[];
export type VoucherRuleTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslatableContentKeySpecifier = ('id' | 'name' | 'translation' | 'voucher' | VoucherTranslatableContentKeySpecifier)[];
export type VoucherTranslatableContentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	translation?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslateKeySpecifier = ('errors' | 'translationErrors' | 'voucher' | VoucherTranslateKeySpecifier)[];
export type VoucherTranslateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	translationErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTranslationKeySpecifier = ('id' | 'name' | 'language' | VoucherTranslationKeySpecifier)[];
export type VoucherTranslationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherUpdateKeySpecifier = ('errors' | 'discountErrors' | 'voucher' | VoucherUpdateKeySpecifier)[];
export type VoucherUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	discountErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletBalanceAddCSVKeySpecifier = ('errors' | 'wallet' | 'WalletErrors' | WalletBalanceAddCSVKeySpecifier)[];
export type WalletBalanceAddCSVFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	WalletErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletBalancePhoneUpdateKeySpecifier = ('errors' | 'wallet' | 'WalletErrors' | WalletBalancePhoneUpdateKeySpecifier)[];
export type WalletBalancePhoneUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	WalletErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletBalanceUpdateKeySpecifier = ('errors' | 'wallet' | 'WalletErrors' | WalletBalanceUpdateKeySpecifier)[];
export type WalletBalanceUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	WalletErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletErrorKeySpecifier = ('field' | 'message' | 'code' | WalletErrorKeySpecifier)[];
export type WalletErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WalletTypeKeySpecifier = ('id' | 'user' | 'amount' | 'expiryDate' | 'created' | 'updated' | 'logs' | WalletTypeKeySpecifier)[];
export type WalletTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	expiryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseKeySpecifier = ('id' | 'name' | 'slug' | 'companyName' | 'shippingZones' | 'address' | 'email' | WarehouseKeySpecifier)[];
export type WarehouseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingZones?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | WarehouseCountableConnectionKeySpecifier)[];
export type WarehouseCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCountableEdgeKeySpecifier = ('node' | 'cursor' | WarehouseCountableEdgeKeySpecifier)[];
export type WarehouseCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseCreateKeySpecifier = ('errors' | 'warehouseErrors' | 'warehouse' | WarehouseCreateKeySpecifier)[];
export type WarehouseCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseDeleteKeySpecifier = ('errors' | 'warehouseErrors' | 'warehouse' | WarehouseDeleteKeySpecifier)[];
export type WarehouseDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseErrorKeySpecifier = ('field' | 'message' | 'code' | WarehouseErrorKeySpecifier)[];
export type WarehouseErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseShippingZoneAssignKeySpecifier = ('errors' | 'warehouseErrors' | 'warehouse' | WarehouseShippingZoneAssignKeySpecifier)[];
export type WarehouseShippingZoneAssignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseShippingZoneUnassignKeySpecifier = ('errors' | 'warehouseErrors' | 'warehouse' | WarehouseShippingZoneUnassignKeySpecifier)[];
export type WarehouseShippingZoneUnassignFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WarehouseUpdateKeySpecifier = ('errors' | 'warehouseErrors' | 'warehouse' | WarehouseUpdateKeySpecifier)[];
export type WarehouseUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouseErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	warehouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookKeySpecifier = ('name' | 'targetUrl' | 'isActive' | 'secretKey' | 'id' | 'events' | 'serviceAccount' | 'app' | WebhookKeySpecifier)[];
export type WebhookFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	targetUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	secretKey?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | WebhookCountableConnectionKeySpecifier)[];
export type WebhookCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookCountableEdgeKeySpecifier = ('node' | 'cursor' | WebhookCountableEdgeKeySpecifier)[];
export type WebhookCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookCreateKeySpecifier = ('errors' | 'webhookErrors' | 'webhook' | WebhookCreateKeySpecifier)[];
export type WebhookCreateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookDeleteKeySpecifier = ('errors' | 'webhookErrors' | 'webhook' | WebhookDeleteKeySpecifier)[];
export type WebhookDeleteFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookErrorKeySpecifier = ('field' | 'message' | 'code' | WebhookErrorKeySpecifier)[];
export type WebhookErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookEventKeySpecifier = ('eventType' | 'name' | WebhookEventKeySpecifier)[];
export type WebhookEventFieldPolicy = {
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebhookUpdateKeySpecifier = ('errors' | 'webhookErrors' | 'webhook' | WebhookUpdateKeySpecifier)[];
export type WebhookUpdateFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhookErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	webhook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeightKeySpecifier = ('unit' | 'value' | WeightKeySpecifier)[];
export type WeightFieldPolicy = {
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistKeySpecifier = ('id' | 'createdAt' | 'items' | WishlistKeySpecifier)[];
export type WishlistFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistAddProductMutationKeySpecifier = ('errors' | 'wishlist' | 'wishlistErrors' | WishlistAddProductMutationKeySpecifier)[];
export type WishlistAddProductMutationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistAddProductVariantMutationKeySpecifier = ('errors' | 'wishlist' | 'wishlistErrors' | WishlistAddProductVariantMutationKeySpecifier)[];
export type WishlistAddProductVariantMutationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistErrorKeySpecifier = ('field' | 'message' | 'code' | WishlistErrorKeySpecifier)[];
export type WishlistErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemKeySpecifier = ('id' | 'wishlist' | 'product' | 'variants' | WishlistItemKeySpecifier)[];
export type WishlistItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemCountableConnectionKeySpecifier = ('pageInfo' | 'edges' | 'totalCount' | WishlistItemCountableConnectionKeySpecifier)[];
export type WishlistItemCountableConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistItemCountableEdgeKeySpecifier = ('node' | 'cursor' | WishlistItemCountableEdgeKeySpecifier)[];
export type WishlistItemCountableEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistRemoveProductMutationKeySpecifier = ('errors' | 'wishlist' | 'wishlistErrors' | WishlistRemoveProductMutationKeySpecifier)[];
export type WishlistRemoveProductMutationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WishlistRemoveProductVariantMutationKeySpecifier = ('errors' | 'wishlist' | 'wishlistErrors' | WishlistRemoveProductVariantMutationKeySpecifier)[];
export type WishlistRemoveProductVariantMutationFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlist?: FieldPolicy<any> | FieldReadFunction<any>,
	wishlistErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ServiceKeySpecifier = ('sdl' | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type checkoutAddPromoCodeShopifyKeySpecifier = ('errors' | 'checkout' | checkoutAddPromoCodeShopifyKeySpecifier)[];
export type checkoutAddPromoCodeShopifyFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type checkoutRemovePromoCodeShopifyKeySpecifier = ('errors' | 'checkout' | checkoutRemovePromoCodeShopifyKeySpecifier)[];
export type checkoutRemovePromoCodeShopifyFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AccountAddressCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressCreateKeySpecifier | (() => undefined | AccountAddressCreateKeySpecifier),
		fields?: AccountAddressCreateFieldPolicy,
	},
	AccountAddressDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressDeleteKeySpecifier | (() => undefined | AccountAddressDeleteKeySpecifier),
		fields?: AccountAddressDeleteFieldPolicy,
	},
	AccountAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountAddressUpdateKeySpecifier | (() => undefined | AccountAddressUpdateKeySpecifier),
		fields?: AccountAddressUpdateFieldPolicy,
	},
	AccountCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountCreateKeySpecifier | (() => undefined | AccountCreateKeySpecifier),
		fields?: AccountCreateFieldPolicy,
	},
	AccountDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountDeleteKeySpecifier | (() => undefined | AccountDeleteKeySpecifier),
		fields?: AccountDeleteFieldPolicy,
	},
	AccountError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountErrorKeySpecifier | (() => undefined | AccountErrorKeySpecifier),
		fields?: AccountErrorFieldPolicy,
	},
	AccountRegister?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRegisterKeySpecifier | (() => undefined | AccountRegisterKeySpecifier),
		fields?: AccountRegisterFieldPolicy,
	},
	AccountRegisterV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRegisterV2KeySpecifier | (() => undefined | AccountRegisterV2KeySpecifier),
		fields?: AccountRegisterV2FieldPolicy,
	},
	AccountRequestDeletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountRequestDeletionKeySpecifier | (() => undefined | AccountRequestDeletionKeySpecifier),
		fields?: AccountRequestDeletionFieldPolicy,
	},
	AccountSetDefaultAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountSetDefaultAddressKeySpecifier | (() => undefined | AccountSetDefaultAddressKeySpecifier),
		fields?: AccountSetDefaultAddressFieldPolicy,
	},
	AccountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountUpdateKeySpecifier | (() => undefined | AccountUpdateKeySpecifier),
		fields?: AccountUpdateFieldPolicy,
	},
	AccountUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountUpdateMetaKeySpecifier | (() => undefined | AccountUpdateMetaKeySpecifier),
		fields?: AccountUpdateMetaFieldPolicy,
	},
	AddTags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddTagsKeySpecifier | (() => undefined | AddTagsKeySpecifier),
		fields?: AddTagsFieldPolicy,
	},
	AddTagsCsv?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddTagsCsvKeySpecifier | (() => undefined | AddTagsCsvKeySpecifier),
		fields?: AddTagsCsvFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressCountableConnectionKeySpecifier | (() => undefined | AddressCountableConnectionKeySpecifier),
		fields?: AddressCountableConnectionFieldPolicy,
	},
	AddressCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressCountableEdgeKeySpecifier | (() => undefined | AddressCountableEdgeKeySpecifier),
		fields?: AddressCountableEdgeFieldPolicy,
	},
	AddressCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressCreateKeySpecifier | (() => undefined | AddressCreateKeySpecifier),
		fields?: AddressCreateFieldPolicy,
	},
	AddressDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressDeleteKeySpecifier | (() => undefined | AddressDeleteKeySpecifier),
		fields?: AddressDeleteFieldPolicy,
	},
	AddressLinkType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressLinkTypeKeySpecifier | (() => undefined | AddressLinkTypeKeySpecifier),
		fields?: AddressLinkTypeFieldPolicy,
	},
	AddressSetDefault?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressSetDefaultKeySpecifier | (() => undefined | AddressSetDefaultKeySpecifier),
		fields?: AddressSetDefaultFieldPolicy,
	},
	AddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressUpdateKeySpecifier | (() => undefined | AddressUpdateKeySpecifier),
		fields?: AddressUpdateFieldPolicy,
	},
	AddressValidationData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressValidationDataKeySpecifier | (() => undefined | AddressValidationDataKeySpecifier),
		fields?: AddressValidationDataFieldPolicy,
	},
	Allocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllocationKeySpecifier | (() => undefined | AllocationKeySpecifier),
		fields?: AllocationFieldPolicy,
	},
	ApiCallsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiCallsTypeKeySpecifier | (() => undefined | ApiCallsTypeKeySpecifier),
		fields?: ApiCallsTypeFieldPolicy,
	},
	ApiCallsTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiCallsTypeConnectionKeySpecifier | (() => undefined | ApiCallsTypeConnectionKeySpecifier),
		fields?: ApiCallsTypeConnectionFieldPolicy,
	},
	ApiCallsTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiCallsTypeEdgeKeySpecifier | (() => undefined | ApiCallsTypeEdgeKeySpecifier),
		fields?: ApiCallsTypeEdgeFieldPolicy,
	},
	App?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppKeySpecifier | (() => undefined | AppKeySpecifier),
		fields?: AppFieldPolicy,
	},
	AppActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppActivateKeySpecifier | (() => undefined | AppActivateKeySpecifier),
		fields?: AppActivateFieldPolicy,
	},
	AppCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCountableConnectionKeySpecifier | (() => undefined | AppCountableConnectionKeySpecifier),
		fields?: AppCountableConnectionFieldPolicy,
	},
	AppCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCountableEdgeKeySpecifier | (() => undefined | AppCountableEdgeKeySpecifier),
		fields?: AppCountableEdgeFieldPolicy,
	},
	AppCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppCreateKeySpecifier | (() => undefined | AppCreateKeySpecifier),
		fields?: AppCreateFieldPolicy,
	},
	AppDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeactivateKeySpecifier | (() => undefined | AppDeactivateKeySpecifier),
		fields?: AppDeactivateFieldPolicy,
	},
	AppDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeleteKeySpecifier | (() => undefined | AppDeleteKeySpecifier),
		fields?: AppDeleteFieldPolicy,
	},
	AppDeleteFailedInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppDeleteFailedInstallationKeySpecifier | (() => undefined | AppDeleteFailedInstallationKeySpecifier),
		fields?: AppDeleteFailedInstallationFieldPolicy,
	},
	AppError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppErrorKeySpecifier | (() => undefined | AppErrorKeySpecifier),
		fields?: AppErrorFieldPolicy,
	},
	AppFetchManifest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppFetchManifestKeySpecifier | (() => undefined | AppFetchManifestKeySpecifier),
		fields?: AppFetchManifestFieldPolicy,
	},
	AppInstall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppInstallKeySpecifier | (() => undefined | AppInstallKeySpecifier),
		fields?: AppInstallFieldPolicy,
	},
	AppInstallation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppInstallationKeySpecifier | (() => undefined | AppInstallationKeySpecifier),
		fields?: AppInstallationFieldPolicy,
	},
	AppRetryInstall?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppRetryInstallKeySpecifier | (() => undefined | AppRetryInstallKeySpecifier),
		fields?: AppRetryInstallFieldPolicy,
	},
	AppToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenKeySpecifier | (() => undefined | AppTokenKeySpecifier),
		fields?: AppTokenFieldPolicy,
	},
	AppTokenCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenCreateKeySpecifier | (() => undefined | AppTokenCreateKeySpecifier),
		fields?: AppTokenCreateFieldPolicy,
	},
	AppTokenDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenDeleteKeySpecifier | (() => undefined | AppTokenDeleteKeySpecifier),
		fields?: AppTokenDeleteFieldPolicy,
	},
	AppTokenVerify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppTokenVerifyKeySpecifier | (() => undefined | AppTokenVerifyKeySpecifier),
		fields?: AppTokenVerifyFieldPolicy,
	},
	AppUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppUpdateKeySpecifier | (() => undefined | AppUpdateKeySpecifier),
		fields?: AppUpdateFieldPolicy,
	},
	ArchiveOrderError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveOrderErrorKeySpecifier | (() => undefined | ArchiveOrderErrorKeySpecifier),
		fields?: ArchiveOrderErrorFieldPolicy,
	},
	ArchiveOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveOrderTypeKeySpecifier | (() => undefined | ArchiveOrderTypeKeySpecifier),
		fields?: ArchiveOrderTypeFieldPolicy,
	},
	ArchiveOrderTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveOrderTypeConnectionKeySpecifier | (() => undefined | ArchiveOrderTypeConnectionKeySpecifier),
		fields?: ArchiveOrderTypeConnectionFieldPolicy,
	},
	ArchiveOrderTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveOrderTypeEdgeKeySpecifier | (() => undefined | ArchiveOrderTypeEdgeKeySpecifier),
		fields?: ArchiveOrderTypeEdgeFieldPolicy,
	},
	AssignNavigation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssignNavigationKeySpecifier | (() => undefined | AssignNavigationKeySpecifier),
		fields?: AssignNavigationFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeAssignKeySpecifier | (() => undefined | AttributeAssignKeySpecifier),
		fields?: AttributeAssignFieldPolicy,
	},
	AttributeBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeBulkDeleteKeySpecifier | (() => undefined | AttributeBulkDeleteKeySpecifier),
		fields?: AttributeBulkDeleteFieldPolicy,
	},
	AttributeClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeClearMetaKeySpecifier | (() => undefined | AttributeClearMetaKeySpecifier),
		fields?: AttributeClearMetaFieldPolicy,
	},
	AttributeClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeClearPrivateMetaKeySpecifier | (() => undefined | AttributeClearPrivateMetaKeySpecifier),
		fields?: AttributeClearPrivateMetaFieldPolicy,
	},
	AttributeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableConnectionKeySpecifier | (() => undefined | AttributeCountableConnectionKeySpecifier),
		fields?: AttributeCountableConnectionFieldPolicy,
	},
	AttributeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCountableEdgeKeySpecifier | (() => undefined | AttributeCountableEdgeKeySpecifier),
		fields?: AttributeCountableEdgeFieldPolicy,
	},
	AttributeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeCreateKeySpecifier | (() => undefined | AttributeCreateKeySpecifier),
		fields?: AttributeCreateFieldPolicy,
	},
	AttributeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeDeleteKeySpecifier | (() => undefined | AttributeDeleteKeySpecifier),
		fields?: AttributeDeleteFieldPolicy,
	},
	AttributeReorderValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeReorderValuesKeySpecifier | (() => undefined | AttributeReorderValuesKeySpecifier),
		fields?: AttributeReorderValuesFieldPolicy,
	},
	AttributeTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslatableContentKeySpecifier | (() => undefined | AttributeTranslatableContentKeySpecifier),
		fields?: AttributeTranslatableContentFieldPolicy,
	},
	AttributeTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslateKeySpecifier | (() => undefined | AttributeTranslateKeySpecifier),
		fields?: AttributeTranslateFieldPolicy,
	},
	AttributeTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeTranslationKeySpecifier | (() => undefined | AttributeTranslationKeySpecifier),
		fields?: AttributeTranslationFieldPolicy,
	},
	AttributeUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUnassignKeySpecifier | (() => undefined | AttributeUnassignKeySpecifier),
		fields?: AttributeUnassignFieldPolicy,
	},
	AttributeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUpdateKeySpecifier | (() => undefined | AttributeUpdateKeySpecifier),
		fields?: AttributeUpdateFieldPolicy,
	},
	AttributeUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUpdateMetaKeySpecifier | (() => undefined | AttributeUpdateMetaKeySpecifier),
		fields?: AttributeUpdateMetaFieldPolicy,
	},
	AttributeUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeUpdatePrivateMetaKeySpecifier | (() => undefined | AttributeUpdatePrivateMetaKeySpecifier),
		fields?: AttributeUpdatePrivateMetaFieldPolicy,
	},
	AttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueKeySpecifier | (() => undefined | AttributeValueKeySpecifier),
		fields?: AttributeValueFieldPolicy,
	},
	AttributeValueBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueBulkDeleteKeySpecifier | (() => undefined | AttributeValueBulkDeleteKeySpecifier),
		fields?: AttributeValueBulkDeleteFieldPolicy,
	},
	AttributeValueCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueCreateKeySpecifier | (() => undefined | AttributeValueCreateKeySpecifier),
		fields?: AttributeValueCreateFieldPolicy,
	},
	AttributeValueDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueDeleteKeySpecifier | (() => undefined | AttributeValueDeleteKeySpecifier),
		fields?: AttributeValueDeleteFieldPolicy,
	},
	AttributeValueTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslatableContentKeySpecifier | (() => undefined | AttributeValueTranslatableContentKeySpecifier),
		fields?: AttributeValueTranslatableContentFieldPolicy,
	},
	AttributeValueTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslateKeySpecifier | (() => undefined | AttributeValueTranslateKeySpecifier),
		fields?: AttributeValueTranslateFieldPolicy,
	},
	AttributeValueTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueTranslationKeySpecifier | (() => undefined | AttributeValueTranslationKeySpecifier),
		fields?: AttributeValueTranslationFieldPolicy,
	},
	AttributeValueUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueUpdateKeySpecifier | (() => undefined | AttributeValueUpdateKeySpecifier),
		fields?: AttributeValueUpdateFieldPolicy,
	},
	AuthorizationKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorizationKeyKeySpecifier | (() => undefined | AuthorizationKeyKeySpecifier),
		fields?: AuthorizationKeyFieldPolicy,
	},
	AuthorizationKeyAdd?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorizationKeyAddKeySpecifier | (() => undefined | AuthorizationKeyAddKeySpecifier),
		fields?: AuthorizationKeyAddFieldPolicy,
	},
	AuthorizationKeyDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorizationKeyDeleteKeySpecifier | (() => undefined | AuthorizationKeyDeleteKeySpecifier),
		fields?: AuthorizationKeyDeleteFieldPolicy,
	},
	BannerError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BannerErrorKeySpecifier | (() => undefined | BannerErrorKeySpecifier),
		fields?: BannerErrorFieldPolicy,
	},
	BluedartShipmentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BluedartShipmentCreateKeySpecifier | (() => undefined | BluedartShipmentCreateKeySpecifier),
		fields?: BluedartShipmentCreateFieldPolicy,
	},
	BulkPriceUpdateCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkPriceUpdateCSVKeySpecifier | (() => undefined | BulkPriceUpdateCSVKeySpecifier),
		fields?: BulkPriceUpdateCSVFieldPolicy,
	},
	BulkPriceUpdateError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkPriceUpdateErrorKeySpecifier | (() => undefined | BulkPriceUpdateErrorKeySpecifier),
		fields?: BulkPriceUpdateErrorFieldPolicy,
	},
	BulkProductError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkProductErrorKeySpecifier | (() => undefined | BulkProductErrorKeySpecifier),
		fields?: BulkProductErrorFieldPolicy,
	},
	BulkStockError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BulkStockErrorKeySpecifier | (() => undefined | BulkStockErrorKeySpecifier),
		fields?: BulkStockErrorFieldPolicy,
	},
	CashbackType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CashbackTypeKeySpecifier | (() => undefined | CashbackTypeKeySpecifier),
		fields?: CashbackTypeFieldPolicy,
	},
	CashfreeOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CashfreeOrderTypeKeySpecifier | (() => undefined | CashfreeOrderTypeKeySpecifier),
		fields?: CashfreeOrderTypeFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryBulkDeleteKeySpecifier | (() => undefined | CategoryBulkDeleteKeySpecifier),
		fields?: CategoryBulkDeleteFieldPolicy,
	},
	CategoryClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryClearMetaKeySpecifier | (() => undefined | CategoryClearMetaKeySpecifier),
		fields?: CategoryClearMetaFieldPolicy,
	},
	CategoryClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryClearPrivateMetaKeySpecifier | (() => undefined | CategoryClearPrivateMetaKeySpecifier),
		fields?: CategoryClearPrivateMetaFieldPolicy,
	},
	CategoryCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableConnectionKeySpecifier | (() => undefined | CategoryCountableConnectionKeySpecifier),
		fields?: CategoryCountableConnectionFieldPolicy,
	},
	CategoryCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCountableEdgeKeySpecifier | (() => undefined | CategoryCountableEdgeKeySpecifier),
		fields?: CategoryCountableEdgeFieldPolicy,
	},
	CategoryCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryCreateKeySpecifier | (() => undefined | CategoryCreateKeySpecifier),
		fields?: CategoryCreateFieldPolicy,
	},
	CategoryDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryDeleteKeySpecifier | (() => undefined | CategoryDeleteKeySpecifier),
		fields?: CategoryDeleteFieldPolicy,
	},
	CategoryTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslatableContentKeySpecifier | (() => undefined | CategoryTranslatableContentKeySpecifier),
		fields?: CategoryTranslatableContentFieldPolicy,
	},
	CategoryTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslateKeySpecifier | (() => undefined | CategoryTranslateKeySpecifier),
		fields?: CategoryTranslateFieldPolicy,
	},
	CategoryTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryTranslationKeySpecifier | (() => undefined | CategoryTranslationKeySpecifier),
		fields?: CategoryTranslationFieldPolicy,
	},
	CategoryUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdateKeySpecifier | (() => undefined | CategoryUpdateKeySpecifier),
		fields?: CategoryUpdateFieldPolicy,
	},
	CategoryUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdateMetaKeySpecifier | (() => undefined | CategoryUpdateMetaKeySpecifier),
		fields?: CategoryUpdateMetaFieldPolicy,
	},
	CategoryUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryUpdatePrivateMetaKeySpecifier | (() => undefined | CategoryUpdatePrivateMetaKeySpecifier),
		fields?: CategoryUpdatePrivateMetaFieldPolicy,
	},
	Checkout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutKeySpecifier | (() => undefined | CheckoutKeySpecifier),
		fields?: CheckoutFieldPolicy,
	},
	CheckoutAddNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAddNoteKeySpecifier | (() => undefined | CheckoutAddNoteKeySpecifier),
		fields?: CheckoutAddNoteFieldPolicy,
	},
	CheckoutAddPromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutAddPromoCodeKeySpecifier | (() => undefined | CheckoutAddPromoCodeKeySpecifier),
		fields?: CheckoutAddPromoCodeFieldPolicy,
	},
	CheckoutBillingAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutBillingAddressUpdateKeySpecifier | (() => undefined | CheckoutBillingAddressUpdateKeySpecifier),
		fields?: CheckoutBillingAddressUpdateFieldPolicy,
	},
	CheckoutClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutClearMetaKeySpecifier | (() => undefined | CheckoutClearMetaKeySpecifier),
		fields?: CheckoutClearMetaFieldPolicy,
	},
	CheckoutClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutClearPrivateMetaKeySpecifier | (() => undefined | CheckoutClearPrivateMetaKeySpecifier),
		fields?: CheckoutClearPrivateMetaFieldPolicy,
	},
	CheckoutComplete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCompleteKeySpecifier | (() => undefined | CheckoutCompleteKeySpecifier),
		fields?: CheckoutCompleteFieldPolicy,
	},
	CheckoutCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCountableConnectionKeySpecifier | (() => undefined | CheckoutCountableConnectionKeySpecifier),
		fields?: CheckoutCountableConnectionFieldPolicy,
	},
	CheckoutCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCountableEdgeKeySpecifier | (() => undefined | CheckoutCountableEdgeKeySpecifier),
		fields?: CheckoutCountableEdgeFieldPolicy,
	},
	CheckoutCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCreateKeySpecifier | (() => undefined | CheckoutCreateKeySpecifier),
		fields?: CheckoutCreateFieldPolicy,
	},
	CheckoutCustomerAttach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerAttachKeySpecifier | (() => undefined | CheckoutCustomerAttachKeySpecifier),
		fields?: CheckoutCustomerAttachFieldPolicy,
	},
	CheckoutCustomerDetach?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutCustomerDetachKeySpecifier | (() => undefined | CheckoutCustomerDetachKeySpecifier),
		fields?: CheckoutCustomerDetachFieldPolicy,
	},
	CheckoutEmailUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutEmailUpdateKeySpecifier | (() => undefined | CheckoutEmailUpdateKeySpecifier),
		fields?: CheckoutEmailUpdateFieldPolicy,
	},
	CheckoutError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutErrorKeySpecifier | (() => undefined | CheckoutErrorKeySpecifier),
		fields?: CheckoutErrorFieldPolicy,
	},
	CheckoutEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutEventKeySpecifier | (() => undefined | CheckoutEventKeySpecifier),
		fields?: CheckoutEventFieldPolicy,
	},
	CheckoutLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineKeySpecifier | (() => undefined | CheckoutLineKeySpecifier),
		fields?: CheckoutLineFieldPolicy,
	},
	CheckoutLineCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineCountableConnectionKeySpecifier | (() => undefined | CheckoutLineCountableConnectionKeySpecifier),
		fields?: CheckoutLineCountableConnectionFieldPolicy,
	},
	CheckoutLineCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineCountableEdgeKeySpecifier | (() => undefined | CheckoutLineCountableEdgeKeySpecifier),
		fields?: CheckoutLineCountableEdgeFieldPolicy,
	},
	CheckoutLineDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLineDeleteKeySpecifier | (() => undefined | CheckoutLineDeleteKeySpecifier),
		fields?: CheckoutLineDeleteFieldPolicy,
	},
	CheckoutLinesAdd?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLinesAddKeySpecifier | (() => undefined | CheckoutLinesAddKeySpecifier),
		fields?: CheckoutLinesAddFieldPolicy,
	},
	CheckoutLinesUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutLinesUpdateKeySpecifier | (() => undefined | CheckoutLinesUpdateKeySpecifier),
		fields?: CheckoutLinesUpdateFieldPolicy,
	},
	CheckoutPaymentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutPaymentCreateKeySpecifier | (() => undefined | CheckoutPaymentCreateKeySpecifier),
		fields?: CheckoutPaymentCreateFieldPolicy,
	},
	CheckoutRefresh?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutRefreshKeySpecifier | (() => undefined | CheckoutRefreshKeySpecifier),
		fields?: CheckoutRefreshFieldPolicy,
	},
	CheckoutRemovePromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutRemovePromoCodeKeySpecifier | (() => undefined | CheckoutRemovePromoCodeKeySpecifier),
		fields?: CheckoutRemovePromoCodeFieldPolicy,
	},
	CheckoutShippingAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingAddressUpdateKeySpecifier | (() => undefined | CheckoutShippingAddressUpdateKeySpecifier),
		fields?: CheckoutShippingAddressUpdateFieldPolicy,
	},
	CheckoutShippingMethodUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutShippingMethodUpdateKeySpecifier | (() => undefined | CheckoutShippingMethodUpdateKeySpecifier),
		fields?: CheckoutShippingMethodUpdateFieldPolicy,
	},
	CheckoutTotalsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutTotalsTypeKeySpecifier | (() => undefined | CheckoutTotalsTypeKeySpecifier),
		fields?: CheckoutTotalsTypeFieldPolicy,
	},
	CheckoutType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutTypeKeySpecifier | (() => undefined | CheckoutTypeKeySpecifier),
		fields?: CheckoutTypeFieldPolicy,
	},
	CheckoutTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutTypeCountableConnectionKeySpecifier | (() => undefined | CheckoutTypeCountableConnectionKeySpecifier),
		fields?: CheckoutTypeCountableConnectionFieldPolicy,
	},
	CheckoutTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutTypeCountableEdgeKeySpecifier | (() => undefined | CheckoutTypeCountableEdgeKeySpecifier),
		fields?: CheckoutTypeCountableEdgeFieldPolicy,
	},
	CheckoutUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUpdateMetaKeySpecifier | (() => undefined | CheckoutUpdateMetaKeySpecifier),
		fields?: CheckoutUpdateMetaFieldPolicy,
	},
	CheckoutUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutUpdatePrivateMetaKeySpecifier | (() => undefined | CheckoutUpdatePrivateMetaKeySpecifier),
		fields?: CheckoutUpdatePrivateMetaFieldPolicy,
	},
	ChoiceValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChoiceValueKeySpecifier | (() => undefined | ChoiceValueKeySpecifier),
		fields?: ChoiceValueFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionAddProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionAddProductsKeySpecifier | (() => undefined | CollectionAddProductsKeySpecifier),
		fields?: CollectionAddProductsFieldPolicy,
	},
	CollectionBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionBulkDeleteKeySpecifier | (() => undefined | CollectionBulkDeleteKeySpecifier),
		fields?: CollectionBulkDeleteFieldPolicy,
	},
	CollectionBulkPublish?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionBulkPublishKeySpecifier | (() => undefined | CollectionBulkPublishKeySpecifier),
		fields?: CollectionBulkPublishFieldPolicy,
	},
	CollectionClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionClearMetaKeySpecifier | (() => undefined | CollectionClearMetaKeySpecifier),
		fields?: CollectionClearMetaFieldPolicy,
	},
	CollectionClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionClearPrivateMetaKeySpecifier | (() => undefined | CollectionClearPrivateMetaKeySpecifier),
		fields?: CollectionClearPrivateMetaFieldPolicy,
	},
	CollectionCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCountableConnectionKeySpecifier | (() => undefined | CollectionCountableConnectionKeySpecifier),
		fields?: CollectionCountableConnectionFieldPolicy,
	},
	CollectionCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCountableEdgeKeySpecifier | (() => undefined | CollectionCountableEdgeKeySpecifier),
		fields?: CollectionCountableEdgeFieldPolicy,
	},
	CollectionCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionCreateKeySpecifier | (() => undefined | CollectionCreateKeySpecifier),
		fields?: CollectionCreateFieldPolicy,
	},
	CollectionDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionDeleteKeySpecifier | (() => undefined | CollectionDeleteKeySpecifier),
		fields?: CollectionDeleteFieldPolicy,
	},
	CollectionDuplicate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionDuplicateKeySpecifier | (() => undefined | CollectionDuplicateKeySpecifier),
		fields?: CollectionDuplicateFieldPolicy,
	},
	CollectionRemoveProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionRemoveProductsKeySpecifier | (() => undefined | CollectionRemoveProductsKeySpecifier),
		fields?: CollectionRemoveProductsFieldPolicy,
	},
	CollectionReorderProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionReorderProductsKeySpecifier | (() => undefined | CollectionReorderProductsKeySpecifier),
		fields?: CollectionReorderProductsFieldPolicy,
	},
	CollectionTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslatableContentKeySpecifier | (() => undefined | CollectionTranslatableContentKeySpecifier),
		fields?: CollectionTranslatableContentFieldPolicy,
	},
	CollectionTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslateKeySpecifier | (() => undefined | CollectionTranslateKeySpecifier),
		fields?: CollectionTranslateFieldPolicy,
	},
	CollectionTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionTranslationKeySpecifier | (() => undefined | CollectionTranslationKeySpecifier),
		fields?: CollectionTranslationFieldPolicy,
	},
	CollectionUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionUpdateKeySpecifier | (() => undefined | CollectionUpdateKeySpecifier),
		fields?: CollectionUpdateFieldPolicy,
	},
	CollectionUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionUpdateMetaKeySpecifier | (() => undefined | CollectionUpdateMetaKeySpecifier),
		fields?: CollectionUpdateMetaFieldPolicy,
	},
	CollectionUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionUpdatePrivateMetaKeySpecifier | (() => undefined | CollectionUpdatePrivateMetaKeySpecifier),
		fields?: CollectionUpdatePrivateMetaFieldPolicy,
	},
	ComboAddProductVariants?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboAddProductVariantsKeySpecifier | (() => undefined | ComboAddProductVariantsKeySpecifier),
		fields?: ComboAddProductVariantsFieldPolicy,
	},
	ComboCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboCreateKeySpecifier | (() => undefined | ComboCreateKeySpecifier),
		fields?: ComboCreateFieldPolicy,
	},
	ComboDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboDeleteKeySpecifier | (() => undefined | ComboDeleteKeySpecifier),
		fields?: ComboDeleteFieldPolicy,
	},
	ComboRemoveProductVariants?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboRemoveProductVariantsKeySpecifier | (() => undefined | ComboRemoveProductVariantsKeySpecifier),
		fields?: ComboRemoveProductVariantsFieldPolicy,
	},
	ComboType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboTypeKeySpecifier | (() => undefined | ComboTypeKeySpecifier),
		fields?: ComboTypeFieldPolicy,
	},
	ComboTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboTypeConnectionKeySpecifier | (() => undefined | ComboTypeConnectionKeySpecifier),
		fields?: ComboTypeConnectionFieldPolicy,
	},
	ComboTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboTypeEdgeKeySpecifier | (() => undefined | ComboTypeEdgeKeySpecifier),
		fields?: ComboTypeEdgeFieldPolicy,
	},
	ComboUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComboUpdateKeySpecifier | (() => undefined | ComboUpdateKeySpecifier),
		fields?: ComboUpdateFieldPolicy,
	},
	ConfigurationItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigurationItemKeySpecifier | (() => undefined | ConfigurationItemKeySpecifier),
		fields?: ConfigurationItemFieldPolicy,
	},
	ConfirmAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmAccountKeySpecifier | (() => undefined | ConfirmAccountKeySpecifier),
		fields?: ConfirmAccountFieldPolicy,
	},
	ConfirmAccountV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmAccountV2KeySpecifier | (() => undefined | ConfirmAccountV2KeySpecifier),
		fields?: ConfirmAccountV2FieldPolicy,
	},
	ConfirmEmailChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmEmailChangeKeySpecifier | (() => undefined | ConfirmEmailChangeKeySpecifier),
		fields?: ConfirmEmailChangeFieldPolicy,
	},
	ContactUsCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsCreateKeySpecifier | (() => undefined | ContactUsCreateKeySpecifier),
		fields?: ContactUsCreateFieldPolicy,
	},
	ContactUsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsErrorKeySpecifier | (() => undefined | ContactUsErrorKeySpecifier),
		fields?: ContactUsErrorFieldPolicy,
	},
	ContactUsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsTypeKeySpecifier | (() => undefined | ContactUsTypeKeySpecifier),
		fields?: ContactUsTypeFieldPolicy,
	},
	ContactUsTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsTypeConnectionKeySpecifier | (() => undefined | ContactUsTypeConnectionKeySpecifier),
		fields?: ContactUsTypeConnectionFieldPolicy,
	},
	ContactUsTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactUsTypeEdgeKeySpecifier | (() => undefined | ContactUsTypeEdgeKeySpecifier),
		fields?: ContactUsTypeEdgeFieldPolicy,
	},
	CountryDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryDisplayKeySpecifier | (() => undefined | CountryDisplayKeySpecifier),
		fields?: CountryDisplayFieldPolicy,
	},
	CouponDiscountType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponDiscountTypeKeySpecifier | (() => undefined | CouponDiscountTypeKeySpecifier),
		fields?: CouponDiscountTypeFieldPolicy,
	},
	CouponDiscountTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponDiscountTypeConnectionKeySpecifier | (() => undefined | CouponDiscountTypeConnectionKeySpecifier),
		fields?: CouponDiscountTypeConnectionFieldPolicy,
	},
	CouponDiscountTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CouponDiscountTypeEdgeKeySpecifier | (() => undefined | CouponDiscountTypeEdgeKeySpecifier),
		fields?: CouponDiscountTypeEdgeFieldPolicy,
	},
	CreateArchiveOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateArchiveOrderKeySpecifier | (() => undefined | CreateArchiveOrderKeySpecifier),
		fields?: CreateArchiveOrderFieldPolicy,
	},
	CreateBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBannerKeySpecifier | (() => undefined | CreateBannerKeySpecifier),
		fields?: CreateBannerFieldPolicy,
	},
	CreateCashfreeOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCashfreeOrderKeySpecifier | (() => undefined | CreateCashfreeOrderKeySpecifier),
		fields?: CreateCashfreeOrderFieldPolicy,
	},
	CreateHeader?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateHeaderKeySpecifier | (() => undefined | CreateHeaderKeySpecifier),
		fields?: CreateHeaderFieldPolicy,
	},
	CreateHostingFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateHostingFileKeySpecifier | (() => undefined | CreateHostingFileKeySpecifier),
		fields?: CreateHostingFileFieldPolicy,
	},
	CreateInfluencer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateInfluencerKeySpecifier | (() => undefined | CreateInfluencerKeySpecifier),
		fields?: CreateInfluencerFieldPolicy,
	},
	CreateMenuItemsImages?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMenuItemsImagesKeySpecifier | (() => undefined | CreateMenuItemsImagesKeySpecifier),
		fields?: CreateMenuItemsImagesFieldPolicy,
	},
	CreateNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateNotificationKeySpecifier | (() => undefined | CreateNotificationKeySpecifier),
		fields?: CreateNotificationFieldPolicy,
	},
	CreatePayuOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePayuOrderKeySpecifier | (() => undefined | CreatePayuOrderKeySpecifier),
		fields?: CreatePayuOrderFieldPolicy,
	},
	CreateProductCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProductCSVKeySpecifier | (() => undefined | CreateProductCSVKeySpecifier),
		fields?: CreateProductCSVFieldPolicy,
	},
	CreateProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProductReviewKeySpecifier | (() => undefined | CreateProductReviewKeySpecifier),
		fields?: CreateProductReviewFieldPolicy,
	},
	CreateProductVariantCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProductVariantCSVKeySpecifier | (() => undefined | CreateProductVariantCSVKeySpecifier),
		fields?: CreateProductVariantCSVFieldPolicy,
	},
	CreateRazorpayOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateRazorpayOrderKeySpecifier | (() => undefined | CreateRazorpayOrderKeySpecifier),
		fields?: CreateRazorpayOrderFieldPolicy,
	},
	CreateReviewCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateReviewCSVKeySpecifier | (() => undefined | CreateReviewCSVKeySpecifier),
		fields?: CreateReviewCSVFieldPolicy,
	},
	CreateReviewCSVError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateReviewCSVErrorKeySpecifier | (() => undefined | CreateReviewCSVErrorKeySpecifier),
		fields?: CreateReviewCSVErrorFieldPolicy,
	},
	CreateSezzleOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSezzleOrderKeySpecifier | (() => undefined | CreateSezzleOrderKeySpecifier),
		fields?: CreateSezzleOrderFieldPolicy,
	},
	CreateShippingZonesCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateShippingZonesCSVKeySpecifier | (() => undefined | CreateShippingZonesCSVKeySpecifier),
		fields?: CreateShippingZonesCSVFieldPolicy,
	},
	CreateShopifyUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateShopifyUserKeySpecifier | (() => undefined | CreateShopifyUserKeySpecifier),
		fields?: CreateShopifyUserFieldPolicy,
	},
	CreateToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTokenKeySpecifier | (() => undefined | CreateTokenKeySpecifier),
		fields?: CreateTokenFieldPolicy,
	},
	CreateTokenOAuth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTokenOAuthKeySpecifier | (() => undefined | CreateTokenOAuthKeySpecifier),
		fields?: CreateTokenOAuthFieldPolicy,
	},
	CreateTokenOTP?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTokenOTPKeySpecifier | (() => undefined | CreateTokenOTPKeySpecifier),
		fields?: CreateTokenOTPFieldPolicy,
	},
	CreateVoucherRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVoucherRuleKeySpecifier | (() => undefined | CreateVoucherRuleKeySpecifier),
		fields?: CreateVoucherRuleFieldPolicy,
	},
	CreateVoucherRuleLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVoucherRuleLinkKeySpecifier | (() => undefined | CreateVoucherRuleLinkKeySpecifier),
		fields?: CreateVoucherRuleLinkFieldPolicy,
	},
	CreditCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreditCardKeySpecifier | (() => undefined | CreditCardKeySpecifier),
		fields?: CreditCardFieldPolicy,
	},
	CustomBannerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomBannerTypeKeySpecifier | (() => undefined | CustomBannerTypeKeySpecifier),
		fields?: CustomBannerTypeFieldPolicy,
	},
	CustomBannerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomBannerTypeConnectionKeySpecifier | (() => undefined | CustomBannerTypeConnectionKeySpecifier),
		fields?: CustomBannerTypeConnectionFieldPolicy,
	},
	CustomBannerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomBannerTypeEdgeKeySpecifier | (() => undefined | CustomBannerTypeEdgeKeySpecifier),
		fields?: CustomBannerTypeEdgeFieldPolicy,
	},
	CustomOrderStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomOrderStatusKeySpecifier | (() => undefined | CustomOrderStatusKeySpecifier),
		fields?: CustomOrderStatusFieldPolicy,
	},
	CustomWalletLogType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomWalletLogTypeKeySpecifier | (() => undefined | CustomWalletLogTypeKeySpecifier),
		fields?: CustomWalletLogTypeFieldPolicy,
	},
	CustomWalletLogTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomWalletLogTypeConnectionKeySpecifier | (() => undefined | CustomWalletLogTypeConnectionKeySpecifier),
		fields?: CustomWalletLogTypeConnectionFieldPolicy,
	},
	CustomWalletLogTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomWalletLogTypeEdgeKeySpecifier | (() => undefined | CustomWalletLogTypeEdgeKeySpecifier),
		fields?: CustomWalletLogTypeEdgeFieldPolicy,
	},
	CustomerBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerBulkDeleteKeySpecifier | (() => undefined | CustomerBulkDeleteKeySpecifier),
		fields?: CustomerBulkDeleteFieldPolicy,
	},
	CustomerCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreateKeySpecifier | (() => undefined | CustomerCreateKeySpecifier),
		fields?: CustomerCreateFieldPolicy,
	},
	CustomerDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerDeleteKeySpecifier | (() => undefined | CustomerDeleteKeySpecifier),
		fields?: CustomerDeleteFieldPolicy,
	},
	CustomerEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerEventKeySpecifier | (() => undefined | CustomerEventKeySpecifier),
		fields?: CustomerEventFieldPolicy,
	},
	CustomerUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUpdateKeySpecifier | (() => undefined | CustomerUpdateKeySpecifier),
		fields?: CustomerUpdateFieldPolicy,
	},
	DeactivateAllUserTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeactivateAllUserTokensKeySpecifier | (() => undefined | DeactivateAllUserTokensKeySpecifier),
		fields?: DeactivateAllUserTokensFieldPolicy,
	},
	DeleteArchiveOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteArchiveOrderKeySpecifier | (() => undefined | DeleteArchiveOrderKeySpecifier),
		fields?: DeleteArchiveOrderFieldPolicy,
	},
	DeleteBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteBannerKeySpecifier | (() => undefined | DeleteBannerKeySpecifier),
		fields?: DeleteBannerFieldPolicy,
	},
	DeleteBulkVoucherRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteBulkVoucherRuleKeySpecifier | (() => undefined | DeleteBulkVoucherRuleKeySpecifier),
		fields?: DeleteBulkVoucherRuleFieldPolicy,
	},
	DeleteHostingFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteHostingFileKeySpecifier | (() => undefined | DeleteHostingFileKeySpecifier),
		fields?: DeleteHostingFileFieldPolicy,
	},
	DeleteInfluencer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteInfluencerKeySpecifier | (() => undefined | DeleteInfluencerKeySpecifier),
		fields?: DeleteInfluencerFieldPolicy,
	},
	DeleteMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteMetadataKeySpecifier | (() => undefined | DeleteMetadataKeySpecifier),
		fields?: DeleteMetadataFieldPolicy,
	},
	DeleteMetadataV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteMetadataV2KeySpecifier | (() => undefined | DeleteMetadataV2KeySpecifier),
		fields?: DeleteMetadataV2FieldPolicy,
	},
	DeletePrivateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePrivateMetadataKeySpecifier | (() => undefined | DeletePrivateMetadataKeySpecifier),
		fields?: DeletePrivateMetadataFieldPolicy,
	},
	DeletePrivateMetadataV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePrivateMetadataV2KeySpecifier | (() => undefined | DeletePrivateMetadataV2KeySpecifier),
		fields?: DeletePrivateMetadataV2FieldPolicy,
	},
	DeleteProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProductReviewKeySpecifier | (() => undefined | DeleteProductReviewKeySpecifier),
		fields?: DeleteProductReviewFieldPolicy,
	},
	DeleteShopifyUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteShopifyUserKeySpecifier | (() => undefined | DeleteShopifyUserKeySpecifier),
		fields?: DeleteShopifyUserFieldPolicy,
	},
	DeleteSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSubscriptionKeySpecifier | (() => undefined | DeleteSubscriptionKeySpecifier),
		fields?: DeleteSubscriptionFieldPolicy,
	},
	DeleteVoucherRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteVoucherRuleKeySpecifier | (() => undefined | DeleteVoucherRuleKeySpecifier),
		fields?: DeleteVoucherRuleFieldPolicy,
	},
	DeliverySchedulerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySchedulerTypeKeySpecifier | (() => undefined | DeliverySchedulerTypeKeySpecifier),
		fields?: DeliverySchedulerTypeFieldPolicy,
	},
	DeliverySchedulerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySchedulerTypeConnectionKeySpecifier | (() => undefined | DeliverySchedulerTypeConnectionKeySpecifier),
		fields?: DeliverySchedulerTypeConnectionFieldPolicy,
	},
	DeliverySchedulerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliverySchedulerTypeEdgeKeySpecifier | (() => undefined | DeliverySchedulerTypeEdgeKeySpecifier),
		fields?: DeliverySchedulerTypeEdgeFieldPolicy,
	},
	DeliveryShippingZoneType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliveryShippingZoneTypeKeySpecifier | (() => undefined | DeliveryShippingZoneTypeKeySpecifier),
		fields?: DeliveryShippingZoneTypeFieldPolicy,
	},
	DigitalContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentKeySpecifier | (() => undefined | DigitalContentKeySpecifier),
		fields?: DigitalContentFieldPolicy,
	},
	DigitalContentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCountableConnectionKeySpecifier | (() => undefined | DigitalContentCountableConnectionKeySpecifier),
		fields?: DigitalContentCountableConnectionFieldPolicy,
	},
	DigitalContentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCountableEdgeKeySpecifier | (() => undefined | DigitalContentCountableEdgeKeySpecifier),
		fields?: DigitalContentCountableEdgeFieldPolicy,
	},
	DigitalContentCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentCreateKeySpecifier | (() => undefined | DigitalContentCreateKeySpecifier),
		fields?: DigitalContentCreateFieldPolicy,
	},
	DigitalContentDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentDeleteKeySpecifier | (() => undefined | DigitalContentDeleteKeySpecifier),
		fields?: DigitalContentDeleteFieldPolicy,
	},
	DigitalContentUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUpdateKeySpecifier | (() => undefined | DigitalContentUpdateKeySpecifier),
		fields?: DigitalContentUpdateFieldPolicy,
	},
	DigitalContentUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUrlKeySpecifier | (() => undefined | DigitalContentUrlKeySpecifier),
		fields?: DigitalContentUrlFieldPolicy,
	},
	DigitalContentUrlCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DigitalContentUrlCreateKeySpecifier | (() => undefined | DigitalContentUrlCreateKeySpecifier),
		fields?: DigitalContentUrlCreateFieldPolicy,
	},
	DiscountError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountErrorKeySpecifier | (() => undefined | DiscountErrorKeySpecifier),
		fields?: DiscountErrorFieldPolicy,
	},
	DiscountsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountsTypeKeySpecifier | (() => undefined | DiscountsTypeKeySpecifier),
		fields?: DiscountsTypeFieldPolicy,
	},
	Domain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DomainKeySpecifier | (() => undefined | DomainKeySpecifier),
		fields?: DomainFieldPolicy,
	},
	DraftOrderAddPromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderAddPromoCodeKeySpecifier | (() => undefined | DraftOrderAddPromoCodeKeySpecifier),
		fields?: DraftOrderAddPromoCodeFieldPolicy,
	},
	DraftOrderApplyCOD?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderApplyCODKeySpecifier | (() => undefined | DraftOrderApplyCODKeySpecifier),
		fields?: DraftOrderApplyCODFieldPolicy,
	},
	DraftOrderApplyPrePaid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderApplyPrePaidKeySpecifier | (() => undefined | DraftOrderApplyPrePaidKeySpecifier),
		fields?: DraftOrderApplyPrePaidFieldPolicy,
	},
	DraftOrderBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderBulkDeleteKeySpecifier | (() => undefined | DraftOrderBulkDeleteKeySpecifier),
		fields?: DraftOrderBulkDeleteFieldPolicy,
	},
	DraftOrderComplete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderCompleteKeySpecifier | (() => undefined | DraftOrderCompleteKeySpecifier),
		fields?: DraftOrderCompleteFieldPolicy,
	},
	DraftOrderCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderCreateKeySpecifier | (() => undefined | DraftOrderCreateKeySpecifier),
		fields?: DraftOrderCreateFieldPolicy,
	},
	DraftOrderDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderDeleteKeySpecifier | (() => undefined | DraftOrderDeleteKeySpecifier),
		fields?: DraftOrderDeleteFieldPolicy,
	},
	DraftOrderLineDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderLineDeleteKeySpecifier | (() => undefined | DraftOrderLineDeleteKeySpecifier),
		fields?: DraftOrderLineDeleteFieldPolicy,
	},
	DraftOrderLineUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderLineUpdateKeySpecifier | (() => undefined | DraftOrderLineUpdateKeySpecifier),
		fields?: DraftOrderLineUpdateFieldPolicy,
	},
	DraftOrderLinesBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderLinesBulkDeleteKeySpecifier | (() => undefined | DraftOrderLinesBulkDeleteKeySpecifier),
		fields?: DraftOrderLinesBulkDeleteFieldPolicy,
	},
	DraftOrderLinesCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderLinesCreateKeySpecifier | (() => undefined | DraftOrderLinesCreateKeySpecifier),
		fields?: DraftOrderLinesCreateFieldPolicy,
	},
	DraftOrderRemoveCOD?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderRemoveCODKeySpecifier | (() => undefined | DraftOrderRemoveCODKeySpecifier),
		fields?: DraftOrderRemoveCODFieldPolicy,
	},
	DraftOrderRemovePrePaid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderRemovePrePaidKeySpecifier | (() => undefined | DraftOrderRemovePrePaidKeySpecifier),
		fields?: DraftOrderRemovePrePaidFieldPolicy,
	},
	DraftOrderRemovePromoCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderRemovePromoCodeKeySpecifier | (() => undefined | DraftOrderRemovePromoCodeKeySpecifier),
		fields?: DraftOrderRemovePromoCodeFieldPolicy,
	},
	DraftOrderUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DraftOrderUpdateKeySpecifier | (() => undefined | DraftOrderUpdateKeySpecifier),
		fields?: DraftOrderUpdateFieldPolicy,
	},
	DtcEligibleType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DtcEligibleTypeKeySpecifier | (() => undefined | DtcEligibleTypeKeySpecifier),
		fields?: DtcEligibleTypeFieldPolicy,
	},
	DtcOrderCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DtcOrderCancelKeySpecifier | (() => undefined | DtcOrderCancelKeySpecifier),
		fields?: DtcOrderCancelFieldPolicy,
	},
	DtcOrderReturn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DtcOrderReturnKeySpecifier | (() => undefined | DtcOrderReturnKeySpecifier),
		fields?: DtcOrderReturnFieldPolicy,
	},
	DtcReturnProductType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DtcReturnProductTypeKeySpecifier | (() => undefined | DtcReturnProductTypeKeySpecifier),
		fields?: DtcReturnProductTypeFieldPolicy,
	},
	DtcTrackingType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DtcTrackingTypeKeySpecifier | (() => undefined | DtcTrackingTypeKeySpecifier),
		fields?: DtcTrackingTypeFieldPolicy,
	},
	EditProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditProductReviewKeySpecifier | (() => undefined | EditProductReviewKeySpecifier),
		fields?: EditProductReviewFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	ExportError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportErrorKeySpecifier | (() => undefined | ExportErrorKeySpecifier),
		fields?: ExportErrorFieldPolicy,
	},
	ExportEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportEventKeySpecifier | (() => undefined | ExportEventKeySpecifier),
		fields?: ExportEventFieldPolicy,
	},
	ExportFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileKeySpecifier | (() => undefined | ExportFileKeySpecifier),
		fields?: ExportFileFieldPolicy,
	},
	ExportFileCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileCountableConnectionKeySpecifier | (() => undefined | ExportFileCountableConnectionKeySpecifier),
		fields?: ExportFileCountableConnectionFieldPolicy,
	},
	ExportFileCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportFileCountableEdgeKeySpecifier | (() => undefined | ExportFileCountableEdgeKeySpecifier),
		fields?: ExportFileCountableEdgeFieldPolicy,
	},
	ExportOrders?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportOrdersKeySpecifier | (() => undefined | ExportOrdersKeySpecifier),
		fields?: ExportOrdersFieldPolicy,
	},
	ExportProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportProductsKeySpecifier | (() => undefined | ExportProductsKeySpecifier),
		fields?: ExportProductsFieldPolicy,
	},
	ExportProductsV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportProductsV2KeySpecifier | (() => undefined | ExportProductsV2KeySpecifier),
		fields?: ExportProductsV2FieldPolicy,
	},
	ExportWallet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExportWalletKeySpecifier | (() => undefined | ExportWalletKeySpecifier),
		fields?: ExportWalletFieldPolicy,
	},
	FailedOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FailedOrderKeySpecifier | (() => undefined | FailedOrderKeySpecifier),
		fields?: FailedOrderFieldPolicy,
	},
	FailedOrderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FailedOrderConnectionKeySpecifier | (() => undefined | FailedOrderConnectionKeySpecifier),
		fields?: FailedOrderConnectionFieldPolicy,
	},
	FailedOrderEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FailedOrderEdgeKeySpecifier | (() => undefined | FailedOrderEdgeKeySpecifier),
		fields?: FailedOrderEdgeFieldPolicy,
	},
	FarziWalletBalanceAddCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FarziWalletBalanceAddCSVKeySpecifier | (() => undefined | FarziWalletBalanceAddCSVKeySpecifier),
		fields?: FarziWalletBalanceAddCSVFieldPolicy,
	},
	FarziWalletBalanceEmailUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FarziWalletBalanceEmailUpdateKeySpecifier | (() => undefined | FarziWalletBalanceEmailUpdateKeySpecifier),
		fields?: FarziWalletBalanceEmailUpdateFieldPolicy,
	},
	FarziWalletBalanceSubCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FarziWalletBalanceSubCSVKeySpecifier | (() => undefined | FarziWalletBalanceSubCSVKeySpecifier),
		fields?: FarziWalletBalanceSubCSVFieldPolicy,
	},
	FarziWalletError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FarziWalletErrorKeySpecifier | (() => undefined | FarziWalletErrorKeySpecifier),
		fields?: FarziWalletErrorFieldPolicy,
	},
	Fulfillment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentKeySpecifier | (() => undefined | FulfillmentKeySpecifier),
		fields?: FulfillmentFieldPolicy,
	},
	FulfillmentCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentCancelKeySpecifier | (() => undefined | FulfillmentCancelKeySpecifier),
		fields?: FulfillmentCancelFieldPolicy,
	},
	FulfillmentClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentClearMetaKeySpecifier | (() => undefined | FulfillmentClearMetaKeySpecifier),
		fields?: FulfillmentClearMetaFieldPolicy,
	},
	FulfillmentClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentClearPrivateMetaKeySpecifier | (() => undefined | FulfillmentClearPrivateMetaKeySpecifier),
		fields?: FulfillmentClearPrivateMetaFieldPolicy,
	},
	FulfillmentLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentLineKeySpecifier | (() => undefined | FulfillmentLineKeySpecifier),
		fields?: FulfillmentLineFieldPolicy,
	},
	FulfillmentUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentUpdateMetaKeySpecifier | (() => undefined | FulfillmentUpdateMetaKeySpecifier),
		fields?: FulfillmentUpdateMetaFieldPolicy,
	},
	FulfillmentUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentUpdatePrivateMetaKeySpecifier | (() => undefined | FulfillmentUpdatePrivateMetaKeySpecifier),
		fields?: FulfillmentUpdatePrivateMetaFieldPolicy,
	},
	FulfillmentUpdateTracking?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FulfillmentUpdateTrackingKeySpecifier | (() => undefined | FulfillmentUpdateTrackingKeySpecifier),
		fields?: FulfillmentUpdateTrackingFieldPolicy,
	},
	GatewayConfigLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GatewayConfigLineKeySpecifier | (() => undefined | GatewayConfigLineKeySpecifier),
		fields?: GatewayConfigLineFieldPolicy,
	},
	GenericFormCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericFormCreateKeySpecifier | (() => undefined | GenericFormCreateKeySpecifier),
		fields?: GenericFormCreateFieldPolicy,
	},
	GenericFormError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericFormErrorKeySpecifier | (() => undefined | GenericFormErrorKeySpecifier),
		fields?: GenericFormErrorFieldPolicy,
	},
	GenericFormType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenericFormTypeKeySpecifier | (() => undefined | GenericFormTypeKeySpecifier),
		fields?: GenericFormTypeFieldPolicy,
	},
	Geolocalization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeolocalizationKeySpecifier | (() => undefined | GeolocalizationKeySpecifier),
		fields?: GeolocalizationFieldPolicy,
	},
	GetReferalDiscount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetReferalDiscountKeySpecifier | (() => undefined | GetReferalDiscountKeySpecifier),
		fields?: GetReferalDiscountFieldPolicy,
	},
	GetUserHash?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GetUserHashKeySpecifier | (() => undefined | GetUserHashKeySpecifier),
		fields?: GetUserHashFieldPolicy,
	},
	GiftCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardKeySpecifier | (() => undefined | GiftCardKeySpecifier),
		fields?: GiftCardFieldPolicy,
	},
	GiftCardActivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardActivateKeySpecifier | (() => undefined | GiftCardActivateKeySpecifier),
		fields?: GiftCardActivateFieldPolicy,
	},
	GiftCardCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCountableConnectionKeySpecifier | (() => undefined | GiftCardCountableConnectionKeySpecifier),
		fields?: GiftCardCountableConnectionFieldPolicy,
	},
	GiftCardCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCountableEdgeKeySpecifier | (() => undefined | GiftCardCountableEdgeKeySpecifier),
		fields?: GiftCardCountableEdgeFieldPolicy,
	},
	GiftCardCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardCreateKeySpecifier | (() => undefined | GiftCardCreateKeySpecifier),
		fields?: GiftCardCreateFieldPolicy,
	},
	GiftCardDeactivate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardDeactivateKeySpecifier | (() => undefined | GiftCardDeactivateKeySpecifier),
		fields?: GiftCardDeactivateFieldPolicy,
	},
	GiftCardError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardErrorKeySpecifier | (() => undefined | GiftCardErrorKeySpecifier),
		fields?: GiftCardErrorFieldPolicy,
	},
	GiftCardUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GiftCardUpdateKeySpecifier | (() => undefined | GiftCardUpdateKeySpecifier),
		fields?: GiftCardUpdateFieldPolicy,
	},
	GokwikType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GokwikTypeKeySpecifier | (() => undefined | GokwikTypeKeySpecifier),
		fields?: GokwikTypeFieldPolicy,
	},
	Group?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupKeySpecifier | (() => undefined | GroupKeySpecifier),
		fields?: GroupFieldPolicy,
	},
	GroupCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupCountableConnectionKeySpecifier | (() => undefined | GroupCountableConnectionKeySpecifier),
		fields?: GroupCountableConnectionFieldPolicy,
	},
	GroupCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupCountableEdgeKeySpecifier | (() => undefined | GroupCountableEdgeKeySpecifier),
		fields?: GroupCountableEdgeFieldPolicy,
	},
	HeaderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeaderTypeKeySpecifier | (() => undefined | HeaderTypeKeySpecifier),
		fields?: HeaderTypeFieldPolicy,
	},
	HeaderTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeaderTypeConnectionKeySpecifier | (() => undefined | HeaderTypeConnectionKeySpecifier),
		fields?: HeaderTypeConnectionFieldPolicy,
	},
	HeaderTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HeaderTypeEdgeKeySpecifier | (() => undefined | HeaderTypeEdgeKeySpecifier),
		fields?: HeaderTypeEdgeFieldPolicy,
	},
	HomepageCollectionUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HomepageCollectionUpdateKeySpecifier | (() => undefined | HomepageCollectionUpdateKeySpecifier),
		fields?: HomepageCollectionUpdateFieldPolicy,
	},
	HostingType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostingTypeKeySpecifier | (() => undefined | HostingTypeKeySpecifier),
		fields?: HostingTypeFieldPolicy,
	},
	HostingTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostingTypeConnectionKeySpecifier | (() => undefined | HostingTypeConnectionKeySpecifier),
		fields?: HostingTypeConnectionFieldPolicy,
	},
	HostingTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HostingTypeEdgeKeySpecifier | (() => undefined | HostingTypeEdgeKeySpecifier),
		fields?: HostingTypeEdgeFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	InfluencerError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfluencerErrorKeySpecifier | (() => undefined | InfluencerErrorKeySpecifier),
		fields?: InfluencerErrorFieldPolicy,
	},
	InfluencerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfluencerTypeKeySpecifier | (() => undefined | InfluencerTypeKeySpecifier),
		fields?: InfluencerTypeFieldPolicy,
	},
	InfluencerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfluencerTypeConnectionKeySpecifier | (() => undefined | InfluencerTypeConnectionKeySpecifier),
		fields?: InfluencerTypeConnectionFieldPolicy,
	},
	InfluencerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfluencerTypeEdgeKeySpecifier | (() => undefined | InfluencerTypeEdgeKeySpecifier),
		fields?: InfluencerTypeEdgeFieldPolicy,
	},
	Invoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceKeySpecifier | (() => undefined | InvoiceKeySpecifier),
		fields?: InvoiceFieldPolicy,
	},
	InvoiceCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceCreateKeySpecifier | (() => undefined | InvoiceCreateKeySpecifier),
		fields?: InvoiceCreateFieldPolicy,
	},
	InvoiceDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceDeleteKeySpecifier | (() => undefined | InvoiceDeleteKeySpecifier),
		fields?: InvoiceDeleteFieldPolicy,
	},
	InvoiceError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceErrorKeySpecifier | (() => undefined | InvoiceErrorKeySpecifier),
		fields?: InvoiceErrorFieldPolicy,
	},
	InvoiceRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceRequestKeySpecifier | (() => undefined | InvoiceRequestKeySpecifier),
		fields?: InvoiceRequestFieldPolicy,
	},
	InvoiceRequestDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceRequestDeleteKeySpecifier | (() => undefined | InvoiceRequestDeleteKeySpecifier),
		fields?: InvoiceRequestDeleteFieldPolicy,
	},
	InvoiceSendEmail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceSendEmailKeySpecifier | (() => undefined | InvoiceSendEmailKeySpecifier),
		fields?: InvoiceSendEmailFieldPolicy,
	},
	InvoiceUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceUpdateKeySpecifier | (() => undefined | InvoiceUpdateKeySpecifier),
		fields?: InvoiceUpdateFieldPolicy,
	},
	InvoiceUpload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvoiceUploadKeySpecifier | (() => undefined | InvoiceUploadKeySpecifier),
		fields?: InvoiceUploadFieldPolicy,
	},
	Job?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobKeySpecifier | (() => undefined | JobKeySpecifier),
		fields?: JobFieldPolicy,
	},
	LanguageDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageDisplayKeySpecifier | (() => undefined | LanguageDisplayKeySpecifier),
		fields?: LanguageDisplayFieldPolicy,
	},
	Manifest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManifestKeySpecifier | (() => undefined | ManifestKeySpecifier),
		fields?: ManifestFieldPolicy,
	},
	Margin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarginKeySpecifier | (() => undefined | MarginKeySpecifier),
		fields?: MarginFieldPolicy,
	},
	Menu?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier),
		fields?: MenuFieldPolicy,
	},
	MenuBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuBulkDeleteKeySpecifier | (() => undefined | MenuBulkDeleteKeySpecifier),
		fields?: MenuBulkDeleteFieldPolicy,
	},
	MenuCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCountableConnectionKeySpecifier | (() => undefined | MenuCountableConnectionKeySpecifier),
		fields?: MenuCountableConnectionFieldPolicy,
	},
	MenuCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCountableEdgeKeySpecifier | (() => undefined | MenuCountableEdgeKeySpecifier),
		fields?: MenuCountableEdgeFieldPolicy,
	},
	MenuCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuCreateKeySpecifier | (() => undefined | MenuCreateKeySpecifier),
		fields?: MenuCreateFieldPolicy,
	},
	MenuDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuDeleteKeySpecifier | (() => undefined | MenuDeleteKeySpecifier),
		fields?: MenuDeleteFieldPolicy,
	},
	MenuError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuErrorKeySpecifier | (() => undefined | MenuErrorKeySpecifier),
		fields?: MenuErrorFieldPolicy,
	},
	MenuItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemKeySpecifier | (() => undefined | MenuItemKeySpecifier),
		fields?: MenuItemFieldPolicy,
	},
	MenuItemBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemBulkDeleteKeySpecifier | (() => undefined | MenuItemBulkDeleteKeySpecifier),
		fields?: MenuItemBulkDeleteFieldPolicy,
	},
	MenuItemCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCountableConnectionKeySpecifier | (() => undefined | MenuItemCountableConnectionKeySpecifier),
		fields?: MenuItemCountableConnectionFieldPolicy,
	},
	MenuItemCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCountableEdgeKeySpecifier | (() => undefined | MenuItemCountableEdgeKeySpecifier),
		fields?: MenuItemCountableEdgeFieldPolicy,
	},
	MenuItemCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemCreateKeySpecifier | (() => undefined | MenuItemCreateKeySpecifier),
		fields?: MenuItemCreateFieldPolicy,
	},
	MenuItemDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemDeleteKeySpecifier | (() => undefined | MenuItemDeleteKeySpecifier),
		fields?: MenuItemDeleteFieldPolicy,
	},
	MenuItemImageMobileType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemImageMobileTypeKeySpecifier | (() => undefined | MenuItemImageMobileTypeKeySpecifier),
		fields?: MenuItemImageMobileTypeFieldPolicy,
	},
	MenuItemImageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemImageTypeKeySpecifier | (() => undefined | MenuItemImageTypeKeySpecifier),
		fields?: MenuItemImageTypeFieldPolicy,
	},
	MenuItemMove?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemMoveKeySpecifier | (() => undefined | MenuItemMoveKeySpecifier),
		fields?: MenuItemMoveFieldPolicy,
	},
	MenuItemMoveV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemMoveV2KeySpecifier | (() => undefined | MenuItemMoveV2KeySpecifier),
		fields?: MenuItemMoveV2FieldPolicy,
	},
	MenuItemTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslatableContentKeySpecifier | (() => undefined | MenuItemTranslatableContentKeySpecifier),
		fields?: MenuItemTranslatableContentFieldPolicy,
	},
	MenuItemTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslateKeySpecifier | (() => undefined | MenuItemTranslateKeySpecifier),
		fields?: MenuItemTranslateFieldPolicy,
	},
	MenuItemTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemTranslationKeySpecifier | (() => undefined | MenuItemTranslationKeySpecifier),
		fields?: MenuItemTranslationFieldPolicy,
	},
	MenuItemUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemUpdateKeySpecifier | (() => undefined | MenuItemUpdateKeySpecifier),
		fields?: MenuItemUpdateFieldPolicy,
	},
	MenuItemV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemV2KeySpecifier | (() => undefined | MenuItemV2KeySpecifier),
		fields?: MenuItemV2FieldPolicy,
	},
	MenuItemV2CountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemV2CountableConnectionKeySpecifier | (() => undefined | MenuItemV2CountableConnectionKeySpecifier),
		fields?: MenuItemV2CountableConnectionFieldPolicy,
	},
	MenuItemV2CountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemV2CountableEdgeKeySpecifier | (() => undefined | MenuItemV2CountableEdgeKeySpecifier),
		fields?: MenuItemV2CountableEdgeFieldPolicy,
	},
	MenuUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuUpdateKeySpecifier | (() => undefined | MenuUpdateKeySpecifier),
		fields?: MenuUpdateFieldPolicy,
	},
	MenuV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuV2KeySpecifier | (() => undefined | MenuV2KeySpecifier),
		fields?: MenuV2FieldPolicy,
	},
	MenuV2CountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuV2CountableConnectionKeySpecifier | (() => undefined | MenuV2CountableConnectionKeySpecifier),
		fields?: MenuV2CountableConnectionFieldPolicy,
	},
	MenuV2CountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuV2CountableEdgeKeySpecifier | (() => undefined | MenuV2CountableEdgeKeySpecifier),
		fields?: MenuV2CountableEdgeFieldPolicy,
	},
	MetaClientStore?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaClientStoreKeySpecifier | (() => undefined | MetaClientStoreKeySpecifier),
		fields?: MetaClientStoreFieldPolicy,
	},
	MetaItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaItemKeySpecifier | (() => undefined | MetaItemKeySpecifier),
		fields?: MetaItemFieldPolicy,
	},
	MetaStore?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetaStoreKeySpecifier | (() => undefined | MetaStoreKeySpecifier),
		fields?: MetaStoreFieldPolicy,
	},
	MetadataError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataErrorKeySpecifier | (() => undefined | MetadataErrorKeySpecifier),
		fields?: MetadataErrorFieldPolicy,
	},
	MetadataItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataItemKeySpecifier | (() => undefined | MetadataItemKeySpecifier),
		fields?: MetadataItemFieldPolicy,
	},
	MetadataItemV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataItemV2KeySpecifier | (() => undefined | MetadataItemV2KeySpecifier),
		fields?: MetadataItemV2FieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	MoneyRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyRangeKeySpecifier | (() => undefined | MoneyRangeKeySpecifier),
		fields?: MoneyRangeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Navigation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NavigationKeySpecifier | (() => undefined | NavigationKeySpecifier),
		fields?: NavigationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	NotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		fields?: NotificationTypeFieldPolicy,
	},
	NutritionFormCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NutritionFormCreateKeySpecifier | (() => undefined | NutritionFormCreateKeySpecifier),
		fields?: NutritionFormCreateFieldPolicy,
	},
	NutritionFormType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NutritionFormTypeKeySpecifier | (() => undefined | NutritionFormTypeKeySpecifier),
		fields?: NutritionFormTypeFieldPolicy,
	},
	OTPError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OTPErrorKeySpecifier | (() => undefined | OTPErrorKeySpecifier),
		fields?: OTPErrorFieldPolicy,
	},
	ObjectWithMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectWithMetadataKeySpecifier | (() => undefined | ObjectWithMetadataKeySpecifier),
		fields?: ObjectWithMetadataFieldPolicy,
	},
	ObjectWithMetadataV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectWithMetadataV2KeySpecifier | (() => undefined | ObjectWithMetadataV2KeySpecifier),
		fields?: ObjectWithMetadataV2FieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderAddNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderAddNoteKeySpecifier | (() => undefined | OrderAddNoteKeySpecifier),
		fields?: OrderAddNoteFieldPolicy,
	},
	OrderBulkCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderBulkCancelKeySpecifier | (() => undefined | OrderBulkCancelKeySpecifier),
		fields?: OrderBulkCancelFieldPolicy,
	},
	OrderCancel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCancelKeySpecifier | (() => undefined | OrderCancelKeySpecifier),
		fields?: OrderCancelFieldPolicy,
	},
	OrderCapture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCaptureKeySpecifier | (() => undefined | OrderCaptureKeySpecifier),
		fields?: OrderCaptureFieldPolicy,
	},
	OrderClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderClearMetaKeySpecifier | (() => undefined | OrderClearMetaKeySpecifier),
		fields?: OrderClearMetaFieldPolicy,
	},
	OrderClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderClearPrivateMetaKeySpecifier | (() => undefined | OrderClearPrivateMetaKeySpecifier),
		fields?: OrderClearPrivateMetaFieldPolicy,
	},
	OrderCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCountableConnectionKeySpecifier | (() => undefined | OrderCountableConnectionKeySpecifier),
		fields?: OrderCountableConnectionFieldPolicy,
	},
	OrderCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderCountableEdgeKeySpecifier | (() => undefined | OrderCountableEdgeKeySpecifier),
		fields?: OrderCountableEdgeFieldPolicy,
	},
	OrderError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderErrorKeySpecifier | (() => undefined | OrderErrorKeySpecifier),
		fields?: OrderErrorFieldPolicy,
	},
	OrderEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventKeySpecifier | (() => undefined | OrderEventKeySpecifier),
		fields?: OrderEventFieldPolicy,
	},
	OrderEventCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventCountableConnectionKeySpecifier | (() => undefined | OrderEventCountableConnectionKeySpecifier),
		fields?: OrderEventCountableConnectionFieldPolicy,
	},
	OrderEventCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventCountableEdgeKeySpecifier | (() => undefined | OrderEventCountableEdgeKeySpecifier),
		fields?: OrderEventCountableEdgeFieldPolicy,
	},
	OrderEventOrderLineObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEventOrderLineObjectKeySpecifier | (() => undefined | OrderEventOrderLineObjectKeySpecifier),
		fields?: OrderEventOrderLineObjectFieldPolicy,
	},
	OrderFulfill?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderFulfillKeySpecifier | (() => undefined | OrderFulfillKeySpecifier),
		fields?: OrderFulfillFieldPolicy,
	},
	OrderLine?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineKeySpecifier | (() => undefined | OrderLineKeySpecifier),
		fields?: OrderLineFieldPolicy,
	},
	OrderMarkAsPaid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderMarkAsPaidKeySpecifier | (() => undefined | OrderMarkAsPaidKeySpecifier),
		fields?: OrderMarkAsPaidFieldPolicy,
	},
	OrderRefund?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderRefundKeySpecifier | (() => undefined | OrderRefundKeySpecifier),
		fields?: OrderRefundFieldPolicy,
	},
	OrderUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdateKeySpecifier | (() => undefined | OrderUpdateKeySpecifier),
		fields?: OrderUpdateFieldPolicy,
	},
	OrderUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdateMetaKeySpecifier | (() => undefined | OrderUpdateMetaKeySpecifier),
		fields?: OrderUpdateMetaFieldPolicy,
	},
	OrderUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdatePrivateMetaKeySpecifier | (() => undefined | OrderUpdatePrivateMetaKeySpecifier),
		fields?: OrderUpdatePrivateMetaFieldPolicy,
	},
	OrderUpdateShipping?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderUpdateShippingKeySpecifier | (() => undefined | OrderUpdateShippingKeySpecifier),
		fields?: OrderUpdateShippingFieldPolicy,
	},
	OrderVoid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderVoidKeySpecifier | (() => undefined | OrderVoidKeySpecifier),
		fields?: OrderVoidFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageBulkDeleteKeySpecifier | (() => undefined | PageBulkDeleteKeySpecifier),
		fields?: PageBulkDeleteFieldPolicy,
	},
	PageBulkPublish?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageBulkPublishKeySpecifier | (() => undefined | PageBulkPublishKeySpecifier),
		fields?: PageBulkPublishFieldPolicy,
	},
	PageCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCountableConnectionKeySpecifier | (() => undefined | PageCountableConnectionKeySpecifier),
		fields?: PageCountableConnectionFieldPolicy,
	},
	PageCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCountableEdgeKeySpecifier | (() => undefined | PageCountableEdgeKeySpecifier),
		fields?: PageCountableEdgeFieldPolicy,
	},
	PageCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCreateKeySpecifier | (() => undefined | PageCreateKeySpecifier),
		fields?: PageCreateFieldPolicy,
	},
	PageDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageDeleteKeySpecifier | (() => undefined | PageDeleteKeySpecifier),
		fields?: PageDeleteFieldPolicy,
	},
	PageError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageErrorKeySpecifier | (() => undefined | PageErrorKeySpecifier),
		fields?: PageErrorFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PageTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslatableContentKeySpecifier | (() => undefined | PageTranslatableContentKeySpecifier),
		fields?: PageTranslatableContentFieldPolicy,
	},
	PageTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslateKeySpecifier | (() => undefined | PageTranslateKeySpecifier),
		fields?: PageTranslateFieldPolicy,
	},
	PageTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageTranslationKeySpecifier | (() => undefined | PageTranslationKeySpecifier),
		fields?: PageTranslationFieldPolicy,
	},
	PageUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageUpdateKeySpecifier | (() => undefined | PageUpdateKeySpecifier),
		fields?: PageUpdateFieldPolicy,
	},
	PartnerCouponCSVCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCSVCreateKeySpecifier | (() => undefined | PartnerCouponCSVCreateKeySpecifier),
		fields?: PartnerCouponCSVCreateFieldPolicy,
	},
	PartnerCouponCustomerCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerCreateKeySpecifier | (() => undefined | PartnerCouponCustomerCreateKeySpecifier),
		fields?: PartnerCouponCustomerCreateFieldPolicy,
	},
	PartnerCouponCustomerDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerDeleteKeySpecifier | (() => undefined | PartnerCouponCustomerDeleteKeySpecifier),
		fields?: PartnerCouponCustomerDeleteFieldPolicy,
	},
	PartnerCouponCustomerError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerErrorKeySpecifier | (() => undefined | PartnerCouponCustomerErrorKeySpecifier),
		fields?: PartnerCouponCustomerErrorFieldPolicy,
	},
	PartnerCouponCustomerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerTypeKeySpecifier | (() => undefined | PartnerCouponCustomerTypeKeySpecifier),
		fields?: PartnerCouponCustomerTypeFieldPolicy,
	},
	PartnerCouponCustomerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerTypeConnectionKeySpecifier | (() => undefined | PartnerCouponCustomerTypeConnectionKeySpecifier),
		fields?: PartnerCouponCustomerTypeConnectionFieldPolicy,
	},
	PartnerCouponCustomerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerTypeEdgeKeySpecifier | (() => undefined | PartnerCouponCustomerTypeEdgeKeySpecifier),
		fields?: PartnerCouponCustomerTypeEdgeFieldPolicy,
	},
	PartnerCouponCustomerUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponCustomerUpdateKeySpecifier | (() => undefined | PartnerCouponCustomerUpdateKeySpecifier),
		fields?: PartnerCouponCustomerUpdateFieldPolicy,
	},
	PartnerCouponDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponDeleteKeySpecifier | (() => undefined | PartnerCouponDeleteKeySpecifier),
		fields?: PartnerCouponDeleteFieldPolicy,
	},
	PartnerCouponError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponErrorKeySpecifier | (() => undefined | PartnerCouponErrorKeySpecifier),
		fields?: PartnerCouponErrorFieldPolicy,
	},
	PartnerCouponType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponTypeKeySpecifier | (() => undefined | PartnerCouponTypeKeySpecifier),
		fields?: PartnerCouponTypeFieldPolicy,
	},
	PartnerCouponTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponTypeConnectionKeySpecifier | (() => undefined | PartnerCouponTypeConnectionKeySpecifier),
		fields?: PartnerCouponTypeConnectionFieldPolicy,
	},
	PartnerCouponTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponTypeEdgeKeySpecifier | (() => undefined | PartnerCouponTypeEdgeKeySpecifier),
		fields?: PartnerCouponTypeEdgeFieldPolicy,
	},
	PartnerCouponUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCouponUpdateKeySpecifier | (() => undefined | PartnerCouponUpdateKeySpecifier),
		fields?: PartnerCouponUpdateFieldPolicy,
	},
	PartnerCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerCreateKeySpecifier | (() => undefined | PartnerCreateKeySpecifier),
		fields?: PartnerCreateFieldPolicy,
	},
	PartnerDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerDeleteKeySpecifier | (() => undefined | PartnerDeleteKeySpecifier),
		fields?: PartnerDeleteFieldPolicy,
	},
	PartnerError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerErrorKeySpecifier | (() => undefined | PartnerErrorKeySpecifier),
		fields?: PartnerErrorFieldPolicy,
	},
	PartnerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerTypeKeySpecifier | (() => undefined | PartnerTypeKeySpecifier),
		fields?: PartnerTypeFieldPolicy,
	},
	PartnerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerTypeConnectionKeySpecifier | (() => undefined | PartnerTypeConnectionKeySpecifier),
		fields?: PartnerTypeConnectionFieldPolicy,
	},
	PartnerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerTypeEdgeKeySpecifier | (() => undefined | PartnerTypeEdgeKeySpecifier),
		fields?: PartnerTypeEdgeFieldPolicy,
	},
	PartnerUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerUpdateKeySpecifier | (() => undefined | PartnerUpdateKeySpecifier),
		fields?: PartnerUpdateFieldPolicy,
	},
	PasswordChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordChangeKeySpecifier | (() => undefined | PasswordChangeKeySpecifier),
		fields?: PasswordChangeFieldPolicy,
	},
	Payment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentKeySpecifier | (() => undefined | PaymentKeySpecifier),
		fields?: PaymentFieldPolicy,
	},
	PaymentCapture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCaptureKeySpecifier | (() => undefined | PaymentCaptureKeySpecifier),
		fields?: PaymentCaptureFieldPolicy,
	},
	PaymentCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCountableConnectionKeySpecifier | (() => undefined | PaymentCountableConnectionKeySpecifier),
		fields?: PaymentCountableConnectionFieldPolicy,
	},
	PaymentCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentCountableEdgeKeySpecifier | (() => undefined | PaymentCountableEdgeKeySpecifier),
		fields?: PaymentCountableEdgeFieldPolicy,
	},
	PaymentError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentErrorKeySpecifier | (() => undefined | PaymentErrorKeySpecifier),
		fields?: PaymentErrorFieldPolicy,
	},
	PaymentGateway?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentGatewayKeySpecifier | (() => undefined | PaymentGatewayKeySpecifier),
		fields?: PaymentGatewayFieldPolicy,
	},
	PaymentInitialize?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentInitializeKeySpecifier | (() => undefined | PaymentInitializeKeySpecifier),
		fields?: PaymentInitializeFieldPolicy,
	},
	PaymentInitialized?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentInitializedKeySpecifier | (() => undefined | PaymentInitializedKeySpecifier),
		fields?: PaymentInitializedFieldPolicy,
	},
	PaymentRefund?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentRefundKeySpecifier | (() => undefined | PaymentRefundKeySpecifier),
		fields?: PaymentRefundFieldPolicy,
	},
	PaymentSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSourceKeySpecifier | (() => undefined | PaymentSourceKeySpecifier),
		fields?: PaymentSourceFieldPolicy,
	},
	PaymentVoid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentVoidKeySpecifier | (() => undefined | PaymentVoidKeySpecifier),
		fields?: PaymentVoidFieldPolicy,
	},
	PaytmError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaytmErrorKeySpecifier | (() => undefined | PaytmErrorKeySpecifier),
		fields?: PaytmErrorFieldPolicy,
	},
	PaytmOrderCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaytmOrderCreateKeySpecifier | (() => undefined | PaytmOrderCreateKeySpecifier),
		fields?: PaytmOrderCreateFieldPolicy,
	},
	PaytmOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaytmOrderTypeKeySpecifier | (() => undefined | PaytmOrderTypeKeySpecifier),
		fields?: PaytmOrderTypeFieldPolicy,
	},
	PayuOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PayuOrderTypeKeySpecifier | (() => undefined | PayuOrderTypeKeySpecifier),
		fields?: PayuOrderTypeFieldPolicy,
	},
	Permission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionKeySpecifier | (() => undefined | PermissionKeySpecifier),
		fields?: PermissionFieldPolicy,
	},
	PermissionGroupCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupCreateKeySpecifier | (() => undefined | PermissionGroupCreateKeySpecifier),
		fields?: PermissionGroupCreateFieldPolicy,
	},
	PermissionGroupDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupDeleteKeySpecifier | (() => undefined | PermissionGroupDeleteKeySpecifier),
		fields?: PermissionGroupDeleteFieldPolicy,
	},
	PermissionGroupError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupErrorKeySpecifier | (() => undefined | PermissionGroupErrorKeySpecifier),
		fields?: PermissionGroupErrorFieldPolicy,
	},
	PermissionGroupUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupUpdateKeySpecifier | (() => undefined | PermissionGroupUpdateKeySpecifier),
		fields?: PermissionGroupUpdateFieldPolicy,
	},
	PhoneChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhoneChangeKeySpecifier | (() => undefined | PhoneChangeKeySpecifier),
		fields?: PhoneChangeFieldPolicy,
	},
	Pincode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PincodeKeySpecifier | (() => undefined | PincodeKeySpecifier),
		fields?: PincodeFieldPolicy,
	},
	PincodeType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PincodeTypeKeySpecifier | (() => undefined | PincodeTypeKeySpecifier),
		fields?: PincodeTypeFieldPolicy,
	},
	PincodeTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PincodeTypeConnectionKeySpecifier | (() => undefined | PincodeTypeConnectionKeySpecifier),
		fields?: PincodeTypeConnectionFieldPolicy,
	},
	PincodeTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PincodeTypeEdgeKeySpecifier | (() => undefined | PincodeTypeEdgeKeySpecifier),
		fields?: PincodeTypeEdgeFieldPolicy,
	},
	Plugin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginKeySpecifier | (() => undefined | PluginKeySpecifier),
		fields?: PluginFieldPolicy,
	},
	PluginCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableConnectionKeySpecifier | (() => undefined | PluginCountableConnectionKeySpecifier),
		fields?: PluginCountableConnectionFieldPolicy,
	},
	PluginCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginCountableEdgeKeySpecifier | (() => undefined | PluginCountableEdgeKeySpecifier),
		fields?: PluginCountableEdgeFieldPolicy,
	},
	PluginError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginErrorKeySpecifier | (() => undefined | PluginErrorKeySpecifier),
		fields?: PluginErrorFieldPolicy,
	},
	PluginUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginUpdateKeySpecifier | (() => undefined | PluginUpdateKeySpecifier),
		fields?: PluginUpdateFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductBulkDeleteKeySpecifier | (() => undefined | ProductBulkDeleteKeySpecifier),
		fields?: ProductBulkDeleteFieldPolicy,
	},
	ProductBulkPublish?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductBulkPublishKeySpecifier | (() => undefined | ProductBulkPublishKeySpecifier),
		fields?: ProductBulkPublishFieldPolicy,
	},
	ProductClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductClearMetaKeySpecifier | (() => undefined | ProductClearMetaKeySpecifier),
		fields?: ProductClearMetaFieldPolicy,
	},
	ProductClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductClearPrivateMetaKeySpecifier | (() => undefined | ProductClearPrivateMetaKeySpecifier),
		fields?: ProductClearPrivateMetaFieldPolicy,
	},
	ProductCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountableConnectionKeySpecifier | (() => undefined | ProductCountableConnectionKeySpecifier),
		fields?: ProductCountableConnectionFieldPolicy,
	},
	ProductCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountableEdgeKeySpecifier | (() => undefined | ProductCountableEdgeKeySpecifier),
		fields?: ProductCountableEdgeFieldPolicy,
	},
	ProductCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCreateKeySpecifier | (() => undefined | ProductCreateKeySpecifier),
		fields?: ProductCreateFieldPolicy,
	},
	ProductDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDeleteKeySpecifier | (() => undefined | ProductDeleteKeySpecifier),
		fields?: ProductDeleteFieldPolicy,
	},
	ProductDuplicate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductDuplicateKeySpecifier | (() => undefined | ProductDuplicateKeySpecifier),
		fields?: ProductDuplicateFieldPolicy,
	},
	ProductError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductErrorKeySpecifier | (() => undefined | ProductErrorKeySpecifier),
		fields?: ProductErrorFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	ProductImageBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageBulkDeleteKeySpecifier | (() => undefined | ProductImageBulkDeleteKeySpecifier),
		fields?: ProductImageBulkDeleteFieldPolicy,
	},
	ProductImageCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageCreateKeySpecifier | (() => undefined | ProductImageCreateKeySpecifier),
		fields?: ProductImageCreateFieldPolicy,
	},
	ProductImageCreateV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageCreateV2KeySpecifier | (() => undefined | ProductImageCreateV2KeySpecifier),
		fields?: ProductImageCreateV2FieldPolicy,
	},
	ProductImageDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageDeleteKeySpecifier | (() => undefined | ProductImageDeleteKeySpecifier),
		fields?: ProductImageDeleteFieldPolicy,
	},
	ProductImageReorder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageReorderKeySpecifier | (() => undefined | ProductImageReorderKeySpecifier),
		fields?: ProductImageReorderFieldPolicy,
	},
	ProductImageUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageUpdateKeySpecifier | (() => undefined | ProductImageUpdateKeySpecifier),
		fields?: ProductImageUpdateFieldPolicy,
	},
	ProductPricingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPricingInfoKeySpecifier | (() => undefined | ProductPricingInfoKeySpecifier),
		fields?: ProductPricingInfoFieldPolicy,
	},
	ProductReviewError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewErrorKeySpecifier | (() => undefined | ProductReviewErrorKeySpecifier),
		fields?: ProductReviewErrorFieldPolicy,
	},
	ProductReviewImageCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewImageCreateKeySpecifier | (() => undefined | ProductReviewImageCreateKeySpecifier),
		fields?: ProductReviewImageCreateFieldPolicy,
	},
	ProductReviewImageDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewImageDeleteKeySpecifier | (() => undefined | ProductReviewImageDeleteKeySpecifier),
		fields?: ProductReviewImageDeleteFieldPolicy,
	},
	ProductReviewImageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewImageTypeKeySpecifier | (() => undefined | ProductReviewImageTypeKeySpecifier),
		fields?: ProductReviewImageTypeFieldPolicy,
	},
	ProductReviewImageTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewImageTypeConnectionKeySpecifier | (() => undefined | ProductReviewImageTypeConnectionKeySpecifier),
		fields?: ProductReviewImageTypeConnectionFieldPolicy,
	},
	ProductReviewImageTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewImageTypeEdgeKeySpecifier | (() => undefined | ProductReviewImageTypeEdgeKeySpecifier),
		fields?: ProductReviewImageTypeEdgeFieldPolicy,
	},
	ProductReviewType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewTypeKeySpecifier | (() => undefined | ProductReviewTypeKeySpecifier),
		fields?: ProductReviewTypeFieldPolicy,
	},
	ProductReviewTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewTypeCountableConnectionKeySpecifier | (() => undefined | ProductReviewTypeCountableConnectionKeySpecifier),
		fields?: ProductReviewTypeCountableConnectionFieldPolicy,
	},
	ProductReviewTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewTypeCountableEdgeKeySpecifier | (() => undefined | ProductReviewTypeCountableEdgeKeySpecifier),
		fields?: ProductReviewTypeCountableEdgeFieldPolicy,
	},
	ProductReviewVideoCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewVideoCreateKeySpecifier | (() => undefined | ProductReviewVideoCreateKeySpecifier),
		fields?: ProductReviewVideoCreateFieldPolicy,
	},
	ProductReviewVideoDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewVideoDeleteKeySpecifier | (() => undefined | ProductReviewVideoDeleteKeySpecifier),
		fields?: ProductReviewVideoDeleteFieldPolicy,
	},
	ProductReviewVideoType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewVideoTypeKeySpecifier | (() => undefined | ProductReviewVideoTypeKeySpecifier),
		fields?: ProductReviewVideoTypeFieldPolicy,
	},
	ProductReviewVideoTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewVideoTypeConnectionKeySpecifier | (() => undefined | ProductReviewVideoTypeConnectionKeySpecifier),
		fields?: ProductReviewVideoTypeConnectionFieldPolicy,
	},
	ProductReviewVideoTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductReviewVideoTypeEdgeKeySpecifier | (() => undefined | ProductReviewVideoTypeEdgeKeySpecifier),
		fields?: ProductReviewVideoTypeEdgeFieldPolicy,
	},
	ProductSetAvailabilityForPurchase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductSetAvailabilityForPurchaseKeySpecifier | (() => undefined | ProductSetAvailabilityForPurchaseKeySpecifier),
		fields?: ProductSetAvailabilityForPurchaseFieldPolicy,
	},
	ProductTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslatableContentKeySpecifier | (() => undefined | ProductTranslatableContentKeySpecifier),
		fields?: ProductTranslatableContentFieldPolicy,
	},
	ProductTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslateKeySpecifier | (() => undefined | ProductTranslateKeySpecifier),
		fields?: ProductTranslateFieldPolicy,
	},
	ProductTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTranslationKeySpecifier | (() => undefined | ProductTranslationKeySpecifier),
		fields?: ProductTranslationFieldPolicy,
	},
	ProductType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeKeySpecifier | (() => undefined | ProductTypeKeySpecifier),
		fields?: ProductTypeFieldPolicy,
	},
	ProductTypeBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeBulkDeleteKeySpecifier | (() => undefined | ProductTypeBulkDeleteKeySpecifier),
		fields?: ProductTypeBulkDeleteFieldPolicy,
	},
	ProductTypeClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeClearMetaKeySpecifier | (() => undefined | ProductTypeClearMetaKeySpecifier),
		fields?: ProductTypeClearMetaFieldPolicy,
	},
	ProductTypeClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeClearPrivateMetaKeySpecifier | (() => undefined | ProductTypeClearPrivateMetaKeySpecifier),
		fields?: ProductTypeClearPrivateMetaFieldPolicy,
	},
	ProductTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCountableConnectionKeySpecifier | (() => undefined | ProductTypeCountableConnectionKeySpecifier),
		fields?: ProductTypeCountableConnectionFieldPolicy,
	},
	ProductTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCountableEdgeKeySpecifier | (() => undefined | ProductTypeCountableEdgeKeySpecifier),
		fields?: ProductTypeCountableEdgeFieldPolicy,
	},
	ProductTypeCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeCreateKeySpecifier | (() => undefined | ProductTypeCreateKeySpecifier),
		fields?: ProductTypeCreateFieldPolicy,
	},
	ProductTypeDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeDeleteKeySpecifier | (() => undefined | ProductTypeDeleteKeySpecifier),
		fields?: ProductTypeDeleteFieldPolicy,
	},
	ProductTypeReorderAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeReorderAttributesKeySpecifier | (() => undefined | ProductTypeReorderAttributesKeySpecifier),
		fields?: ProductTypeReorderAttributesFieldPolicy,
	},
	ProductTypeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeUpdateKeySpecifier | (() => undefined | ProductTypeUpdateKeySpecifier),
		fields?: ProductTypeUpdateFieldPolicy,
	},
	ProductTypeUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeUpdateMetaKeySpecifier | (() => undefined | ProductTypeUpdateMetaKeySpecifier),
		fields?: ProductTypeUpdateMetaFieldPolicy,
	},
	ProductTypeUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductTypeUpdatePrivateMetaKeySpecifier | (() => undefined | ProductTypeUpdatePrivateMetaKeySpecifier),
		fields?: ProductTypeUpdatePrivateMetaFieldPolicy,
	},
	ProductUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdateKeySpecifier | (() => undefined | ProductUpdateKeySpecifier),
		fields?: ProductUpdateFieldPolicy,
	},
	ProductUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdateMetaKeySpecifier | (() => undefined | ProductUpdateMetaKeySpecifier),
		fields?: ProductUpdateMetaFieldPolicy,
	},
	ProductUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdatePrivateMetaKeySpecifier | (() => undefined | ProductUpdatePrivateMetaKeySpecifier),
		fields?: ProductUpdatePrivateMetaFieldPolicy,
	},
	ProductVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantKeySpecifier | (() => undefined | ProductVariantKeySpecifier),
		fields?: ProductVariantFieldPolicy,
	},
	ProductVariantBulkCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBulkCreateKeySpecifier | (() => undefined | ProductVariantBulkCreateKeySpecifier),
		fields?: ProductVariantBulkCreateFieldPolicy,
	},
	ProductVariantBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBulkDeleteKeySpecifier | (() => undefined | ProductVariantBulkDeleteKeySpecifier),
		fields?: ProductVariantBulkDeleteFieldPolicy,
	},
	ProductVariantBulkUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantBulkUpdateKeySpecifier | (() => undefined | ProductVariantBulkUpdateKeySpecifier),
		fields?: ProductVariantBulkUpdateFieldPolicy,
	},
	ProductVariantClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantClearMetaKeySpecifier | (() => undefined | ProductVariantClearMetaKeySpecifier),
		fields?: ProductVariantClearMetaFieldPolicy,
	},
	ProductVariantClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantClearPrivateMetaKeySpecifier | (() => undefined | ProductVariantClearPrivateMetaKeySpecifier),
		fields?: ProductVariantClearPrivateMetaFieldPolicy,
	},
	ProductVariantCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCountableConnectionKeySpecifier | (() => undefined | ProductVariantCountableConnectionKeySpecifier),
		fields?: ProductVariantCountableConnectionFieldPolicy,
	},
	ProductVariantCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCountableEdgeKeySpecifier | (() => undefined | ProductVariantCountableEdgeKeySpecifier),
		fields?: ProductVariantCountableEdgeFieldPolicy,
	},
	ProductVariantCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantCreateKeySpecifier | (() => undefined | ProductVariantCreateKeySpecifier),
		fields?: ProductVariantCreateFieldPolicy,
	},
	ProductVariantDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantDeleteKeySpecifier | (() => undefined | ProductVariantDeleteKeySpecifier),
		fields?: ProductVariantDeleteFieldPolicy,
	},
	ProductVariantReorder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantReorderKeySpecifier | (() => undefined | ProductVariantReorderKeySpecifier),
		fields?: ProductVariantReorderFieldPolicy,
	},
	ProductVariantSetDefault?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantSetDefaultKeySpecifier | (() => undefined | ProductVariantSetDefaultKeySpecifier),
		fields?: ProductVariantSetDefaultFieldPolicy,
	},
	ProductVariantStocksCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksCreateKeySpecifier | (() => undefined | ProductVariantStocksCreateKeySpecifier),
		fields?: ProductVariantStocksCreateFieldPolicy,
	},
	ProductVariantStocksDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksDeleteKeySpecifier | (() => undefined | ProductVariantStocksDeleteKeySpecifier),
		fields?: ProductVariantStocksDeleteFieldPolicy,
	},
	ProductVariantStocksUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantStocksUpdateKeySpecifier | (() => undefined | ProductVariantStocksUpdateKeySpecifier),
		fields?: ProductVariantStocksUpdateFieldPolicy,
	},
	ProductVariantTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslatableContentKeySpecifier | (() => undefined | ProductVariantTranslatableContentKeySpecifier),
		fields?: ProductVariantTranslatableContentFieldPolicy,
	},
	ProductVariantTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslateKeySpecifier | (() => undefined | ProductVariantTranslateKeySpecifier),
		fields?: ProductVariantTranslateFieldPolicy,
	},
	ProductVariantTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantTranslationKeySpecifier | (() => undefined | ProductVariantTranslationKeySpecifier),
		fields?: ProductVariantTranslationFieldPolicy,
	},
	ProductVariantUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantUpdateKeySpecifier | (() => undefined | ProductVariantUpdateKeySpecifier),
		fields?: ProductVariantUpdateFieldPolicy,
	},
	ProductVariantUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantUpdateMetaKeySpecifier | (() => undefined | ProductVariantUpdateMetaKeySpecifier),
		fields?: ProductVariantUpdateMetaFieldPolicy,
	},
	ProductVariantUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductVariantUpdatePrivateMetaKeySpecifier | (() => undefined | ProductVariantUpdatePrivateMetaKeySpecifier),
		fields?: ProductVariantUpdatePrivateMetaFieldPolicy,
	},
	PushAllToWareIq?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushAllToWareIqKeySpecifier | (() => undefined | PushAllToWareIqKeySpecifier),
		fields?: PushAllToWareIqFieldPolicy,
	},
	PushToWareIq?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushToWareIqKeySpecifier | (() => undefined | PushToWareIqKeySpecifier),
		fields?: PushToWareIqFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RateProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateProductReviewKeySpecifier | (() => undefined | RateProductReviewKeySpecifier),
		fields?: RateProductReviewFieldPolicy,
	},
	RazorpayError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RazorpayErrorKeySpecifier | (() => undefined | RazorpayErrorKeySpecifier),
		fields?: RazorpayErrorFieldPolicy,
	},
	RazorpayOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RazorpayOrderTypeKeySpecifier | (() => undefined | RazorpayOrderTypeKeySpecifier),
		fields?: RazorpayOrderTypeFieldPolicy,
	},
	ReOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReOrderKeySpecifier | (() => undefined | ReOrderKeySpecifier),
		fields?: ReOrderFieldPolicy,
	},
	ReducedRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReducedRateKeySpecifier | (() => undefined | ReducedRateKeySpecifier),
		fields?: ReducedRateFieldPolicy,
	},
	ReferAFriend?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReferAFriendKeySpecifier | (() => undefined | ReferAFriendKeySpecifier),
		fields?: ReferAFriendFieldPolicy,
	},
	RefreshToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshTokenKeySpecifier | (() => undefined | RefreshTokenKeySpecifier),
		fields?: RefreshTokenFieldPolicy,
	},
	RemoveTags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemoveTagsKeySpecifier | (() => undefined | RemoveTagsKeySpecifier),
		fields?: RemoveTagsFieldPolicy,
	},
	RequestEmailChange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestEmailChangeKeySpecifier | (() => undefined | RequestEmailChangeKeySpecifier),
		fields?: RequestEmailChangeFieldPolicy,
	},
	RequestOTP?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestOTPKeySpecifier | (() => undefined | RequestOTPKeySpecifier),
		fields?: RequestOTPFieldPolicy,
	},
	RequestPasswordReset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestPasswordResetKeySpecifier | (() => undefined | RequestPasswordResetKeySpecifier),
		fields?: RequestPasswordResetFieldPolicy,
	},
	Sale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleKeySpecifier | (() => undefined | SaleKeySpecifier),
		fields?: SaleFieldPolicy,
	},
	SaleAddCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleAddCataloguesKeySpecifier | (() => undefined | SaleAddCataloguesKeySpecifier),
		fields?: SaleAddCataloguesFieldPolicy,
	},
	SaleBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleBulkDeleteKeySpecifier | (() => undefined | SaleBulkDeleteKeySpecifier),
		fields?: SaleBulkDeleteFieldPolicy,
	},
	SaleCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCountableConnectionKeySpecifier | (() => undefined | SaleCountableConnectionKeySpecifier),
		fields?: SaleCountableConnectionFieldPolicy,
	},
	SaleCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCountableEdgeKeySpecifier | (() => undefined | SaleCountableEdgeKeySpecifier),
		fields?: SaleCountableEdgeFieldPolicy,
	},
	SaleCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleCreateKeySpecifier | (() => undefined | SaleCreateKeySpecifier),
		fields?: SaleCreateFieldPolicy,
	},
	SaleDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleDeleteKeySpecifier | (() => undefined | SaleDeleteKeySpecifier),
		fields?: SaleDeleteFieldPolicy,
	},
	SaleRemoveCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleRemoveCataloguesKeySpecifier | (() => undefined | SaleRemoveCataloguesKeySpecifier),
		fields?: SaleRemoveCataloguesFieldPolicy,
	},
	SaleTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslatableContentKeySpecifier | (() => undefined | SaleTranslatableContentKeySpecifier),
		fields?: SaleTranslatableContentFieldPolicy,
	},
	SaleTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslateKeySpecifier | (() => undefined | SaleTranslateKeySpecifier),
		fields?: SaleTranslateFieldPolicy,
	},
	SaleTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleTranslationKeySpecifier | (() => undefined | SaleTranslationKeySpecifier),
		fields?: SaleTranslationFieldPolicy,
	},
	SaleUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleUpdateKeySpecifier | (() => undefined | SaleUpdateKeySpecifier),
		fields?: SaleUpdateFieldPolicy,
	},
	SectionAddProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionAddProductsKeySpecifier | (() => undefined | SectionAddProductsKeySpecifier),
		fields?: SectionAddProductsFieldPolicy,
	},
	SectionBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionBulkDeleteKeySpecifier | (() => undefined | SectionBulkDeleteKeySpecifier),
		fields?: SectionBulkDeleteFieldPolicy,
	},
	SectionCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionCreateKeySpecifier | (() => undefined | SectionCreateKeySpecifier),
		fields?: SectionCreateFieldPolicy,
	},
	SectionDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionDeleteKeySpecifier | (() => undefined | SectionDeleteKeySpecifier),
		fields?: SectionDeleteFieldPolicy,
	},
	SectionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionErrorKeySpecifier | (() => undefined | SectionErrorKeySpecifier),
		fields?: SectionErrorFieldPolicy,
	},
	SectionImageCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageCreateKeySpecifier | (() => undefined | SectionImageCreateKeySpecifier),
		fields?: SectionImageCreateFieldPolicy,
	},
	SectionImageDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageDeleteKeySpecifier | (() => undefined | SectionImageDeleteKeySpecifier),
		fields?: SectionImageDeleteFieldPolicy,
	},
	SectionImageReorder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageReorderKeySpecifier | (() => undefined | SectionImageReorderKeySpecifier),
		fields?: SectionImageReorderFieldPolicy,
	},
	SectionImageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageTypeKeySpecifier | (() => undefined | SectionImageTypeKeySpecifier),
		fields?: SectionImageTypeFieldPolicy,
	},
	SectionImageTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageTypeConnectionKeySpecifier | (() => undefined | SectionImageTypeConnectionKeySpecifier),
		fields?: SectionImageTypeConnectionFieldPolicy,
	},
	SectionImageTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionImageTypeEdgeKeySpecifier | (() => undefined | SectionImageTypeEdgeKeySpecifier),
		fields?: SectionImageTypeEdgeFieldPolicy,
	},
	SectionRemoveProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionRemoveProductsKeySpecifier | (() => undefined | SectionRemoveProductsKeySpecifier),
		fields?: SectionRemoveProductsFieldPolicy,
	},
	SectionReorderProducts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionReorderProductsKeySpecifier | (() => undefined | SectionReorderProductsKeySpecifier),
		fields?: SectionReorderProductsFieldPolicy,
	},
	SectionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionTypeKeySpecifier | (() => undefined | SectionTypeKeySpecifier),
		fields?: SectionTypeFieldPolicy,
	},
	SectionTypeCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionTypeCountableConnectionKeySpecifier | (() => undefined | SectionTypeCountableConnectionKeySpecifier),
		fields?: SectionTypeCountableConnectionFieldPolicy,
	},
	SectionTypeCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionTypeCountableEdgeKeySpecifier | (() => undefined | SectionTypeCountableEdgeKeySpecifier),
		fields?: SectionTypeCountableEdgeFieldPolicy,
	},
	SectionUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SectionUpdateKeySpecifier | (() => undefined | SectionUpdateKeySpecifier),
		fields?: SectionUpdateFieldPolicy,
	},
	SelectedAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedAttributeKeySpecifier | (() => undefined | SelectedAttributeKeySpecifier),
		fields?: SelectedAttributeFieldPolicy,
	},
	ServiceAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountKeySpecifier | (() => undefined | ServiceAccountKeySpecifier),
		fields?: ServiceAccountFieldPolicy,
	},
	ServiceAccountClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountClearPrivateMetaKeySpecifier | (() => undefined | ServiceAccountClearPrivateMetaKeySpecifier),
		fields?: ServiceAccountClearPrivateMetaFieldPolicy,
	},
	ServiceAccountCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountCountableConnectionKeySpecifier | (() => undefined | ServiceAccountCountableConnectionKeySpecifier),
		fields?: ServiceAccountCountableConnectionFieldPolicy,
	},
	ServiceAccountCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountCountableEdgeKeySpecifier | (() => undefined | ServiceAccountCountableEdgeKeySpecifier),
		fields?: ServiceAccountCountableEdgeFieldPolicy,
	},
	ServiceAccountCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountCreateKeySpecifier | (() => undefined | ServiceAccountCreateKeySpecifier),
		fields?: ServiceAccountCreateFieldPolicy,
	},
	ServiceAccountDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountDeleteKeySpecifier | (() => undefined | ServiceAccountDeleteKeySpecifier),
		fields?: ServiceAccountDeleteFieldPolicy,
	},
	ServiceAccountToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountTokenKeySpecifier | (() => undefined | ServiceAccountTokenKeySpecifier),
		fields?: ServiceAccountTokenFieldPolicy,
	},
	ServiceAccountTokenCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountTokenCreateKeySpecifier | (() => undefined | ServiceAccountTokenCreateKeySpecifier),
		fields?: ServiceAccountTokenCreateFieldPolicy,
	},
	ServiceAccountTokenDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountTokenDeleteKeySpecifier | (() => undefined | ServiceAccountTokenDeleteKeySpecifier),
		fields?: ServiceAccountTokenDeleteFieldPolicy,
	},
	ServiceAccountUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountUpdateKeySpecifier | (() => undefined | ServiceAccountUpdateKeySpecifier),
		fields?: ServiceAccountUpdateFieldPolicy,
	},
	ServiceAccountUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAccountUpdatePrivateMetaKeySpecifier | (() => undefined | ServiceAccountUpdatePrivateMetaKeySpecifier),
		fields?: ServiceAccountUpdatePrivateMetaFieldPolicy,
	},
	SetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetPasswordKeySpecifier | (() => undefined | SetPasswordKeySpecifier),
		fields?: SetPasswordFieldPolicy,
	},
	SezzleOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SezzleOrderTypeKeySpecifier | (() => undefined | SezzleOrderTypeKeySpecifier),
		fields?: SezzleOrderTypeFieldPolicy,
	},
	ShipmentItemType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemTypeKeySpecifier | (() => undefined | ShipmentItemTypeKeySpecifier),
		fields?: ShipmentItemTypeFieldPolicy,
	},
	ShipmentItemTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemTypeConnectionKeySpecifier | (() => undefined | ShipmentItemTypeConnectionKeySpecifier),
		fields?: ShipmentItemTypeConnectionFieldPolicy,
	},
	ShipmentItemTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentItemTypeEdgeKeySpecifier | (() => undefined | ShipmentItemTypeEdgeKeySpecifier),
		fields?: ShipmentItemTypeEdgeFieldPolicy,
	},
	ShipmentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentTypeKeySpecifier | (() => undefined | ShipmentTypeKeySpecifier),
		fields?: ShipmentTypeFieldPolicy,
	},
	ShipmentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentTypeConnectionKeySpecifier | (() => undefined | ShipmentTypeConnectionKeySpecifier),
		fields?: ShipmentTypeConnectionFieldPolicy,
	},
	ShipmentTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentTypeEdgeKeySpecifier | (() => undefined | ShipmentTypeEdgeKeySpecifier),
		fields?: ShipmentTypeEdgeFieldPolicy,
	},
	ShippingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingErrorKeySpecifier | (() => undefined | ShippingErrorKeySpecifier),
		fields?: ShippingErrorFieldPolicy,
	},
	ShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodKeySpecifier | (() => undefined | ShippingMethodKeySpecifier),
		fields?: ShippingMethodFieldPolicy,
	},
	ShippingMethodTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodTranslatableContentKeySpecifier | (() => undefined | ShippingMethodTranslatableContentKeySpecifier),
		fields?: ShippingMethodTranslatableContentFieldPolicy,
	},
	ShippingMethodTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingMethodTranslationKeySpecifier | (() => undefined | ShippingMethodTranslationKeySpecifier),
		fields?: ShippingMethodTranslationFieldPolicy,
	},
	ShippingPriceBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceBulkDeleteKeySpecifier | (() => undefined | ShippingPriceBulkDeleteKeySpecifier),
		fields?: ShippingPriceBulkDeleteFieldPolicy,
	},
	ShippingPriceCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceCreateKeySpecifier | (() => undefined | ShippingPriceCreateKeySpecifier),
		fields?: ShippingPriceCreateFieldPolicy,
	},
	ShippingPriceDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceDeleteKeySpecifier | (() => undefined | ShippingPriceDeleteKeySpecifier),
		fields?: ShippingPriceDeleteFieldPolicy,
	},
	ShippingPriceTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceTranslateKeySpecifier | (() => undefined | ShippingPriceTranslateKeySpecifier),
		fields?: ShippingPriceTranslateFieldPolicy,
	},
	ShippingPriceUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingPriceUpdateKeySpecifier | (() => undefined | ShippingPriceUpdateKeySpecifier),
		fields?: ShippingPriceUpdateFieldPolicy,
	},
	ShippingZone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneKeySpecifier | (() => undefined | ShippingZoneKeySpecifier),
		fields?: ShippingZoneFieldPolicy,
	},
	ShippingZoneBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneBulkDeleteKeySpecifier | (() => undefined | ShippingZoneBulkDeleteKeySpecifier),
		fields?: ShippingZoneBulkDeleteFieldPolicy,
	},
	ShippingZoneCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCountableConnectionKeySpecifier | (() => undefined | ShippingZoneCountableConnectionKeySpecifier),
		fields?: ShippingZoneCountableConnectionFieldPolicy,
	},
	ShippingZoneCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCountableEdgeKeySpecifier | (() => undefined | ShippingZoneCountableEdgeKeySpecifier),
		fields?: ShippingZoneCountableEdgeFieldPolicy,
	},
	ShippingZoneCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneCreateKeySpecifier | (() => undefined | ShippingZoneCreateKeySpecifier),
		fields?: ShippingZoneCreateFieldPolicy,
	},
	ShippingZoneDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneDeleteKeySpecifier | (() => undefined | ShippingZoneDeleteKeySpecifier),
		fields?: ShippingZoneDeleteFieldPolicy,
	},
	ShippingZoneUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShippingZoneUpdateKeySpecifier | (() => undefined | ShippingZoneUpdateKeySpecifier),
		fields?: ShippingZoneUpdateFieldPolicy,
	},
	Shop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopKeySpecifier | (() => undefined | ShopKeySpecifier),
		fields?: ShopFieldPolicy,
	},
	ShopAddressUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopAddressUpdateKeySpecifier | (() => undefined | ShopAddressUpdateKeySpecifier),
		fields?: ShopAddressUpdateFieldPolicy,
	},
	ShopDomainUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopDomainUpdateKeySpecifier | (() => undefined | ShopDomainUpdateKeySpecifier),
		fields?: ShopDomainUpdateFieldPolicy,
	},
	ShopError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopErrorKeySpecifier | (() => undefined | ShopErrorKeySpecifier),
		fields?: ShopErrorFieldPolicy,
	},
	ShopFetchTaxRates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopFetchTaxRatesKeySpecifier | (() => undefined | ShopFetchTaxRatesKeySpecifier),
		fields?: ShopFetchTaxRatesFieldPolicy,
	},
	ShopMetaType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopMetaTypeKeySpecifier | (() => undefined | ShopMetaTypeKeySpecifier),
		fields?: ShopMetaTypeFieldPolicy,
	},
	ShopMetaTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopMetaTypeConnectionKeySpecifier | (() => undefined | ShopMetaTypeConnectionKeySpecifier),
		fields?: ShopMetaTypeConnectionFieldPolicy,
	},
	ShopMetaTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopMetaTypeEdgeKeySpecifier | (() => undefined | ShopMetaTypeEdgeKeySpecifier),
		fields?: ShopMetaTypeEdgeFieldPolicy,
	},
	ShopSettingsTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopSettingsTranslateKeySpecifier | (() => undefined | ShopSettingsTranslateKeySpecifier),
		fields?: ShopSettingsTranslateFieldPolicy,
	},
	ShopSettingsUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopSettingsUpdateKeySpecifier | (() => undefined | ShopSettingsUpdateKeySpecifier),
		fields?: ShopSettingsUpdateFieldPolicy,
	},
	ShopTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopTranslationKeySpecifier | (() => undefined | ShopTranslationKeySpecifier),
		fields?: ShopTranslationFieldPolicy,
	},
	ShopifyGiftCardType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyGiftCardTypeKeySpecifier | (() => undefined | ShopifyGiftCardTypeKeySpecifier),
		fields?: ShopifyGiftCardTypeFieldPolicy,
	},
	ShopifyOrderType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyOrderTypeKeySpecifier | (() => undefined | ShopifyOrderTypeKeySpecifier),
		fields?: ShopifyOrderTypeFieldPolicy,
	},
	ShopifyUserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyUserErrorKeySpecifier | (() => undefined | ShopifyUserErrorKeySpecifier),
		fields?: ShopifyUserErrorFieldPolicy,
	},
	ShopifyUserType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopifyUserTypeKeySpecifier | (() => undefined | ShopifyUserTypeKeySpecifier),
		fields?: ShopifyUserTypeFieldPolicy,
	},
	StaffBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffBulkDeleteKeySpecifier | (() => undefined | StaffBulkDeleteKeySpecifier),
		fields?: StaffBulkDeleteFieldPolicy,
	},
	StaffCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffCreateKeySpecifier | (() => undefined | StaffCreateKeySpecifier),
		fields?: StaffCreateFieldPolicy,
	},
	StaffDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffDeleteKeySpecifier | (() => undefined | StaffDeleteKeySpecifier),
		fields?: StaffDeleteFieldPolicy,
	},
	StaffError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffErrorKeySpecifier | (() => undefined | StaffErrorKeySpecifier),
		fields?: StaffErrorFieldPolicy,
	},
	StaffNotificationRecipient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientKeySpecifier | (() => undefined | StaffNotificationRecipientKeySpecifier),
		fields?: StaffNotificationRecipientFieldPolicy,
	},
	StaffNotificationRecipientCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientCreateKeySpecifier | (() => undefined | StaffNotificationRecipientCreateKeySpecifier),
		fields?: StaffNotificationRecipientCreateFieldPolicy,
	},
	StaffNotificationRecipientDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientDeleteKeySpecifier | (() => undefined | StaffNotificationRecipientDeleteKeySpecifier),
		fields?: StaffNotificationRecipientDeleteFieldPolicy,
	},
	StaffNotificationRecipientUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffNotificationRecipientUpdateKeySpecifier | (() => undefined | StaffNotificationRecipientUpdateKeySpecifier),
		fields?: StaffNotificationRecipientUpdateFieldPolicy,
	},
	StaffUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StaffUpdateKeySpecifier | (() => undefined | StaffUpdateKeySpecifier),
		fields?: StaffUpdateFieldPolicy,
	},
	Stock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockKeySpecifier | (() => undefined | StockKeySpecifier),
		fields?: StockFieldPolicy,
	},
	StockCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockCountableConnectionKeySpecifier | (() => undefined | StockCountableConnectionKeySpecifier),
		fields?: StockCountableConnectionFieldPolicy,
	},
	StockCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockCountableEdgeKeySpecifier | (() => undefined | StockCountableEdgeKeySpecifier),
		fields?: StockCountableEdgeFieldPolicy,
	},
	StockError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockErrorKeySpecifier | (() => undefined | StockErrorKeySpecifier),
		fields?: StockErrorFieldPolicy,
	},
	SubscriptionCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionCreateKeySpecifier | (() => undefined | SubscriptionCreateKeySpecifier),
		fields?: SubscriptionCreateFieldPolicy,
	},
	SubscriptionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionErrorKeySpecifier | (() => undefined | SubscriptionErrorKeySpecifier),
		fields?: SubscriptionErrorFieldPolicy,
	},
	SubscriptionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionTypeKeySpecifier | (() => undefined | SubscriptionTypeKeySpecifier),
		fields?: SubscriptionTypeFieldPolicy,
	},
	SubscriptionTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionTypeConnectionKeySpecifier | (() => undefined | SubscriptionTypeConnectionKeySpecifier),
		fields?: SubscriptionTypeConnectionFieldPolicy,
	},
	SubscriptionTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionTypeEdgeKeySpecifier | (() => undefined | SubscriptionTypeEdgeKeySpecifier),
		fields?: SubscriptionTypeEdgeFieldPolicy,
	},
	SurveyAnswerOptionsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerOptionsTypeKeySpecifier | (() => undefined | SurveyAnswerOptionsTypeKeySpecifier),
		fields?: SurveyAnswerOptionsTypeFieldPolicy,
	},
	SurveyAnswerOptionsTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerOptionsTypeConnectionKeySpecifier | (() => undefined | SurveyAnswerOptionsTypeConnectionKeySpecifier),
		fields?: SurveyAnswerOptionsTypeConnectionFieldPolicy,
	},
	SurveyAnswerOptionsTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerOptionsTypeEdgeKeySpecifier | (() => undefined | SurveyAnswerOptionsTypeEdgeKeySpecifier),
		fields?: SurveyAnswerOptionsTypeEdgeFieldPolicy,
	},
	SurveyAnswerType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerTypeKeySpecifier | (() => undefined | SurveyAnswerTypeKeySpecifier),
		fields?: SurveyAnswerTypeFieldPolicy,
	},
	SurveyAnswerTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerTypeConnectionKeySpecifier | (() => undefined | SurveyAnswerTypeConnectionKeySpecifier),
		fields?: SurveyAnswerTypeConnectionFieldPolicy,
	},
	SurveyAnswerTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyAnswerTypeEdgeKeySpecifier | (() => undefined | SurveyAnswerTypeEdgeKeySpecifier),
		fields?: SurveyAnswerTypeEdgeFieldPolicy,
	},
	SurveyCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyCreateKeySpecifier | (() => undefined | SurveyCreateKeySpecifier),
		fields?: SurveyCreateFieldPolicy,
	},
	SurveyDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyDeleteKeySpecifier | (() => undefined | SurveyDeleteKeySpecifier),
		fields?: SurveyDeleteFieldPolicy,
	},
	SurveyError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyErrorKeySpecifier | (() => undefined | SurveyErrorKeySpecifier),
		fields?: SurveyErrorFieldPolicy,
	},
	SurveyFill?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyFillKeySpecifier | (() => undefined | SurveyFillKeySpecifier),
		fields?: SurveyFillFieldPolicy,
	},
	SurveyFillType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyFillTypeKeySpecifier | (() => undefined | SurveyFillTypeKeySpecifier),
		fields?: SurveyFillTypeFieldPolicy,
	},
	SurveyLinkData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyLinkDataKeySpecifier | (() => undefined | SurveyLinkDataKeySpecifier),
		fields?: SurveyLinkDataFieldPolicy,
	},
	SurveyOptionsFill?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyOptionsFillKeySpecifier | (() => undefined | SurveyOptionsFillKeySpecifier),
		fields?: SurveyOptionsFillFieldPolicy,
	},
	SurveyQuestionOptionsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionOptionsTypeKeySpecifier | (() => undefined | SurveyQuestionOptionsTypeKeySpecifier),
		fields?: SurveyQuestionOptionsTypeFieldPolicy,
	},
	SurveyQuestionOptionsTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionOptionsTypeConnectionKeySpecifier | (() => undefined | SurveyQuestionOptionsTypeConnectionKeySpecifier),
		fields?: SurveyQuestionOptionsTypeConnectionFieldPolicy,
	},
	SurveyQuestionOptionsTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionOptionsTypeEdgeKeySpecifier | (() => undefined | SurveyQuestionOptionsTypeEdgeKeySpecifier),
		fields?: SurveyQuestionOptionsTypeEdgeFieldPolicy,
	},
	SurveyQuestionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionTypeKeySpecifier | (() => undefined | SurveyQuestionTypeKeySpecifier),
		fields?: SurveyQuestionTypeFieldPolicy,
	},
	SurveyQuestionTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionTypeConnectionKeySpecifier | (() => undefined | SurveyQuestionTypeConnectionKeySpecifier),
		fields?: SurveyQuestionTypeConnectionFieldPolicy,
	},
	SurveyQuestionTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyQuestionTypeEdgeKeySpecifier | (() => undefined | SurveyQuestionTypeEdgeKeySpecifier),
		fields?: SurveyQuestionTypeEdgeFieldPolicy,
	},
	SurveyType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyTypeKeySpecifier | (() => undefined | SurveyTypeKeySpecifier),
		fields?: SurveyTypeFieldPolicy,
	},
	SurveyTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyTypeConnectionKeySpecifier | (() => undefined | SurveyTypeConnectionKeySpecifier),
		fields?: SurveyTypeConnectionFieldPolicy,
	},
	SurveyTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SurveyTypeEdgeKeySpecifier | (() => undefined | SurveyTypeEdgeKeySpecifier),
		fields?: SurveyTypeEdgeFieldPolicy,
	},
	SyncWareIqInventory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyncWareIqInventoryKeySpecifier | (() => undefined | SyncWareIqInventoryKeySpecifier),
		fields?: SyncWareIqInventoryFieldPolicy,
	},
	TagError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagErrorKeySpecifier | (() => undefined | TagErrorKeySpecifier),
		fields?: TagErrorFieldPolicy,
	},
	TagType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagTypeKeySpecifier | (() => undefined | TagTypeKeySpecifier),
		fields?: TagTypeFieldPolicy,
	},
	TaxType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxTypeKeySpecifier | (() => undefined | TaxTypeKeySpecifier),
		fields?: TaxTypeFieldPolicy,
	},
	TaxedMoney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxedMoneyKeySpecifier | (() => undefined | TaxedMoneyKeySpecifier),
		fields?: TaxedMoneyFieldPolicy,
	},
	TaxedMoneyRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxedMoneyRangeKeySpecifier | (() => undefined | TaxedMoneyRangeKeySpecifier),
		fields?: TaxedMoneyRangeFieldPolicy,
	},
	TokenCreateWithAdmin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenCreateWithAdminKeySpecifier | (() => undefined | TokenCreateWithAdminKeySpecifier),
		fields?: TokenCreateWithAdminFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	TranslatableItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslatableItemConnectionKeySpecifier | (() => undefined | TranslatableItemConnectionKeySpecifier),
		fields?: TranslatableItemConnectionFieldPolicy,
	},
	TranslatableItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslatableItemEdgeKeySpecifier | (() => undefined | TranslatableItemEdgeKeySpecifier),
		fields?: TranslatableItemEdgeFieldPolicy,
	},
	TranslationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TranslationErrorKeySpecifier | (() => undefined | TranslationErrorKeySpecifier),
		fields?: TranslationErrorFieldPolicy,
	},
	TriggerCron?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerCronKeySpecifier | (() => undefined | TriggerCronKeySpecifier),
		fields?: TriggerCronFieldPolicy,
	},
	TriggerCronError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerCronErrorKeySpecifier | (() => undefined | TriggerCronErrorKeySpecifier),
		fields?: TriggerCronErrorFieldPolicy,
	},
	UpdateAddressType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAddressTypeKeySpecifier | (() => undefined | UpdateAddressTypeKeySpecifier),
		fields?: UpdateAddressTypeFieldPolicy,
	},
	UpdateArchiveOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateArchiveOrderKeySpecifier | (() => undefined | UpdateArchiveOrderKeySpecifier),
		fields?: UpdateArchiveOrderFieldPolicy,
	},
	UpdateBanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateBannerKeySpecifier | (() => undefined | UpdateBannerKeySpecifier),
		fields?: UpdateBannerFieldPolicy,
	},
	UpdateInfluencer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateInfluencerKeySpecifier | (() => undefined | UpdateInfluencerKeySpecifier),
		fields?: UpdateInfluencerFieldPolicy,
	},
	UpdateInventoryCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateInventoryCSVKeySpecifier | (() => undefined | UpdateInventoryCSVKeySpecifier),
		fields?: UpdateInventoryCSVFieldPolicy,
	},
	UpdateManufacturingDetailsCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateManufacturingDetailsCSVKeySpecifier | (() => undefined | UpdateManufacturingDetailsCSVKeySpecifier),
		fields?: UpdateManufacturingDetailsCSVFieldPolicy,
	},
	UpdateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMetadataKeySpecifier | (() => undefined | UpdateMetadataKeySpecifier),
		fields?: UpdateMetadataFieldPolicy,
	},
	UpdateMetadataV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMetadataV2KeySpecifier | (() => undefined | UpdateMetadataV2KeySpecifier),
		fields?: UpdateMetadataV2FieldPolicy,
	},
	UpdatePaymentMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePaymentMethodKeySpecifier | (() => undefined | UpdatePaymentMethodKeySpecifier),
		fields?: UpdatePaymentMethodFieldPolicy,
	},
	UpdatePrivateMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePrivateMetadataKeySpecifier | (() => undefined | UpdatePrivateMetadataKeySpecifier),
		fields?: UpdatePrivateMetadataFieldPolicy,
	},
	UpdatePrivateMetadataV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePrivateMetadataV2KeySpecifier | (() => undefined | UpdatePrivateMetadataV2KeySpecifier),
		fields?: UpdatePrivateMetadataV2FieldPolicy,
	},
	UpdateReplyOnProductReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateReplyOnProductReviewKeySpecifier | (() => undefined | UpdateReplyOnProductReviewKeySpecifier),
		fields?: UpdateReplyOnProductReviewFieldPolicy,
	},
	UpdateShopifyProductPriceCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateShopifyProductPriceCSVKeySpecifier | (() => undefined | UpdateShopifyProductPriceCSVKeySpecifier),
		fields?: UpdateShopifyProductPriceCSVFieldPolicy,
	},
	UpdateShopifyProductTagsCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateShopifyProductTagsCSVKeySpecifier | (() => undefined | UpdateShopifyProductTagsCSVKeySpecifier),
		fields?: UpdateShopifyProductTagsCSVFieldPolicy,
	},
	UpdateShopifyUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateShopifyUserKeySpecifier | (() => undefined | UpdateShopifyUserKeySpecifier),
		fields?: UpdateShopifyUserFieldPolicy,
	},
	UpdateSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSubscriptionKeySpecifier | (() => undefined | UpdateSubscriptionKeySpecifier),
		fields?: UpdateSubscriptionFieldPolicy,
	},
	UpdateVoucherRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateVoucherRuleKeySpecifier | (() => undefined | UpdateVoucherRuleKeySpecifier),
		fields?: UpdateVoucherRuleFieldPolicy,
	},
	UpdateVoucherRuleLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateVoucherRuleLinkKeySpecifier | (() => undefined | UpdateVoucherRuleLinkKeySpecifier),
		fields?: UpdateVoucherRuleLinkFieldPolicy,
	},
	UploadProductImageCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UploadProductImageCSVKeySpecifier | (() => undefined | UploadProductImageCSVKeySpecifier),
		fields?: UploadProductImageCSVFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAvatarDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarDeleteKeySpecifier | (() => undefined | UserAvatarDeleteKeySpecifier),
		fields?: UserAvatarDeleteFieldPolicy,
	},
	UserAvatarDeleteV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarDeleteV2KeySpecifier | (() => undefined | UserAvatarDeleteV2KeySpecifier),
		fields?: UserAvatarDeleteV2FieldPolicy,
	},
	UserAvatarUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarUpdateKeySpecifier | (() => undefined | UserAvatarUpdateKeySpecifier),
		fields?: UserAvatarUpdateFieldPolicy,
	},
	UserAvatarUpdateV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAvatarUpdateV2KeySpecifier | (() => undefined | UserAvatarUpdateV2KeySpecifier),
		fields?: UserAvatarUpdateV2FieldPolicy,
	},
	UserBulkSetActive?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBulkSetActiveKeySpecifier | (() => undefined | UserBulkSetActiveKeySpecifier),
		fields?: UserBulkSetActiveFieldPolicy,
	},
	UserClearMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserClearMetaKeySpecifier | (() => undefined | UserClearMetaKeySpecifier),
		fields?: UserClearMetaFieldPolicy,
	},
	UserClearPrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserClearPrivateMetaKeySpecifier | (() => undefined | UserClearPrivateMetaKeySpecifier),
		fields?: UserClearPrivateMetaFieldPolicy,
	},
	UserCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountableConnectionKeySpecifier | (() => undefined | UserCountableConnectionKeySpecifier),
		fields?: UserCountableConnectionFieldPolicy,
	},
	UserCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountableEdgeKeySpecifier | (() => undefined | UserCountableEdgeKeySpecifier),
		fields?: UserCountableEdgeFieldPolicy,
	},
	UserExistsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserExistsTypeKeySpecifier | (() => undefined | UserExistsTypeKeySpecifier),
		fields?: UserExistsTypeFieldPolicy,
	},
	UserPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionKeySpecifier | (() => undefined | UserPermissionKeySpecifier),
		fields?: UserPermissionFieldPolicy,
	},
	UserUpdateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserUpdateMetaKeySpecifier | (() => undefined | UserUpdateMetaKeySpecifier),
		fields?: UserUpdateMetaFieldPolicy,
	},
	UserUpdatePrivateMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserUpdatePrivateMetaKeySpecifier | (() => undefined | UserUpdatePrivateMetaKeySpecifier),
		fields?: UserUpdatePrivateMetaFieldPolicy,
	},
	VAT?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VATKeySpecifier | (() => undefined | VATKeySpecifier),
		fields?: VATFieldPolicy,
	},
	VariantImageAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantImageAssignKeySpecifier | (() => undefined | VariantImageAssignKeySpecifier),
		fields?: VariantImageAssignFieldPolicy,
	},
	VariantImageUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantImageUnassignKeySpecifier | (() => undefined | VariantImageUnassignKeySpecifier),
		fields?: VariantImageUnassignFieldPolicy,
	},
	VariantPricingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantPricingInfoKeySpecifier | (() => undefined | VariantPricingInfoKeySpecifier),
		fields?: VariantPricingInfoFieldPolicy,
	},
	VerifyCheckoutOTP?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyCheckoutOTPKeySpecifier | (() => undefined | VerifyCheckoutOTPKeySpecifier),
		fields?: VerifyCheckoutOTPFieldPolicy,
	},
	VerifyToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyTokenKeySpecifier | (() => undefined | VerifyTokenKeySpecifier),
		fields?: VerifyTokenFieldPolicy,
	},
	Voucher?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherKeySpecifier | (() => undefined | VoucherKeySpecifier),
		fields?: VoucherFieldPolicy,
	},
	VoucherAddCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherAddCataloguesKeySpecifier | (() => undefined | VoucherAddCataloguesKeySpecifier),
		fields?: VoucherAddCataloguesFieldPolicy,
	},
	VoucherBulkDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherBulkDeleteKeySpecifier | (() => undefined | VoucherBulkDeleteKeySpecifier),
		fields?: VoucherBulkDeleteFieldPolicy,
	},
	VoucherCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCountableConnectionKeySpecifier | (() => undefined | VoucherCountableConnectionKeySpecifier),
		fields?: VoucherCountableConnectionFieldPolicy,
	},
	VoucherCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCountableEdgeKeySpecifier | (() => undefined | VoucherCountableEdgeKeySpecifier),
		fields?: VoucherCountableEdgeFieldPolicy,
	},
	VoucherCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherCreateKeySpecifier | (() => undefined | VoucherCreateKeySpecifier),
		fields?: VoucherCreateFieldPolicy,
	},
	VoucherDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherDeleteKeySpecifier | (() => undefined | VoucherDeleteKeySpecifier),
		fields?: VoucherDeleteFieldPolicy,
	},
	VoucherError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherErrorKeySpecifier | (() => undefined | VoucherErrorKeySpecifier),
		fields?: VoucherErrorFieldPolicy,
	},
	VoucherRemoveCatalogues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRemoveCataloguesKeySpecifier | (() => undefined | VoucherRemoveCataloguesKeySpecifier),
		fields?: VoucherRemoveCataloguesFieldPolicy,
	},
	VoucherRuleLinkType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleLinkTypeKeySpecifier | (() => undefined | VoucherRuleLinkTypeKeySpecifier),
		fields?: VoucherRuleLinkTypeFieldPolicy,
	},
	VoucherRuleLinkTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleLinkTypeConnectionKeySpecifier | (() => undefined | VoucherRuleLinkTypeConnectionKeySpecifier),
		fields?: VoucherRuleLinkTypeConnectionFieldPolicy,
	},
	VoucherRuleLinkTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleLinkTypeEdgeKeySpecifier | (() => undefined | VoucherRuleLinkTypeEdgeKeySpecifier),
		fields?: VoucherRuleLinkTypeEdgeFieldPolicy,
	},
	VoucherRuleType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleTypeKeySpecifier | (() => undefined | VoucherRuleTypeKeySpecifier),
		fields?: VoucherRuleTypeFieldPolicy,
	},
	VoucherRuleTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleTypeConnectionKeySpecifier | (() => undefined | VoucherRuleTypeConnectionKeySpecifier),
		fields?: VoucherRuleTypeConnectionFieldPolicy,
	},
	VoucherRuleTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherRuleTypeEdgeKeySpecifier | (() => undefined | VoucherRuleTypeEdgeKeySpecifier),
		fields?: VoucherRuleTypeEdgeFieldPolicy,
	},
	VoucherTranslatableContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslatableContentKeySpecifier | (() => undefined | VoucherTranslatableContentKeySpecifier),
		fields?: VoucherTranslatableContentFieldPolicy,
	},
	VoucherTranslate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslateKeySpecifier | (() => undefined | VoucherTranslateKeySpecifier),
		fields?: VoucherTranslateFieldPolicy,
	},
	VoucherTranslation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTranslationKeySpecifier | (() => undefined | VoucherTranslationKeySpecifier),
		fields?: VoucherTranslationFieldPolicy,
	},
	VoucherUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherUpdateKeySpecifier | (() => undefined | VoucherUpdateKeySpecifier),
		fields?: VoucherUpdateFieldPolicy,
	},
	WalletBalanceAddCSV?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletBalanceAddCSVKeySpecifier | (() => undefined | WalletBalanceAddCSVKeySpecifier),
		fields?: WalletBalanceAddCSVFieldPolicy,
	},
	WalletBalancePhoneUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletBalancePhoneUpdateKeySpecifier | (() => undefined | WalletBalancePhoneUpdateKeySpecifier),
		fields?: WalletBalancePhoneUpdateFieldPolicy,
	},
	WalletBalanceUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletBalanceUpdateKeySpecifier | (() => undefined | WalletBalanceUpdateKeySpecifier),
		fields?: WalletBalanceUpdateFieldPolicy,
	},
	WalletError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletErrorKeySpecifier | (() => undefined | WalletErrorKeySpecifier),
		fields?: WalletErrorFieldPolicy,
	},
	WalletType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WalletTypeKeySpecifier | (() => undefined | WalletTypeKeySpecifier),
		fields?: WalletTypeFieldPolicy,
	},
	Warehouse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseKeySpecifier | (() => undefined | WarehouseKeySpecifier),
		fields?: WarehouseFieldPolicy,
	},
	WarehouseCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCountableConnectionKeySpecifier | (() => undefined | WarehouseCountableConnectionKeySpecifier),
		fields?: WarehouseCountableConnectionFieldPolicy,
	},
	WarehouseCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCountableEdgeKeySpecifier | (() => undefined | WarehouseCountableEdgeKeySpecifier),
		fields?: WarehouseCountableEdgeFieldPolicy,
	},
	WarehouseCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseCreateKeySpecifier | (() => undefined | WarehouseCreateKeySpecifier),
		fields?: WarehouseCreateFieldPolicy,
	},
	WarehouseDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseDeleteKeySpecifier | (() => undefined | WarehouseDeleteKeySpecifier),
		fields?: WarehouseDeleteFieldPolicy,
	},
	WarehouseError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseErrorKeySpecifier | (() => undefined | WarehouseErrorKeySpecifier),
		fields?: WarehouseErrorFieldPolicy,
	},
	WarehouseShippingZoneAssign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseShippingZoneAssignKeySpecifier | (() => undefined | WarehouseShippingZoneAssignKeySpecifier),
		fields?: WarehouseShippingZoneAssignFieldPolicy,
	},
	WarehouseShippingZoneUnassign?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseShippingZoneUnassignKeySpecifier | (() => undefined | WarehouseShippingZoneUnassignKeySpecifier),
		fields?: WarehouseShippingZoneUnassignFieldPolicy,
	},
	WarehouseUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WarehouseUpdateKeySpecifier | (() => undefined | WarehouseUpdateKeySpecifier),
		fields?: WarehouseUpdateFieldPolicy,
	},
	Webhook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookKeySpecifier | (() => undefined | WebhookKeySpecifier),
		fields?: WebhookFieldPolicy,
	},
	WebhookCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookCountableConnectionKeySpecifier | (() => undefined | WebhookCountableConnectionKeySpecifier),
		fields?: WebhookCountableConnectionFieldPolicy,
	},
	WebhookCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookCountableEdgeKeySpecifier | (() => undefined | WebhookCountableEdgeKeySpecifier),
		fields?: WebhookCountableEdgeFieldPolicy,
	},
	WebhookCreate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookCreateKeySpecifier | (() => undefined | WebhookCreateKeySpecifier),
		fields?: WebhookCreateFieldPolicy,
	},
	WebhookDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookDeleteKeySpecifier | (() => undefined | WebhookDeleteKeySpecifier),
		fields?: WebhookDeleteFieldPolicy,
	},
	WebhookError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookErrorKeySpecifier | (() => undefined | WebhookErrorKeySpecifier),
		fields?: WebhookErrorFieldPolicy,
	},
	WebhookEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookEventKeySpecifier | (() => undefined | WebhookEventKeySpecifier),
		fields?: WebhookEventFieldPolicy,
	},
	WebhookUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebhookUpdateKeySpecifier | (() => undefined | WebhookUpdateKeySpecifier),
		fields?: WebhookUpdateFieldPolicy,
	},
	Weight?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeightKeySpecifier | (() => undefined | WeightKeySpecifier),
		fields?: WeightFieldPolicy,
	},
	Wishlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistKeySpecifier | (() => undefined | WishlistKeySpecifier),
		fields?: WishlistFieldPolicy,
	},
	WishlistAddProductMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistAddProductMutationKeySpecifier | (() => undefined | WishlistAddProductMutationKeySpecifier),
		fields?: WishlistAddProductMutationFieldPolicy,
	},
	WishlistAddProductVariantMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistAddProductVariantMutationKeySpecifier | (() => undefined | WishlistAddProductVariantMutationKeySpecifier),
		fields?: WishlistAddProductVariantMutationFieldPolicy,
	},
	WishlistError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistErrorKeySpecifier | (() => undefined | WishlistErrorKeySpecifier),
		fields?: WishlistErrorFieldPolicy,
	},
	WishlistItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemKeySpecifier | (() => undefined | WishlistItemKeySpecifier),
		fields?: WishlistItemFieldPolicy,
	},
	WishlistItemCountableConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemCountableConnectionKeySpecifier | (() => undefined | WishlistItemCountableConnectionKeySpecifier),
		fields?: WishlistItemCountableConnectionFieldPolicy,
	},
	WishlistItemCountableEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistItemCountableEdgeKeySpecifier | (() => undefined | WishlistItemCountableEdgeKeySpecifier),
		fields?: WishlistItemCountableEdgeFieldPolicy,
	},
	WishlistRemoveProductMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistRemoveProductMutationKeySpecifier | (() => undefined | WishlistRemoveProductMutationKeySpecifier),
		fields?: WishlistRemoveProductMutationFieldPolicy,
	},
	WishlistRemoveProductVariantMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WishlistRemoveProductVariantMutationKeySpecifier | (() => undefined | WishlistRemoveProductVariantMutationKeySpecifier),
		fields?: WishlistRemoveProductVariantMutationFieldPolicy,
	},
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ServiceKeySpecifier | (() => undefined | _ServiceKeySpecifier),
		fields?: _ServiceFieldPolicy,
	},
	checkoutAddPromoCodeShopify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | checkoutAddPromoCodeShopifyKeySpecifier | (() => undefined | checkoutAddPromoCodeShopifyKeySpecifier),
		fields?: checkoutAddPromoCodeShopifyFieldPolicy,
	},
	checkoutRemovePromoCodeShopify?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | checkoutRemovePromoCodeShopifyKeySpecifier | (() => undefined | checkoutRemovePromoCodeShopifyKeySpecifier),
		fields?: checkoutRemovePromoCodeShopifyFieldPolicy,
	}
};