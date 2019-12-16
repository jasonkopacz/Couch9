import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DashboardBody from './dashboard_body';
import { clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    errors: errors.session,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBody);