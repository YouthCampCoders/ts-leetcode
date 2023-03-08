function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2
  if (!l2) return l1
  let head: ListNode | null = null
  let p: ListNode | null = null
  while (l1 && l2) {
    let node: ListNode | null = null
    if (l1.val <= l2.val) {
      node = l1
      l1 = l1.next
    } else {
      node = l2
      l2 = l2.next
    }
    if (!head) {
      head = node
      p = head
    }
    p!.next = node
    p = p!.next
  }
  if (!l1) p!.next = l2
  if (!l2) p!.next = l1
  return head
}
