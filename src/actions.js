export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const ADD_CARD = "ADD_CARD"

export const logIn = (token) => ({ 
  type: LOG_IN,
  payload: { token }
})
export const logOut = () => ({ type: LOG_OUT })
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
})

export const addNewCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: ADD_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
})



