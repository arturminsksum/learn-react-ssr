import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Signup from './signup';

const initialState = {
  posts: [],
  admin: false,
  post: {},
};
const mockStore = configureStore();

describe('Signup', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('renders a email input', () => {
    expect(wrapper.find('[label="Email"]').length).toEqual(1);
  });

  it('renders a password input', () => {
    expect(wrapper.find('[label="Password"]').length).toEqual(1);
  });
});
