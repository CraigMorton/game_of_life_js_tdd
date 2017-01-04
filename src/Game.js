const Game = function (board) {
  this.board = board
  this.turns = 0
}

Game.prototype.tickCell = function (cell) {
  if (cell.value == null) {
    this.board.cellValue({x: cell.x, y: cell.y})
  }
  let value = cell.value
  if (value >= 4) value = 4
  if (value <= 1) value = 1
  const isCellAlive = {
    1: false,
    2: cell.alive,
    3: true,
    4: false,
  }
  cell.alive = isCellAlive[value]
}

Game.prototype.tickCells = function () {
  this.board.allCells().forEach(cell => {
    this.tickCell(cell)
  })
}

export default Game
