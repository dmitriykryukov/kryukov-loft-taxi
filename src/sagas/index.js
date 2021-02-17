import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { addNewCardSaga } from './paymentSaga'

export function* rootSaga() {
  yield all([authSaga(), addNewCardSaga()])
}