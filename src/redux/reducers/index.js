import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import cards from '@/redux/reducers/cards'
import cardsPage from '@/redux/reducers/cardsPage'
import card from '@/redux/reducers/card'

export default history => combineReducers({
  cards,
  cardsPage,
  card,
  router: connectRouter(history)
})
