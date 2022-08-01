import { all, fork } from 'redux-saga/effects';
import { userSaga } from './user';
import { globalSaga } from './global';
import { labelsSaga } from './labels';


export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(globalSaga),
    fork(labelsSaga),
]);
}