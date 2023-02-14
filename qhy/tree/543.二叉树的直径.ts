/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0
  function dfs(root: TreeNode | null): number {
    if (!root) return 0

    const leftHeight = dfs(root.left)
    const rightHeight = dfs(root.right)

    // 每个节点都更新一下直径
    res = Math.max(res, leftHeight + rightHeight)

    // 返回高度
    return Math.max(leftHeight, rightHeight) + 1
  }

  dfs(root)

  return res
}
// @lc code=end
