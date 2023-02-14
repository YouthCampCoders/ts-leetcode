/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  const nums: string[] = []
  let res: number = 0

  function dfs(root: TreeNode | null, num: string) {
    if (!root) return // 当前节点不存在，直接返回

    num += root.val

    // 这是判断叶子结点的唯一条件
    if (!root.left && !root.right) {
      nums.push(num)
    }

    dfs(root.left, num)
    dfs(root.right, num)
  }

  dfs(root, '')

  nums.forEach((item) => {
    const num = parseInt(item)
    res += num
  })

  return res
}
// @lc code=end
