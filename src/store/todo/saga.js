import { take, put, call } from "redux-saga/effects";
import {
  GET_ALL_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  CREATE_TODO
} from "./constants";
import {
  putAllTodos,
  putDeleteTodo,
  putExistingTodo,
  putNewTodo
} from "./actions";
import { history } from '../../index';

import todoService from "../../servivces/api/todoService"
export function* allTodos() {

    const { payload } = yield take(GET_ALL_TODOS);
    const data = yield call(todoService.getAllTodos);
    yield put(putAllTodos(data));
  }
export function* updateTodo(){
  const {payload} = yield take(UPDATE_TODO);
  console.log(payload)
  const data = yield call(todoService.updateTodo, payload);
  yield put(putExistingTodo(data));
}
export function* deleteTodo(){
  const {payload} = yield take(DELETE_TODO);
  yield call(todoService.deleteTodo, payload);
  yield put(putDeleteTodo(payload));
}
export function* addTodo(){
  const{payload} = yield take(CREATE_TODO);
  console.log(payload)
  const data = yield call(todoService.addNewTodo, payload);
  yield put(putNewTodo(data));
}
  
//   export function* login() {
//     const { payload } = yield take(LOGIN);
//     const  data  = yield call(authService.login, payload);
//     yield put(putUserData(null));
//     yield put(putUserToken(data.access_token));
//     history.push("/");
//   }
  
//   export function* logout() {
//     const { payload } = yield take(LOGOUT);
//     window.localStorage.clear();
//     yield put(putUserToken(null));
//     yield put(putUserData(null));
    
//   }