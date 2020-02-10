import React from 'react';
import FromSurfer from '../../review/from_surfer_container';
import FromHost from '../../review/from_host_container';

class ReviewTab extends React.Component {
  constructor(props) {
    super(props) 
    // this.handleClick = this.handleClick.bind(this);
    // this.addClassTo = this.addClassTo.bind(this);
    this.showHostReviews = this.showHostReviews.bind(this);
    this.showSurfReviews = this.showSurfReviews.bind(this);
  }

  componentDidMount() {
    debugger
    return this.props.fetchReviews(this.props.currentUser.id);
  }

  showHostReviews() {
    debugger
    const reviews_as_host = this.props.reviews_as_host;
    const hostReviews = reviews_as_host.map((review, id) => {
      return (
        <FromSurfer review={review} />
      )
    })
    return hostReviews;
  }

  showSurfReviews() {
    debugger
    const reviews_from_host = this.props.reviews_from_host;
    const surfReviews = reviews_from_host.map((review, id) => {
      return (
        <FromHost review={review} />
      )
    })
    return surfReviews;
  }

  render() {
    
    

    


    return (
      <main>
        <header>
          <div id="surfers" onClick={() => this.showHostReviews()}> 
            From Surfers
            <div className="hidden-host-reviews">

            </div>
          </div>
          <div id="hosts" onClick={() => this.showSurfReviews()}>
            From Hosts
            <div className="hidden-surf-reviews">
            
            </div>
          </div>
        </header>
      </main>
    )
  }
}

export default ReviewTab;