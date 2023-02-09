/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  name: string;
  parent?: string | null;
  nodeID: number;
  path: string;
};

export type ModelCategoryConditionInput = {
  parent?: ModelStringInput | null;
  nodeID?: ModelIntInput | null;
  path?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Category = {
  __typename: 'Category';
  name: string;
  parent?: string | null;
  nodeID: number;
  path: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryInput = {
  name: string;
  parent?: string | null;
  nodeID?: number | null;
  path?: string | null;
};

export type DeleteCategoryInput = {
  name: string;
};

export type ModelCategoryFilterInput = {
  name?: ModelStringInput | null;
  parent?: ModelStringInput | null;
  nodeID?: ModelIntInput | null;
  path?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelCategoryConnection = {
  __typename: 'ModelCategoryConnection';
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type CreateCategoryMutation = {
  createCategory?: {
    __typename: 'Category';
    name: string;
    parent?: string | null;
    nodeID: number;
    path: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryMutation = {
  updateCategory?: {
    __typename: 'Category';
    name: string;
    parent?: string | null;
    nodeID: number;
    path: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type DeleteCategoryMutation = {
  deleteCategory?: {
    __typename: 'Category';
    name: string;
    parent?: string | null;
    nodeID: number;
    path: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetCategoryQueryVariables = {
  name: string;
};

export type GetCategoryQuery = {
  getCategory?: {
    __typename: 'Category';
    name: string;
    parent?: string | null;
    nodeID: number;
    path: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCategoriesQueryVariables = {
  name?: string | null;
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListCategoriesQuery = {
  listCategories?: {
    __typename: 'ModelCategoryConnection';
    items: Array<{
      __typename: 'Category';
      name: string;
      parent?: string | null;
      nodeID: number;
      path: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CategoriesByParentQueryVariables = {
  parent: string;
  name?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CategoriesByParentQuery = {
  categoriesByParent?: {
    __typename: 'ModelCategoryConnection';
    items: Array<{
      __typename: 'Category';
      name: string;
      parent?: string | null;
      nodeID: number;
      path: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CategoriesByNodeQueryVariables = {
  nodeID: number;
  name?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CategoriesByNodeQuery = {
  categoriesByNode?: {
    __typename: 'ModelCategoryConnection';
    items: Array<{
      __typename: 'Category';
      name: string;
      parent?: string | null;
      nodeID: number;
      path: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};
