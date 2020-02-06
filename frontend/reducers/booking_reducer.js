import { RECEIVE_CURRENT_BOOKING, RECEIVE_ALL_BOOKINGS, RECEIVE_SINGLE_BOOKING } from '../actions/booking_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_BOOKING:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign({}, state, Object.values(action.payload));
    case RECEIVE_SINGLE_BOOKING:
      return Object.assign({}, state, {[action.payload.id]: action.payload});
    default:
      return state;
  }
};
