/**
 * This file provides translation files between javascrit instructions and the game engine
 *
 * @author Bastien Nicoud
 */

/**
 * The Game class allows the user to interact with the game
 */
class Game {

  /**
   * Loads à level by his name
   * In case of invalid name, return false
   * @param {string} levelName
   */
  async loadLevel (levelName) {

    let loaded = await engine.send(`game.levelLoader.load('${levelName}')`)

    return loaded

  }

  reset () {

  }
}

/**
 * The Character class allows you to interact with the character
 */
class Character {

  /**
   * Creates a new character in the map
   */
  async constructor (x, y) {

    let loaded = await engine.send(`game.levelLoader.load('${levelName}')`)

    return loaded
  }

  moveUp () {
    let moved = await engine.send(`game.character.moveUp()`)

    return moved
  }
}