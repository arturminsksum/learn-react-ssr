import { connect } from 'react-redux';
import { setSortArticles } from '../actions';
import Link from '../components/link';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.sort === state.sortArticles,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortArticles(ownProps.sort));
    },
  };
};
const SortLink = withRouter(connect(mapStateToProps, mapDispatchToProps)(Link));
export default SortLink;
