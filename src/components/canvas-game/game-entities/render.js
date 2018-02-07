import * as game from './setup';

// ==================================================
// ================ WINDOW RENDERING ================
// ==================================================
(function() {
  const requestAnimationFrame = 
  window.requestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

// ==================================================
// =============== KEYBOARD LISTENERS ===============
// ==================================================
let keyboard = {};

let player = new game.Player();

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

export const renderLevel = (object) => {
  bricks = object.bricks;
  spikes = object.spikes;
};


// mattL - keydown === when a key is pressed
document.addEventListener('keydown', (event) => {
  // console.log(event.keyCode);
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
  player.stand();
  player.setDirection();
  player.moveRight(keyboard);
  player.moveLeft(keyboard);
  player.glide(keyboard);
  
  if (keyboard[40]) { // 40 === 'down arrow'
    player.slide();
  } else {
    player.velX *= game.FRICTION;
  }
  
  player.x += player.velX;
  player.y += player.velY;
  if (player.velY < player.terminalVelocity) {
    player.velY += game.GRAVITY;
  }

  setBorders(player);
  collisionCheck(player, bricks);
  spikeCheck(player, spikes);


  clearCanvas(game.ctx);
  renderBackground();
  bricks.forEach(brick => brick.render());
  spikes.forEach(spike => spike.render());
  player.render();

  renderGrid(game.ctx);
  
  requestAnimationFrame(update);
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
          ['../../../../src/sound/sound-effects/Movement/Falling Sounds/sfx_sounds_falling2.wav'],
      });
      sound.play();
    }
  }); 
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

// window.addEventListener('load', () => {
//   update();
// });

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
  let image = document.getElementById('lava');

  game.ctx.drawImage(image, 0, 0, 900, 400);
}