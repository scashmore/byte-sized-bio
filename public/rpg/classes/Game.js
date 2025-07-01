// Game.js
import Weapon from './Weapon.js';
import Player from './Player.js';
import Enemy from './Enemy.js';
import NPC from './NPC.js';
import Choice from './Choice.js';
import Scene from './Scene.js';
import Battle from './Battle.js';

export default class Game {
  constructor(data, terminal) {
    this.terminal = terminal;
    this.player = null;
    this.weapons = new Map();
    this.enemies = new Map();
    this.npcs = new Map();
    this.scenes = new Map();
    this.currentScene = null;

    this.loadData(data);
  }

  loadData(data) {
    // Load weapons
    for (const w of data.weapons || []) {
      const weapon = new Weapon(w.name, w.damage);
      this.weapons.set(weapon.name, weapon);
    }

    // Load player
    const p = data.player;
    const weapon = this.weapons.get(p.weapon);
    const startingWeapons = weapon ? [weapon] : [];
    this.player = new Player(p.name, p.health, p.energy, startingWeapons);

    // Load enemies
    for (const e of data.enemies || []) {
      const enemy = new Enemy(e.id, e.name, e.health, e.damage);
      this.enemies.set(enemy.enemyId, enemy);
    }

    // Load NPCs
    for (const n of data.npcs || []) {
      const npc = new NPC(n.id, n.name, n.health || 100, n.dialogue || [], n.gives_item || null);
      this.npcs.set(npc.npcId, npc);
    }

    // Load scenes
    for (const s of data.scenes || []) {
      const choices = (s.choices || []).map(c => new Choice(c.text, c.next_scene));
      const scene = new Scene({
        sceneId: s.id,
        text: s.text || "",
        choices,
        battle: s.battle || null,
        npc: s.npc || null,
        gainWeapon: s.gain_weapon || null,
        nextScene: s.next_scene || null,
      });
      this.scenes.set(scene.sceneId, scene);
    }

    // Set starting scene
    this.currentScene = this.scenes.get("start");
  }

  async applySceneEffects(scene) {
    // Handle NPC interaction
    if (scene.npc) {
      const npc = this.npcs.get(scene.npc);
      if (npc) {
        for (const line of npc.dialogue) {
          await this.terminal.print(`${npc.name}: "${line}"`);
        }
        if (npc.givesItem) {
          const weapon = this.weapons.get(npc.givesItem);
          if (weapon) {
            await this.terminal.print(`You received ${weapon.name}!`);
            this.player.addWeapon(weapon);
            this.player.setActiveWeapon(weapon.name);
          }
        }
      }
    }

    // Handle weapon gain (directly from scene)
    if (scene.gainWeapon) {
      const weapon = this.weapons.get(scene.gainWeapon);
      if (weapon) {
        await this.terminal.print(`You obtained ${weapon.name}!`);
        this.player.addWeapon(weapon);
        this.player.setActiveWeapon(weapon.name);
      }
    }
  }

  async startBattle(enemyId) {
    const enemy = this.enemies.get(enemyId);
    if (!enemy) {
      await this.terminal.print("Enemy not found!");
      return false;
    }
    const battle = new Battle(this.player, enemy, this.terminal);
    await battle.runBattle();
    return this.player.isAlive();
  }

  async run() {
    while (this.currentScene) {
      const scene = this.currentScene;
      scene.display(this.terminal);

      await this.applySceneEffects(scene);

      if (scene.battle) {
        const alive = await this.startBattle(scene.battle);
        if (!alive) {
          await this.terminal.print("Game Over!");
          break;
        }
      }

      // No choices, auto advance
      if (scene.choices.length === 0 && scene.nextScene) {
        this.currentScene = this.scenes.get(scene.nextScene);
        continue;
      }

      // Handle player choice
      if (scene.choices.length > 0) {
        const index = await new Promise(resolve => {
          this.terminal.displayChoices(scene.choices, resolve);
        });

        this.terminal.clearChoices();

        const choice = scene.choices[index];
        this.currentScene = this.scenes.get(choice.nextScene);
      } else {
        await this.terminal.print("The End.");
        break;
      }
    }
  }
}
