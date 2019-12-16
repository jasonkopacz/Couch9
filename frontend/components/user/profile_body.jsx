import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileBody extends React.Component {

  render() {
    return(
      <main className="profile">
        <div className="left-column-wrapper">
          <div className="left-column">
            <section className="user">
              <img src={window.profpic}/>
              <h2 className="user-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</h2>

              <div className="location">
                <button>Location</button>
              </div>
            </section>
          </div>
        </div>
        <div className="center-column-wrapper">
          <div className="center-column">
              <section className="host-availability">
              <div className="availability-header">
                <div className="availability">Host Availability</div>
                <button>Edit Profile</button>
              </div>
            </section>
            <section className="profile-nav">
              <header className="profile-header">
                <ul>
                  <li className="profile-about">
                    <a>About</a>
                  </li>
                  <li className="profile-spot">
                    <a>My Spot</a>
                  </li>
                  <li className="profile-review">
                    <a>Reviews</a>
                  </li>
                </ul>
              </header>
            </section>
            <section className="overview">
              <div className="overview-box">
                <div className="overview-left-column">
                  <ul>
                    <li className="left-reviews">Reviews</li>
                    <li className="left-languages">Languages</li>
                    <li className="age-gender">27 M</li>
                  </ul>
                </div>
                <div className="overview-right-column">
                  <ul>
                    <li className="occupation">Occupation</li>
                    <li className="education">Education</li>
                    <li className="hometown">Hometown</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="about-me">
              <div className="about-me-box">
                about me yerrrrrrr
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

export default withRouter(ProfileBody);