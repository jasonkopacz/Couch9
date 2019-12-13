import { connect } from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import Splash from './splash';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    // navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
