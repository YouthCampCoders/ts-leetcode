// https://leetcode.cn/problems/remove-element/description/
// https://www.programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html
function removeElement(nums: number[], val: number): number {
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === val){
          nums.splice(i,1)
          i--;
      }
  }
  return nums.length;
};