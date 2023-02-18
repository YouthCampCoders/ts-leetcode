/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
// function isPowerOfTwo(n: number): boolean {
//   if (n === 0) return false
//   if (n === 1) return true
//   if (n % 2) return false

//   // 一定是不为0的偶数
//   return isPowerOfTwo(n / 2)
// }

function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}
// @lc code=end
