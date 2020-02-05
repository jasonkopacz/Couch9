import React from 'react';
import Footer from '../nav/footer';
import ProfileContainer from './profile_container';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {


  render() {
    return (
      <main>
        <ProfileContainer />
      </main>
    )
  }
}

export default withRouter(Profile);