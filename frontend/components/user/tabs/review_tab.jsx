import React from 'react';

class ReviewTab extends React.Component {
  render() {
    return (
      <main>
        <section className="my-spot">
          <h2>Users Home</h2>
          <div className="my-spot-box">
            <div className="preferences">
              <ul>
                <li className="left-reviews">Reviews</li>
                <li className="left-languages">Languages</li>
                <li className="age-gender">27 M</li>
              </ul>
            </div>
            <div className="home">
              <ul>
                <li className="occupation">Occupation</li>
                <li className="education">Education</li>
                <li className="hometown">Hometown</li>
              </ul>
            </div>
            <div className="arrangements">
              <ul>
                <li className="occupation">Occupation</li>
                <li className="education">Education</li>
                <li className="hometown">Hometown</li>
              </ul>
            </div>
            <div className="details">
              <ul>
                <li className="occupation">Occupation</li>
                <li className="education">Education</li>
                <li className="hometown">Hometown</li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    )
  }
}

export default ReviewTab;