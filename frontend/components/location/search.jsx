import React from 'react';
import { Link } from 'react-router-dom';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.location).length > 1) {
      this.setState({
        error: true
      })
    }
  }

  componentWillUnmount () {
    this.props.clearSearch;
  }

  render() {
    if (!this.props.location) return null;
    const searchResults = this.props.location
    let results;
    let items;


    if (this.props.location[0].name) {
      results = Object.values(searchResults[0].spots)
      items = results.map((result, i) => {
        return (
          <div className="host-div" key={i}>
            <Link to={`/api/users/${result.host_id}`} key={Math.random()} className="host-item">
              <img className="prof-pic" src={window.default} alt="prof-pic"/>
            </Link>
            <Link to={`/api/users/${result.host_id}`} key={Math.random()} className="host-item">
              <h3 className="host-name">{result.host_name}</h3>
            </Link>
          </div>
        )
      })
    } else {
        results = Object.values(searchResults)
        items = results.map((result, i) => {
          return (
            <div className="host-div" key={i}>
              <Link to={`/api/users/${result.host_id}`} key={Math.random()} className="host-item">
                <img className="prof-pic" src={window.default} alt="prof-pic"/>
              </Link>
              <Link to={`/api/users/${result.host_id}`} key={Math.random()} className="host-item">
                <h3 className="host-name">{result.host_name}</h3>
              </Link>
              <Link to={`/api/locations/show/${result.location_id}`} key={Math.random()} className="host-item">
                <h4 className="host-location">{result.location_name}</h4>
              </Link>
            </div>
          )
      })
    }
    const stay = `Stay with one of the {Object.values(searchResults.spots).length + " "}  
    hosts in {searchResults.name}`
    const localHosts = searchResults[0].name ? "Local Hosts" : "No hosts in that area yet, here's a list of all current hosts!"
    return (
      <main className="locations-search">
        <header className="search-name">
          <h2>{searchResults[0].name ? searchResults[0].name : ""}</h2>
        </header>
        <section className="body-section">
          <header className="local-header">
            <h2>&#127968; {localHosts}</h2>
          </header>
          <div className="hosts-body">
            <h3>
              {searchResults.name ? stay : "Find a host"}
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

export default LocationSearch;
