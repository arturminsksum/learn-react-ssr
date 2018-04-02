import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';

const mockStore = configureStore();

describe('Header', () => {
  it('should render Header correctly for unlogged user', () => {
    const store = mockStore({ logged: false });
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Header correctly for logged user', () => {
    const store = mockStore({ logged: true });
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
