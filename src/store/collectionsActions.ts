import { Collection } from './newCollectionReducers';

export const COLLECTION_READ = 'COLLECTION_READ';
export const COLLECTION_SAVE = 'COLLECTION_SAVE';
export const COLLECTION_EDIT = 'COLLECTION_EDIT';
export const COLLECTION_DELETE = 'COLLECTION_DELETE';

export const saveCollection = ({ collection }: Collection) => ({
  action: COLLECTION_SAVE,
  payload: { collection }
});

export const deleteCollection = ({ title }: { title: string }) => ({
  action: COLLECTION_DELETE,
  payload: { title }
});

export const editCollection = ({ collection }: Collection) => ({
  action: COLLECTION_EDIT,
  payload: { collection }
});
