const API_KEY = "eb7a75e650eb7e8785b189b65990a577";
const BASE_URL = "https://api.themoviedb.org/3";

//api code for getting popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); //makes a requestt to movie database
  const data = await response.json(); //turns the response from server to json
  return data.results; //allows us to view the details of the response, basic api shii
};

//api code for searching movies
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  ); //makes a requestt to movie database
  const data = await response.json(); //turns the response from server to json
  return data.results; //allows us to view the details of the response, basic api shii
};
