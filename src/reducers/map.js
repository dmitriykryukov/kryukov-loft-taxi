import { GET_ADDRESSES_SUCCESS, GET_ROUTE_SUCCESS } from '../actions'

const initialState = {
  addresses: [],
  route: []
}

export default function(state = initialState, action) {
  console.log('Action', action)
  switch (action.type) {
    case GET_ADDRESSES_SUCCESS: {
      return {
        addresses: action.payload.addresses
      }
    }
    case GET_ROUTE_SUCCESS: {
      return {
        route: action.payload.route
      }
    }
    default:
      return state
  }
}