import * as S from "../actionTypes";

const initialState = [{ name: "Father 2", year: "2021" }];

export const movieReducers = (movies = initialState, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-console
    case S.FETCH_SUCCESSDED:
      return action.receivedMovies;

    case S.FETCH_FAILED:
      return [];

    case S.ADD_MOVIE:
      return [...movies, action.newMovie];

    default:
      return movies;
  }
};
