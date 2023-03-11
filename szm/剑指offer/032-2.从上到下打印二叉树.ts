interface TreeNode {
  level: number
}
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  root.level = 0
  const queue: TreeNode[] = [root]
  const res: number[][] = [[]]
  while (queue.length > 0) {
    const node = queue.shift()!
    if (!res[node.level]) res[node.level] = [node.val]
    else res[node.level].push(node.val)
    if (node.left) {
      node.left.level = node.level + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.level = node.level + 1
      queue.push(node.right)
    }
  }
  return res
}
