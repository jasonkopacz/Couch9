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
          <Link to="/howitworks" className="header-link">How It Works</Link>
          <Link to="/safety" className="header-link">Safety</Link>
          <Link to="/signup" className="header-link">Join</Link>
          <Link to="/login" className="header-link">Login</Link>
        </ul>
      </div> 
    </header>
    <Modal />
    <main className="splash-body">
      <SessionFormContainer className="session-form-container"/>
      <GreetingContainer className="greeting-container"/>
    </main>
   </div>
);

export default App;
 