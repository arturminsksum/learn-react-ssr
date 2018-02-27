import { combineReducers } from 'redux';
import articles from './articles';
import sortArticles from './sort-articles';
const articlesApp = combineReducers({
  articles,
  sortArticles,
});
export default articlesApp;
