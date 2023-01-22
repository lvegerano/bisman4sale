import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentID?: string | null;
  readonly name: string;
  readonly parent?: Category | null;
  readonly subCategories?: (Category | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentID?: string | null;
  readonly name: string;
  readonly parent: AsyncItem<Category | undefined>;
  readonly subCategories: AsyncCollection<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email: string;
  readonly ads?: (Ad | null)[] | null;
  readonly watchList?: WatchList | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userWatchListId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email: string;
  readonly ads: AsyncCollection<Ad>;
  readonly watchList: AsyncItem<WatchList | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userWatchListId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly name: string;
  readonly description?: string | null;
  readonly condition?: string | null;
  readonly price?: string | null;
  readonly status?: string | null;
  readonly category: string;
  readonly images?: (Image | null)[] | null;
  readonly watchLists?: (AdWatchLists | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAdsId?: string | null;
}

type LazyAd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly name: string;
  readonly description?: string | null;
  readonly condition?: string | null;
  readonly price?: string | null;
  readonly status?: string | null;
  readonly category: string;
  readonly images: AsyncCollection<Image>;
  readonly watchLists: AsyncCollection<AdWatchLists>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAdsId?: string | null;
}

export declare type Ad = LazyLoading extends LazyLoadingDisabled ? EagerAd : LazyAd

export declare const Ad: (new (init: ModelInit<Ad>) => Ad) & {
  copyOf(source: Ad, mutator: (draft: MutableModel<Ad>) => MutableModel<Ad> | void): Ad;
}

type EagerImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly Ad?: Ad | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adImagesId?: string | null;
}

type LazyImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly Ad: AsyncItem<Ad | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adImagesId?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image) & {
  copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

type EagerWatchList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WatchList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly ads?: (AdWatchLists | null)[] | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWatchList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WatchList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly ads: AsyncCollection<AdWatchLists>;
  readonly user: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WatchList = LazyLoading extends LazyLoadingDisabled ? EagerWatchList : LazyWatchList

export declare const WatchList: (new (init: ModelInit<WatchList>) => WatchList) & {
  copyOf(source: WatchList, mutator: (draft: MutableModel<WatchList>) => MutableModel<WatchList> | void): WatchList;
}

type EagerConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly adID: string;
  readonly Ad?: Ad | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConversation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conversation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly adID: string;
  readonly Ad: AsyncItem<Ad | undefined>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conversation = LazyLoading extends LazyLoadingDisabled ? EagerConversation : LazyConversation

export declare const Conversation: (new (init: ModelInit<Conversation>) => Conversation) & {
  copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly conversationID: string;
  readonly fromUserID: string;
  readonly toUserID: string;
  readonly adID: string;
  readonly from?: User | null;
  readonly to?: User | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly conversationID: string;
  readonly fromUserID: string;
  readonly toUserID: string;
  readonly adID: string;
  readonly from: AsyncItem<User | undefined>;
  readonly to: AsyncItem<User | undefined>;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerAdWatchLists = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdWatchLists, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adId?: string | null;
  readonly watchListId?: string | null;
  readonly ad: Ad;
  readonly watchList: WatchList;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdWatchLists = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdWatchLists, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly adId?: string | null;
  readonly watchListId?: string | null;
  readonly ad: AsyncItem<Ad>;
  readonly watchList: AsyncItem<WatchList>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdWatchLists = LazyLoading extends LazyLoadingDisabled ? EagerAdWatchLists : LazyAdWatchLists

export declare const AdWatchLists: (new (init: ModelInit<AdWatchLists>) => AdWatchLists) & {
  copyOf(source: AdWatchLists, mutator: (draft: MutableModel<AdWatchLists>) => MutableModel<AdWatchLists> | void): AdWatchLists;
}