import React from 'react';
import { Link } from 'react-router-dom';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    return this.props.searchResults;
    debugger
  }

  componentWillUnmount () {
    this.props.clearSearch;
    debugger
  }

  render() {
    // const items = searchResults.map((result, i) => {
    //   return (
    //     <ul>
    //       <li key={i}>
    //         <div key={result.id}>{result.name}</div>
    //       </li>
    //     </ul>
    //   )
    // })
    if (!this.props.searchResults) return null;
    const searchResults = this.props.searchResults
    const results = Object.values(searchResults.spots)
    const items = results.map(result => {
      return (
        <div>
          <Link to={`/api/users/${result.host_id}`}>
            {result.host_name}
          </Link>
        </div>
      )
    })
    return (
      <main className="locations-search">
        <header className="search-name">
          <h2>{searchResults.name}</h2>
        </header>
        <section>
          <header>
            <h2>&#127968; Local Hosts</h2>
          </header>
          <div>
            <h3>
              Stay with one of the {Object.values(searchResults.spots).length} 
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
