import { connect } from 'react-redux';
import { clearErrors } from '../../actions/spot_actions';
import { clearSearch, searchQuery, fetchSingleLocation } from '../../actions/location_actions';
import LocationShow from './show';

const mapStateToProps = ( {entities, errors, session} ) => {
  return {
    errors: errors.session,
    users: entities.users,
    currentUser: entities.users[session.id],
    locations: entities.locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    clearErrors: () => dispatch(clearErrors()),
    fetchSingleLocation: (id) => dispatch(fetchSingleLocation(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationShow);
