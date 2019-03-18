import { BaseMap } from './maps/BaseMap';
import { MapManager } from './MapManager';

let app: PIXI.Application
let mapManager: MapManager

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

  // private app: PIXI.Application

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
    app = new PIXI.Application({
      width: this.width,
      height: this.height,
      resolution: window.devicePixelRatio,
      autoResize: true,
      backgroundColor: 0x999999
    })
    // Append the pixi canvas th the element
    this.el.appendChild(app.view)
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
  setup = () => {
    // Load a map
    // Load the sprites of the map
    // Generate the map
    mapManager = new MapManager(app)
    mapManager.loadMap(new BaseMap())

    // Register key listener
    console.log('registering event')
    this.el.addEventListener('mouseover', (e) => {
      window.addEventListener('keydown', this.keyPressed)
    })
    this.el.addEventListener('mouseout', (e) => {
      window.removeEventListener('keydown', this.keyPressed)
    })
  }

  keyPressed = (e) => {
    mapManager.moveCharacter(e.key)
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