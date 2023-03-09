function judge(p1: TreeNode | null, p2: TreeNode | null): boolean {
  // p1 p2 都不存在
  if (!p1 && !p2) return true
  // p1 p2 都存在且值相等
  if (p1 && p2 && p1.val === p2.val)
    return judge(p1.left, p2.right) && judge(p1.right, p2.left)
  return false
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  return judge(root.left, root.right)
}
