import { connect } from 'react-redux';
import SpotSearchItem from './spot_search_item';
import { clearErrors } from '../../actions/spot_actions';

const mapStateToProps = (ownProps, state) => {
  return {
    errors: ownProps.errors.session,
    users: ownProps.entities.users,
    currentUser: ownProps.entities.users[ownProps.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearchItem);
