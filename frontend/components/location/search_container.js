import { connect } from 'react-redux';
import { clearErrors } from '../../actions/spot_actions';
import { clearSearch, searchQuery } from '../../actions/location_actions';
import LocationSearch from './search';

const mapStateToProps = ( {entities, errors, session} ) => {
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
    clearErrors: () => dispatch(clearErrors()),
    searchQuery: (item) => dispatch(searchQuery(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
