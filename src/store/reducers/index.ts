import { combineReducers } from 'redux';
import global from './global';
import user from './user';
import labels from './labels';
import worklod from './worklod';

const reducer = combineReducers({
  labels,
  global,
  user,
  worklod,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;