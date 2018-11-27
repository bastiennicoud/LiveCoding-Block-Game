import Level from './Level.interface'

import * as w from '../elements/Wall'
import * as b from '../elements/Blank'

export default class InitiationLevel implements Level {

  elements: [
    //
  ]

  // Define element position in the map
  pattern: [
    [w,w,w,w],
    [w,b,w,w],
    [w,b,b,b],
    [w,w,w,w]
  ]
}
