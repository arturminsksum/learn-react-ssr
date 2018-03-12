import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Login from './login';

const initialState = {
  posts: [],
  admin: false,
  post: {},
};
const mockStore = configureStore();

describe('Login', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('should render two input field', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
});
