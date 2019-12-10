import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">Couch9</Link>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </header>
   </div>
);

export default App;
 