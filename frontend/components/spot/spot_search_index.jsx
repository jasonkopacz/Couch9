import React from 'react';
import SpotSearchItem from './spot_search_item_container'

class SpotSearchIndex extends React.Component {
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
          <li key={result.id}>
            <div>{result.fname} {result.lname}</div>
          </li>
        </ul>
      )
    })
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default SpotSearchIndex;
