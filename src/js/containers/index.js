import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        movieSearch: store.search.movieSearch,
        movies: store.search.movies,
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);
