/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let sum = 0,
    res: number[][] = []

  dfs(root, sum, [])

  function dfs(root: TreeNode | null, sum: number, path: number[]) {
    if (!root) return 0
    sum += root.val // 存在，算上当前节点
    path.push(root.val)

    // 说明是叶子结点
    if (!root.left && !root.right) {
      if (sum === targetSum) res.push([...path])
    }

    dfs(root.left, sum, [...path])
    dfs(root.right, sum, [...path])
  }

  return res
}
// @lc code=end
