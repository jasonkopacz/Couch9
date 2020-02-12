import React from 'react';

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
    const { searchResults } = this.props;
    const items = searchResults.map((result, i) => {
      return (
        <ul>
          <li key={i}>
            <div key={result.id}>{result.name}</div>
          </li>
        </ul>
      )
    })
    return (
      <div className="locations-search">
        {items}
      </div>
    )
  }
}

export default LocationSearch;
