// Leetcode 53
const maxSubArray = function (nums) {
  let currentMax = nums[0];
  let maximum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maximum = Math.max(maximum, currentMax);
  }
  return maximum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
