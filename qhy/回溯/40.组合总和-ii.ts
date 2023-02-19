/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  candidates.sort((a, b) => a - b)

  function backTrack(path: number[], start: number, sum: number) {
    if (sum >= target) {
      sum === target && res.push([...path])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === candidates[i - 1] && i > start) continue
      sum += candidates[i]
      path.push(candidates[i])
      backTrack(path, i + 1, sum)
      sum -= candidates[i]
      path.pop()
    }
  }

  backTrack([], 0, 0)

  return res
}
// @lc code=end
