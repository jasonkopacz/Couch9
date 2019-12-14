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
    const user = { email: "jk@gmail.com", password: "demouser" };
    this.props.otherForm(user).then(this.props.history.push("/dashboard"));
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
        <form className="facebook" onSubmit={this.loginDemo}>
          <input type="submit" value="Demo User" />
        </form>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <header className="login-header">Log in to Couchsurfing</header>
          <br />
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
                <input required type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input-email"
                placeholder="Email or Username"
              />
            </label>
            <br />
            <label>
                <input required type="password"
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
            <input className="session-submit-login" type="submit" value="Log In"></input>
              <p>or</p>
            {this.props.otherForm}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);