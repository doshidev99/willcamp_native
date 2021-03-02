import { Increment } from "../components";
import { incrementAction, decrementAction } from "../actions";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    times: state.counterReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(decrementAction(step));
    },
    onIncrement: (step) => {
      dispatch(incrementAction(step));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Increment);
