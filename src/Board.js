import Cell from './Cell.js'

const buildGrid = function (width, height) {
  const cells = []
  for (let y = height; y >= 1; y--) {
    let row = []
    for (let x = 1; x <= width; x++) {
      row.push(new Cell({x, y}))
    }
    cells.push(row)
  }
  return cells
}

const Board = function ({columns: width = 0, rows: height = 0}) {
  this.width = width
  this.height = height
  this.cells = buildGrid(width, height)
}

export {buildGrid}
export default Board
