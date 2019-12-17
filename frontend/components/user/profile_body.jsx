import React from 'react';
import { withRouter } from 'react-router-dom';
import Tabs from './tabs/tabs';

class ProfileBody extends React.Component {

  render() {
    return(
      <main className="profile">
        <div className="left-column-wrapper">
          <div className="left-column">
            <section className="user">
              <img src={window.profpic}/>
              <h2 className="user-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>

              <div className="location">
                <button>Location</button>
              </div>
            </section>
          </div>
        </div>
        <div className="center-column-wrapper">
          <div className="center-column">
              <section className="host-availability">
              <div className="availability-header">
                <div className="availability">Host Availability</div>
                <button>Edit Profile</button>
              </div>
            </section>
            <section className="profile-nav">
              <header className="profile-header">
                <Tabs/>
              </header>
            </section>
          </div>
        </div>
        <div className="right-column-wrapper">
          <div className="right-column"></div>
        </div>
      </main>
    )
  }
}

export default withRouter(ProfileBody);