import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SplashHeader from './splash_header';
import { clearErrors } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    openModal: (modal) => dispatch(openModal(modal)), 
    processForm: (user) => dispatch(signup(user)),
    otherForm: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashHeader);