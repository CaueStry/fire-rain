class Bullet {
  constructor(x, y, speed, sprite, canvas) {
    this.sprite = document.getElementById(sprite);
    this.axis = {
      x: x,
      y: y
    }
    this.collider = {
      x: x,
      y: y,
      width: this.sprite.width,
      height: this.sprite.height,
      type: "rectangle"
    }
    this.speed = speed;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  moveBullet() {
    this.axis.x += this.speed;
  }

  drawBullet() {
    this.ctx.drawImage(this.sprite, this.axis.x, this.axis.y);
  }

  updateCollider() {
    this.collider.x = this.axis.x;
    this.collider.y = this.axis.y;
  }

  drawCollider() {
    this.ctx.save();
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.rect(this.collider.x, this.collider.y, this.collider.width, this.collider.height);
    this.ctx.stroke();
    this.ctx.restore();
  }
}
