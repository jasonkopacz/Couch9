import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import DashboardNav from './dashboard_nav';
import { clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { searchQuery } from '../../actions/spot_actions';

const mapStateToProps = ({ errors, entities, session }) => {
  const id = session.id;
  return {
    errors: errors.session,
    user: entities.users[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    searchQuery: (search) => dispatch(searchQuery(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);