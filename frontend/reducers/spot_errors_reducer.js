import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import { RECEIVE_SPOT_ERRORS, CLEAR_ERRORS } from '../actions/spot_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
