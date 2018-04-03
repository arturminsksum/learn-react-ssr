import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Sort from './sort';

const mockStore = configureStore();

describe('Articles', () => {
  it('should render Articles correctly', () => {
    const store = mockStore({});
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Sort />
        </Provider>
      </BrowserRouter>,
    );
    expect(wrapper.find('li').length).toBe(4);
  });
});
