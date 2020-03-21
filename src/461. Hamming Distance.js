/**
 * @file 461. Hamming Distance
 * @author leon <ludafa@outlook.com>
 */

/**
 * 461. Hamming Distance
 *
 * @param {number} x x
 * @param {number} y y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    var n = x ^ y;
    var distance = 0;

    while (n) {
        n = n & (n - 1);
        distance++;
    }

    return distance;

};
