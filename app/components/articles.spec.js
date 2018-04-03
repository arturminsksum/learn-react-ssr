import React from 'react';

import Articles from './articles';
import articles from '../state.json';
import { requestArticles } from '../actions';

describe('Articles', () => {
  it('should render Articles correctly', () => {
    const wrapper = mount(
      <Articles articles={articles} requestArticles={requestArticles} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
