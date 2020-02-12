export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
import { receiveErrors } from './spot_actions'
import * as APIUtil from '../util/location_util';

export const searchQuery =  (search) => dispatch => {
    return APIUtil.getData(search).then(payload => {
      dispatch(getSearchResults(payload));
    },
      err => {
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