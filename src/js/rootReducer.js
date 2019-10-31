import { combineReducers } from 'redux';
import movieSearchReducer from './containers/movieSearchReducer';

const rootReducer = combineReducers({
    search: movieSearchReducer
});

export default rootReducer;
