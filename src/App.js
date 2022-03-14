import React from 'react'

// components
import SwipeBottom from './Components/SwipeButton/SwipeButton'
import Header from './Components/Header/Header'
import TinderCards from './Components/TinderCard/TinderCard'

const App = () => {
  return (
    <div>
      <Header/>
      <TinderCards/>
      <SwipeBottom/>
    </div>
  )
}

export default App