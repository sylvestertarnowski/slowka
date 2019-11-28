import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_UPDATE,
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
    case ITEM_ADD:
      return { title: state.title, collection: [...state.collection, payload] };
    case TITLE_ADD:
    case TITLE_EDIT:
      return { ...state, title: payload.title };
    case ITEM_REMOVE:
      return {
        title: state.title,
        collection: [...state.collection.filter(item => item.id !== payload.id)]
      };
    case ITEM_UPDATE:
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
