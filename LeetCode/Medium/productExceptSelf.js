// Leetcode Q. 238
const productExceptSelf = function (nums) {
  let result = [];
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(start);
    start *= nums[i];
  }

  let newStart = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= newStart;
    newStart *= nums[i];
  }
  return result;
};

nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
