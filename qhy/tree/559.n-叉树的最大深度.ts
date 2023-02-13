/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

// class Node {
//   val: number
//   children: Node[]
//   constructor(val?: number, children?: Node[]) {
//     this.val = val === undefined ? 0 : val
//     this.children = children === undefined ? [] : children
//   }
// }

function maxDepth(root: Node | null): number {
    if (root === null) return 0
    let depth = 0

    for (let i = 0; i < root.children.length; i++) {
      const dep = maxDepth(root.children[i])
      depth = dep > depth ? dep : depth
    }

    return depth + 1
}
// @lc code=end
