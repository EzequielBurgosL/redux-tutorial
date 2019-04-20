// combine reducers -> create store
import rootReducer from './reducers';
import { createStore } from 'redux';

// https://github.com/zalmoxisus/redux-devtools-extension#installation

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;