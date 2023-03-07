/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let newHead = new Node(),
    p1 = newHead,
    p4 = newHead
  let p2 = head,
    p3 = head

  let index = 0
  const map = new Map()

  // 复制next
  while (p2) {
    const node = new Node(p2.val)
    node.index = p2.index = index
    map.set(index++, node)
    p1.next = node

    p1 = p1.next
    p2 = p2.next
  }

  // 复制random
  p4 = p4.next
  while (p3) {
    const random = p3.random

    if (!random) {
      p4.random = null
    } else {
      const index = random.index
      const node = map.get(index)
      p4.random = node
    }

    p4 = p4.next
    p3 = p3.next
  }

  return newHead.next
}
