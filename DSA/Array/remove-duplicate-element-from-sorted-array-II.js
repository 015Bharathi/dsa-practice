// 80. Remove Duplicate Element From Sorted Array

function removeDuplicateElementArray(arr) {
  let k = 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[k - 2]) {
      arr[k] = arr[i];
      k++;
    }
  }
  console.log("arr1: ", arr);

  return k;
}

const arr1 = [1, 1, 1, 2, 2, 3];
// const arr1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log("removeDuplicateElementArray: ", removeDuplicateElementArray(arr1));
