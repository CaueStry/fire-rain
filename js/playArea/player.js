class Player {
  constructor(x, y, speed, sprite, canvas) {
    this.axis = {
      x: x,
      y: y
    }
    this.collider = {
      x: x,
      y: y,
      radius: 45,
      type: "circle"
    };
    this.movement = [false, false, false, false];
    this.shooting = false;
    this.shotCooldown = 0;
    this.shootCooldownMax = 20;
    this.speed = speed;
    this.health = 100;
    this.bulletsArray = [];
    this.sprite = document.getElementById(sprite);
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  drawPlayer() {
    this.ctx.drawImage(this.sprite, this.axis.x, this.axis.y);
  }

  movePlayer() {
    if(this.movement[0]) { // Up
      if(this.collider.y >= 50) {
        this.axis.y -= this.speed;
      }
    }
    if(this.movement[1]) { // Right
      if(this.collider.x <= this.canvas.width - 49) {
        this.axis.x += this.speed;
      }
    }
    if(this.movement[2]) { // Down
      if(this.collider.y <= this.canvas.height - 50) {
        this.axis.y += this.speed;
      }
    }
    if(this.movement[3]) { // Left
      if(this.collider.x >= 49) {
        this.axis.x -= this.speed;
      }
    }
  }

  checkShooting() {
    if(this.shooting && this.shotCooldown <= 0) {
      this.bulletsArray.push(new Bullet(this.axis.x + 55, this.axis.y + 46, 30, "bullet", "playArea"))
      this.shotCooldown = this.shootCooldownMax;
    }
    this.shotCooldown--;
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
    this.collider.x = this.axis.x + 105;
    this.collider.y = this.axis.y + 50;
  }

  updatePlayer() {
    this.movePlayer();
    this.updateCollider();
    this.drawPlayer();
    // this.drawCollider;
    this.checkShooting();
  }
}
