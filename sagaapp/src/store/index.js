import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger} from 'redux-logger';
import rootSaga from '../sagas';
import reducer from '../reducers';
const sagaMiddleware = createSagaMiddleware()



let store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(rootSaga);

export default store;