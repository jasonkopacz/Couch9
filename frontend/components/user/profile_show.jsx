import React from 'react';
import Tabs from './tabs/tabs';
import { Link } from 'react-router-dom';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id)
    this.props.requestUser(this.props.userId)
    .then(user => this.setState({
      user
    }));
  }
  render() {
    
    if (!this.state) return null;
    const user = this.state.user;
    return (
        <main>
        <main className="profile">
          <div className="left-column-wrapper">
            <div className="left-column">
              <section className="user">
                <img src={window.profpic} />
                  <h2 className="user-name">{user.fname} {user.lname}</h2>

                <div className="location">
                  <button>{user.location}</button>
                </div>
              </section>
            </div>
          </div>
          <div className="center-column-wrapper">
            <div className="center-column">
              <section className="host-availability">
                <div className="availability-header">
                  <div className="availability">Host availability</div>
                  <Link to={{
                      pathname: '/api/reviews/new',
                      state: {
                        user
                      }
                    }} 
                    className="review-button">Write A Review</Link >
                </div>
              </section>
              <section className="profile-nav">
                <header className="profile-header">
                  <Tabs user={user}/>
                </header>
              </section>
            </div>
          </div>
          <div className="right-column-wrapper">
            <div className="right-column"></div>
          </div>
        </main>
      </main>
      )



};
}
export default (ProfileShow);