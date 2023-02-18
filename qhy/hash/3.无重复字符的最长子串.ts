/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const window = new Map<string, boolean>()
  const length = s.length
  let left = 0,
    right = 0
  let max = 0

  for (right = 0; right < length; right++) {
    if (window.get(s[right])) {
      while (s[left] !== s[right]) {
        window.set(s[left], false)
        left++
      }
      left++
    } else {
      window.set(s[right], true)
    }

    max = Math.max(right - left + 1, max)
  }

  console.log(max)
  return max
}

lengthOfLongestSubstring('tmmzuxt')
// @lc code=end
