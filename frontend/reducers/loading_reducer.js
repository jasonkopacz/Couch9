import { LOAD_USER } from '../actions/user_actions';

const initialState = {
 userLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_USER:
      return Object.assign({}, state, { userLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
