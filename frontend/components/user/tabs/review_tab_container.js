import { connect } from 'react-redux';
import ReviewTab from './review_tab';
import { fetchReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    allUsers: state.entities.users,
    reviews_as_host: state.entities.users[state.session.id].reviews_as_host,
    reviews_from_host: state.entities.users[state.session.id].reviews_from_host,
    reviews_for_host: state.entities.users[state.session.id].reviews_for_host,
    // reviews_from_surfer: state.entities.users[state.session.id].reviews_from_surfer
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewTab);
