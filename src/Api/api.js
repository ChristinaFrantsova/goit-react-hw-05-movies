import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const USER_KEY = 'b24e2ced5e4c297e90eaecd2697881dc';

const getTrendingMovies = () => {
  const url = axios.get(`${BASE_URL}/trending/movie/day?api_key=${USER_KEY}`);
  return url;
};

const getSearchMovie = query => {
  const url = axios.get(
    `${BASE_URL}/search/movie?api_key=${USER_KEY}&query=${query}`
  );
  return url;
};

const getMovieDetails = id => {
  const url = axios.get(`${BASE_URL}/movie/${id}?api_key=${USER_KEY}`);
  return url;
};

const getMovieCast = id => {
  const url = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${USER_KEY}`);
  return url;
};

const getMovieReviews = id => {
  const url = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${USER_KEY}`);
  return url;
};

export {
  getTrendingMovies,
  getSearchMovie,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
