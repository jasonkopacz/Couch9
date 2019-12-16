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
    this.changeClass = this.changeClass.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value  
    });
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
  
  componentWillUnmount() {
    this.props.clearErrors();
    $('#error').addClass('hidden')
  }
  
  changeClass(element) {
    $(element).toggleClass('hidden');
    $(element).toggleClass('password-error')
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // debugger
    if (user.password.length < 8) {
      return this.changeClass('#error')
    }
    this.props.getData(user);
    (this.props.history.push("/create"));
  }
  
  loginDemo(e) {
    e.preventDefault();
    const user = { email: "jk@gmail.com", password: "demouser"};
    this.props.otherForm(user).then(this.props.history.push("/dashboard"));
  }
  
  render() {
    return (
      <main className="splash">
        <div className="signup-form-container">
          {this.renderErrors()}
          <div className="facebook-form">
            <h2>Log In Faster With</h2>
              <form className="demo-login" onSubmit={this.loginDemo}>
                <input type="submit" value="Demo User"/>
              </form>
          </div>
          <p className="midsection">or</p>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <p id="error" className="hidden"  >Password is too short(minimum is 8 characters)</p>
            <br/>
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