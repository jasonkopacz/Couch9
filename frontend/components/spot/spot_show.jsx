import React from 'react';

class SpotShow extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const user = this.props.profileOwner ? this.props.profileOwner : this.props.users[this.props.currentUserId];
    const spot = user.spot ? user.spot : {};
    const kidFriendly = spot.kid_friendly ? "Yes" : "No";
    const petFriendly = spot.pet_friendly ? "Yes" : "No";
    const smokingAllowed = spot.smoking_allowed ? "Yes" : "No";
    const hasPets = spot.has_pets ? "Yes" : "No";
    const hasChildren = spot.has_children ? "Yes" : "No";
    const smokingAtHome = spot.smoking_at_home ? "Yes" : "No";
    const wheelchairAccessible = spot.wheelchair_accessible ? "Yes" : "No";
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
                <li>Kid Friendly? {kidFriendly}</li>
                <li>Pet Friendly? {petFriendly}</li>
                <li>Smoking Allowed? {smokingAllowed}</li>
              </ul>
            </div>
            <div className="home">
              <h2>{user.fname}s Home</h2>
              <ul>
                <li>Has Pets? {hasPets}</li>
                <li>Has Children? {hasChildren}</li>
                <li>Smoking at Home? {smokingAtHome}</li>
                <li>Wheelchair Accessible? {wheelchairAccessible}</li>
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
                <li id="rs">Roommate Situation: {spot.roommate_situation}</li>
                <li id="pt">Public Transportation: {spot.public_transportation}</li>
                <li id="wicswg">What I Can Share With Guests: {spot.what_i_can_share_with_guests}</li>
                <li id="ai">Additional Information: {spot.additional_information}</li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    )
  }
}

export default SpotShow;



