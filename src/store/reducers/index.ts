import { combineReducers } from 'redux';
import global from './global';
import user from './user';
import labels from './labels';

export default combineReducers({
  labels,
  global,
  user,
});