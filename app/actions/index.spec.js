import {
  receiveArticles,
  SortArticles,
  setSortArticles,
  logIn,
  logOut,
  signUp,
} from './index';
import articles from '../state.json';

describe('receive articles action', () => {
  it('should pass currect action type and payload', () => {
    const action = receiveArticles(articles);
    expect(action.type).toBe('RECEIVE_ARTICLES');
    expect(action.articles).toBe(articles);
  });
});

describe('set sorting articles action', () => {
  it('should pass currect action type and payload', () => {
    const action = setSortArticles(SortArticles.SHOW_THE_VERGE);
    expect(action.type).toBe('SET_SORT_ARTICLES');
    expect(action.sort).toBe('SHOW_THE_VERGE');
  });
});

describe('logIn action', () => {
  it('should pass currect action type and payload', () => {
    const action = logIn(true);
    expect(action.type).toBe('LOG_IN');
    expect(action.login).toBe(true);
  });
});

describe('logOut action', () => {
  it('should pass currect action type and payload', () => {
    const action = logOut(false);
    expect(action.type).toBe('LOG_OUT');
    expect(action.logout).toBe(false);
  });
});

describe('signUp action', () => {
  it('should pass currect action type and payload', () => {
    const action = signUp(true);
    expect(action.type).toBe('SIGN_UP');
    expect(action.signup).toBe(true);
  });
});
