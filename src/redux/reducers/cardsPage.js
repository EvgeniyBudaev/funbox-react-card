import * as R from 'ramda'

import {
  FETCH_CARDS_SUCCESS
} from '@/redux/actionTypes/actionTypes'

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CARDS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      })
    default:
      return state
  }
}
