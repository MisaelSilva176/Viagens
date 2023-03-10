import{ createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReduce from './modules/rootReduce';

import rootSaga  from './modules/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReduce, enhancer);

sagaMiddleware.run(rootSaga);

export default store;