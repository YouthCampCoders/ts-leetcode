/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 */

// 洗牌算法

// @lc code=start
function advantageCount(nums1: number[], nums2: number[]): number[] {
  const length = nums1.length
  nums1.sort((a, b) => a - b) // 升序排列
  const res: number[] = []

  for (let i = 0; i < length; i++) {
    // 当前数字是 nums2[i]
    const num = getLargeNumber(nums2[i])
    res.push(num)
  }

  function getLargeNumber(num) {
    let res = nums1[0]
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] > num) {
        res = nums1[i]
        nums1.splice(i, 1)
        return res
      }
    }

    nums1.shift()
    return res
  }

  return res
}
// @lc code=end
