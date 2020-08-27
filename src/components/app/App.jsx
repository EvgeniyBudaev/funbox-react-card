import React from 'react'
import Cards from '@/components/cards/Cards.jsx'
import '@/scss/app.scss'

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__title">Ты сегодня покормил кота?</div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
