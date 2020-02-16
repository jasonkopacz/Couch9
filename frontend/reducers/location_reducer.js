import { GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, RECEIVE_LOCATIONS } from '../actions/location_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
      case GET_SEARCH_RESULTS:
        debugger
        return Object.assign({}, state, { searchResult: action.searchResults[1] })
      case CLEAR_SEARCH_RESULTS:
        return Object.assign({}, state);
      case RECEIVE_LOCATIONS:
        return Object.assign({}, state, action.payload)
    default:
      return state;
  }
};
