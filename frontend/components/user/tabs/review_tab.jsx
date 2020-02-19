import React from 'react';
import FromSurfer from '../../review/from_surfer_container';
import FromHost from '../../review/from_host_container';
import { withRouter } from 'react-router-dom';

class ReviewTab extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      renderHostReviews: false,
      renderSurfReviews: false,
      reviews_as_host_from_surfer: [],
      reviews_for_host: [],
      reviews_from_host: [],
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
    if (this.props.match.params.user_id) {
      this.props.fetchReviews(this.props.match.params.user_id)
      .then(() => {
        this.setState({
          reviews_as_host_from_surfer:  Object.values(this.props.allUsers[this.props.match.params.user_id].reviews_as_host_from_surfer),
          // reviews_as_host_for_surfer:  Object.values(this.props.allUsers[this.props.match.params.user_id].reviews_as_host),
          reviews_from_host: Object.values(this.props.allUsers[this.props.match.params.user_id].reviews_from_host),
          // reviews_for_host: Object.values(this.props.allUsers[this.props.match.params.user_id].reviews_for_host),
        })
      })
      this.props.fetchAllBookings();
      this.props.fetchUsers();
    } else {
      this.props.fetchReviews(this.props.currentUser.id);
      this.props.fetchAllBookings();
      this.props.fetchUsers();
    }
  }

  componentWillUnmount() {
    this.props.clearBookings();
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

    debugger
    if (this.state.renderHostReviews) {
      const reviews_as_host_from_surfer = this.state.reviews_as_host_from_surfer;
      hostReviews = reviews_as_host_from_surfer.map((review, id) => {
          booking = that.props.allBookings[review.booking_id]
          author = that.props.allUsers[review.author_id]
          
        return (
          <ul key={id}>
            <li key={review.id} className="review-item">
              <FromSurfer review={review} booking={booking} author={author}  />
            </li>
          </ul>
        )
      })
    }

    if (this.state.renderSurfReviews) {
      const reviews_from_host = this.state.reviews_from_host;
      surfReviews = reviews_from_host.map((review, id) => {
        booking = that.props.allBookings[review.booking_id]
        author = that.props.allUsers[review.author_id]
        return (
          <ul key={id}>
            <li key={review.id} className="review-item">
              <FromHost review={review} booking={booking} author={author}/>
            </li>
          </ul>
        )
      })
    }

    const selected1 = this.state.renderHostReviews ? "active" : ""
    const selected2 = this.state.renderSurfReviews ? "active" : ""
    const selected3 = this.state.renderHostReviews ? "active-badge" : "" 
    const selected4 = this.state.renderSurfReviews ? "active-badge" : ""

    return (
      <main>
        <header className="reviews-header">
          <h2>REVIEWS</h2>
        </header>
        <header className="review-header">
          <a onClick={this.showHostReviews} id={selected1}>From Surfers <span className="badge" id={selected3}>{this.state.reviews_as_host_from_surfer.length}</span></a>
          <a onClick={this.showSurfReviews} id={selected2}>From Hosts <span className="badge" id={selected4}>{this.state.reviews_from_host.length}</span></a>
        </header>
        <div className="review-body">
          <div id="surfers"> 
            <div className="hidden-host-reviews">
              {hostReviews}
            </div>
          </div>
          <div id="hosts">
            <div className="hidden-surf-reviews">
              {surfReviews}
            </div>
          </div>
          
        </div>
      </main>
    )
  }
}

export default withRouter(ReviewTab);