class GameManager {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.player = new Player(50, 300, 5, "spaceship", "playArea");
    this.inputManager = new InputManager(this);
    this.meteorManager = new MeteorManager(canvas);
    this.score = 0;
    this.gameTime = 0;
    this.meteorScore = 10;
    this.meteorDamage = 10;
    this.playing = true;
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  applyCollisions() {
    for(let i = 0; i < this.meteorManager.meteorsArray.length; i++) {
      if(CollisionManager.checkCollisionCC(this.player.collider, this.meteorManager.meteorsArray[i].collider)) {
        this.meteorManager.meteorsArray.splice(i, 1);
        if(this.player.health - this.meteorDamage >= 0) {
          this.player.health -= this.meteorDamage;
        } else {
          this.player.health = 0;
        }
      }
    }

    for(let i = 0; i < this.player.bulletsArray.length; i++) {
      for(let j = 0; j < this.meteorManager.meteorsArray.length; j++) {
        if(CollisionManager.checkCollisionCR(this.meteorManager.meteorsArray[j].collider, this.player.bulletsArray[i].collider)) {
          this.meteorManager.meteorsArray.splice(j, 1);
          this.player.bulletsArray.splice(i, 1);
          this.score += this.meteorScore;
          break;
        }
      }
    }
  }

  resetLevel() {
    this.player.axis.x = 50;
    this.player.axis.y = 300;
    this.player.shootCooldownMax = 20;
    this.player.health = 100;
    this.score = 0;
    this.gameTime = 0;
    this.meteorScore = 10;
    this.meteorsDamage = 10;
    this.meteorManager.meteorsArray = [];
    this.meteorManager.meteorsPerSpawn = 3;
    this.meteorManager.skippedMeteors = 0;
    this.meteorManager.nextWaveTimerMax = 250;
    this.meteorManager.nextWaveTimer = 0;
    this.meteorManager.meteorMaxSpeed = 6;
    this.meteorManager.meteorMinSpeed = 4;
  }

  manageLevel() {
    if(this.score > 1000) {
      this.player.shootCooldownMax = 15;
    } else if(this.score > 2000) {
      this.player.shootCooldownMax = 10;
    } else if(this.score > 3000) {
      this.player.shootCooldownMax += 0.001;
    }

    if(this.gameTime / 60 > 30) {
      this.meteorManager.nextWaveTimerMax = 200;
      this.meteorManager.meteorsPerSpawn = 5;
      this.meteorManager.meteorMaxSpeed = 7;
      this.meteorManager.meteorMinSpeed = 5;
    } else if(this.gameTime / 60 > 60) {
      this.meteorManager.nextWaveTimerMax = 150;
      this.meteorManager.meteorsPerSpawn = 7;
    } else if(this.gameTime / 60 > 120) {
      this.meteorManager.nextWaveTimerMax = 100;
      this.meteorManager.meteorsPerSpawn = 10;
      this.meteorManager.meteorMaxSpeed = 8;
      this.meteorManager.meteorMinSpeed = 6;
    } else if(this.gameTime / 60 > 180) {
      this.meteorManager.nextWaveTimerMax += 0.004;
      this.meteorManager.meteorsPerSpawn += 0.004;
      this.meteorManager.meteorMaxSpeed += 0.004;
      this.meteorManager.meteorMinSpeed += 0.004;
    }
  }

  checkPlaying() {
    if(this.playing && this.player.health <= 0) {
      this.playing = false;
    }
  }

  update() {
    this.clearScreen();
    this.player.updatePlayer();
    BulletManager.updateBullets(this.player.bulletsArray, this.canvas);
    this.meteorManager.updateMeteors();
    this.applyCollisions();
    this.manageLevel();
    this.checkPlaying();
    this.gameTime++;
  }

}
