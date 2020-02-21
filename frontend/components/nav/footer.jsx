import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="main-footer">
        <h3>Jason Kopacz</h3>
        <div className="footer-icons">
          <a href="https://alaizard.github.io/JasonKopacz/" target="_blank">
            <img src={window.personal} className="personal"/>
          </a>
          <a target="_blank" href="https://github.com/Alaizard/Couch9">
            <img src={window.gh} />
          </a>
          <a target="_blank" href="https://angel.co/jason-kopacz">
            <img src={window.angel} />
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