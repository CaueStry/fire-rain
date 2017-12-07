class HealthBar {
  constructor(player, canvas) {
    this.player = player;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  drawHealthBar() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00FF99";
    this.ctx.rect(this.canvas.width / 4, 10, (this.canvas.width / 2) / 100 * this.player.health, 25);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.rect(this.canvas.width / 4, 10, this.canvas.width / 2, 25);
    this.ctx.stroke();
    this.ctx.restore();
  }
}
