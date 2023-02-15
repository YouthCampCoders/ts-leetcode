/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
 */

import { nodeModuleNameResolver } from 'typescript'

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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root

  function getMax(root: TreeNode): TreeNode {
    while(root.right) {
      root = root.right
    }

    return root
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else {
    // 当前节点需要删除
    if (!root.left && !root.right) {
      return null
    } else if (!root.left || !root.right) {
      return root.left ? root.left : root.right
    } else {
      const node = getMax(root.left) // 候补节点
      root.left = deleteNode(root.left, node.val)  // 删除左边节点
      node.left = root.left
      node.right = root.right
      root = node
    }
  }

  return root
}
// @lc code=end
