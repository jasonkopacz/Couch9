import * as APIUtil from '../util/booking_util';
import { receiveErrors } from './spot_actions.js'
export const RECEIVE_CURRENT_BOOKING = 'RECEIVE_CURRENT_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';

export const receiveCurrentBooking = payload => {
  return {
    type: RECEIVE_CURRENT_BOOKING,
    payload
  };
};

export const create = booking => dispatch => {
  return APIUtil.create(booking).then(payload => {
    dispatch(receiveCurrentBooking(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
};
export const receiveAllBookings = payload => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    payload
  };
};

export const fetchBookings = (id) => dispatch => {
  return APIUtil.fetchBookings(id).then(payload => {
    dispatch(receiveAllBookings(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
};