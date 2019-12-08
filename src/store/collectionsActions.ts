import { Collection, MyAction } from './newCollectionReducers';

export const COLLECTION_SAVE = 'COLLECTION_SAVE';
export const COLLECTION_EDIT = 'COLLECTION_EDIT';
export const COLLECTION_DELETE = 'COLLECTION_DELETE';
export const COLLECTION_SELECT = 'COLLECTION_SELECT';

export const saveCollection = (collection: Collection) =>
  ({
    type: COLLECTION_SAVE,
    payload: collection
  } as MyAction<Collection>);

export const deleteCollection = (title: string) =>
  ({
    type: COLLECTION_DELETE,
    payload: title
  } as MyAction<string>);

export const editCollection = (collection: Collection) =>
  ({
    type: COLLECTION_EDIT,
    payload: collection
  } as MyAction<Collection>);

export const selectCollection = (collection: Collection) =>
  ({
    type: COLLECTION_SELECT,
    payload: collection
  } as MyAction<Collection>);
