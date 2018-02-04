import React, { Component } from 'react';
import buildGame from './resources/build-game';
import levelOne from './level/one';
import Player from './resources/player'; 

class GameLoader extends Component {

  render() {
    let { bricks, spikes } = levelOne;
    let player = new Player();

    return (
      <div>
        {/* <canvas id='geo-jumper'> */}
          {buildGame(player, bricks, spikes)}
        {/* </canvas> */}
      </div>
    );
  }
}

export default GameLoader;
