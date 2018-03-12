import React from 'react';
import Post from './post';

const mockPost = {
  id: 'abc-news',
  source: 'ABC News',
  author: 'ABC News',
  title: 'WATCH: What to know about the water challenge',
  description:
    "Dr. Jennifer Ashton kicks off a month-long 'Water Challenge' to look at how drinking more water can affect your health.",
  url: 'http://abcnews.go.com/GMA/video/water-challenge-52783678',
};

describe('Post', () => {
  const wrapper = mount(<Post item={mockPost} />);

  it('should render Post correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render post title', () => {
    expect(wrapper.find('.title').text()).toEqual(
      'WATCH: What to know about the water challenge',
    );
  });
});
