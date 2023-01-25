/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      parentID
      nodeID
      path
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $id: ID
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        parentID
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoriesByParentIDAndId = /* GraphQL */ `
  query CategoriesByParentIDAndId(
    $parentID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByParentIDAndId(
      parentID: $parentID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        parentID
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoriesByNodeIDAndId = /* GraphQL */ `
  query CategoriesByNodeIDAndId(
    $nodeID: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByNodeIDAndId(
      nodeID: $nodeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        parentID
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
