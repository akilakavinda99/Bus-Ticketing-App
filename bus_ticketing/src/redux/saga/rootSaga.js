import {all, fork, takeLatest} from 'redux-saga/effects';
import getBusSaga from './getBusHandler';
import loginSaga from './lognHandler';

export function* watcherSaga() {
  yield all([fork(getBusSaga), fork(loginSaga)]);
}
