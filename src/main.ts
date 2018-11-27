/**
 * Entry point of the game
 *
 * LiveCoding platform will load this file and execute the code
 */
import * as p5 from 'p5'
import BlockGame from './BlockGame'

/**
 * p5 initialization function
 * @param p p5 instance
 */
let gameFunctions = (p: p5) => {

  /**
   * Loads the game
   */
  let blockGame = new BlockGame(
    p,
    {
    el: document.getElementById('block-game'),
  })

}

let game = new p5(gameFunctions)
