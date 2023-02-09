/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($name: String!) {
    getCategory(name: $name) {
      name
      parent
      nodeID
      path
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $name: String
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        parent
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoriesByParent = /* GraphQL */ `
  query CategoriesByParent(
    $parent: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByParent(
      parent: $parent
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        parent
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const categoriesByNode = /* GraphQL */ `
  query CategoriesByNode(
    $nodeID: Int!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByNode(
      nodeID: $nodeID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        parent
        nodeID
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
