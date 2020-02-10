import React from 'react';
import FromSurfer from '../../review/from_surfer_container';
import FromHost from '../../review/from_host_container';

class ReviewTab extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      renderHostReviews: false,
      renderSurfReviews: false
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.addClassTo = this.addClassTo.bind(this);
    this.showHostReviews = this.showHostReviews.bind(this);
    this.showSurfReviews = this.showSurfReviews.bind(this);
  }

  // componentWillMount() {
  //   this.props.fetchBookings(this.props.currentUser.id);
  //   this.props.fetchUsers();
  //   this.props.fetchReviews(this.props.currentUser.id);
  // }

  componentDidMount() {
    this.props.fetchAllBookings();
    this.props.fetchUsers();
    this.props.fetchReviews(this.props.currentUser.id);
  }

  showHostReviews() {
    if (this.state.renderSurfReviews) {
      this.setState({
        renderHostReviews: !this.state.renderHostReviews,
        renderSurfReviews: !this.state.renderSurfReviews
      })
    } else {
      this.setState({
        renderHostReviews: !this.state.renderHostReviews
      })
    }
  }

  showSurfReviews() {
    if (this.state.renderHostReviews) {
      this.setState({
        renderHostReviews: !this.state.renderHostReviews,
        renderSurfReviews: !this.state.renderSurfReviews
      })
    } else {
      this.setState({
        renderSurfReviews: !this.state.renderSurfReviews
      })
    }
  }

  render() {
    let hostReviews;
    let surfReviews;
    let booking;
    let author;
    const that = this;

    if (this.state.renderHostReviews) {
      const reviews_as_host = this.props.reviews_as_host;
      hostReviews = reviews_as_host.map((review, id) => {
          booking = that.props.allBookings[review.booking_id]
          author = that.props.allUsers[review.author_id]
        return (
          <ul>
            <li key={review.id}>
              <FromSurfer review={review} booking={booking} author={author}  />
            </li>
          </ul>
        )
      })
    }

    if (this.state.renderSurfReviews) {
      const reviews_from_host = this.props.reviews_from_host;
      surfReviews = reviews_from_host.map((review, id) => {
        booking = that.props.allBookings[review.booking_id]
        author = that.props.allUsers[review.author_id]
        return (
          <ul>
            <li key={review.id}>
              <FromHost review={review} booking={booking} author={author}/>
            </li>
          </ul>
        )
      })
    }

    


    return (
      <main>
        <header>
          <div id="surfers" onClick={this.showHostReviews}> 
            From Surfers
            <div className="hidden-host-reviews">
              {hostReviews}
            </div>
          </div>
          <div id="hosts" onClick={this.showSurfReviews}>
            From Hosts
            <div className="hidden-surf-reviews">
              {surfReviews}
            </div>
          </div>
        </header>
      </main>
    )
  }
}

export default ReviewTab;