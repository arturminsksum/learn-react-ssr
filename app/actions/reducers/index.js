import { combineReducers } from 'redux';
import articles from './articles';
import sortArticles from './sortArticles';
const todoApp = combineReducers({
  articles,
  sortArticles,
});
export default articlesApp;
