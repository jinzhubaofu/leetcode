/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    var map = {};

    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = map[nums[i]] ? 1 : map[nums[i]] + 1;
    }

};
