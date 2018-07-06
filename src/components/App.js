import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Podcast App</h1>
  </header>
)

const Items = (props) => (
  <div className=' statistics '>
    tones

  </div>
)

const Menu = () => (
  <div className='side-bar'>
    <div className='svg-input-wrap'>

      Menu

    </div>
  </div>
)

class MelodyMakerApp extends Component {
  
  state = {
    
  }

  componentDidMount() {
     
    
   
  }

 

  render () {
    return (
      <div 
      className='subscribers-con'>

        <Menu />
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

