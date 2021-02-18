import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { paymentSaga } from './paymentSaga'
import { addressesListSaga } from './addressListSaga'
import { routeSaga } from './routeSaga'
import { registerSaga } from './registrationSaga'

export function* rootSaga() {
  yield all([authSaga(), paymentSaga(), addressesListSaga(), routeSaga(), registerSaga() ])
}