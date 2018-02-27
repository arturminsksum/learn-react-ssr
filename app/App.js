import React, { Fragment } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import VisibleArticles from './containers/visible-articles';

const App = () => (
  <Fragment>
    <Header />
    <VisibleArticles />
    <Footer />
  </Fragment>
);

export default App;
