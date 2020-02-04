import { connect } from 'react-redux';
import { clearErrors } from '../../actions/spot_actions';
import TripIndex from './trip_index';
import { openModal } from '../../actions/modal_actions';
import { fetchSingleBooking, fetchBookings } from '../../util/booking_util';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    currentUser: entities.users[session.id],
    bookings: Object.values(entities.bookings)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchBookings: (id) => dispatch(fetchBookings(id)),
    fetchSingleBooking: (user, id) => dispatch(fetchSingleBooking(user, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripIndex);
