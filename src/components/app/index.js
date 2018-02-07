import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from  '../home';
import Landing from '../landing';
import Matchmaking from '../matchmaking';
import Countdown from '../countdown';
import Game from '../canvas-game';
import MatchResults from '../match-results';
// mattL - images for tuxedo man to reference
import image from '../../utils/import-images';
import {Howl, Howler} from 'howler';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let lava = new Array(26).fill('lava');

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
            <div id='image-dump' style={{}}>
              <img id='left-tuxedo-man' src={image.leftTuxedoMan} alt="Left Tuxedo Man" />
              <img id='right-tuxedo-man' src={image.rightTuxedoMan} alt="Right Tuxedo Man" />
              <img id='clouds' src={image.clouds} alt="Toy Story" />
              {
                lava.map((each, i) => {
                  return <img key={i} id={`lava-${i + 1}`} src={image[`lava_${i + 1}`]} alt={`lava-${i + 1}`} />;
                })
              }

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