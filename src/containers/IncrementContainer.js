import { connect } from 'react-redux';
import { Increment } from '../components';
import { incrementAction, decrementAction } from '../redux/actions';

const mapStateToProps = (state) => ({
  times: state.counterReducers,
});

const mapDispatchToProps = (dispatch) => ({
  onDecrement: (step) => {
    dispatch(decrementAction(step));
  },
  onIncrement: (step) => {
    dispatch(incrementAction(step));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Increment);
