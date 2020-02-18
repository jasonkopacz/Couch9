import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import BookingContainer from './booking_container';
import EditBookingContainer from './edit_booking_container';
import { fetchBookings } from '../../actions/booking_actions';

function Modal({modal, closeModal, currentUser, fetchBookings}) {
  const updateBookings = () => {
    fetchBookings(currentUser.id)
    closeModal()
  
  }
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'booking':
      component = <BookingContainer />;
      break;
    case 'edit_booking':
      component = <EditBookingContainer />;
    break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={ component.type.WrappedComponent.name === "EditBooking" ? updateBookings : closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchBookings: (id) => dispatch(fetchBookings(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
