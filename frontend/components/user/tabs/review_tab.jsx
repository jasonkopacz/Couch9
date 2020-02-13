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
            <li key={review.id} className="review-item">
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
          <a onClick={this.showHostReviews} id={selected1}>From Surfers <span className="badge" id={selected3}>{this.props.reviews_as_host.length}</span></a>
          <a onClick={this.showSurfReviews} id={selected2}>From Hosts <span className="badge" id={selected4}>{this.props.reviews_from_host.length}</span></a>
        </header>
        <body className="review-body">
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
          
        </body>
      </main>
    )
  }
}

export default ReviewTab;