import React, { Component } from 'react';

export default () => (
  <React.Fragment>
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
        </div>
      </div>
    </section>
  </React.Fragment>
);