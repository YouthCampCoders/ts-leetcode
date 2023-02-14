/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity

  function dfs(root: TreeNode | null): number {
    if(!root) return 0

    // 左边能贡献的最大和
    let leftSum = dfs(root.left)
    leftSum = leftSum < 0 ? 0 : leftSum
    // 右边能贡献的最大和
    let rightSum = dfs(root.right)
    rightSum = rightSum < 0 ? 0 : rightSum

    // 更新以当前节点为根结点的路径和
    res = Math.max(res, root.val + leftSum + rightSum)

    // 返回当前节点能贡献的最大值
    return Math.max(leftSum, rightSum) + root.val
  }

  dfs(root)

  return res
};
// @lc code=end

