import {
  ADD_WORD,
  REMOVE_WORD,
  UPDATE_WORD,
  ADD_TITLE,
  EDIT_TITLE
} from './actions';

const newCollection = {
  title: '',
  collection: []
};

function editCollection(state = newCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_WORD:
      return { title: state.title, collection: [...state.collection, payload] };
    case ADD_TITLE:
    case EDIT_TITLE:
      return { ...state, title: payload.title };
    case REMOVE_WORD:
      return {
        title: state.title,
        collection: [...state.collection.filter(item => item.id !== payload.id)]
      };
    case UPDATE_WORD:
      return {
        title: state.title,
        collection: [
          ...state.collection.map(item =>
            item.id === payload.id
              ? {
                  id: payload.id,
                  word: payload.word,
                  translation: payload.translation
                }
              : item
          )
        ]
      };
    default:
      return state;
  }
}
