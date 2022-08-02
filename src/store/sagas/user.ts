import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GENERATE_PASSWORD, LOGIN_WITH_CODE, GET_CURRENT_USER, UPDATE_CURRENT_USER } from '../actions/actionTypes';
import { successLoginWithCode, successGeneratePassword, failedLoginWithCode, successGetCurrentUser, successUpdateCurrentUser } from '../actions';
import { ResponseGenerator, Action } from '../../interfaces'

export function* generatePassword(action: any) {
  try {
    yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/Accounts/GeneratePassword`, action?.payload
    );

    yield put(successGeneratePassword({ email: action?.payload?.email }))
  } catch (err) {

  }
}

export function* getCurrentUser() {
  try {
    const res: ResponseGenerator = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/Accounts/GetCurrentAppUser`, 
      {
        headers: {
          Authenticate: 'Bearer token', // TODO get token
        }
      }
    );

    yield put(successGetCurrentUser(res.data))
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

export function* updateCurrentUser(action: Action) {
  try {
    yield axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/api/UserCrmProfiles/Patch`, action.payload, {
        headers: {
          Authenticate: 'Bearer token', // TODO get token
        }
      }
    );

    yield put(successUpdateCurrentUser(action.payload))
  } catch (err) {

  }
}

export function* userSaga() {
  yield takeEvery(GENERATE_PASSWORD, generatePassword);
  yield takeEvery(LOGIN_WITH_CODE, loginWithCode);
  yield takeEvery(GET_CURRENT_USER, getCurrentUser);
  yield takeEvery(UPDATE_CURRENT_USER, updateCurrentUser);
}