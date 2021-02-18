import { SAVE_CARD } from '../actions'

const initialState = {
  cardNumber: null,
  expiryDate: null, 
  cardName: null, 
  cvc: null

}

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_CARD: {
      return {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc
      }
    }
    default:
      return state
  }
}
