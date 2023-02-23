/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length,
    n = matrix[0].length
  const res: number[] = []
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1

  while (true) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    top++
    if (top > bottom) break

    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--
    if (right < left) break

    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--
    if (bottom < top) break

    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++
    if (left > right) break
  }

  return res
}

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

// @lc code=end
