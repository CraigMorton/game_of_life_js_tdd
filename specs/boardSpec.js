import {assert} from 'chai'
import Board from '../src/Board.js'
import {buildGrid} from '../src/Board.js'

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

describe('buildGrid function', () => {
  
  it('should create first Cell with appropriate x and y values', () => {
    const cells = buildGrid(5, 5)
    const firstCell = cells[0][0]
    assert.equal(0, firstCell.x)
    assert.equal(0, firstCell.y)
  })

  it('should create last Cell with appropriate x and y values', () => {
    const cells = buildGrid(5, 5)
    const lastCell = cells[4][4]
    assert.equal(4, lastCell.x)
    assert.equal(4, lastCell.y)
  })

})
