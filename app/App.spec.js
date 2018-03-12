import React from 'react';
import App from './App';

describe('App', () => {
  it('should render App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
