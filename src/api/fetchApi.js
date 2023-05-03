import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ed700b5d7b679b57b749969c057aea5';

export const fetchTrendMovies = async () => {
  return await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const fetchMoviesByName = async () => {
  return await axios
    .get(`${BASE_URL}/search/movie?name?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const fetchMoviesDetail = async id => {
  return await axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};
