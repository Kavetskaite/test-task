import { Action } from '../../interfaces'
import { SUCCESS_GET_GLOBAL_PARAMETERS } from '../actions/actionTypes'

export default function global(state = {}, action: Action) {
  switch (action.type) {
    case SUCCESS_GET_GLOBAL_PARAMETERS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}