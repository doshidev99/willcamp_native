export const URL_MOVIE = 'https://api.mocki.io/v1/f25ac6a6';

function* getMoviesFromApi() {
  const data = yield fetch(URL_MOVIE, {
    method: 'GET',
    headers: new Headers(),
    body: '',
  })
    .then((response) => response.json())
    .then((result) => result);

  return data;
}
export const Api = {
  getMoviesFromApi,
};
