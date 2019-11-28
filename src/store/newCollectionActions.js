export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_REMOVE = 'ITEM_REMOVE';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const TITLE_ADD = 'TITLE_ADD';
export const TITLE_EDIT = 'TITLE_EDIT';

export const addItem = ({word, translation}) => ({
  type: ITEM_ADD,
  payload: {word, translation}
});

export const removeItem = ({ id }) => ({
  type: ITEM_REMOVE,
  payload: { id }
});

export const updateItem = ({ id, word, translation }) => ({
  type: ITEM_UPDATE,
  payload: { id, word, translation }
});

export const addTitle = ({ title }) => ({
  type: TITLE_ADD,
  payload: { title }
});

export const editTitle = ({ title }) => ({
  type: TITLE_EDIT,
  payload: { title }
});
