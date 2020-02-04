import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { update } from '../../actions/booking_actions';
import EditBooking from './edit_booking';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    bookings: Object.values(entities.bookings)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    update: (booking) => dispatch(update(booking))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBooking);
