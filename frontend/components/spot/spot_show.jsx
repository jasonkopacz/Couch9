import React from 'react';

class SpotShow extends React.Component {

  render() {
    const { entities: {users} } = store.getState();
    const user = users[this.props.currentUserId];
    const spot = user.spot;
    return (
      <main>
        <section className="my-spot">
          <h2>My Home</h2>
          <div className="my-spot-box">
            <div className="preferences">
              <h2>{user.fname}s Preferences</h2>
              <ul>
                <li>Max Number of Guests: {spot.max_guests}</li>
                <li>Last-Minute Requests Okay? {spot.last_minute_requests}</li>
                <li>Preferred Gender to Host: {spot.preferred_gender}</li>
                <li>Kid Friendly? {spot.kid_friendly}</li>
                <li>Pet Friendly? {spot.pet_friendly}</li>
                <li>Smoking Allowed? {spot.smoking_allowed}</li>
              </ul>
            </div>
            <div className="home">
              <h2>{user.fname}s Home</h2>
              <ul>
                <li>Has Pets? {spot.has_pets}</li>
                <li>Has Children? {spot.has_children}</li>
                <li>Smoking at Home? {spot.smoking_at_home}</li>
                <li>Wheelchair Accessible? {spot.wheelchair_accessible}</li>
              </ul>
            </div>
            <div className="arrangements">
              <h2>Sleeping Arrangements</h2>
              <ul>
                <li>{spot.sleeping_arrangements}</li>
              </ul>
            </div>
            <div className="details">
              <h2>More Details</h2>
              <ul>
                <li id="rs">{spot.roommate_situation}</li>
                <li id="pt">{spot.public_transportation}</li>
                <li id="wicswg">{spot.what_i_can_share_with_guests}</li>
                <li id="ai">{spot.additional_information}</li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    )
  }
}

export default SpotShow;