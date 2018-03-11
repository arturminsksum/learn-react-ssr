import { port } from '../../helpers';
const API = `http://localhost:${port}/api`;

// get articles from database
export const requestArticles = () => dispatch =>
  fetch(`${API}/articles`)
    .then(res => res.json())
    .then(articles => {
      dispatch(receiveArticles(articles));
    })
    .catch(error => console.error(error));

export const receiveArticles = articles => ({
  type: 'RECEIVE_ARTICLES',
  articles,
});

// send articles to database
export const sendPost = post =>
  fetch(`${API}/add`, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).catch(error => console.error(error));

// export const addPost = post => ({
//   type: 'ADD_POST',
//   post,
// });

// sort articles
export const SortArticles = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_THE_VERGE: 'SHOW_THE_VERGE',
  SHOW_THE_NEXT_WEB: 'SHOW_THE_NEXT_WEB',
  SHOW_ABC_NEWS: 'SHOW_ABC_NEWS',
};

export const setSortArticles = sort => ({
  type: 'SET_SORT_ARTICLES',
  sort,
});

// login and logout
export const logIn = login => ({
  type: 'LOG_IN',
  login,
});

export const logOut = logout => ({
  type: 'LOG_OUT',
  logout,
});

export const handleLogin = (formData, history) => dispatch => {
  fetch(`${API}/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) {
        return console.error(data.error);
      }
      dispatch(logIn(true));
      return history.push('/');
    })
    .catch(error => console.error(error));
};

export const handleLogout = history => dispatch => {
  fetch(`${API}/logout`, { method: 'GET', credentials: 'same-origin' }).then(
    () => {
      dispatch(logOut(true));
      return history.push('/');
    },
  );
};

//registration
export const signUp = signup => ({
  type: 'SIGN_UP',
  signup,
});

export const handleSignup = (formData, history) => dispatch => {
  fetch(`${API}/signup`, {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) {
        return console.error(data.error);
      }
      dispatch(signUp(true));
      return history.push('/');
    })
    .catch(error => console.error(error));
};
