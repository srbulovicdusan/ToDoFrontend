import {all, spawn, call} from "redux-saga/effects";
import flatten from "lodash.flatten";
//import * as userSaga from "./user/saga";


export default function* rootSaga() {
  let sagas = flatten(
    [
        //userSaga, hotelSaga, airplaneTicketSaga, airlineSaga, rentACarSaga
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
            // TODO: Uncomment when finished with application
            //yield put(putError(e.message));
          }
        }
      })
    )
  );
}