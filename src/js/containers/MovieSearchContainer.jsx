import React from 'react';
import { getMovie, movieInput } from './movieSearchActions';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSearch(event) {
        const { dispatch } = this.props;
        const { value } = event.target;

        dispatch(movieInput(value));
    }

    handleClick(event) {
        event.preventDefault();
        const { dispatch, movieSearch } = this.props;

        dispatch(getMovie(movieSearch));
    }

    render() {
        const { movieSearch } = this.props;
        return (
            <div className='searchContainer'>
                <h1>Movie Finder</h1>
                <div className='inputWrapper'>
                    <label>Search Movies:
                        <input
                            className='input'
                            value={movieSearch}
                            onChange={this.handleSearch}
                        />
                    </label>
                    <button className='button' onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }
}

export default MovieSearchContainer;
