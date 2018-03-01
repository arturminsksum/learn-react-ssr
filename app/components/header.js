import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SortLink from '../containers/sort-link';
import { SortArticles } from '../actions';

export default () => (
  <Fragment>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item title" to="/">
          ArchiNews
        </Link>
      </div>
      <div className="navbar-menu">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/add">
          Add Post
        </Link>
      </div>
    </nav>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Choose your channel</h1>
          <h2 className="subtitle">All sources with English news</h2>
        </div>
      </div>
    </section>
  </Fragment>
);
