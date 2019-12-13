import React from 'react';
import { Link } from 'react-router-dom';

class SplashFooter extends React.Component {

  render() {
    return (
      <footer className="main-footer">
        <h3>Jason Kopacz</h3>
        <div className="footer-icons">
          <Link to="https://github.com/Alaizard/Couch9">
            <img src={window.gh} />
          </Link>
          <Link to="https://couch9.herokuapp.com/">
            <img src={window.heroku} />
          </Link>
          <Link to="https://www.linkedin.com/in/jason-kopacz-2917264a/">
            <img src={window.linkedin} />
          </Link>
        </div>
      </footer>
    )
  }
}

export default SplashFooter;