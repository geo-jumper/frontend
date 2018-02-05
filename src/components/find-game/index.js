import React from 'react';
import {withRouter} from 'react-router-dom';
import {socketInit} from '../../utils/socketIO';

const FindGame = withRouter(({history}) => {
  return(
    <button onClick = {() =>{
      history.push('/matchmaking');
      socketInit();
    }}>
    Find Game
    </button>

  );
});

export default FindGame; 