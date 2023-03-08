function MatchSubTree(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B) return true // B 顺利走完，全部匹配上
  if (!A) return false // B 还没走完 A 就没了，无法匹配
  if (B.val === A.val)
    return MatchSubTree(A.left, B.left) && MatchSubTree(A.right, B.right)
  return false
}

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B || !A) return false
  // A、B相等，判断是否是直接子树，若是则返回 true
  if (A.val === B.val && MatchSubTree(A, B)) return true
  // A、B不相等或相等但不是子树，继续查找
  else return isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
