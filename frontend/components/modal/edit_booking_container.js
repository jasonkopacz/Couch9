import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { update, fetchBookings } from '../../actions/booking_actions';
import EditBooking from './edit_booking';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    currentUser: entities.users[session.id],
    booking: Object.values(entities.bookings)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    fetchBookings: (id) => dispatch(fetchBookings(id)),
    update: (booking) => dispatch(update(booking))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBooking);
