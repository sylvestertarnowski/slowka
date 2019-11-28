import {
  WORD_ADD,
  WORD_REMOVE,
  WORD_UPDATE,
  TITLE_ADD,
  TITLE_EDIT,
} from './newCollectionActions';

const newCollectionShape = {
  title: '',
  collection: []
};

export function newCollection(state = newCollectionShape, action) {
  const { type, payload } = action;
  switch (type) {
    case WORD_ADD:
      return { title: state.title, collection: [...state.collection, payload] };
    case TITLE_ADD:
    case TITLE_EDIT:
      return { ...state, title: payload.title };
    case WORD_REMOVE:
      return {
        title: state.title,
        collection: [...state.collection.filter(item => item.id !== payload.id)]
      };
    case WORD_UPDATE:
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
