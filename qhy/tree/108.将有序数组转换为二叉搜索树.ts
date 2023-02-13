/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 思路很简单，二分
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function getTree(start: number, end: number): TreeNode | null {
    if (start > end) return null
    if (start === end) return new TreeNode(nums[start])

    const middle = Math.floor((start + end) / 2) // 中间索引

    const root = new TreeNode(nums[middle])
    root.left = getTree(start, middle - 1)
    root.right = getTree(middle + 1, end)

    return root
  }

  return getTree(0, nums.length - 1)
}

sortedArrayToBST([-10, -3, 0, 5, 9])
// @lc code=end
