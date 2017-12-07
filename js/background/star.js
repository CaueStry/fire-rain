class Star {
  constructor(x, y, size, speed, canvas) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  drawStar() {
    this.ctx.fillStyle = "white";
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.restore();
  }

  moveStar() {
    if(this.x < 0) {
      this.x = this.canvas.width + 1;
      this.y = Math.random() * this.canvas.height;
    }
    this.x -= this.speed;
  }
}
