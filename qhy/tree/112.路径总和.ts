/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let sum = 0,
    res = false

  dfs(root, sum)

  function dfs(root: TreeNode | null, sum: number) {
    if (!root) return 0
    sum += root.val // 存在，算上当前节点

    // 说明是叶子结点
    if (!root.left && !root.right) {
      if (sum === targetSum) res = true
    }

    dfs(root.left, sum)
    dfs(root.right, sum)
  }

  return res
}
// @lc code=end
