/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($name: String!) {
    getCategory(name: $name) {
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
