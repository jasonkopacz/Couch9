import { connect } from 'react-redux';
import AboutTab from './about_tab';
// import { requestSpot } from '../../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {

  // const profileId = mathparseInt(match.params.user_id);
  return {
    currentUser: state.entities.users[state.session.id],
    // profileId 
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     requestSpot: () => dispatch(requestSpot(id))
//   };
// };


export default connect(mapStateToProps)(AboutTab);
