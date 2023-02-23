/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const matrix = new Array(n).fill(0).map(() => new Array(n))

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1,
    index = 1

  while (true) {
    for (let i = left; i <= right; i++) matrix[top][i] = index++
    top++
    if (index === n * n + 1) break

    for (let i = top; i <= bottom; i++) matrix[i][right] = index++
    right--
    if (index === n * n + 1) break

    for (let i = right; i >= left; i--) matrix[bottom][i] = index++
    bottom--
    if (index === n * n + 1) break

    for (let i = bottom; i >= top; i--) matrix[i][left] = index++
    left++
    if (index === n * n + 1) break
  }

  return matrix
}

generateMatrix(3)
// @lc code=end
