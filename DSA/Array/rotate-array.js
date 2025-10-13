// 189. Rotate Array

function reverse(arr, left, right) {
  while (left < right) {
    [arr[right], arr[left]] = [arr[left], arr[right]];
    left++;
    right--;
  }
}

function rotateArray(arr, k) {
  // Step 1
  // const newArray = []
  // for(let i = 0; i < arr.length; i++){
  //   newArray[(i+k) % arr.length] = arr[i]
  // }
  // for(let i = 0; i < newArray.length; i++){
  //   arr[i] = newArray[i]
  // }
  // return arr

  // arr.reverse();

  // Step 2

  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("rotateArray: ", rotateArray(array, k));
