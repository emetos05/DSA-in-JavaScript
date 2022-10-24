const containsDuplicate = function (nums) {
  // using hash table
  //   let store = {};
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] in store) {
  //       return true;
  //     }
  //     store[nums[i]] = i;
  //   }
  //   return false;

  // using set
  let set = new Set(nums);
  return set.size !== nums.length;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
