import { GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, RECEIVE_LOCATIONS, RECEIVE_SINGLE_LOCATION } from '../actions/location_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
      case GET_SEARCH_RESULTS:
        return Object.assign({}, state, { searchResult: Object.values(action.searchResults) })
      case CLEAR_SEARCH_RESULTS:
        return Object.assign({}, state);
      case RECEIVE_LOCATIONS:
        return Object.assign({}, state, action.payload)
      case RECEIVE_SINGLE_LOCATION:
        return Object.assign({}, state, { [Object.keys(action.payload)]: ((action.payload[Object.keys(action.payload)]))})
    default:
      return state;
  }
};
