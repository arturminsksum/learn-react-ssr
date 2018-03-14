import React, { Component, Fragment } from 'react';

import Sort from '../components/sort';
import VisibleArticles from '../containers/visible-articles';

export default () => (
  <Fragment>
    <Sort />
    <VisibleArticles />
  </Fragment>
);
