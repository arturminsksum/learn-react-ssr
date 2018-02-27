import React, { Fragment } from 'react';
import SortLink from '../containers/sort-link';
import { SortArticles } from '../actions';

export default () => (
  <Fragment>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item title" href="/">
          ArchiNews
        </a>
      </div>
    </nav>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Choose your channel</h1>
          <h2 className="subtitle">All sources with English news</h2>
          <p>
            Show: <SortLink sort={SortArticles.SHOW_ALL}>All</SortLink>
            {', '}
            <SortLink sort={SortArticles.SHOW_THE_VERGE}>THE_VERGE</SortLink>
            {', '}
            <SortLink sort={SortArticles.SHOW_THE_NEXT_WEB}>
              THE_NEXT_WEB
            </SortLink>
            {', '}
            <SortLink sort={SortArticles.SHOW_ABC_NEWS}>ABC_NEWS</SortLink>
          </p>
        </div>
      </div>
    </section>
  </Fragment>
);
