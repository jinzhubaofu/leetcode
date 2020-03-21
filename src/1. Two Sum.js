/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var map = {};

    for (var i = 0, len = nums.length; i < len; ++i) {

        var a = nums[i];
        var b = target - a;

        if (b in map) {
            return [map[b], i];
        }

        map[a] = i;

    }

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
