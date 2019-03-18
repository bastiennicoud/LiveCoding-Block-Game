/**
 * Game.ts
 *
 * The entry point of the game
 */
export class Game {

  private el: HTMLElement

  private assetsPath: string

  private height: number
  private width: number

  private app: PIXI.Application

  constructor (el: HTMLElement, assetsPath: string) {

    this.el = el
    this.assetsPath = assetsPath
    this.height = this.el.offsetHeight
    this.width = this.el.offsetWidth

    this.el.style.backgroundColor = '#95afc0'

    console.log(`Is WebGL supported : ${PIXI.utils.isWebGLSupported()}`)

    this.createApplication()

  }

  /**
   * Creates the pixi app
   */
  private createApplication() {
    // Pixi instanciation
    this.app = new PIXI.Application({
      width: this.width,
      height: this.height
    })
    // Append the pixi canvas th the element
    this.el.appendChild(this.app.view)
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