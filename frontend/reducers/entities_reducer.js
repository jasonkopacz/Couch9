import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotReducer from './spot_reducer';
import bookingsReducer from './booking_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;