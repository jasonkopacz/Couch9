import { connect } from 'react-redux';
import AboutTab from './about_tab';
// import { requestSpot } from '../../../actions/spot_actions';

const mapStateToProps = ({entities: {users}, session}) => {

  return {
    currentUser: users[session.id]
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     requestSpot: () => dispatch(requestSpot(id))
//   };
// };


export default connect(mapStateToProps)(AboutTab);
