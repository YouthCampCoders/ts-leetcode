// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/description/
// https://www.programmercarl.com/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
function replaceSpace(s: string): string {
  const strArr: string[] = Array.from(s);
  let count: number = 0;
  for(let i = 0; i < strArr.length;i++){
      if(strArr[i] === ' '){
          count++;
      }
  }
  let left: number = strArr.length - 1;
  let right: number = strArr.length + count * 2 - 1;
  while(left >= 0){
      if(strArr[left] === ' '){
          strArr[right--] = '0'
          strArr[right--] = '2'
          strArr[right--] = '%'
          left--;
      }else{
          strArr[right--] = strArr[left--];
      }
  }
  return strArr.join('')
};