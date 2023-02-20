/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  const length = nums.length
  const passed = {}
  nums.sort((a, b) => a - b)

  function backTrack(path: number[]) {
    if (path.length === length) res.push([...path])

    for (let i = 0; i < nums.length; i++) {
      if (passed[i]) continue
      if (i >= 1 && nums[i - 1] === nums[i] && !passed[i - 1]) continue // 1 1 2 这种，第一个1走过了
      // 第二个1没必要走了，剪掉
      path.push(nums[i])
      passed[i] = true

      backTrack(path)

      path.pop()
      passed[i] = false
    }
  }

  backTrack([])

  return res
}
// @lc code=end
