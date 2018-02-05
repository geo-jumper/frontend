import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUpForm from '../signup-form';
import LogInForm from '../login-form';
import ContinueAnonymously from '../continue-anonymously';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>Geo-Jumper</h1>
        
        <SignUpForm/>
        <LogInForm/>
        <ContinueAnonymously/>

      </div>

    );
  }
}

export default Home;