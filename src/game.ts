import initiationLevel from './maps/initiationLevel'

/**
 * Entry point of the game
 */
class Game {

  // This method will be trigerd by the livecoding platform to bootstrap the app
  load (initiationLevel: Object) {
    console.log(initiationLevel)
  }

}