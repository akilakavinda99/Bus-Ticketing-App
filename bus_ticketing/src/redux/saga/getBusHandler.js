import axios from 'axios';
import {all, call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {busRequestFailure, busRequestSuccess} from '../actions/busActions';
import API from '../api/apiConnection';
import {GET_BUS_REQUEST} from '../types/getBusTypes';

const api = new API();
const sendGetBusRequest = data =>
  api.get('https://jsonplaceholder.typicode.com/todos/1');

function* handleGetBus(action) {
  try {
    const response = yield call(sendGetBusRequest, action.data);
    yield put(busRequestSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(busRequestFailure(error));
  }
}

function* getBusSaga() {
  yield all([takeLeading(GET_BUS_REQUEST, handleGetBus)]);
}

export default getBusSaga;
