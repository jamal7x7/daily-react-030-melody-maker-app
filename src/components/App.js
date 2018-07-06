import React, { Component } from 'react'
import Tone from 'tone'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Podcast App</h1>
  </header>
)

const Items = (props) => (
  <div className='tones'>

    <div className="c4" onClick={props.handleClick}>C4</div>

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

  handleClick = () => {
      //create a synth and connect it to the master output (your speakers)
      const synth = new Tone.Synth().toMaster()
    
      //play a middle 'C' for the duration of an 8th note
      synth.triggerAttackRelease("C4", "8n")

  }

  componentDidMount() {
     
    //create a synth and connect it to the master output (your speakers)
    const synth = new Tone.Synth().toMaster()
    
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n")

  }


      render () {
    return (
      <div className='App-container'>

        <ControleBar />
        <Items 
          handleClick={this.handleClick}
        />

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

