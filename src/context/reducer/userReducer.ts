import { UserReducer } from './types'
import { Action } from './enums'

export const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case Action.Login:
      return {
        ...state,
        logged: action.payload,
      }

    default:
      return state
  }
}
