/**
 * Class represent the character on the map
 */
import { Image } from 'p5'

export default class Character {

  image: Image;
  x: number;
  y: number;

  /**
   *
   * @param x number Position of the character on y axis (position in the map array, not in pixels)
   * @param y number Position of the character on x axis (position in the map array, not in pixels)
   */
  construct (image: Image, x: number, y: number) {
    this.image = image
    this.x = x
    this.y = y
  }

  moveUp () {

  }

  moveRight () {

  }

  moveDown () {

  }

  moveLeft () {

  }

}