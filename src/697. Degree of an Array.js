/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

  if (!nums.length) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  let degree = 1;
  let degrees = {};
  let position = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    let item = nums[i];
    let d = ++degree[item];

    degree = Math.max(++degrees[item], degree);

    if (position[item]) {
      position[item].len = i - position.start;
    } else {
      position[item] = {
        len: 1,
        start: 0
      };
    }
  }

};
