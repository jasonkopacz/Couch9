import React from 'react';
import SpotSearchItem from './spot_search_item_container'

class SpotSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.fetchAllSpots();
  }

  componentWillUnmount () {
    this.props.clearSearch;
  }

  render() {

    if (!this.props.all) return null;
    const all = Object.values(this.props.all);
    const items = all.map((result, i) => {
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
