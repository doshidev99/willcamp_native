import { MovieComponent } from "../components";
import * as S from "../redux/actions";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchMovies: () => {
    //   dispatch(S.fetchMovieAction({ name: "test", year: "test" }));
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
