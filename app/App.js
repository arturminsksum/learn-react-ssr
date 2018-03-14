import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import Header from './components/header';
import Footer from './components/footer';

import routes from './routes';

const App = () => (
  <Fragment>
    <Header />
    <div className="container">
      <br />
      <Switch>{renderRoutes(routes)}</Switch>
      <br />
    </div>
    <Footer />
  </Fragment>
);

export default App;
