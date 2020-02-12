import { RECEIVE_CURRENT_SPOT, REQUEST_SPOT, GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/spot_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SPOT:
      return Object.assign({}, state, action.payload.spots);
    case REQUEST_SPOT:
      return Object.assign({}, state, {[action.spot.id]: action.spot});
      // case GET_SEARCH_RESULTS:
      //   return Object.assign({}, state, action.searchResults);
      // case CLEAR_SEARCH_RESULTS:
      //   return Object.assign({}, state);
    default:
      return state;
  }
};
