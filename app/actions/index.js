import { port } from '../../helpers';
const API = `http://localhost:${port}/api`;

export const sendPost = post => {
  fetch(`${API}/add`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).catch(error => console.log(error));
};

// export const addPost = post => ({
//   type: 'ADD_POST',
//   post,
// });

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

export const requestArticles = () => dispatch =>
  fetch(`${API}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch(receiveArticles(articles));
    })
    .catch(error => console.log(error));

export const receiveArticles = articles => ({
  type: 'RECEIVE_ARTICLES',
  articles,
});
