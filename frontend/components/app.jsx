import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import CreateFormContainer from './create_account/create_form_container';
import { Route } from 'react-router-dom';
import DashboardBodyContainer from './dashboard/dashboard_body_container';
import SessionFormContainer from './session_form/session_form_container';
import Profile from './user/profile';
import CreateSpotContainer from './spot/create_spot_container';
import SpotShowContainer from './spot/spot_show_container';
import ProfileShowContainer from './user/profile_show_container';
import EditSpotContainer from './spot/edit_spot_container';
import spot_search_index_container from './spot/spot_search_index_container';
import trip_index_container from './trip/trip_index_container';
import DashboardNavContainer from './nav/dashboard_nav_container';
import Footer from './nav/footer';

const App = () => {


  return (
    <>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer}/>
        <AuthRoute exact path="/login" component={SessionFormContainer}/>
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <Route exact path="/create" component={CreateFormContainer}/>
        <Route path="/" component={DashboardNavContainer} />
      </Switch>
      <ProtectedRoute exact path="/api/users" component={Profile}/>
      <ProtectedRoute path="/dashboard" component={DashboardBodyContainer}/>
      <Route exact path="/api/users/:user_id" component={ProfileShowContainer}/>
      <ProtectedRoute exact path="/spots/new" component={CreateSpotContainer}/>
      <ProtectedRoute exact path="/spots/edit" component={EditSpotContainer}/>
      {/* <Route exact path="/spots/:spot_id" component={SpotShowContainer}/> */}
      <ProtectedRoute exact path="/api/bookings" component={trip_index_container} />
      <ProtectedRoute exact path="/api/spots/search/" component={spot_search_index_container} />
      <Route path="/" component={Footer} />
    </>

)};

export default App;