import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header className="login-header">Log in to Couchsurfing</header>            <br />
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
                <input type="email"
                value={this.state.email}
                onChange={this.update('username')}
                className="login-input-email"
                placeholder="Email or Username"
              />
            </label>
            <br />
            <label>
                <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-password"
                placeholder="Password"
              />
            </label>
            <span className="remember-field">
              <input type="checkbox" value="remember" name="user[remember_me]" defaultChecked></input>
              <label>Remember me?</label>
              <a href="/users/password/new">Forgot password?</a>

            </span>
            <br />
            <input className="session-submit-login" type="submit" value={this.props.formType} />
            <p>or</p>
            <a href="www.facebook.com" className="facebook">Continue with Facebook</a>
            {this.props.otherForm}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);