import React from 'react';
import {Link} from 'react-router-dom';
import Spot from '../../spot/create_spot';

class SpotTab extends React.Component {

  constructor(props) {
    super(props);
    this.newUser = this.newUser.bind(this);
    this.oldUser = this.oldUser.bind(this);
  }

  newUser() {
    return (
      <main>
        <button>
          <h2>Create Your Spot</h2>
          <Link to="/spots/new" />
        </button>
      </main>
    )
  }

  oldUser() {
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
    return(
      this.props.justCreated ? this.newUser() : this.oldUser()
    )
  }
}

export default SpotTab;