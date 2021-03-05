import { MovieComponent } from "../components";
import * as S from "../redux/actions";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
