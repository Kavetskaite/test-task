import { Action, Label } from '../../interfaces';
import { SUCCESS_GET_LABELS } from '../actions/actionTypes';

export default function labels(state: Array<Label> = [], action: Action) {
  switch (action.type) {
    case SUCCESS_GET_LABELS:
      return [
        ...action.payload,
      ]
    default:
      return state
  }
}