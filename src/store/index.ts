import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";
import labels from "./reducers/labels";
import global from './reducers/global';
import user from "./reducers/user";

export const reducer = combineReducers({
  global: global,
  labels: labels,
  user: user,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof reducer>;
