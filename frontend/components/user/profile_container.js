import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import ProfileBody from './profile_body';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => {

  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    requestUser: (id) => dispatch(requestUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBody);
