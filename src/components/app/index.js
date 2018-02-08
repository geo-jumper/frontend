import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from  '../home';
import Landing from '../landing';
import Matchmaking from '../matchmaking';
import Countdown from '../countdown';
import Game from '../canvas-game';
import MatchResults from '../match-results';
// mattL - images for tuxedo man to reference
import leftTuxedoMan from '../../images/left-tuxedo-man.png';
import rightTuxedoMan from '../../images/right-tuxedo-man.png';
import levelTwoLava from '../../images/lava-animated-10.png';
import clouds from '../../images/clouds.png';
import rainbow from '../../images/rainbow.jpg';
import ice from '../../images/ice.png';
import water from '../../images/underwater.jpg';
import {Howl, Howler} from 'howler';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <button
              onClick={mute()}
            >Audio</button>
            <Route path = '/game' component={Game} />
            <Game />
            {/* mattL - Image Dump for Tuxedo Man */}
            <div id='image-dump' style={{display: 'none'}} >
              <img id='left-tuxedo-man' src={leftTuxedoMan} alt="Left Tuxedo Man" />
              <img id='right-tuxedo-man' src={rightTuxedoMan} alt="Right Tuxedo Man" />
              <img id='clouds' src={clouds} alt="Toy Story" />
              <img id='lava' src={levelTwoLava} alt="Level 2 Lava" />
              <img id='rainbow' src={rainbow} alt="rainbow" />
              <img id='ice' src={ice} alt="ice" />
              <img id='water' src={water} alt="water" />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;


// catherine - setup new Howl aka background music
const sound = new Howl({
  src: ['../src/sound/Komiku_-_70_-_Ending (2).mp3'],
});

  // catherine - play background music
// sound.play();

// catherine - change global volume
Howler.volume(0.5);

const mute = () => {
  sound.mute();
};

// style={{display: 'none'}}