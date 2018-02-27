import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import articlesApp from './reducers';
import App from './App';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
