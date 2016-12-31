import {assert} from 'chai'
import Game from '../src/Game.js'

describe('Game', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Game())
  })

})
