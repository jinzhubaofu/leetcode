/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length;
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += nums[i];
    }
    return len * (len + 1) / 2 - sum;
};

console.log(missingNumber([0, 1, 2, 4]));
