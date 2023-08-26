import {createStore} from 'redux';
import reducer from '../reducer/rootReducer';

// we are connecting reducer to store
let store = createStore(reducer);

export default store
