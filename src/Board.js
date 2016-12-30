import Cell from './Cell.js'

const Board = function ({columns: width = 0, rows: height = 0}) {
  this.width = width
  this.height = height
  this.cells = []
  for (let y = height; y >= 1; y--) {
    let row = []
    for (let x = 1; x <= width; x++) {
      row.push(new Cell({x, y}))
    }
    this.cells.push(row)
  }

}

export default Board
