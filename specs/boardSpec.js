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

  it('should create first Cell with appropriate x and y values', () => {
    const board = new Board({columns: 5, rows: 5})
    const firstCell = board.cells[0][0]
    assert.equal(1, firstCell.x)
    assert.equal(5, firstCell.y)
  })

  it('should create last Cell with appropriate x and y values', () => {
    const board = new Board({columns: 5, rows: 5})
    const lastCell = board.cells[4][4]
    assert.equal(5, lastCell.x)
    assert.equal(1, lastCell.y)
  })
})
