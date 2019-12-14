import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class DashboardNav extends React.Component {

  render() {
    return (
      <header className="dashboard-header">
        
          <div className="left-nav">
            <div className="nav-logo">
              <Link to="/" className="header-link">
                <img src={window.logo} alt="" />
              </Link>
            </div>
            <div className="explore">
              <fieldset className="explore-choice">
              <select name="search-type" id="search-type">
                <option value="explore">Explore</option>
                <option value="find-hosts">Find Hosts</option>
              </select>
            <div className="topnav">
              <input type="text" placeholder="Search.."/>
            </div>
            </fieldset>
            </div>
          </div>
          <div className="right-nav">
            <span className="dashboard-link-1-body">
              &#127760;
              <Link to="/dashboard" className="nav-link-1">Dashboard</Link>
            </span>
            <div className="dashboard-link-2-body">
              	&#128172;
              <Link to="/groups" className="nav-link-2">Groups</Link>
            </div>
            <div className="dashboard-link-3-body">
              &#128197;
              <Link to="/events" className="nav-link-3">Events</Link>
            </div>
            <div className="dashboard-link-4-body">
              	&#9993;
              <Link to="/inbox" className="nav-link-4">Inbox</Link>
            </div>
            <div className="dashboard-link-5-body">
              &#128100;
              <Link to="/profile" className="nav-link-5">Profile</Link>
            </div>
            <div className="dashboard-link-6-body">
              &#9881;
              <Link to="/settings" className="nav-link-6">Settings</Link>
            </div>
          </div>
      </header>
    )
  }
}

export default withRouter(DashboardNav);
