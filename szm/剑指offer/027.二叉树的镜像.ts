function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const temp = root?.left
  root.left = mirrorTree(root?.right)
  root.right = mirrorTree(temp)
  return root
}
