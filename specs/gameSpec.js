import {assert} from 'chai'
import Game from '../src/Game.js'

describe('Game', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Game())
  })

  it('should have a turn counter', () => {
    const game = new Game()
    assert.equal(0, game.turns)
  })

})
