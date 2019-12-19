import { connect } from 'react-redux';
import SpotTab from './spot_tab';
import {requestSpot } from '../../../actions/spot_actions';

const mapStateToProps = ({session, entities}) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSpot: () => dispatch(requestSpot(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SpotTab);
