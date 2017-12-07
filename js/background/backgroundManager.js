class BackgroundManager {
  constructor(starsMax, backgroundColour, canvas) {
    this.starsMax = starsMax;
    this.starsArray = [];
    this.backgroundColour = backgroundColour;
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.start();
  }

  createStars() {
    for(let i = 0; i < this.starsMax; i++) {
      this.starsArray.push(new Star(Math.random() * this.canvas.width, Math.random() * this.canvas.height, Math.random() * 3, Math.random() * 2 + 1, "background"));
      this.starsCounter++;
    }
  }

  moveAllStars() {
    for(let i = 0; i < this.starsArray.length; i++) {
      this.starsArray[i].moveStar(this.canvas);
    }
  }

  drawAllStars() {
    for(let i = 0; i < this.starsArray.length; i++) {
      this.starsArray[i].drawStar(this.canvas);
    }
  }

  drawBackgroundColour() {
    this.ctx.fillStyle = this.backgroundColour;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
    this.ctx.restore();
  }

  start() {
    this.createStars();
  }

  update() {
    this.drawBackgroundColour();
    this.drawAllStars();
    this.moveAllStars();
  }
}
