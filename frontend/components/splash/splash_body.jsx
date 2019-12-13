import React from 'react';
import Modal from '../modal/modal';
import SessionFormContainer from '../session_form/session_form_container';
import GreetingContainer from '../greeting/greeting_container';

class SplashBody extends React.Component {

  render() {
    return (
      <main className="splash-body">
      <Modal />
        <header className="splash-header">
          <h1>Stay with Locals and Meet Travelers</h1>
          <br />
          <h2>Share Authentic Travel Experiences</h2>
        </header>
        <div className="splash-body-forms">
          <SessionFormContainer className="session-form-container" />
          <GreetingContainer className="greeting-container" />
        </div>
      </main>
    )
  }
}

export default SplashBody;