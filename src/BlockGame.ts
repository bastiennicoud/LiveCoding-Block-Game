/**
 * BlockGame base class
 *
 * @author Bastien Nicoud
 */
export default class BlockGame {

  config: Object;

  constructor (config: Object) {
    this.config = config
  }

  // This method will be trigerd by the livecoding platform to bootstrap the app
  load (initiationLevel: Object) {
    console.log(initiationLevel)
  }

}