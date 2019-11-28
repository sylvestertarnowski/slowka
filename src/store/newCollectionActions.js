export const WORD_ADD = 'WORD_ADD';
export const WORD_REMOVE = 'WORD_REMOVE';
export const WORD_UPDATE = 'WORD_UPDATE';
export const TITLE_ADD = 'TITLE_ADD';
export const TITLE_EDIT = 'TITLE_EDIT';

export const addWord = ({ word }) => ({
  type: WORD_ADD,
  payload: { word }
});

export const removeWord = ({ id }) => ({
  type: WORD_REMOVE,
  payload: { id }
});

export const updateWord = ({ id, word }) => ({
  type: WORD_UPDATE,
  payload: { word, id }
});

export const addTitle = ({ title }) => ({
  type: TITLE_ADD,
  payload: { title }
});

export const editTitle = ({ title }) => ({
  type: TITLE_EDIT,
  payload: { title }
});
