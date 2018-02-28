import React, { Fragment } from 'react';
import Header from './components/header';
import Sort from './components/sort';
import Footer from './components/footer';
import VisibleArticles from './containers/visible-articles';

const App = () => (
  <Fragment>
    <Header />
    <Sort />
    <VisibleArticles />
    <Footer />
  </Fragment>
);

export default App;
