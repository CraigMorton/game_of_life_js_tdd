import {assert} from 'chai'
import Board from '../src/Board.js'

describe('Board', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Board({columns: 0, rows: 0}))
  })

  it('should create 2d array', () => {
    const board = new Board({columns: 5, rows: 5})
    assert.isArray(board.cells)
    assert.isArray(board.cells[0])
  })
})
