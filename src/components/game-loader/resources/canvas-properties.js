let canvas = document.getElementById('geo-jumper');
let ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 400;
const FRICTION = 0.85;
const GRAVITY = 0.85;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

export default {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  ctx,
  FRICTION,
  GRAVITY,
};