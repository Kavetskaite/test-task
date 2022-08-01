import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GENERATE_PASSWORD, LOGIN_WITH_CODE } from '../actions/actionTypes';
import { successLoginWithCode, successGeneratePassword, failedLoginWithCode } from '../actions';
import { ResponseGenerator } from '../../interfaces';

export function* generatePassword(action: any) {
  try {
    yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/Accounts/GeneratePassword`, action?.payload
    );

    yield put(successGeneratePassword({ email: action?.payload?.email }))
  } catch (err) {

  }
}

export function* loginWithCode(action: any) {
  try {
    const res: ResponseGenerator = yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/Accounts/LoginWithCode`, action?.payload
    );

    yield put(successLoginWithCode({ auth: res.data.jwt.token, loginError: false }));
  } catch (err) {
    yield put(failedLoginWithCode({ loginError: true }))
  }
}

export function* userSaga() {
  yield takeEvery(GENERATE_PASSWORD, generatePassword);
  yield takeEvery(LOGIN_WITH_CODE, loginWithCode);
}