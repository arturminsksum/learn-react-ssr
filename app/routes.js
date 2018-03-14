import Main from './pages/main';
import AddPost from './pages/add-post';
import Login from './pages/login';
import Signup from './pages/signup';

export default [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/add',
    component: AddPost,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
];
