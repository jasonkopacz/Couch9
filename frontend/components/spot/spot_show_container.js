import { connect } from 'react-redux';
import SpotShow from './spot_show';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    user: entities.users,
    currentUserId: store.getState().session.id
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

export default connect(mapStateToProps)(SpotShow);
