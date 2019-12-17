import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotReducer from './spot_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotReducer
});

export default entitiesReducer;