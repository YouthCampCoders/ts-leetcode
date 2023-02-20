/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const length = nums.length
  const passed = {}

  function backTrack(path: number[]) {
    if (path.length === length) res.push([...path])

    for (let i = 0; i < nums.length; i++) {
      const number = nums[i]

      if (passed[number]) continue
      else {
        path.push(number)
        passed[number] = true
      }

      backTrack(path)
      path.pop()
      passed[number] = false
    }
  }

  backTrack([])

  return res
}
// @lc code=end
