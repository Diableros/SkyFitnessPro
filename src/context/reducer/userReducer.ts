import { UserReducer } from './types'
import { Action } from './enums'

export const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case Action.Login:
      return {
        ...state,
        logged: true,
      }
    case Action.Logout:
      return {
        ...state,
        logged: false,
      }
    default:
      return state
  }
}
