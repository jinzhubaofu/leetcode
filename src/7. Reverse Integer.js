/**
 * @param {number} x
 * @return {number}
 */

const MAX_INTERGER = Math.pow(2, 31) - 1;

var reverse = function(x) {
  if (x === 0) {
    return x;
  }

  const absoluteValue = Math.abs(x);

  if (absoluteValue >= MAX_INTERGER) {
    return 0;
  }

  const str = String(absoluteValue);
  const result = str.split('').reverse().join('');

  if (result >= MAX_INTERGER) {
    return 0;
  }

  return Number(x >= 0 ? result : -result);
};

console.log(reverse(120));
console.log(reverse(123));
console.log(reverse(-1));
console.log(reverse(-0));
console.log(reverse(0));
console.log(reverse(-123));
console.log(reverse(1534236469));
