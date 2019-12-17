import React, { Component} from 'react';
import Episodes from './components/Episodes';
import './app/app.css';
import Users from './components/Users'



class App extends Component {

  state = {
    isClicked: false,
    episodes: [
    {}
    ]
  }
  
  componentDidMount () {
    fetch('localhost')
    .then(response => response.json)
    .then(result => this.setState({episodes: result.episodes}))
  }

  setClicked = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  createUser = () => {
    return <Users users = {this.state.users} />
  }
  
  render(){

    return (
      <div className="app">
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
        {this.state.isLoggedIn ? this.createUser() : null}

      </div>
    );
  }
}

export default App;
