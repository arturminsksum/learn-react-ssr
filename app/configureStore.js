import { createStore } from 'redux';
import articlesApp from './reducers';

export default initialState => {
  const store = createStore(articlesApp, initialState);
  return store;
};
