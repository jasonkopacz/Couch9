import { connect } from 'react-redux';
import { signup, login, receiveFormData} from '../../actions/session_actions';
import SessionForm from './session_form';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    getData: (data) => dispatch(receiveFormData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
