import Character from './Character.js';

export default class Player extends Character {
  constructor(name, health, energy, weapons = [], dialogue = []) {
    super(name, health, dialogue);
    this.energy = energy;
    this.weapons = weapons; // array of weapon objects
    this.activeWeapon = weapons[0] || null;
    this.inventory = [];
  }

  setActiveWeapon(weaponName) {
    const found = this.weapons.find(w => w.name === weaponName);
    if (found) {
      this.activeWeapon = found;
    }
  }

  addWeapon(weapon) {
    if (!this.weapons.some(w => w.name === weapon.name)) {
      this.weapons.push(weapon);
    }
  }  

  attack(target, terminal) {
    const damage = this.activeWeapon ? this.activeWeapon.damage : 1;
    super.attack(target, terminal, damage);
  }
}
