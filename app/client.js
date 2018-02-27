import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import articlesApp from './reducers';
import App from './App';

let store = createStore(articlesApp);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
