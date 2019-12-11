import React from 'react';



const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <main className="splash">
      <nav className="login-modal">
        <p>Already a member? </p>
        <br/>
        <button onClick={() => openModal('login')}>Log In</button>
      </nav>
    </main>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.email}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};

export default Greeting;
