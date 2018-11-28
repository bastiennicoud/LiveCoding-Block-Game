/**
 * BlockGame base class
 *
 * @author Bastien Nicoud
 */
import * as p5 from 'p5'
import LevelLoader from './LevelLoader'
import AssetsManager from './AssetsManager';

export default class BlockGame {

  p5: p5
  config: Object
  assetsManager: AssetsManager
  levelLoader: LevelLoader

  constructor (p5: p5, config: Object) {
    this.p5 = p5
    this.config = config
    this.assetsManager = new AssetsManager(p5)
    this.levelLoader = new LevelLoader(p5)

    // Link game to p5 methods
    this.p5.preload = () => this.preload()
    this.p5.setup = () => this.setup()
    this.p5.draw = () => this.draw()
    this.p5.keyPressed = () => this.keyPressed(p5.keyCode)

  }

  /**
   * Preload the assets
   */
  preload () {
    // Preload all the assets in the asset manager
    this.assetsManager.loadAssets()
  }

  setup () {
    // Load the default level
    this.levelLoader.loadLevel()
  }

  draw () {

  }

  keyPressed (keyCode: number) {

  }

}