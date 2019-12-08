import {
  ITEM_ADD,
  ITEM_REMOVE,
  ITEM_UPDATE,
  TITLE_ADD,
  TITLE_EDIT
} from './newCollectionActions';

export interface CollectionItem {
  id: number;
  word: string;
  translation: string;
}

export interface Collection {
  title: string;
  collection: CollectionItem[];
}

export interface MyAction<P> {
  type: string;
  payload: P;
}

export const collectionInitialState: Collection = {
  title: '',
  collection: []
};

export function newCollection(
  state = collectionInitialState,
  action: MyAction<CollectionItem | number | string>
) {
  const { type, payload } = action;
  switch (type) {
    case ITEM_ADD:
      const newItem = payload as CollectionItem;
      return { title: state.title, collection: [...state.collection, newItem] };
    case TITLE_ADD:
    case TITLE_EDIT:
      const newTitle = payload as string;
      return { ...state, title: newTitle };
    case ITEM_REMOVE:
      const itemId = payload as number;
      return {
        title: state.title,
        collection: [...state.collection.filter(item => item.id !== itemId)]
      };
    case ITEM_UPDATE:
      const updatedItem = payload as CollectionItem;
      return {
        title: state.title,
        collection: [
          ...state.collection.map(item =>
            item.id === updatedItem.id
              ? {
                  id: updatedItem.id,
                  word: updatedItem.word,
                  translation: updatedItem.translation
                }
              : item
          )
        ]
      };
    default:
      return state;
  }
}
