import * as APIUtil from '../util/booking_util';
import { receiveErrors } from './spot_actions.js'
export const RECEIVE_CURRENT_BOOKING = 'RECEIVE_CURRENT_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_SINGLE_BOOKING = 'RECEIVE_SINGLE_BOOKING';

export const receiveCurrentBooking = payload => {
  return {
    type: RECEIVE_CURRENT_BOOKING,
    payload
  };
};

export const receiveAllBookings = payload => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    payload
  };
};

export const receiveSingleBooking = payload => {
  debugger
  return {
    type: RECEIVE_SINGLE_BOOKING,
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

export const update = booking => dispatch => {
  return APIUtil.update(booking).then(payload => {
    dispatch(receiveCurrentBooking(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
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

export const fetchSingleBooking = (user, id) => dispatch => {
  debugger
  return APIUtil.fetchSingleBooking(user, id).then(payload => {
    debugger
    dispatch(receiveSingleBooking(payload));
    return payload;
  },
  err => {
    debugger
    dispatch(receiveErrors(err.responseJSON))
  });
};