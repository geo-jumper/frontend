import * as game from './setup';
import background from '../../../utils/import-images';


export default { // levels
  1 : {
    id : 1,
    star : { x : 840, y : 350 },
    playerPosition : { x : 10, y : 170 },
    background : 'clouds', // <img/> id
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
      new game.Brick(620, 90, 60),  // 6th rising platform
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
  },

  2 : {
    id : 2,
    star : {x: 764, y: 130},
    playerPosition : { x : 5, y : 10 },
    frames : 26,
    background : [ // <img/> id
      'lava-1',
      'lava-2',
      'lava-3',
      'lava-4',
      'lava-5',
      'lava-6',
      'lava-7',
      'lava-8',
      'lava-9',
      'lava-10',
      'lava-11',
      'lava-12',
      'lava-13',
      'lava-14',
      'lava-15',
      'lava-16',
      'lava-17',
      'lava-18',
      'lava-19',
      'lava-20',
      'lava-21',
      'lava-22',
      'lava-23',
      'lava-24',
      'lava-25',
      'lava-26',
    ],
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
      new game.Spike(5, 399),
      new game.Spike(15, 399),
      new game.Spike(25, 399),
      new game.Spike(35, 399),
      new game.Spike(45, 399),
      new game.Spike(55, 399),
      new game.Spike(65, 399),
      new game.Spike(75, 399),
      new game.Spike(85, 399),
      new game.Spike(95, 399),
      new game.Spike(105, 399),
      new game.Spike(115, 399),
      new game.Spike(125, 399),
      new game.Spike(135, 399),
      new game.Spike(145, 399),
      new game.Spike(155, 399),
      new game.Spike(165, 399),
      new game.Spike(175, 399),
      new game.Spike(185, 399),
      new game.Spike(195, 399),
      
      // second zone
      new game.Spike(235, 399),
      new game.Spike(245, 399),
      new game.Spike(255, 399),
      new game.Spike(265, 399),
      new game.Spike(275, 399),
      new game.Spike(285, 399),
      new game.Spike(295, 399),
      new game.Spike(305, 399),
      new game.Spike(315, 399),
      new game.Spike(325, 399),
      new game.Spike(335, 399),
      new game.Spike(345, 399),
      new game.Spike(355, 399),
      new game.Spike(365, 399),
      new game.Spike(375, 399),
      new game.Spike(385, 399),
      new game.Spike(395, 399),
      
      //third zone
      new game.Spike(435, 399),
      new game.Spike(445, 399),
      new game.Spike(455, 399),
      new game.Spike(465, 399),
      new game.Spike(475, 399),
      new game.Spike(485, 399),
      new game.Spike(495, 399),
      new game.Spike(505, 399),
      new game.Spike(515, 399),
      new game.Spike(525, 399),
      new game.Spike(535, 399),
      new game.Spike(545, 399),
      new game.Spike(555, 399),
      new game.Spike(565, 399),
      new game.Spike(575, 399),
      new game.Spike(585, 399),
      new game.Spike(595, 399),
      new game.Spike(605, 399),
      new game.Spike(615, 399),
      new game.Spike(625, 399),
      new game.Spike(635, 399),
      new game.Spike(645, 399),
      new game.Spike(655, 399),
      new game.Spike(665, 399),
      new game.Spike(675, 399),
      new game.Spike(685, 399),
      new game.Spike(695, 399),
      new game.Spike(705, 399),
      new game.Spike(715, 399),
      new game.Spike(725, 399),
      new game.Spike(735, 399),
      new game.Spike(745, 399),
      new game.Spike(755, 399),
      new game.Spike(765, 399),
      new game.Spike(775, 399),
      new game.Spike(785, 399),
      new game.Spike(795, 399),
      new game.Spike(805, 399),
      new game.Spike(815, 399),
      new game.Spike(825, 399),
      new game.Spike(835, 399),
      new game.Spike(845, 399),
      new game.Spike(855, 399),
      new game.Spike(865, 399),
      new game.Spike(875, 399),
      new game.Spike(885, 399),
      new game.Spike(895, 399),
    ],
  },


  default : {
    id : 'default',
    star : { x: 450, y: 350 },
    playerPosition : { x : 10, y : 350 },
    background : 'clouds', // <img/> id
    bricks : [
    ],
    spikes : [
    ],
  },

  end : {
    id : 'end',
    star : { x: 450, y: 350 },
    playerPosition : { x : 10, y : 350 },
    background : 'clouds', // <img/> id
    bricks : [
    ],
    spikes : [
    ],
  },
};