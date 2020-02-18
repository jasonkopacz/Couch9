import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    return this.props.fetchSingleLocation(this.props.match.params.location_id);
  }

//   componentWillUnmount () {
//     this.props.clearSearch;
//   }

  render() {
      const item = this.props.locations[this.props.match.params.location_id]
      if (item.spots === undefined) return null;
      const location = this.props.locations[this.props.match.params.location_id]
      const hosts = Object.values(location.spots)
      debugger
      const items = hosts.map((host, i) => {
        return (
          <div className="host-div" key={i}>
            <Link to={`/api/users/${host.host_id}`} key={Math.random()} className="host-item">
              <img className="prof-pic" src={window.default} alt="prof-pic"/>
            </Link>
            <Link to={`/api/users/${host.host_id}`} key={Math.random()} className="host-item">
              <h3 className="host-name">{host.host_name}</h3>
            </Link>
          </div>
        )
      })

    return (
      <main className="locations-search">
        <header className="search-name">
          <h2>{location.name}</h2>
        </header>
        <section className="body-section">
          <header className="local-header">
            <h2>&#127968; Local Hosts</h2>
          </header>
          <div className="hosts-body">
            <h3>
              Stay with one of the {Object.values(location.spots).length + " "}  
               hosts in {location.name}
            </h3>
            <span className="host-clickables">
              {items}
            </span>

          </div>
        </section>

      </main>
    )
  }
}

export default LocationShow;
