import { UserReducer } from './types'
import { Action } from './enums'

export const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case Action.Login:
      return {
        ...action.payload,
      }

    case Action.Logout:
      return action.payload

    case Action.UpdateEmail:
      return {
        ...state,
        email: action.payload,
      }

    default:
      return state
  }
}
