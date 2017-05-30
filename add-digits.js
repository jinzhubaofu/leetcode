/**
 * 这个题目是需要计算规律的题
 *
 * 这个叫digit root
 *
 * 首先结果一定是0-9之间的数，并且只当输入是0时结果才是0，其他输入的结果是1-9；
 * 其次 数字出间的位置并不影响到dr计算的结果
 * 最后 这个规律就在于mod 9：dr(123) = dr(1 * 10 ^ 2 + 2 * 10 ^ 1 + 3 * 10 ^ 1) 同余 (1 + 2 + 3) mod 9
 * 就是原数字模9和把各位数字加起来模9的余数是一样的。考虑到余数为0的情况，当余数为0时，dr的结果恰好是9；
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if (num === 0) {
        return num;
    }

    var mod = num % 9;

    if (mod === 0) {
        return 9;
    }

    return mod;

};
