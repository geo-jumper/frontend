import React from 'react';
import {socketInit} from '../../utils/socketIO';

const FindGame = ({ history, toggleMatchmakingOK, name }) => {
  return(
    <button onClick = {() =>{
      if (!name) {
        name = 'anon';
      }
      toggleMatchmakingOK();
      history.push(`/matchmaking?username=${name}`);
      socketInit();
    }}>
    Find Game
    </button>

  );
};

export default FindGame;
