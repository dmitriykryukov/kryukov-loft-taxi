import { GET_ADDRESSES_REQUEST, addressList } from "../actions"
import { getAddressesList } from "../api";
import { takeEvery, call, put } from "redux-saga/effects"

export function* fetchAddressesList(action) {
  // const { addresses } = action.payload;
  const success = yield call(getAddressesList);
  if (success) {
    yield put(addressList(success.addresses))
  }
}

export function* addressesListSaga() {
  yield takeEvery(GET_ADDRESSES_REQUEST, fetchAddressesList)
}