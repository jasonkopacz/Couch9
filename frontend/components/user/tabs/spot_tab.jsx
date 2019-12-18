import React from 'react';
import {Link} from 'react-router-dom';

class SpotTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotId: {sp: this.props.currentUser.spot_id}
    };
    this.newUser = this.newUser.bind(this);
    this.oldUser = this.oldUser.bind(this);
  }

  newUser() {
    return (
      <main className="create-spot-button">
          <button>
            <Link to="/spots/new">Create Your Spot</Link>
          </button>
      </main>
    )
  }

  oldUser() {
    debugger
    this.props.requestSpot(this.state.spotId)
    return (
      <main>
        <section className="my-spot">
          <h2>Users Home</h2>
          <div className="my-spot-box">
            <div className="preferences">
              <h2>Users Preferences</h2>
              <ul>
                <li>Max Number of Guests: 1</li>
                <li>Last-Minute Requests Okay? Yes</li>
                <li>Preferred Gender to Host: Any</li>
                <li>Kid Friendly? No</li>
                <li>Pet Friendly? No</li>
                <li>Smoking Allowed? No</li>
              </ul>
            </div>
            <div className="home">
              <h2>Users Home</h2>
              <ul>
                <li>Has Pets? No</li>
                <li>Has Children? No</li>
                <li>Smoking at Home? No</li>
                <li>Wheelchair Accessible? No</li>
              </ul>
            </div>
            <div className="arrangements">
              <h2>Sleeping Arrangements</h2>
              <ul>
                <li>Private room</li>
              </ul>
            </div>
            <div className="details">
              <h2>More Details</h2>
              <ul>
                <li>Public Transportation Access</li>
                <li>What I Can Share With Guests</li>
                <li>Additional Information</li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    )
  }
  render() {
    if (this.props.currentUser.spot_id) {
      debugger
      return this.oldUser();
    } else {
      return this.newUser();
    }
    // return(
    //    this.props.currentUser.spot_id ? this.oldUser() : this.newUser()
    // )
  }
}

export default SpotTab;