# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

<h1 align="center">
	<img
		width="300"
		alt="Couch9"
		src="/Users/appacademystudent/Desktop/Couch9-user_auth/app/assets/images/logo.png">
</h1>

<h3 align="center">
	Global network for finding people to host your stay as you travel, or for hosting travellers.
</h3>

<p align="center">
	<strong>
		<a href="https://couch9.herokuapp.com/">Couch9</a>
	</strong>
</p>

<h1 align="center">
  <img
  alt="Profile Page"
  src="/Users/appacademystudent/Desktop/Couch9-user_auth/app/assets/images/prof.png">
</hi>

## Overview

- **Create your profile.** Customize your profile to describe everything you can offer to travellers or hosts. Share pictures of your life and of the place you're offering to travellers.
- **Bookings.** Find a place or host you like? Contact them to request a booking. Or if you're hosting, receive requests and choose whether or not to allow them to stay on your couch!
- **Global Search** Find hosts or travellers anywhere in the world!


## Built With

- Ruby
  * 2.5.1p57
- Rails
  * Rails 5.2.4
- React
  * 16.12.0
- Redux
  * 4.0.4
- React-Redux
  * 7.1.3
- Node
  * 10.13.0
- NPM
  * 6.4.1

## Features

### **Spot Creation**
 Create a page to display all of the information about the spot you're offering to travellers. Fields include:
* Available Nights to Host
* Maximum Number of Guests
* Children, Pets, Smoking Allowed In House
* Children, Pets, Smoking Status of Host
* Sleeping Arrangements
* Roommate Situation
* Public Transportation
* Wheelchair Accessability

During the spot creation phase a challenge I encountered was handling checkbox input values upon submission of the form. It took a lot of sleuthing about and trial and error to come up with my solution to the problem. The crux of the solution lies in the difference of handling between the state shape of a hosts available nights to host key and the miscellaneous keys (pet_friendly, kid_friendly, etc...). Because of the shape of the available nights to host state I had to utilize onClick handlers to compare the class name of the click target to an array of options within the state (Monday thru Sunday). If they matched I then switched the isChecked value of that date to true which then displays "Yes" rather than true on the show page.

```javascript
  checkboxUpdate(field) {
    return e => this.setState({
      [field]: true });
    };

  dateUpdate() {
    return e => {
      let selections = e.target.className;
      Array.from(this.state[selections]).forEach(selection => {
        if (selection.value === e.target.value)
          selection.isChecked = e.target.checked;
      });
      this.setState({ selections });
    };
  }
```






### **User Creation**
Create an account that accurately displays all of the input information.
Fields include:
 * First Name
 * Last Name
 * Email
 * Password
 * Age
 * Gender
 * Location

Towards the end of my user creation phase I encountered a tricky problem. Creating an account involves multiple page re-renders rather than a single page form submission containing all necesarry information. Because of this I had to implement a solution where the form data on the splash page persists over page refreshes so that I could then combine it with the following pages information to create a single user object. To do so I created a new slice of state that stores the intial user data and combined it with the second forms slice of state.

