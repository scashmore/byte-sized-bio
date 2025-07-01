// Enemy.js
import Character from './Character.js';

export default class Enemy extends Character {
  constructor(enemyId, name, health, damage, dialogue = []) {
    super(name, health, dialogue);
    this.enemyId = enemyId;
    this.damage = damage;
  }

  attack(player, terminal) {
    super.attack(player, terminal, this.damage);
  }
}
