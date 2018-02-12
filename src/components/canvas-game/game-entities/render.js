import * as game from './setup';
import levels from './levels';
import sounds from '../../../utils/import-sounds';
import {Howl, Howler} from 'howler';
import { loadResults } from '../index';

// ==================================================
// =============== KEYBOARD LISTENERS ===============
// ==================================================
let keyboard = {};

let player = new game.Player();

let star = new game.Star();

let bricks = [
  new game.Brick(),
  new game.Brick(100, 200),
  new game.Brick(200, 100),
  new game.Brick(375, 100),
];
// ====HAZARDS=====
let spikes = [
  new game.Spike(85, 200),
  new game.Spike(180, 100),
  new game.Spike(350, 40),
  new game.Spike(100),
  new game.Spike(300),
  new game.Spike(500),
  new game.Spike(700),
];
let background;
let gifFrames;
let gifFramesDefault;
let startingTime;
let points;
let counterColor;
let levelFriction;
let levelGravity;

export const renderLevel = (level) => {
  console.log(`Loading level`, level);
  player.getUsername();
  // mattL - resetting player defaults
  player.default.jumpLimit = 2;
  player.jumpHeight = 3.2;
  player.swimming = level.playerIsSwimming || false;

  player.currentLevel = level.id;

  star = new game.Star(level.star.x, level.star.y);
  bricks = level.bricks;
  spikes = level.spikes;
  player.x = level.playerPosition.x;
  player.y = level.playerPosition.y;
  player.default.x = level.playerPosition.x;
  player.default.y = level.playerPosition.y;
  player.default.width = level.playerPosition.width || 20;
  player.default.height = level.playerPosition.height || 28;
  background = level.background;
  gifFrames = level.frames;
  gifFramesDefault = level.frames;
  counterColor = level.counterColor || 'black';
  levelFriction = level.friction || game.FRICTION;
  levelGravity = level.gravity || game.GRAVITY;

  player.jumpHeight = level.jumpHeight || player.jumpHeight;
  player.default.jumpLimit = level.jumpLimit || player.default.jumpLimit;
  player.starIsCaptured = false;
  startingTime = Date.now();
};

// mattL - keydown === when a key is pressed
document.addEventListener('keydown', (event) => {
  // mattL - 40 === down arrow
  if (event.keyCode === 40 && !player.crouching) {
    player.crouching = true;
  }
  // mattL - 38 === up arrow
  if ((event.keyCode === 32 || event.keyCode === 38) && !player.jumping && player.jumpLimit > 0) {
    player.jump();
  }
  keyboard[event.keyCode] = true;
});

// mattL - keyup === when a key is released
document.addEventListener('keyup', (event) => {
  if (event.keyCode === 40 && player.crouching) {
    player.crouching = false;
  }
  player.jumping = false;
  keyboard[event.keyCode] = false;
});

// ==================================================
// ================== UPDATE PAGE ===================
// ==================================================
export function update() {
  return setInterval(() => {
    player.stand();
    player.setDirection();
    player.moveRight(keyboard);
    player.moveLeft(keyboard);
    player.glide(keyboard);

    if (keyboard[40]) { // 40 === 'down arrow'
      player.slide();
    } else {
      player.velX *= levelFriction;
    }
    if (player.velY < player.terminalVelocity) {
      player.velY += levelGravity;
    }

    player.x += player.velX;
    player.y += player.velY;

    setBorders(player);
    collisionCheck(player, bricks);
    spikeCheck(player, spikes);
    starCheck(player, star);

    clearCanvas(game.ctx);
    renderBackground();
    bricks.forEach(brick => brick.render());
    spikes.forEach(spike => spike.render());
    if (player.currentLevel === 'end') {
      renderEndGameResults();
    } else {
      renderTimer();
    }

    // mattL - allows for the first person to collect the star to win
    //         and the second player to lose and go onto the next level
    if (!player.starIsCaptured) {
      star.render(); // mattL - renders a star if it hasn't been picked up
    } else {
      endLevel();
    }

    player.render();

  }, 1000 / 59);

}


// ==================================================
// ==================== ACTIONS =====================
// ==================================================
function collisionCheck(player, objects) {
  objects.forEach((object) => {
    // get the vectors to check against
    let vectorX = (player.x + (player.width / 2)) - (object.x + (object.width / 2));
    let vectorY = (player.y + (player.height / 2)) - (object.y + (object.height / 2));
    let halfWidths = (player.width / 2) + (object.width / 2);
    let halfHeights = (player.height / 2) + (object.height / 2);
    // add the half widths and half heights of the objects
    let collisionDirection = null;

    // if the x and y vector are less than the half width or half height, they must be inside the object, causing a collision
    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      // figures out on which side we are colliding (top, bottom, left, or right)
      var distanceX = halfWidths - Math.abs(vectorX),
        distanceY = halfHeights - Math.abs(vectorY);

      if (distanceX >= distanceY) {
        if (vectorY > 0) {
          collisionDirection = 'bottom';
          player.y += distanceY;
          player.velY = 0;
        } else {
          collisionDirection = 'top';
          player.resetJump();
          player.y -= distanceY;
          player.velY = 0;
        }
      } else {
        if (vectorX > 0) {
          collisionDirection = 'right';
          player.x += distanceX;
        } else {
          collisionDirection = 'left';
          player.x -= distanceX;
        }
      }
    }
  });
}


// RESET PLAYER WHEN SPIKE IS TOUCHED
function spikeCheck(player, spikes) {
  spikes.forEach(spike => {
    // get the vectors to check against
    let vectorX = (player.x + (player.width / 2)) - (spike.x + (spike.width / 2));
    let vectorY = (player.y + (player.height / 2)) - (spike.y + (spike.height / 2));
    let halfWidths = (player.width / 2) + (spike.width / 2);
    let halfHeights = (player.height / 2) + (spike.height / 2);
    // add the half widths and half heights of the objects

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      player.resetPosition();

      const sound = new Howl({
        src:
          [sounds.spikeCollision],
      });
      sound.play();
    }
  });
}

// CHECKING FOR PLAYER TO REACH STAR !!
function starCheck(player, star) {
  if(star) {
  // get the vectors to check against
    let vectorX = (player.x + (player.width / 2)) - (star.x + (star.width / 2));
    let vectorY = (player.y + (player.height / 2)) - (star.y + (star.height / 2));
    let halfWidths = (player.width / 2) + (star.width / 2);
    let halfHeights = (player.height / 2) + (star.height / 2);
    // add the half widths and half heights of the objects

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      player.wonTheLevel = true;
      endLevel();

      const sound = new Howl({
        src:
          [sounds.starCollision],
      });
      sound.play();
    }
  }
}

function setBorders(model) {
  setTopAndBottomBorders(model);
  setLeftAndRightBorders(model);
}

function setTopAndBottomBorders(model) {
  // mattL - configure the bottom of canvas
  if (model.y >= game.CANVAS_HEIGHT - model.height) {
    model.y = game.CANVAS_HEIGHT - model.height;
    model.velY = 0;

    if (model.type === 'character') {
      model.resetJump();
    }
  // mattL - configure the top of canvas
  }
  // } else if (model.y <= 0) {
  // model.y = 0;
  // }
}

function setLeftAndRightBorders(model) {
  // mattL - configure the right side of canvas
  if (model.x >= game.CANVAS_WIDTH - model.width) {
    model.x = game.CANVAS_WIDTH - model.width;
    model.velX *= -1;

  // mattL - configure the left side of canvas
  } else if (model.x <= 0) {
    model.velX *= -1;
    model.x = 0;
  }
}

// ==================================================
// ==================== RENDER =====================
// ==================================================
function clearCanvas(ctx) {
  ctx.clearRect(0, 0, game.CANVAS_WIDTH, game.CANVAS_HEIGHT);
}

// mattL - used for drawing the canvas grid for level creation
function renderGrid(ctx) {
  ctx.strokeStyle = '#fff';
  for(let x = 0; x <= 900; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 400);
    ctx.stroke();
  }

  for(let y = 0; y <= 400; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(900, y);
    ctx.stroke();
  }
}

function renderBackground() {
  if (!background) {
    return;
  }

  if (typeof background === 'object') {
    if (!gifFramesDefault) {
      throw new Error('__RENDER BACKGROUND__ background frame integer required for gif\'s');
    }
    if (gifFrames === gifFramesDefault * 2) {
      gifFrames = 2;
    }

    let image = document.getElementById(background[Math.floor(gifFrames / 2)]);
    game.ctx.drawImage(image, 0, 0, 900, 400);

    gifFrames ++;
  } else {

    let image = document.getElementById(background);
    game.ctx.drawImage(image, 0, 0, 900, 400);
  }
}

function renderTimer() {
  startingTime --;

  points = (Math.floor(60000 - (Date.now() - startingTime)));
  points = points < 0 ? 0 : points;

  game.ctx.fillStyle = counterColor;
  game.ctx.font = '20px open-sans';
  game.ctx.fillText(Math.floor(points), 835, 20);

  let you = player.username || 'anon';
  let them = player.secondPlayer.username || 'anon';
  you = you === 'anon' ? 'you' : you;
  them = them === 'anon' ? 'them' : them;
  let yourScore = player.score || 0;
  let theirScore = player.secondPlayer.score || 0;
  you = `${you}: ${yourScore}`;
  them = `${them}: ${theirScore}`;

  game.ctx.fillStyle = counterColor;
  game.ctx.font = '26px open-sans';
  game.ctx.fillText(you, 10, 25);

  
  game.ctx.fillStyle = counterColor;
  game.ctx.font = '26px open-sans';
  game.ctx.fillText(them, 10, 60);
}

function renderEndGameResults() {
  let you = player.username || 'anon';
  let them = player.secondPlayer.username || 'anon';
  you = you === 'anon' ? 'you' : you;
  them = them === 'anon' ? 'them' : them;
  let yourScore = player.score || 0;
  let theirScore = player.secondPlayer.score || 0;
  let winner = `${you}: ${yourScore}`;
  let loser = `${them}: ${theirScore}`;
  if (theirScore > yourScore) {
    [winner, loser] = [loser, winner];
  }


  game.ctx.fillStyle = counterColor;
  game.ctx.font = '26px open-sans';
  game.ctx.fillText(`Winner = ${winner}`, 10, 25);

  game.ctx.fillStyle = counterColor;
  game.ctx.font = '26px open-sans';
  game.ctx.fillText(`Loser = ${loser}`, 10, 60);
}

function endLevel() {

  if (player.wonTheLevel) {
    // mattL - you have to reset the level win so that last couple frames don't loop
    //         the game to the end
    player.wonTheLevel = false;

    player.captureStar({
      currentLevel: player.currentLevel,
      points,
    });

    player.score += points;
  }

  player.starIsCaptured = false;

  if (player.currentLevel === 'end') {
    loadResults();
  } else if (!levels[player.currentLevel + 1]) {
    player.sendTotalScore(player.score);
    renderLevel(levels['end']);
  } else {
    renderLevel(levels[player.currentLevel + 1]);
  }
}
