class InputManager {
  constructor(gameManager) {
    this.gameManager = gameManager;
    this.player = this.gameManager.player;
    this.start();
  }

  start() {
    document.onkeydown = this.checkKeyDown.bind(this);
    document.onkeyup = this.checkKeyUp.bind(this);
  }

  checkKeyDown(event) {
    if(event.keyCode == 38) { // Player starts moving Up
      this.player.movement[0] = true;
    }
    if(event.keyCode == 39) { // Player starts moving Right
      this.player.movement[1] = true;
    }
    if(event.keyCode == 40) { // Player starts moving Down
      this.player.movement[2] = true;
    }
    if(event.keyCode == 37) { // Player starts moving Left
      this.player.movement[3] = true;
    }
    if(event.keyCode == 32) { // Player starts shooting
      this.player.shooting = true;
    }
    if(event.keyCode == 82) {
      if(!this.gameManager.playing) {
        this.gameManager.resetLevel();
        this.gameManager.playing = true;
      }
    }
  }

  checkKeyUp(event) {
    if(event.keyCode == 38) { // Player stops moving Up
      this.player.movement[0] = false;
    }
    if(event.keyCode == 39) { // Player stops moving Right
      this.player.movement[1] = false;
    }
    if(event.keyCode == 40) { // Player stops moving Down
      this.player.movement[2] = false;
    }
    if(event.keyCode == 37) { // Player stops moving Left
      this.player.movement[3] = false;
    }
    if(event.keyCode == 32) { // Player starts moving Left
      this.player.shooting = false;
    }
  }
}
