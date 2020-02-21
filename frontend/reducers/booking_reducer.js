import { RECEIVE_CURRENT_BOOKING, RECEIVE_ALL_BOOKINGS, RECEIVE_SINGLE_BOOKING, RECEIVE_USERS_BOOKINGS, CLEAR_BOOKINGS } from '../actions/booking_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  const bookingItems = {};
  let bookings;
  switch (action.type) {
    case RECEIVE_CURRENT_BOOKING:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RECEIVE_ALL_BOOKINGS:
      bookings = Object.values(action.payload);
      bookings.forEach(booking => {
        bookingItems[booking.id] = booking
      })
      return Object.assign({}, state, bookingItems);
    case RECEIVE_SINGLE_BOOKING:
      return Object.assign({}, {[action.payload.id]: action.payload});
    case RECEIVE_USERS_BOOKINGS:
      bookings = Object.values(action.payload);
      bookings.forEach(booking => {
        bookingItems[booking.id] = booking
      })
      return Object.assign({}, state, bookingItems);
    case CLEAR_BOOKINGS:
      return {}
    default:
      return state;
  }
};
