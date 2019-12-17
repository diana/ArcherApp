import React, { Component} from 'react';
import Episodes from './components/Episodes';
import FavoritesForm from './components/FavoritesForm'
import './app/app.css'

import './';


class App extends Component {

  state = {
    episodes: [
    {}
    ]


  }
  
  componentDidMount () {
    fetch('http://localhost:3000/')
    .then(response => response.json)
    .then(result => this.setState({episodes: result.episodes}))
  }


  
  render(){
      
    return (
      <div className="App">
        <h1 className="ArcherHeading">LAAAANNNNAAAA!</h1>
        <FavoritesForm />
        <audio 
          ref='audio_tag' 
          crossOrigin src='https://www.thesoundarchive.com/archer-sounds/danger-zone.mp3' 
          controls autoPlay
          />
      </div>
    );
  }
}

export default App;
