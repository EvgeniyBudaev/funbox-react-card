import cards from './mockCards'

export const fetchCards = async () => {
  return new Promise(resolve => {
    resolve(cards)
  })
}


