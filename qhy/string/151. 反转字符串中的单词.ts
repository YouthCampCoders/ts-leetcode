function reverseWords(s: string): string {
  s = s.trim()

  const strs = s.split(/\s+/).reverse()

  return strs.join(' ')
}

console.log(reverseWords('the sky is blue'));
