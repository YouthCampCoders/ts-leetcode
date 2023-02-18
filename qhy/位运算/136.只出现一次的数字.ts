/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let res = 0

  nums.forEach(item => {
    res ^= item
  })

  return res
};
// @lc code=end

