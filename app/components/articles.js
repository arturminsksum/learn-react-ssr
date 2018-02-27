import React from 'react';
import Post from './post';

export default ({ articles }) => (
  <section>
    {articles.map((post, index) => <Post item={post} key={index} />)}
  </section>
);
