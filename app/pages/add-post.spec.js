import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AddPost from './add-post';
const mockStore = configureStore();
// import articles from '../state.json';
// import { requestArticles } from '../actions';

describe('AddPost', () => {
  it('should render AddPost correctly for unlogged user', () => {
    const store = mockStore({ logged: false });
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <AddPost />
        </Provider>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render AddPost correctly for logged user', () => {
    const store = mockStore({ logged: true });
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <AddPost />
        </Provider>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
