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
     
      const synth = new Tone.Synth().toMaster()
      synth.triggerAttackRelease("C4", "8n")

  }

  componentDidMount() {
    
    const synth = new Tone.Synth().toMaster()
   //play a note every quarter-note
    const loop = new Tone.Loop(function(time){
      synth.triggerAttackRelease("C2", "8n", time);
    }, "4n")

    //loop between the first and fourth measures of the Transport's timeline
    loop.start("1m").stop("4m")

    Tone.Transport.start();

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

