// https://leetcode.cn/problems/reverse-string/description/?languageTags=typescript
// https://www.programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let length: number = s.length;
    let left: number = 0;
    let right: number = length - 1;
    let tempStr: string;
    while(left < right){
        tempStr = s[left];
        s[left] = s[right];
        s[right] = tempStr;
        left++;
        right--;
    } 
};