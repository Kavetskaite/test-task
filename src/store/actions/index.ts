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

const successGetLabelss = (payload: unknown): Action => ({
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

export {
  getGlobalParameters,
  successGetGlobalParameters,
  getLabels,
  successGetLabelss,
  generatePassword,
  successGeneratePassword,
  loginWithCode,
  successLoginWithCode,
  failedLoginWithCode,
};
