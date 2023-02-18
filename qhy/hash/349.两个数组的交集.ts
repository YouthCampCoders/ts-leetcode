/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map()
  const set = new Set<number>()

  nums1.forEach((item) => {
    if (!map.has(item)) map.set(item, true)
  })

  nums2.forEach(item => {
    if(map.has(item)) set.add(item)
  })

  return [...set]
}
// @lc code=end
