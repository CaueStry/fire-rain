class Time {
  constructor(x, y, gameManager, canvas) {
    this.axis = {
      x: x,
      y: y
    };
    this.gameManager = gameManager;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  getTime() {
    let totalSeconds = this.gameManager.gameTime / 60;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    if(minutes > 0) {
      return minutes + ":" + seconds;
    } else {
      return seconds;
    }
  }

  drawTime() {
    this.ctx.save();
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(this.getTime(), this.axis.x, this.axis.y);
    this.ctx.restore();
  }
}
