/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const left = getLeftBound(nums, target)
  const right = getRightBound(nums, target)

  return [left, right]
}

function getLeftBound(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      right = mid - 1
    }
  }

  if (left >= nums.length || nums[left] !== target) left = -1

  return left
}

function getRightBound(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  if (right < 0 || nums[right] !== target) right = -1

  return right
}
// @lc code=end
