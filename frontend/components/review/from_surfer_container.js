import { connect } from 'react-redux';
import FromSurfer from './from_surfer';
import { fetchSingleBooking } from '../../actions/booking_actions';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    users: entities.users,
    currentUser: entities.users[session.id],
    // bookings: entities.bookings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleBooking: (userId, bookingId) => dispatch(fetchSingleBooking(userId, bookingId)),
    fetchAuthor: (id) => dispatch(requestUser(id)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FromSurfer);
