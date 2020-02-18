import React from 'react';
import { Link } from 'react-router-dom';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.searchResults;
  }

  componentWillUnmount () {
    this.props.clearSearch;
  }

  render() {
    if (!this.props.searchResults) return null;
    const searchResults = this.props.searchResults
    const results = Object.values(searchResults.spots)
    const items = results.map((result, i) => {
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
    return (
      <main className="locations-search">
        <header className="search-name">
          <h2>{searchResults.name}</h2>
        </header>
        <section className="body-section">
          <header className="local-header">
            <h2>&#127968; Local Hosts</h2>
          </header>
          <div className="hosts-body">
            <h3>
              Stay with one of the {Object.values(searchResults.spots).length + " "}  
               hosts in {searchResults.name}
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
