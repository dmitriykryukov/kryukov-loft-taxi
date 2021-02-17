import { combineReducers } from 'redux'
import authReducer from './auth'
import paymentReducer from './addPayment'

export default combineReducers({ auth: authReducer, payment: paymentReducer });
