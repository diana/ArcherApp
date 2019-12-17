import React, { Component} from 'react';
import Episodes from './components/Episodes';
import './app/app.css';
import Users from './components/Users'



class App extends Component {

  state = {
    isClicked: false,
    isLoggedIn: false,
    episodes: [
    {}
    ]
  }
  
  componentDidMount () {
    fetch('localhost')
    .then(response => response.json)
    .then(result => this.setState({episodes: result.episodes}))
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
          <button id='signup'>Sign Up!</button>
          <form id='login-form'>
              <label>Username: </label>
              <input id='name'></input>
          </form>
          <button id='fake-button' onClick={this.setLogin}>submit</button>
          </header>
      </div>
      </div> 
      )   
    }

    setLogin = () => {
      return(
        this.setState({isLoggedIn: !this.state.isLoggedIn})
      )
    }

    createCard = () => {
      return this.state.episodes.map(episode => 
        <Episodes 
          key={episodes.id} 
          episodes = {episode} 
          isLoggedIn = {this.state.isLoggedIn}
        />
      )
    }
  
  render(){

    return (
      <div className="app">

        <div>
          {this.state.isClicked ? this.createLoginForm() : this.createHeader()}
        </div>
        <div className="cards-container">
          {this.state.isLoggedIn ? this.createCard() : null}
         </div>


      </div>
    );
  }
}

export default App;
