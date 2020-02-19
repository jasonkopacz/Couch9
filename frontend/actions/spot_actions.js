import * as APIUtil from '../util/spot_util';
export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const GET_SPOT = 'GET_SPOT';
export const REQUEST_SPOT = 'REQUEST_SPOT';
export const RECEIVE_UPDATED_SPOT = 'RECEIVE_UPDATED_SPOT';
export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';

export const receiveCurrentSpot = payload => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    payload
  };
};

export const receiveAllSpots = payload => {
  return {
    type: RECEIVE_ALL_SPOTS,
    payload
  };
};

export const fetchAllSpots = () => dispatch => {
  return APIUtil.fetchAllSpots().then(payload => {
    dispatch(receiveAllSpots(payload));
    return payload;
  },
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};


export const create = spot => dispatch => {
  return APIUtil.create(spot).then(payload => {
    dispatch(receiveCurrentSpot(payload));
    return payload;
  },
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const receiveUpdatedSpot = payload => {
  return {
    type: RECEIVE_UPDATED_SPOT,
    payload
  };
};

export const update = (id, data) => dispatch => {
  return APIUtil.update(id, data).then(payload => {
    dispatch(receiveUpdatedSpot(payload));
    return payload;
  },
    err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SPOT_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const requestSpot = (id) => (dispatch) => {
  return APIUtil.fetchSpot(id).then(spot => {
    dispatch(getSpot(spot));
    return spot.host_id;
  });
};

export const getSpot = (spot) => ({
  type: GET_SPOT,
  spot
});