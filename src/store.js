import { createStore } from 'redux';
import rootReducer from 'tags/reducers';

const store = createStore(
  rootReducer
);

export default store;