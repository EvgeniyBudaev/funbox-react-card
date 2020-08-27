import * as R from 'ramda'

export const getCardById = (state, id) => R.prop(id, state.cards)

export const getCards = (state) => {

  const cards = R.compose(
    R.map(id => getCardById(state, id))
  )(state.cardsPage.ids)
  return cards
}


