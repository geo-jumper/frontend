// catherine - howler handles the sound effects
import {Howl, Howler} from 'howler';

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
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`);

export const updateSocket = (getSocket) => {
  socket = getSocket();
};

export class Player {
  constructor() {
    this.type = 'character';
    this.color = 'orangered';
    this.default = {
      x: 10,
      y: CANVAS_HEIGHT - 400,
      height: 28, // mattL - character height must be at least
      //                     28 or they fall through the bricks
      width: 20,
      jumpLimit: 2,
    };

    this.x = this.default.x;
    this.y = this.default.y;
    this.width = this.default.width;
    this.height = this.default.height;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.terminalVelocity = 12;
    this.jumping = false;
    this.jumpLimit = this.default.jumpLimit;
    this.crouching = false;
    this.falling = true;
    this.direction = 'right';

    this.characterFrame = 0;
    this.walkingCycle = 5;
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
    this.velY = -this.speed * 3.2;
    this.jumping = true;
    this.jumpLimit --;
    
    const sound = new Howl ({
      src: 
      ['../../../../src/sound/sound-effects/Movement/Jumping and Landing/sfx_movement_jump8.wav'],
    });
    sound.play(); 
  }

  moveRight(keyboard) {
    if (keyboard[39] && !keyboard[40]) { // 39 === 'right arrow'
      if (this.velX < this.speed) {
        this.velX ++;
      }
      if(this.walkingCycle === 0) {
        this.walkingCycle = 12;
        const sound = new Howl ({
          src: ['../../../../src/sound/sound-effects/Movement/Footsteps/sfx_movement_footstepsloop4_fast.wav'],
        });
        sound.play();
      }
      this.walkingCycle--;
    }
  }

  moveLeft(keyboard) {
    if (keyboard[37] && !keyboard[40]) { // 37 === 'left arrow'
      if (this.velX > -this.speed) {
        this.velX --;
      }
      if(this.walkingCycle === 0) {
        this.walkingCycle = 12;
        const sound = new Howl ({
          src: ['../../../../src/sound/sound-effects/Movement/Footsteps/sfx_movement_footstepsloop4_fast.wav'],
        });
        sound.play();
      }
      this.walkingCycle--;
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
    // this.height = this.default.width;
    // this.width = this.default.height;
  }

  // =========== PLAYER RENDERING ===========
  // mattL - set this color and size
  render() {
    let characterStatus = null;
    this.setFalling();

    let standingCharacter = [
      12, // image: x - location  
      11, // image: y - location
      11, // image: x - span
      16, // image: y - span
      this.x, // image: x- positioning
      this.y, // image: y - positioning
      this.width, // image: width
      this.height + 2,  // image: height
    ];

    let movingCharacter = {
      // sequence 1
      1: [ 
        52, // image: x - location  
        11, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
      // sequence 2
      2: [ 
        52, // image: x - location  
        40, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
      // sequence 3
      3: [ 
        52, // image: x - location  
        71, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
      // sequence 4
      4: [ 
        52, // image: x - location  
        101, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
      // sequence 5
      5: [ 
        52, // image: x - location  
        130, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
      // sequence 6
      6: [ 
        52, // image: x - location  
        161, // image: y - location
        12, // image: x - span
        16, // image: y - span
        this.x, // image: x- positioning
        this.y, // image: y - positioning
        this.width, // image: width
        this.height + 2,  // image: height
      ],
    };

    let parachute = [
      214, // image: x - location  
      10, // image: y - location
      18, // image: x - span
      16, // image: y - span
      this.x - 5, // image: x- positioning
      this.y - 25, // image: y - positioning
      this.width + 10, // image: width
      this.height + 6,  // image: height
    ];

    let crouchingCharacter = [
      216, // image: x - location  
      101, // image: y - location
      12, // image: x - span
      16, // image: y - span
      this.x, // image: x- positioning
      this.y, // image: y - positioning
      this.width, // image: width
      this.height + 2,  // image: height
    ];

    let jumpingCharacter = [
      92, // image: x - location  
      10, // image: y - location
      14, // image: x - span
      18, // image: y - span
      this.x, // image: x- positioning
      this.y, // image: y - positioning
      this.width, // image: width
      this.height + 2,  // image: height
    ];

    if (this.velY < 0) { // mattL - the player is rising up if velocity < 0
      characterStatus = jumpingCharacter;
      this.drawCharacter(jumpingCharacter);
    }
    else if (this.falling && this.crouching) {
      characterStatus = [parachute, standingCharacter];
      this.drawCharacter(parachute);
      this.drawCharacter(standingCharacter);
    }
    else if (this.crouching) {
      characterStatus = crouchingCharacter;
      this.drawCharacter(crouchingCharacter);
    }
    // mattL - if the velocity is greater than 0.5 
    //         then the player is moving at a noticeable rate
    else if (Math.abs(this.velX) > 0.5) {
      this.characterFrame += 1;
      // mattL - increments the movingCharacter Frame Sequence to make the
      //         character look like it's moving. '/ 5' sets the animation speed
      let frame = Math.floor(this.characterFrame / 5);
      // mattL - '(% 6) + 1' selects the character frame
      //         ex: sequence 1 through 6
      characterStatus = movingCharacter[(frame % 6) + 1];
      this.drawCharacter(movingCharacter[(frame % 6) + 1]);
    } else {
      this.characterFrame = 0;
      this.walkingCycle = 0;
      characterStatus = standingCharacter;
      this.drawCharacter(standingCharacter);
    }

    // =========== Second Player ===========
    this.drawOtherPlayer(this.secondPlayer);

    if (this.playerInterval === 0) {
      this.playerInterval = 2;
      // console.log(characterStatus);
      
      socket.emit('update-player', ({
        direction: this.direction,
        characterStatus,
      }));

      socket.on('render-players', (secondPlayer) => {
        // console.log('hi');
        this.secondPlayer = secondPlayer;
      });
    }

    this.playerInterval --;
  }

  setDirection() {
    if (this.velX >= 0) {
      this.direction = 'right';
    } else {
      this.direction = 'left';
    }
  }

  setFalling() {
    if (this.velY <= 0) {
      this.falling = false;
    } else {
      this.falling = true;
    }
  }

  drawCharacter(properties) {
    let leftTuxedoMan = document.getElementById('left-tuxedo-man');
    let rightTuxedoMan = document.getElementById('right-tuxedo-man');
    let tuxedoMan = null;

    if (this.direction === 'left') {
      tuxedoMan = leftTuxedoMan;  
    } else {
      tuxedoMan = rightTuxedoMan;
    }
    if (properties.length === 8) {
      ctx.drawImage(tuxedoMan, ...properties);
    }
  }

  drawOtherPlayer(secondPlayer) {
    let leftTuxedoMan = document.getElementById('left-tuxedo-man');
    let rightTuxedoMan = document.getElementById('right-tuxedo-man');
    let tuxedoMan = null;

    if (secondPlayer.direction === 'left') {
      tuxedoMan = leftTuxedoMan;
    } else {
      tuxedoMan = rightTuxedoMan;
    }
    // mattL - we need secondPlayer.characterStatus to check, before rendering
    //         because for the first few frames there's no data
    if (secondPlayer.characterStatus) {
      // mattL - if the character status length is two, then it has the character
      //         and the parachute, so we want to render both objects
      if (secondPlayer.characterStatus.length === 2) {
        secondPlayer.characterStatus.forEach(eachImage => {
          ctx.drawImage(tuxedoMan, ...eachImage);
        });
      }
      else if (secondPlayer.characterStatus && secondPlayer.characterStatus.length === 8) {
        ctx.drawImage(tuxedoMan, ...secondPlayer.characterStatus);
      }
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
    height = 10,
    color = '#fff'
  ) {
    this.type = 'platform';
    this.color = color;

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
    height = 10,
    color = 'orange'
  ) {
    this.type = 'spike';
    this.color = color;

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
