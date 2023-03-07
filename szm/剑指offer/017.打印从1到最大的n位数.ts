/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

/**
 * 考虑大数问题，以 n = 20 为例，那么最终输出的结果将来到 100000000000000000000 级，远超 js(Number.MAX_SAFE_INTEGER=9007199254740991) 以及大多主流引擎所能容下的数字类型长度
 */

function printNumbers(n: number): string[] {
  const res: string[] = []
  const num: string[] = []

  function dfs(x: number, s: number) {
    // 达到了指定位数
    if (x === s) {
      res.push(num.join(''))
      return
    }
    // 个位从 1 开始
    for (let i = x === 0 ? 1 : 0; i <= 9; i++) {
      num[x] = String(i)
      dfs(x + 1, s)
    }
  }
  // 依次生成 i 位的数字
  for (let i = 1; i <= n; i++) {
    dfs(0, i)
    num.length = 0
  }
  return res
}

printNumbers(7)
