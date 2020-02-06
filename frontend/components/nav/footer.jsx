import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="main-footer">
        <h3>Jason Kopacz</h3>
        <div className="footer-icons">
          <a target="_blank" href="https://github.com/Alaizard/Couch9">
            <img src={window.gh} />
          </a>
          <a target="_blank" href="https://couch9.herokuapp.com/">
            <img src={window.heroku} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jason-kopacz-2917264a/">
            <img src={window.linkedin} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;