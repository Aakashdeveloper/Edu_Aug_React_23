import {combineReducers} from 'redux';
import films from './moviesReducer';


///declare all reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;