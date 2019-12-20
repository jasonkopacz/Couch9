import React from 'react';
import DashboardNav from '../dashboard/dashboard_nav_container';

class CreateSpot extends React.Component {
  constructor(props) {
    super(props);
    const spot = this.props.user[this.props.currentUserId].spot || {};

    this.state = {
      host_id: this.props.currentUserId,
      available_nights: spot.available_nights || [ 
        { id: 0, value: "sun", is_checked: false }, { id: 1, value: "mon", is_checked: false },
        { id: 2, value: "tue", is_checked: false }, { id: 3, value: "wed", is_checked: false },
        { id: 4, value: "thu", is_checked: false }, { id: 5, value: "fri", is_checked: false },
        { id: 6, value: "sat", is_checked: false },
      ],
      max_guests: spot.max_guests || 0,
      last_minute_requests: spot.last_minute_requests || false,
      preferred_gender: spot.preferred_gender || "Any",
      has_children: spot.has_children || false,
      has_pets: spot.has_pets || false,
      smoking_at_home: spot.smoking_at_home || false,
      sleeping_arrangements: spot.sleeping_arrangements || "",
      description_of_sleeping_arrangements: spot.description_of_sleeping_arrangements || "",
      roommate_situation: spot.roommate_situation || "",
      pet_friendly: spot.pet_friendly || false,
      kid_friendly: spot.kid_friendly || false,
      smoking_allowed: spot.smoking_allowed || false,
      wheelchair_accessible: spot.wheelchair_accessible || false,
      public_transportation: spot.public_transportation || "",
      what_i_can_share_with_guests: spot.what_i_can_share_with_guests || "",
      additional_information: spot.additional_information || "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.dateUpdate = this.dateUpdate.bind(this);
    // this.checkboxState = this.checkboxState.bind(this);
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

  componentWillUnmount() {
    this.props.clearErrors();
    $('#error').addClass('hidden')
  }

  // componentWillReceiveProps(nextProps) {
  //   return this.setState({ inputVal: nextProps.publication.document_title })
  // }

  handleSubmit(e) {
    e.preventDefault();
    const createForm = Object.assign({}, this.state);
    this.props.processForm(createForm)
    .then(() => this.props.history.push(`/api/users`))
    this.setState(this.state)
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  checkboxUpdate(field) {
    return e => this.setState({
      [field]: true });
    };

  dateUpdate() {
    return e => {
      let selections = e.target.className;
      Array.from(this.state[selections]).forEach(selection => {
        if (selection.value === e.target.value)
          selection.isChecked = e.target.checked;
      });
      this.setState({ selections });
    };
  }

  
  render() {
    return(
      <main>
        <DashboardNav/>
        <article className="spot-page">
          <form className="create-spot-form" onSubmit={this.handleSubmit}>

          
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
            {this.renderErrors}
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
                      <input type="checkbox" name="sun" id="sun" className="available_nights"
                        className="save-cb-state"
                      value={this.state.available_nights[0].value} onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Mon</label>
                      <input type="checkbox" name="mon" id="mon" className="available_nights"
                        className="save-cb-state"
                      value="mon" onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Tue</label>
                      <input type="checkbox" name="tue" id="tue" className="available_nights"
                        className="save-cb-state"
                      value="tue" onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Wed</label>
                      <input type="checkbox" name="wed" id="wed" className="available_nights"
                        className="save-cb-state"
                      value="wed" onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Thu</label>
                      <input type="checkbox" name="thu" id="thu" className="available_nights"
                        className="save-cb-state"
                      value="thu" onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Fri</label>
                      <input type="checkbox" name="fri" id="fri" className="available_nights"
                        className="save-cb-state"
                      value="fri" onChange={this.dateUpdate()}/>
                  </li>
                  <li>
                    <label>Sat</label>
                      <input type="checkbox" name="sat" id="sat" className="available_nights"
                        className="save-cb-state"
                      value="sat" onChange={this.dateUpdate()}/>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="max-guests">
              <h3 className="dt">Maximum Number of Guests</h3>
              <select value ={this.state.max_guests} 
                onChange={this.update('max_guests')}
                name="guests" id="guests">
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
            </div>

            <dl className="request-preferences">
              <dt className="request-title">Request Preferences</dt>
              <dd className="request-descriptions">
                <li>
                  <label>Last-Minute Requests Okay</label>
                        <input type="radio" name="last" id="last" className="last_minute_requests"
                          onChange={this.update("last_minute_requests")} value={this.state.last_minute_requests}/>
                           
                </li>
                {/* <li id="mul">
                  <label>Multiple Groups per Night Okay</label>
                        <input type="checkbox" name="multi" id="multi" className="requestPreferences"
                          onChange={this.checkboxUpdate()} value="multi" />
                  <small>
                    Once I've confirmed a guest, it's okay to send 
                    me additional requests for that night.
                  </small>
                </li> */}
              </dd>
            </dl>

            <div className="gender-preference">
              <h3 className="dt">Preferred Gender to Host</h3>
                <select value={this.state.preferred_gender}
                  onChange={this.update('preferred_gender')}
                  name="gender-pref" id="gender-pref">
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
                  <input type="checkbox" name="kid" id="kid"
                    className="kid_friendly" className="save-cb-state"
                  onChange={this.checkboxUpdate("kid_friendly")} value={this.state.kid_friendly} />
                </li>
                <li>
                  <label>Pet Friendly</label>
                  <input type="checkbox" name="pet" id="pet"
                    className="pet_friendly" className="save-cb-state"
                  onChange={this.checkboxUpdate("pet_friendly")} value={this.state.pet_friendly} />
                </li>
                <li>
                  <label>Smoking is Allowed</label>
                  <input type="checkbox" name="smoking" id="smoking"
                    className="smoking_allowed" className="save-cb-state"
                  onChange={this.checkboxUpdate("smoking_allowed")} value={this.state.smoking_allowed} />
                </li>
              </dd>
            </dl>

          </section>
          <section className="my-home">
            <h3 className="section-h3">My Home</h3>

            <div className="sleeping-arrangements">
              <h3 className="dt">Sleeping Arrangements</h3>
                <select value={this.state.sleeping_arrangements}
                  onChange={this.update('sleeping_arrangements')}
                  name="sleep" id="sleep">
                  <option value="na"></option>
                  <option value="shared-bed">Shared Bed</option>
                  <option value="shared-room">Shared Room</option>
                  <option value="public-room">Public Room (Eg: Living Room)</option>
                  <option value="private-room">Private Room</option>
                </select>
            </div>

            <div className="description-sleep">
              <h3 className="dt">Description of Sleeping Arrangement</h3>
              <label id="testing">
              <input type="textarea" className="text-area"
                value={this.state.description_of_sleeping_arrangement}
                onChange={this.update('description_of_sleeping_arrangement')} >
              </input>
              </label>
            </div>

            <div className="roommate-situation">
              <h3 className="dt">Roommate Situation</h3>
              <input type="textarea" className="text-area" 
                value={this.state.roommate_situation}
                onChange={this.update("roommate_situation")}>
              </input>
            </div>

            <dl className="misc">
              <dt className="misc-title">Miscellaneous</dt>
              <dd className="misc-descriptions">
                <li>
                  <label>I Have a Pet</label>
                  <input type="checkbox" name="have-pet" id="have-pet" value={this.state.has_pets}
                      className="has_pets" className="save-cb-state"
                  onChange={this.checkboxUpdate("has_pets")}  />
                </li>
                <li>
                  <label>Kids at Home</label>
                  <input type="checkbox" name="have-kids" id="have-kids" value={this.state.has_children}
                      className="has_kids" className="save-cb-state"
                  onChange={this.checkboxUpdate("has_kids")} />
                </li>
                <li>
                  <label>Smoking at Home</label>
                  <input type="checkbox" name="home-smoking" id="home-smoking" value={this.state.smoking_at_home}
                      className="smoking_at_home" className="save-cb-state"
                  onChange={this.checkboxUpdate("smoking_at_home")}  />
                </li>
                <li>
                  <label>Wheelchair Accessible</label>
                  <input type="checkbox" name="wheelchair" id="wheelchair" value={this.state.wheelchair_accessible}
                    className="wheelchair_accessible" className="save-cb-state"
                  onChange={this.checkboxUpdate("wheelchair_accessible")}  />
                </li>
              </dd>
            </dl>

            <div className="public-transportation">
              <h3 className="dt">Public Transportation</h3>
                    <input type="textarea" className="text-area"
                      value={this.state.public_transportation}
                      onChange={this.update("public_transportation")}>
                    </input>
            </div>

            <div className="shared">
              <h3 className="dt">What I Can Share With Guests</h3>
                    <input type="textarea" className="text-area"
                      value={this.state.what_i_can_share_with_guests}
                      onChange={this.update("what_i_can_share_with_guests")}>
                    </input>
            </div>

            <div className="additional">
              <h3 className="dt">Additional Information</h3>
                    <input type="textarea" className="text-area"
                      value={this.state.additional_information}
                      onChange={this.update("additional_information")}>
                    </input>
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


// checkboxState() {
          //   // variable to store our current state
          //   var cbstate;
        
          //   // bind to the onload event
          //   window.addEventListener('load', function () {
          //     // Get the current state from localstorage
          //     // State is stored as a JSON string
          //     cbstate = JSON.parse(localStorage['CBState'] || '{}');
        
          //     // Loop through state array and restore checked 
          //     // state for matching elements
          //     for (var i in cbstate) {
          //       var el = document.querySelector('input[name="' + i + '"]');
          //       if (el) el.checked = true;
          //     }
        
          //     // Get all checkboxes that you want to monitor state for
          //     var cb = document.getElementsByClassName('save-cb-state');
        
          //     // Loop through results and ...
          //     for (var i = 0; i < cb.length; i++) {
        
          //       //bind click event handler
          //       cb[i].addEventListener('click', function (evt) {
          //         // If checkboxe is checked then save to state
          //         if (this.checked) {
          //           cbstate[this.name] = true;
          //         }
        
          //         // Else remove from state
          //         else if (cbstate[this.name]) {
          //           delete cbstate[this.name];
          //         }
        
          //         // Persist state
          //         localStorage.CBState = JSON.stringify(cbstate);
          //       });
          //     }
          //   });
          // };