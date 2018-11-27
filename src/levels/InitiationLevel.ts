import Level from './Level.interface'

import Wall from '../elements/Wall'

export default class InitiationLevel implements Level {

  elements: Array<any> = [
    new Wall
  ]

  // Define element position in the map
  pattern: [
    ['dd']
  ]

}
