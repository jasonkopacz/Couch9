import React from 'react';
import { withRouter } from 'react-router-dom';
import SplashHeader from '../splash/splash_header';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const gender = document.getElementById("gender");
    const user = Object.assign({}, this.state, this.props.formData);
    this.props.processForm(user).then(this.props.history.push('/dashboard'));
  }

  // getAge() {
  //   const d = document.getElementById("day");
  //   const day = Math.floor(d.options[d.selectedIndex].value);
  //   const m = document.getElementById("month")
  //   const month = Math.floor(m.options[m.selectedIndex].value);
  //   const y = document.getElementById("year")
  //   const year = Math.floor(y.options[y.selectedIndex].value);
  //   var today = new Date();
  //   var birthDate = new Date(`${year}${month}${day}`);
  //   var age = today.getFullYear() - birthDate.getFullYear();
  //   // var m = today.getMonth() - birthDate.getMonth();
  //   // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   //   age--;
  //   // }
  //   return age; 
  // }

  

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }
  renderErrors() {
    return (
      <div>{this.props.errors[0]}</div>
    )
  }

  render() {
    return (
      <main className="create">
        <SplashHeader/>
        <header className="create-header">
          <h1>Create account</h1>
          <h2>
            This information helps us fill out your profile so the Couch9 
            community can get to know you.
          </h2>
        </header>
        <div className="create-form-container">
          <form onSubmit={this.handleSubmit} className="create-form-box">
            <br />
            <div className="create-form">
              <fieldset className="birthday">Birthday
                <label className="birth-date">
                  <select name="day" id="day" placeholder="Day" required>
                    <option value="Day">Day</option>
                    <option value="2">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">4</option>
                    <option value="2">5</option>
                    <option value="2">6</option>
                    <option value="2">7</option>
                    <option value="2">8</option>
                    <option value="2">9</option>
                    <option value="2">10</option>
                    <option value="2">11</option>
                    <option value="2">12</option>
                    <option value="2">13</option>
                    <option value="2">14</option>
                    <option value="2">15</option>
                    <option value="2">16</option>
                    <option value="2">17</option>
                    <option value="2">18</option>
                    <option value="2">19</option>
                    <option value="2">20</option>
                    <option value="2">21</option>
                    <option value="2">22</option>
                    <option value="2">23</option>
                    <option value="2">24</option>
                    <option value="2">25</option>
                    <option value="2">26</option>
                    <option value="2">27</option>
                    <option value="2">28</option>
                    <option value="2">29</option>
                    <option value="2">30</option>
                    <option value="2">31</option>
                  </select>
                  <select name="month" id="month" placeholder="Month" required>
                    <option value="Month">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select name="Year" id="year" placeholder="Year" required>
                    <option>- Year -</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                  </select>
                </label>
              </fieldset>
              <fieldset className="gender">Gender
                <label className="gender-select">
                  <select name="Gender" id="gender" placeholder="Gender" required>
                    <option value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </fieldset>
              <fieldset className="city">
                <span>City</span>
                <label className="create-form-city">
                  <input required type="text"
                    value={this.state.city}
                    onChange={this.update('city')}
                    className="create-input-password"
                    placeholder="Where do you live?"
                  />
                </label>
              </fieldset>
              <p>                
                By creating an account you agree to hiring me on the spot.
              </p>
              <input className="create-submit" type="submit" value="Create account" />
            </div>
          </form>
        </div>
        <nav className="create-login-modal">
          <p>Already a member? </p>
          <br />
          <button onClick={() => openModal('login')}>Log In</button>
        </nav>
      </main>
    );
  }
}

export default withRouter(CreateForm);