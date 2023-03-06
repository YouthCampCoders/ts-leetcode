/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 */

function myPow(x: number, n: number): number {
  if (x === 0) return 0
  if (n === 0) return 1
  if (n < 0) {
    n = -n
    x = 1 / x
  }
  let res = 1
  while (n > 0) {
    if (n & 1) res *= x
    x *= x
    n >>>= 1
  }
  return res
}

myPow(2.0, -2147483648)
