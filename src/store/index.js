import { createStore, combineReducers } from 'redux';
import { newCollection } from './newCollectionReducers';

const rootReducer = combineReducers({
  newCollection
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
