// LeetCode 152
const maxProdSubArray = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let prodMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
    curMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);

    prevMax = curMax;
    prevMin = curMin;

    prodMax = Math.max(prodMax, curMax);
  }
  return prodMax;

  //   let result = Math.max(...nums);
  //   let curMin = 1;
  //   let curMax = 1;
  //   let prevMax = 1;
  //   for (const num of nums) {
  //     prevMax = curMax * num;
  //     curMax = Math.max(num, prevMax, curMin * num);
  //     curMin = Math.min(num, prevMax, curMin * num);

  //     result = Math.max(result, curMax);
  //   }
  //   return result;
};

const nums = [-4, -3, -2];
console.log(maxProdSubArray(nums));
