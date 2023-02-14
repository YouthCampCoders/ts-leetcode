/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// 层序遍历
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const res: number[] = []
  const queue: Array<TreeNode | null> = []
  queue.push(root)
  let node: TreeNode | null = null

  while (queue.length) {
    // 注意提前记录好长度
    const length = queue.length

    for (let i = 0; i < length; i++) {
      node = queue.shift() as TreeNode | null
      node?.left && queue.push(node.left)
      node?.right && queue.push(node.right)
      console.log(node?.val)
    }

    res.push(node!.val)
  }

  return res
}
// @lc code=end
