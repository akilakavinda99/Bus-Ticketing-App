import axios from 'axios';
import {all, call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {
  loginRequestFailure,
  loginRequestSuccess,
} from '../actions/loginActions';
import API from '../api/apiConnection';
import {SEND_LOGIN_REQUEST} from '../types/loginTypes';

// console.log(sendLoginRequestApi);

function* handlelogin(action) {
  try {
    console.log('tis is action data', action.data);
    // const res = yield sendLoginRequestApi(action.data).then(res1 => {
    //   console.log(res1);
    //   return res1;
    // });
    // console.log(res);
    // console.log(res);
    // const ress = yield sendLoginRequestApi(action.data);
    // console.log('thisis res', ress);
    // console.log(res);

    // console.log('this is responseeee', response.data._id);
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
