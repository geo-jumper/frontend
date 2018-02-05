import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from  '../dashboard';
import { render } from 'react-dom';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent:false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
    <Route path="/dashboard" component={Dashboard}/>;
  }


  render() {
    return (
      <div className='landing'>
        <BrowserRouter>
          <div>
              
            <button onClick={this._onButtonClick}>Dash</button>
            {this.state.showComponent ?
              <Dashboard /> :
              null
            }
            {/* <button onClick={() => {
              return <Link to="/dashboard" component={Dashboard}/>;
            }}></button> */}
          </div>

          
          
        </BrowserRouter>
        
      </div>
    );
  }
}
export default Landing;