// Leetcode Q. 153 : Find Minimum in Rotated Sorted Array
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[right] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
