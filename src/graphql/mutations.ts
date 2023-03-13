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
          adImagesId
        }
        nextToken
      }
      imageCount
      paidImages
      userID
      user {
        id
        cognitoID
        stripeCustomerID
        firstName
        lastName
        gender
        birthday
        phone
        address
        State
        City
        Zip
        pictureURL
        ads {
          nextToken
        }
        imagePacks {
          nextToken
        }
        createdAt
        updatedAt
      }
      expiration
      autoRelist
      scheduledRelist
      sold
      categoryID
      imagePackID
      createdAt
      updatedAt
      userAdsId
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
          adImagesId
        }
        nextToken
      }
      imageCount
      paidImages
      userID
      user {
        id
        cognitoID
        stripeCustomerID
        firstName
        lastName
        gender
        birthday
        phone
        address
        State
        City
        Zip
        pictureURL
        ads {
          nextToken
        }
        imagePacks {
          nextToken
        }
        createdAt
        updatedAt
      }
      expiration
      autoRelist
      scheduledRelist
      sold
      categoryID
      imagePackID
      createdAt
      updatedAt
      userAdsId
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
          adImagesId
        }
        nextToken
      }
      imageCount
      paidImages
      userID
      user {
        id
        cognitoID
        stripeCustomerID
        firstName
        lastName
        gender
        birthday
        phone
        address
        State
        City
        Zip
        pictureURL
        ads {
          nextToken
        }
        imagePacks {
          nextToken
        }
        createdAt
        updatedAt
      }
      expiration
      autoRelist
      scheduledRelist
      sold
      categoryID
      imagePackID
      createdAt
      updatedAt
      userAdsId
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
      adImagesId
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
      adImagesId
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
      adImagesId
    }
  }
`;
export const createImagePack = /* GraphQL */ `
  mutation CreateImagePack(
    $input: CreateImagePackInput!
    $condition: ModelImagePackConditionInput
  ) {
    createImagePack(input: $input, condition: $condition) {
      invoiceID
      used
      userID
      adID
      createdAt
      id
      updatedAt
      userImagePacksId
    }
  }
`;
export const updateImagePack = /* GraphQL */ `
  mutation UpdateImagePack(
    $input: UpdateImagePackInput!
    $condition: ModelImagePackConditionInput
  ) {
    updateImagePack(input: $input, condition: $condition) {
      invoiceID
      used
      userID
      adID
      createdAt
      id
      updatedAt
      userImagePacksId
    }
  }
`;
export const deleteImagePack = /* GraphQL */ `
  mutation DeleteImagePack(
    $input: DeleteImagePackInput!
    $condition: ModelImagePackConditionInput
  ) {
    deleteImagePack(input: $input, condition: $condition) {
      invoiceID
      used
      userID
      adID
      createdAt
      id
      updatedAt
      userImagePacksId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoID
      stripeCustomerID
      firstName
      lastName
      gender
      birthday
      phone
      address
      State
      City
      Zip
      pictureURL
      ads {
        items {
          id
          name
          description
          condition
          price
          status
          imageCount
          paidImages
          userID
          expiration
          autoRelist
          scheduledRelist
          sold
          categoryID
          imagePackID
          createdAt
          updatedAt
          userAdsId
        }
        nextToken
      }
      imagePacks {
        items {
          invoiceID
          used
          userID
          adID
          createdAt
          id
          updatedAt
          userImagePacksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoID
      stripeCustomerID
      firstName
      lastName
      gender
      birthday
      phone
      address
      State
      City
      Zip
      pictureURL
      ads {
        items {
          id
          name
          description
          condition
          price
          status
          imageCount
          paidImages
          userID
          expiration
          autoRelist
          scheduledRelist
          sold
          categoryID
          imagePackID
          createdAt
          updatedAt
          userAdsId
        }
        nextToken
      }
      imagePacks {
        items {
          invoiceID
          used
          userID
          adID
          createdAt
          id
          updatedAt
          userImagePacksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoID
      stripeCustomerID
      firstName
      lastName
      gender
      birthday
      phone
      address
      State
      City
      Zip
      pictureURL
      ads {
        items {
          id
          name
          description
          condition
          price
          status
          imageCount
          paidImages
          userID
          expiration
          autoRelist
          scheduledRelist
          sold
          categoryID
          imagePackID
          createdAt
          updatedAt
          userAdsId
        }
        nextToken
      }
      imagePacks {
        items {
          invoiceID
          used
          userID
          adID
          createdAt
          id
          updatedAt
          userImagePacksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
