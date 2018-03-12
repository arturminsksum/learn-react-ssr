import * as actions from './index';

describe('receive Articles', () => {
  it('should pass currect action type', () => {
    const receiveArticles = actions.receiveArticles();
    expect(receiveArticles.type).toBe('RECEIVE_ARTICLES');
  });
});
