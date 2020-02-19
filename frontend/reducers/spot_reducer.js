import { RECEIVE_CURRENT_SPOT, REQUEST_SPOT, RECEIVE_UPDATED_SPOT, RECEIVE_ALL_SPOTS } from '../actions/spot_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SPOT:
      return Object.assign({}, state, action.payload.spots);
    case REQUEST_SPOT:
      return Object.assign({}, state, {[action.spot.id]: action.spot});
    case RECEIVE_UPDATED_SPOT:
      return Object.assign({}, state, action.payload.spot)
    case RECEIVE_ALL_SPOTS:
      debugger
      return Object.assign({}, state, { [action.payload.id]: action.payload[id] })
    default:
      return state;
  }
};
