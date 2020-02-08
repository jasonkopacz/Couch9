import { connect } from 'react-redux';
import { create, clearErrors } from '../../actions/spot_actions';
import CreateSpot from './create_spot';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    user: entities.users,
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (spot) => dispatch(create(spot)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpot);
