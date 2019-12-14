 import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

class SplashHeader extends React.Component {

render() {
  return (
    <header className="global-header">
      <div className="nav-header">
        <div className="logo">
          <Link to="/" className="header-link">
            <img src={window.logo} alt="" />
          </Link>
        </div>
        <div className="session-buttons-header">
          <span className="header-link-3-body">
            <Link onClick={this.forceUpdate} to="/" className="header-link-3">Join</Link>
          </span>
          <span className="header-link-4-body">
            <Modal />
            <a onClick={() => store.dispatch(openModal('login'))} className="header-link-4" >Log In</a>
          </span>
        </div>
      </div>
    </header>
    )
  }
}

export default withRouter(SplashHeader);


// create regular action to store form slice of data in the ui slice.
// form slice reducer
// map to create form props
//  