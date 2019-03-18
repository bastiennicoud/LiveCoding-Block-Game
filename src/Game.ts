import { assets } from './Assets'

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

    console.log(`Is WebGL supported : ${PIXI.utils.isWebGLSupported()}`)

    this.createApplication()
    this.load()

  }

  /**
   * Creates the pixi app
   */
  private createApplication() {
    // Pixi instanciation
    this.app = new PIXI.Application({
      width: this.width,
      height: this.height,
      resolution: window.devicePixelRatio,
      autoResize: true,
      backgroundColor: 0x9809856
    })
    // Append the pixi canvas th the element
    this.el.appendChild(this.app.view)
  }

  private load() {
    PIXI
      .loader
      .add([
        { name: 'wall', url: `${this.assetsPath}/wall.png` },
        { name: 'octocat', url: `${this.assetsPath}/octocat.png` }
      ])
      .on('progress', this.loaderProgress)
      .load(this.setup)
  }

  /**
   * Handle pixi loading event and update loader
   */
  private loaderProgress(loader: PIXI.loaders.Loader, resource: PIXI.loaders.Resource) {
    console.log(`Loaded : ${resource.name}`)
    console.log(`Loading progress : ${loader.progress}%`)
  }

  /**
   * When all resources are loaded, setup the game
   */
  private setup() {
    // Create sprites
    let wall = new PIXI.Sprite(PIXI.loader.resources['wall'].texture)
    this.app.stage.addChild(wall)
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