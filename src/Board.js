import Cell from './Cell.js'

const buildGrid = function (width, height) {
  const cells = []
  for (let x = 0; x < width; x++) {
    let row = []
    for (let y = 0; y < height; y++) {
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
