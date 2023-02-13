/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

// export class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function isBalanced(root: TreeNode | null): boolean {
  return getDepth(root) !== -1

  function getDepth(root: TreeNode | null): number {
    if (!root) return 0 // 当root为Null

    const left = getDepth(root.left)
    const right = getDepth(root.right)
    if (right === -1 || left === -1) return -1

    // 一旦发现不平衡，马上向上传递 直接结束
    if (Math.abs(left - right) > 1) return -1

    // 兜底，安全着陆
    return Math.max(left, right) + 1
  }
}
// @lc code=end
