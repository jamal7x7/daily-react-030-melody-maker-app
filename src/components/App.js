import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Podcast App</h1>
  </header>
)

const Items = (props) => (
  <div className='tones'>

    tones

  </div>
)

const ControleBar = () => (
  <div className='controle-bar'>

      Controle bar

  </div>
)

class MelodyMakerApp extends Component {
  
  state = {
    
  }

  componentDidMount() {
     
   
  }


  render () {
    return (
      <div className='App-container'>

        <ControleBar />
        <Items />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <MelodyMakerApp />

  </div>
)

export default App

