const axios = require('axios');

export function getMovie(movieSearch){
    return{
        type: 'GET_MOVIE',
        payload: axios.get(`/movieInfo/${ movieSearch }`)
    }
}

export function movieInput(movieSearch) {
    return {
        type: 'UPDATE_SEARCH_VALUE',
        payload: {movieSearch}
    };
}


