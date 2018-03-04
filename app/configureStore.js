import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import articlesApp from './reducers';

export default initialState => {
  const store = createStore(
    articlesApp,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return store;
};
