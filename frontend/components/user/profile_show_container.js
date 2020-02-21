import { connect } from 'react-redux';

import { requestUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import ProfileShow from './profile_show';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, { match }) => {

  const userId = parseInt(match.params.user_id);
  return {
    userId,
    loading: state.ui.loading.userLoading,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  fetchBookings: id => dispatch(fetchBookings(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);
