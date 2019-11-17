export const ADD_WORD = 'ADD_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const UPDATE_WORD = 'UPDATE_WORD';
export const ADD_TITLE = 'ADD_TITLE';
export const EDIT_TITLE = 'EDIT_TITLE';

export const CollectionActions = {
  READ_COLLECTION: 'READ_COLLECTION',
  SAVE_COLLECTION: 'SAVE_COLLECTION',
  EDIT_COLLECTION: 'EDIT_COLLECTION',
  DELETE_COLLECTION: 'DELETE_COLLECTION'
};

export const addWord = word => {
  return {
    type: ADD_WORD,
    payload: { word }
  };
};

export const removeWord = id => {
  return {
    type: REMOVE_WORD,
    payload: { id }
  };
};

export const updateWord = ({ id, word }) => {
  return {
    type: UPDATE_WORD,
    payload: { word, id }
  };
};
