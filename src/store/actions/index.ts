import {
  GET_GLOBAL_PARAMETERS,
  GET_LABELS,
  GENERATE_PASSWORD,
  SUCCESS_GENERATE_PASSWORD,
  SUCCESS_GET_GLOBAL_PARAMETERS,
  SUCCESS_GET_LABELS,
  LOGIN_WITH_CODE,
  SUCCESS_LOGIN_WITH_CODE,
  FAILED_LOGIN_WITH_CODE,
  SUCCESS_GET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  SUCCESS_UPDATE_CURRENT_USER,
} from "./actionTypes";
import { Action } from "../../interfaces";

const getGlobalParameters = (): Action => ({
  type: GET_GLOBAL_PARAMETERS,
});

const successGetGlobalParameters = (payload: unknown): Action => ({
  type: SUCCESS_GET_GLOBAL_PARAMETERS,
  payload,
});

const getLabels = (): Action => ({
  type: GET_LABELS,
});

const successGetLabels = (payload: unknown): Action => ({
  type: SUCCESS_GET_LABELS,
  payload,
});

const generatePassword = (payload: unknown): Action => ({
  type: GENERATE_PASSWORD,
  payload,
});

const successGeneratePassword = (payload: unknown): Action => ({
  type: SUCCESS_GENERATE_PASSWORD,
  payload,
});

const loginWithCode = (payload: unknown): Action => ({
  type: LOGIN_WITH_CODE,
  payload,
});

const successLoginWithCode = (payload: unknown): Action => ({
  type: SUCCESS_LOGIN_WITH_CODE,
  payload,
})

const failedLoginWithCode = (payload: unknown): Action => ({
  type: FAILED_LOGIN_WITH_CODE,
  payload
})

const successGetCurrentUser = (payload: Record<string, unknown>): Action => ({
  type: SUCCESS_GET_CURRENT_USER,
  payload,
});

const updateCurrentUser = (payload: Record<string, unknown>): Action => ({
  type: UPDATE_CURRENT_USER,
  payload,
});

const successUpdateCurrentUser = (payload: Record<string, unknown>): Action => ({
  type: SUCCESS_UPDATE_CURRENT_USER,
  payload,
});

export {
  getGlobalParameters,
  successGetGlobalParameters,
  getLabels,
  successGetLabels,
  generatePassword,
  successGeneratePassword,
  loginWithCode,
  successLoginWithCode,
  failedLoginWithCode,
  successGetCurrentUser,
  updateCurrentUser,
  successUpdateCurrentUser,
};
