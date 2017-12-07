let backgroundManager = new BackgroundManager(200, "black", "background");
let gameManager = new GameManager("playArea");
let interfaceManager = new InterfaceManager(gameManager, "userInterface");

function mainLoop() {
  backgroundManager.update();
  if(gameManager.playing) {
    gameManager.update();
    interfaceManager.update();
  } else {
    gameManager.clearScreen();
    interfaceManager.clearInterface();
    interfaceManager.gameOver();
  }
  requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);
