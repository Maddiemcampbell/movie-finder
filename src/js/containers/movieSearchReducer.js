const defaultState = {
  movieSearch: '',
  movies: [],
}

export default function searchReducer(state = defaultState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'MOVIE_INPUT':{
      return {
        ...state,
        movieSearch: payload.movieSearch
      };
    }

    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        movies: payload.data.Search,
      }
    };
    
  default: {
    return state;
  }
  }
}
