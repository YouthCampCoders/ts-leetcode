/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  const travel = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if ((p && !q) || (q && !p) || p?.val !== q?.val) return false
    if (!p && !q) return true

    const res1 = travel(p!.left, q!.right)
    const res2 = travel(p!.right, q!.left)

    return res1 && res2
  }

  return travel(root!.left, root!.right)
}
// @lc code=end
