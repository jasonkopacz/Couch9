import React from 'react';

class SpotSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.searchResults;
  }

  componentWillUnmount () {
    debugger
    this.props.clearSearch;
  }

  render() {
    if (!this.props.searchResults) return null;
    const { searchResults } = this.props;

    return (
      <div>
        {searchResults[0].location_name}
      </div>
    )
  }
}

export default SpotSearchIndex;
