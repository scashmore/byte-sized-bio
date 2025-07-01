// NPC.js
import Character from './Character.js';

export default class NPC extends Character {
  constructor(npcId, name, health = 100, dialogue = [], givesItem = null) {
    super(name, health, dialogue);
    this.npcId = npcId;
    this.givesItem = givesItem;
  }
}
