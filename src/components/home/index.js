import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import JoinGame from '../join-game';
import SignUpForm from '../signup-form';


class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1>Geo-Jumper</h1>
        
        <SignUpForm/>

      </div>

    );
  }
}

export default Home;