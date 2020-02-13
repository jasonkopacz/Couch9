import React from 'react';

class AboutTab extends React.Component {

  render() {
    const user = this.props.user ? this.props.user :
      this.props.currentUser;
      const reviews = user.reviews_as_host.length + user.reviews_from_host.length
      const languages = user.email === "jk@gmail.com" ? "English, Vietnamese" : "Languages"; 
    return (
      <main>
        <section className="overview">
          <h2>OVERVIEW</h2>
          <div className="overview-box">
            <div className="overview-left-column">
              <ul>
                <li className="left-reviews">❝ {reviews} Reviews</li>
                <li className="left-languages">&#128488; {languages}</li>
                <li className="age-gender">	&#9893; {user.age}, {user.gender}</li>
              </ul>
            </div>
            <div className="overview-right-column">
              <ul>
                <li className="occupation">&#129520; {user.occupation}</li>
                <li className="education">&#128214; {user.education}</li>
                <li className="hometown">&#128506; {user.location}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="about-me">
          <div className="about-me-box">
            <h2>ABOUT ME</h2>
            <div className="about-me-content">
              {user.about_me}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default AboutTab;