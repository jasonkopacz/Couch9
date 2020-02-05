import * as APIUtil from '../util/spot_util';
export const RECEIVE_CURRENT_SPOT = 'RECEIVE_CURRENT_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const GET_SPOT = 'GET_SPOT';
export const REQUEST_SPOT = 'REQUEST_SPOT';
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const receiveCurrentSpot = payload => {
  return {
    type: RECEIVE_CURRENT_SPOT,
    payload
  };
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

export const searchQuery =  (search) => dispatch => {
  debugger
  return APIUtil.getData(search).then(payload => {
    debugger
    dispatch(getSearchResults(payload));
  },
    err => {
      dispatch(receiveErrors(err.responseJSON))
    }
    );
};

export const getSearchResults = (searchResults) => {
  debugger
  return {
    type: GET_SEARCH_RESULTS,
    searchResults
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};