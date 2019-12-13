 import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

class SplashHeader extends React.Component {

render() {
  debugger
  return (
    <header className="global-header">
      <div className="nav-header">
        <Link to="/" className="header-link">
          <img src={window.logo} alt="" />
        </Link>
        <ul className="header-links">
          <select name="Language">
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
          </select>
          <Link to="/howitworks" className="header-link-1">How It Works</Link>
          <Link to="/safety" className="header-link-2">Safety</Link>
          <span className="header-link-3-body">
            <Link to="/signup" className="header-link-3">Join</Link>
          </span>
          <span className="header-link-4-body">
            <Modal />
            <a onClick={() => (openModal('login'))} className="header-link-4" >Log In</a>
          </span>
        </ul>
      </div>
    </header>
    )
  }
}

export default withRouter(SplashHeader);