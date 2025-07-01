// Scene.js
export default class Scene {
    constructor({
      sceneId,
      text = "",
      choices = [],
      battle = null,
      npc = null,
      gainWeapon = null,
      nextScene = null,
    }) {
      this.sceneId = sceneId;
      this.text = text;
      this.choices = choices;       // array of Choice instances
      this.battle = battle;         // enemyId or null
      this.npc = npc;               // npcId or null
      this.gainWeapon = gainWeapon;
      this.nextScene = nextScene;   // for automatic progression
    }
  
    display(terminal) {
      terminal.print(this.text);
      if (this.choices.length > 0) {
        this.choices.forEach((choice, i) => {
          terminal.print(`${i + 1}. ${choice.text}`);
        });
      } else if (this.nextScene) {
      }
    }
  }  