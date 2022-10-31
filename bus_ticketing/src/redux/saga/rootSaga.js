import {all, fork, takeLatest} from 'redux-saga/effects';
import getBusSaga from './getBusHandler';

export function* watcherSaga() {
  yield all([fork(getBusSaga)]);
}
