import axios from 'axios';

export function getMovie(movieSearch) {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`/movieInfo/${movieSearch}`)
  }
}

export function movieInput(movieSearch) {
  return {
    type: 'MOVIE_INPUT',
    payload: {
      movieSearch
    }
  };
}
