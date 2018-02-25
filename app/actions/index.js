export const addPost = post => ({
  type: 'ADD_POST',
  post,
});

export const setSortArticles = sort => ({
  type: 'SET_SORT_ARTICLES',
  sort,
});

export const SortArticles = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_THE_VERGE: 'SHOW_THE_VERGE',
  SHOW_THE_NEXT_WEB: 'SHOW_THE_NEXT_WEB',
  SHOW_ABC_NEWS: 'SHOW_ABC_NEWS',
};
