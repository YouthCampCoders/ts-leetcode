/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = []

  function backTrack(path: number[], startIndex: number) {
    if (path.length === k) res.push([...path])

    for (let i = startIndex; i <= n; i++) {
      path.push(i)
      backTrack(path, i + 1)
      path.pop()
    }
  }

  backTrack([], 1)

  return res
}
// @lc code=end
