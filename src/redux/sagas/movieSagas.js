import { put, takeEvery } from "redux-saga/effects";
import { Api } from "../../api";
import * as S from "../actionTypes";

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getMoviesFromApi();

    // eslint-disable-next-line no-console
    console.log(receivedMovies, "receivedMovies");
    
    yield put({
      type: S.FETCH_SUCCESSDED,
      receivedMovies,
    });
  } catch (error) {
    yield put({ type: S.FETCH_FAILED, error });
  }
}

export function* wathFetchMovies() {
  yield takeEvery(S.FETCH_MOVIE, fetchMovies);
}
