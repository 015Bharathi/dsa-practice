// 27. Remove Element

function removeElement(nums, val) {
  // Step 1

  // const value = nums.filter((num) => num !== val);
  // let k = 0;
  // for (let i = 0; i < value.length; i++) {
  //   nums[i] = value[i];
  //   k++;
  // }
  // nums.length = k;
  // return k;

  // Step 2

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [3, 2, 2, 3];

const val = 3;
console.log("removeElement: ", removeElement(nums, val));
