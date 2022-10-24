// Leetcode Q. 1
const twoSum = function (nums, target) {
  // Using Object (Hash table)
  let store = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (comp in store) {
      return [store[comp], i];
    }
    store[nums[i]] = i;
  }
  return [];

  // Using Map
  //   let map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     const comp = target - nums[i];
  //     if (map.has(comp)) {
  //       return [i, map.get(comp)];
  //     } else {
  //       map.set(nums[i], i);
  //     }
  //   }
  //   return [];
};

const arr = [3, 3];
const destination = 6;
console.log(twoSum(arr, destination));
