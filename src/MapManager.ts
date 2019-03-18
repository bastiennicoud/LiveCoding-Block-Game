import { Map } from "./maps/Map";

/**
 * Manage a map
 */
export class MapManager {

  private app: PIXI.Application

  private sprites: Object

  constructor(app) {
    this.app = app
    this.sprites = {}
  }

  loadMap(map: Map) {

    console.log(this.app.view.height)
    let mapSize = map.map.length
    let spriteSize = (this.app.view.height/window.devicePixelRatio)/mapSize
    // Iterates the map to generate the sprites
    map.map.forEach((line, lineKey) => {
      // Iterates each line
      line.forEach((element, columnKey) => {
        if (columnKey == 0) {
          this.sprites[lineKey] = {}
        }
        // console.log(`Element : ${lineKey}, ${columnKey}`)
        // Create the sprites
        // console.log(map.spritesAssociations[element])
        if (map.spritesAssociations[element]) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources[map.spritesAssociations[element]].texture)
          sprite.width = spriteSize
          sprite.height = spriteSize
          sprite.position.set(columnKey*spriteSize, lineKey*spriteSize)
          this.sprites[lineKey][columnKey] = sprite
          this.app.stage.addChild(this.sprites[lineKey][columnKey])
        } else {
          this.sprites[lineKey][columnKey] = null
        }
      })
    })
  }
}