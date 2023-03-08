function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  let pre = head,
    after = head
  let distance = 1
  while (after) {
    if (distance !== k) {
      // 一共就两个让我找倒数第三个的情况
      if (!after.next) return null
      after = after.next
      distance++
    } else {
      // 后一个指针走到头
      if (!after.next) return pre
      pre = pre.next!
      after = after.next
    }
  }
  // dead code，永远不可能的情况
  return null
}
