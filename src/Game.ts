/**
 * Game.ts
 *
 * The entry point of the game
 */
export class Game {

  private el: HTMLElement

  private assetsPath: string

  constructor (el: HTMLElement, assetsPath: string) {

    this.el = el
    this.assetsPath = assetsPath

    this.el.style.backgroundColor = '#d35400'

    console.log('Block game constructor called')

  }

  public executeGameCommand (command: string) {
    console.log(`Command to execute : ${command}`)
    return true
  }

}