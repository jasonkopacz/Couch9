import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Tabs from './tabs/tabs';

class ProfileBody extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.currentUser.id)
  }

  render() {
    const user = this.props.currentUser;
    return(
      <main className="profile">
        <div className="left-column-wrapper">
          <div className="left-column">
            <section className="user">
              <img src={window.profpic}/>
              <h2 className="user-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>

              <div className="location">
                <button>{this.props.currentUser.city}</button>
              </div>
            </section>
          </div>
        </div>
        <div className="center-column-wrapper">
          <div className="center-column">
              <section className="host-availability">
              <div className="availability-header">
                <div className="availability">Host Availability</div>
                <Link to="spots/edit" user={user}>Edit Profile</Link>
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