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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <main className="splash">
          <p className="midsection">or</p>
        <div className="signup-form-container">
          <div className="facebook-form">
            <h2>Log In Faster With</h2>
              <form onSubmit={this.loginDemo}>Demo User
                <input type="submit" value="Demo User"/>
              </form>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <br />
            {this.props.otherForm}
            {this.renderErrors()}
            <div className="signup-form">
              <h2>Sign Up With Email</h2>
              <br />
              <div className="first-name-join">
                <label className="first-name">First name
                <input type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                  className="signup-input-first-name"
                  placeholder="First name"
                />
                </label>
              </div>
              <br/>
              <div className="last-name-join">
                <label className="last-name">Last name
                <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                  className="signup-input-last-name"
                  placeholder="Last name"
                />
                </label>
              </div>
              <br/>
              <label className="signup-form-email">Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input-email"
                  placeholder="Email"
                />
              </label>
              <br />
              <label className="signup-form-password">Password
                <p>Must be at least 8 characters</p>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input-password"
                  placeholder="Password"
                />
              </label>
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
