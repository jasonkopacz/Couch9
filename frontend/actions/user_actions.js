import * as APIUtil from '../util/user_util';
import {receiveCurrentUser, receiveErrors } from './session_actions';
export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';


export const editUser = (user) => {
  return {
    type: EDIT_CURRENT_USER,
    user
  };
};

export const edit = user => dispatch => {
  return APIUtil.edit(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};