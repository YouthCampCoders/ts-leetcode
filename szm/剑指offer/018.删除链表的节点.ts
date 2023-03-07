class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head && head.val === val) return head.next
  let node = head
  while (node) {
    // 下一个节点是要找的节点
    if (node.next && node.next.val === val) {
      node.next = node.next.next
      return head
    }
    node = node.next
  }
  return head
}
