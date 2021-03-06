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
import sounds from '../../utils/import-sounds';
import {Howl, Howler} from 'howler';
import FaVolumeOff from 'react-icons/lib/fa/volume-off';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';

// catherine - setup new Howl aka background music
const sound = new Howl({
  src: [sounds.backgroundMusic],
  loop: true,
});
  
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      landingOK: false,
      matchmakingOK: false,
      countdownOK: false,
      gameOK: false,
      backgroundSound: true,
    };

    this.toggleLandingOK = this.toggleLandingOK.bind(this);
    this.getLandingOK = this.getLandingOK.bind(this);
    this.toggleMatchmakingOK = this.toggleMatchmakingOK.bind(this);
    this.getMatchmakingOK = this.getMatchmakingOK.bind(this);
    this.toggleCountdownOK = this.toggleCountdownOK.bind(this);
    this.getCountdownOK = this.getCountdownOK.bind(this);
    this.toggleGameOK = this.toggleGameOK.bind(this);
    this.getGameOK = this.getGameOK.bind(this);
    this.toggleBackgroundSound = this.toggleBackgroundSound.bind(this);
  }

  componentWillMount() {
    // catherine - play background music on page load
    sound.play();
  }

  toggleBackgroundSound() {
    if(this.state.backgroundSound === true) {
      sound.pause();
      this.setState({backgroundSound: false});
    } else {
      sound.play();
      this.setState({backgroundSound: true});
    }
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
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <button id="audio" onClick={this.toggleBackgroundSound}>audio</button>
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

            {/* mattL - Image Dump for Tuxedo Man */}
            <div id='image-dump' style={{display : 'none'}}>
              <img id='left-tuxedo-man' src={image.leftTuxedoMan} alt="Left Tuxedo Man" />
              <img id='right-tuxedo-man' src={image.rightTuxedoMan} alt="Right Tuxedo Man" />
              <img id='left-tuxedo-man-pink' src={image.leftTuxedoManPink} alt="Left Tuxedo Man Pink" />
              <img id='right-tuxedo-man-pink' src={image.rightTuxedoManPink} alt="Right Tuxedo Man Pink" />
              <img id='clouds' src={image.clouds} alt="Toy Story" />
              <img id='star' src={image.star} alt="star" />
              <img id='rainbow' src={image.rainbow} alt="rainbow" />
              <img id='ice' src={image.ice} alt="ice" />
              <img id='underwater' src={image.underwater} alt="underwater" />
              {
                image.lava.map((each, i) => {
                  return <img key={i} id={`lava-${i + 1}`} src={image.lava[i]} alt={`lava-${i + 1}`} />;
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