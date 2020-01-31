import { RECEIVE_CURRENT_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_BOOKING:
      return Object.assign({}, state, action.payload.bookings)
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign({}, state, Object.values(action.payload))
    default:
      return state;
  }
};
