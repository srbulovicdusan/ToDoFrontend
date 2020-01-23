import {all, spawn, call} from "redux-saga/effects";
import flatten from "lodash.flatten";
import * as userSaga from "./user/saga";
import * as todoSaga from "./todo/saga";

export default function* rootSaga() {
  let sagas = flatten(
    [
        userSaga, todoSaga
    ].map(
      saga => Object.keys(saga).map(sagaFunctionName => saga[sagaFunctionName])
    )
  );

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
          
          }
        }
      })
    )
  );
}