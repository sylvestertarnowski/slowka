export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_REMOVE = 'ITEM_REMOVE';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const TITLE_ADD = 'TITLE_ADD';
export const TITLE_EDIT = 'TITLE_EDIT';

export const addWord = ({ item }) => ({
  type: ITEM_ADD,
  payload: { item }
});

export const removeWord = ({ id }) => ({
  type: ITEM_REMOVE,
  payload: { id }
});

export const updateWord = ({ id, item }) => ({
  type: ITEM_UPDATE,
  payload: { item, id }
});

export const addTitle = ({ title }) => ({
  type: TITLE_ADD,
  payload: { title }
});

export const editTitle = ({ title }) => ({
  type: TITLE_EDIT,
  payload: { title }
});
