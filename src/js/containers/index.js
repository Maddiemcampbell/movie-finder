import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        movieSearch: store.search.movieSearch,
        title: store.search.title,
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);