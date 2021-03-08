import { connect } from 'react-redux';
import { TaskListComponent } from '../components';

const mapStateToProps = (state) => ({
  listTask: state.taskReducers,
});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
