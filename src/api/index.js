export const URL_MOVIE = `https://api.mocki.io/v1/f25ac6a6`;

function* getMoviesFromApi() {
  const response = yield fetch(URL_MOVIE, {
    method: "GET",
    headers: new Headers(),
    body: "",
  });
  if (response.status === 200) {
    console.log(JSON.parse(response), "response");
  }
  // eslint-disable-next-line no-console
}
export const Api = {
  getMoviesFromApi,
};
