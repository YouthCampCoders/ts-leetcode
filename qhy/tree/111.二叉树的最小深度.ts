/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

// dfs
function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  if (!root.left && root.right) return minDepth(root.right) + 1

  if (root.left && !root.right) return minDepth(root.left) + 1

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

// key: 这题用bfs更简单，遇到叶子结点直接终止即可
// @lc code=end
