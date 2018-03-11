import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { handleLogout } from '../actions';

let Header = ({ logged, handleLogout, history }) => (
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
        {logged ? (
          ``
        ) : (
          <Fragment>
            <Link className="navbar-item" to="/login">
              LogIn
            </Link>
            <Link className="navbar-item" to="/signup">
              SignUp
            </Link>
          </Fragment>
        )}
      </div>
      {logged ? (
        <div className="navbar-end">
          <div className="navbar-item">
            <button
              className=" button is-light"
              onClick={() => handleLogout(history)}
            >
              LogOut
            </button>
          </div>
        </div>
      ) : (
        ``
      )}
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

const mapStateToProps = state => ({
  logged: state.logged,
});

const mapDispatchToProps = {
  handleLogout,
};

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export default Header;
