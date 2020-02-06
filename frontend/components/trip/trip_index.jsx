import React from 'react';
import Modal from '../modal/modal';


class TripIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    // componentDidMount() {
    //     return this.props.fetchBookings(this.props.currentUser.id)
    // }

    handleEdit(e) {
        e.preventDefault();
        const booking = this.props.fetchSingleBooking(this.props.currentUser.id, e.target.value);
        this.setState({
            booking
        })
        this.props.openModal("edit_booking")
    }

    render () {
      const { bookings } = this.props;
      const bookingItems = bookings.map((booking, id) => {
      const ms = new Date(booking.departure_date).getTime() - new Date(booking.arrival_date).getTime();
      const days = ms / (1000 * 3600 * 24);
      const nights = days > 1 ? "Nights" : "Night"; 
      return (
        <main>
          <div key={id} className="trip-container">
            <li key={id} className="trip">
              <div className="booking-destination"><h2 id="bd">Trip to {booking.destination}</h2></div>
              <div className="middle">
                <span className="half">
                  <div>{booking.arrival_date} - {booking.departure_date} ({days} {nights})</div> 
                </span>  
              </div>
              <div className="descrip">{booking.trip_description}</div>       
            </li>
            <div>
                <button className="edit-booking" onClick={this.handleEdit} value={booking.id}>Edit</button>
            </div>
          </div>
        </main>
      )
    })
        return (
            <main className="trip-index">
              <div className="left-column-booking"></div>
              <div className="center-column-wrapper" id="center-column-wrapper">
                <div className="center-column">
                <section className="bookings">
                    <h2 id="bookings-public">&#9992; PUBLIC TRIPS</h2>
                  <div className="preferences">
                    {bookingItems}
                  </div>
                </section>
                </div>
              </div>
              <div className="right-column-wrapper">
                <div className="right-column">
                <div className="trip-mod-index">
                  <h3>CREATE A PUBLIC TRIP</h3>
                    <a onClick={() => this.props.openModal('booking')}>New Public Trip</a>
                    <Modal />
                  </div>
                </div>
              </div>
              <div className="right-column-booking"></div>
            </main>
          )
    }
}

export default TripIndex;