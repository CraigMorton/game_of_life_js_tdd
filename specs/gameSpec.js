import {assert} from 'chai'
import Game from '../src/Game.js'
import Board from '../src/Board.js'
import Cell from '../src/Cell.js'

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

  it('should kill cells with value <2', () => {
    const cell = new Cell({x: 0, y: 0})
    cell.value = 1
    cell.alive = true
    const game = new Game()
    game.tickCell(cell)
    assert.equal(false, cell.alive)
  })

  it('should kill cells with value >3', () => {
    const cell = new Cell({x: 0, y: 0})
    cell.value = 4
    cell.alive = true
    const game = new Game()
    game.tickCell(cell)
    assert.equal(false, cell.alive)
  })

  it('should revive cells with value 3', () => {
    const cell = new Cell({x: 0, y: 0})
    cell.value = 3
    cell.alive = false
    const game = new Game()
    game.tickCell(cell)
    assert.equal(true, cell.alive)
  })

  it('should leave cells with value 2-3 alive', () => {
    const cell2 = new Cell({x: 2, y: 2})
    const cell3 = new Cell({x: 3, y: 3})
    cell2.value = 2
    cell3.value = 3
    cell2.alive = true
    cell3.alive = true
    const game = new Game()
    game.tickCell(cell2)
    game.tickCell(cell3)
    assert.equal(true, cell2.alive)
    assert.equal(true, cell3.alive)
  })

  it('should leave cells with value 2 dead', () => {
    const cell = new Cell({x: 2, y: 2})
    cell.value = 2
    cell.alive = false
    const game = new Game()
    game.tickCell(cell)
    assert.equal(false, cell.alive)
  })

  it('should tick all Cells in turn -- 2x2', () => {
    const board = new Board({rows: 2, columns: 2})
    board.allCells().forEach(cell => {
      cell.alive = true
    })
    board.cells[1][1].alive = false
    const game = new Game(board)
    game.tickCells()
    assert.equal(true, game.board.cells[0][1].alive)
    assert.equal(true, game.board.cells[0][1].alive)
    assert.equal(true, game.board.cells[1][0].alive)
    assert.equal(true, game.board.cells[1][1].alive)
  })

  it('should tick all Cells in turn -- 3x3', () => {
    const board = new Board({rows: 3, columns: 3})
    board.allCells().forEach(cell => {
      cell.alive = true
    })

    board.cells[0][2].alive = false
    board.cells[2][0].alive = false
    board.cells[2][2].alive = false
    const game = new Game(board)
    board.cellValues()
    game.tickCells()
    assert.equal(true, game.board.cells[0][0].alive)
    assert.equal(false, game.board.cells[0][1].alive)
    assert.equal(true, game.board.cells[0][2].alive)
    assert.equal(false, game.board.cells[1][0].alive)
    assert.equal(false, game.board.cells[1][1].alive)
    assert.equal(true, game.board.cells[1][2].alive)
    assert.equal(true, game.board.cells[2][0].alive)
    assert.equal(true, game.board.cells[2][1].alive)
    assert.equal(true, game.board.cells[2][2].alive)

  })
  
})
