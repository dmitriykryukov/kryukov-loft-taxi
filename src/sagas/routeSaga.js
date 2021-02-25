import { GET_ROUTE_REQUEST, saveRoute } from "../actions"
import { getRoute } from "../api";
import { takeEvery, call, put } from "redux-saga/effects"

export function* routeRequestSaga(action) {
  const { address1, address2 } = action.payload;
  const success = yield call(getRoute, address1, address2);
  if (success) {
    yield put(saveRoute(success))
  }
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE_REQUEST, routeRequestSaga);
}