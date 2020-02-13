import React from 'react';

class LocationShow extends React.Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount() {
//     return this.props.searchResults;
//   }

//   componentWillUnmount () {
//     this.props.clearSearch;
//   }

  render() {
      const item = this.props.location.state.item
    return (
      <div className="location-show">
        {item.name}
      </div>
    )
  }
}

export default LocationShow;
