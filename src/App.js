import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'

import InstructionsAndFooter from './components/InstructionsAndFooter'
import Game from './components/Game'
import TopDashBoard from './components/TopDashBoard'

import './style/allStyle.css'
import './style/game.css'
import './style/topDashBoard.css'

function App() {
  return (
    <Provider store={store()}>
      <TopDashBoard/>
      <Game/>
      <InstructionsAndFooter/>
    </Provider>
  );
}

export default App;
