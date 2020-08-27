import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  ADDED_TO_BASKET, REMOVE_TO_BASKET
} from '@/redux/actionTypes/actionTypes'

import {
  fetchCards as fetchPhonesApi
} from '@/api/index'

export const fetchCards = () => async dispatch => {
  dispatch({
    type: FETCH_CARDS_START
  })

  try {
    const cards = await fetchPhonesApi()
    dispatch({
      type: FETCH_CARDS_SUCCESS,
      payload: cards
    })
  } catch (err) {
    dispatch({
      type: FETCH_CARDS_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addCardToBasket = (id) => dispatch => {
  dispatch({
    type: ADDED_TO_BASKET,
    payload: id
  })
};

export const removeCardToBasket = (id) => dispatch => {
  dispatch({
    type: REMOVE_TO_BASKET,
    payload: id
  })
};
