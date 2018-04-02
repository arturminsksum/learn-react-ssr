import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Articles from './articles';

const mockStore = configureStore();

describe('Articles', () => {
  it('should render Articles correctly', () => {
    const store = mockStore({ articles: [] });
    const wrapper = shallow(
      <Provider store={store}>
        <Articles />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
