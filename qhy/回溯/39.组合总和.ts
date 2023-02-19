/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  function backTrack(path: number[], start: number, sum: number) {
    if (sum >= target) {
      sum === target && res.push([...path])
      return
    }

    for(let i = start; i < candidates.length; i++) {
      sum += candidates[i]
      path.push(candidates[i])
      backTrack(path, i, sum)
      sum -= candidates[i]
      path.pop()
    }
  }

  backTrack([], 0, 0)

  return res
}
// @lc code=end
