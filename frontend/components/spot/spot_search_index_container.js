import { connect } from 'react-redux';
import SpotSearchIndex from './spot_search_index';

const mapStateToProps = (ownProps, state) => {
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

export default connect(mapStateToProps)(SpotSearchIndex);
