import * as game from './setup';


export default { // levels
  1 : {
    bricks : [
      new game.Brick(610, 80, 10, undefined, '#5abdf4'),  // invisi-brick
      new game.Brick(630, -10, 90),  // invisi-brick
      new game.Brick(120, 200, 10, 30), // 1st pipe
      new game.Brick(180, 200, 10, 40), // 2nd pipe
      new game.Brick(620, -10, 10, 320),  // 3rd pipe
      new game.Brick(560, 240, 10, 160),  // 4th pipe
      new game.Brick(620, 0, 10, 160),  // 5th pipe
      new game.Brick(730, 80, 10, 320),  // 6th pipe
      new game.Brick(890, 0, 10, 400),  // 6th pipe
      new game.Brick(0, 220, 120), // initial platform
      new game.Brick(120, 200), // second platform
      new game.Brick(180, 240, 380), // third bottom platform
      new game.Brick(240, 150, 380), // first ceiling
      new game.Brick(560, 390, 380),  // fourth bottom platform
      new game.Brick(620, 290, 30),  // 1st rising platform
      new game.Brick(710, 340, 20),  // 2nd rising platform
      new game.Brick(710, 240, 20),  // 3rd rising platform
      new game.Brick(620, 190, 30),  // 4th rising platform
      new game.Brick(710, 140, 20),  // 5th rising platform
      new game.Brick(620, 90, 50),  // 6th rising platform
    ],
    spikes : [
      new game.Spike(110, 210),
      new game.Spike(240, 170),
      new game.Spike(300, 230),
      new game.Spike(360, 170),
      new game.Spike(420, 230),
      new game.Spike(480, 170),
      new game.Spike(540, 230),
      new game.Spike(600, 170),
      new game.Spike(730, 75),
      new game.Spike(820, 80),
      new game.Spike(840, 80),
      new game.Spike(860, 80),
      new game.Spike(880, 80),
      new game.Spike(750, 220),
      new game.Spike(770, 220),
      new game.Spike(790, 220),
      new game.Spike(810, 220),
    ],
    star : null,
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