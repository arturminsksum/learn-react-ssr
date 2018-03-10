import { combineReducers } from 'redux';
import articles from './articles';
import sortArticles from './sort-articles';
import logged from './logged';
const articlesApp = combineReducers({
  articles,
  sortArticles,
  logged,
});
export default articlesApp;
