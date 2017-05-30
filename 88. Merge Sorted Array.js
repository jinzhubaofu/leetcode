/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    while (m + n) {

        if (m === 0) {
            nums1[m + n - 1] = nums2[--n];
        }
        else if (n === 0) {
            nums1[m + n - 1] = nums1[--m];
        }
        else if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        }
        else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }

    }

};

console.log(merge([1, 2, 3], 3, [4, 5, 6], 3));
console.log(merge([1, 3, 5], 3, [2, 4, 6], 3));
console.log(merge([1, 3, 4], 3, [2, 5, 6], 3));
