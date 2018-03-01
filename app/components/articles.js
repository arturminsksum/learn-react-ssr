import React from 'react';
import Post from './post';

export default ({ articles }) => (
  <section className="container">
    {articles.map((post, index) => <Post item={post} key={index} />)}
    <br />
  </section>
);