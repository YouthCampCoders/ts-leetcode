class MinStack {
  private _stack: number[]
  private _top: number
  private _minStack: number[]
  constructor() {
    this._stack = [] as number[]
    this._top = -1
    this._minStack = []
  }

  push(x: number): void {
    this._top++
    this._stack[this._top] = x
    if (this._top >= 1)
      this._minStack[this._top] =
        x < this._minStack[this._top - 1] ? x : this._minStack[this._top - 1]
    else this._minStack[this._top] = x
  }

  pop(): void {
    this._top--
  }

  top(): number {
    return this._stack[this._top]
  }

  min(): number {
    return this._minStack[this._top]
  }
}

const st = new MinStack()
st.push(-2)
st.push(0)
st.push(-3)
st.min()
st.pop()
st.top()
st.min()
