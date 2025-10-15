// Top K Frequent Elements

function topKElement(nums, k) {
  // Step 1
  // const freq = {}
  // for(const num of nums){
  //     freq[num] = (freq[num] || 0) + 1
  // }
  // return Object.keys(freq)
  // .sort((a, b) => freq[b] - freq[a])
  // .map(Number)
  // .slice(0, k)

  // Step 2
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (const num in freq) {
    buckets[freq[num]].push(Number(num));
  }

  const result = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}

const nums = [1, 2, 2, 3, 3, 3];
const k = 2;
// const nums = [7, 7];
// const k = 2;
console.log("topKElement: ", topKElement(nums, k));
