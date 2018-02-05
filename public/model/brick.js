class Brick {
  constructor(
    // DEFAULTS
    x = CANVAS_WIDTH / 10, 
    y = CANVAS_HEIGHT - 100, 
    width = Math.floor(Math.random() * 80) + 60,  //random brick size between 60-80
    height = 10
  ) {
    this.type = 'platform';
    this.color = '#333333';

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}