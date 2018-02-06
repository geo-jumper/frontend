import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from  '../home';
import Landing from '../landing';
import Matchmaking from '../matchmaking';
import Countdown from '../countdown';
import Game from '../canvas-game';
import MatchResults from '../match-results';
import AuthRedirect from '../auth-redirect';
// mattL - images for tuxedo man to reference
import leftTuxedoMan from '../../images/left-tuxedo-man.png';
import rightTuxedoMan from '../../images/right-tuxedo-man.png';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Home}/>
            <Route exact path='/login' component={Home}/>
            <Route exact path='/landing' component={Landing}/>
            <Route exact path='/matchmaking' component={Matchmaking}/>
            <Route exact path='/countdown' component={Countdown}/>
            <Route exact path='/game' component={Game}/>
            <Route exact path='/matchresults' component={MatchResults}/>

            {/* mattL - Image Dump for Tuxedo Man */}
            <div id='image-dump' style={{display: 'none'}}>
              <img id='left-tuxedo-man' src={leftTuxedoMan} alt="Left Tuxedo Man" />
              <img id='right-tuxedo-man' src={rightTuxedoMan} alt="Right Tuxedo Man" />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
