import defaultState from '../state.json';

const articles = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ARTICLES':
      return [...action.articles];
    // case 'ADD_POST':
    //   return [
    //     ...state,
    //     {
    //       id: action.post.id,
    //       source: action.post.source,
    //       author: action.post.author,
    //       title: action.post.title,
    //       description: action.post.description,
    //       url: action.post.url,
    //       publishedAt: action.post.publishedAt,
    //     },
    //   ];
    default:
      return state;
  }
};
export default articles;
