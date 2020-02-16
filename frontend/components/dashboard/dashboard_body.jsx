import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from '../modal/modal';
import SpotSearchIndex from '../spot/spot_search_index';
import Search from '../location/search_container';

class DashboardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {  
    this.props.fetchBookings(this.props.currentUser.id)
    this.props.fetchLocations();
  }

  handleSubmit() {
    const search = document.getElementById('searchQuery').value;
    const that = this;
    this.props.searchQuery(search).then(() => {
      that.props.history.push("/api/locations/search");
    });
  }


  render() {
    const { bookings } = this.props;
    const bookingItems = bookings.map((booking, id) => {
      const ms = new Date(booking.departure_date).getTime() - new Date(booking.arrival_date).getTime();
      const days = ms / (1000 * 3600 * 24);
      const nights = days > 1 ? "Nights" : "Night"; 
      const word = booking.number_of_travelers !== 1 ? 'Travelers' : 'Traveler';
      return (
        <main>
          <header className="main-header-booking">{booking.destination}</header>
          <div key={id} className="trip-container">
            <li key={id} className="trip">
              <header className="public">Public Trip</header>
              <div className="booking-destination">Visiting: <a> {booking.destination}</a> </div>
              <div className="middle">
                <span className="half">
                  <div>&#127968; {days} {nights}</div> 
                  <div>&#128197; {booking.arrival_date} &rarr; {booking.departure_date}</div>
                </span> 
                <div className="num-trav">👤 {booking.number_of_travelers} {word}</div> 
              </div>
              <div className="descrip">{booking.trip_description}</div>       
            </li>
          </div>
        </main>
      )

      
    })
    if (!this.props.locations) return null;
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
        <div className="center-column-wrapper" id="center-column-wrapper">
          <div className="center-column">
          <section className="destinations">
            <header className="destination-header">
              <h2>
                EXPLORE TOP DESTINATIONS WITH COUCH9ERS...
              </h2>
            </header>
             <div className="pictures">
               <Link to={{
                  pathname: `api/locations/show/${5}`,
                  state: {
                    item: this.props.locations[5]
                  }
                }} className="paris">
                 <header>
                   <h1>Paris, France</h1>
                   <p>70,000+ hosts</p>
                 </header>
               </Link>
                <Link to={{
                  pathname: `api/locations/show/${4}`,
                  state: {
                    item: this.props.locations[4]
                  }
                }} className="rome">
                <header>
                   <h1>Rome, Italy</h1>
                   <p>22,900+ hosts</p>
                 </header>
               </Link>
                <Link to={{
                  pathname: `api/locations/show/${1}`,
                  state: {
                    item: this.props.locations[1]
                  }
                }}
                  className="nyc">
                 <header>
                   <h1>New York City, New York</h1>
                   <p>50,000+ hosts</p>
                 </header>
               </Link>
             </div>
             <div className="host-search">
               <h3>Find hosts wherever I'm going:</h3>
              <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                  <button className="buttonbutton" type="submit">
                    &#128269;
                    {/* <img className="mag-glass" src={window.search} /> */}
                  </button>
                  <input type="text" name="q" id="searchQuery" placeholder="Where are you going?" />
                </form>
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
              <a onClick={() => this.props.history.push('/api/bookings')}>My Public Trips &#9654;</a>
            </div>
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