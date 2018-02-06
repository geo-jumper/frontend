// ========================================
// ============= CANVAS SETUP =============
// ========================================
export let canvas = document.getElementById('geo-jumper');
export let ctx = canvas.getContext('2d');

export const CANVAS_WIDTH = 900;
export const CANVAS_HEIGHT = 400;
export const FRICTION = 0.85;
export const GRAVITY = 0.85;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// ========================================
// ============= PLAYER MODEL =============
// ========================================

let socket = null;

export const updateSocket = updatedSocket => {
  socket = updatedSocket;
};

export class Player {
  constructor() {
    this.type = 'character';
    this.color = 'orangered';
    this.default = {
      x: 10,
      y: CANVAS_HEIGHT - 400,
      height: 40,
      width: 10,
      jumpLimit: 2,
    };

    this.x = this.default.x;
    this.y = this.default.y;
    this.width = this.default.width;
    this.height = this.default.height;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.jumpLimit = this.default.jumpLimit;
    this.crouching = false;
    this.falling = true;
    this.direction = 'right';

    this.playerInterval = 0;
    this.secondPlayer = {};
  }

  // ============ PLAYER ACTIONS ============
  resetPosition(){
    this.velY = 0;
    this.velX = 0;
    this.x = this.default.x;
    this.y = this.default.y;
  }

  resetJump() {
    this.jumpLimit = this.default.jumpLimit;
  }

  jump() {
    this.velY = -this.speed * 4;
    this.jumping = true;
    this.jumpLimit --;
  }

  moveRight(keyboard) {
    if (keyboard[39] && !keyboard[40]) { // 39 === 'right arrow'
      if (this.velX < this.speed) {
        this.velX ++;
      }
    }
  }

  moveLeft(keyboard) {
    if (keyboard[37] && !keyboard[40]) { // 37 === 'left arrow'
      if (this.velX > -this.speed) {
        this.velX --;
      }
    }
  }

  stand() {
    this.width = this.default.width;
    this.height = this.default.height;
  }

  // mattL - occurs when crouching with velocity on the ground
  slide() {
    this.velX *= (FRICTION * 1.160);
    this.crouch();
  }

  // mattL - occurs when falling in the air
  glide(keyboard) {
    if (this.y < CANVAS_HEIGHT - this.height) {
      if (keyboard[40] && this.velY > 0) {
        this.velY -= 0.7;
      }
    }
  }

  crouch() {
    this.height = this.default.width;
    this.width = this.default.height;
  }

  // =========== PLAYER RENDERING ===========
  // mattL - set this color and size
  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = this.secondPlayer.color;
    ctx.fillRect(this.secondPlayer.x, this.secondPlayer.y, this.secondPlayer.width, this.secondPlayer.height);

    if (this.playerInterval === 0) {
      this.playerInterval = 2;

      let { x, y, width, height, color } = this;
      socket.emit('update-player', ({ x, y, width, height, color : 'blue' }));

      socket.on('render-players', (playerObject) => {
        this.secondPlayer = playerObject;
      });
    }

    this.playerInterval --;
  }

  setDirection() {
    if (this.velX > 0) {
      this.direction = 'right';
    } else {
      this.direction = 'left';
    }
  }
}

// ========================================
// ============= BRICK MODEL ==============
// ========================================
export class Brick {
  constructor(
    // dalton - DEFAULTS
    x = CANVAS_WIDTH / 10,
    y = CANVAS_HEIGHT - 100,
    width = 60,
    height = 10
  ) {
    this.type = 'platform';
    this.color = '#333333';

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // ============= BRICK RENDERING ==============
  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// ========================================
// ============= SPIKE MODEL ==============
// ========================================
export class Spike {
  constructor(
    // DEFAULTS
    x = CANVAS_WIDTH - 100,
    y = CANVAS_HEIGHT - 10,
    width = 10,
    height = 10
  ) {
    this.type = 'spike';
    this.color = 'red';

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // ============= SPIKE RENDERING ==============
  render() {
    ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.beginPath();
    ctx.moveTo(this.x + (this.width / 2), this.y + this.height); // top point
    ctx.lineTo(this.x, this.y); // left point
    ctx.lineTo(this.x + this.width, this.y); // right point
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x + (this.width / 2), this.y); // top point
    ctx.lineTo(this.x - (this.width / 2), this.y); // left point
    ctx.lineTo(this.x + (this.width / 2), this.y - this.height); // right point
    ctx.fill();
  }
}
