import { ADDED_CARD, saveCard } from "../actions"
import { saveNewCard } from "../api";
import { takeEvery, call, put } from "redux-saga/effects"

export function* addNewPayment(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(saveNewCard, cardNumber, expiryDate, cardName, cvc, token);
  if (success) {
    yield put(saveCard(cardNumber, expiryDate, cardName, cvc, token))
  }
}

export function* paymentSaga() {
  yield takeEvery(ADDED_CARD, addNewPayment)
}
