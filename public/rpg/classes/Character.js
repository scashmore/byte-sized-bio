export default class Character {
    constructor(name, health, dialogue = []) {
      this.name = name;
      this.health = health;
      this.dialogue = dialogue;
    }
  
    isAlive() {
      return this.health > 0;
    }
  
    speak(terminal) {
      this.dialogue.forEach(line => {
        terminal.print(`${this.name}: "${line}"`);
      });
    }
  
    attack(target, terminal, damage) {
      terminal.print(`${this.name} attacks ${target.name} for ${damage} damage!`);
      target.health -= damage;
    }
  }
  