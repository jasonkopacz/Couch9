import * as APIUtil from '../util/spot_util';
export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';

export const receiveCurrentSpot = currentSpot => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    currentSpot
  };
};

export const create = spot => dispatch => {
  return APIUtil.create(spot).then(spot => (
    dispatch(receiveCurrentSpot(spot))
  )
  // err => (
    // dispatch(receiveErrors(err.responseJSON))
  // )
  );
};
