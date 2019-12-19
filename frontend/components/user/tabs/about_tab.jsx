import React from 'react';

class AboutTab extends React.Component {

  render() {
    const user = this.props.currentUser;
    return (
      <main>
        <section className="overview">
          <h2>OVERVIEW</h2>
          <div className="overview-box">
            <div className="overview-left-column">
              <ul>
                <li className="left-reviews">Reviews</li>
                <li className="left-languages">Languages</li>
                <li className="age-gender">{user.age},{user.gender}</li>
              </ul>
            </div>
            <div className="overview-right-column">
              <ul>
                <li className="occupation">{user.occupation}</li>
                <li className="education">{user.education}</li>
                <li className="hometown">Hometown</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="about-me">
          <div className="about-me-box">
            <h2>ABOUT ME YERRR</h2>
            <div className="about-me-content">
              Content
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default AboutTab;