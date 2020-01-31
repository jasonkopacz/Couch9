import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../modal/modal';

class DashboardBody extends React.Component {

  componentDidMount () {
    debugger
    return this.props.fetchBookings(this.props.currentUser.id)
  }


  render() {
    const { bookings } = this.props;
    debugger
    if (bookings.length === 0) return null;
    const bookingItems = bookings.map((booking, id) => {
      const word = booking.number_of_travelers !== 1 ? 'Travelers' : 'Traveler';
      return (
        <div className="trip-container">
          <li key={id} className="trip">
            <div>Visiting: {booking.destination}</div>
            <div className="middle">
              <div>{booking.arrival_date}</div> 
              <div>{booking.departure_date}</div> 
              <div>{booking.number_of_travelers} {word}</div> 
            </div>
            <div>{booking.trip_description}</div>       
          </li>
        </div>
      )
    })
    return (
      <main className="dashboard">
        <div className="left-column-wrapper">
          <div className="left-column">
            <section className="user">
              <h2 className="user-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>
                <div className="location">
                  <button>{this.props.currentUser.city}</button>
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
               <a className="paris">
                 <header>
                   <h1>Paris, France</h1>
                   <p>70,000+ hosts</p>
                 </header>
               </a>
                <a className="rome">
                 <header>
                   <h1>Rome, Italy</h1>
                   <p>22,900+ hosts</p>
                 </header>
               </a>
                <a className="nyc">
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
            <div className="preferences">
              {bookingItems}
            </div>
            <div className="trip-mod">
              <a onClick={() => this.props.openModal('booking')}>Create a Public Trip &#9654;</a>
              <Modal />
              <a>My Public Trips &#9654;</a>
              <a>My Couch Requests &#9654;</a>
            </div>
          </section>
          <section className="happening">
              <h2>WHAT'S HAPPENING NEAR:  
                <a>
                  {this.props.currentUser.city}
                </a>
              </h2>
          </section>
          <section className="events">
            <h2>EVENTS</h2>
            <div className="event1">Event 1</div>
            <div className="event2">Event 2</div>
            <div className="event3">Event 3</div>
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