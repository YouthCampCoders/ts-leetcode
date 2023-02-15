/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []

  function dfs(root: TreeNode | null, str: string) {
    if(!root) return

    str = str + '->' + root.val
    if(!root.left && !root.right) {
      res.push(str.slice(2))
    }

    dfs(root.left, str)
    dfs(root.right, str)
  }

  dfs(root, '')

  return res
};
// @lc code=end

