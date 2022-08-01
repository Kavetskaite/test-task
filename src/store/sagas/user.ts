import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_GLOBAL_PARAMETERS } from '../actions/actionTypes';
import { ResponseGenerator } from '../../interfaces'

export function* userSaga() {
  // yield takeEvery(GET_GLOBAL_PARAMETERS, getGlobalParameters)
}