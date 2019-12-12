import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import {openModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {

  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
