import TerminalUI from './classes/TerminalUI.js';
import Game from './classes/Game.js';

console.log("App.js loaded");

// Load game JSON dynamically
fetch('./data/game.json')
  .then(response => response.json())
  .then(data => {
    const terminal = new TerminalUI("terminal");
    const game = new Game(data, terminal);
    game.run();
  })
  .catch(error => {
    console.error("Failed to load game data:", error);
    document.getElementById("terminal").textContent = "Failed to load game.";
  });