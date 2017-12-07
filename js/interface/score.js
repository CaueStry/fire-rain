class Score {
  constructor(x, y, gameManager, canvas) {
    this.axis = {
      x: x,
      y: y
    };
    this.gameManager = gameManager;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  drawScore() {
    this.ctx.save();
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText("Score: " + this.gameManager.score, this.axis.x, this.axis.y);
    this.ctx.restore();
  }
}
