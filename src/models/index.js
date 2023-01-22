// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, User, Ad, Image, WatchList, Conversation, Message, AdWatchLists } = initSchema(schema);

export {
  Category,
  User,
  Ad,
  Image,
  WatchList,
  Conversation,
  Message,
  AdWatchLists
};