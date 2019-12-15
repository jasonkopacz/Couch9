// import React from 'react';
// import DashboardContainer from '../dashboard/dashboard_container';
// import {AuthRoute} from '../../util/route_util';



// const Greeting = ({ currentUser, logout, openModal }) => {

//   const sessionLinks = () => (
//     <main className="splash">
//       <nav className="login-modal">
//         <p>Already a member? </p>
//         <br/>
//         <button onClick={() => openModal('login')}>Log In</button>
//       </nav>
//     </main>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//          <h2 className="header-name">{currentUser.fname} {currentUser.lname}</h2>
//         <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>);

//   return (
//     currentUser ?
//       <AuthRoute path="/dashboard" component={DashboardContainer} /> :
//       sessionLinks()
//   );
// };

// export default Greeting;
