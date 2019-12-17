import { connect } from 'react-redux';
import { create } from '../../actions/spot_actions';
import CreateSpot from './create_spot';
// import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    user: entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (spot) => dispatch(create(spot))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpot);
