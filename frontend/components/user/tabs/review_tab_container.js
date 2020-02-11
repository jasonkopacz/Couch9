import { connect } from 'react-redux';
import ReviewTab from './review_tab';
import { fetchReviews } from '../../../actions/review_actions';
import { fetchBookings, fetchAllBookings } from '../../../actions/booking_actions';
import { requestUser, requestUsers } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    allUsers: state.entities.users,
    allBookings: state.entities.bookings,
    reviews_as_host: Object.values(state.entities.users[state.session.id].reviews_as_host),
    reviews_from_host: Object.values(state.entities.users[state.session.id].reviews_from_host),
    reviews_for_host: Object.values(state.entities.users[state.session.id].reviews_for_host),
    // reviews_from_surfer: state.entities.users[state.session.id].reviews_from_surfer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    fetchAllBookings: () => dispatch(fetchAllBookings()),
    fetchUsers: () => dispatch(requestUsers()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewTab);
