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
import { history } from '../../index';

import authService from "../../servivces/api/authService"
export function* registration() {
    const { payload } = yield take(REGISTER);
    const data = yield call(authService.registration, payload);
    yield put(putUserToken(data.access_token));
    history.push("/");

  }
  
  export function* login() {
    const { payload } = yield take(LOGIN);
    const  data  = yield call(authService.login, payload);
    yield put(putUserData(null));
    yield put(putUserToken(data.access_token));
    history.push("/");
  }
  
  export function* logout() {
    const { payload } = yield take(LOGOUT);
    window.localStorage.clear();
    yield put(putUserToken(null));
    yield put(putUserData(null));
    
  }