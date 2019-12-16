import { RECEIVE_FORM_DATA } from '../actions/session_actions';

export default function formReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FORM_DATA:
      return Object.assign({}, state, {data: action.data});
    default:
      return state;
  }
}