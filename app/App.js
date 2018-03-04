import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Sort from './components/sort';
import Footer from './components/footer';
import VisibleArticles from './containers/visible-articles';
import AddPost from './components/add-post';
import Login from './pages/login';

const App = () => (
  <Fragment>
    <Header />
    <div className="container">
      <br />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <Sort />
              <VisibleArticles />
            </div>
          )}
        />
        <Route path="/add" component={AddPost} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
      <br />
    </div>
    <Footer />
  </Fragment>
);

export default App;
