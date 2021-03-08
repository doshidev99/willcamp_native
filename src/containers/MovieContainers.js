import { connect } from 'react-redux';
import { MovieComponent } from '../components';

const mapStateToProps = (state) => ({
  movies: state.movieReducers,
});

const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
