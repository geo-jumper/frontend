// import React, { Component } from 'react';

// class Game extends Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       // bricks={bricks}
//       // spikes={spikes}

//     );
//   }
// }
import { 
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  ctx,
  FRICTION,
  GRAVITY,
} from './canvas-properties';

export default (player, bricks, spikes) => {
  (function() {
    const requestAnimationFrame = 
    window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  
  let keyboard = {};

  // ==================================================
  // =================== CONTROLS =====================
  // ==================================================
  document.addEventListener('keydown', (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 40 && !player.crouching) {
      player.crouching = true;
      if (player.direction === 'right') {
        player.x += player.default.width / 2;    
        player.y += player.default.height * 0.75;    
      } else {
        player.x -= player.default.height * 0.875;
        player.y += player.default.height * 0.75;    
      }
    }

    if (event.keyCode === 38 && !player.jumping && player.jumpLimit > 0) {
      player.jump();
    }
    keyboard[event.keyCode] = true;
  });

  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 40 && player.crouching) {
      player.crouching = false;
      if (player.direction === 'right') {
        player.x -= player.default.width / 2;    
        player.y -= player.default.height * 0.75;    
      } else {
        player.x += player.default.height * 0.875;
        player.y -= player.default.height * 0.75;    
      }
    }

    player.jumping = false;
    keyboard[event.keyCode] = false;
  });


  window.addEventListener('load', () => {
    update(player, bricks, spikes, keyboard);
  });
};

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
  
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
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
    let collisionDirection = null;
  
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      player.resetPosition();
    }
  }); 
}

function setBorders(model) {
  setTopAndBottomBorders(model);
  setLeftAndRightBorders(model);
}

function setTopAndBottomBorders(model) {
  // mattL - configure the bottom of canvas
  if (model.y >= CANVAS_HEIGHT - model.height) {
    model.y = CANVAS_HEIGHT - model.height;
    
    if (model.type === 'character') {
      model.resetJump();
    }
  // mattL - configure the top of canvas
  } else if (model.y <= 0) {
    model.y = 0;
  }
}

function setLeftAndRightBorders(model) {
  // mattL - configure the right side of canvas
  if (model.x >= CANVAS_WIDTH - model.width) {
    model.x = CANVAS_WIDTH - model.width;
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
function clearCanvas() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update(player, bricks, spikes, keyboard) {
  player.stand();
  player.setDirection();
  player.moveRight(keyboard);
  player.moveLeft(keyboard);
  player.glide(keyboard);
  
  if (keyboard[40]) { // 40 === 'down arrow'
    player.slide();
  } else {
    player.velX *= FRICTION;
  }
  player.velY += GRAVITY;

  player.x += player.velX;
  player.y += player.velY;

  setBorders(player);
  collisionCheck(player, bricks);
  spikeCheck(player, spikes);


  clearCanvas();
  bricks.forEach(brick => brick.render());
  spikes.forEach(spike => spike.render());
  player.render();

  requestAnimationFrame(update);
}