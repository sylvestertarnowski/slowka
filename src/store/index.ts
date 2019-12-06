import { createStore, combineReducers } from 'redux';
import { newCollection, Collection } from './newCollectionReducers';
import { collections } from './collectionsReducers';

export interface GlobalStore {
  newCollection: Collection;
  collections: Collection[];
}

const rootReducer = combineReducers({
  newCollection,
  collections,
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
