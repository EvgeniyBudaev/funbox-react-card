import {ADDED_TO_BASKET, REMOVE_TO_BASKET} from '@/redux/actionTypes/actionTypes'
import * as R from 'ramda'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADDED_TO_BASKET :
      return R.append(payload, state)
    case REMOVE_TO_BASKET:
      return R.without(R.of(payload), state)
    default:
      return state
  }
}
