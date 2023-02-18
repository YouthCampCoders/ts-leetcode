/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  let res = 0

  const n = nums.length
  res ^= n

  nums.forEach((item, index) => {
    res ^= item
    res ^= index
  })

  return res
};
// @lc code=end

