import { RECEIVE_CURRENT_REVIEW, RECEIVE_ALL_REVIEWS, RECEIVE_SINGLE_REVIEW } from '../actions/review_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_REVIEW:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.payload);
    case RECEIVE_SINGLE_REVIEW:
      return Object.assign({}, state, {[action.payload.id]: action.payload});
    default:
      return state;
  }
};
