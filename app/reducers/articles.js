const article = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.post.id,
          source: action.post.source,
          author: action.post.author,
          title: action.post.title,
          description: action.post.description,
          url: action.post.url,
        },
      ];
    default:
      return state;
  }
};
export default article;
