import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {watcherSaga} from '../saga/rootSaga';
import busReducer from '../reducers/busReducer';

const rootReducer = combineReducers({
  buses: busReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
