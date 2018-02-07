import React from 'react';
import {socketInit} from '../../utils/socketIO';

const FindGame = ({ history }) => {
  return(
    <button onClick = {() =>{
      history.push('/matchmaking');
      socketInit();
    }}>
    Find Game
    </button>

  );
};

export default FindGame;
