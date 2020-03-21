/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  let n = nums[0];
  let result = 1;

  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] !== n) {
      nums[result++] = nums[i];
      n = nums[i];
    }
  }

  return result;
};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([1, 1]));
console.log(removeDuplicates([1, 2]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([1, 2, 3, 3]));
console.log(removeDuplicates([1, 1, 1, 2, 3, 3]));
