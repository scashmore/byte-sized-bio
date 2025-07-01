// Battle.js
export default class Battle {
    constructor(player, enemy, terminal) {
      this.player = player;
      this.enemy = enemy;
      this.terminal = terminal;
      this.turn = "player";  // or "enemy"
      this.isOver = false;
    }
  
    async playerTurn() {
      await this.terminal.print("\nIt's your turn. What do you do?");
    
      const options = [
        { text: "Attack", value: "attack" },
        { text: "Run away", value: "run" }
      ];
    
      const index = await new Promise(resolve => {
        this.terminal.displayChoices(options, resolve);
      });
    
      this.terminal.clearChoices();
    
      const selected = options[index].value;
    
      if (selected === "attack") {
        this.player.attack(this.enemy, this.terminal);
        if (!this.enemy.isAlive()) {
          await this.terminal.print(`${this.enemy.name} has been defeated!`);
          this.isOver = true;
        }
      } else if (selected === "run") {
        if (Math.random() > 0.5) {
          await this.terminal.print("You successfully ran away!");
          this.isOver = true;
        } else {
          await this.terminal.print("Failed to run away!");
        }
      }
    }
    
    
  
    async enemyTurn() {
      if (this.enemy.isAlive()) {
        this.enemy.attack(this.player, this.terminal);
        if (!this.player.isAlive()) {
          await this.terminal.print(`${this.player.name} has been defeated!`);
          this.isOver = true;
        }
      }
    }
  
    async runBattle() {
      await this.terminal.print(`Battle started: ${this.player.name} vs ${this.enemy.name}!\n`);
      while (!this.isOver) {
        if (this.turn === "player") {
          await this.playerTurn();
          this.turn = "enemy";
        } else {
          await this.enemyTurn();
          this.turn = "player";
        }
      }
    }
  }  