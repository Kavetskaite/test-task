import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GENERATE_PASSWORD, GET_GLOBAL_PARAMETERS, } from '../actions/actionTypes';
import { successGeneratePassword, successGetGlobalParameters } from '../actions'
import { ResponseGenerator } from '../../interfaces'

export function* globalSaga() {
  // yield takeEvery(GET_GLOBAL_PARAMETERS, getGlobalParameters);
}