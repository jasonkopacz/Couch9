import * as APIUtil from '../util/user_util';
import {receiveCurrentUser, receiveErrors } from './session_actions';
export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';
export const GET_USER = 'GET_USER';
export const LOAD_USER = 'LOAD_USER';


export const requestUser = (id) => (dispatch) => {
  return APIUtil.fetchUser(id).then(user => {
    dispatch(getUser(user));
    return user;
  });
};

export const getUser = (user) => ({
  type: GET_USER,
  user
});

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

// export const loadUser = () => ({
//   type: LOAD_USER
// });
