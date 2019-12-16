import React from 'react';
import { withRouter } from 'react-router-dom';

class DashboardBody extends React.Component {

  render() {
    return (
      <main className="dashboard">
        <div className="left-column-wrapper">
          <div className="left-column">
            <section className="user">
              <h2 className="user-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>
                <div className="location">
                  <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </div>
              <div className="hang">
                <form>
                  <div>
                    <select name="hang-status" id="hang-status">
                      <option value="Accepting Guests">Accepting Guests</option>
                      <option value="Maybe Accepting Guests">Maybe Accepting Guests</option>
                      <option value="Not Accepting Guests">Not Accepting Guests</option>
                      <option value="Wants To Meet up">Wants To Meet up</option>
                    </select>
                  </div>
                </form>
              </div>
            </section>
            <section className="friends">
              <h2>You have 10 Facebook friends on Couch9:</h2>
                <div className="friend-items">
                  <div className="friend-item">
                    <h3>Name</h3>
                    <a>Add Friend</a>
                  </div>
                  <div className="friend-item">
                    <h3>Name</h3>
                    <a>Add Friend</a>
                  </div>
                  <div className="friend-item">
                    <h3>Name</h3>
                    <a>Add Friend</a>
                  </div>
                  <div className="friend-item">
                    <h3>Name</h3>
                    <a>Add Friend</a>
                  </div>
                  <div className="friend-item">
                    <h3>Name</h3>
                    <a>Add Friend</a>
                  </div>
                <div className="see-friends">
                  <a href="/friends">See my friends</a>
                </div>
                </div>
            </section>
          </div>
        </div>
        <div className="center-column-wrapper">
          <div className="center-column">
          <section className="destinations">
            <header className="destination-header">
              <h2>
                EXPLORE TOP DESTINATIONS WITH COUCH9ERS...
              </h2>
            </header>
             <div className="pictures">
               <a className="paris" href="/paris">
                 <header>
                   <h1>Paris, France</h1>
                   <p>70,000+ hosts</p>
                 </header>
               </a>
               <a className="rome" href="/rome">
                 <header>
                   <h1>Rome, Italy</h1>
                   <p>22,900+ hosts</p>
                 </header>
               </a>
               <a className="nyc" href="/nyc">
                 <header>
                   <h1>New York City, New York</h1>
                   <p>50,000+ hosts</p>
                 </header>
               </a>
             </div>
             <div className="host-search">
               <h3>Find hosts wherever I'm going:</h3>
              <div className="searchbar">
                <button>
                  <img src={window.search} />
                </button>
                <input type="text" placeholder="Where are you going?" />
              </div>
             </div>
          </section>
          <section className="bookings">
              <h2>&#9992; MY TRAVEL PLANS</h2>
            <div className="upcoming-trips">
              You have no upcoming trips.
            </div>
            <div className="trip-mod">
              <a>Create a Public Trip &#9654;</a>
              <a>My Public Trips &#9654;</a>
              <a>My Couch Requests &#9654;</a>
            </div>
          </section>
          <section className="happening">
            <h2>WHAT'S HAPPENING NEAR: CURRENT USER LOCATION</h2>
          </section>
          <section className="events">
            <h2>EVENTS</h2>
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

export default withRouter(DashboardBody);