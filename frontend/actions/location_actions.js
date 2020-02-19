export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_SINGLE_LOCATION = 'RECEIVE_SINGLE_LOCATION';
import { receiveErrors } from './spot_actions'
import * as APIUtil from '../util/location_util';

export const searchQuery =  (search) => dispatch => {
    return APIUtil.getData(search).then(payload => {
      dispatch(getSearchResults(payload));
    },
      err => {
        // debugger
        dispatch(receiveErrors(err.responseJSON))
      }
      );
  };
  
  export const getSearchResults = (searchResults) => {
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

  export const receiveLocations = (payload) => {
    return {
      type: RECEIVE_LOCATIONS,
      payload
    }
  }

  export const fetchLocations = () => dispatch => {
    return APIUtil.fetchLocations().then(payload => {
      dispatch(receiveLocations(payload));
      return payload;
    },
    err => {
      dispatch(receiveErrors(err.responseJSON))
    });
  };

  export const fetchSingleLocation = (id) => dispatch => {
    return APIUtil.fetchSingleLocation(id).then(payload => {
      dispatch(receiveSingleLocation(payload));
      return payload;
    },
    err => {
      debugger
      dispatch(receiveErrors(err.responseJSON))
    });
  };

  export const receiveSingleLocation = (payload) => {
    return {
      type: RECEIVE_SINGLE_LOCATION,
      payload
    }
  }
