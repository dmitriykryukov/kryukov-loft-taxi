import { ADD_CARD, addNewCard } from "../actions"
import { serverNewCard } from "../api";
import { takeEvery, call, put } from "redux-saga/effects"

export function* addNewPayment(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(serverNewCard, cardNumber, expiryDate, cardName, cvc, token);
  if (success) {
    yield put(addNewCard())
  }
}

export function* addNewCardSaga() {
  yield takeEvery(ADD_CARD, addNewPayment);
}
