/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0

  function dfs(roor: TreeNode | null, sum: number): number {
    let res = 0

    if (!roor) return 0
    sum += roor.val
    if (sum === targetSum) {
      res += 1
    }

    res += dfs(roor.left, sum)
    res += dfs(roor.right, sum)

    return res
  }

  const curSum = dfs(root, 0) // 以当前节点为根结点

  const leftSum = pathSum(root.left, targetSum) // 以当前节点的左节点为根结点
  const rightSum = pathSum(root.right, targetSum) // 以当前节点的右节点为根结点

  return curSum + leftSum + rightSum
}
// @lc code=end

// TODO: 前缀和
