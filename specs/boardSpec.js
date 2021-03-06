import {assert} from 'chai'
import Board from '../src/Board.js'
import {buildGrid} from '../src/Board.js'
import Cell from '../src/Cell.js'

describe('Board', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Board({columns: 0, rows: 0}))
  })

  it('should create 2d array', () => {
    const board = new Board({columns: 5, rows: 5})
    assert.isArray(board.cells)
    assert.isArray(board.cells[0])
  })

  it('should calculate value of surrounded corner Cell', () => {
    const board = new Board({columns: 5, rows: 5})
    board.cells[0][1].alive = true
    board.cells[1][0].alive = true
    board.cells[1][1].alive = true
    assert.equal(3, board.cellValue({x: 0, y: 0}))
  })

  it('should calculate value of surrounded landlocked Cells', () => {
    const board = new Board({columns: 5, rows: 5})
    board.cells.forEach(column => 
      column.forEach(cell => {
        cell.alive = true
      })
    )
    assert.equal(8, board.cellValue({x: 1, y: 1}))
    assert.equal(8, board.cellValue({x: 2, y: 2}))
    assert.equal(8, board.cellValue({x: 3, y: 3}))
  })

  it('should set value of Cell when calculating', () => {
    const board = new Board({columns: 5, rows: 5})
    board.cells[0][1].alive = true
    board.cells[1][0].alive = true
    board.cells[1][1].alive = true
    board.cellValue({x: 0, y: 0})
    assert.equal(3, board.cells[0][0].value)
  })

  it('should calculate all cellValues', () => {
    const board = new Board({columns: 5, rows: 5})
    assert.equal(null, board.cells[1][1].value)
    assert.equal(null, board.cells[2][2].value)
    assert.equal(null, board.cells[3][3].value)

    board.cells.forEach(column => 
      column.forEach(cell => {
        cell.alive = true
      })
    )
    board.cellValues()
    
    assert.equal(8, board.cells[1][1].value)
    assert.equal(8, board.cells[2][2].value)
    assert.equal(8, board.cells[3][3].value)
  })

  it('should return flattened array of all cells', () => {
    const board = new Board({columns: 2, rows: 2})
    const expected = [
      new Cell({x: 0, y: 0, alive: true}),
      new Cell({x: 0, y: 1, alive: true}),
      new Cell({x: 1, y: 0, alive: true}),
      new Cell({x: 1, y: 1, alive: true})
    ]
    const actual = board.allCells()
    actual.forEach(cell => {
      cell.alive = true
    })
    assert.deepEqual(expected, actual)
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
