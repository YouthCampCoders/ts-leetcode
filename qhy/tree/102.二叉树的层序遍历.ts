/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

// !![] 和 !!{} 都是true
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let queue: Array<TreeNode | null> = [],
    res: number[][] = []

  queue.push(root)

  while (queue.length) {
    let nextLevel: Array<TreeNode | null> = []
    const nums: number[] = []

    while (queue.length) {
      const node = queue.shift()
      node && nums.push(node!.val)

      node?.left && nextLevel.push(node?.left)
      node?.right && nextLevel.push(node?.right)
    }

    res.push(nums)
    queue = nextLevel
  }

  return res
}
// @lc code=end
