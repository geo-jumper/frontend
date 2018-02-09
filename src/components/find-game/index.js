import React from 'react';
import {socketInit} from '../../utils/socketIO';

const FindGame = ({ history, toggleMatchmakingOK }) => {
  return(
    <button onClick = {() =>{
      toggleMatchmakingOK();
      history.push('/matchmaking');
      socketInit();
    }}>
    Find Game
    </button>

  );
};

export default FindGame;
