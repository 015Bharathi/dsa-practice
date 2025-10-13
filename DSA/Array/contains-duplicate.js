// Contains Duplicate

function hasDuplicate(nums) {
  // Step 1
  // const store = []
  // for(const num of nums){
  //     if(store.includes(num)){
  //         return true
  //     }
  //     store.push(num)
  // }
  // return false
  // Step 2
  //   const store = {};
  //   for (const num of nums) {
  //     // if (num in store) {
  //     //   return true;
  //     // }
  //     if (store.hasOwnProperty(num)) {
  //       return true;
  //     }
  //     store[num] = true;
  //   }
  //   return false;

  // Step 3
  const store = new Set();
  for (const num of nums) {
    if (store.has(num)) {
      return true;
    }
    store.add(num);
  }
  return false;
}

const nums = [1, 2, 3, 3];
// const nums = [1, 2, 3, 4];
console.log("hasDuplicate: ", hasDuplicate(nums));
