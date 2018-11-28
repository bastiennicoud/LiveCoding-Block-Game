import Level from './levels/Level.interface'
import InitiationLevel from './levels/InitiationLevel';
import * as p5 from 'p5'

/**
 * The level loader load a level from the levels folder
 * and creates the elements in the canvas
 */
export default class LevelLoader {

  p5: p5
  level: Level

  constructor (p5: p5) {
    this.p5 = p5
  }

  loadLevel (level: Level = new InitiationLevel) {
    this.level = level
  }

}