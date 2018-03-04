import { connect } from 'react-redux';
import Articles from '../components/articles';
import { withRouter } from 'react-router-dom';
import { requestArticles } from '../actions';

const getVisibleArticles = (articles, sort) => {
  switch (sort) {
    case 'SHOW_ALL':
      return articles;
    case 'SHOW_THE_VERGE':
      return articles.filter(post => post.id === 'the-verge');
    case 'SHOW_THE_NEXT_WEB':
      return articles.filter(post => post.id === 'the-next-web');
    case 'SHOW_ABC_NEWS':
      return articles.filter(post => post.id === 'abc-news');
  }
};

const mapStateToProps = state => ({
  articles: getVisibleArticles(state.articles, state.sortArticles),
});

const mapDispatchToProps = {
  requestArticles,
};

const VisibleArticles = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Articles),
);

export default VisibleArticles;
