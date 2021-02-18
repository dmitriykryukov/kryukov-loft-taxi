import { USER_REGISTER_REQUEST, userRegistered } from "../actions"
import { serverRegister } from "../api";
import { takeEvery, call, put } from "redux-saga/effects"

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const success = yield call(serverRegister, email, password, name, surname);
  if (success) {
    yield put(userRegistered())
    console.log('Registration', success)
  }
}

export function* registerSaga() {
  yield takeEvery(USER_REGISTER_REQUEST, registrationSaga);
}