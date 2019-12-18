import { connect } from 'react-redux';
import SpotTab from './spot_tab';

const mapStateToProps = ({ ui: { forms } }) => {
  return {
    // justCreated: [forms.data.justCreated]
  };
};

export default connect(
  mapStateToProps)(SpotTab);
