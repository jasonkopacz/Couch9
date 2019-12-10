import { combineReducers } from 'redux';
import session from './session_reducer';
import user from './users_reducer';
import errors from './errors_reducer';
const rootReducer = combineReducers({
    session,
    user,
    errors
  });

export default rootReducer;