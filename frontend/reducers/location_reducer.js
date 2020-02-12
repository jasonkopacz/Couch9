import { GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/location_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
      case GET_SEARCH_RESULTS:
        return Object.assign({}, state, action.searchResults);
      case CLEAR_SEARCH_RESULTS:
        return Object.assign({}, state);
    default:
      return state;
  }
};
