import { connect } from 'react-redux';

import { requestUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import ProfileShow from './profile_show';

const mapStateToProps = (state, { match }) => {

  const userId = parseInt(match.params.user_id);
  return {
    userId,
    loading: state.ui.loading.userLoading
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);
