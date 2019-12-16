import React from 'react';
import DashboardBodyContainer from './dashboard_body_container';
import DashboardNav from './dashboard_nav_container';
import DashboardFooter from './dashboard_footer';
const Dashboard = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
      <nav className="login-modal">
        <p>Already a member? </p>
        <br />
        <button onClick={() => openModal('login')}>Log In</button>
      </nav>
  );

  const handleLogout = () => {
    logout().then(this.props.history.push("/"))
  }

  const dash = () => (
    <hgroup className="header-group">
      <DashboardNav />
      <DashboardBodyContainer />
      <DashboardFooter />
    </hgroup>);

  return (
    currentUser ?
      dash(currentUser, logout) :
      sessionLinks()
  );
};

export default Dashboard;
