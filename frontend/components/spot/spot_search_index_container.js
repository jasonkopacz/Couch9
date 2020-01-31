import { connect } from 'react-redux';
import SpotSearchIndex from './spot_search_index';

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
    clearSearch: () => dispatch(clearSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearchIndex);
