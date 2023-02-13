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

// bfs
// function maxDepth(root: TreeNode | null): number {
//   let res = 0

//   if (!root) return res

//   const queue: Array<TreeNode | null> = []
//   queue.push(root)

//   while (queue.length) {
//     const length = queue.length // 提前记录好长度

//     for (let i = 0; i < length; i++) {
//       const node = queue.shift()
//       node?.left && queue.push(node.left)
//       node?.right && queue.push(node.right)
//     }

//     res++
//   }

//   return res
// }

// dfs 后续遍历
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
  const left = maxDepth(root.left) // 左
  const right = maxDepth(root.right) // 右
  const depth = Math.max(left, right) + 1 // 中

  return depth
}

// @lc code=end
