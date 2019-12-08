import { MyAction, CollectionItem } from './newCollectionReducers';

export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_REMOVE = 'ITEM_REMOVE';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const TITLE_ADD = 'TITLE_ADD';
export const TITLE_EDIT = 'TITLE_EDIT';

export const addItem = ({ id, word, translation }: CollectionItem) =>
  ({
    type: ITEM_ADD,
    payload: { id, word, translation }
  } as MyAction<CollectionItem>);

export const removeItem = (id: number) =>
  ({
    type: ITEM_REMOVE,
    payload: id
  } as MyAction<number>);

export const updateItem = ({ id, word, translation }: CollectionItem) =>
  ({
    type: ITEM_UPDATE,
    payload: { id, word, translation }
  } as MyAction<CollectionItem>);

export const addTitle = (title: string) =>
  ({
    type: TITLE_ADD,
    payload: title
  } as MyAction<string>);

export const editTitle = (title: string) =>
  ({
    type: TITLE_EDIT,
    payload: title
  } as MyAction<string>);
