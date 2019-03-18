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
    PIXI.utils.sayHello('Hello from pixi')
    console.log(PIXI.utils.isWebGLSupported())

  }

  /**
   * Execute commands from the processor in the game
   * @param command the content of the command (sended by the processor)
   */
  public async executeGameCommand (command: string) {
    console.log(`Command to execute : ${command}`)
    this.el.innerText = command
    return true
  }

}