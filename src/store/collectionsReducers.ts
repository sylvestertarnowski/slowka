import { COLLECTION_SAVE } from './collectionsActions';
import { Collection } from './newCollectionReducers';

export const saveCollection = ({ collection }: Collection) => ({
  action: COLLECTION_SAVE,
  payload: { collection }
});
