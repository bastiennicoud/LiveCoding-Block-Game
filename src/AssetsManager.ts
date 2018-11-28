import * as p5 from 'p5'

/**
 * The asset manager allows you to load assets for reuse in all the game
 *
 * @class
 * @author Bastien Nicoud
 */
export default class AssetsManager {

  p5: p5

  assetsDatas: Array<any> = [
    { name: 'pacman', path: 'sprites/pacman.png' },
    { name: 'wall', path: 'sprites/wall.png' }
  ]

  assets: any

  /**
   * @param p5
   */
  constructor (p5: p5) {
    this.p5 = p5
  }

  /**
   * Loads the assets in ram (from p5 preload)
   */
  loadAssets () {
    for (let data of this.assetsDatas) {
      this.assets[data.name] = this.p5.loadImage(data.path)
    }
  }

  /**
   * Return an asset
   * @param name
   */
  getAsset (name: string) {
    return this.assets[name]
  }
}