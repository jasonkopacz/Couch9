import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { GET_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_SPOT } from '../actions/spot_actions';
import { RECEIVE_CURRENT_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';
import { RECEIVE_ALL_REVIEWS } from '../actions/review_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case GET_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_SPOT:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
};
