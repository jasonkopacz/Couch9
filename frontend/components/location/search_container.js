import { connect } from 'react-redux';
import { clearErrors } from '../../actions/spot_actions';
import { clearSearch } from '../../actions/location_actions';
import LocationSearch from './search';

const mapStateToProps = ( {entities, errors, session} ) => {
  debugger
  return {
    errors: errors.session,
    users: entities.users,
    currentUser: entities.users[session.id],
    searchResults: entities.locations.searchResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
