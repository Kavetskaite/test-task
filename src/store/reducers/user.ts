import { Action, UserState } from '../../interfaces'
import {
  FAILED_LOGIN_WITH_CODE,
  SUCCESS_GENERATE_PASSWORD,
  SUCCESS_LOGIN_WITH_CODE,
  SUCCESS_GET_CURRENT_USER,
  SUCCESS_UPDATE_CURRENT_USER
} from '../actions/actionTypes';

const defaultUserState = {
  email: '',
  auth: '',
  loginError: false,
}

export default function user(state: UserState = defaultUserState, action: Action) {
  switch (action.type) {
    case SUCCESS_GENERATE_PASSWORD:
    case SUCCESS_LOGIN_WITH_CODE:
    case FAILED_LOGIN_WITH_CODE:
    case SUCCESS_GET_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      }
    case SUCCESS_UPDATE_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}