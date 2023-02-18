/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let sum = 0,
    res = 0
  const memo: number[] = []

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    memo.push(sum)
  }

  // 固定最右侧
  for (let i = 0; i < nums.length; i++) {
    if (memo[i] === k) res++
    for (let j = i - 1; j >= 0; j--) {
      if (memo[i] - memo[j] === k) res++
    }
  }

  return res
}
// @lc code=end
