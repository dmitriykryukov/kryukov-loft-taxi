import user from './user'
import {logIn, logOut} from '../actions'

describe("user", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true', () => {
      expect(user({}, logIn())).toEqual({isLoggedIn: true})
    })
  })

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false', () => {
      expect(user({}, logOut())).toEqual({isLoggedIn: false})
    })
  })
})