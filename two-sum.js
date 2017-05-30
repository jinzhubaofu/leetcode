/**
 *@param {number[]} nums
 *@param {number} target
 *@return {number[]}
 */
var twoSum = function(nums, target) {

    var neededValue = {};

    for (var i = 0, len = nums.length; i < len; ++i) {

        var a = nums[i];
        var b = target - a;

        if (b in neededValue) {
            return [neededValue[b] + 1, i + 1];
        }

        neededValue[a] = i;

    }

};
