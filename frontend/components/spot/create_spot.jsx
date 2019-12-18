import React from 'react';
import DashboardNav from '../dashboard/dashboard_nav_container';

class CreateSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepingArrangements: "",
      descriptionOfSleepingArrangement: "",
      roommateSituation: "",
      publicTransportation: "",
      whatICanShareWithGuest: "",
      additionalInformation: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {
    e.preventDefault();
    const form = Object.assign({}, this.state)
    this.props.processForm(form)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <main>
        <DashboardNav/>
        <article className="spot-page">
          <form onSubmit={this.handleSubmit}>

          
        <div className="spot-left-column">
          <div className="inside-left-column">
            <section className="spot-user">
              <img src={window.profpic} />
            </section>
            <div className="left-overview">
              <h2>OVERVIEW</h2>
              <ul>
                <li>Languages</li>
                <li>Age Gender</li>
                <li>Occupation</li>
                <li>Education</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-container">
          <header className="main-header">
            <h1>Username</h1>
            <h2>Location</h2>
          </header>
          <main className="main-body">
          <header className="home-header">
            <h2>My Home</h2>
            <div className="header-buttons">
              <input type="submit" value="Save"/>
              <a href="/">Cancel</a>
            </div>
          </header>
          <section className="home-preferences">
            <h3 className="section-h3">My Preferences</h3>
            <dl className="available-nights">
              <dt className="available-title">Available Nights to Host</dt>
              <dd className="available-nights-descriptions">
                <ul className="days">
                  <li>
                    <label>Sun</label>
                    <input type="checkbox" name="sun" id="sun" />
                  </li>
                  <li>
                    <label>Mon</label>
                    <input type="checkbox" name="mon" id="mon" />
                  </li>
                  <li>
                    <label>Tue</label>
                    <input type="checkbox" name="tue" id="tue" />
                  </li>
                  <li>
                    <label>Wed</label>
                    <input type="checkbox" name="wed" id="wed" />
                  </li>
                  <li>
                    <label>Thu</label>
                    <input type="checkbox" name="thu" id="thu" />
                  </li>
                  <li>
                    <label>Fri</label>
                    <input type="checkbox" name="fri" id="fri" />
                  </li>
                  <li>
                    <label>Sat</label>
                    <input type="checkbox" name="sat" id="sat" />
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="max-guests">
              <h3 className="dt">Maximum Number of Guests</h3>
              <select name="guests" id="guests">
                <option value="any">Any</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
                <option value="1">11</option>
                <option value="1">12</option>
                <option value="1">13</option>
                <option value="1">14</option>
                <option value="1">15</option>
              </select>
            </div>

            <dl className="request-preferences">
              <dt className="request-title">Request Preferences</dt>
              <dd className="request-descriptions">
                <li>
                  <label>Last-Minute Requests Okay</label>
                  <input type="checkbox" name="last" id="last" />
                </li>
                <li id="mul">
                  <label>Multiple Groups per Night Okay</label>
                  <input type="checkbox" name="multi" id="multi" />
                  <small>
                    Once I've confirmed a guest, it's okay to send 
                    me additional requests for that night.
                  </small>
                </li>
              </dd>
            </dl>

            <div className="gender-preference">
              <h3 className="dt">Preferred Gender to Host</h3>
              <select name="gender-pref" id="gender-pref">
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <dl className="cps">
              <dt className="cps-title">Children, Pets, Smoking</dt>
              <dd className="cps-descriptions">
                <li>
                  <label>Kid Friendly</label>
                  <input type="checkbox" name="kid" id="kid" />
                </li>
                <li>
                  <label>Pet Friendly</label>
                  <input type="checkbox" name="pet" id="pet" />
                </li>
                <li>
                  <label>Smoking is Allowed</label>
                  <input type="checkbox" name="smoking" id="smoking" />
                </li>
              </dd>
            </dl>

          </section>
          <section className="my-home">
            <h3 className="section-h3">My Home</h3>

            <div className="sleeping-arrangements">
              <h3 className="dt">Sleeping Arrangements</h3>
              <select name="sleep" id="sleep">
                <option value="na"></option>
                <option value="shared-bed">Shared Bed</option>
                <option value="shared-room">Shared Room</option>
                <option value="public-room">Public Room (Eg: Living Room)</option>
                <option value="private-room">Private Room</option>
              </select>
            </div>

            <div className="description-sleep">
              <h3 className="dt">Description of Sleeping Arrangement</h3>
              <input type="textarea"
                value={this.state.descriptionOfSleepingArrangement}
                onChange={this.update('descriptionOfSleepingArrangement')} ></input>
            </div>

            <div className="roommate-situation">
              <h3 className="dt">Roommate Situation</h3>
              <textarea name="roommate" id="roommate" cols="40" rows="8"></textarea>
            </div>

            <dl className="misc">
              <dt className="misc-title">Miscellaneous</dt>
              <dd className="misc-descriptions">
                <li>
                  <label>I Have a Pet</label>
                  <input type="checkbox" name="have-pet" id="have-pet" />
                </li>
                <li>
                  <label>Kids at Home</label>
                  <input type="checkbox" name="have-kids" id="have-kids" />
                </li>
                <li>
                  <label>Smoking at Home</label>
                  <input type="checkbox" name="home-smoking" id="home-smoking" />
                </li>
                <li>
                  <label>Wheelchair Accessible</label>
                  <input type="checkbox" name="wheelchair" id="wheelchair" />
                </li>
              </dd>
            </dl>

            <div className="public-transportation">
              <h3 className="dt">Public Transportation</h3>
              <textarea name="transpo" id="transpo" cols="40" rows="8"></textarea>
            </div>

            <div className="shared">
              <h3 className="dt">What I Can Share With Guests</h3>
              <textarea name="shared" id="shared" cols="40" rows="8"></textarea>
            </div>

            <div className="additional">
              <h3 className="dt">Additional Information</h3>
              <textarea name="additional" id="additional" cols="40" rows="8"></textarea>
            </div>

          </section>
          <div className="footer-buttons">
            <input type="submit" value="Save" />
            <a href="/">Cancel</a>
          </div>
        </main>
        </div>
          </form>
        </article>
      </main >
    )
  }
}

export default CreateSpot;