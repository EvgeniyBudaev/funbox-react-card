import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCards} from '@/redux/actions/index'
import {getCardById, getCards} from '@/utils/selectors'
import Card from '@/components/card/Card.jsx'
import '@/scss/cards.scss'
import {addCardToBasket, removeCardToBasket} from '@/redux/actions'

const Cards = ({cards, addCardToBasket, removeCardToBasket, props}) => {
    return (
      <ul className="header__inner">
        {
          cards.map(card => {
            return (
              <li
                key={card.id}
                className="header__cart"
              >
                <Card
                  card={card}
                  addCardToBasket={() => addCardToBasket(card.id)}
                  removeCardToBasket={() => removeCardToBasket(card.id)}
                  props={props}
                />
              </li>
            )
          })
        }
      </ul>
    )
}

class CardsContainer extends Component {
  componentDidMount() {
    this.props.fetchCards()
  }

  render() {
    // console.log('this.props', this.props)
    const {cards, addCardToBasket, removeCardToBasket} = this.props
    return <Cards
      cards={cards}
      addCardToBasket={addCardToBasket}
      removeCardToBasket={removeCardToBasket}
      props={this.props}
    />
  }
}


const mapStateToProps = (state, ownProps) => ({
  cards: getCards(state, ownProps),
  card: state.card
})

const mapDispatchToProps = {
  fetchCards,
  addCardToBasket,
  removeCardToBasket
}


export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)
