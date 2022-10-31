import axios from 'axios';
import {all, call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {busRequestFailure, busRequestSuccess} from '../actions/busActions';
import API from '../api/apiConnection';
import {GET_BUS_REQUEST} from '../types/getBusTypes';

const api = new API();
const sendGetBusRequest = data =>
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1');
  api.get('https://jsonplaceholder.typicode.com/todos/1');
// then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

function* handleGetBus(action) {
  try {
    console.log(action.data);
    const response = yield call(sendGetBusRequest, action.data);
    // console.log(response.data);
    //  console.log(res)
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
