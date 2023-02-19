/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const letterMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
function letterCombinations(digits: string): string[] {
  const res: string[] = []
  const k = digits.length
  if (k === 0) return res

  function backTrack(str: string, index: number) {
    if (str.length === k) {
      res.push(str)
      return
    }

    const num = digits[index]
    const letters = letterMap[num]
    for (let i = 0; i < letters.length; i++) {
      str += letters[i]
      backTrack(str, index + 1)
      str = str.slice(0, str.length - 1)
    }
  }

  backTrack('', 0)

  return res
}

letterCombinations('23')
// @lc code=end
