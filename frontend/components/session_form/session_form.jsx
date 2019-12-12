import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value  
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  loginDemo(e) {
    e.preventDefault();
    const user = { email: "jk@gmail.com", password: "demouser"};
    this.props.otherForm(user);
  }

componentWillUnmount() {
  this.props.clearErrors();
}
  renderErrors() {
    return (
    <div>{this.props.errors[0]}</div>  
    )
  }
  
  render() {
    return (
      <main className="splash">
          <p className="midsection">or</p>
        <div className="signup-form-container">
          <div className="facebook-form">
            <h2>Log In Faster With</h2>
              <form className="demo-login" onSubmit={this.loginDemo}>
                <input type="submit" value="Demo User"/>
              </form>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <br />
            {/* {this.props.otherForm} */}
            <div className="signup-form">
              <h2>Sign Up With Email</h2>
              <br />
              <div className="first-name-join">
                <label className="first-name">First name
                <input required type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                  className="signup-input-first-name"
                  placeholder="First name"
                />
                </label>
                {/* <div className="fname">{this.renderErrors()}</div> */}
              </div>
              <br/>
              <div className="last-name-join">
                <label required className="last-name">Last name
                <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                  className="signup-input-last-name"
                  placeholder="Last name"
                />
                </label>
                {/* <div className="lname">{this.renderErrors()}</div> */}
              </div>
              <br/>
              <label required className="signup-form-email">Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input-email"
                  placeholder="Email"
                />
              </label>
              {/* <div className="email">{this.renderErrors()}</div> */}
              <br />
              <label className="signup-form-password">Password
                <p>Must be at least 8 characters</p>
                <input required type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input-password"
                  placeholder="Password"
                />
              </label>
              {/* <div className="password">{this.renderErrors()}</div> */}
              <ul>
              </ul>
              <br />
              <input className="session-submit" type="submit" value="Join" />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(SessionForm);
// for (let i = 0; i < this.props.errors.length; i++) {
//         let errorMessage;
//         let error = this.props.errors[i];
//         if (error.includes("can't be blank") && !this.state.fname.length) {
//            errorMessage = "Please fill out this field.";
//            return errorMessage;
//         } else if (error == "can't be blank" && !this.state.lname.length) {
//           errorMessage = "Please fill out this field.";
//           return errorMessage;
//         } else if (error == "can't be blank" && !this.state.email.length) {
//           errorMessage = "Please fill out this field.";
//           return errorMessage;
//         } else if (error === "Email is invalid" && this.state.email.includes("@")) {
//           errorMessage = `Please enter a part following '@'. '${this.state.email}' is incomplete.`;
//           return errorMessage;
//         } else if (error === "Email is invalid" && !this.state.email.includes("@")) {
//           errorMessage = `Please include and '@' in the email address. '${this.state.email}' is missing an '@'.`;
//           return errorMessage;
//         } else if (error === "Password is too short (minimum is 8 characters)" && !this.state.password.length) {
//           errorMessage = "Please fill out this field.";
//           return errorMessage;
//         } else {
//           errorMessage = "Password is too short (minimum is 8 characters)";
//           return errorMessage;
//         }
//       }