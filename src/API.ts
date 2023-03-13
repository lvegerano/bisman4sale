/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompCategoryInput = {
  id?: string | null,
  name: string,
  parent?: string | null,
};

export type ModelCompCategoryConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  and?: Array< ModelCompCategoryConditionInput | null > | null,
  or?: Array< ModelCompCategoryConditionInput | null > | null,
  not?: ModelCompCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CompCategory = {
  __typename: "CompCategory",
  id: string,
  name: string,
  parent?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompCategoryInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
};

export type DeleteCompCategoryInput = {
  id: string,
};

export type CreateAdInput = {
  id?: string | null,
  name: string,
  description: string,
  condition: string,
  price?: string | null,
  status?: string | null,
  imageCount?: number | null,
  paidImages?: boolean | null,
  userID: string,
  expiration: string,
  autoRelist?: boolean | null,
  scheduledRelist: number,
  sold?: boolean | null,
  categoryID: string,
  imagePackID?: string | null,
  createdAt?: string | null,
  userAdsId?: string | null,
};

export type ModelAdConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  price?: ModelStringInput | null,
  status?: ModelStringInput | null,
  imageCount?: ModelIntInput | null,
  paidImages?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  expiration?: ModelStringInput | null,
  autoRelist?: ModelBooleanInput | null,
  scheduledRelist?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  categoryID?: ModelIDInput | null,
  imagePackID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAdConditionInput | null > | null,
  or?: Array< ModelAdConditionInput | null > | null,
  not?: ModelAdConditionInput | null,
  userAdsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Ad = {
  __typename: "Ad",
  id: string,
  name: string,
  description: string,
  condition: string,
  price?: string | null,
  status?: string | null,
  images?: ModelImageConnection | null,
  imageCount?: number | null,
  paidImages?: boolean | null,
  userID: string,
  user?: User | null,
  expiration: string,
  autoRelist?: boolean | null,
  scheduledRelist: number,
  sold?: boolean | null,
  categoryID: string,
  imagePackID?: string | null,
  createdAt: string,
  updatedAt: string,
  userAdsId?: string | null,
};

export type ModelImageConnection = {
  __typename: "ModelImageConnection",
  items:  Array<Image | null >,
  nextToken?: string | null,
};

export type Image = {
  __typename: "Image",
  id: string,
  adID: string,
  url: string,
  sort: number,
  createdAt: string,
  updatedAt: string,
  adImagesId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoID: string,
  stripeCustomerID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  gender?: string | null,
  birthday?: string | null,
  phone?: string | null,
  address?: string | null,
  State?: string | null,
  City?: string | null,
  Zip?: string | null,
  pictureURL?: string | null,
  ads?: ModelAdConnection | null,
  imagePacks?: ModelImagePackConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAdConnection = {
  __typename: "ModelAdConnection",
  items:  Array<Ad | null >,
  nextToken?: string | null,
};

export type ModelImagePackConnection = {
  __typename: "ModelImagePackConnection",
  items:  Array<ImagePack | null >,
  nextToken?: string | null,
};

export type ImagePack = {
  __typename: "ImagePack",
  invoiceID?: string | null,
  used?: boolean | null,
  userID: string,
  adID?: string | null,
  createdAt: string,
  id: string,
  updatedAt: string,
  userImagePacksId?: string | null,
};

export type UpdateAdInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  condition?: string | null,
  price?: string | null,
  status?: string | null,
  imageCount?: number | null,
  paidImages?: boolean | null,
  userID?: string | null,
  expiration?: string | null,
  autoRelist?: boolean | null,
  scheduledRelist?: number | null,
  sold?: boolean | null,
  categoryID?: string | null,
  imagePackID?: string | null,
  createdAt?: string | null,
  userAdsId?: string | null,
};

export type DeleteAdInput = {
  id: string,
};

export type CreateImageInput = {
  id?: string | null,
  adID: string,
  url: string,
  sort: number,
  adImagesId?: string | null,
};

export type ModelImageConditionInput = {
  adID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
  adImagesId?: ModelIDInput | null,
};

export type UpdateImageInput = {
  id: string,
  adID?: string | null,
  url?: string | null,
  sort?: number | null,
  adImagesId?: string | null,
};

export type DeleteImageInput = {
  id: string,
};

export type CreateImagePackInput = {
  invoiceID?: string | null,
  used?: boolean | null,
  userID: string,
  adID?: string | null,
  createdAt?: string | null,
  id?: string | null,
  userImagePacksId?: string | null,
};

export type ModelImagePackConditionInput = {
  invoiceID?: ModelStringInput | null,
  used?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelImagePackConditionInput | null > | null,
  or?: Array< ModelImagePackConditionInput | null > | null,
  not?: ModelImagePackConditionInput | null,
  userImagePacksId?: ModelIDInput | null,
};

export type UpdateImagePackInput = {
  invoiceID?: string | null,
  used?: boolean | null,
  userID?: string | null,
  adID?: string | null,
  createdAt?: string | null,
  id: string,
  userImagePacksId?: string | null,
};

export type DeleteImagePackInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  cognitoID: string,
  stripeCustomerID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  gender?: string | null,
  birthday?: string | null,
  phone?: string | null,
  address?: string | null,
  State?: string | null,
  City?: string | null,
  Zip?: string | null,
  pictureURL?: string | null,
};

export type ModelUserConditionInput = {
  cognitoID?: ModelStringInput | null,
  stripeCustomerID?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  State?: ModelStringInput | null,
  City?: ModelStringInput | null,
  Zip?: ModelStringInput | null,
  pictureURL?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoID?: string | null,
  stripeCustomerID?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  gender?: string | null,
  birthday?: string | null,
  phone?: string | null,
  address?: string | null,
  State?: string | null,
  City?: string | null,
  Zip?: string | null,
  pictureURL?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type SearchableAdFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  condition?: SearchableStringFilterInput | null,
  price?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  imageCount?: SearchableIntFilterInput | null,
  paidImages?: SearchableBooleanFilterInput | null,
  userID?: SearchableIDFilterInput | null,
  expiration?: SearchableStringFilterInput | null,
  autoRelist?: SearchableBooleanFilterInput | null,
  scheduledRelist?: SearchableIntFilterInput | null,
  sold?: SearchableBooleanFilterInput | null,
  categoryID?: SearchableIDFilterInput | null,
  imagePackID?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userAdsId?: SearchableIDFilterInput | null,
  and?: Array< SearchableAdFilterInput | null > | null,
  or?: Array< SearchableAdFilterInput | null > | null,
  not?: SearchableAdFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableAdSortInput = {
  field?: SearchableAdSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableAdSortableFields {
  id = "id",
  name = "name",
  description = "description",
  condition = "condition",
  price = "price",
  status = "status",
  imageCount = "imageCount",
  paidImages = "paidImages",
  userID = "userID",
  expiration = "expiration",
  autoRelist = "autoRelist",
  scheduledRelist = "scheduledRelist",
  sold = "sold",
  categoryID = "categoryID",
  imagePackID = "imagePackID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userAdsId = "userAdsId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableAdAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableAdAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableAdAggregateField {
  id = "id",
  name = "name",
  description = "description",
  condition = "condition",
  price = "price",
  status = "status",
  imageCount = "imageCount",
  paidImages = "paidImages",
  userID = "userID",
  expiration = "expiration",
  autoRelist = "autoRelist",
  scheduledRelist = "scheduledRelist",
  sold = "sold",
  categoryID = "categoryID",
  imagePackID = "imagePackID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userAdsId = "userAdsId",
}


export type SearchableAdConnection = {
  __typename: "SearchableAdConnection",
  items:  Array<Ad | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelCompCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  and?: Array< ModelCompCategoryFilterInput | null > | null,
  or?: Array< ModelCompCategoryFilterInput | null > | null,
  not?: ModelCompCategoryFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompCategoryConnection = {
  __typename: "ModelCompCategoryConnection",
  items:  Array<CompCategory | null >,
  nextToken?: string | null,
};

export type ModelAdFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  price?: ModelStringInput | null,
  status?: ModelStringInput | null,
  imageCount?: ModelIntInput | null,
  paidImages?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  expiration?: ModelStringInput | null,
  autoRelist?: ModelBooleanInput | null,
  scheduledRelist?: ModelIntInput | null,
  sold?: ModelBooleanInput | null,
  categoryID?: ModelIDInput | null,
  imagePackID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAdFilterInput | null > | null,
  or?: Array< ModelAdFilterInput | null > | null,
  not?: ModelAdFilterInput | null,
  userAdsId?: ModelIDInput | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  url?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
  adImagesId?: ModelIDInput | null,
};

export type ModelImagePackFilterInput = {
  invoiceID?: ModelStringInput | null,
  used?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  adID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelImagePackFilterInput | null > | null,
  or?: Array< ModelImagePackFilterInput | null > | null,
  not?: ModelImagePackFilterInput | null,
  userImagePacksId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoID?: ModelStringInput | null,
  stripeCustomerID?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  State?: ModelStringInput | null,
  City?: ModelStringInput | null,
  Zip?: ModelStringInput | null,
  pictureURL?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateCompCategoryMutationVariables = {
  input: CreateCompCategoryInput,
  condition?: ModelCompCategoryConditionInput | null,
};

export type CreateCompCategoryMutation = {
  createCompCategory?:  {
    __typename: "CompCategory",
    id: string,
    name: string,
    parent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompCategoryMutationVariables = {
  input: UpdateCompCategoryInput,
  condition?: ModelCompCategoryConditionInput | null,
};

export type UpdateCompCategoryMutation = {
  updateCompCategory?:  {
    __typename: "CompCategory",
    id: string,
    name: string,
    parent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompCategoryMutationVariables = {
  input: DeleteCompCategoryInput,
  condition?: ModelCompCategoryConditionInput | null,
};

export type DeleteCompCategoryMutation = {
  deleteCompCategory?:  {
    __typename: "CompCategory",
    id: string,
    name: string,
    parent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdMutationVariables = {
  input: CreateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type CreateAdMutation = {
  createAd?:  {
    __typename: "Ad",
    id: string,
    name: string,
    description: string,
    condition: string,
    price?: string | null,
    status?: string | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        adID: string,
        url: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
        adImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageCount?: number | null,
    paidImages?: boolean | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      stripeCustomerID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      gender?: string | null,
      birthday?: string | null,
      phone?: string | null,
      address?: string | null,
      State?: string | null,
      City?: string | null,
      Zip?: string | null,
      pictureURL?: string | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      imagePacks?:  {
        __typename: "ModelImagePackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    expiration: string,
    autoRelist?: boolean | null,
    scheduledRelist: number,
    sold?: boolean | null,
    categoryID: string,
    imagePackID?: string | null,
    createdAt: string,
    updatedAt: string,
    userAdsId?: string | null,
  } | null,
};

export type UpdateAdMutationVariables = {
  input: UpdateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type UpdateAdMutation = {
  updateAd?:  {
    __typename: "Ad",
    id: string,
    name: string,
    description: string,
    condition: string,
    price?: string | null,
    status?: string | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        adID: string,
        url: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
        adImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageCount?: number | null,
    paidImages?: boolean | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      stripeCustomerID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      gender?: string | null,
      birthday?: string | null,
      phone?: string | null,
      address?: string | null,
      State?: string | null,
      City?: string | null,
      Zip?: string | null,
      pictureURL?: string | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      imagePacks?:  {
        __typename: "ModelImagePackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    expiration: string,
    autoRelist?: boolean | null,
    scheduledRelist: number,
    sold?: boolean | null,
    categoryID: string,
    imagePackID?: string | null,
    createdAt: string,
    updatedAt: string,
    userAdsId?: string | null,
  } | null,
};

export type DeleteAdMutationVariables = {
  input: DeleteAdInput,
  condition?: ModelAdConditionInput | null,
};

export type DeleteAdMutation = {
  deleteAd?:  {
    __typename: "Ad",
    id: string,
    name: string,
    description: string,
    condition: string,
    price?: string | null,
    status?: string | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        adID: string,
        url: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
        adImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageCount?: number | null,
    paidImages?: boolean | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      stripeCustomerID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      gender?: string | null,
      birthday?: string | null,
      phone?: string | null,
      address?: string | null,
      State?: string | null,
      City?: string | null,
      Zip?: string | null,
      pictureURL?: string | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      imagePacks?:  {
        __typename: "ModelImagePackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    expiration: string,
    autoRelist?: boolean | null,
    scheduledRelist: number,
    sold?: boolean | null,
    categoryID: string,
    imagePackID?: string | null,
    createdAt: string,
    updatedAt: string,
    userAdsId?: string | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage?:  {
    __typename: "Image",
    id: string,
    adID: string,
    url: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
    adImagesId?: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage?:  {
    __typename: "Image",
    id: string,
    adID: string,
    url: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
    adImagesId?: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage?:  {
    __typename: "Image",
    id: string,
    adID: string,
    url: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
    adImagesId?: string | null,
  } | null,
};

export type CreateImagePackMutationVariables = {
  input: CreateImagePackInput,
  condition?: ModelImagePackConditionInput | null,
};

export type CreateImagePackMutation = {
  createImagePack?:  {
    __typename: "ImagePack",
    invoiceID?: string | null,
    used?: boolean | null,
    userID: string,
    adID?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    userImagePacksId?: string | null,
  } | null,
};

export type UpdateImagePackMutationVariables = {
  input: UpdateImagePackInput,
  condition?: ModelImagePackConditionInput | null,
};

export type UpdateImagePackMutation = {
  updateImagePack?:  {
    __typename: "ImagePack",
    invoiceID?: string | null,
    used?: boolean | null,
    userID: string,
    adID?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    userImagePacksId?: string | null,
  } | null,
};

export type DeleteImagePackMutationVariables = {
  input: DeleteImagePackInput,
  condition?: ModelImagePackConditionInput | null,
};

export type DeleteImagePackMutation = {
  deleteImagePack?:  {
    __typename: "ImagePack",
    invoiceID?: string | null,
    used?: boolean | null,
    userID: string,
    adID?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    userImagePacksId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    stripeCustomerID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    gender?: string | null,
    birthday?: string | null,
    phone?: string | null,
    address?: string | null,
    State?: string | null,
    City?: string | null,
    Zip?: string | null,
    pictureURL?: string | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        name: string,
        description: string,
        condition: string,
        price?: string | null,
        status?: string | null,
        imageCount?: number | null,
        paidImages?: boolean | null,
        userID: string,
        expiration: string,
        autoRelist?: boolean | null,
        scheduledRelist: number,
        sold?: boolean | null,
        categoryID: string,
        imagePackID?: string | null,
        createdAt: string,
        updatedAt: string,
        userAdsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imagePacks?:  {
      __typename: "ModelImagePackConnection",
      items:  Array< {
        __typename: "ImagePack",
        invoiceID?: string | null,
        used?: boolean | null,
        userID: string,
        adID?: string | null,
        createdAt: string,
        id: string,
        updatedAt: string,
        userImagePacksId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    stripeCustomerID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    gender?: string | null,
    birthday?: string | null,
    phone?: string | null,
    address?: string | null,
    State?: string | null,
    City?: string | null,
    Zip?: string | null,
    pictureURL?: string | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        name: string,
        description: string,
        condition: string,
        price?: string | null,
        status?: string | null,
        imageCount?: number | null,
        paidImages?: boolean | null,
        userID: string,
        expiration: string,
        autoRelist?: boolean | null,
        scheduledRelist: number,
        sold?: boolean | null,
        categoryID: string,
        imagePackID?: string | null,
        createdAt: string,
        updatedAt: string,
        userAdsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imagePacks?:  {
      __typename: "ModelImagePackConnection",
      items:  Array< {
        __typename: "ImagePack",
        invoiceID?: string | null,
        used?: boolean | null,
        userID: string,
        adID?: string | null,
        createdAt: string,
        id: string,
        updatedAt: string,
        userImagePacksId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    stripeCustomerID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    gender?: string | null,
    birthday?: string | null,
    phone?: string | null,
    address?: string | null,
    State?: string | null,
    City?: string | null,
    Zip?: string | null,
    pictureURL?: string | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        name: string,
        description: string,
        condition: string,
        price?: string | null,
        status?: string | null,
        imageCount?: number | null,
        paidImages?: boolean | null,
        userID: string,
        expiration: string,
        autoRelist?: boolean | null,
        scheduledRelist: number,
        sold?: boolean | null,
        categoryID: string,
        imagePackID?: string | null,
        createdAt: string,
        updatedAt: string,
        userAdsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imagePacks?:  {
      __typename: "ModelImagePackConnection",
      items:  Array< {
        __typename: "ImagePack",
        invoiceID?: string | null,
        used?: boolean | null,
        userID: string,
        adID?: string | null,
        createdAt: string,
        id: string,
        updatedAt: string,
        userImagePacksId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchAdsQueryVariables = {
  filter?: SearchableAdFilterInput | null,
  sort?: Array< SearchableAdSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableAdAggregationInput | null > | null,
};

export type SearchAdsQuery = {
  searchAds?:  {
    __typename: "SearchableAdConnection",
    items:  Array< {
      __typename: "Ad",
      id: string,
      name: string,
      description: string,
      condition: string,
      price?: string | null,
      status?: string | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      imageCount?: number | null,
      paidImages?: boolean | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        cognitoID: string,
        stripeCustomerID?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        gender?: string | null,
        birthday?: string | null,
        phone?: string | null,
        address?: string | null,
        State?: string | null,
        City?: string | null,
        Zip?: string | null,
        pictureURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      expiration: string,
      autoRelist?: boolean | null,
      scheduledRelist: number,
      sold?: boolean | null,
      categoryID: string,
      imagePackID?: string | null,
      createdAt: string,
      updatedAt: string,
      userAdsId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetCompCategoryQueryVariables = {
  id: string,
};

export type GetCompCategoryQuery = {
  getCompCategory?:  {
    __typename: "CompCategory",
    id: string,
    name: string,
    parent?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompCategoriesQueryVariables = {
  id?: string | null,
  filter?: ModelCompCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompCategoriesQuery = {
  listCompCategories?:  {
    __typename: "ModelCompCategoryConnection",
    items:  Array< {
      __typename: "CompCategory",
      id: string,
      name: string,
      parent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdQueryVariables = {
  id: string,
};

export type GetAdQuery = {
  getAd?:  {
    __typename: "Ad",
    id: string,
    name: string,
    description: string,
    condition: string,
    price?: string | null,
    status?: string | null,
    images?:  {
      __typename: "ModelImageConnection",
      items:  Array< {
        __typename: "Image",
        id: string,
        adID: string,
        url: string,
        sort: number,
        createdAt: string,
        updatedAt: string,
        adImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageCount?: number | null,
    paidImages?: boolean | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      stripeCustomerID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      gender?: string | null,
      birthday?: string | null,
      phone?: string | null,
      address?: string | null,
      State?: string | null,
      City?: string | null,
      Zip?: string | null,
      pictureURL?: string | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      imagePacks?:  {
        __typename: "ModelImagePackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    expiration: string,
    autoRelist?: boolean | null,
    scheduledRelist: number,
    sold?: boolean | null,
    categoryID: string,
    imagePackID?: string | null,
    createdAt: string,
    updatedAt: string,
    userAdsId?: string | null,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds?:  {
    __typename: "ModelAdConnection",
    items:  Array< {
      __typename: "Ad",
      id: string,
      name: string,
      description: string,
      condition: string,
      price?: string | null,
      status?: string | null,
      images?:  {
        __typename: "ModelImageConnection",
        nextToken?: string | null,
      } | null,
      imageCount?: number | null,
      paidImages?: boolean | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        cognitoID: string,
        stripeCustomerID?: string | null,
        firstName?: string | null,
        lastName?: string | null,
        gender?: string | null,
        birthday?: string | null,
        phone?: string | null,
        address?: string | null,
        State?: string | null,
        City?: string | null,
        Zip?: string | null,
        pictureURL?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      expiration: string,
      autoRelist?: boolean | null,
      scheduledRelist: number,
      sold?: boolean | null,
      categoryID: string,
      imagePackID?: string | null,
      createdAt: string,
      updatedAt: string,
      userAdsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage?:  {
    __typename: "Image",
    id: string,
    adID: string,
    url: string,
    sort: number,
    createdAt: string,
    updatedAt: string,
    adImagesId?: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      adID: string,
      url: string,
      sort: number,
      createdAt: string,
      updatedAt: string,
      adImagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImagePackQueryVariables = {
  id: string,
};

export type GetImagePackQuery = {
  getImagePack?:  {
    __typename: "ImagePack",
    invoiceID?: string | null,
    used?: boolean | null,
    userID: string,
    adID?: string | null,
    createdAt: string,
    id: string,
    updatedAt: string,
    userImagePacksId?: string | null,
  } | null,
};

export type ListImagePacksQueryVariables = {
  filter?: ModelImagePackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagePacksQuery = {
  listImagePacks?:  {
    __typename: "ModelImagePackConnection",
    items:  Array< {
      __typename: "ImagePack",
      invoiceID?: string | null,
      used?: boolean | null,
      userID: string,
      adID?: string | null,
      createdAt: string,
      id: string,
      updatedAt: string,
      userImagePacksId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    stripeCustomerID?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    gender?: string | null,
    birthday?: string | null,
    phone?: string | null,
    address?: string | null,
    State?: string | null,
    City?: string | null,
    Zip?: string | null,
    pictureURL?: string | null,
    ads?:  {
      __typename: "ModelAdConnection",
      items:  Array< {
        __typename: "Ad",
        id: string,
        name: string,
        description: string,
        condition: string,
        price?: string | null,
        status?: string | null,
        imageCount?: number | null,
        paidImages?: boolean | null,
        userID: string,
        expiration: string,
        autoRelist?: boolean | null,
        scheduledRelist: number,
        sold?: boolean | null,
        categoryID: string,
        imagePackID?: string | null,
        createdAt: string,
        updatedAt: string,
        userAdsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imagePacks?:  {
      __typename: "ModelImagePackConnection",
      items:  Array< {
        __typename: "ImagePack",
        invoiceID?: string | null,
        used?: boolean | null,
        userID: string,
        adID?: string | null,
        createdAt: string,
        id: string,
        updatedAt: string,
        userImagePacksId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoID: string,
      stripeCustomerID?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      gender?: string | null,
      birthday?: string | null,
      phone?: string | null,
      address?: string | null,
      State?: string | null,
      City?: string | null,
      Zip?: string | null,
      pictureURL?: string | null,
      ads?:  {
        __typename: "ModelAdConnection",
        nextToken?: string | null,
      } | null,
      imagePacks?:  {
        __typename: "ModelImagePackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CategoriesByParentQueryVariables = {
  parent: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCompCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoriesByParentQuery = {
  categoriesByParent?:  {
    __typename: "ModelCompCategoryConnection",
    items:  Array< {
      __typename: "CompCategory",
      id: string,
      name: string,
      parent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
