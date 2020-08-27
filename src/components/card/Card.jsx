import React, {useEffect, useState} from 'react'
import '@/scss/card.scss'
import cat from '../../../public/assets/images/cat.png'

const Card = ({card, addCardToBasket, removeCardToBasket, props}) => {
  // console.log('props', props)
  const [disabled, setDisabled] = useState(3)
  const {
    id,
    suptitle,
    title,
    subtitle,
    number,
    portion,
    surprise,
    text,
    kg,
    pleasure,
    bottomText
  } = card

  let headerCartBox = 'header__cart-box'
  let headerCartText = 'header__cart-text'
  let headerCartBottom = 'header__cart-bottom'

  if(card.id === 3) {
    headerCartBox += ' disabled'
    headerCartBottom += ' yellow'
  }

  for(let el of props.card) {
    if(card.id === el) {
      headerCartBox += ' red'
      headerCartText += ' red'
    }
  }

  const renderContent = () => {
    return (
      <>
        <div className={headerCartText}>
          <div className="header__cart-suptitle">{suptitle}</div>
          <div className="header__cart-title">{title}</div>
          <div className="header__cart-subtitle">{subtitle}</div>
          <div className="header__cart-description">
            <div className="header__cart-description__portion"><span className="number">{number}</span> {portion}</div>
            <div className="header__cart-description__surprise">{surprise}</div>
            <div className="header__cart-description__pleasure">{pleasure}</div>
          </div>
        </div>
        <div className="header__cart-img">
          <img className="header__cart-images" src={cat} alt="cat"></img>
          <div className="header__cart-circle">
            <div className="header__cart-circle__text">{text}</div>
            <div className="header__cart-circle__kg">{kg}</div>
          </div>
        </div>
      </>
    )
  }

  const renderContentBottom = (id) => {
    return (
      <>
      <div className={headerCartBottom}>{bottomText}
        { card.id === 1
          ? <a className="header__cart-link" href="#">
            <span onClick={() => addCardToBasket(id)}>купи.</span>
        </a>
          : ''
        }
      </div>
      </>
    )
  }
  console.log('card.id', props)
  return (
    <>
      {
        card.id === disabled
          ?
          <>
            <div className={headerCartBox}>{renderContent()}</div>
            {renderContentBottom()}
            </>
          :
          <>
            <div className={headerCartBox} onClick={() => addCardToBasket(id)}>{renderContent()}</div>
            {renderContentBottom(id)}
            {
              props.card.length > 0 ? <button onClick={() => removeCardToBasket(id)}>Delete</button>
                : ''
            }
          </>
      }
    </>
  )
}

export default Card
