import { take, put, call } from "redux-saga/effects";
import {
  REGISTER,
  LOGIN,
  LOGOUT
} from "./constants";
import {
  putUserData,
  putUserToken
} from "./actions";
import authService from "../../servivces/api/authService"
export function* registration() {
    const { payload } = yield take(REGISTER);
    const { data } = yield call(authService.registration, payload);
    alert(data);
    payload.callback();
  }
  
  export function* login() {
    const { payload } = yield take(LOGIN);
    const { data } = yield call(authService.login, payload);
    console.log(data);
    yield put(putUserData(null));
    yield put(putUserToken("token"));
  }
  
  export function* logout() {
    const { payload } = yield take(LOGOUT);
    window.localStorage.clear();
    yield put(putUserToken(null));
    yield put(putUserData(null));
    payload.callback();
  }