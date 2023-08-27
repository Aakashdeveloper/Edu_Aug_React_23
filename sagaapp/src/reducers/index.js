import { combineReducers } from 'redux';
import movies from './movieReducers';


const rootReducer = combineReducers({
    movies
})

export default rootReducer;