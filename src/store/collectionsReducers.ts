import {
  COLLECTION_SAVE,
  COLLECTION_DELETE,
  COLLECTION_EDIT
} from './collectionsActions';
import { Collection, MyAction } from './newCollectionReducers';
import collectionsMock from './collectionsMock';

const colelctionsInitialState: Collection[] = collectionsMock;

export function collections(
  state = colelctionsInitialState,
  action: MyAction<any>
) {
  const { type, payload } = action;
  switch (type) {
    case COLLECTION_SAVE:
      return [...state, payload.collection];
    case COLLECTION_DELETE:
      return state.filter(item => item.title !== payload.title);
    case COLLECTION_EDIT:
      return state.map(item => (item.title === payload.title ? payload : item));
    default:
      return state;
  }
}
