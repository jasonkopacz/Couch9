import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class DashboardNav extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(this.props.history.push('/'));
  }

  render() {
    return (
      <header className="dashboard-header">
        <div className="nav-container">
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
                <input type="text" placeholder="Where are you going?"/>
              </button>
            </div>
            </fieldset>
            </div>
          </div>
          <div className="right-nav">
            <ul>
            <li className="dashboard-link-1-body">
              <Link to="/dashboard" className="nav-link-1">Dashboard
              <img src={window.earth}></img>
              </Link>
            </li>
            <li className="dashboard-link-5-body">
              <Link to='/api/users' className="nav-link-5">Profile
                <img src={window.profile}></img>
              </Link>
            </li>
            <li tabIndex="0" className="dashboard-link-6-body">
                <img src={window.cog}></img>
              <ul id="dropdown-menu">
                <li>Account and Settings</li>
                <li onClick={this.handleLogout} className="nav-logout">Logout
                </li>
              </ul>
              Settings
            </li>

          </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(DashboardNav);
