// 26. Remove Duplicate Element From Sorted Array

function removeDuplicateElement(arr) {
  // Step 1
  // const output = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (!output.includes(arr[i])) {
  //     output.push(arr[i])
  //   }
  // }
  // console.log("arr: ", output);

  // Step 2

  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  arr.length = k;
  return k;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const arr = [1, 1, 2];

console.log("removeDuplicateElement: ", removeDuplicateElement(arr));
