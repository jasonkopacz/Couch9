import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { create } from '../../actions/booking_actions';
import Booking from './booking';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    create: (booking) => dispatch(create(booking))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
