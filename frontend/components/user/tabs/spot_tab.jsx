import React from 'react';
import {Link} from 'react-router-dom';
import SpotShowContainer from '.././../spot/spot_show_container';

class SpotTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spotId: {sp: this.props.currentUser.spot_id}
    };
    this.newUser = this.newUser.bind(this);
    this.oldUser = this.oldUser.bind(this);
  }

  newUser() {
    return (
      <main className="create-spot-button">
          <button>
            <Link to="/spots/new">Create Your Spot</Link>
          </button>
      </main>
    )
  }

  oldUser() {
    return (
      <SpotShowContainer />
    )
  }
  render() {
    if (this.props.currentUser.spot) {
      return this.oldUser();
    } else {
      return this.newUser();
    }
  }
}

export default SpotTab;