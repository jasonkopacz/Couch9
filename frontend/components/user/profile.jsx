import React from 'react';
import DashboardNav from '../dashboard/dashboard_nav_container';
import DashboardFooter from '../dashboard/dashboard_footer';
import ProfileContainer from './profile_container';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {


  render() {
    return (
      <main>
        <DashboardNav />
        <ProfileContainer />
      </main>
    )
  }
}

export default withRouter(Profile);