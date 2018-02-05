import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GameJoin from '../game-join';
import Dashboard from  '../dashboard';
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
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/' component={Landing}/>
            {/* <Route exact path ='/dashboard' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
