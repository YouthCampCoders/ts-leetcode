function verifyPostorder(postorder: number[]): boolean {
  if (postorder.length <= 1) return true
  function recur(l: number, r: number): boolean {
    if (l >= r) return true
    let divider = l
    // 从左往右找第一个大于根节点的值
    while (divider < r && postorder[divider] < postorder[r]) divider++
    // 那么此时后面的值需要都大于根节点的值
    for (let i = divider; i < r; i++) {
      if (postorder[i] < postorder[r]) return false
    }
    return recur(l, divider - 1) && recur(divider, r - 1)
  }
  return recur(0, postorder.length - 1)
}
