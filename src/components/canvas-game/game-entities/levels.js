import * as game from './setup';
import background from '../../../utils/import-images';


export default { // levels
  1 : {
    id : 1,
    star : { x : 750, y : 300 },
    playerPosition : { x : 10, y : 170 },
    counterColor : 'black',
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
    star : {x: 770, y: 130},
    playerPosition : { x : 5, y : 10 },
    counterColor : 'white',
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
      new game.Brick(890, 0, 10, 400), // right border
      
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
      // new game.Spike(895, 399),
    ],
  },

  3 : {
    id : 3,
    background: 'rainbow',
    counterColor : 'white',
    playerPosition : { x : 5, y : 350 },
    star: {x: 860, y: 100},    
    bricks : [
      // first diagonal 
      new game.Brick(0, 390, 25, 10), // 1st platform
      new game.Brick(50, 330, 25, 10), // 2nd platform  
      new game.Brick(100, 270, 25, 10), // 3rd platform  
      new game.Brick(150, 210, 25, 10), // 4th platform  
      new game.Brick(200, 150, 25, 10), // 5th platform  
      new game.Brick(250, 90, 25, 10), // 6th platform   
      new game.Brick(300, 30, 25, 10), // 7th platform 

      // second diagonal
      new game.Brick(380, 330, 25, 10), // 9th platform  
      new game.Brick(430, 270, 25, 10), // 10th platform  
      new game.Brick(480, 210, 25, 10), // 11th platform  
      new game.Brick(530, 150, 25, 10), // 12th platform  
      new game.Brick(580, 90, 25, 10),  // 13th platform 
      new game.Brick(630, 30, 25, 10),  // 14th platform   
      
      // third diagonal
      new game.Brick(710, 330, 25, 10), // 15th platform
      new game.Brick(760, 270, 25, 10), // 15th platform
      new game.Brick(810, 210, 25, 10), // 15th platform
      new game.Brick(860, 150, 25, 10), // 15th platform
      new game.Brick(910, 90, 25, 10), // 15th platform
      
    ],
    spikes : [

      // first row of spikes
      new game.Spike(320, 50),
      new game.Spike(320, 70),
      new game.Spike(320, 90),
      new game.Spike(320, 110),
      new game.Spike(320, 130),
      new game.Spike(320, 150),
      new game.Spike(320, 170),
      new game.Spike(320, 190),
      new game.Spike(320, 210),
      new game.Spike(320, 230),
      new game.Spike(320, 250),
      new game.Spike(320, 270),
      new game.Spike(320, 290),
      new game.Spike(320, 310),
      new game.Spike(320, 330),
      new game.Spike(320, 350),
      new game.Spike(320, 370),
      new game.Spike(320, 390),
      
      // second row of spikes
      new game.Spike(370, 10),      
      new game.Spike(370, 30),
      new game.Spike(370, 50),
      new game.Spike(370, 70),
      new game.Spike(370, 90),
      new game.Spike(370, 110),
      new game.Spike(370, 130),
      new game.Spike(370, 150),
      new game.Spike(370, 170),
      new game.Spike(370, 190),
      new game.Spike(370, 210),
      new game.Spike(370, 230),
      
      // first row of spikes at bottom
      new game.Spike(340, 390),
      new game.Spike(360, 390),
      new game.Spike(380, 390),
      new game.Spike(400, 390),
      
      // third row of spikes
      new game.Spike(650, 50),
      new game.Spike(650, 70),
      new game.Spike(650, 90),
      new game.Spike(650, 110),
      new game.Spike(650, 130),
      new game.Spike(650, 150),
      new game.Spike(650, 170),
      new game.Spike(650, 190),
      new game.Spike(650, 210),
      new game.Spike(650, 230),
      new game.Spike(650, 250),
      new game.Spike(650, 270),
      new game.Spike(650, 290),
      new game.Spike(650, 310),
      new game.Spike(650, 330),
      new game.Spike(650, 350),
      new game.Spike(650, 370),
      new game.Spike(650, 390),

      // fourth row of spikes
      new game.Spike(700, 10),      
      new game.Spike(700, 30),
      new game.Spike(700, 50),
      new game.Spike(700, 70),
      new game.Spike(700, 90),
      new game.Spike(700, 110),
      new game.Spike(700, 130),
      new game.Spike(700, 150),
      new game.Spike(700, 170),
      new game.Spike(700, 190),
      new game.Spike(700, 210),
      new game.Spike(700, 230),


      // second row of spikes at bottom
      new game.Spike(670, 390),
      new game.Spike(690, 390),
      new game.Spike(710, 390),
      new game.Spike(730, 390),
    ],
  },

  4 : {
    id : 4,
    background: 'ice',
    counterColor : 'black',
    friction : 0.992,
    playerPosition : { x : 5, y : 350 },
    star: {x: 870, y: 21},    
    bricks : [

      new game.Brick(50, 305, 820, 10), // 2nd platform (long)
      new game.Brick(90, 255, 900, 10), // 3rd platform (long)
      new game.Brick(50, 205, 820, 10), // 4th platform (long)
      new game.Brick(90, 155, 900, 10), // 5th platform (long)
      new game.Brick(50, 105, 820, 10), // 6th platform (long)
      new game.Brick(90, 55, 900, 10), // 7th platform (long)
      new game.Brick(50, 5, 900, 10), // 8th platform (long)
      
      new game.Brick(50, 5, 10, 310), // 1st pipe
    ],
    spikes : [


    ],
  },

  5 : {
    id : 5,
    gravity : 0.1,
    jumpLimit : Infinity,
    jumpHeight : 0.6,
    background : 'underwater',
    counterColor : 'white',
    playerPosition : { x : 5, y : 20 },
    star: {x: 370, y: 110}, 
    bricks : [
    ],
    spikes : [

      // first spike border
      new game.Spike(0, 0),
      new game.Spike(10, 0),
      new game.Spike(20, 0),
      new game.Spike(30, 0),
      new game.Spike(40, 0),
      new game.Spike(50, 0),
      new game.Spike(60, 0),
      
      
      // vertical spike wall
      new game.Spike(70, 10),
      new game.Spike(70, 30),
      new game.Spike(70, 50),
      new game.Spike(70, 70),
      new game.Spike(70, 90),
      new game.Spike(70, 110),
      new game.Spike(70, 130),
      new game.Spike(70, 150),
      new game.Spike(70, 170),
      new game.Spike(70, 190),
      new game.Spike(70, 210),
      new game.Spike(70, 230),
      new game.Spike(70, 250),
      new game.Spike(70, 270),
      new game.Spike(70, 290),
      new game.Spike(70, 310),
      new game.Spike(70, 330),
      
    
      // spike bottom
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
      new game.Spike(205, 399),
      new game.Spike(215, 399),
      new game.Spike(225, 399),
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
      new game.Spike(405, 399),
      new game.Spike(415, 399),
      new game.Spike(425, 399),
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


      // spike wave
      new game.Spike(70, 330),
      new game.Spike(90, 320),
      new game.Spike(110, 310),
      new game.Spike(130, 300),
      new game.Spike(150, 310),
      new game.Spike(170, 320),
      new game.Spike(190, 330),
      new game.Spike(210, 320),
      new game.Spike(230, 310),
      new game.Spike(250, 300),
      new game.Spike(270, 310),
      new game.Spike(290, 320),
      new game.Spike(310, 330),
      new game.Spike(330, 320),
      new game.Spike(350, 310),
      new game.Spike(370, 300),
      new game.Spike(390, 310),
      new game.Spike(410, 320),
      new game.Spike(430, 330),
      new game.Spike(450, 320),
      new game.Spike(470, 310),
      new game.Spike(490, 300),
      new game.Spike(510, 310),
      new game.Spike(530, 320),
      new game.Spike(550, 330),
      new game.Spike(570, 320),
      new game.Spike(590, 310),
      new game.Spike(610, 300),
      new game.Spike(630, 310),
      new game.Spike(650, 320),
      new game.Spike(670, 330),
      new game.Spike(690, 320),
      new game.Spike(710, 310),
      new game.Spike(730, 300),
      new game.Spike(750, 310),
      new game.Spike(770, 320),
      new game.Spike(790, 330),
      new game.Spike(810, 320),
      new game.Spike(830, 310),
      new game.Spike(850, 300),

      // second spike wall
      new game.Spike(860, 280),
      new game.Spike(860, 260),
      new game.Spike(860, 240),
      new game.Spike(860, 220),
      new game.Spike(860, 200),
      new game.Spike(860, 180),
      new game.Spike(860, 160),
      new game.Spike(860, 140),
      new game.Spike(860, 120),
      new game.Spike(860, 100),
      new game.Spike(860, 80),
      new game.Spike(860, 60),
      new game.Spike(860, 40),

      // spike fish body
      new game.Spike(430, 35),
      new game.Spike(410, 45),
      new game.Spike(390, 55),
      new game.Spike(370, 65),
      new game.Spike(350, 85),
      new game.Spike(330, 105),
      new game.Spike(310, 125),
      new game.Spike(310, 155),
      new game.Spike(320, 175),
      new game.Spike(345, 195),
      new game.Spike(375, 200),
      new game.Spike(405, 200),
      new game.Spike(435, 200),
      new game.Spike(465, 200),
      new game.Spike(495, 195),
      new game.Spike(525, 185),
      new game.Spike(555, 175),
      new game.Spike(585, 165),
      new game.Spike(605, 155),
      new game.Spike(635, 145),
      new game.Spike(460, 35),
      new game.Spike(480, 40),
      new game.Spike(500, 45),
      new game.Spike(520, 50),
      new game.Spike(540, 55),
      new game.Spike(560, 60),
      new game.Spike(580, 65),
      new game.Spike(600, 70),
      new game.Spike(620, 80),
      new game.Spike(640, 90),
      new game.Spike(600, 70),
      new game.Spike(600, 70),
      new game.Spike(600, 70),
      new game.Spike(600, 70),

      // spike fish tail top
      new game.Spike(660, 70),
      new game.Spike(680, 50),
      new game.Spike(700, 30),


      // spike fish tail bottom
      new game.Spike(660, 160),
      new game.Spike(680, 180),
      new game.Spike(700, 200),

      // spike fish tail vertical
      new game.Spike(700, 180),
      new game.Spike(700, 160),

      new game.Spike(700, 50),
      new game.Spike(700, 70),

    ],
  },



  default : {
    id : 'default',
    counterColor : 'black',
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
    counterColor : 'black',
    star : { x: 450, y: 350 },
    playerPosition : { x : 10, y : 350 },
    background : 'clouds', // <img/> id
    bricks : [
    ],
    spikes : [
    ],
  },
};
