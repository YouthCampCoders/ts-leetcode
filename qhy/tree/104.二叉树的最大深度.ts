/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function maxDepth(root: TreeNode | null): number {
  let res = 0

  if (!root) return res

  const queue: Array<TreeNode | null> = []
  queue.push(root)

  while (queue.length) {
    const length = queue.length // 提前记录好长度

    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      node?.left && queue.push(node.left)
      node?.right && queue.push(node.right)
    }

    res++
  }

  return res
}
// @lc code=end
