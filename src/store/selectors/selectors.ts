import { RootState } from '../../store';

export const selectState = (state: RootState) => state;

export const selectLabels = (state: RootState) => {
  return state.labels;
}

export const selectLanguageId = (state: RootState) => {
  return state.global.languageID
}
