import { AddComponent } from "../components";
import { addNewTask } from "../redux/actions";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (payload) => {
      dispatch(addNewTask(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
