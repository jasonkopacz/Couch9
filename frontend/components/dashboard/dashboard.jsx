import React from 'react';
import SessionForm from '../session_form/session_form';
import SplashHeader from '../splash/splash_header_container';
import DashboardNav from './dashboard_nav_container';
const Dashboard = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <main className="splash">
      <nav className="login-modal">
        <p>Already a member? </p>
        <br />
        <button onClick={() => openModal('login')}>Log In</button>
      </nav>
    </main>
  );

  const handleLogout = () => {
    logout().then(this.props.history.push("/"))
  }

  const dash = () => (
    <hgroup className="header-group">
      <DashboardNav />
      <h2 className="header-name">{currentUser.fname} {currentUser.lname}</h2>
      <button className="header-button" onClick={handleLogout}>Log Out</button>
    </hgroup>);

  return (
    currentUser ?
      dash(currentUser, logout) :
      sessionLinks()
  );
};

export default Dashboard;
