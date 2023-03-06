/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */

/**
 * dp解法，实际上由于存在数学证明割3最大，所以不用这么麻烦
 */

function findMax(n: number, maximums: number[]): number {
  if (maximums[n] !== -1) return maximums[n]
  let max = -1
  // 节约运行时间
  const half = Math.floor(n / 2)
  for (let i = 1; i <= half; i++) {
    const res1 = i * (n - i)
    const res2 = i * findMax(n - i, maximums)
    const maxRes = res1 > res2 ? res1 : res2
    max = max > maxRes ? max : maxRes
  }
  maximums[n] = max
  return max
}

function cuttingRope(n: number): number {
  const maximums: number[] = new Array(n + 1).fill(-1)
  maximums[1] = 1
  const res = findMax(n, maximums)
  return res
}

cuttingRope(120)
