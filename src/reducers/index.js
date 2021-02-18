import { combineReducers } from 'redux'
import authReducer from './auth'
import paymentReducer from './addPayment'
import mapReducer from './map'

export default combineReducers({ auth: authReducer, payment: paymentReducer, map: mapReducer });
