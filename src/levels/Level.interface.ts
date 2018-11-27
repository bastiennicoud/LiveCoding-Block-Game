/**
 * Define levels
 */
export default interface Level {

  /**
   * All the elements used by the level
   */
  elements: Array<any>

  /**
   * The level pattern (should be symetric)
   */
  pattern: Array<Array<any>>

}
