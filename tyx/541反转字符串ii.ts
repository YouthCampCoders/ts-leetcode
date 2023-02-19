// https://leetcode.cn/problems/reverse-string-ii/description/?languageTags=typescript
// https://www.programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
function reverseStr(s: string, k: number): string {
  let left: number,
      right: number;
  let temp: string;
  let arr: string[] = s.split('');
  for(let i = 0; i < arr.length; i += 2*k){
      left = i;
      right = (i + k - 1) >= arr.length ? arr.length - 1 : i + k - 1;
      while(left < right){
          temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
      } 
  }
  return arr.join('')
};