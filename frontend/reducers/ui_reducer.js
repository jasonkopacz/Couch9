import { combineReducers } from 'redux';

import modal from './modal_reducer';
import forms from './form_reducer';

export default combineReducers({
  modal,
  forms
});
