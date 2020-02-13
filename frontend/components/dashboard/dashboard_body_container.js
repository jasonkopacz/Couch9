import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DashboardBody from './dashboard_body';
import { clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchBookings } from '../../actions/booking_actions';
import { searchQuery, fetchLocations } from '../../actions/location_actions';

const mapStateToProps = ({ session, entities: { users, bookings, locations }, errors }) => {
  return {
    errors: errors.session,
    currentUser: users[session.id],
    bookings: Object.values(bookings),
    locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    fetchBookings: (id) => dispatch(fetchBookings(id)),
    searchQuery: (search) => dispatch(searchQuery(search)),
    fetchLocations: () => dispatch(fetchLocations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBody);