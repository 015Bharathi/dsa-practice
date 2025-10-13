// 169. Majority Element

// Majority Element Formula => element with count > n/2

function majorityElement(nums) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > Math.floor(nums.length / 2)) {
      return num;
    }
  }

  return null;
}

const element = [3, 2, 3];
// const element = [2, 2, 1, 1, 1, 2, 2];
console.log("majorityElement: ", majorityElement(element));
