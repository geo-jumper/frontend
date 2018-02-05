import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GameJoin from '../join-game';
import Home from  '../home';
import Landing from '../landing';

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
            {/* <Route exact path ='/dashboard' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
