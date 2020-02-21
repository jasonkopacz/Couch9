import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBooking extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      destination: props.booking.destination || '',
      arrival_date: props.booking.arrival_date ||'',
      departure_date: props.booking.departure_date || '',
      number_of_travelers: props.booking.number_of_travelers || 0,
      trip_description: props.booking.trip_description || ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({user_id: this.props.currentUser.id, id: this.props.booking.id}, this.state);
    this.props.update(booking)
    this.props.fetchBookings(this.props.currentUser.id)
    .then(this.props.closeModal);
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit} className="booking-box">
          <div className="booking-error">{this.renderErrors()}</div>
          <div className="booking-header">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <header className="public-header">Edit My Public Trip</header>
            <br />
          </div>
          <div className="booking-form">
            <br />
              <h2>Destination</h2>
            <label className="dest">
                <input required type="text"
                  value={this.state.destination}
                  onChange={this.update('destination')}
                  className="booking-input-destination"
                  placeholder="Enter a location..."/>
            </label>
            <br />
            <div className="dates">
              <span className="arrival">
                  <h2>Arrival Date</h2>
                <label className="date-label">
                    <input type="date" id="start" name="booking-start"
                      max="2022-12-31" onChange={this.update('arrival_date')}
                      value={this.state.arrival_date}/>
                </label>
              </span>
              <br />
              <span className="departure">
                  <h2>Departure Date</h2>
                <label className="date-label">
                    <input type="date" id="end" name="booking-end"
                      min={this.state.arrival_date} max="2022-12-31"
                      onChange={this.update('departure_date')}
                      value={this.state.departure_date}/>
                </label>
              </span>
            </div>
            <br />
              <h2>Number of Travelers</h2>
            <label className="travelers">
                <select name="travel" id="day" required
                value={this.state.number_of_travelers}
                  onChange={this.update('number_of_travelers')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
            </label>
            <h2 className="h2">Trip Description</h2>
            <label className="desc">
              <textarea className="tarea" rows="10" cols="50" onChange={this.update('trip_description')}>

              </textarea>
            </label>
            <section className="booking-buttons">
              <button className="booking-cancel" onClick={this.props.closeModal}>Cancel</button>
              <input className="booking-submit" type="submit" value="Save"></input>
            </section>
          </div>
        </form>
      </main>
    );
  }
}

export default withRouter(EditBooking);