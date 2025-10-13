// 88. Merge Sorted Array

function mergeSortedArray(nums1, m, nums2, n) {
  //step 1
  // for(let i = 0; i < nums2.length; i++){
  //   nums1[i +m] = nums2[i]
  // }
  // return nums1.sort((a,b) => a - b)

  // step 2
  // const output = []
  // let first = 0
  // let second = 0
  // while(first < m){
  //   if(nums1[first] <= nums2[second]){
  //     output.push(nums1[first])
  //     first++
  //   }else{
  //     output.push(nums2[second])
  //     second++
  //   }
  // }
  // while(first < m){
  //   output.push(nums1[first])
  //   first++
  // }
  // while(second < n) {
  //   output.push(nums2[second])
  //   second++
  // }
  // for(let i = 0; i< output.length; i++){
  //   nums1[i] = output[i]
  // }
  // return nums1

  // step 3

  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      first--;
    } else {
      nums1[i] = sVal;
      i--;
      second--;
    }
  }
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

console.log("mergeSortedArray: ", mergeSortedArray(nums1, 3, nums2, 3));
