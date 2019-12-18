import { connect } from 'react-redux';
import { create, clearErrors } from '../../actions/spot_actions';
import CreateSpot from './create_spot';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    user: entities.users,
    currentUserId: store.getState().session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (spot) => dispatch(create(spot)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpot);
