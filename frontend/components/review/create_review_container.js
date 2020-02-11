import { connect } from 'react-redux';
import CreateReview from './create_review';
import { create } from '../../actions/review_actions';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.session,
    currentUser: entities.users[session.id],
    bookings: entities.bookings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: (data) => dispatch(create(data)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
