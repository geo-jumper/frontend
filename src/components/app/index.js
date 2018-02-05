import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GameJoin from '../join-game';
import Home from  '../home';
import Landing from '../landing';
import Matchmaking from '../matchmaking';
import Countdown from '../countdown';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            {/* <Route path='*' component={AuthRedirect}/> */}
            <Route exact path='/' component={Home}/>
            <Route exact path='/landing' component={Landing}/>
            <Route exact path='/matchmaking' component={Matchmaking}/>
            <Route exact path='/countdown' component={Countdown}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
