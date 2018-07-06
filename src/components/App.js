import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Podcast App</h1>
  </header>
)

const Items = (props) => (
  <div className=' statistics '>
    <div className="banner-img">
      <img src={props.bannerUrl} alt=""/>
    </div>
    <div className='subscribers'>
      {props.subscribers}
    </div>
    <div className="avatar-img">
      <img src={props.avatarUrl} alt=""/>
    </div>


  </div>
)

const Menu = () => (
  <div className='side-bar'>
    <div className='svg-input-wrap'>

      Menu

    </div>
  </div>
)

class PodcastApp extends Component {
  
  state = {
    
  }

  componentDidMount() {
     
    // const query = 'tech'
    // const url = 'http://gpodder.net/search.opml?q=' + query 
    
    // console.log(url)
    // //const url2 = "https://randomuser.me/api/";
    // setInterval ( () => {
      
    //   fetch(url)
    //     .then(res =>  res.json())
    //     .then(data => {
  
    //         this.setState((prevState) => ({
            
    //         }))
            
    //       })
    //     .catch(error => { console.log('Something went wrong!!!', error) })

    // } ,1000)
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
    <PodcastApp />

  </div>
)

export default App

