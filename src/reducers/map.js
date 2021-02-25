import { GET_ADDRESSES_SUCCESS, GET_ROUTE_SUCCESS } from '../actions'

const initialState = {
  addresses: [],
  route: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESSES_SUCCESS: {
      return {
        ...state,
        addresses: action.payload.addresses
      }
    }
    case GET_ROUTE_SUCCESS: {
      return {
        ...state,
        route: action.payload.route
      }
    }
    default:
      return state
  }
}