class InterfaceManager {
  constructor(gameManager, canvas) {
    this.gameManager = gameManager;
    this.player = this.gameManager.player;
    this.canvasName = canvas;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.healthBar = new HealthBar(this.player, this.canvasName);
    this.score = new Score(10, this.canvas.height - 10, this.gameManager, this.canvasName);
    this.time = new Time(this.canvas.width - 70, this.canvas.height - 10, this.gameManager, this.canvasName);
  }

  clearInterface() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  gameOver() {
    this.ctx.save();
    this.ctx.font = "100px Arial";
    this.ctx.fillStyle = "#FFF";
    this.ctx.textAlign = "center"
    this.ctx.fillText("You're dead!", this.canvas.width / 2, 200);
    this.ctx.font = "80px Arial";
    this.ctx.fillText("Score: " + this.gameManager.score, this.canvas.width / 2, 400);
    this.ctx.font = "50px Arial";
    this.ctx.fillText("Time: " + this.time.getTime(), this.canvas.width / 2, 475);
    this.ctx.font = "30px Arial";
    this.ctx.textAlign = "start";
    this.ctx.fillText("Press 'R' to restart", 20, this.canvas.height - 20);
    this.ctx.restore();
  }

  update() {
    this.clearInterface();
    this.score.drawScore();
    this.time.drawTime();
    this.healthBar.drawHealthBar();
  }
}
