import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_LABELS } from '../actions/actionTypes';
import { ResponseGenerator } from '../../interfaces'
import { successGetLabels } from '../actions';

export function* getLabels() {
  try {
    const res: ResponseGenerator = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/Labels/GetAll`
    );

    yield put(successGetLabels(res.data))
  } catch (err) {

  }

}

export function* labelsSaga() {
  yield takeEvery(GET_LABELS, getLabels)
}