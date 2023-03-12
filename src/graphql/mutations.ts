/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompCategory = /* GraphQL */ `
  mutation CreateCompCategory(
    $input: CreateCompCategoryInput!
    $condition: ModelCompCategoryConditionInput
  ) {
    createCompCategory(input: $input, condition: $condition) {
      id
      name
      parent
      createdAt
      updatedAt
    }
  }
`;
export const updateCompCategory = /* GraphQL */ `
  mutation UpdateCompCategory(
    $input: UpdateCompCategoryInput!
    $condition: ModelCompCategoryConditionInput
  ) {
    updateCompCategory(input: $input, condition: $condition) {
      id
      name
      parent
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompCategory = /* GraphQL */ `
  mutation DeleteCompCategory(
    $input: DeleteCompCategoryInput!
    $condition: ModelCompCategoryConditionInput
  ) {
    deleteCompCategory(input: $input, condition: $condition) {
      id
      name
      parent
      createdAt
      updatedAt
    }
  }
`;
export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
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
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
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
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      adID
      url
      sort
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      adID
      url
      sort
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      adID
      url
      sort
      createdAt
      updatedAt
    }
  }
`;
