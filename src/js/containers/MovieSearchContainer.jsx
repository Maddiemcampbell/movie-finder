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

    handleClick() {
        event.preventDefault();
        const { dispatch, movieSearch } = this.props;

        dispatch(getMovie(movieSearch));
    }

    render() {
        const { movieSearch, movies } = this.props;
        return (
            <div>
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
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='d-flex justify-content-center' 
                            style={{ display: 'flex', flexWrap: 'wrap' }}> {
                            movies.slice(0, 9).map((movie, i) => {
                                return (
                                    <div className='card border-0' 
                                        style={{ margin: '10px' }} 
                                        key={i}>
                                        <h1 className='card-header bg-info'>
                                            {`${movie.Title} (${movie.Year})`}
                                        </h1>
                                        <div className='card-body mb-1 pb-1' 
                                            style={{ width: '20rem' }}>
                                            <img src={`${movie.Poster}`} c
                                            lassName='img-fluid' alt={movie.Title} />
                                        </div>
                                        <div className='text-center mb-3'>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default MovieSearchContainer;
