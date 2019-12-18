import { connect } from 'react-redux';
import { requestSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    user: entities.users,
    currentUserId: store.getState().session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSpot: () => dispatch(requestSpot(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);
