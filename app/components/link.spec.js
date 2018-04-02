import React from 'react';
import Link from './link';

describe('Link', () => {
  it('should render clickable link', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render non-clickable link', () => {
    const wrapper = shallow(<Link active={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
