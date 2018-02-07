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
      new game.Brick(200, 180, 30, 300), // 1st pipe
      new game.Brick(400, 200, 30, 300), // 2nd pipe      
      new game.Brick(0, 60, 25, 10), // 1st platform
      new game.Brick(50, 80, 25, 10), // 2nd platform
      new game.Brick(100, 100, 25, 10), // 3rd platform
      new game.Brick(150, 120, 25, 10), // 4th platform
      new game.Brick(300, 150, 25, 10), // 5th platform
      new game.Brick(480, 290, 25, 10), // 6th platform
      new game.Brick(550, 290, 25, 10), // 7th platform
      new game.Brick(620, 290, 25, 10), // 8th platform
      new game.Brick(690, 290, 25, 10), // 9th platform
      new game.Brick(760, 290, 25, 10), // 10th platform
      new game.Brick(860, 240, 25, 10), // 11th platform
      new game.Brick(770, 180, 25, 10), // 12th and final platform
      
      
      
      
      
    ],
    spikes : [
      new game.Spike(250, 80),
      new game.Spike(250, 100),
      new game.Spike(250, 120),
      new game.Spike(530, 200),
      new game.Spike(550, 200),
      new game.Spike(570, 200),
      new game.Spike(590, 200),
      new game.Spike(610, 200),
      new game.Spike(630, 200),
      new game.Spike(650, 200),
      new game.Spike(670, 200),
      new game.Spike(690, 200),
      new game.Spike(710, 200),
      new game.Spike(730, 200),
      new game.Spike(750, 200),
      new game.Spike(770, 200),
      new game.Spike(790, 200),

      // bottom lava border - first zone
      new game.Spike(5, 390),
      new game.Spike(15, 390),
      new game.Spike(25, 390),
      new game.Spike(35, 390),
      new game.Spike(45, 390),
      new game.Spike(55, 390),
      new game.Spike(65, 390),
      new game.Spike(75, 390),
      new game.Spike(85, 390),
      new game.Spike(95, 390),
      new game.Spike(105, 390),
      new game.Spike(115, 390),
      new game.Spike(125, 390),
      new game.Spike(135, 390),
      new game.Spike(145, 390),
      new game.Spike(155, 390),
      new game.Spike(165, 390),
      new game.Spike(175, 390),
      new game.Spike(185, 390),

      // second zone
      new game.Spike(235, 390),
      new game.Spike(245, 390),
      new game.Spike(255, 390),
      new game.Spike(265, 390),
      new game.Spike(275, 390),
      new game.Spike(285, 390),
      new game.Spike(295, 390),
      new game.Spike(305, 390),
      new game.Spike(315, 390),
      new game.Spike(325, 390),
      new game.Spike(335, 390),
      new game.Spike(345, 390),
      new game.Spike(355, 390),
      new game.Spike(365, 390),
      new game.Spike(375, 390),
      new game.Spike(385, 390),
      
      //third zone
      new game.Spike(435, 390),
      new game.Spike(445, 390),
      new game.Spike(455, 390),
      new game.Spike(465, 390),
      new game.Spike(475, 390),
      new game.Spike(485, 390),
      new game.Spike(495, 390),
      new game.Spike(505, 390),
      new game.Spike(515, 390),
      new game.Spike(525, 390),
      new game.Spike(535, 390),
      new game.Spike(545, 390),
      new game.Spike(555, 390),
      new game.Spike(565, 390),
      new game.Spike(575, 390),
      new game.Spike(585, 390),
      new game.Spike(595, 390),
      new game.Spike(605, 390),
      new game.Spike(615, 390),
      new game.Spike(625, 390),
      new game.Spike(635, 390),
      new game.Spike(645, 390),
      new game.Spike(655, 390),
      new game.Spike(665, 390),
      new game.Spike(675, 390),
      new game.Spike(685, 390),
      new game.Spike(695, 390),
      new game.Spike(705, 390),
      new game.Spike(715, 390),
      new game.Spike(725, 390),
      new game.Spike(735, 390),
      new game.Spike(745, 390),
      new game.Spike(755, 390),
      new game.Spike(765, 390),
      new game.Spike(775, 390),
      new game.Spike(785, 390),
      new game.Spike(795, 390),
      new game.Spike(805, 390),
      new game.Spike(815, 390),
      new game.Spike(825, 390),
      new game.Spike(835, 390),
      new game.Spike(845, 390),
      new game.Spike(855, 390),
      new game.Spike(865, 390),
      new game.Spike(875, 390),
      new game.Spike(885, 390),
      
      
      
    ],
    star : null,
  },
};