import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">{currentUser.fname} {currentUser.lname}</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>)
  }
}

export default Dashboard;