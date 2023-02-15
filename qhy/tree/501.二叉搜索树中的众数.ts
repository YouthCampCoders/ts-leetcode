/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

function findMode(root: TreeNode | null): number[] {
  let res: number[] = []
  let pre: number = root.val
  let cnt = 0
  let maxCnt = 1

  function handle(num) {
    if (num === pre) {
      cnt++
    } else {
      cnt = 1
      pre = num
    }

    if (cnt === maxCnt) {
      res.push(num)
    } else if (cnt > maxCnt) {
      maxCnt = cnt
      res = [num]
    }
  }

  function travel(root: TreeNode | null) {
    if (!root) return

    travel(root.left)
    handle(root.val)
    travel(root.right)
  }

  travel(root)

  return res
}
// @lc code=end
