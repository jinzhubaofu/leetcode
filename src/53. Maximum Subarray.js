/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let dp = [nums[0]];

  for (let i = 1, len = nums.length; i < len; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    }
    else {
      dp[i] = nums[i];
    }
    max = Math.max(max, dp[i]);
  }

  return max;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,-1]));
console.log(maxSubArray([-1,-2]));
