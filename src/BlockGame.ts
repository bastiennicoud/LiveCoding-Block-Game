/**
 * BlockGame base class
 *
 * @author Bastien Nicoud
 */
import * as p5 from 'p5'
import LevelLoader from './LevelLoader'

export default class BlockGame {

  p: p5
  config: Object
  levelLoader: LevelLoader

  constructor (p: p5, config: Object) {
    this.p = p
    this.config = config
    this.levelLoader = new LevelLoader()

    // Ling game to p5 methods
    this.p.preload = () => this.preload()
    this.p.setup = () => this.setup()
    this.p.draw = () => this.draw()
    this.p.keyPressed = () => this.keyPressed(p.keyCode)

  }

  /**
   * Preload the assets
   */
  preload () {
    this.levelLoader.loadLevel()
  }

  setup () {

  }

  draw () {

  }

  keyPressed (keyCode: number) {

  }

}