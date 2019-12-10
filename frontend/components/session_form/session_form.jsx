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
        <div className="signup-form-container">
          <h1>Stay with Locals and Meet Travelers</h1>
          <h2>Share Authentic Travel Experiences</h2>
          <div className="facebook-form">
            <h2>Sign Up Faster With</h2>
              <form action="http://facebook.com">
              <input type="submit" value="Facebook" />
              </form>
            <h3>We will never post without your permission.</h3>
          </div>
          <p>or</p>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <br />
            {this.props.otherForm}
            {this.renderErrors()}
            <div className="signup-form">
              <h2>Sign Up With Email</h2>
              <br />
              <label>First name
                <input type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                  className="signup-input"
                  placeholder="First name"
                />
              </label>
              <br/>
              <label>Last name
                <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                  className="signup-input"
                  placeholder="Last name"
                />
              </label>
              <br/>
              <label>Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input"
                  placeholder="Email"
                />
              </label>
              <br />
              <label>Password
                <p>Must be at least 8 characters</p>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
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
