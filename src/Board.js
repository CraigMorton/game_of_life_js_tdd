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

Board.prototype.cellValue = function ({x, y}) {
  const cell = this.cells[x][y]
  const neighbours = []

  neighbours.push(this.cells[x][y + 1])
  neighbours.push(this.cells[x][y - 1])

  const previousColumnExists = (this.cells[x - 1] != null)
  const nextColumnExists = (this.cells[x + 1] != null)
  
  if (previousColumnExists) {
    neighbours.push(this.cells[x - 1][y + 1])
    neighbours.push(this.cells[x - 1][y])
    neighbours.push(this.cells[x - 1][y - 1])
  }

  if (nextColumnExists) {
    neighbours.push(this.cells[x + 1][y + 1])
    neighbours.push(this.cells[x + 1][y])
    neighbours.push(this.cells[x + 1][y - 1])
  }

  const existingNeighbours = neighbours.filter(cell => cell != null)

  const cellValue = existingNeighbours
    .map(cell => cell.alive ? 1 : 0)
    .reduce((memo, current) => memo + current, 0)
  cell.value = cellValue
  return cellValue
}

Board.prototype.cellValues = function () {
  this.cells
    .forEach(column => column
      .forEach(cell => {
        this.cellValue({x: cell.x, y: cell.y})
      }))
}

Board.prototype.allCells = function () {
  return this.cells.reduce((memo, currentColumn) => [...memo, ...currentColumn], [])
}

export {buildGrid}
export default Board
