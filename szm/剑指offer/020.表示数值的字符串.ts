function isNumber(s: string) {
  s = s.trim() // 去除首尾空格
  if (!s) return false

  let numFlag = false
  let dotFlag = false
  let eFlag = false

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    switch (ch) {
      case '.':
        // 没出现过小数点且没出现过 e
        if (!dotFlag && !eFlag) {
          dotFlag = true
          break
        }
        return false
      case '+':
      case '-':
        // 第一位或是 e 后第一位
        if (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E') break
        return false
      case 'e':
      case 'E':
        // 没出现过e，并且前面有数字
        if (!eFlag && numFlag) {
          eFlag = true
          numFlag = false
          break
        }
        return false
      default:
        if (ch >= '0' && ch <= '9') {
          numFlag = true
          break
        }
        return false
    }
  }
  return numFlag
}
