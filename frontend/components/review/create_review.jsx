import React, { useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import { selectBookings } from '../../reducers/selectors';

class CreateReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yes: false,
            no: false,
            surf: false,
            host: false,
            body: "",
            renderBookingSelect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.radioUpdate = this.radioUpdate.bind(this);
        this.renderBookingSelect = this.renderBookingSelect.bind(this);
    }
    
    renderBookingSelect() {
        const bookings = selectBookings(this.props, this.props.currentUser.id, this.props.location.user.id)
        if (bookings.length > 0) {
            this.setState({
                renderBookingSelect: true
            })
        }
    }


    handleSubmit() {
        const author_id = this.props.currentUser.id
        let recommended;
        let surfer_id;
        let host_id;
        let body = this.state.body
        if (this.state.yes) {
            recommended = true
        } else {
            recommended = false
        }
        
        if (this.state.surf) {
            surfer_id = this.props.location.state.user.id
            host_id = this.props.currentUser.id
        } else {
            host_id = this.props.location.state.user.id
            surfer_id = this.props.currentUser.id
        }

        const review = Object.assign({recommended, surfer_id, host_id, author_id, body})
        this.props.createReview(review)
        this.props.history.push("/dashboard")
    }

    update(field) {
        const that = this;
        return e => that.setState({
          [field]: e.currentTarget.value
        });
      }

      radioUpdate(field1, field2) {
        const that = this;
        return e => {
          if (that.state[field1] === false) {
            that.setState({
              [field1]: true,
              [field2]: false
            });
        } else if (that.state[field1] === true && that.state[field2] === false) {

        } else {
            that.setState({
              [field1]: false,
              [field2]: true
            })
          }
        }
      }

    render() {
        const user = this.props.location.state.user;
        let bookingItems;
        let title;
        let block;
        if (this.state.renderBookingSelect) {
            title = <h3>Which booking is this for?</h3>
            bookingItems = this.bookings.map(booking => {
                return(
                    <option value={booking.id}>
                        {booking.location}
                    </option>
                )
            })
            
        block = <>
                    {title}
                    <select name="bookings" id="select-bookings">
                        {bookingItems}
                    </select>
                </>
                return block
            
        }
        return(
        <main className="review-page-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
                <header className="ref-header">
                    <h1>WRITE A REFERENCE FOR {user.fname.toUpperCase()}</h1>
                </header>

                <section className="choose-booking">
                        {block}
                </section>

                <section className="rev-section">
                    <p>Would you recommend {user.fname}</p>
                    <div className="radio-review">
                        <input type="radio" id="recommend" 
                            onChange={this.radioUpdate("yes", "no")}
                            checked={this.state.yes ? "checked" : ""}>
                        </input>
                        <label htmlFor="recommend">Yes, I'd recommend</label>
                    </div> 
                    <div className="radio-review">   
                        <input type="radio" id="no-recommend" 
                            onChange={this.radioUpdate("no", "yes")}
                            checked={this.state.no ? "checked" : ""}>
                        </input>
                        <label htmlFor="no-recommend">No, I wouldn't recommend</label>
                    </div>
                    <p>
                        Your reference will appear on {user.fname}'s profile, 
                        so be sure that you're only sharing words you're comfortable 
                        saying publicly. Once you submit a reference, 
                        you can't edit or delete it
                    </p>
                </section>
                <section className="surf-or-host">
                    <p>Did {user.fname} surf or host?</p>
                    <div className="radio-review">
                        <input type="radio" id="surf" 
                            onChange={this.radioUpdate("surf", "host")}
                            checked={this.state.surf ? "checked" : ""}>
                        </input>
                        <label htmlFor="surf">Surf</label>
                    </div> 
                    <div className="radio-review">   
                        <input type="radio" id="host" 
                            onChange={this.radioUpdate("host", "surf")}
                            checked={this.state.host ? "checked" : ""}>
                        </input>
                        <label htmlFor="host">Host</label>
                    </div>
                <textarea id="memorable" cols="30" rows="10" 
                    placeholder={`What was memorable about ${user.fname}?`}
                    onChange={this.update("body")}>
                </textarea>
                </section>
                <section className="submit">
                    <button className="review-button" type="submit" value="Create">Create</button>
                </section>
            </form >
        </main>
        )
    }
}

export default withRouter(CreateReview);