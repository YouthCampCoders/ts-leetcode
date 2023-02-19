/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []

  function backTrack(path: number[], sum: number, startIndex: number) {
    if (path.length === k) {
      sum === n && res.push([...path])
    }

    for (let i = startIndex; i <= 9; i++) {
      path.push(i)
      sum += i
      backTrack(path, sum, i + 1)
      path.pop()
      sum -= i
    }
  }

  backTrack([], 0, 1)

  return res
}
// @lc code=end
