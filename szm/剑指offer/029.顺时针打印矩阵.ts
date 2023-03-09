const directions = [
  [0, 1], // 右
  [1, 0], // 下
  [0, -1], // 左
  [-1, 0] // 上
]

function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0]) return []
  const total = matrix.length * matrix[0].length
  let visited = 1,
    row = 0,
    col = 0
  let top = 0,
    left = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1
  const res: number[] = [matrix[0][0]]
  let direction = 0
  function changeDirection() {
    switch (direction) {
      case 0:
        top++
        direction++
        break
      case 1:
        right--
        direction++
        break
      case 2:
        bottom--
        direction++
        break
      case 3:
        left++
        direction = 0
        break
    }
  }
  while (visited < total) {
    const newRow = row + directions[direction][0]
    const newCol = col + directions[direction][1]
    if (newRow > bottom || newRow < top || newCol > right || newCol < left)
      changeDirection()
    row += directions[direction][0]
    col += directions[direction][1]
    res.push(matrix[row][col])
    visited++
  }
  return res
}

spiralOrder([])
