import sortArticles from './sort-articles';

describe('sort articles reducer', () => {
  test('Should return default state', () => {
    const defaultState = 'SHOW_ALL';
    const result = sortArticles(undefined, {});
    expect(result).toEqual(defaultState);
  });
});
