import React, { Component} from 'react';
import Episodes from './components/Episodes';

import './App.css';


class App extends Component {


  componentDidMount () {


  }
  render() {


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
