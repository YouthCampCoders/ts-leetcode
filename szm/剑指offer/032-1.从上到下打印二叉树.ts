function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return []
  const queue: TreeNode[] = [root]
  const res: number[] = []
  while (queue.length > 0) {
    const node = queue.shift()!
    res.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return res
}
