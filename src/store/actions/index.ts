import {
  GENERATE_PASSWORD,
  GET_GLOBAL_PARAMETERS,
  GET_LABELS,
  SUCCESS_GENERATE_PASSWORD,
  SUCCESS_GET_GLOBAL_PARAMETERS,
  SUCCESS_GET_LABELS,
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

const generatePassword = (payload: { email: string, languageId: string }): Action => ({
  type: GENERATE_PASSWORD,
  payload,
})

const successGeneratePassword = (payload: unknown): Action => ({
  type: SUCCESS_GENERATE_PASSWORD,
  payload
})

export {
  getGlobalParameters,
  successGetGlobalParameters,
  getLabels,
  successGetLabelss,
  generatePassword,
  successGeneratePassword
};
