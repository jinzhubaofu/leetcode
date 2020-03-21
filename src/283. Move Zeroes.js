/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    var zeroCount = 0;
    var len = nums.length;

    for (var i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        }
        else {
            nums[i - zeroCount] = nums[i];
        }
    }

    for (i = 0; i < zeroCount; i++) {
        nums[len - 1 - i] = 0;
    }

};

var a = [0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a);
