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
})
