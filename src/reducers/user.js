import { LOG_IN, LOG_OUT, USER_REGISTER_SUCCESS  } from '../actions'

const initialState = {
  isLoggedIn: false,
  authToken: null,
  isRegistered: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true, authToken: action.payload.token }
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    case USER_REGISTER_SUCCESS: {
      return { isRegistered: true }
    }
    default:
      return state;
  }
}
