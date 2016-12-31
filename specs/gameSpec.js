import {assert} from 'chai'
import Game from '../src/Game.js'
import Board from '../src/Board.js'

describe('Game', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Game())
  })

  it('should have a turn counter', () => {
    const game = new Game()
    assert.equal(0, game.turns)
  })

  it('should take a Board in constructor', () => {
    const board = new Board({rows: 10, columns: 10})
    const game = new Game(board)
    assert.isObject(game.board)
  })

})
