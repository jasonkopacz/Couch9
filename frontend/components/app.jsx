import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from '../components/session_form/login_form_container';
import SessionFormContainer from '../components/session_form/session_form_container';
import GreetingContainer from '../components/greeting/greeting_container';
import Modal from './modal/modal';


const App = () => (
  <div>
    <header className="global-header">
    <div className="nav-header">
      <Link to="/" className="header-link">
        <img src={window.logo} alt=""/>
      </Link>
        <ul className="header-links">
          <select name="Language">
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
          </select>
          <Link to="/howitworks" className="header-link-1">How It Works</Link>
          <Link to="/safety" className="header-link-2">Safety</Link>
          <Link to="/signup" className="header-link-3">Join</Link>
          <Link to="/login" className="header-link-4">Login</Link>
        </ul>
      </div> 
    </header>
    <Modal />
    <main className="splash-body">
      <header className="splash-header">
        <h1>Stay with Locals and Meet Travelers</h1>
        <br/>
        <h2>Share Authentic Travel Experiences</h2>
      </header>
      <div className="splash-body-forms">
        <SessionFormContainer className="session-form-container"/>
        <GreetingContainer className="greeting-container"/>
      </div>
    </main>
   </div>
);

export default App;
 