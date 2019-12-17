import React from 'react';

class CreateSpot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main>
        <div className="home-container">
          <header className="home-header">
            <h2>My Home</h2>
          </header>
          <section className="home-preferences">
            <h3>My Preferences</h3>
            <dl className="available-nights">
              <dt className="available-nights-title">Available Nights to Host</dt>
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
          </section>
        </div>
      </main >
    )
  }
}

export default CreateSpot;