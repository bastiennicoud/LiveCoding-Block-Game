import { Map } from "./maps/Map";

/**
 * Manage a map
 */
export class MapManager {

  private app: PIXI.Application

  public sprites: Object

  private mapSize: number
  private spriteSize: number

  private characterPosition

  constructor(app) {
    this.app = app
    this.sprites = {}
    this.characterPosition = { x: 0, y: 0 }
  }

  loadMap(map: Map) {

    this.mapSize = map.map.length
    this.spriteSize = (this.app.view.height/window.devicePixelRatio)/this.mapSize

    // Iterates the map to generate the sprites
    map.map.forEach((line, lineKey) => {
      // Iterates each line
      line.forEach((element, columnKey) => {
        if (columnKey == 0) {
          this.sprites[lineKey] = {}
        }
        // Create the sprites
        if (map.spritesAssociations[element]) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources[map.spritesAssociations[element]].texture)
          sprite.width = this.spriteSize
          sprite.height = this.spriteSize
          this.calculateSpritePosition(sprite, lineKey, columnKey)
          this.sprites[lineKey][columnKey] = sprite
          if (map.spritesAssociations[element] == 'octocat') {
            this.characterPosition.x = columnKey
            this.characterPosition.y = lineKey
          }
          this.app.stage.addChild(this.sprites[lineKey][columnKey])
        } else {
          this.sprites[lineKey][columnKey] = null
        }
      })
    })

  }

  moveCharacter (direction) {
    console.log('movecharacter')
    switch (direction) {
      case 'ArrowLeft':
        this.moveSprite(
          this.characterPosition.y,
          this.characterPosition.x,
          this.characterPosition.y,
          this.characterPosition.x - 1
        )
        this.characterPosition.x--
        break
      case 'ArrowUp':
        this.moveSprite(
          this.characterPosition.y,
          this.characterPosition.x,
          this.characterPosition.y - 1,
          this.characterPosition.x
        )
        this.characterPosition.y--
        break
      case 'ArrowRight':
        this.moveSprite(
          this.characterPosition.y,
          this.characterPosition.x,
          this.characterPosition.y,
          this.characterPosition.x + 1
        )
        this.characterPosition.x++
        break
      case 'ArrowDown':
        this.moveSprite(
          this.characterPosition.y,
          this.characterPosition.x,
          this.characterPosition.y + 1,
          this.characterPosition.x
        )
        this.characterPosition.y++
        break
    }
  }

  moveSprite (oldLineKey, oldColumnKey, newLineKey, newColumnKey) {
    // console.log(oldLineKey, oldColumnKey, newLineKey, newColumnKey)
    let sprite = this.sprites[oldLineKey][oldColumnKey]
    this.sprites[oldLineKey][oldColumnKey] = null
    // Move the sprite to his new position
    this.sprites[newLineKey][newColumnKey] = sprite
    this.calculateSpritePosition(sprite, newLineKey, newColumnKey)
  }

  calculateSpritePosition(sprite: PIXI.Sprite, lineKey: number, columnKey: number) {
    sprite.position.set(columnKey*this.spriteSize, lineKey*this.spriteSize)
  }

}