import { connect } from 'react-redux';
import SpotSearchIndex from './spot_search_index';
import { clearErrors } from '../../actions/spot_actions';

const mapStateToProps = (ownProps, state) => {
  return {
    errors: ownProps.errors.session,
    users: ownProps.entities.users,
    currentUser: ownProps.entities.users[ownProps.session.id],
    profileOwner: state.user,
    searchResults: Object.values(ownProps.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearchIndex);
