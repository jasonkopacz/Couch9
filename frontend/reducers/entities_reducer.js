import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotReducer from './spot_reducer';
import bookingsReducer from './booking_reducer';
import reviewReducer from "./review_reducer";
import locationReducer from "./location_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotReducer,
  bookings: bookingsReducer,
  reviews: reviewReducer,
  locations: locationReducer
});

export default entitiesReducer;