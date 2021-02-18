import { combineReducers } from 'redux'
import authReducer from './user'
import paymentReducer from './addPayment'
import mapReducer from './map'

export default combineReducers({ user: authReducer, payment: paymentReducer, map: mapReducer });
