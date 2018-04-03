import React, { Fragment } from 'react';
import SortLink from '../containers/sort-link';
import { SortArticles } from '../actions';

export default () => (
  <div className="tabs is-centered">
    <ul>
      <SortLink sort={SortArticles.SHOW_ALL}>{SortArticles.SHOW_ALL}</SortLink>
      <SortLink sort={SortArticles.SHOW_THE_VERGE}>
        {SortArticles.SHOW_THE_VERGE}
      </SortLink>
      <SortLink sort={SortArticles.SHOW_THE_NEXT_WEB}>
        {SortArticles.SHOW_THE_NEXT_WEB}
      </SortLink>
      <SortLink sort={SortArticles.SHOW_ABC_NEWS}>
        {SortArticles.SHOW_ABC_NEWS}
      </SortLink>
    </ul>
  </div>
);
