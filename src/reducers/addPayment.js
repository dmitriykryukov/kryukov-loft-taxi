import { ADD_CARD } from '../actions'

const initialState = {
  isAddedPayment: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD: {
      return {isAddedPayment: true}
    }
    default:
      return state;
  }
}
