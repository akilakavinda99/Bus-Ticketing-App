import axios from 'axios';
import {all, call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {
  loginRequestFailure,
  loginRequestSuccess,
} from '../actions/loginActions';
import API from '../api/apiConnection';
import {SEND_LOGIN_REQUEST} from '../types/loginTypes';

// Generator function to call the api.
function* handlelogin(action) {
  try {
    console.log('tis is action data', action.data);

    yield put(loginRequestSuccess(action.data));
  } catch (error) {
    console.log(error);
    yield put(loginRequestFailure(error));
  }
}

function* loginSaga() {
  yield all([takeEvery(SEND_LOGIN_REQUEST, handlelogin)]);
}

export default loginSaga;
