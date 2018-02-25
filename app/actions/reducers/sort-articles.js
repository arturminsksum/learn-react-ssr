const sortArticles = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_SORT_ARTICLES':
      return action.sort;
    default:
      return state;
  }
};
export default sortArticles;
