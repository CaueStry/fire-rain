class Meteor {
  constructor(y, speed, sprite, canvas) {
    this.sprite = document.getElementById(sprite);
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.axis = {
      x: this.canvas.width + 200,
      y: y
    };
    this.collider = {
      x: this.axis.x,
      y: y,
      radius: 45,
      type: "circle"
    };
    this.speed = speed;
  }

  drawMeteor() {
    this.ctx.drawImage(this.sprite, this.axis.x, this.axis.y);
  }

  moveMeteor() {
    this.axis.x -= this.speed;
  }

  drawCollider() {
    this.ctx.save();
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(this.collider.x, this.collider.y, this.collider.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.restore();
  }

  updateCollider() {
    this.collider.x = this.axis.x + 60;
    this.collider.y = this.axis.y + 50;
  }
}
