import React, { Component} from 'react';
import Episodes from './components/Episodes';
import './app/app.css'



class App extends Component {

  state = {
    isClicked: false,
    isLoggedIn: false,
    episodes: []
  }
  
  componentDidMount () {
    fetch('http://localhost:3000/episodes')
    .then(response => response.json())
    .then(result => this.setState({episodes: result}))
  }

  createHeader = () => {
    return(
      <header className="start-page" >
        <img 
          src='https://i.imgur.com/8g9n8z9.png' alt='Danger Zone: An Archer Episode Guide'
          onClick={this.setClicked}
        />
        <h1 className="archer-heading">LAAAANNNNAAAA!</h1>
        <audio 
          className='audio'
          ref='audio_tag' 
          crossOrigin src='https://www.thesoundarchive.com/archer-sounds/danger-zone.mp3' 
          controls autoPlay
        />
      </header>
    )
  }

  setClicked = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

    createLoginForm = () => {
      return(
      <div id="id01" className="w3-modal">
      <div className="modal">
          <header id="sign-in"> 
          <span onClick={this.setClickedLog}>&times;</span>
          <form id='login-form'>
              <label>Username: </label>
              <input id='name'></input>
          </form>
          <button id='fake-button' onClick={this.setLogin}>INSERT</button>
          </header>
      </div>
      </div> 
      )   
    }

    closeForm = () => {
      return(
        <div>
          
        </div>
      )
    }

    setLogin = () => {
      return(
        this.setState({isLoggedIn: !this.state.isLoggedIn}),
        this.setState({isClicked: !this.state.isClicked})
      )
    }

    createCard = () => {
      return (
        this.state.episodes.map(episode => 
        <Episodes 
          key={episode.id} 
          episode = {episode} 
          isLoggedIn = {this.state.isLoggedIn}
        />
      ))
    }

    createH2 = () => {
      return (
        <div className="cards-container">
          <h2>Archer Seasons 1-10 Episodes:</h2>
          {this.createCard()}
        </div>
      )
    }
  
  render(){
      
    return (

      <div className="app">
        

        <div>
          {this.state.isClicked ? this.createLoginForm() :  null}
        </div>
        <div className="cards-container">
          
          {this.state.isLoggedIn ? this.createH2() : this.createHeader()}

         </div>



      </div>
    );
  }
}

export default App;
