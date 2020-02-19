import { connect } from 'react-redux';
import SpotSearchIndex from './spot_search_index';
import { clearErrors, fetchAllSpots } from '../../actions/spot_actions';

const mapStateToProps = ({entities, errors, session}) => {
  return {
    errors: errors.session,
    users: entities.users,
    currentUser: entities.users[session.id],
    all: entities.spots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllSpots: () => dispatch(fetchAllSpots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearchIndex);
