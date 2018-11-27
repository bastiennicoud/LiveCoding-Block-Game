import Level from './levels/Level.interface'
import InitiationLevel from './levels/InitiationLevel';

/**
 * The level loader load a level from the levels folder
 * and creates the elements in the canvas
 */
export default class LevelLoader {

  level: Level

  loadLevel (level: Level = new InitiationLevel) {
    this.level = level
  }

}