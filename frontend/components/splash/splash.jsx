import React from 'react';
import SplashHeader from './splash_header';
import SplashBody from './splash_body';
import SplashFooter from './splash_footer';
import {withRouter} from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return ( 
      <div>
        <SplashHeader />
        <SplashBody />
        <SplashFooter />
      </div>
    )
  }
}

export default withRouter(Splash);