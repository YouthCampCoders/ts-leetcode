function findRepeatNumber(nums: number[]): number {
  const map = new Map<number, boolean>()
  let res: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      res = nums[i]
      break
    }

    map.set(nums[i], true)
  }

  console.log(res);
  return res
}

findRepeatNumber([3, 4, 2, 1, 1, 0])
