import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {signup, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  function initialize() {
    let input = document.getElementById('searchQuery');
    new google.maps.places.Autocomplete(input);
    let input2 = document.getElementById('searchQueryTop');
    new google.maps.places.Autocomplete(input2);
    let input3 = document.getElementById('dest-search');
    new google.maps.places.Autocomplete(input3);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
  window.store = store;
});