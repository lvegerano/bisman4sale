/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
      id
      name
      adID
      Ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      messages {
        items {
          id
          message
          conversationID
          fromUserID
          toUserID
          adID
          from {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          to {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
      id
      name
      adID
      Ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      messages {
        items {
          id
          message
          conversationID
          fromUserID
          toUserID
          adID
          from {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          to {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
      id
      name
      adID
      Ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      messages {
        items {
          id
          message
          conversationID
          fromUserID
          toUserID
          adID
          from {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          to {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      message
      conversationID
      fromUserID
      toUserID
      adID
      from {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      to {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      message
      conversationID
      fromUserID
      toUserID
      adID
      from {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      to {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      message
      conversationID
      fromUserID
      toUserID
      adID
      from {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      to {
        name
        email
        ads {
          items {
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            name
            description
            condition
            price
            status
            category
            images {
              items {
                description
                Ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                id
                createdAt
                updatedAt
                adImagesId
              }
              nextToken
            }
            watchLists {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            id
            createdAt
            updatedAt
            userAdsId
          }
          nextToken
        }
        watchList {
          id
          userID
          ads {
            items {
              id
              watchListId
              adId
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              ad {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            name
            email
            ads {
              items {
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                name
                description
                condition
                price
                status
                category
                images {
                  items {
                    description
                    Ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    id
                    createdAt
                    updatedAt
                    adImagesId
                  }
                  nextToken
                }
                watchLists {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                id
                createdAt
                updatedAt
                userAdsId
              }
              nextToken
            }
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            userWatchListId
          }
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userWatchListId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAdWatchLists = /* GraphQL */ `
  subscription OnCreateAdWatchLists(
    $filter: ModelSubscriptionAdWatchListsFilterInput
  ) {
    onCreateAdWatchLists(filter: $filter) {
      id
      watchListId
      adId
      watchList {
        id
        userID
        ads {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        createdAt
        updatedAt
      }
      ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdWatchLists = /* GraphQL */ `
  subscription OnUpdateAdWatchLists(
    $filter: ModelSubscriptionAdWatchListsFilterInput
  ) {
    onUpdateAdWatchLists(filter: $filter) {
      id
      watchListId
      adId
      watchList {
        id
        userID
        ads {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        createdAt
        updatedAt
      }
      ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdWatchLists = /* GraphQL */ `
  subscription OnDeleteAdWatchLists(
    $filter: ModelSubscriptionAdWatchListsFilterInput
  ) {
    onDeleteAdWatchLists(filter: $filter) {
      id
      watchListId
      adId
      watchList {
        id
        userID
        ads {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        createdAt
        updatedAt
      }
      ad {
        user {
          name
          email
          ads {
            items {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            nextToken
          }
          watchList {
            id
            userID
            ads {
              items {
                id
                watchListId
                adId
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                ad {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              name
              email
              ads {
                items {
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  name
                  description
                  condition
                  price
                  status
                  category
                  images {
                    items {
                      description
                      Ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      id
                      createdAt
                      updatedAt
                      adImagesId
                    }
                    nextToken
                  }
                  watchLists {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  id
                  createdAt
                  updatedAt
                  userAdsId
                }
                nextToken
              }
              watchList {
                id
                userID
                ads {
                  items {
                    id
                    watchListId
                    adId
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    ad {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                user {
                  name
                  email
                  ads {
                    items {
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      name
                      description
                      condition
                      price
                      status
                      category
                      images {
                        nextToken
                      }
                      watchLists {
                        nextToken
                      }
                      id
                      createdAt
                      updatedAt
                      userAdsId
                    }
                    nextToken
                  }
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  id
                  createdAt
                  updatedAt
                  userWatchListId
                }
                createdAt
                updatedAt
              }
              id
              createdAt
              updatedAt
              userWatchListId
            }
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          userWatchListId
        }
        name
        description
        condition
        price
        status
        category
        images {
          items {
            description
            Ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            id
            createdAt
            updatedAt
            adImagesId
          }
          nextToken
        }
        watchLists {
          items {
            id
            watchListId
            adId
            watchList {
              id
              userID
              ads {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              createdAt
              updatedAt
            }
            ad {
              user {
                name
                email
                ads {
                  items {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  nextToken
                }
                watchList {
                  id
                  userID
                  ads {
                    items {
                      id
                      watchListId
                      adId
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      ad {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      createdAt
                      updatedAt
                    }
                    nextToken
                  }
                  user {
                    name
                    email
                    ads {
                      items {
                        name
                        description
                        condition
                        price
                        status
                        category
                        id
                        createdAt
                        updatedAt
                        userAdsId
                      }
                      nextToken
                    }
                    watchList {
                      id
                      userID
                      ads {
                        nextToken
                      }
                      user {
                        name
                        email
                        id
                        createdAt
                        updatedAt
                        userWatchListId
                      }
                      createdAt
                      updatedAt
                    }
                    id
                    createdAt
                    updatedAt
                    userWatchListId
                  }
                  createdAt
                  updatedAt
                }
                id
                createdAt
                updatedAt
                userWatchListId
              }
              name
              description
              condition
              price
              status
              category
              images {
                items {
                  description
                  Ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  id
                  createdAt
                  updatedAt
                  adImagesId
                }
                nextToken
              }
              watchLists {
                items {
                  id
                  watchListId
                  adId
                  watchList {
                    id
                    userID
                    ads {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    createdAt
                    updatedAt
                  }
                  ad {
                    user {
                      name
                      email
                      ads {
                        nextToken
                      }
                      watchList {
                        id
                        userID
                        createdAt
                        updatedAt
                      }
                      id
                      createdAt
                      updatedAt
                      userWatchListId
                    }
                    name
                    description
                    condition
                    price
                    status
                    category
                    images {
                      items {
                        description
                        id
                        createdAt
                        updatedAt
                        adImagesId
                      }
                      nextToken
                    }
                    watchLists {
                      items {
                        id
                        watchListId
                        adId
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    id
                    createdAt
                    updatedAt
                    userAdsId
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              id
              createdAt
              updatedAt
              userAdsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        id
        createdAt
        updatedAt
        userAdsId
      }
      createdAt
      updatedAt
    }
  }
`;
