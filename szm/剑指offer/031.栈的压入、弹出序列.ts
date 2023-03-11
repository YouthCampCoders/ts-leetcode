function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const s: number[] = []
  let s_top = 0,
    p_pushed = 0,
    p_popped = 0
  while (true) {
    if (p_popped === popped.length) return true
    // 如果栈顶是下一个出栈的元素
    if (s_top !== 0 && s[s_top - 1] === popped[p_popped]) {
      // 出栈并判断下一个出栈的元素
      s_top--
      p_popped++
      continue
    }
    // 栈顶不是下一个出栈的元素，持续入栈直至找到
    while (popped[p_popped] !== pushed[p_pushed]) {
      // 没有这个元素，返回 false
      if (p_pushed >= pushed.length) return false
      // 持续入栈
      s[s_top] = pushed[p_pushed]
      s_top++
      p_pushed++
    }
    // 栈顶是下一个出栈的元素，
    p_pushed++
    p_popped++
  }
}

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
