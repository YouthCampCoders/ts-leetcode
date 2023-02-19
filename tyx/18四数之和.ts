// https://leetcode.cn/problems/4sum/description/
// https://www.programmercarl.com/0018.%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a,b) => a - b);
  let first: number = 0,
      second: number,
      third: number,
      forth: number ;
  let length: number = nums.length;
  let res: number[][] = [];
  for(;first < length;first++){
      if(first > 0 && nums[first] === nums[first - 1]){
          continue;
      }
      for(second = first + 1; second < length; second++){
          if((second - first) > 1 && nums[second] === nums[second - 1]){
              continue;
          }
          third = second + 1;
          forth = length - 1;
          while(third < forth){
              let total: number = nums[first] + nums[second] + nums[third] + nums[forth];
              if(total === target){
                  res.push([nums[first], nums[second], nums[third], nums[forth]]);
                  third++;
                  forth--;
                  while(nums[third] === nums[third - 1]) third++;
                  while(nums[forth] === nums[forth + 1]) forth--;
              }else if(total < target){
                  third++;
              }else{
                  forth--;
              }
          }
      }
  }
  return res;
};
