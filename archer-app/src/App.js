import React, { Component} from 'react';
import Episodes from './components/Episodes';
import './app/app.css'

import './';


class App extends Component {

  state = {
    episodes: [
    {}
    ]


  }
  
  componentDidMount () {
    fetch('localhost')
    .then(response => response.json)
    .then(result => this.setState({episodes: result.episodes}))
  }


  
  render(){

    return (
      <div className="App">
        <h1 className="ArcherHeading">LAAAANNNNAAAA!</h1>
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
