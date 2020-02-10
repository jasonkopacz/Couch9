import React from 'react';
import { withRouter } from 'react-router-dom';

class FromSurfer extends React.Component {
    
    render () {
        const { review, booking, author } = this.props
        return (
            <main>
                <section className="review-container">
                    <header>
                        <div className="user-info">
                            <h2>{author.fname} {author.lname}</h2>
                            <h3>{author.location}</h3>
                        </div>
                        <div className="stay-info">
                            <h3>{booking.arrival_date}</h3>
                            <h4></h4>
                        </div>
                    </header>
                    <div className="review-body">
                        {review.body}
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(FromSurfer);