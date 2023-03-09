function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const s: number[] = []
  let s_top = 0,
    p_pushed = 0,
    p_popped = 0
  while (true) {
    // 读取下一个出栈的值，当其不等于下一个入栈的值时，持续入栈直至找到
    while (popped[p_popped] !== pushed[p_pushed]) {
      // 没有这个元素，返回 false
      if (p_pushed >= pushed.length) return false
      s[s_top] = pushed[p_pushed]
      s_top++
      p_pushed++
    }
    // 找到了，出栈
    s_top--
    p_popped++
  }
}
