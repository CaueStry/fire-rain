class MeteorManager {
  constructor(canvas) {
    this.meteorsArray = [];
    this.canvas = document.getElementById(canvas);
    this.meteorsPerSpawn = 3;
    this.nextWaveTimer = 0;
    this.skippedMeteors = 0;
    this.nextWaveTimerMax = 250;
    this.meteorMaxSpeed = 6;
    this.meteorMinSpeed = 4;
  }

  spawnMeteors() {
    for(let i = 0; i < this.meteorsPerSpawn + (this.skippedMeteors * 2); i++) {
      this.meteorsArray.push(new Meteor(Math.random() * (this.canvas.height - 100), Math.random() * (this.meteorMaxSpeed - this.meteorMinSpeed) + this.meteorMinSpeed, "meteor","playArea"));
    }
    this.skippedMeteors = 0;
  }

  checkWave() {
    if(this.nextWaveTimer <= 0) {
      this.spawnMeteors();
      this.nextWaveTimer = this.nextWaveTimerMax;
    }
    this.nextWaveTimer--;
  }

  clearMeteors() {
    for(let i = 0; i < this.meteorsArray.length; i++) {
      if(this.meteorsArray[i].axis.x < -150) {
        this.meteorsArray.splice(i, 1);
        this.skippedMeteors++;
      }
    }
  }

  updateMeteors() {
    this.checkWave();
    this.clearMeteors();
    for(let i = 0; i < this.meteorsArray.length; i++) {
      this.meteorsArray[i].moveMeteor();
      this.meteorsArray[i].drawMeteor();
      this.meteorsArray[i].updateCollider();
      // this.meteorsArray[i].drawCollider();
    }
  }
}
