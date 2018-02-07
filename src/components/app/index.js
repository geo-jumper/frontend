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

    this.state = {
      landingOK: false,
      matchmakingOK: false,
      countdownOK: false,
      gameOK: false,
    };

    this.toggleLandingOK = this.toggleLandingOK.bind(this);
    this.getLandingOK = this.getLandingOK.bind(this);
    this.toggleMatchmakingOK = this.toggleMatchmakingOK.bind(this);
    this.getMatchmakingOK = this.getMatchmakingOK.bind(this);
    this.toggleCountdownOK = this.toggleCountdownOK.bind(this);
    this.getCountdownOK = this.getCountdownOK.bind(this);
    this.toggleGameOK = this.toggleGameOK.bind(this);
    this.getGameOK = this.getGameOK.bind(this);
  }

  toggleLandingOK() {
    let toggledState = !this.state.landingOK;
    this.setState({ landingOK: toggledState });
  }

  getLandingOK() {
    return this.state.landingOK;
  }

  toggleMatchmakingOK() {
    let toggledState = !this.state.matchmakingOK;
    this.setState({ matchmakingOK: toggledState });
  }

  getMatchmakingOK() {
    return this.state.matchmakingOK;
  }

  toggleCountdownOK() {
    let toggledState = !this.state.countdownOK;
    this.setState({ countdownOK: toggledState });
  }

  getCountdownOK() {
    return this.state.countdownOK;
  }

  toggleGameOK() {
    let toggledState = !this.state.gameOK;
    this.setState({ gameOK: toggledState });
  }

  getGameOK() {
    return this.state.gameOK;
  }

  render() {
    let lava = new Array(26).fill('lava');

    return (
      <div className='app'>
        <BrowserRouter>
          <div>
      
            <Route exact path='/' render={props => {
              return <Home {...props} toggleLandingOK={this.toggleLandingOK} />;
            }}/>

            <Route exact path='/landing' render={props => {
              return <Landing
                {...props}
                toggleMatchmakingOK={this.toggleMatchmakingOK}
                getLandingOK={this.getLandingOK}
              />;
            }}/>

            <Route exact path='/matchmaking' render={props => {
              return <Matchmaking
                {...props}
                toggleCountdownOK={this.toggleCountdownOK}
                getMatchmakingOK={this.getMatchmakingOK}
              />;
            }}/>

            <Route exact path='/countdown' render={props => {
              return <Countdown
                {...props}
                toggleGameOK={this.toggleGameOK}
                getCountdownOK={this.getCountdownOK}
              />;
            }}/>

            <Route exact path='/game' render={props => {
              return <Game
                {...props}
                getGameOK={this.getgameOK}
              />;
            }}/>


            <button
              onClick={mute()}
            >Audio</button>
            {/* mattL - Image Dump for Tuxedo Man */}
            <div id='image-dump' style={{display : 'none'}}>
              <img id='left-tuxedo-man' src={image.leftTuxedoMan} alt="Left Tuxedo Man" />
              <img id='right-tuxedo-man' src={image.rightTuxedoMan} alt="Right Tuxedo Man" />
              <img id='clouds' src={image.clouds} alt="Toy Story" />
              <img id='star' src={image.star} alt="star" />
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

// style={{display: 'none'}}