import React, { Component } from 'react';
import Post from './post';

export default class Articles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <section>
        {articles.map((post, index) => <Post item={post} key={index} />)}
      </section>
    );
  }
}
