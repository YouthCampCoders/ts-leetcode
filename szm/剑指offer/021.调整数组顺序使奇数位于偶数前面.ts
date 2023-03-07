/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 */

function exchange(nums: number[]): number[] {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    while (nums[l] & 1 && l < nums.length - 1) {
      l++
    }
    while (!(nums[r] & 1) && r > 0) {
      r--
    }
    if (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
    }
  }
  return nums
}

exchange([2, 4, 6])
