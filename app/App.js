import React, { Fragment } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Sort from './components/sort';
import Footer from './components/footer';
import VisibleArticles from './containers/visible-articles';
import AddPost from './components/add-post';

const App = () => (
  <Fragment>
    <Header />
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
      <Redirect to="/" />
    </Switch>
    <Footer />
  </Fragment>
);

export default App;
