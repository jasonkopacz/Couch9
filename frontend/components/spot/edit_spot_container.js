import { connect } from 'react-redux';
import { update, clearErrors, requestSpot } from '../../actions/spot_actions';
import EditSpot from './edit_spot';
// import { update } from '../../util/spot_util';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (id, data) => dispatch(update(id, data)),
    clearErrors: () => dispatch(clearErrors()),
    // requestSpot: (id) => dispatch(requestSpot(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSpot);
