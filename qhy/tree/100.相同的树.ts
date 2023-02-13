/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p && !q) || (!p && q)) return false
  if (!p && !q) return true

  if (p?.val !== q?.val) return false

  const res1 = isSameTree(p!.left, q!.left)
  const res2 = isSameTree(p!.right, q!.right)

  return res1 && res2;
}
// @lc code=end
