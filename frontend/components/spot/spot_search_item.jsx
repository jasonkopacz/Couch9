import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotSearchItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const result = this.props.result;
        return(
            <>
                <h3>{result.fname} {result.lname}</h3>
            </>
        )
    }
}

export default withRouter(SpotSearchItem);