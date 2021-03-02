import { TaskListComponent } from "../components";
import { addNewTask } from "../actions";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    listTask: state.taskReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
