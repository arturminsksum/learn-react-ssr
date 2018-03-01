import React, { Fragment } from 'react';
import Header from './components/header';
import Sort from './components/sort';
import Footer from './components/footer';
import VisibleArticles from './containers/visible-articles';
import AddPost from './components/add-post';

const App = () => (
  <Fragment>
    <Header />
    <Sort />
    <VisibleArticles />
    <AddPost />
    <Footer />
  </Fragment>
);

export default App;
