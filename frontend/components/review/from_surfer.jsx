import React from 'react';
import { withRouter } from 'react-router-dom';

class FromSurfer extends React.Component {
    
    render () {
        const { review, booking, author } = this.props
        const color = review.recommended ? "green" : "red";
        return (
            <main>
                <section className="review-container">
                    <header>
                        <div className="user-info">
                            <h2>{author.fname} {author.lname}</h2>
                            <h3>{author.location.name}</h3>
                        </div>
                        <div className="stay-info">
                            <h3>{booking ? booking.arrival_date : ""}</h3>
                            <h4></h4>
                        </div>
                    </header>
                    <span>
                        <p className={color}>{review.recommended ? "Positive" : "Negative"}</p>
                    </span>
                    <div className="review-body">
                        <p>{review.body}</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(FromSurfer);