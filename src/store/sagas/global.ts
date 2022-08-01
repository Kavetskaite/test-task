import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GENERATE_PASSWORD, GET_GLOBAL_PARAMETERS, } from '../actions/actionTypes';
import { successGeneratePassword, successGetGlobalParameters } from '../actions'
import { ResponseGenerator } from '../../interfaces'

function* getGlobalParameters() {
  try {
    const res: ResponseGenerator = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/GlobalParameters/GetAllDynamic`
    );

    yield put(successGetGlobalParameters(res.data.value[0]))
  } catch (err) {

  }
}

function* generatePassword(payload: { email: string, languageId: string }) {
  try {
    yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/Accounts/GeneratePassword`, payload
    );

    yield put(successGeneratePassword(payload.email))
  } catch (err) {

  }
}

export function* globalSaga() {
  yield takeEvery(GET_GLOBAL_PARAMETERS, getGlobalParameters);
}