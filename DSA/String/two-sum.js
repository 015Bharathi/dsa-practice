// Two Sum

function twoSum(nums, target) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in store) {
      return [store[complement], i];
    }
    store[nums[i]] = i;
  }
  return [];
}

// const nums = [3, 4, 5, 6]
// const target = 7
const nums = [4, 5, 6];
const target = 10;
console.log("twoSum: ", twoSum(nums, target));
