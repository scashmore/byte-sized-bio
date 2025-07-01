import Character from './Character.js';

export default class Player extends Character {
  constructor(name, health, energy, weapon = null, dialogue = []) {
    super(name, health, dialogue);
    this.energy = energy;
    this.weapon = weapon;
    this.inventory = [];
  }

  attack(target, terminal) {
    const damage = this.weapon ? this.weapon.damage : 1;
    super.attack(target, terminal, damage);
  }
}
