import { connect } from 'react-redux';
import SpotShow from './spot_show';

const mapStateToProps = (ownProps, state) => {
  debugger
  return {
    errors: ownProps.errors.session,
    users: ownProps.entities.users,
    currentUserId: ownProps.session.id,
    profileOwner: state.user
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default connect(mapStateToProps)(SpotShow);
