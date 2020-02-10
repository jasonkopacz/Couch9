import React from 'react';
import { withRouter } from 'react-router-dom';

class FromHost extends React.Component {

    render () {
        return (
            <main>
                <section className="review-container">
                    <header>
                        <div className="user-info">
                            <h2>Name</h2>
                            <h3>Location</h3>
                        </div>
                        <div className="stay-info">
                            <h3>Date</h3>
                            <h4>Nights</h4>
                        </div>
                    </header>
                    <div className="review-body">
                        Body
                    </div>
                </section>
            </main>
        )
    }
}

export default withRouter(FromHost);