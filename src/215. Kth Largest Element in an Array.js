/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  debugger;
  return search(nums, k, 0, nums.length);
};

var search = function(nums, k, begin, end) {
  if (begin >= end) {
    throw new Error(1111);
  }

  // 按降序分区
  var m = partition(nums, begin, end);

  if (m === k - 1) {
    return nums[m];
  }

  // 游标在第 k 大的左边，m 之前所有的数都比 k - 1 大，需要在 m 右边找，要把 0 - m 都去掉
  if (m < k - 1) {
    return search(nums, k - m, m + 1, end);
  }

  // 游戏在第 k 大的右边，m 之后的数都比 k - 1 小，需要在 m 左边前
  return search(nums, k, begin, m);
};

var partition = function(nums, begin, end) {
  var pivot = nums[begin];
  let i = begin;
  let j = end - 1;

  while (i < j) {
    while (i < j && nums[j] < pivot) {
      j--;
    }
    nums[i] = nums[j];
    while (i < j && nums[i] > pivot) {
      i++;
    }
    nums[j] = nums[i];
  }

  nums[i] = pivot;

  return i;
};

// console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([1, 2, 3], 1));
