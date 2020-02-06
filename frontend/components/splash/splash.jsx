import React from 'react';
import SplashHeader from './splash_header';
import SplashBody from './splash_body';
import {withRouter} from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return ( 
      <div>
        <SplashHeader />
        <SplashBody />
      </div>
    )
  }
}

export default withRouter(Splash);