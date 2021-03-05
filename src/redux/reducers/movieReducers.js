import * as S from '../actionTypes';

const initialState = [{ name: 'Father 2', year: '2021' }];

// eslint-disable-next-line import/prefer-default-export
export const movieReducers = (movies = initialState, { payload, type }) => {
  switch (type) {
    // eslint-disable-next-line no-console
    case S.FETCH_SUCCESSDED:
      return [...movies, ...payload];

    case S.FETCH_FAILED:
      return [];

    case S.ADD_MOVIE:
      return [...movies];

    default:
      return movies;
  }
};
