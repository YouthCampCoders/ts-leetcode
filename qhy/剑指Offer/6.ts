/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reversePrint(head: ListNode | null): number[] {
  const res: number[] = []

  function travel(head: ListNode | null) {
    if(!head) return

    travel(head.next)
    res.push(head.val)
  }

  travel(head)

  return res
}
