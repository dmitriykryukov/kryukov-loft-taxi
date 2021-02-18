import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { paymentSaga } from './paymentSaga'
import { addressesListSaga } from './addressListSaga'
import { routeSaga } from './routeSaga'

export function* rootSaga() {
  yield all([authSaga(), paymentSaga(), addressesListSaga(), routeSaga() ])
}