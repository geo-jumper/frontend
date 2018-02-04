import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { initializeChat } from '../../utils/socketIO';
import {Router, Route} from 'react-router';

//Dalton- On click user goes to /game
const JoinGame = withRouter(({ GameLoader }) => {
  return (
    <button onClick={() => {
      <Link to="/jumper" component={GameLoader}/>;
    }}>
      Join Game
    </button>
  );
});

export default JoinGame;
