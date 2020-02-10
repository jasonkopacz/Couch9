import { connect } from 'react-redux';
import FromSurfer from './from_surfer';

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

export default connect(mapStateToProps, mapDispatchToProps)(FromSurfer);
