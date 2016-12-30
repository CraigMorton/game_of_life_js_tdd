import {assert} from 'chai'
import Cell from '../src/Cell.js'

describe('Cell', () => {
  
  it('should instantiate', () => {
    assert.isObject(new Cell())
  })

  it('should have x and y coord', () => {
    const cell = new Cell(5, 5)
    assert.equal(5, cell.x)
    assert.equal(5, cell.y)
  })

  it('should have alive status', () => {
    assert.isBoolean((new Cell()).alive )
  })

  it('should be able to set alive status in constructor', () => {
    const aliveCell = new Cell(1, 1, true)
    const deadCell = new Cell(1, 2, false)
    assert.equal(true, aliveCell.alive)
    assert.equal(false, deadCell.alive)
  })
})
