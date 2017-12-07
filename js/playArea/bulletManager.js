class BulletManager {
  static moveAllBullets(bulletsArray) {
    for(let i = 0; i < bulletsArray.length; i++) {
        bulletsArray[i].moveBullet();
    }
  }

  static drawAllBullets(bulletsArray) {
    for(let i = 0; i < bulletsArray.length; i++) {
      bulletsArray[i].drawBullet();
    }
  }

  static clearBullets(bulletsArray, canvas) {
    for(let i = 0; i < bulletsArray.length; i++) {
      if(bulletsArray[i].axis.x > canvas.width + 100) {
        bulletsArray.splice(i, 1);
      }
    }
  }

  static updateAllColliders(bulletsArray) {
    for(let i = 0; i < bulletsArray.length; i++) {
      bulletsArray[i].updateCollider();
      // bulletsArray[i].drawCollider();
    }
  }

  static updateBullets(bulletsArray, canvas) {
    this.moveAllBullets(bulletsArray);
    this.drawAllBullets(bulletsArray);
    this.clearBullets(bulletsArray, canvas);
    this.updateAllColliders(bulletsArray);
  }
}
