import * as game from './setup';


export default { // levels
  1 : {
    bricks : [
      new game.Brick(),
    ],
    spikes : [
      new game.Spike(100),
    ],
  },


  default : {
    bricks : [
      new game.Brick(),
      new game.Brick(100, 200),
      new game.Brick(200, 100),
      new game.Brick(375, 100),
    ],
    spikes : [
      new game.Spike(85, 200),
      new game.Spike(180, 100),
      new game.Spike(350, 40),
      new game.Spike(100),
      new game.Spike(300),
      new game.Spike(500),
      new game.Spike(700),
    ],
  },
};