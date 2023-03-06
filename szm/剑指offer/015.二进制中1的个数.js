/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let num = 0
  while (n !== 0) {
    if (n & 1) num++
    n = n >>> 1
  }
  return num
}

hammingWeight(4294967293)
