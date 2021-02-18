export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const ADDED_CARD = "ADDED_CARD"
export const SAVE_CARD = "SAVE_CARD"
export const GET_ADDRESSES_REQUEST = "GET_ADDRESSES_REQUEST"
export const GET_ADDRESSES_SUCCESS = "GET_ADDRESSES_SUCCESS"
export const GET_ROUTE_REQUEST = "GET_ROUTE_REQUEST"
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS"

export const logIn = (token) => ({ 
  type: LOG_IN,
  payload: { token }
})
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
})

export const addedCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: ADDED_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
})

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SAVE_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
})

export const getAddressesList = () => ({
  type: GET_ADDRESSES_REQUEST
})

export const addressList = (addresses) => ({
  type: GET_ADDRESSES_SUCCESS,
  payload: { addresses }
})

export const getRouteRequest = (address1, address2) => ({
  type: GET_ROUTE_REQUEST,
  payload: { address1, address2 }
})

export const saveRoute = (route) => ({
  type: GET_ROUTE_SUCCESS,
  payload: { route }
})



