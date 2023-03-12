/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchAds = /* GraphQL */ `
  query SearchAds(
    $filter: SearchableAdFilterInput
    $sort: [SearchableAdSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAdAggregationInput]
  ) {
    searchAds(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        description
        condition
        price
        status
        images {
          nextToken
        }
        imageCount
        paidImages
        userID
        expiration
        autoRelist
        scheduledRelist
        sold
        categoryID
        compCategory {
          id
          name
          parent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCompCategory = /* GraphQL */ `
  query GetCompCategory($id: ID!) {
    getCompCategory(id: $id) {
      id
      name
      parent
      createdAt
      updatedAt
    }
  }
`;
export const listCompCategories = /* GraphQL */ `
  query ListCompCategories(
    $id: ID
    $filter: ModelCompCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        parent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
      id
      name
      description
      condition
      price
      status
      images {
        items {
          id
          adID
          url
          sort
          createdAt
          updatedAt
        }
        nextToken
      }
      imageCount
      paidImages
      userID
      expiration
      autoRelist
      scheduledRelist
      sold
      categoryID
      compCategory {
        id
        name
        parent
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        condition
        price
        status
        images {
          nextToken
        }
        imageCount
        paidImages
        userID
        expiration
        autoRelist
        scheduledRelist
        sold
        categoryID
        compCategory {
          id
          name
          parent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      adID
      url
      sort
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adID
        url
        sort
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
    $filter: ModelCompCategoryFilterInput
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
        id
        name
        parent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const imagesByAdID = /* GraphQL */ `
  query ImagesByAdID(
    $adID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    imagesByAdID(
      adID: $adID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        adID
        url
        sort
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
