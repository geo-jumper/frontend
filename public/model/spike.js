class Spike {
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