import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class DashboardNav extends React.Component {

  constructor(props) {
    super(props);

    this.changeClass = this.changeClass.bind(this);
  }

  changeClass(element) {
    $(element).toggleClass('hidden');
  }

  render() {
    return (
      <header className="dashboard-header">
        
          <div className="left-nav">
            <div className="logo">
              <Link to="/dashboard" className="header-link">
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
              <button>
                <img src={window.search}/>
              </button>
              <input type="text" placeholder="Where are you going?"/>
            </div>
            </fieldset>
            </div>
          </div>
          <div className="right-nav">
            <button className="dashboard-link-1-body">
              <img src={window.earth}></img>
              <Link to="/dashboard" className="nav-link-1">Dashboard</Link>
            </button>
            <button className="dashboard-link-2-body">
              <img src={window.chat}></img>
              <Link to="/groups" className="nav-link-2">Groups</Link>
            </button>
            <button className="dashboard-link-3-body">
              <img src={window.calendar}></img>
              <Link to="/events" className="nav-link-3">Events</Link>
            </button>
            <button className="dashboard-link-4-body">
            <img src={window.envelope}></img>
              <Link to="/inbox" className="nav-link-4">Inbox</Link>
            </button>
            <button className="dashboard-link-5-body">
              <img src={window.profile}></img>
              <Link to="/profile" className="nav-link-5">Profile</Link>
            </button>
            <button onClick={this.changeClass("#nav-settings")}className="dashboard-link-6-body">
              <img src={window.cog}></img>

              Settings
              </button>
            <ul id="nav-settings" className="hidden">
              <li>Account and Settings</li>
              <li>Logout
                <a onClick={this.props.logout}></a>
              </li>
            </ul>
          </div>
      </header>
    )
  }
}

export default withRouter(DashboardNav);
