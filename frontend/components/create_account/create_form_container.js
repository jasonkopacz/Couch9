import { connect } from 'react-redux';
import { signup, login, receiveFormData } from '../../actions/session_actions';
import CreateForm from './create_form';
import { clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, ui }) => {
  return {
    errors: errors.session,
    formData: ui.forms.data 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)), 
    processForm: (user) => dispatch(signup(user)),
    otherForm: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    getForm: (data) => dispatch(receiveFormData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
