import { USER_INITIAL_DATA } from '@/api/constants'
import { UserReducer } from './types'
import { Action } from './enums'

export const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case Action.Login:
      return {
        ...state,
        user: action.payload,
      }
    case Action.Logout:
      return {
        ...USER_INITIAL_DATA,
      }

    default:
      return state
  }
}
