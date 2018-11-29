import Level from './Level.interface'

import Blank from '../elements/Blank'
import Wall from '../elements/Wall'
import Character from '../elements/Character'

export default class InitiationLevel implements Level {

  /**
   * Map the numbers in the map pattern to they correspondig class
   */
  elements: Object = {
    0: Blank,
    1: Wall,
    2: Character
  }

  // Define element position in the map
  pattern: Array<Array<Number>> = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 2, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1]
  ]

}
