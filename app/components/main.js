import React, { Component, Fragment } from 'react';
import Post from './post';
import data from '../state.json';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: data,
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.articles.map((post, index) => (
          <Post item={post} key={index} />
        ))}
      </div>
    );
  }
}
