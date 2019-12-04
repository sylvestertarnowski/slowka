import { createStore, combineReducers } from 'redux';
import { newCollection, Collection } from './newCollectionReducers';

export interface GlobalStore {
  newCollection: Collection;
}

const rootReducer = combineReducers({
  newCollection
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
