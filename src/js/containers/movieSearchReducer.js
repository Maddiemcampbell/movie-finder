const defaultState = {
    movieSearch: '',
    title: ''
}

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
    
    switch (type) {
      case 'UPDATE_SEARCH_VALUE':
        return {
          ...state,
          movieSearch: payload.movieSearch
        };
  
        case 'GET_MOVIE_FULFILLED': {
          return {
            ...state,
            title: payload.data.Search.Title
            }
          };
        }
  
    return state;
}
