const randomBoolean = function () {
  const randomNum = Math.floor(Math.random() * 2)
  return (randomNum === 1)
}

const Cell = function ({x, y, alive}) {
  this.x = x
  this.y = y
  this.alive = (alive != null) ? alive : randomBoolean()
  this.value = null
}

export default Cell
